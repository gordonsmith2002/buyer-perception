import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand palette compare (local preview)",
  robots: { index: false, follow: false },
};

const CURRENT = {
  label: "Current (live)",
  charcoal: "#383637",
  terracotta: "#B1694F",
  sand: "#DFD1B7",
  olive: "#847E42",
  platinum: "#EFEFEF",
} as const;

const GUIDE = {
  label: "Brand guidelines",
  charcoal: "#252626",
  terracotta: "#B94E30",
  sand: "#E1D4C0",
  olive: "#847E42",
  platinum: "#EFEFEF",
} as const;

type Palette = typeof CURRENT | typeof GUIDE;

function paletteStyle(p: Palette): CSSProperties {
  return {
    ["--bp-charcoal" as string]: p.charcoal,
    ["--bp-terracotta" as string]: p.terracotta,
    ["--bp-sand" as string]: p.sand,
    ["--bp-olive" as string]: p.olive,
    ["--bp-platinum" as string]: p.platinum,
  };
}

function Swatches({ palette }: { palette: Palette }) {
  const entries = [
    ["Charcoal", palette.charcoal],
    ["Terracotta", palette.terracotta],
    ["Sand", palette.sand],
    ["Platinum", palette.platinum],
    ["Olive", palette.olive],
  ] as const;

  return (
    <div className="grid grid-cols-5 gap-2">
      {entries.map(([name, hex]) => (
        <div key={name} className="min-w-0">
          <div
            className="aspect-square rounded-md border border-black/10"
            style={{ background: hex }}
          />
          <p className="mt-1.5 truncate font-sans text-[10px] font-semibold uppercase tracking-wide text-neutral-600">
            {name}
          </p>
          <p className="truncate font-mono text-[10px] text-neutral-500">
            {hex}
          </p>
        </div>
      ))}
    </div>
  );
}

function SampleSurfaces() {
  return (
    <div className="space-y-4">
      {/* Hero-like */}
      <div className="relative overflow-hidden rounded-xl bg-[var(--bp-charcoal)] px-5 py-8 text-[var(--bp-platinum)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 flex w-1/2 items-center justify-end pr-3 opacity-[0.08]"
        >
          <Image
            src="/images/logo-mark-sand.svg"
            alt=""
            width={120}
            height={200}
            className="h-28 w-auto"
          />
        </div>
        <p className="relative font-sans text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
          Win-loss tells you why you lost.{" "}
          <span className="text-[var(--bp-terracotta)]">Buyer Perception</span>{" "}
          tells you what that buyer is saying now.
        </p>
        <p className="relative mt-4 max-w-md border-l border-[var(--bp-terracotta)]/70 pl-3 text-sm leading-relaxed text-white/85">
          Anonymous interviews with lost prospects and churned customers — not
          what your CRM says.
        </p>
        <button
          type="button"
          className="relative mt-5 inline-flex rounded-md bg-[var(--bp-terracotta)] px-4 py-2.5 text-sm font-medium text-white"
        >
          Book a Call
        </button>
      </div>

      {/* Platinum utility + sand report */}
      <div className="rounded-xl bg-[var(--bp-platinum)] px-4 py-5 text-[var(--bp-charcoal)]">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--bp-terracotta)]">
          The Data Gap
        </p>
        <h3 className="mt-2 font-sans text-lg font-bold leading-snug">
          Your CRM captures the outcome. Not the perception.
        </h3>
        <div className="mt-4 overflow-hidden rounded-lg bg-[var(--bp-sand)]">
          <div className="grid grid-cols-2 border-b border-[var(--bp-charcoal)]/10">
            <div className="px-3 py-2 text-xs font-semibold">What they said</div>
            <div className="border-l-[3px] border-l-[var(--bp-olive)] bg-[var(--bp-platinum)]/60 px-3 py-2 text-xs font-semibold">
              What CRM stored
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="border-l-[3px] border-l-[var(--bp-terracotta)] px-3 py-3 text-xs italic leading-relaxed">
              “We liked the product but never heard back after the demo.”
            </div>
            <div className="border-l-[3px] border-l-[var(--bp-olive)] bg-[var(--bp-platinum)]/50 px-3 py-3 text-xs leading-relaxed">
              Closed-lost · No decision
            </div>
          </div>
        </div>
      </div>

      {/* Sand editorial */}
      <div className="rounded-xl bg-[var(--bp-sand)] px-4 py-5 text-[var(--bp-charcoal)]">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--bp-terracotta)]">
          The Invisible Pipeline
        </p>
        <h3 className="mt-2 font-sans text-lg font-bold leading-snug">
          Every lost buyer still talks about you.
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border-l-[3px] border-l-[var(--bp-olive)] bg-[var(--bp-platinum)] px-3 py-3">
            <p className="text-xs font-semibold text-[var(--bp-olive)]">
              What goes well
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--bp-charcoal)]/75">
              Strong product signal in late-stage demos
            </p>
          </div>
          <div className="rounded-lg border-l-[3px] border-l-[var(--bp-terracotta)] bg-[var(--bp-platinum)] px-3 py-3">
            <p className="text-xs font-semibold text-[var(--bp-terracotta)]">
              What to fix
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--bp-charcoal)]/75">
              Follow-up gaps after first meeting
            </p>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="relative overflow-hidden rounded-xl bg-[var(--bp-charcoal)] px-5 py-8 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.08]"
        >
          <Image
            src="/images/logo-mark-sand.svg"
            alt=""
            width={160}
            height={160}
            className="h-32 w-auto"
          />
        </div>
        <h3 className="relative font-sans text-xl font-bold leading-snug text-[var(--bp-sand)]">
          Find out what your buyers are really saying.
        </h3>
        <p className="relative mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[var(--bp-platinum)]/70">
          If your buyers don&apos;t engage, you don&apos;t pay.
        </p>
        <button
          type="button"
          className="relative mt-5 inline-flex rounded-md bg-[var(--bp-terracotta)] px-4 py-2.5 text-sm font-medium text-white"
        >
          Book a Call
        </button>
      </div>
    </div>
  );
}

function Pane({ palette }: { palette: Palette }) {
  return (
    <section
      style={paletteStyle(palette)}
      className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5"
    >
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="font-sans text-sm font-semibold tracking-tight text-neutral-900">
          {palette.label}
        </h2>
        <p className="font-mono text-[11px] text-neutral-500">
          {palette === CURRENT ? "site tokens" : "guide sheet"}
        </p>
      </div>
      <Swatches palette={palette} />
      <div className="my-5 h-px bg-neutral-200" />
      <SampleSurfaces />
    </section>
  );
}

export default function BrandComparePage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Local preview · not indexed · live homepage untouched
          </p>
          <h1 className="mt-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl">
            Palette compare
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Same sample surfaces, two token sets. Left is what&apos;s live today;
            right is the Colour Palette sheet. Production CSS tokens are
            unchanged.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Pane palette={CURRENT} />
          <Pane palette={GUIDE} />
        </div>
      </main>
    </div>
  );
}
