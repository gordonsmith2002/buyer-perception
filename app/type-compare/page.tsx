import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography compare (local preview)",
  robots: { index: false, follow: false },
};

function CurrentSamples() {
  return (
    <div className="space-y-6 [font-family:var(--font-inter),Inter,ui-sans-serif,system-ui,sans-serif]">
      <div className="rounded-xl bg-charcoal px-5 py-8 text-platinum">
        <p className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl [font-family:var(--font-editorial-checkpoint),Libre_Baskerville,ui-serif,Georgia,serif]">
          Win-loss tells you why you lost.{" "}
          <span className="text-terracotta">Buyer Perception</span> tells you
          what that buyer is saying now.
        </p>
        <p className="mt-4 max-w-md border-l border-terracotta/70 pl-3 font-sans text-sm font-normal leading-relaxed text-white/85">
          Anonymous interviews with lost prospects — body stays Inter Regular.
        </p>
      </div>

      <div className="rounded-xl bg-platinum px-4 py-5 text-charcoal">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
          The Data Gap
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug [font-family:var(--font-editorial-checkpoint),Libre_Baskerville,ui-serif,Georgia,serif]">
          Your CRM captures the outcome. Not the perception.
        </h3>
        <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-charcoal/70">
          Supporting copy in Inter Regular, as live.
        </p>
        <h4 className="mt-5 font-sans text-lg font-semibold leading-snug">
          Stage title (checkpoint: Semibold 600)
        </h4>
      </div>

      <div className="rounded-xl bg-sand px-4 py-5 text-charcoal">
        <h3 className="text-xl font-bold leading-snug [font-family:var(--font-editorial-checkpoint),Libre_Baskerville,ui-serif,Georgia,serif]">
          Every lost buyer still talks about you.
        </h3>
        <p className="mt-3 font-sans text-base font-semibold leading-snug">
          Closing line weight (checkpoint: Semibold)
        </p>
      </div>
    </div>
  );
}

function GuideSamples() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-charcoal px-5 py-8 text-platinum">
        <p className="font-sans text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
          Win-loss tells you why you lost.{" "}
          <span className="text-terracotta">Buyer Perception</span> tells you
          what that buyer is saying now.
        </p>
        <p className="mt-4 max-w-md border-l border-terracotta/70 pl-3 font-sans text-sm font-normal leading-relaxed text-white/85">
          Anonymous interviews with lost prospects — Inter Regular body copy.
        </p>
      </div>

      <div className="rounded-xl bg-platinum px-4 py-5 text-charcoal">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-terracotta">
          The Data Gap
        </p>
        <h3 className="mt-2 font-sans text-xl font-bold leading-snug">
          Your CRM captures the outcome. Not the perception.
        </h3>
        <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-charcoal/70">
          Supporting copy in Inter Regular.
        </p>
        <h4 className="mt-5 font-sans text-lg font-medium leading-snug">
          Stage title (guide: Medium 500)
        </h4>
      </div>

      <div className="rounded-xl bg-sand px-4 py-5 text-charcoal">
        <h3 className="font-sans text-xl font-bold leading-snug">
          Every lost buyer still talks about you.
        </h3>
        <p className="mt-3 font-sans text-base font-medium leading-snug">
          Closing line weight (guide: Medium)
        </p>
      </div>
    </div>
  );
}

function SpecCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="font-sans text-sm font-semibold tracking-tight text-neutral-900">
          {title}
        </h2>
        <p className="font-mono text-[11px] text-neutral-500">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

export default function TypeComparePage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Local preview · not indexed · checkpoint font only on this route
          </p>
          <h1 className="mt-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl">
            Typography compare
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Left is the pre-guidelines checkpoint (Libre Baskerville headlines +
            Inter). Right is the Typography sheet (Inter Bold / Medium /
            Regular). The marketing site no longer loads Libre Baskerville.
          </p>
          <p className="mt-3 max-w-2xl rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm leading-relaxed text-neutral-600">
            <span className="font-semibold text-neutral-800">MuseoModerno:</span>{" "}
            used only while designing the custom wordmark. Do not use it as a
            live UI font — always use the supplied logo artwork.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Headers
            </p>
            <p className="mt-1 font-sans text-lg font-bold">Inter Bold</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Sub headers
            </p>
            <p className="mt-1 font-sans text-lg font-medium">Inter Medium</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Body copy
            </p>
            <p className="mt-1 font-sans text-lg font-normal">Inter Regular</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <SpecCard title="Checkpoint (pre-guidelines)" subtitle="editorial + Inter">
            <CurrentSamples />
          </SpecCard>
          <SpecCard title="Brand guidelines" subtitle="Inter only">
            <GuideSamples />
          </SpecCard>
        </div>
      </main>
    </div>
  );
}
