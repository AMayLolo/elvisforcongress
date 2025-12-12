"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin, X } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  // NOTE: I added placeholder social links — replace them with the campaign's
  // actual social profile URLs when available.
  const socials = [
    { href: "https://x.com/elvisforcongress", label: "X (formerly Twitter)", Icon: X },
    { href: "https://instagram.com/elvisforcongress", label: "Instagram", Icon: Instagram },
    { href: "https://facebook.com/elvisforcongress", label: "Facebook", Icon: Facebook },
    { href: "https://linkedin.com/in/elvisforcongress", label: "LinkedIn", Icon: Linkedin },
  ];

  return (
    <footer className="w-full bg-sky-900 py-10 mt-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">

        {/* Prominent donate CTA — hide on the donate page itself */}
        {pathname !== "/donate" && (
          <div className="flex justify-center">
            <Link
              href="/donate"
              className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800"
            >
              Donate
            </Link>
          </div>
        )}

        {/* Social icons moved to the top of the footer, larger, with more spacing and brand-colored hover */}
        <div className="flex justify-center space-x-6 mb-3">
          {socials.map(({ href, label, Icon }) => {
            const brandHover: Record<string, string> = {
              "X (formerly Twitter)": "hover:text-[#1DA1F2]",
              Instagram: "hover:text-[#E1306C]",
              Facebook: "hover:text-[#1877F2]",
              LinkedIn: "hover:text-[#0A66C2]",
            };
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-white/80 transition ${brandHover[label] || "hover:text-white"}`}>
                <Icon className="h-6 w-6 transform scale-125" />
              </a>
            );
          })}
        </div>

        <div className="flex justify-center space-x-6">
          <a href="/privacy" className="text-white/80 hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="/terms" className="text-white/80 hover:underline text-sm">
            Terms of Use
          </a>
          <a href="/contact" className="text-white/80 hover:underline text-sm">
            Contact
          </a>
        </div>

        <p className="text-white/90 mt-2">Paid for by Elvis for Congress 2026.</p>

        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Elvis for Congress. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
