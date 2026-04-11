"use client";

import { DM_Sans, Playfair_Display } from "next/font/google";

/*
 * BUYER PERCEPTION — PROPOSAL TEMPLATE
 *
 * To create a new proposal:
 * 1. Duplicate this project folder
 * 2. Update PROPOSAL_DATA object at top of this file with client-specific info
 * 3. Run locally to check: npm run dev
 * 4. Deploy to Vercel: vercel --prod
 * 5. Custom domain: proposals.buyerperception.com/[client-name]
 *
 * ROI numbers come from the ROI Calculator tool — run it first with client inputs.
 * Situation text comes from your discovery call notes.
 * Timeline adjusts based on engagement scope.
 */

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-proposal-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-proposal-sans",
});

const PROPOSAL_DATA = {
  clientName: "Meridian Solutions",
  // Helper for deployment URL naming: proposals.buyerperception.com/[clientSlug]
  clientSlug: "meridian-solutions",
  contactName: "Sarah Chen",
  contactTitle: "Chief Revenue Officer",
  proposalDate: "April 2026",
  validUntil: "30 April 2026",
  situation: [
    "You're running approximately 40 competitive deals per quarter at an average deal value of £85,000.",
    "Your current win rate is around 25%, and your CRM attributes most losses to pricing — but you've expressed uncertainty about whether that's the real picture.",
    "Your team has grown from 4 to 12 AEs in the past 18 months, and you suspect the buying experience hasn't scaled with the team.",
  ],
  scope: {
    type: "New Business Analysis",
    interviews: 10,
    cohorts: ["Closed Lost (last 6 months)"],
    timeline: "3-4 weeks from kick-off to debrief",
    includes: [
      "Buyer Perception Exercise with your leadership team",
      "10 anonymous interviews with lost prospects",
      "Buyer Perception Report (17 pages)",
      "60-minute strategic debrief with leadership team",
    ],
  },
  roi: {
    winRate: {
      current: 25,
      improved: 27.5,
      additionalDeals: 3,
      additionalRevenue: 255000,
      label: "10% improvement in win rate",
    },
    pipeline: {
      criticsEstimate: 20,
      annualDamage: 850000,
      potentialSwing: 212500,
    },
    combinedImpact: 467500,
    roiMultiple: 93,
    engagementFee: 5000,
  },
  timelineSteps: [
    {
      week: "Week 1",
      label: "Buyer Perception Exercise",
      detail: "Leadership team scoring session + contact list preparation",
    },
    {
      week: "Week 1-2",
      label: "Outreach + Checkpoint",
      detail: "CEO-signed emails to lost prospects. 72-hour engagement checkpoint.",
    },
    {
      week: "Week 2-3",
      label: "Anonymous Interviews",
      detail: "10 structured conversations with your lost prospects.",
    },
    {
      week: "Week 3-4",
      label: "Report + Debrief",
      detail:
        "Buyer Perception Report delivered. 60-minute strategic debrief with your leadership team.",
    },
  ],
  calendlyUrl: "https://calendly.com/admin-buyerperception/30min",
  email: "gordon@buyerperception.com",
};

const outcomes = [
  {
    title: "Your Buyer Perception Score",
    detail:
      "A single number showing how your market actually perceives you, scored across five dimensions.",
  },
  {
    title: "The Perception Gap",
    detail:
      "Where your leadership team's predictions match buyer reality — and where they don't.",
  },
  {
    title: "Your Advocate-to-Critic Ratio",
    detail:
      "How many lost prospects would recommend you to a peer, and how many are actively steering people away.",
  },
  {
    title: "Competitive Intelligence",
    detail:
      "Who you're actually losing to, why, and how buyers rank your experience against alternatives.",
  },
  {
    title: "Team Perception",
    detail:
      "How buyers perceived the people they dealt with — trusted advisor or salesperson?",
  },
  {
    title: "Prioritised Actions",
    detail:
      "What to fix first, what to double down on, ranked by impact. Monday morning changes, not six-month projects.",
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-black/10 py-14 sm:py-20 print:py-10">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.16em] text-[#999]">{label}</p>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default function ProposalTemplatePage() {
  return (
    <main
      className={[
        playfair.variable,
        dmSans.variable,
        "bg-[#FAFAF8] text-[#1a1a1a] font-[var(--bp-proposal-sans)]",
      ].join(" ")}
    >
      {/* TODO: Add Vercel Analytics or PostHog snippet here */}

      <section className="relative min-h-[92vh] bg-[#0a0a0f] text-white print:min-h-0 print:py-10">
        <div className="mx-auto flex min-h-[92vh] max-w-[1100px] flex-col px-5 py-10 sm:px-8 print:min-h-0 print:py-4">
          <header className="flex items-center justify-between border-b border-white/15 pb-4">
            <p className="font-[var(--bp-proposal-serif)] text-lg tracking-tight">
              Buyer Perception
            </p>
            <p className="text-sm text-white/60">{PROPOSAL_DATA.proposalDate}</p>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="font-[var(--bp-proposal-serif)] text-5xl text-white/80 sm:text-6xl">
              Proposal
            </p>
            <h1 className="mt-3 max-w-3xl font-[var(--bp-proposal-serif)] text-5xl leading-tight text-white sm:text-7xl">
              {PROPOSAL_DATA.clientName}
            </h1>
            <p className="mt-5 text-base text-white/65 sm:text-lg">
              Prepared for {PROPOSAL_DATA.contactName}, {PROPOSAL_DATA.contactTitle}
            </p>
          </div>

          <footer className="border-t border-white/15 pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-white/55">
              Confidential
            </p>
            <p className="mt-3 text-xs text-white/45">scroll</p>
          </footer>
        </div>
      </section>

      <Section label="THE SITUATION">
        <div className="max-w-[650px] space-y-5 text-base leading-[1.85] text-[#555] sm:text-lg">
          {PROPOSAL_DATA.situation.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="pt-4 font-medium italic text-[#3b3b3b]">
            The question is whether your CRM is telling you the real story — or a
            convenient one.
          </p>
        </div>
      </Section>

      <Section label="WHAT WE'LL DO">
        <div className="grid gap-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-black/10 bg-black/[0.02] px-4 py-1.5 text-sm font-semibold text-[#1a1a1a]">
              {PROPOSAL_DATA.scope.type}
            </span>
            <span className="text-sm text-[#777]">
              Total timeline: {PROPOSAL_DATA.scope.timeline}
            </span>
          </div>

          <div className="grid gap-3 rounded-md border border-black/10 bg-white/60 p-5 text-sm leading-relaxed text-[#444] sm:text-base">
            <p>
              {PROPOSAL_DATA.scope.interviews} anonymous interviews with your{" "}
              {PROPOSAL_DATA.scope.cohorts.join(", ")} cohort.
            </p>
            <p>
              Conducted by an independent researcher — completely separate from
              your team.
            </p>
            <p>
              Delivered as a 17-page Buyer Perception Report with a 60-minute
              strategic debrief.
            </p>
          </div>

          <div className="grid gap-2">
            {PROPOSAL_DATA.scope.includes.map((item, idx) => (
              <div
                key={item}
                className="grid grid-cols-[24px_1fr] gap-3 border-b border-black/10 py-3 text-sm sm:text-base"
              >
                <span className="font-semibold text-[#999]">0{idx + 1}</span>
                <span className="text-[#444]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section label="WHAT YOU'LL LEARN">
        <div className="grid gap-3 sm:grid-cols-2">
          {outcomes.map((item, idx) => (
            <article
              key={item.title}
              className="rounded-md border-l-2 border-black/20 bg-white/70 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#999]">
                0{idx + 1}
              </p>
              <h3 className="mt-1 font-[var(--bp-proposal-serif)] text-xl text-[#1a1a1a]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555]">{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section label="THE FINANCIAL CASE">
        <p className="text-sm text-[#666] sm:text-base">
          Based on the metrics you shared in our conversation:
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-md border border-black/10 bg-white/80 p-5">
            <p className="font-[var(--bp-proposal-serif)] text-4xl text-[#1a1a1a]">
              {formatCurrency(PROPOSAL_DATA.roi.winRate.additionalRevenue)}
            </p>
            <p className="mt-2 text-sm text-[#444]">
              additional annual revenue from a {PROPOSAL_DATA.roi.winRate.label}
            </p>
            <p className="mt-3 text-sm text-[#555]">
              That&apos;s {PROPOSAL_DATA.roi.winRate.additionalDeals} additional deals
              per year at{" "}
              {formatCurrency(
                PROPOSAL_DATA.roi.winRate.additionalRevenue /
                  PROPOSAL_DATA.roi.winRate.additionalDeals,
              )}{" "}
              each.
            </p>
            <p className="mt-3 text-xs text-[#888]">
              Moving from {PROPOSAL_DATA.roi.winRate.current}% to{" "}
              {PROPOSAL_DATA.roi.winRate.improved}% — a modest, achievable shift.
            </p>
          </article>

          <article className="rounded-md border border-black/10 bg-white/80 p-5">
            <p className="font-[var(--bp-proposal-serif)] text-4xl text-[#1a1a1a]">
              {formatCurrency(PROPOSAL_DATA.roi.pipeline.potentialSwing)}
            </p>
            <p className="mt-2 text-sm text-[#444]">
              potential annual swing from shifting buyer perception
            </p>
            <p className="mt-3 text-sm text-[#555]">
              Moving just 5 critics to neutral eliminates approximately{" "}
              {formatCurrency(PROPOSAL_DATA.roi.pipeline.potentialSwing)} in
              invisible pipeline damage.
            </p>
            <p className="mt-3 text-xs text-[#888]">
              Critics are having 2-3 negative conversations per year about you
              right now.
            </p>
          </article>
        </div>

        <div className="mt-5 rounded-md border border-black/10 bg-black/[0.03] p-5">
          <div className="grid gap-3 text-sm sm:grid-cols-3 sm:items-end">
            <p className="text-[#333]">
              Combined potential impact:{" "}
              <strong>{formatCurrency(PROPOSAL_DATA.roi.combinedImpact)} per year</strong>
            </p>
            <p className="text-[#333]">
              Your investment:{" "}
              <strong>{formatCurrency(PROPOSAL_DATA.roi.engagementFee)}</strong>
            </p>
            <p className="font-[var(--bp-proposal-serif)] text-3xl text-[#34d399] sm:text-right">
              ROI: {PROPOSAL_DATA.roi.roiMultiple}x
            </p>
          </div>
          <p className="mt-3 text-sm text-[#666]">
            Even the most conservative scenario — a 5% win rate improvement alone
            — pays for this engagement multiple times over.
          </p>
        </div>
      </Section>

      <Section label="INVESTMENT">
        <div className="grid gap-6 rounded-md border border-black/10 bg-black/[0.015] p-6">
          <p className="font-[var(--bp-proposal-serif)] text-6xl text-[#1a1a1a]">
            {formatCurrency(PROPOSAL_DATA.roi.engagementFee)}
          </p>

          <div className="grid gap-2 text-sm text-[#444] sm:text-base">
            {[
              "Buyer Perception Exercise with your leadership team",
              "10 anonymous interviews with lost prospects",
              "17-page Buyer Perception Report",
              "60-minute strategic debrief",
              "Prioritised action plan",
            ].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="rounded-md border border-[#34d399]/50 bg-[#34d399]/10 p-4 text-sm leading-relaxed text-[#1f513f]">
            If your buyers don&apos;t engage, you don&apos;t pay. We share
            registration data within 72 hours of outreach. If participation falls
            below threshold, we pause — no charge.
          </div>

          <p className="text-sm text-[#777]">
            This proposal is valid until {PROPOSAL_DATA.validUntil}.
          </p>
        </div>
      </Section>

      <Section label="TIMELINE">
        <div className="relative">
          <div className="absolute left-2 top-2 hidden h-[calc(100%-16px)] w-px bg-black/15 sm:block" />
          <div className="grid gap-4">
            {PROPOSAL_DATA.timelineSteps.map((step, idx) => (
              <article
                key={step.week + step.label}
                className="relative grid gap-2 rounded-md border border-black/10 bg-white/70 p-4 sm:grid-cols-[120px_1fr]"
              >
                <div className="hidden h-4 w-4 rounded-full border border-black/25 bg-[#FAFAF8] sm:absolute sm:-left-[9px] sm:top-6 sm:block" />
                <p className="text-sm font-semibold text-[#1a1a1a]">{step.week}</p>
                <div>
                  <p className="font-[var(--bp-proposal-serif)] text-xl text-[#1a1a1a]">
                    {idx + 1}. {step.label}
                  </p>
                  <p className="mt-1 text-sm text-[#555]">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section label="ABOUT">
        <div className="max-w-[680px] space-y-5 text-base leading-[1.85] text-[#555] sm:text-lg">
          <p>
            I spent a decade in B2B revenue leadership, running sales teams at
            LinkedIn, Hired, and Hubble. I know how companies make decisions
            about their pipeline, their positioning, and their competition — and I
            know how much of that is guesswork dressed up as data.
          </p>
          <p>
            Buyer Perception exists because every company deserves to hear what
            their market actually thinks.
          </p>
        </div>
      </Section>

      <section className="border-t border-black/10 bg-[#0a0a0f] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-8">
          <h2 className="font-[var(--bp-proposal-serif)] text-4xl leading-tight sm:text-5xl">
            Ready to find out what your buyers really think?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            To proceed, confirm by {PROPOSAL_DATA.validUntil} and we&apos;ll
            schedule your Buyer Perception Exercise — a 30-60 minute session
            where your leadership team predicts how buyers would score you, before
            we go and find out.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PROPOSAL_DATA.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-[190px] justify-center rounded-md border border-[#c0392b] bg-[#c0392b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228]"
            >
              Book a Call →
            </a>
            <a
              href={`mailto:${PROPOSAL_DATA.email}`}
              className="inline-flex min-w-[190px] justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/35 hover:bg-white/10"
            >
              Email Gordon
            </a>
          </div>

          <p className="mt-4 text-sm text-white/55">{PROPOSAL_DATA.email}</p>
          <p className="mt-10 text-xs text-white/40">
            Buyer Perception | Confidential | © 2026
          </p>
        </div>
      </section>

      <style jsx global>{`
        @media print {
          html,
          body {
            background: #fafaf8 !important;
          }

          a {
            text-decoration: none !important;
          }

          section {
            break-inside: avoid-page;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}
