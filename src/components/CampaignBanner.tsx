export default function CampaignBanner() {
  const winredUrl = process.env.NEXT_PUBLIC_WINRED_URL || "https://secure.winred.com/elvis-for-congress/donate-today";

  return (
    <section className="w-full bg-red-700">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Support my campaign.</h2>
          <p className="text-lg mt-2">Help me fight for Texas!</p>
        </div>
        <a
          href={winredUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition shrink-0"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}