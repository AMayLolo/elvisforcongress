import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-sky-800 to-sky-700 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile: stacked layout (text then portrait) */}
        {/* Desktop: side-by-side layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-auto md:min-h-[600px]">
          
          {/* Text on left */}
          <div className="flex flex-col justify-center space-y-6 py-12 md:py-0">
            <p className="uppercase text-sm tracking-wider text-white/80">SERVING TEXAS' 31ST DISTRICT</p>

            <h1 className="text-4xl md:text-5xl font-bold text-white">
  <span className="block">Serious leadership.</span>
  <span className="block">Real accountability.</span>
</h1>

            <p className="text-lg text-white/90">I'm running for Congress to bring practical experience, integrity, and results back to Washington — not political theater.</p>

            <div className="flex">
              <a
                href="/stand"
                className="px-6 py-3 rounded-md font-semibold bg-red-700 text-white hover:bg-red-800"
              >
                Where I Stand
              </a>
            </div>
          </div>

          {/* Portrait on right (desktop) or below text (mobile) */}
          <div className="relative w-full h-80 md:h-full">
            <Image
              src="/elvis.png"
              alt="Photo of Elvis"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}