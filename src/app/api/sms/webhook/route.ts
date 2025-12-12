import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { normalizePhone } from "@/lib/normalizePhone";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}));

  /**
   * Expected shapes (examples):
   * Twilio webhook: { From: "+12065551234", Body: "STOP" }
   * Generic: { provider: 'twilio', phone: '+1206...', event: 'opt_out', payload: { ... } }
   */

  if (!supabase) {
    console.warn("Supabase not configured — skipping webhook handling");
    return NextResponse.json({ success: true });
  }

  // Normalize phone from common fields
  const rawPhone = data.From || data.from || data.phone || data.Phone || null;
  const phone_e164 = normalizePhone(rawPhone);
  const event = data.event || (typeof data.Body === 'string' && /stop|unsubscribe|cancel/i.test(data.Body) ? 'opt_out' : null) || null;

  if (!phone_e164) {
    console.warn('Webhook received without parsable phone:', rawPhone);
    return NextResponse.json({ success: false, error: 'no-phone' }, { status: 400 });
  }

  if (event === 'opt_out') {
    try {
      const updates: any = {
        opted_out: true,
        opt_out_at: new Date().toISOString(),
        provider_id: data.MessageSid || data.MessageId || data.provider_id || null,
        meta: { ...(data || {}) },
        updated_at: new Date().toISOString(),
      };

      // Update by phone_e164 if available, otherwise by raw phone
      const matchCol = phone_e164 ? 'phone_e164' : 'phone';
      const matchVal = phone_e164 || rawPhone;

      const { error } = await supabase.from('sms_opt_ins').update(updates).eq(matchCol, matchVal);
      if (error) {
        console.error('Failed to mark opt-out:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  }

  // If not an opt-out event, just acknowledge
  return NextResponse.json({ success: true, handled: false });
}
