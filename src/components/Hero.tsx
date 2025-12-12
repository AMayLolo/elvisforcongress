import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
  <section className="w-full bg-gradient-to-r from-sky-800 to-sky-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Logo on left */}
        <div className="flex justify-center">
          {/* circular frame stays fixed; inner image is moved/scaled inside the circle */}
              <div className="w-50 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-2xl overflow-hidden shadow-xl relative">
            <Image
              src="/elvis.png"
              alt="Photo of Elvis"
              fill
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 325px, 400px"
              priority
                  className="object-cover object-bottom scale-105"
            />
                {/* decorative outline + subtle right-side lowered blend */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl">
                  {/* base rounded border */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10" />

                  {/* right-side blended overlay that begins halfway down and covers ~25% of the right side */}
                  <div className="absolute top-1/2 -right-3 bottom-0 w-1/4 rounded-tr-2xl rounded-br-2xl bg-gradient-to-b from-transparent to-black/8 opacity-60" />
                </div>
          </div>
        </div>

        {/* Text on right */}
        <div className="space-y-6">
          <p className="uppercase text-sm tracking-wider text-white/80">SERVING TEXAS' 31ST DISTRICT</p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">Serious Leadership. Real Accountability.</h1>

          <p className="text-lg text-white/90">I’m running for Congress to bring practical experience, integrity, and results back to Washington — not political theater.</p>

          <div className="flex">
            <a
              href="/issues"
              className="px-6 py-3 rounded-md font-semibold bg-red-700 text-white hover:bg-red-800"
            >
              Where Elvis Stands
            </a>
          </div>
        </div>
      </div>
      </section>
  );
}
