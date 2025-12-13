export const metadata = {
  title: "Meet Elvis | Elvis Lossa for Congress",
  description:
    "Learn about Elvis Lossa's background, values, and motivation to represent District 31.",
  openGraph: {
    title: "Meet Elvis | Elvis Lossa for Congress",
    description:
      "Learn about Elvis Lossa's background, values, and motivation to represent District 31.",
    url: "https://www.elvisforcongress.com/meet-elvis",
    images: [
      {
        url: "https://www.elvisforcongress.com/og/meet-elvis.svg",
        alt: "Meet Elvis Lossa",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Elvis | Elvis Lossa for Congress",
    description:
      "Learn about Elvis Lossa's background, values, and motivation to represent District 31.",
    images: ["https://www.elvisforcongress.com/og/meet-elvis.svg"],
  },
};

import Image from "next/image";

import PageHeading from "@/components/PageHeading";

export default function MeetElvisPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-4xl space-y-6">
        <PageHeading>Meet Elvis</PageHeading>
      <p className="text-lg font-semibold dark:text-gray-300">Public service is not about slogans. It is about results.</p>

      <p className="text-lg dark:text-gray-300">I am a U.S. Army combat veteran, a father, and a public servant. Most recently, I served as Policy Coordinator for the Texas Speaker of the House, working on complex policy and operational challenges that affect communities across our state.</p>

      <p className="text-lg dark:text-gray-300">I am running for Congress because District 31 deserves representation that understands how government works and holds it accountable.</p>

  <h2 className="text-2xl font-semibold text-sky-900 dark:text-white">Core Values</h2>
      <ul className="ml-6 space-y-3 text-lg dark:text-gray-300">
        <li>
          <div className="flex gap-3 items-start">
            <span className="mt-1 w-2 h-2 rounded-full bg-red-700" aria-hidden />
            <div>
              <strong className="text-sky-900 dark:text-white">Service before politics</strong>
              <div className="text-base">The job is about people, not ambition.</div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-3 items-start">
            <span className="mt-1 w-2 h-2 rounded-full bg-red-700" aria-hidden />
            <div>
              <strong className="text-sky-900 dark:text-white">Accountability and follow through</strong>
              <div className="text-base">Promises mean nothing without results.</div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-3 items-start">
            <span className="mt-1 w-2 h-2 rounded-full bg-red-700" aria-hidden />
            <div>
              <strong className="text-sky-900 dark:text-white">Respect for working families</strong>
              <div className="text-base">Policies should make life easier, not harder.</div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-3 items-start">
            <span className="mt-1 w-2 h-2 rounded-full bg-red-700" aria-hidden />
            <div>
              <strong className="text-sky-900 dark:text-white">Transparency in government</strong>
            </div>
          </div>
        </li>
      </ul>


      <p className="text-lg dark:text-gray-300">Voters deserve honesty and clarity.</p>

      <p className="text-lg dark:text-gray-300">District 31 is growing fast, but Washington has not kept up with the needs of Central Texas.</p>

      <p className="text-lg dark:text-gray-300">Too often, leadership in Congress is focused on noise instead of outcomes. Families, veterans, and small businesses deserve representation that listens carefully and then acts decisively.</p>

      <p className="text-lg dark:text-gray-300">I am running for Congress to bring experience, accountability, and a results-driven approach to serving Central Texas.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 text-lg text-gray-700 dark:text-gray-300 max-w-prose">
            <p className="mb-0">
              Elvis served as a U.S. Army soldier and combat veteran before committing his career to public service.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/afganistan.jpeg"
                alt="Elvis serving in Afghanistan"
                width={1200}
                height={800}
                className="w-full h-64 md:h-96 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
