import React from "react";
import Reveal from "./Reveal";

/** Tom's quotation device: oversized Terracotta marks + Charcoal body. */
export default function QuoteCallout({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  return (
    <Reveal delayMs={delayMs} className={className}>
      <figure className="relative max-w-4xl mx-auto text-center px-2 sm:px-6">
        <span
          aria-hidden
          className="block font-sans text-6xl sm:text-7xl leading-none text-terracotta select-none"
        >
          &ldquo;
        </span>
        <blockquote className="-mt-4 sm:-mt-6 font-sans text-xl sm:text-2xl leading-snug text-charcoal">
          {children}
        </blockquote>
      </figure>
    </Reveal>
  );
}
