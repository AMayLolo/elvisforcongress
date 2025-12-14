export const metadata = {
  title: "Voter Resources | Elvis for Congress",
  description:
    "Find resources to register to vote, check your registration, locate your polling place, and learn important election dates.",
  openGraph: {
    title: "Voter Resources | Elvis for Congress",
    description:
      "Find resources to register to vote, check your registration, locate your polling place, and learn important election dates.",
    url: "https://www.elvisforcongress.com/vote",
    images: [
      {
        url: "https://www.elvisforcongress.com/og/vote.svg",
        alt: "Voter Resources — Elvis for Congress",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voter Resources | Elvis for Congress",
    description:
      "Find resources to register to vote, check your registration, locate your polling place, and learn important election dates.",
    images: ["https://www.elvisforcongress.com/og/vote.svg"],
  },
};

import PageHeading from "@/components/PageHeading";

export default function VotePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-3xl space-y-8">
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
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Register to Vote
            </a>
          </li>
          <li>
            <a
              href="https://www.vote411.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Check Your Registration
            </a>
          </li>
          <li>
            <a
              href="https://www.vote.org/polling-place-locator/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Find Your Polling Place
            </a>
          </li>
          <li>
            <a
              href="https://www.vote.org/important-dates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Important Election Dates
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}