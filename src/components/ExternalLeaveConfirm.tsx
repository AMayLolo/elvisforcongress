"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  utm?: { [k: string]: string };
};

function addUtm(href: string, utm?: { [k: string]: string }) {
  if (!utm) return href;
  try {
    const url = new URL(href);
    Object.entries(utm).forEach(([k, v]) => url.searchParams.set(k, v));
    return url.toString();
  } catch (e) {
    // fallback: append naive query
    const qs = Object.entries(utm)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
    return href.includes("?") ? `${href}&${qs}` : `${href}?${qs}`;
  }
}

export default function ExternalLeaveConfirm({ href, children, className, utm }: Props) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const continueRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);

  const handleContinue = useCallback(() => {
    const finalHref = addUtm(href, utm);

    // Fire a GA event if available
    try {
      // @ts-ignore
      if (typeof window !== "undefined" && (window as any).gtag) {
        // @ts-ignore
        (window as any).gtag("event", "click", {
          event_category: "outbound",
          event_label: finalHref,
        });
      }
    } catch (e) {
      // ignore
    }

    // Open in a new tab
    window.open(finalHref, "_blank", "noopener,noreferrer");
    setOpen(false);
  }, [href, utm]);

  // Open the modal and save/restore focus
  const openModal = useCallback(() => {
    previousActiveRef.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    // restore focus to previously focused element
    setTimeout(() => {
      try {
        previousActiveRef.current?.focus();
      } catch (e) {
        // ignore
      }
    }, 0);
  }, []);

  // Handle Escape and Tab trapping
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
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
    // set initial focus to Cancel button when opened
    setTimeout(() => {
      try {
        cancelRef.current?.focus();
      } catch (e) {
        // ignore
      }
    }, 0);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
      >
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-hidden={!open}>
          <div className="absolute inset-0 bg-black/40" onClick={closeModal} />
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="external-leave-title"
            className="relative max-w-md w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
          >
            <h3 id="external-leave-title" className="text-lg font-semibold text-sky-900 dark:text-sky-100">
              You are leaving this site
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              The next page will open on an external site to complete your donation. Do you want to continue?
            </p>

            <div className="mt-4 flex justify-center gap-4">
              <button
                ref={cancelRef}
                type="button"
                className="px-4 py-2 rounded-md border bg-white dark:bg-gray-800"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                ref={continueRef}
                type="button"
                className="px-4 py-2 rounded-md bg-red-700 text-white hover:bg-red-800"
                onClick={handleContinue}
              >
                Continue to WinRed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
