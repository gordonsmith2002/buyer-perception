"use client";

import { useEffect, useState } from "react";
import { isAnalyticsOptedOut, setAnalyticsOptOut } from "../lib/analytics";

export default function AnalyticsOptOut() {
  const [countVisits, setCountVisits] = useState(true);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const optedOut = isAnalyticsOptedOut();
    setCountVisits(!optedOut);
    setShowThanks(optedOut);
  }, []);

  return (
    <div className="mt-12 border-t border-platinum pt-8">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-1.5 h-4 w-4 shrink-0 accent-terracotta"
          checked={countVisits}
          onChange={(event) => {
            const checked = event.target.checked;
            setCountVisits(checked);
            setShowThanks(!checked);
            setAnalyticsOptOut(!checked);
          }}
        />
        <span>
          <span className="block font-sans text-[16.5px] font-normal leading-snug text-charcoal">
            Count my visits to help improve this site
          </span>
          {showThanks ? (
            <span className="mt-2 block font-sans text-[15px] font-normal leading-snug text-charcoal/70">
              Thanks — we&apos;ve stopped counting visits from this browser.
            </span>
          ) : null}
        </span>
      </label>
    </div>
  );
}
