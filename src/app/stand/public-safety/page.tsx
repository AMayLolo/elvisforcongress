import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export const metadata = { title: "Public Safety | Elvis for Congress" };

export default function PublicSafety() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
  <Link href="/stand" className="text-campaign-blue hover:underline mb-4 inline-block">
        ← Back to issues
      </Link>
  <PageHeading as="h1" className="text-campaign-blue">Strengthening Public Safety</PageHeading>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Elvis supports giving first responders the tools they need, improving mental health resources, and investing in crime-prevention programs that make communities safer.
      </p>
    </div>
  );
}
