"use client";

import { useEffect } from "react";

export default function Toast({
  message,
  visible,
  onClose,
}: {
  message: string;
  visible: boolean;
  onClose?: () => void;
}) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => onClose && onClose(), 4000);
    return () => clearTimeout(t);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    // fixed top-right toast so it doesn't overlap page content
    <div aria-live="polite" className="fixed top-6 right-6 pointer-events-none z-50">
      <div
        role="status"
        className="pointer-events-auto bg-sky-900 text-white px-4 py-3 rounded shadow-lg max-w-sm w-full flex items-center space-x-3"
      >
        {/* Success icon */}
  <span className="shrink-0">
          <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="none" aria-hidden>
            <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <path d="M6.5 10.5l2 2 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <div className="flex-1 text-sm pr-2">{message}</div>

        <button
          aria-label="Dismiss"
          onClick={() => onClose && onClose()}
          className="ml-2 inline-flex items-center justify-center rounded hover:bg-white/10 p-1 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M6 6l8 8M14 6l-8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
