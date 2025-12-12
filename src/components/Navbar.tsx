"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  
  const pathname = usePathname();
  const [issuesOpen, setIssuesOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const donateHref = process.env.NEXT_PUBLIC_WINRED_URL || "/donate";
  const donateIsExternal = donateHref.startsWith("http");

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

        <div className="flex items-center space-x-8">
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
            href="/donate"
            className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-800"
          >
            Donate
          </Link>

          
        </div>
      </div>
    </nav>
  );
}
