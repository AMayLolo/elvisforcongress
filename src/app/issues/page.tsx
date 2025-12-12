
import IssuesTiles from "@/components/IssuesTiles";
import PageHeading from "@/components/PageHeading";
import Image from "next/image";
import EmailSignupForm from "@/components/EmailSignupForm";
import SmsSignupForm from "@/components/SmsSignupForm";

export const metadata = {
  title: "Where I Stand | Elvis for Congress",
};

export default function IssuesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <PageHeading as="h1">Where I Stand</PageHeading>
          <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300 whitespace-nowrap leading-tight">Serious leadership. Clear priorities. Accountability to the people.</p>
        </div>

        <div className="ml-4 mt-0 shrink-0 hidden md:block transform translate-x-6 md:translate-x-8">
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
