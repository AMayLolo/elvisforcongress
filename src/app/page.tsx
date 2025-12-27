export const metadata = {
  metadataBase: new URL("https://www.elvisforcongress.com"),
  title: "Elvis Lossa | Official Campaign Website for U.S. Congress (TX-31)",
  description:
    "Official campaign website of Elvis Lossa, candidate for U.S. Congress in Texas’ 31st District. Learn about his background, values, and how to support the campaign.",
  openGraph: {
    title: "Elvis Lossa | Candidate for U.S. Congress (TX-31)",
    description:
      "Official campaign website of Elvis Lossa, candidate for U.S. Congress in Texas’ 31st District.",
    url: "https://www.elvisforcongress.com/",
    images: [
      {
        url: "/og-briefing-composite-v2.png",
        width: 1200,
        height: 630,
        alt: "Elvis Lossa for Congress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Lossa | Candidate for U.S. Congress (TX-31)",
    description:
      "Official campaign website of Elvis Lossa, candidate for U.S. Congress in Texas’ 31st District.",
    images: ["https://www.elvisforcongress.com/og-briefing-composite-v2.png"],
  },
};

import Hero from "@/components/Hero";
import Link from "next/link";
import EmailSignupForm from "@/components/EmailSignupForm";
import SmsSignupForm from "@/components/SmsSignupForm";
import PageHeading from "@/components/PageHeading";

export default function Home() {
  const donateHref = "/donate";

  return (
    <div>
      {/* SEO-critical H1 (visually hidden, search-visible) */}
      <h1 className="sr-only">
        Elvis Lossa for Congress — Candidate for U.S. Congress in Texas’ 31st District
      </h1>

      {/* Structured data to identify Elvis Lossa */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Elvis Lossa",
            url: "https://www.elvisforcongress.com",
            jobTitle: "Candidate for U.S. Congress",
            affiliation: {
              "@type": "Organization",
              name: "Elvis Lossa for Congress",
            },
            address: {
              "@type": "PostalAddress",
              addressRegion: "TX",
              addressCountry: "US",
            },
            sameAs: [
              "https://www.facebook.com/ElvisLossa",
              "https://www.instagram.com/ElvisLossa",
              "https://www.linkedin.com/in/elvis-a-lossa",
            ],
          }),
        }}
      />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <PageHeading as="h2">Meet Elvis Lossa</PageHeading>

          <div className="space-y-6">
            <p className="text-lg font-semibold dark:text-gray-300">
              Public service is not about slogans. It is about results.
            </p>

            <p className="text-lg dark:text-gray-300">
              I am Elvis Lossa, a U.S. Army combat veteran, a father, and a public servant. Most
              recently, I served as Policy Coordinator for the Texas Speaker of the House, working
              on complex policy and operational challenges that affect communities across our state.
            </p>

            <p className="text-lg dark:text-gray-300">
              I am running for Congress because Texas’ 31st District deserves representation that
              understands how government works and holds it accountable.
            </p>

            <div className="mt-4">
              <Link
                href="/meet-elvis"
                className="text-sky-900 font-semibold hover:underline inline-flex items-center"
              >
                Read more about Elvis Lossa
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <EmailSignupForm showDonate={false} />
            <SmsSignupForm showDonate={false} />
          </div>

          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            No spam. Just updates from the campaign.
          </p>

          <div className="mt-10">
            <a
              href={donateHref}
              className="mx-auto block w-1/2 sm:w-1/4 bg-red-700 text-white font-semibold p-2 rounded-md text-sm hover:bg-red-800 text-center"
            >
              Donate
            </a>
            <p
              id="support-cta"
              className="text-center text-lg font-medium dark:text-white mt-3"
            >
              Support the campaign!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
