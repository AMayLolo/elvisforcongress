import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { normalizePhone } from "@/lib/normalizePhone";
import { notifyStaff } from "@/lib/notify";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Volunteer submission:", data);

  if (!supabase) {
    console.warn("Supabase not configured — skipping DB insert");
    // best-effort notification to staff (no DB available)
    try {
      await notifyStaff({
        subject: `New volunteer: ${data.firstName || ''} ${data.lastName || ''}`,
        text: `New volunteer submission:\n${JSON.stringify(data, null, 2)}`,
      });
    } catch (e) {
      console.error('notifyStaff failed for volunteer (no DB):', e);
    }

    return NextResponse.json({ success: true });
  }

  try {
    const payload = {
      first_name: data.firstName || null,
      last_name: data.lastName || null,
      email: data.email || null,
      phone: data.phone || null,
      message: data.message || null,
      consent: !!data.consent,
      submitted_at: new Date().toISOString(),
      meta: data,
    };

    const { error } = await supabase.from("volunteers").insert(payload);
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    // If a phone number was provided, also upsert into sms_opt_ins for SMS opt-in tracking
    try {
      const phoneRaw = data.phone || null;
      const phone_e164 = normalizePhone(phoneRaw);
      if (phoneRaw) {
        const smsPayload: any = {
          phone: phoneRaw,
          phone_e164,
          consent: !!data.consent,
          consent_text: data.consentText || null,
          source: data.source || "volunteer_form",
          utm: data.utm || null,
          meta: data,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error: smsError } = await supabase.from("sms_opt_ins").upsert(smsPayload, { onConflict: "phone" });
        if (smsError) console.error("Supabase sms_opt_ins upsert error:", smsError);
      }
    } catch (e) {
      console.error("sms upsert failed:", e);
    }

    // best-effort notification to staff
    try {
      await notifyStaff({
        subject: `New volunteer: ${payload.first_name || ''} ${payload.last_name || ''}`,
        text: `New volunteer submission:\n${JSON.stringify(payload, null, 2)}`,
      });
    } catch (e) {
      console.error('notifyStaff failed for volunteer:', e);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
