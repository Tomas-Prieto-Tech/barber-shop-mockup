"use client";

import { useEffect, useEffectEvent, useId, useRef, useState } from "react";
import type { MapLinks } from "@/data/site";

type MapLinkChooserProps = {
  links: MapLinks;
  label?: string;
  className?: string;
  variant?: "button" | "inline";
};

const providerOptions: Array<{ key: keyof MapLinks; label: string }> = [
  { key: "google", label: "Google Maps" },
  { key: "apple", label: "Apple Maps" },
  { key: "waze", label: "Waze" },
];

export function MapLinkChooser({
  links,
  label = "Open in Maps",
  className = "",
  variant = "inline",
}: MapLinkChooserProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useEffectEvent(() => {
    setOpen(false);
  });

  const handleDocumentKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement | null;

    if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    document.addEventListener("keydown", handleDocumentKeyDown);

    const originalOverflow = document.body.style.overflow;
    const originalMapModalState = document.body.dataset.mapModalOpen;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    document.body.dataset.mapModalOpen = "true";

    const focusTarget =
      dialogRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? dialogRef.current;

    focusTarget?.focus();

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
      document.body.style.overflow = originalOverflow;
      if (originalMapModalState === undefined) {
        delete document.body.dataset.mapModalOpen;
      } else {
        document.body.dataset.mapModalOpen = originalMapModalState;
      }
      triggerElement?.focus();
    };
  }, [open]);

  const triggerClassName =
    variant === "button"
      ? "inline-flex min-h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-paper)] transition hover:border-[var(--color-accent-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-blue)]"
      : "inline-flex text-sm uppercase tracking-[0.22em] text-[var(--color-paper)] underline decoration-[var(--color-accent-blue)] underline-offset-6 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-blue)]";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        className={`${triggerClassName} ${className}`.trim()}
        onClick={() => setOpen((currentOpen) => !currentOpen)}
      >
        {label}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm sm:p-6">
          <button
            type="button"
            aria-label="Close maps picker"
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex w-full max-w-md flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-[rgba(8,10,12,0.96)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-md focus:outline-none sm:rounded-[2rem] sm:p-6"
            tabIndex={-1}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-blue)]">
                  Choose App
                </p>
                <h2
                  id={titleId}
                  className="mt-2 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-paper)]"
                >
                  Open in Maps
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close maps picker"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xl text-[var(--color-paper)] transition hover:border-[var(--color-accent-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-blue)]"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="space-y-2">
              {providerOptions.map((provider) => (
                <a
                  key={provider.key}
                  href={links[provider.key]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm uppercase tracking-[0.2em] text-[var(--color-paper)] transition hover:border-[var(--color-accent-blue)] hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-blue)]"
                  onClick={() => setOpen(false)}
                >
                  <span>{provider.label}</span>
                  <span className="text-lg leading-none text-[var(--color-accent-blue)]">
                    ↗
                  </span>
                </a>
              ))}
            </div>
            <p className="text-sm leading-7 text-[var(--color-mist)]">
              Choose your preferred maps app to get directions to the shop.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
