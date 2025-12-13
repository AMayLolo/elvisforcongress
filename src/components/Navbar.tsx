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
  <nav className="w-full bg-sky-800">
    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
  <Link href="/" className="flex items-center" aria-label="Elvis for Congress">
          {/* Inline SVG logo to avoid external fetch failures and improve reliability */}
            <svg
              role="img"
              aria-label="Elvis for Congress logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 1024"
              className="h-16 w-auto"
            >
              <defs>
                <style>{`.st0{font-family:Arial-Black,'Arial Black';font-size:46px;font-weight:800;letter-spacing:.16em}.st0,.st1{fill:#fff}`}</style>
              </defs>
              <path className="st1" d="M279.15,427.45h146.42v37.75h-91.66v28.1h85.03v36.06h-85.03v34.86h94.31v40.04h-149.07v-176.81Z" />
              <path className="st1" d="M457.65,427.45h54.63v133.27h85.27v43.54h-139.9v-176.81Z" />
              <path className="st1" d="M570.48,427.45h57.11l39.79,127.24,39.29-127.24h55.45l-65.65,176.81h-59.22l-66.77-176.81Z" />
              <path className="st1" d="M780.15,427.45h54.75v176.81h-54.75v-176.81Z" />
              <path className="st1" d="M864.57,545.76l51.98-3.26c1.12,8.44,3.42,14.88,6.87,19.3,5.63,7.16,13.67,10.73,24.12,10.73,7.8,0,13.81-1.83,18.03-5.49,4.22-3.66,6.33-7.9,6.33-12.72s-2.01-8.68-6.03-12.3-13.35-7.04-27.98-10.25c-23.96-5.39-41.05-12.54-51.26-21.47-10.29-8.92-15.44-20.3-15.44-34.13,0-9.08,2.63-17.67,7.9-25.75,5.27-8.08,13.19-14.43,23.76-19.06,10.57-4.62,25.07-6.94,43.48-6.94,22.59,0,39.82,4.2,51.68,12.6,11.86,8.4,18.92,21.77,21.17,40.1l-51.5,3.02c-1.37-7.96-4.24-13.75-8.62-17.37-4.38-3.62-10.43-5.43-18.15-5.43-6.35,0-11.14,1.35-14.35,4.04-3.22,2.69-4.82,5.97-4.82,9.83,0,2.82,1.33,5.35,3.98,7.6,2.57,2.33,8.68,4.5,18.33,6.51,23.88,5.15,40.99,10.35,51.32,15.62,10.33,5.27,17.85,11.8,22.55,19.6,4.7,7.8,7.06,16.52,7.06,26.17,0,11.34-3.14,21.79-9.41,31.36-6.27,9.57-15.04,16.83-26.29,21.77-11.26,4.95-25.45,7.42-42.57,7.42-30.07,0-50.9-5.79-62.47-17.37s-18.13-26.29-19.66-44.14Z" />
              <rect className="st1" x="938.94" y="628.25" width="91.71" height="24.51" />
              <text className="st0" transform="translate(424.72 657.74)"><tspan x="0" y="0">FOR CONGRESS</tspan></text>
              <rect className="st1" x="282.31" y="629.92" width="118.37" height="24.51" />
              <path className="st1" d="M1028.14,341.39h-346.83c-.89,0-1.67.47-2.11,1.16.06.15.12.32.19.47,1.36,2.41,4.22,2.53,8.73,2.44,1.16-.02,2.36-.05,3.48.02,4.19.06,8.55.03,12.76,0,6.96-.05,14.16-.11,21,.24h.11c2.66.27,3.56,1.55,3.85,2.59.34,1.22-.06,2.27-.8,3.23h299.62c1.39,0,2.51-1.12,2.51-2.51v-5.12c0-1.39-1.12-2.51-2.51-2.51Z" />
              <path className="st1" d="M965.64,374.26h-267.39c-1.79,1.3-3.48,2.61-4.97,4.14-1.28,1.24-1.35,3.03-.28,6.43.05.17.11.35.16.52h272.48c1.38,0,2.5-1.12,2.5-2.5v-6.08c0-1.38-1.12-2.5-2.5-2.5Z" />
              <path className="st1" d="M612.65,364.44c-3.37-2.43-6.82-4.91-10.16-7.37h-281.2c-1.39,0-2.51,1.13-2.51,2.51v6.06c0,1.39,1.13,2.51,2.51,2.51h296.51c-1.72-1.25-3.45-2.49-5.15-3.72Z" />
              <path className="st1" d="M595.52,348.04c.43-1.5,1.78-2.37,3.99-2.59,5.26-.32,10.53-.28,15.63-.23,3.07.03,6.25.06,9.33,0,1.63,0,3.23,0,4.82,0,3.03,0,6.17.02,9.2-.04l.5-.02c1.99-.06,4.05-.12,5.25-1.01.77-.56,1.37-1.62,1.86-2.77h-361.29c-1.39,0-2.51,1.12-2.51,2.51v5.12c0,1.39,1.12,2.51,2.51,2.51h311.71c-.86-.99-1.39-2.14-1-3.49Z" />
              <path className="st1" d="M994.2,357.08h-271.47c-3.45,2.51-7.29,5.3-11.07,8.04l-4.19,3.04h286.73c1.39,0,2.51-1.12,2.51-2.51v-6.06c0-1.39-1.12-2.51-2.51-2.51Z" />
              <path className="st1" d="M632.88,381.63c.4-2.28-1.65-4-4.59-6.17-.53-.4-1.07-.8-1.61-1.2h-274.68c-1.39,0-2.52,1.13-2.52,2.52v6.04c0,1.39,1.13,2.52,2.52,2.52h279.93c.34-1.25.66-2.49.95-3.72Z" />
              <polygon className="st1" points="662.41 309.84 675.94 351.47 719.71 351.47 684.3 377.2 697.83 418.82 662.41 393.1 627 418.82 640.53 377.2 605.12 351.47 648.89 351.47 662.41 309.84" />
            </svg>
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
            <Link href="/stand" className="text-white hover:underline inline-flex items-center" onClick={() => setIssuesOpen(false)}>
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
                      <Link href="/stand#veterans" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Veterans</Link>
                    </li>
                    <li>
                      <Link href="/stand#lowering-costs" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Lowering Costs</Link>
                    </li>
                    <li>
                      <Link href="/stand#public-safety" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Public Safety</Link>
                    </li>
                    <li>
                      <Link href="/stand#education" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Education & Workforce</Link>
                    </li>
                    <li>
                      <Link href="/stand#economic-growth" className="block px-4 py-2 hover:bg-sky-50" onClick={() => setIssuesOpen(false)}>Economic Growth</Link>
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
          <div className="max-w-7xl mx-auto px-6 py-3 space-y-3">
            <Link href="/meet-elvis" className="block text-white py-2">About</Link>
            <Link href="/stand" className="block text-white py-2">Where I Stand</Link>
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
