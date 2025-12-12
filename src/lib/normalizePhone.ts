import { parsePhoneNumberFromString } from "libphonenumber-js";

export function normalizePhone(raw: string | null | undefined): string | null {
  if (!raw) return null;
  let s = String(raw).trim();

  // Remove surrounding quotes
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }

  // Quick cleanup
  s = s.replace(/[()\s.-]/g, "");

  // Try libphonenumber-js parsing (best effort). If it parses, return E.164.
  try {
    const parsed = parsePhoneNumberFromString(s, "US");
    if (parsed && parsed.isValid()) {
      return parsed.number; // E.164
    }
  } catch (e) {
    // fallthrough to fallback logic
  }

  // Fallback: strip non-digits, assume US for 10-digit numbers
  const digits = s.replace(/[^0-9]/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length >= 7 && digits.length <= 15) return `+${digits}`;

  return null;
}
