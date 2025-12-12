import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export const metadata = { title: "Lowering Costs | Elvis for Congress" };

export default function LoweringCosts() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
  <Link href="/stand" className="text-campaign-blue hover:underline mb-4 inline-block">
        ← Back to issues
      </Link>
  <PageHeading as="h1" className="text-campaign-blue">Lowering Costs & Supporting Families</PageHeading>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Elvis will fight for policies that reduce inflationary pressures, lower healthcare costs, improve access to prescription medications, and support working parents.
      </p>
    </div>
  );
}
