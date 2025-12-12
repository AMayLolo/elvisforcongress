"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function EmailSignupForm({
  showDonate = true,
}: {
  showDonate?: boolean;
}) {
  // Prefer an external WinRed URL when set, otherwise link to the site's donate landing page
  const _rawWinRed = process.env.NEXT_PUBLIC_WINRED_URL || "";
  const _normalizeWinRed = (s: string) => {
    if (!s) return s;
    let v = s.replace(/^['\"]+|['\"]+$/g, "");
    v = v.replace(/^http:\/\//i, "https://");
    v = v.replace(/^https:\/\/www\.secure\.winred\.com/i, "https://secure.winred.com");
    return v;
  };

  const donateHref = _normalizeWinRed(_rawWinRed) || "https://secure.winred.com/elvis-for-congress/donate-today";
  const donateIsExternal = donateHref.startsWith("http");

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "email-signup" }),
      });

      setToastMessage("Thanks — we'll keep you updated by email!");
      setToastVisible(true);
      setEmail("");
    } catch (err) {
      setToastMessage("Sorry — something went wrong. Please try again.");
      setToastVisible(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-bold text-sky-900 dark:text-white">Join Our Email List</h3>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-700"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Stay connected with campaign news.</p>
        <button
          type="submit"
          disabled={submitting}
          className="mx-auto block w-1/2 sm:w-1/3 bg-red-700 text-white font-semibold p-2 rounded-md text-sm hover:bg-red-800 text-center disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Sign Up"}
        </button>

        {/* Donate CTA below form (optional) */}
        {showDonate ? (
          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Or support our campaign directly:</p>
            {donateIsExternal ? (
              <a
                href={donateHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto block w-1/2 sm:w-1/3 bg-red-700 text-white font-semibold p-2 rounded-md text-sm hover:bg-red-800 text-center"
              >
                Donate
              </a>
            ) : (
              <a
                href={donateHref}
                className="mx-auto block w-1/2 sm:w-1/3 bg-red-700 text-white font-semibold p-2 rounded-md text-sm hover:bg-red-800 text-center"
              >
                Donate
              </a>
            )}
          </div>
        ) : null}
      </form>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </>
  );
}
