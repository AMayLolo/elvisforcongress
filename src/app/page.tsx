export const metadata = {
  metadataBase: new URL("https://www.elvisforcongress.com"),
  title: "Elvis Lossa | Candidate for U.S. Congress in Texas’ 31st District",
  description:
    "Official campaign website of Elvis Lossa, U.S. Army combat veteran and candidate for U.S. Congress representing Texas’ 31st District, including Round Rock, Pflugerville, Killeen, Temple, Georgetown, and Central Texas communities.",
  openGraph: {
    title: "Elvis Lossa | Candidate for U.S. Congress (TX-31)",
    description:
      "Learn about Elvis Lossa, candidate for U.S. Congress representing Texas’ 31st District and Central Texas communities.",
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
      {/* SEO-critical H1 */}
      <h1 className="sr-only">
        Elvis Lossa for Congress — Candidate for U.S. Congress in Texas’ 31st District
      </h1>

      {/* Structured Data */}
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
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Texas 31st Congressional District",
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

      {/* Meet Elvis */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <PageHeading as="h2">Meet Elvis Lossa</PageHeading>

          <div className="space-y-6">
            <p className="text-lg font-semibold dark:text-gray-300">
              Public service is not about slogans. It is about results.
            </p>

            <p className="text-lg dark:text-gray-300">
              I am Elvis Lossa, a U.S. Army combat veteran, a father, and a public servant.
              Most recently, I served as Policy Coordinator for the Texas Speaker of the
              House, working on complex policy and operational challenges that affect
              communities across our state.
            </p>

            <p className="text-lg dark:text-gray-300">
              I am running for Congress because Texas’ 31st District deserves representation
              that understands how government works and holds it accountable.
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

      {/* City / District Optimization */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl font-semibold text-sky-900 dark:text-white">
            Representing Communities Across Central Texas
          </h2>

          <p className="text-lg dark:text-gray-300">
            Elvis Lossa is running to represent Texas’ 31st Congressional District,
            which includes communities across Central Texas such as Round Rock,
            Pflugerville, Killeen, Temple, Belton, Georgetown, Harker Heights,
            Copperas Cove, Lampasas, Llano, and San Saba. The district is diverse,
            growing, and deserves leadership focused on results—not rhetoric.
          </p>
        </div>
      </section>

      {/* Signup + Donate */}
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
            <p className="text-center text-lg font-medium dark:text-white mt-3">
              Support the campaign!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
