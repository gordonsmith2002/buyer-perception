"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import { ANALYTICS_OPT_OUT_EVENT, isAnalyticsOptedOut } from "../lib/analytics";

export default function SiteAnalytics() {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const sync = () => {
      setEnabled(!isAnalyticsOptedOut());
    };

    sync();
    window.addEventListener(ANALYTICS_OPT_OUT_EVENT, sync);
    return () => window.removeEventListener(ANALYTICS_OPT_OUT_EVENT, sync);
  }, []);

  if (!enabled) {
    return null;
  }

  return <Analytics />;
}
