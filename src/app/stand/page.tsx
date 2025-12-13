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
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <PageHeading as="h1">Where I Stand</PageHeading>
          <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-tight">Serious leadership. Clear priorities. Accountability to the people.</p>
        </div>

        <div className="mt-4 md:mt-0 md:ml-4 shrink-0">
          <Image
            src="/portrait.jpg"
            alt="Elvis portrait"
            width={150}
            height={150}
            className="rounded-full shadow-md object-cover border-2 border-white dark:border-gray-800 mx-auto"
          />
        </div>
      </div>

      <IssuesTiles />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-6">
          <p className="text-lg font-medium text-sky-900 dark:text-white text-center">Stay up to date on these issues and how Elvis will fight for you!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <EmailSignupForm showDonate={false} />
          <SmsSignupForm showDonate={false} />
        </div>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">No spam. Just updates from the campaign.</p>
      </section>
    </div>
  );
}
