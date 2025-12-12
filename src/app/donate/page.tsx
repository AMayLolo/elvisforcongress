function WinRedPixel() {
  const _rawWinRed = process.env.NEXT_PUBLIC_WINRED_URL || "";
  const _normalizeWinRed = (s: string) => {
    if (!s) return s;
    let v = s.replace(/^['\"]+|['\"]+$/g, "");
    v = v.replace(/^http:\/\//i, "https://");
    v = v.replace(/^https:\/\/www\.secure\.winred\.com/i, "https://secure.winred.com");
    return v;
  };
  const winred = _normalizeWinRed(_rawWinRed) || "";
  if (!winred) return null;
  return (
    <img
      src="https://secure.winred.com/pixel.gif"
      alt=""
      style={{ display: "none" }}
    />
  );
}

import ExternalLeaveConfirm from "@/components/ExternalLeaveConfirm";
import PageHeading from "@/components/PageHeading";

export const metadata = {
  title: "Donate | Elvis for Congress",
};

export default function DonatePage() {
  const _rawWinRed = process.env.NEXT_PUBLIC_WINRED_URL || "";
  const _normalizeWinRed = (s: string) => {
    if (!s) return s;
    let v = s.replace(/^['\"]+|['\"]+$/g, "");
    v = v.replace(/^http:\/\//i, "https://");
    v = v.replace(/^https:\/\/www\.secure\.winred\.com/i, "https://secure.winred.com");
    return v;
  };
  const winred = _normalizeWinRed(_rawWinRed) || "https://secure.winred.com/elvis-for-congress/donate-today";
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <WinRedPixel />

  <PageHeading>Donate</PageHeading>

      <p className="text-lg dark:text-gray-300">
        Your contribution gives our campaign the resources we need to reach
        voters, share our message, and build a movement that wins.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Online donation card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-sky-900 dark:text-sky-100 mb-3">Donate Online</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Secure online donations are processed by WinRed.
          </p>
          {winred ? (
            <ExternalLeaveConfirm
              href={winred}
              utm={{ utm_source: "site", utm_medium: "donate", utm_campaign: "winred" }}
              className="inline-block px-6 py-3 bg-red-700 text-white rounded-md font-semibold hover:bg-red-800"
            >
              Donate via WinRed
            </ExternalLeaveConfirm>
          ) : (
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-red-700 text-white rounded-md font-semibold hover:bg-red-800"
            >
              Contact Us
            </a>
          )}
        </div>

        {/* Mail donation card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-sky-900 dark:text-sky-100 mb-3">Donate by Mail</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            If you prefer to donate by mail, please send checks to the address below.
          </p>

          <address className="not-italic whitespace-pre-line text-gray-700 dark:text-gray-300">
            Elvis for Congress
            {"\n"}P.O. Box 1272
            {"\n"}Cedar Park, TX 78630
          </address>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Please make checks payable to <span className="font-semibold">Elvis for Congress</span> and note "Donation" in the memo.
          </p>
        </div>
      </div>
    </div>
  );
}
