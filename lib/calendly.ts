const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

export function appendCalendlyUtms(url: string, search: string): string {
  try {
    const dest = new URL(url);
    const incoming = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);

    for (const key of UTM_KEYS) {
      const value = incoming.get(key);
      if (value) {
        dest.searchParams.set(key, value);
      }
    }

    return dest.toString();
  } catch {
    return url;
  }
}
