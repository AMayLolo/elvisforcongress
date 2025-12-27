import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";

export const metadata = {
  title: "Elvis for Congress — Info Card",
  description: "Quick info, contact, and social links for Elvis for Congress.",
  robots: { index: false, follow: false },
};

export default function CardPage() {
  const winredUrl =
    process.env.NEXT_PUBLIC_WINRED_URL ||
    "https://secure.winred.com/elvis-for-congress/donate-hd";

  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "campaign@elvisforcongress.com";
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "(737) 415-0809)";

  const twitter = process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/elvisfortx31?s=11";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/profile.php?id=61584903837276&mibextid=wwXIfr&rdid=SJmdJajLvXzaskMS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G736n9RE9%2F%3Fmibextid%3DwwXIfr#";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/elvisforcongress/";

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Top quick links */}
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href={`mailto:${email}`} className="text-sky-900 dark:text-sky-300 hover:underline">
              {email}
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="text-sky-900 dark:text-sky-300 hover:underline">
              {phone}
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 text-sky-900 dark:text-sky-300">
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:opacity-80"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-80"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <header className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-campaign-blue dark:text-white">
              Elvis for Congress
            </h1>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              Serious leadership. Real accountability.
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Texas’ 31st Congressional District
            </p>
          </header>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-xl font-semibold text-campaign-blue dark:text-white">About Elvis</h2>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                U.S. Army combat veteran and public servant focused on accountability,
                public safety, economic growth, and lowering costs for families.
              </p>
              <div className="mt-4">
                <Link href="/meet-elvis" className="text-sky-900 dark:text-sky-300 font-medium hover:underline">
                  Read more →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-xl font-semibold text-campaign-blue dark:text-white">Get Involved</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={winredUrl} target="_blank" rel="noopener noreferrer" className="text-sky-900 dark:text-sky-300 hover:underline">
                    Donate on WinRed
                  </a>
                </li>
                <li>
                  <Link href="/volunteer" className="text-sky-900 dark:text-sky-300 hover:underline">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/stand" className="text-sky-900 dark:text-sky-300 hover:underline">
                    Where I Stand
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sky-900 dark:text-sky-300 hover:underline">
                    Contact the campaign
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={winredUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-red-700 hover:bg-red-800 text-white px-5 py-2 font-semibold"
            >
              Donate
            </a>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-5 py-2 text-sky-900 dark:text-sky-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}