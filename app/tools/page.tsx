"use client";

import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-tools-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-tools-sans",
});

const assets = [
  {
    name: "Buyer Perception Website",
    route: "/",
    note: "Public homepage and core messaging.",
  },
  {
    name: "Buyer Perception Report",
    route: "/report",
    note: "Report template and narrative output.",
  },
  {
    name: "Buyer Perception Exercise",
    route: "/exercise",
    note: "If this route is external, replace this link.",
  },
  {
    name: "Lead Magnet (Blind Spot Test)",
    route: "/blind-spot-test",
    note: "Provocation flow. Protected until launch.",
  },
  {
    name: "ROI Calculator",
    route: "/roi-calculator",
    note: "Internal business case tool for calls.",
  },
  {
    name: "Proposal Template",
    route: "/proposal-template",
    note: "Reusable client-ready proposal page.",
  },
];

export default function ToolsPage() {
  const handleLogout = async () => {
    await fetch("/api/internal-auth", { method: "DELETE" });
    window.location.href = "/login";
  };

  return (
    <main
      className={[
        playfair.variable,
        dmSans.variable,
        "min-h-screen bg-[#0a0a0f] px-5 py-10 text-white sm:px-8",
        "font-[var(--bp-tools-sans)]",
      ].join(" ")}
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/55">
              Internal Launcher
            </p>
            <h1 className="mt-3 font-[var(--bp-tools-serif)] text-4xl text-white">
              Buyer Perception Assets
            </h1>
            <p className="mt-3 text-sm text-white/70">
              Bookmark this page for one-click access to all active tools.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:border-white/35 hover:bg-white/10"
          >
            Log out
          </button>
        </header>

        <div className="grid gap-3">
          {assets.map((asset, idx) => (
            <a
              key={asset.name}
              href={asset.route}
              className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                Asset 0{idx + 1}
              </p>
              <p className="mt-1 font-[var(--bp-tools-serif)] text-2xl text-white">
                {asset.name}
              </p>
              <p className="mt-2 text-sm text-white/70">{asset.note}</p>
              <p className="mt-2 text-xs text-white/45">{asset.route}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
