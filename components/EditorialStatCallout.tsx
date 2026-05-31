import React from "react";
import Reveal from "./Reveal";

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
      <div className="border-t-[3px] border-t-[#1a1a1a] pt-8 sm:pt-10">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
          <p
            className="font-serif text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] leading-none tracking-tight text-[#1a1a1a] shrink-0"
            aria-hidden
          >
            {percentage}
          </p>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] leading-snug text-[#1a1a1a]">
              {headline}
            </p>
            <p className="mt-4 text-xs sm:text-sm tracking-wide text-black/45">
              {source}
            </p>
          </div>
        </div>
        {children ? (
          <div className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg text-[#555] leading-relaxed">
            {children}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
