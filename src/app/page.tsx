export const metadata = {
  title: "Elvis Lossa for Congress | District 31",
  description:
    "Join Elvis Lossa's campaign to bring commonsense leadership and economic opportunity to District 31. Volunteer, donate, or learn where he stands.",
  openGraph: {
    title: "Elvis Lossa for Congress | District 31",
    description:
      "Join Elvis Lossa's campaign to bring commonsense leadership and economic opportunity to District 31. Volunteer, donate, or learn where he stands.",
    url: "https://www.elvisforcongress.com/",
    images: [
      {
        url: "https://www.elvisforcongress.com/og/home.svg",
        alt: "Elvis Lossa for Congress — Home",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Lossa for Congress | District 31",
    description:
      "Join Elvis Lossa's campaign to bring commonsense leadership and economic opportunity to District 31.",
    images: ["https://www.elvisforcongress.com/og/home.svg"],
  },
};

import Hero from "@/components/Hero";
import Link from "next/link";
import EmailSignupForm from "@/components/EmailSignupForm";
import SmsSignupForm from "@/components/SmsSignupForm";
import PageHeading from "@/components/PageHeading";

export default function Home() {
  // The central Donate button should lead to the site's internal donate page
  const donateHref = "/donate";

  return (
    <div>
      <Hero />

      <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
  <PageHeading as="h2">Meet Elvis</PageHeading>

        <p className="text-lg font-semibold dark:text-gray-300">
          Public service is not about slogans. It is about results.
        </p>

        <p className="text-lg dark:text-gray-300">
          I am a U.S. Army combat veteran, a father, and a public servant. Most recently, I served as Policy Coordinator for the Texas Speaker of the House, working on complex policy and operational challenges that affect communities across our state.
        </p>

        <p className="text-lg dark:text-gray-300">
          I am running for Congress because District 31 deserves representation that understands how government works and holds it accountable.
        </p>

        <div className="mt-4">
          <Link href="/meet-elvis" className="text-sky-900 font-semibold hover:underline inline-flex items-center">
            Read more
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <EmailSignupForm showDonate={false} />
          <SmsSignupForm showDonate={false} />
        </div>

        {/* small privacy note under the sign-up forms */}
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">No spam. Just updates from the campaign.</p>

        {/* Single centered Donate button below both forms */}
        <div className="mt-10">
          <a
            href={donateHref}
            className="mx-auto block w-1/2 sm:w-1/4 bg-red-700 text-white font-semibold p-2 rounded-md text-sm hover:bg-red-800 text-center"
          >
            Donate
          </a>
          <p id="support-cta" className="text-center text-lg font-medium dark:text-white mt-3">Support the campaign!</p>
        </div>
      </section>
    </div>
  );
}
