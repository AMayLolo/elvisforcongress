import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

function normalizePhone(raw: string | null | undefined) {
  if (!raw) return null;
  // Basic normalization: strip non-digits
  const digits = raw.replace(/[^0-9]/g, "");
  if (digits.length === 10) return `+1${digits}`; // assume US if 10 digits
  if (digits.length > 10 && digits[0] === "1") return `+${digits}`;
  if (digits.startsWith("+")) return digits;
  // fallback to raw cleaned number
  return digits || null;
}

export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}));

  if (!supabase) {
    console.warn("Supabase not configured — skipping SMS insert");
    return NextResponse.json({ success: true });
  }

  const phoneRaw = data.phone || data.phoneNumber || null;
  const phone_e164 = normalizePhone(phoneRaw);

  const payload: any = {
    phone: phoneRaw,
    phone_e164,
    consent: data.consent !== undefined ? !!data.consent : true,
    consent_text: data.consentText || null,
    source: data.source || null,
    utm: data.utm || null,
    ip: data.ip || null,
    meta: data.meta || data,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  try {
    // upsert on phone to avoid duplicates; requires 'phone' unique index
    const { error } = await supabase.from("sms_opt_ins").upsert(payload, { onConflict: "phone" });
    if (error) {
      console.error("Supabase SMS upsert error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
