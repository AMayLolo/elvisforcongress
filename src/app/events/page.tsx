export const metadata = {
  title: "Events | Elvis for Congress",
};

import PageHeading from "@/components/PageHeading";

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
  <PageHeading>Events</PageHeading>

      <p className="text-lg dark:text-gray-300">
        Join Elvis at upcoming town halls, community gatherings, volunteer
        meetups, and campaign events.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow">
        <p className="text-gray-700 dark:text-gray-300 text-center">
          Upcoming events will appear here soon.
        </p>
      </div>
    </div>
  );
}
