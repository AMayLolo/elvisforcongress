import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export const metadata = { title: "Economic Growth | Elvis for Congress" };

export default function EconomicGrowth() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
  <Link href="/issues" className="text-campaign-blue hover:underline mb-4 inline-block">
        ← Back to issues
      </Link>
  <PageHeading as="h1" className="text-campaign-blue">Economic Growth & Small Business Support</PageHeading>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Cut red tape, expand access to capital, and create an environment where local businesses can grow and hire.
      </p>
    </div>
  );
}
