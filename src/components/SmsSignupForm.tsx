"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function SmsSignupForm({
  showDonate = true,
}: {
  showDonate?: boolean;
}) {
  // Always link to the site's donate landing page so users see online + mail options
  const donateHref = "/donate";

  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setToastMessage("Please consent to receive SMS updates.");
      setToastVisible(true);
      return;
    }

    setSubmitting(true);
    try {
      await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, type: "sms-signup" }),
      });

      setToastMessage("Thanks — you'll receive SMS updates from us!");
      setToastVisible(true);
      setPhone("");
      setConsent(false);
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
        <h3 className="text-xl font-bold text-sky-900 dark:text-white">Sign Up for Text Alerts</h3>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          className="w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-700"
        />
        <label className="flex items-center space-x-2 text-sm dark:text-gray-300">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>I consent to receive SMS campaign updates.</span>
        </label>
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
            <a
              href={donateHref}
              className="mx-auto block w-1/2 sm:w-1/3 bg-red-700 text-white font-semibold p-2 rounded-md text-sm hover:bg-red-800 text-center"
            >
              Donate Now
            </a>
          </div>
        ) : null}
      </form>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </>
  );
}
