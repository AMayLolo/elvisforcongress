import IssuesTiles from "@/components/IssuesTiles";
import PageHeading from "@/components/PageHeading";
import Image from "next/image";
import EmailSignupForm from "@/components/EmailSignupForm";
import SmsSignupForm from "@/components/SmsSignupForm";

export const metadata = {
  title: "Where Elvis Lossa Stands | Issues & Priorities for Texas’ 31st District",
  description:
    "Learn where Elvis Lossa stands on economic growth, education, public safety, veterans’ issues, and fiscal accountability as a candidate for U.S. Congress in Texas’ 31st District.",
  openGraph: {
    title: "Where Elvis Lossa Stands | Issues & Priorities",
    description:
      "Elvis Lossa’s positions on the key issues facing Texas’ 31st Congressional District and Central Texas communities.",
    url: "https://www.elvisforcongress.com/stand",
    images: [
      {
        url: "https://www.elvisforcongress.com/og/stand.svg",
        alt: "Where Elvis Lossa Stands",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Elvis Lossa Stands | Issues & Priorities",
    description:
      "Learn where Elvis Lossa stands on the key priorities facing Texas’ 31st District.",
    images: ["https://www.elvisforcongress.com/og/stand.svg"],
  },
};

export default function IssuesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Structured Data: FAQ + Person Issue Context */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does Elvis Lossa stand for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Elvis Lossa stands for economic growth, strong public safety, support for veterans, accountability in government, and policies that respect working families across Texas’ 31st Congressional District.",
                },
              },
              {
                "@type": "Question",
                name: "What are Elvis Lossa’s priorities for Texas’ 31st District?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Elvis Lossa’s priorities include job creation, education, fiscal responsibility, public safety, and effective government that delivers results for communities across Central Texas.",
                },
              },
              {
                "@type": "Question",
                name: "How does Elvis Lossa support veterans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "As a U.S. Army combat veteran, Elvis Lossa supports policies that ensure veterans receive timely healthcare, job opportunities, and accountability from federal agencies tasked with serving them.",
                },
              },
              {
                "@type": "Question",
                name: "Why is Elvis Lossa running for Congress?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Elvis Lossa is running for Congress to bring experience, accountability, and a results-driven approach to representing Texas’ 31st Congressional District.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-5xl space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <PageHeading as="h1">Where Elvis Lossa Stands</PageHeading>
            <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
              Serious leadership. Clear priorities. Accountability to the people
              of Texas’ 31st Congressional District.
            </p>
          </div>

          <div className="shrink-0">
            <Image
              src="/portrait.jpg"
              alt="Elvis Lossa portrait"
              width={150}
              height={150}
              className="rounded-full shadow-md object-cover border-2 border-white dark:border-gray-800"
            />
          </div>
        </div>

        {/* Issues Overview */}
        <section className="space-y-4 max-w-4xl">
          <p className="text-lg dark:text-gray-300">
            Elvis Lossa is running to represent communities across Central Texas —
            including Round Rock, Pflugerville, Killeen, Temple, Belton, Georgetown,
            Harker Heights, Copperas Cove, Lampasas, Llano, and San Saba — with a focus
            on practical solutions and measurable results.
          </p>
        </section>

        <IssuesTiles />

        <section className="py-12">
          <div className="mb-6 max-w-3xl">
            <p className="text-lg font-medium text-sky-900 dark:text-white">
              Stay up to date on these issues and how Elvis Lossa will fight for you.
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <EmailSignupForm showDonate={false} />
              <SmsSignupForm showDonate={false} />
            </div>

            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
              No spam. Just updates from the campaign.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
