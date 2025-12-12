"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function VolunteerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
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
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          type: "volunteer-signup",
        }),
      });

      setToastMessage("Thanks — we'll be in touch about volunteer opportunities!");
      setToastVisible(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setConsent(false);
      setMessage("");
    } catch (err) {
      setToastMessage("Sorry — something went wrong. Please try again.");
      setToastVisible(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            className="p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone (SMS opt-in required)"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 text-sm">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
          <span>I consent to receive SMS updates from the campaign.</span>
        </label>

        <textarea
          placeholder="How would you like to help?"
          className="w-full p-3 border rounded h-32 dark:bg-gray-800 dark:border-gray-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          disabled={submitting}
          className="mx-auto block w-1/2 sm:w-1/3 bg-red-700 text-white font-semibold p-2 rounded-md hover:bg-red-800 text-center disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Sign Up"}
        </button>
      </form>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </>
  );
}
