export const metadata = {
  title: "Endorsements | Elvis for Congress",
};

import PageHeading from "@/components/PageHeading";

export default function EndorsementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-4xl space-y-8">
        <PageHeading>Endorsements</PageHeading>

      <p className="text-lg dark:text-gray-300">
        Community leaders, neighbors, and organizations supporting Elvis and the
        future of District 31.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <p className="text-xl italic dark:text-gray-100">
          “Elvis listens. He cares. And he shows up. That’s the kind of leader
          District 31 needs.”
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          — Community Member, District 31
        </p>
      </div>

        <p className="text-gray-600 dark:text-gray-400">
          More endorsements will be added as the campaign progresses.
        </p>
      </div>
    </div>
  );
}
