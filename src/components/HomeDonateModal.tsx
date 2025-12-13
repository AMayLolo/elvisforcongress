"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function HomeDonateModal() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const prevPathRef = useRef<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  // Open modal when navigating to the home page (initial load or internal nav)
  useEffect(() => {
    if (pathname === "/") {
      // If coming from a different path, or initial mount, show the modal
      if (prevPathRef.current !== "/") {
        setOpen(true);
      }
    }
    prevPathRef.current = pathname;
  }, [pathname]);

  const closeModal = useCallback(() => setOpen(false), []);

  // Accessibility: trap focus and handle Escape
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }

      if (e.key === "Tab") {
        const modal = modalRef.current;
        if (!modal) return;
        const focusable = Array.from(
          modal.querySelectorAll<HTMLElement>(
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // set initial focus to cancel button
    setTimeout(() => {
      try {
        cancelRef.current?.focus();
      } catch (e) {
        // ignore
      }
    }, 0);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

  const handleDonate = useCallback(() => {
    setOpen(false);
    // Navigate to internal donate page where confirmation to external WinRed occurs
    router.push("/donate");
  }, [router]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={closeModal} />

      <div
        ref={modalRef}
        className="relative max-w-lg w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold text-sky-900 dark:text-sky-100">Support the campaign</h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          Your support powers the campaign. Would you consider making a contribution to help us reach more voters?
        </p>

        <div className="mt-4 flex justify-center gap-3">
          <button
            ref={cancelRef}
            type="button"
            className="px-4 py-2 rounded-md border bg-white dark:bg-gray-800"
            onClick={closeModal}
          >
            Not now
          </button>

          <button
            type="button"
            className="px-4 py-2 rounded-md bg-red-700 text-white hover:bg-red-800"
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
