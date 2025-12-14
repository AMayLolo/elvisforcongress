export const metadata = {
  title: "Campaign Briefing | Elvis for Congress",
  description:
    "A transparent overview of why this race is winnable and our 90-day plan for Texas' 31st District.",
};

export default function BriefingPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Section 1: Opening */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-campaign-blue dark:text-white mb-8">
            A Serious Campaign for Texas' 31st District
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Thank you for taking the time to look more closely at this campaign.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This race matters, and I believe donors deserve clarity, transparency, and a realistic plan — not slogans. What follows is a straightforward overview of why this race is winnable and how we are approaching the next 90 days.
          </p>
          <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8" />
        </div>
      </section>

      {/* Section 2: Why This Race Is Real */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-campaign-blue dark:text-white mb-8">
            Why This Race Is Real — And Why Now
          </h2>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Texas' 31st District is at an inflection point. While it remains a conservative district, it is growing rapidly and changing demographically, economically, and generationally. Voters want representation that shows up, understands modern governance, and reflects the community as it exists today — not as it did two decades ago.
            </p>
            <p>
              The incumbent has served honorably for more than 20 years. However, he is now the oldest Republican member of Congress and, in the most recent cycle, missed over 125 votes. His presence in the district has largely been limited to scheduled appearances and photo opportunities rather than sustained engagement.
            </p>
            <p>
              History shows incumbents in Texas are rarely defeated — but when they are, it is because conditions change faster than leadership does. That is where this race stands today.
            </p>
          </div>
          <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8" />
        </div>
      </section>

      {/* Section 3: Why I'm Running */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-campaign-blue dark:text-white mb-8">
            Why I'm Running
          </h2>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I am a U.S. Army combat veteran who has served at multiple levels of government, including most recently as Policy Coordinator for the Texas Speaker of the House. I have worked inside institutions, understand how power moves, and know how to turn priorities into outcomes.
            </p>
            <p>
              Texas' 31st District has never been represented in Congress by a veteran, despite being home to one of the largest military communities in the country. That disconnect matters — to veterans, working families, and taxpayers who expect accountability.
            </p>
            <p>
              This campaign is not built on slogans or celebrity. It is built on experience, discipline, and a clear understanding of how to govern effectively in today's environment.
            </p>
          </div>
          <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8" />
        </div>
      </section>

      {/* Section 4: The 90-Day Plan */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-campaign-blue dark:text-white mb-4">
            The Next 90 Days
          </h2>
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            This campaign is active, competitive, and built for the reality of a multi-candidate race.
          </p>
        </div>

        {/* Phase 1 - Red left, Text right */}
        <div className="w-full bg-white dark:bg-gray-950 mb-0">
          <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-stretch gap-0 lg:gap-8">
            <div className="flex-1 bg-red-700 dark:bg-red-800 p-8 sm:p-12 rounded-lg lg:rounded-none flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-white mb-4">Phase 1</h3>
              <p className="text-white font-semibold mb-4">Active Campaign & Consolidation</p>
              <p className="text-red-100 text-sm">Today through mid-January</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>Full-speed fundraising underway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>District-wide presence and coalition building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>Digital and earned media to introduce and define the race</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>Clear contrast between seriousness and spectacle</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-sky-50 dark:bg-gray-800 rounded-lg border border-sky-200 dark:border-gray-700">
                <p className="font-semibold text-campaign-blue dark:text-sky-300 mb-2">Objective:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Establish this campaign as the credible alternative in the field and consolidate voters looking for real leadership.
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm mt-3">
                  "You are not early — you are on time."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 - Text left, Blue right */}
        <div className="w-full bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-stretch gap-0 lg:gap-8">
            <div className="flex-1">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-campaign-blue dark:text-sky-400 font-bold mr-3">•</span>
                  <span>Sustained voter contact and persuasion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-blue dark:text-sky-400 font-bold mr-3">•</span>
                  <span>Continued fundraising to maintain visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-blue dark:text-sky-400 font-bold mr-3">•</span>
                  <span>Clear contrast between experience, discipline, and presence versus absentee representation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-blue dark:text-sky-400 font-bold mr-3">•</span>
                  <span>Engagement with outside groups monitoring the race</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-sky-50 dark:bg-gray-800 rounded-lg border border-sky-200 dark:border-gray-700">
                <p className="font-semibold text-campaign-blue dark:text-sky-300 mb-2">Objective:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Ensure no candidate clears a majority and position this campaign as one of the top two advancing.
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm mt-3">
                  "There is a math-based path forward."
                </p>
              </div>
            </div>
            <div className="flex-1 bg-campaign-blue dark:bg-sky-900 p-8 sm:p-12 rounded-lg lg:rounded-none flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Phase 2</h3>
              <p className="text-white font-semibold mb-4">Force the Runoff</p>
              <p className="text-sky-100 text-sm">Mid-January → March 3</p>
            </div>
          </div>
        </div>

        {/* Phase 3 - Red left, Text right */}
        <div className="w-full bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-stretch gap-0 lg:gap-8">
            <div className="flex-1 bg-red-700 dark:bg-red-800 p-8 sm:p-12 rounded-lg lg:rounded-none flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-white mb-4">Phase 3</h3>
              <p className="text-white font-semibold mb-4">Win the Runoff</p>
              <p className="text-red-100 text-sm">Post-Primary</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>Expanded coalition support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>Significant outside investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>Increased media attention and voter engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 dark:text-red-400 font-bold mr-3">•</span>
                  <span>Head-to-head contrast focused on leadership, accountability, and generational change</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-sky-50 dark:bg-gray-800 rounded-lg border border-sky-200 dark:border-gray-700">
                <p className="font-semibold text-campaign-blue dark:text-sky-300 mb-2">Objective:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Win a one-on-one race where seriousness, discipline, and turnout matter most.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
                In Texas primaries with entrenched incumbents and multiple challengers, victory often comes through a runoff. This campaign is built with that reality in mind — disciplined, focused, and prepared to compete in both phases of the race.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                Outside organizations understand this dynamic well. Their engagement typically follows clear signs of viability in the initial primary — which is why early support now matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Early Support Matters */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-campaign-blue dark:text-white mb-8">
            Why Early Support Matters
          </h2>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              This campaign does not need its initial supporters to fund the entire race. What we need — and what we are focused on — is raising enough early capital to demonstrate viability.
            </p>
            <p>
              Outside organizations are watching this race closely. They want an alternative. But they will only engage once a campaign proves it can raise, organize, and compete.
            </p>
            <p>
              Early support unlocks that next level.
            </p>
            <p className="font-semibold text-campaign-blue dark:text-sky-300 text-base">
              "We are not asking you to carry this alone."
            </p>
          </div>
          <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8" />
        </div>
      </section>

      {/* Section 6: The Ask */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-campaign-blue dark:text-white mb-8">
            Support the Campaign
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            If you believe Texas' 31st District is ready for new leadership — and that this is the moment to make that change — I would be honored to earn your support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://secure.winred.com/elvis-for-congress/donate-hd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-md text-center transition"
            >
              Contribute $3,300
            </a>
            <a
              href="https://secure.winred.com/elvis-for-congress/donate-hd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-md text-center transition"
            >
              Contribute $6,600 (Couples)
            </a>
            <a
              href="/contact"
              className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-md text-center transition"
            >
              Prefer to Talk First?
            </a>
          </div>
          <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8" />
        </div>
      </section>

      {/* Section 7: Close */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I appreciate you taking the time to review this briefing. Whether or not you choose to support the campaign financially, I value thoughtful conversations about how we can better serve this district.
          </p>
        </div>
      </section>
    </div>
  );
}