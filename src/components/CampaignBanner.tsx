"use client";

export default function CampaignBanner() {
  const winredUrl = process.env.NEXT_PUBLIC_WINRED_URL || "https://secure.winred.com/elvis-for-congress/donate-today";

  return (
    <a
      href={winredUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-red-700 dark:bg-red-700 hover:bg-red-800 transition"
    >
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <div className="text-white">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <h2 className="text-sm sm:text-lg font-bold">Help me fight for Texas!</h2>
              <p className="text-xs sm:text-base">SUPPORT MY CAMPAIGN</p>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="hidden sm:block bg-white text-red-700 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition shrink-0 whitespace-nowrap"
          >
            Donate Now
          </button>
        </div>
      </section>
    </a>
  );
}