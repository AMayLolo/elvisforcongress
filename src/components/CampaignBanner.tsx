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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 sm:py-2 flex items-center justify-between gap-4">
          <div className="text-white flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
            <h2 className="text-xs sm:text-base font-bold leading-tight h-fit">Help me fight for Texas!</h2>
            <p className="text-xs sm:text-base leading-tight h-fit">SUPPORT MY CAMPAIGN</p>
          </div>
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="hidden sm:block bg-white text-red-700 font-semibold px-6 py-1.5 rounded-md hover:bg-gray-100 transition shrink-0 whitespace-nowrap text-sm"
          >
            Donate Now
          </button>
        </div>
      </section>
    </a>
  );
}