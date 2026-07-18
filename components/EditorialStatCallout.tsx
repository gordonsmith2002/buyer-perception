import React from "react";
import Reveal from "./Reveal";

/** Tom's data-visualisation callout: large stat + Charcoal headline, Terracotta accent. */
export default function EditorialStatCallout({
  percentage,
  headline,
  source,
  children,
  delayMs = 0,
}: {
  percentage: string;
  headline: string;
  source: string;
  children?: React.ReactNode;
  delayMs?: number;
}) {
  return (
    <Reveal delayMs={delayMs}>
      <div className="rounded-xl bg-sand px-6 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
          <div className="shrink-0 flex flex-col items-start">
            <p
              className="font-sans text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] font-semibold leading-none tracking-tight text-charcoal"
              aria-hidden
            >
              {percentage}
            </p>
            <div className="mt-3 h-1 w-14 bg-terracotta" aria-hidden />
          </div>
          <div className="min-w-0 flex-1 sm:pt-2">
            <p className="font-sans text-xl sm:text-2xl lg:text-[1.75rem] leading-snug text-charcoal">
              {headline}
            </p>
            <p className="mt-4 text-xs sm:text-sm tracking-wide text-charcoal/45">
              {source}
            </p>
          </div>
        </div>
        {children ? (
          <div className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg text-charcoal/70 leading-relaxed">
            {children}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
