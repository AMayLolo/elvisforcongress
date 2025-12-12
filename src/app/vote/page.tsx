export const metadata = {
  title: "Voter Resources | Elvis for Congress",
};

import PageHeading from "@/components/PageHeading";

export default function VotePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
  <PageHeading>Voter Resources</PageHeading>

      <p className="text-lg dark:text-gray-300">
        Make your voice heard. Use the tools below to verify your voter
        registration, find your polling place, and make a voting plan.
      </p>

      <ul className="list-disc ml-6 space-y-4 text-lg dark:text-gray-300">
        <li>
          <a
            href="https://vote.gov"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Register to Vote
          </a>
        </li>
        <li>
          <a
            href="https://www.vote411.org/"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Check Your Registration
          </a>
        </li>
        <li>
          <a
            href="https://www.vote.org/polling-place-locator/"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Find Your Polling Place
          </a>
        </li>
        <li>
          <a
            href="https://www.vote.org/important-dates/"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Important Election Dates
          </a>
        </li>
      </ul>
    </div>
  );
}
