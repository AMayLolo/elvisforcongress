export const metadata = {
  title: "Press & Media | Elvis for Congress",
};

import PageHeading from "@/components/PageHeading";

export default function PressPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-4xl space-y-10">
        <PageHeading>Press & Media</PageHeading>

      <p className="text-lg dark:text-gray-300">
        Members of the media may find official resources, assets, and contact
        information below.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold dark:text-white">Press Contact</h2>
        <p className="text-lg dark:text-gray-300">
          For interviews, statements, or press inquiries, please email:
        </p>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">
          press@elvisforcongress.com
        </p>
      </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Downloads</h2>
          <ul className="list-disc ml-6 space-y-2 dark:text-gray-300">
            <li>Official Logos (PNG)</li>
            <li>Campaign Branding Guide (PDF)</li>
            <li>Press Kit (ZIP)</li>
            <li>High-resolution headshots (Coming Soon)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
