export function normalizePhone(raw: string | null | undefined): string | null {
  if (!raw) return null;
  let s = String(raw).trim();

  // Remove surrounding quotes
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }

  // Remove all non-digit and non-plus characters
  s = s.replace(/[^0-9+]/g, "");

  // If it already starts with + and has digits, return as-is
  if (s.startsWith("+") && /\+\d{7,15}$/.test(s)) return s;

  // Strip leading zeros
  s = s.replace(/^0+/, "");

  // If 10 digits, assume US and prefix +1
  const digits = s.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length >= 7 && digits.length <= 15) return `+${digits}`;

  // fallback: return raw cleaned digits or null
  return digits ? `+${digits}` : null;
}
