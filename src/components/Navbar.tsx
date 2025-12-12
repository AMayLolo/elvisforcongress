"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  
  const pathname = usePathname();
  const [issuesOpen, setIssuesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  // Donate should go to the site's donate page so users see the campaign donate info first
  const donateHref = "/donate";

  // Close the dropdown when the route changes
  useEffect(() => {
    setIssuesOpen(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [pathname]);

  // Helpers to open/close with a short delay so users can move the mouse into the menu
  const openIssues = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIssuesOpen(true);
  };

  const scheduleClose = (delay = 220) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    // window.setTimeout returns a number in browsers
    closeTimeoutRef.current = window.setTimeout(() => {
      setIssuesOpen(false);
      closeTimeoutRef.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <nav className="w-full bg-sky-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Elvis for Congress
        </Link>

        {/* mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/meet-elvis" className="text-white hover:underline">
            About
          </Link>

          {/* Issues dropdown (controlled) */}
          <div
            className="relative"
            onMouseEnter={openIssues}
            onMouseLeave={() => scheduleClose()}
          >
            <Link href="/issues" className="text-white hover:underline inline-flex items-center" onClick={() => setIssuesOpen(false)}>
              Where I Stand
            </Link>
            {issuesOpen && (
              <div
                className="absolute z-50 mt-2 right-0 w-56 bg-white text-sky-900 rounded-md shadow-lg ring-1 ring-black/10"
                onMouseEnter={openIssues}
                onMouseLeave={() => scheduleClose()}
              >
                <ul className="py-2">
                    <li>
                      <Link href="/issues#veterans" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Veterans</Link>
                    </li>
                    <li>
                      <Link href="/issues#lowering-costs" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Lowering Costs</Link>
                    </li>
                    <li>
                      <Link href="/issues#public-safety" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Public Safety</Link>
                    </li>
                    <li>
                      <Link href="/issues#education" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Education & Workforce</Link>
                    </li>
                    <li>
                      <Link href="/issues#economic-growth" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Economic Growth</Link>
                    </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/press" className="text-white hover:underline">
            Press
          </Link>

          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>

          <Link href="/volunteer" className="text-white hover:underline">
            Volunteer
          </Link>

          <Link
            href={donateHref}
            className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-800"
          >
            Donate
          </Link>
        
        </div>
      </div>

      {/* Mobile menu: shown only on small screens when toggled */}
      {mobileOpen && (
        <div className="md:hidden bg-sky-900">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <Link href="/meet-elvis" className="block text-white py-2">About</Link>
            <Link href="/issues" className="block text-white py-2">Where I Stand</Link>
            <Link href="/press" className="block text-white py-2">Press</Link>
            <Link href="/contact" className="block text-white py-2">Contact</Link>
            <Link href="/volunteer" className="block text-white py-2">Volunteer</Link>
            <Link href={donateHref} className="block bg-red-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-800 text-center">Donate</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
