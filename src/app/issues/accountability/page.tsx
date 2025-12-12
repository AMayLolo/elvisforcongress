import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export const metadata = { title: "Accountability | Elvis for Congress" };

export default function Accountability() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
  <Link href="/issues" className="text-campaign-blue hover:underline mb-4 inline-block">
        ← Back to issues
      </Link>
  <PageHeading as="h1" className="text-campaign-blue">Government Accountability</PageHeading>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        End wasteful spending, demand transparency, and put power back where it belongs: with the people.
      </p>
    </div>
  );
}
