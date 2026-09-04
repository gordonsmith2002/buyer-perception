import type { Metadata } from "next";
import { edition002 as edition } from "../interview/edition-002";
import {
  ContactRow,
  HighlightPanel,
  Logo,
  Mark,
  Masthead,
  OrangePeriod,
  QuotePanel,
  R,
  SectionBlock,
  Sheet,
  StatsBand,
} from "../interview/ReportPrimitives";

export const metadata: Metadata = {
  title: "Anonymous 1:1 · Edition 002 · September 2026 | Buyer Perception",
  robots: { index: false, follow: false },
};

export default function Interview002Page() {
  return (
    <div className="min-h-screen bg-neutral-200 print:min-h-0 print:bg-white">
      <div className="mx-auto w-full min-w-0 max-w-[210mm] print:max-w-none">
        <div className="no-print flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="font-sans text-xs text-neutral-600">
            Preview · Anonymous 1:1 · Edition 002
          </p>
        </div>

        <div className="flex flex-col gap-4 pb-8 md:gap-6 md:pb-10 print:gap-0 print:pb-0">
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
    <Sheet bleed footer="none">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <header
          className="flex shrink-0 items-center px-5 py-6 md:px-[12mm] md:py-[9mm] print:px-[12mm] print:py-[9mm]"
          style={{ background: R.white }}
        >
          <Logo height={36} />
        </header>

        <div
          className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-visible px-5 pb-8 pt-8 md:overflow-hidden md:px-[14mm] md:pb-[16mm] md:pt-[18mm] print:overflow-hidden print:px-[14mm] print:pb-[16mm] print:pt-[18mm]"
          style={{ background: R.ink }}
        >
          <div
            className="pointer-events-none absolute -right-6 bottom-[-18mm] z-0 hidden md:block print:block"
            style={{ opacity: 0.16 }}
            aria-hidden
          >
            <Mark className="brightness-0 invert" width={280} />
          </div>

          <div className="relative z-10 max-w-[165mm]">
            <p
              className="font-sans text-[1.6rem] font-bold leading-[1.1] tracking-tight break-words md:text-[2.55rem] md:leading-[1.08]"
              style={{ color: R.footer }}
            >
              {edition.reportTitle}
            </p>
            <dl className="mt-5 space-y-1.5">
              {edition.coverMeta.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline gap-x-2.5 font-sans text-base leading-snug md:text-[1.15rem]"
                >
                  <dt className="font-medium" style={{ color: R.orange }}>
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
                  className="inline-flex max-w-full items-center rounded-sm border px-2 py-1 font-sans text-[8px] font-medium uppercase tracking-[0.12em] md:px-2.5 md:text-[9px] md:tracking-[0.14em]"
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
            <h1
              className="font-sans text-[1.2rem] font-bold leading-[1.2] tracking-tight break-words md:text-[1.55rem] md:leading-[1.12]"
              style={{ color: R.footer }}
            >
              <span style={{ color: R.orange }} aria-hidden>
                “
              </span>
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
          className="shrink-0 px-5 py-5 md:px-[14mm] md:py-[8mm] print:px-[14mm] print:py-[8mm]"
          style={{ background: R.footer }}
        >
          <div className="space-y-1.5">
            {edition.coverLines.map((line) => (
              <p
                key={line.punch}
                className="font-sans text-[0.95rem] font-bold leading-snug tracking-tight break-words md:text-[1.05rem]"
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
    <Sheet footer="none">
      <div className="flex min-h-0 flex-1 flex-col">
        <Masthead page="02" />
        <HighlightPanel>
          <SectionBlock section={edition.churnSection} />
        </HighlightPanel>
        <div className="mt-5 grid min-h-0 flex-1 grid-cols-1 items-start gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-7 print:grid-cols-[1.15fr_0.85fr] print:gap-7">
          <SectionBlock section={edition.demosSection} />
          <QuotePanel quote={edition.page2Quote} />
        </div>
      </div>
    </Sheet>
  );
}

function SpreadTwo() {
  const [cold, process] = edition.supportingSections;
  return (
    <Sheet footer="none">
      <div className="flex min-h-0 flex-1 flex-col">
        <Masthead page="03" />
        <div className="grid min-h-0 flex-1 grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-5 print:grid-cols-2 print:gap-x-8 print:gap-y-5">
          <div className="space-y-5">
            <SectionBlock section={edition.advocateSection} />
            <SectionBlock section={cold} />
          </div>
          <div className="flex min-h-0 flex-col gap-5">
            <SectionBlock section={edition.closeThought} />
            <SectionBlock section={process} />
            <QuotePanel quote={edition.page3Quote} />
          </div>
        </div>
        <StatsBand stats={edition.page2Stats} tone="orange" />
      </div>
    </Sheet>
  );
}

function Close() {
  return (
    <Sheet footer="none">
      <div className="flex min-h-0 flex-1 flex-col pb-[12mm]">
        <Masthead />
        <div className="relative min-h-0 flex-1">
          <div
            className="pointer-events-none absolute -right-6 top-4 hidden opacity-95 md:block print:block"
            aria-hidden
          >
            <Mark width={210} />
          </div>
          <div className="relative max-w-[128mm]">
            <h1
              className="font-sans text-[1.55rem] font-bold leading-[1.12] tracking-tight md:text-[2.05rem]"
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
            <p
              className="mt-5 font-sans text-[12px] font-normal leading-[1.5]"
              style={{ color: R.ink }}
            >
              {edition.closeCta}
            </p>
            <p
              className="mt-4 font-sans text-[13px] font-bold leading-[1.45]"
              style={{ color: R.ink }}
            >
              {edition.closeCtaBold}
            </p>
          </div>

          <div className="relative mt-12 max-w-[110mm]">
            <p
              className="font-sans text-[15px] font-medium"
              style={{ color: R.ink }}
            >
              Get in touch
            </p>
            <span
              className="mb-4 mt-2 block h-px w-10"
              style={{ background: R.orange }}
              aria-hidden
            />
            <div className="space-y-2.5">
              <ContactRow icon="mail">
                <a href="mailto:gordon@buyerperception.co.uk">
                  gordon@buyerperception.co.uk
                </a>
              </ContactRow>
              <ContactRow icon="web">
                <a href="https://www.buyerperception.co.uk">
                  www.buyerperception.co.uk
                </a>
              </ContactRow>
              <ContactRow icon="phone">
                <a href="tel:+447493328672">+44 7493 328672</a>
              </ContactRow>
            </div>
          </div>
        </div>

        <p
          className="mt-auto max-w-[150mm] pt-8 font-sans text-[9px] leading-snug"
          style={{ color: R.olive, opacity: 0.85 }}
        >
          {edition.footnote}
        </p>
      </div>
    </Sheet>
  );
}
