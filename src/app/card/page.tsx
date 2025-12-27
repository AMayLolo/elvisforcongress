import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

// Simple X icon (letter X, not the bird)
function XIcon({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

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
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "(737) 415-0809";
  const telHref = phone.replace(/[^+\d]/g, "");

  const xUrl = process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/elvisfortx31?s=11";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/profile.php?id=61584903837276&mibextid=wwXIfr";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/elvisforcongress/";

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Top quick links: social icons first, contact below */}
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-col items-center gap-4">
            {/* Social icons row (50% larger) */}
            <div className="flex items-center justify-center gap-6 text-sky-900 dark:text-sky-300">
              {xUrl && (
                <a href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:opacity-80">
                  <XIcon className="h-9 w-9" />
                  <span className="sr-only">X</span>
                </a>
              )}
              {facebook && (
                <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
                  <Facebook className="h-9 w-9" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
                  <Instagram className="h-9 w-9" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
            </div>

            {/* Contact lines below (larger, each on its own line) */}
            <div className="text-center space-y-1">
              <a href={`mailto:${email}`} className="block text-lg sm:text-xl text-sky-900 dark:text-sky-300 hover:underline">
                {email}
              </a>
              <a href={`tel:${telHref}`} className="block text-lg sm:text-xl text-sky-900 dark:text-sky-300 hover:underline">
                {phone}
              </a>
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