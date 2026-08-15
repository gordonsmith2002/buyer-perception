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
  title: "Anonymous 1:1 · September 2026 | Buyer Perception",
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
          <SpreadThree />
        </div>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <Sheet bleed footer="none">
      <div className="flex min-h-0 flex-1 flex-col">
        <header
          className="flex shrink-0 items-center px-[12mm] py-[9mm]"
          style={{ background: R.white }}
        >
          <Logo height={36} />
        </header>

        <div
          className="relative flex min-h-0 flex-1 flex-col overflow-hidden px-[14mm] pb-[16mm] pt-[18mm]"
          style={{ background: R.ink }}
        >
          <div
            className="pointer-events-none absolute -right-6 bottom-[-18mm] z-0"
            style={{ opacity: 0.16 }}
            aria-hidden
          >
            <Mark className="brightness-0 invert" width={280} />
          </div>

          <div className="relative z-10 max-w-[165mm]">
            <p
              className="font-sans text-[2.55rem] font-bold leading-[1.08] tracking-tight"
              style={{ color: R.footer }}
            >
              {edition.reportTitle}
            </p>
            <dl className="mt-5 space-y-1.5">
              {edition.coverMeta.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline gap-x-2.5 font-sans text-[1.15rem] leading-snug"
                >
                  <dt
                    className="font-medium"
                    style={{ color: R.orange }}
                  >
                    {row.label}:
                  </dt>
                  <dd className="font-bold" style={{ color: R.footer }}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <span
              className="mt-5 block h-0.5 w-12"
              style={{ background: R.orange }}
              aria-hidden
            />
            <p
              className="mt-4 font-sans text-[10px] font-medium tracking-[0.04em]"
              style={{ color: R.footer, opacity: 0.75 }}
            >
              Topics covered include:
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {edition.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-sm border px-2.5 py-1 font-sans text-[9px] font-medium uppercase tracking-[0.14em]"
                  style={{
                    borderColor: R.orange,
                    color: R.footer,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <blockquote className="relative z-10 m-0 mt-[12mm] max-w-[155mm]">
            <p
              className="flex items-start font-sans text-[5.2rem] font-bold leading-none tracking-tight"
              style={{ color: R.orange }}
            >
              <span
                className="mr-1 mt-[0.18em] text-[2.15rem] leading-none"
                aria-hidden
              >
                “
              </span>
              {edition.heroStat}
            </p>
            <h1
              className="mt-4 font-sans text-[1.55rem] font-bold leading-[1.12] tracking-tight"
              style={{ color: R.footer }}
            >
              {edition.heroTitle}
              <OrangePeriod />
              <span className="ml-0.5" style={{ color: R.orange }} aria-hidden>
                ”
              </span>
            </h1>
          </blockquote>

          <div className="relative z-10 mt-auto pt-8">
            <p
              className="font-sans text-[8px] font-medium uppercase tracking-[0.18em]"
              style={{ color: R.footer, opacity: 0.55 }}
            >
              Prepared by
            </p>
            <p
              className="mt-1 font-sans text-[15px] font-bold"
              style={{ color: R.orange }}
            >
              {edition.preparedBy.name}
            </p>
            <p
              className="mt-0.5 font-sans text-[11px]"
              style={{ color: R.footer, opacity: 0.8 }}
            >
              {edition.preparedBy.role}
            </p>
          </div>
        </div>

        <div
          className="shrink-0 px-[14mm] py-[8mm]"
          style={{ background: R.footer }}
        >
          <div className="space-y-1.5">
            {edition.coverLines.map((line) => (
              <p
                key={line.punch}
                className="font-sans text-[1.05rem] font-bold leading-snug tracking-tight"
                style={{ color: R.ink }}
              >
                {line.rest}
                <span style={{ color: R.orange }}>{line.punch}</span>
                <OrangePeriod />
              </p>
            ))}
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
      <div className="grid min-h-0 flex-1 grid-cols-[1.7fr_0.75fr] items-center gap-7">
        <div>
          <div className="space-y-2.5">
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
            <p
              className="font-sans text-[12px] font-normal italic leading-[1.45]"
              style={{ color: R.olive }}
            >
              {edition.editorNote}
            </p>
            <p
              className="font-sans text-[11px] font-medium"
              style={{ color: R.orange }}
            >
              — {edition.editorNoteBy}
            </p>
          </div>
          <div className="my-4 h-px w-14" style={{ background: R.orange }} />
          <div className="space-y-5">
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
  const [clients, consultants, weaker, sixMonths] = edition.page3Sections;
  return (
    <Sheet>
      <Masthead page="03" />
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-x-8">
        <div className="flex min-h-0 flex-col">
          <SectionBlock section={clients} />
          <div className="my-auto py-5">
            <QuotePanel quote={edition.page3Quote} tone="orange" />
          </div>
          <SectionBlock section={weaker} />
        </div>
        <div className="flex min-h-0 flex-col gap-6">
          <SectionBlock section={consultants} />
          <SectionBlock section={sixMonths} />
        </div>
      </div>
    </Sheet>
  );
}

function SpreadThree() {
  return (
    <Sheet>
      <Masthead page="04" />
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div
          className="pointer-events-none absolute -right-2 bottom-4 z-0"
          style={{ opacity: 0.12 }}
          aria-hidden
        >
          <Mark width={180} />
        </div>
        <div className="relative z-10 grid min-h-0 flex-1 grid-cols-2 content-start gap-x-8 gap-y-5">
          {edition.page4Sections.map((section) => (
            <SectionBlock key={section.heading} section={section} />
          ))}
        </div>
        <div className="relative z-10 mt-auto pt-6">
          <p className="font-sans text-[15px] font-medium" style={{ color: R.ink }}>
            Get in touch
          </p>
          <span
            className="mt-2 mb-3 block h-px w-10"
            style={{ background: R.orange }}
            aria-hidden
          />
          <div className="flex flex-wrap gap-x-8 gap-y-2">
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
        className="relative z-10 mt-4 max-w-[150mm] font-sans text-[9px] leading-snug"
        style={{ color: R.olive, opacity: 0.85 }}
      >
        {edition.footnote}
      </p>
    </Sheet>
  );
}
