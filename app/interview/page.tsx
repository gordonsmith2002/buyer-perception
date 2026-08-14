import type { Metadata } from "next";
import { october2026 } from "./edition";
import {
  ContactRow,
  Logo,
  Mark,
  Masthead,
  OrangePeriod,
  QuotePanel,
  R,
  SectionBlock,
  Sheet,
  StatsBand,
} from "./ReportPrimitives";

export const metadata: Metadata = {
  title: "Anonymous 1:1 · October 2026 | Buyer Perception",
  robots: { index: false, follow: false },
};

const edition = october2026;

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-neutral-200 print:bg-white print:min-h-0">
      <div className="mx-auto max-w-[210mm] print:max-w-none">
        <div className="no-print flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="font-sans text-xs text-neutral-600">
            Preview · A4 · Anonymous 1:1
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/exports/Buyer-Perception-Anonymous-1-1-October-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3.5 py-2 font-sans text-sm font-medium text-white"
              style={{ background: R.orange }}
            >
              Open PDF
            </a>
            <a
              href="/exports/Buyer-Perception-Anonymous-1-1-October-2026.pdf"
              download="Buyer-Perception-Anonymous-1-1-October-2026.pdf"
              className="rounded-md border border-black/15 bg-white px-3.5 py-2 font-sans text-sm font-medium"
              style={{ color: R.ink }}
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-10 print:gap-0 print:pb-0">
          <Cover />
          <SpreadOne />
          <SpreadTwo />
          <Close />
        </div>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <Sheet bleed>
      <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-[minmax(72mm,auto)_minmax(0,1fr)]">
        <div className="flex items-start px-[12mm] pt-[12mm]">
          <Logo height={36} />
        </div>

        <div
          className="row-span-2 flex items-center justify-center px-[12mm]"
          style={{ background: R.tan }}
        >
          <p
            className="max-w-[78mm] text-center font-sans text-[9px] font-medium uppercase leading-relaxed tracking-[0.18em]"
            style={{ color: R.ink }}
          >
            {edition.series}
          </p>
        </div>

        <div className="relative flex flex-col px-[12mm] pb-[10mm] pt-[14mm]" style={{ background: R.ink }}>
          <div
            className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 px-4 py-1.5"
            style={{ background: R.olive }}
          >
            <p className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white">
              {edition.dateLabel}
            </p>
          </div>
          <p
            className="font-sans text-[4.6rem] font-bold leading-none tracking-tight"
            style={{ color: R.orange }}
          >
            {edition.heroStat}
          </p>
          <h1 className="mt-3 font-sans text-[1.42rem] font-bold leading-[1.12] tracking-tight text-white">
            {edition.heroTitle}
            <OrangePeriod />
          </h1>
          <p className="mt-3 font-sans text-[11px] font-medium leading-snug text-white/85">
            {edition.subtitle}
          </p>
          <div className="mt-auto pt-8">
            <p className="font-sans text-[8px] font-medium uppercase tracking-[0.18em] text-white/55">
              Prepared by
            </p>
            <p
              className="mt-1 font-sans text-[15px] font-bold"
              style={{ color: R.orange }}
            >
              {edition.preparedBy.name}
            </p>
            <p className="mt-0.5 font-sans text-[11px] text-white/85">
              {edition.preparedBy.role}
            </p>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

function SpreadOne() {
  return (
    <Sheet>
      <Masthead page="02" />
      <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-8">
        <div>
          <div className="space-y-3">
            {edition.intro.map((p, i) => (
              <p
                key={p.slice(0, 32)}
                className={`font-sans leading-[1.45] ${
                  i === 0 ? "text-[13px] font-medium" : "text-[12px] font-normal"
                }`}
                style={{ color: R.olive }}
              >
                {p}
              </p>
            ))}
          </div>
          <div className="my-5 h-px w-14" style={{ background: R.orange }} />
          <div className="space-y-6">
            {edition.page2Sections.map((section) => (
              <SectionBlock key={section.heading} section={section} />
            ))}
          </div>
        </div>
        <QuotePanel quote={edition.page2Quote} />
      </div>
      <StatsBand stats={edition.page2Stats} tone="orange" />
    </Sheet>
  );
}

function SpreadTwo() {
  return (
    <Sheet>
      <Masthead page="03" />
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-x-8 gap-y-6">
        {edition.page3Sections.map((section) => (
          <SectionBlock key={section.heading} section={section} />
        ))}
      </div>

      <div className="mt-6 flex items-start gap-6 px-6 py-5" style={{ background: R.tan }}>
        <p
          className="shrink-0 font-sans text-[4.4rem] font-bold leading-none tracking-tight"
          style={{ color: R.orange }}
        >
          {edition.highlight.figure}
        </p>
        <div className="min-w-0 pt-1">
          <h2
            className="font-sans text-[18px] font-bold leading-snug"
            style={{ color: R.ink }}
          >
            “{edition.highlight.heading}”
          </h2>
          <div className="mt-2">
            {edition.highlight.items.map((item) => (
              <div key={item.q}>
                <p
                  className="font-sans text-[12px] font-medium italic leading-snug"
                  style={{ color: R.olive }}
                >
                  {item.q}
                </p>
                {item.a.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="mt-1.5 font-sans text-[11px] leading-[1.45]"
                    style={{ color: R.ink }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <StatsBand stats={edition.page3Stats} tone="ink" />
    </Sheet>
  );
}

function Close() {
  return (
    <Sheet>
      <Masthead />
      <div className="relative min-h-0 flex-1">
        <div
          className="pointer-events-none absolute -right-2 top-8 z-0"
          style={{ opacity: 0.12 }}
          aria-hidden
        >
          <Mark width={200} />
        </div>
        <div className="relative z-10 max-w-[125mm]">
          <h1
            className="font-sans text-[2.05rem] font-bold leading-[1.12] tracking-tight"
            style={{ color: R.ink }}
          >
            {edition.closeHeadline}
            <OrangePeriod />
          </h1>
          <p
            className="mt-5 font-sans text-[13px] font-normal leading-[1.5]"
            style={{ color: R.olive }}
          >
            {edition.closeSupport}
          </p>
        </div>

        <div className="relative z-10 mt-14 max-w-[110mm]">
          <p className="font-sans text-[15px] font-medium" style={{ color: R.ink }}>
            Get in touch
          </p>
          <span
            className="mt-2 mb-4 block h-px w-10"
            style={{ background: R.orange }}
            aria-hidden
          />
          <div className="space-y-2.5">
            <ContactRow icon="mail">
              <a href="mailto:gordon@buyerperception.com">
                gordon@buyerperception.com
              </a>
            </ContactRow>
            <ContactRow icon="web">
              <a href="https://buyerperception.com">www.buyerperception.com</a>
            </ContactRow>
            <ContactRow icon="phone">
              <a href="tel:+447493328672">+44 7493 328672</a>
            </ContactRow>
          </div>
        </div>
      </div>

      <p
        className="relative z-10 mt-auto max-w-[150mm] pt-8 font-sans text-[9px] leading-snug"
        style={{ color: R.olive, opacity: 0.85 }}
      >
        {edition.footnote}
      </p>
    </Sheet>
  );
}
