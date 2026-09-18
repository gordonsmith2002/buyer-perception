export const ANALYTICS_OPT_OUT_KEY = "bp-analytics-opt-out";
export const ANALYTICS_OPT_OUT_EVENT = "bp-analytics-preference";

export function isAnalyticsOptedOut(): boolean {
  try {
    return window.localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "true";
  } catch {
    return false;
  }
}

export function setAnalyticsOptOut(optOut: boolean): void {
  try {
    if (optOut) {
      window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "true");
    } else {
      window.localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
    }
  } catch {
    // Storage can be unavailable; the in-memory UI still updates.
  }

  window.dispatchEvent(new Event(ANALYTICS_OPT_OUT_EVENT));
}
