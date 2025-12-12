import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Contact form message:", data);

  if (!supabase) {
    console.warn("Supabase not configured — skipping DB insert");
    return NextResponse.json({ success: true });
  }

  try {
    const payload = {
      email: data.email || null,
      meta: data,
      submitted_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("emails").insert(payload);
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
