import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export const metadata = { title: "Veterans | Elvis for Congress" };

export default function Veterans() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
  <Link href="/issues" className="text-campaign-blue hover:underline mb-4 inline-block">
        ← Back to issues
      </Link>
  <PageHeading as="h1" className="text-campaign-blue">Veterans & Military Families</PageHeading>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Ensure veterans receive the healthcare, benefits, and respect they deserve — and support military families who sacrifice so much.
      </p>
    </div>
  );
}
