import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export const metadata = { title: "Education | Elvis for Congress" };

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
  <Link href="/stand" className="text-campaign-blue hover:underline mb-4 inline-block">
        ← Back to issues
      </Link>
  <PageHeading as="h1" className="text-campaign-blue">Education & Workforce Development</PageHeading>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Prepare students for the jobs of tomorrow with strong school funding, modern training programs, and better support for teachers.
      </p>
    </div>
  );
}
