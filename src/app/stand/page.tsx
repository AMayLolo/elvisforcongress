import IssuesTiles from "@/components/IssuesTiles";
import PageHeading from "@/components/PageHeading";
import Image from "next/image";
import EmailSignupForm from "@/components/EmailSignupForm";
import SmsSignupForm from "@/components/SmsSignupForm";

export const metadata = {
  title: "Where I Stand | Elvis Lossa for Congress",
  description:
    "Elvis Lossa's positions on economic growth, education, public safety, veterans, and fiscal accountability.",
  openGraph: {
    title: "Where I Stand | Elvis Lossa for Congress",
    description:
      "Elvis Lossa's positions on economic growth, education, public safety, veterans, and fiscal accountability.",
    url: "https://www.elvisforcongress.com/stand",
    images: [
      {
        url: "https://www.elvisforcongress.com/og/stand.svg",
        alt: "Where I Stand — Elvis Lossa for Congress",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where I Stand | Elvis Lossa for Congress",
    description:
      "Elvis Lossa's positions on the key priorities facing District 31.",
    images: ["https://www.elvisforcongress.com/og/stand.svg"],
  },
};

export default function IssuesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-5xl space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <PageHeading as="h1">Where I Stand</PageHeading>
            <p className="mt-2 text-base text-gray-700 dark:text-gray-300">Serious leadership. Clear priorities. Accountability to the people.</p>
          </div>

          <div className="shrink-0">
            <Image
              src="/portrait.jpg"
              alt="Elvis portrait"
              width={150}
              height={150}
              className="rounded-full shadow-md object-cover border-2 border-white dark:border-gray-800"
            />
          </div>
        </div>

        <IssuesTiles />

        <section className="py-12">
          <div className="mb-6 max-w-3xl">
            <p className="text-lg font-medium text-sky-900 dark:text-white">Stay up to date on these issues and how Elvis will fight for you!</p>
          </div>

          <div className="max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <EmailSignupForm showDonate={false} />
              <SmsSignupForm showDonate={false} />
            </div>

            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">No spam. Just updates from the campaign.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
