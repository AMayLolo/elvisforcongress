"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-campaign-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/ELVIS_Primary_Horizontal_FullColor.png"
            alt="Elvis for Congress"
            width={600}
            height={160}
            priority
          />
        </div>

        {/* Two-line headline (no uppercase class) */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="block">Serious leadership.</span>
          <span className="block">Real accountability.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl">
          I'm running for Congress to bring practical experience, integrity, and
          results back to Washington — not political theater.
        </p>

        <div className="mt-8">
          <Link
            href="/issues"
            className="inline-block bg-campaign-red text-white font-semibold px-5 py-3 rounded-md hover:brightness-110"
          >
            Where I Stand
          </Link>
        </div>
      </div>
    </section>
  );
}