"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Left: Logo + Site Name (same line) */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ELVIS_Primary_Horizontal_FullColor.png"
            alt="Elvis for Congress"
            width={180}
            height={48}
            priority
          />
          <span className="sr-only">Elvis for Congress</span>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="primary-nav"
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
          </svg>
        </button>

        {/* Right: Nav links */}
        <nav
          id="primary-nav"
          className={`${isOpen ? "block" : "hidden"} md:block`}
          aria-label="Primary"
        >
          <ul className="md:flex md:items-center md:gap-6">
            <li><Link href="/briefing" className="hover:underline">Briefing</Link></li>
            <li><Link href="/meet-elvis" className="hover:underline">Meet Elvis</Link></li>
            <li><Link href="/issues" className="hover:underline">Issues</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li>
              <Link
                href="/donate"
                className="inline-block bg-campaign-red dark:bg-campaign-red-dark text-white font-semibold px-3 py-2 rounded-md hover:brightness-110"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}