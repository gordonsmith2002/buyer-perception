import { ContactRow, HighlightPanel, Logo, Mark, Masthead, R, Sheet } from "../interview/ReportPrimitives";
import {
  CONTACT,
  DISCLOSURE_COPY,
  FOOTER_HEADING,
  FOOTER_NOTE,
  FOOTER_OBSERVATION,
  PREPARED_BY,
  padEdition,
} from "./config";
import type { AnonymousEdition, InterviewSection as SectionData, PullQuote as PullQuoteData } from "./types";

function quotesForSection(edition: AnonymousEdition, heading: string): PullQuoteData[] {
  return edition.pullQuotes.filter((item) => item.placeAfterSection === heading);
}

function FacetPills({
  label,
  values,
  onDark = false,
}: {
  label: string;
  values: string[];
  onDark?: boolean;
}) {
  return (
    <div>
      <p
        className="font-sans text-[10px] font-medium tracking-[0.04em]"
        style={{ color: onDark ? R.footer : R.ink, opacity: onDark ? 0.75 : 0.7 }}
      >
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {values.map((value) => (
          <span
            key={value}
            className="inline-flex max-w-full items-center rounded-sm border px-2 py-1 font-sans text-[8px] font-medium uppercase tracking-[0.12em] md:px-2.5 md:text-[9px] md:tracking-[0.14em]"
            style={{
              borderColor: R.orange,
              color: onDark ? R.footer : R.ink,
            }}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

export function EditionCover({ edition }: { edition: AnonymousEdition }) {
  return (
    <Sheet bleed footer="none">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <header
          className="flex shrink-0 flex-col items-start gap-3 px-5 py-6 md:px-[12mm] md:py-[9mm] print:px-[12mm] print:py-[9mm]"
          style={{ background: R.white }}
        >
          <p
            className="font-sans text-[10px] font-medium uppercase tracking-[0.18em]"
            style={{ color: R.ink, opacity: 0.55 }}
          >
            Anonymous 1:1 · Edition {padEdition(edition.edition)} · {edition.date}
          </p>
          <Logo height={36} />
        </header>

        <div
          className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-visible px-5 pb-8 pt-8 md:overflow-hidden md:px-[14mm] md:pb-[16mm] md:pt-[14mm] print:overflow-hidden print:px-[14mm] print:pb-[16mm] print:pt-[14mm]"
          style={{ background: R.ink }}
        >
          <div
            className="pointer-events-none absolute -right-6 bottom-[-18mm] z-0 hidden md:block print:block"
            style={{ opacity: 0.16 }}
            aria-hidden
          >
            <Mark className="brightness-0 invert" width={280} />
          </div>

          <blockquote className="relative z-10 m-0 flex max-w-[176mm] items-center md:h-[74mm] md:min-h-[74mm]">
            <h1
              className="min-w-0 break-words font-sans text-[2.35rem] font-bold leading-[1.08] tracking-tight md:text-[4.15rem] md:leading-[1.04]"
              style={{ color: R.footer }}
            >
              <span style={{ color: R.orange }} aria-hidden>
                “
              </span>
              {edition.hookQuote}
              <span className="ml-0.5" style={{ color: R.orange }} aria-hidden>
                ”
              </span>
            </h1>
          </blockquote>

          <dl className="relative z-10 mt-6 space-y-1.5">
            {[
              { label: "Buyer Persona", value: edition.buyerPersona },
              { label: "Employer", value: edition.employer },
              { label: "Company Size", value: edition.companySize },
            ]
              .filter((row) => Boolean(row.value))
              .map((row) => (
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

          <div className="relative z-10 mt-6 space-y-4">
            <FacetPills label="Technologies covered" values={edition.technologies} onDark />
            <FacetPills label="Topics covered" values={edition.topics} onDark />
            <FacetPills label="Stage" values={edition.stage} onDark />
          </div>

          <div className="relative z-10 mt-auto pt-8">
            <p
              className="font-sans text-[8px] font-medium uppercase tracking-[0.18em]"
              style={{ color: R.footer, opacity: 0.55 }}
            >
              Prepared by
            </p>
            <p className="mt-1 font-sans text-[15px] font-bold" style={{ color: R.orange }}>
              {PREPARED_BY.name}
            </p>
            <p className="mt-0.5 font-sans text-[11px]" style={{ color: R.footer, opacity: 0.8 }}>
              {PREPARED_BY.role}
            </p>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

export function FramingBlock({ children }: { children: string }) {
  return (
    <p
      className="min-w-0 break-words font-sans text-[1.05rem] font-normal leading-[1.4] tracking-tight md:text-[1.15rem] md:leading-[1.35]"
      style={{ color: R.ink }}
    >
      {children}
    </p>
  );
}

export function DisclosureBlock() {
  return (
    <aside
      className="anon-edition-disclosure rounded-sm border px-4 py-4 md:px-5 md:py-4"
      style={{ borderColor: R.tan, background: "rgba(223, 209, 183, 0.28)" }}
    >
      {DISCLOSURE_COPY.map((paragraph) => (
        <p
          key={paragraph.slice(0, 40)}
          className="mt-2 min-w-0 break-words font-sans text-[11px] font-normal leading-[1.5] first:mt-0 md:text-[12px]"
          style={{ color: R.olive }}
        >
          {paragraph}
        </p>
      ))}
    </aside>
  );
}

export function InterviewSection({ section }: { section: SectionData }) {
  return (
    <section className="anon-edition-section min-w-0">
      <h2
        className="min-w-0 break-words font-sans text-[1.05rem] font-bold leading-snug md:text-[18px]"
        style={{ color: R.ink }}
      >
        “{section.heading}”
      </h2>
      <div className="mt-2.5 space-y-3">
        {section.exchanges.map((exchange) => (
          <div key={`${exchange.question}-${exchange.answer.slice(0, 24)}`}>
            {exchange.question ? (
              <p
                className="font-sans text-[12px] font-medium italic leading-snug"
                style={{ color: R.olive }}
              >
                {exchange.question}
              </p>
            ) : null}
            <div className={exchange.question ? "mt-1.5 space-y-1.5" : "space-y-1.5"}>
              {exchange.answer.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="min-w-0 break-words font-sans text-[11px] font-normal leading-[1.45]"
                  style={{ color: R.ink }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PullQuote({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <figure
      className="anon-edition-pullquote relative w-full self-center break-inside-avoid px-5 py-6"
      style={{ background: R.tan }}
    >
      <blockquote className="m-0">
        <p
          className="min-w-0 break-words font-sans text-[0.95rem] font-bold leading-snug"
          style={{ color: R.ink }}
        >
          “{quote}”
        </p>
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 font-sans text-[12px] font-bold" style={{ color: R.orange }}>
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionStack({
  edition,
  sections,
}: {
  edition: AnonymousEdition;
  sections: SectionData[];
}) {
  return (
    <div className="space-y-5">
      {sections.map((section) => (
        <div key={section.heading} className="space-y-5">
          <InterviewSection section={section} />
          {quotesForSection(edition, section.heading).map((item) => (
            <PullQuote key={item.quote} quote={item.quote} attribution={item.attribution} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function StatsBlock({ edition }: { edition: AnonymousEdition }) {
  return (
    <section
      className="anon-edition-stats relative -mx-5 mt-auto px-5 py-4 md:-mx-[16mm] md:px-[16mm] print:-mx-[16mm] print:px-[16mm]"
      style={{ background: R.orange }}
    >
      <h2
        className="font-sans text-[10px] font-medium uppercase tracking-[0.16em]"
        style={{ color: R.white, opacity: 0.85 }}
      >
        From this interview
      </h2>
      <div
        className={`mt-3 grid grid-cols-2 gap-x-4 gap-y-5 md:gap-5 print:gap-5 ${
          edition.stats.length === 3
            ? "md:grid-cols-3 print:grid-cols-3"
            : "md:grid-cols-4 print:grid-cols-4"
        }`}
      >
        {edition.stats.map((stat) => (
          <div key={stat.value} className="min-w-0">
            <p
              className="font-sans text-[1.7rem] font-bold leading-none tracking-tight"
              style={{ color: R.white }}
            >
              {stat.value}
            </p>
            <p
              className="mt-2 break-words font-sans text-[9.5px] font-normal leading-snug"
              style={{ color: R.white, opacity: 0.92 }}
            >
              {stat.context}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpreadOne({
  edition,
  first,
  second,
}: {
  edition: AnonymousEdition;
  first: SectionData;
  second?: SectionData;
}) {
  return (
    <Sheet footer="none" tall>
      <div className="flex min-h-0 flex-1 flex-col">
        <Masthead />
        <div className="mb-4 space-y-3">
          <FramingBlock>{edition.framing}</FramingBlock>
          <DisclosureBlock />
        </div>
        <HighlightPanel>
          <InterviewSection section={first} />
        </HighlightPanel>
        {second ? (
          <div className="mt-5">
            <InterviewSection section={second} />
          </div>
        ) : null}
      </div>
    </Sheet>
  );
}

function SpreadTwo({
  edition,
  sections,
}: {
  edition: AnonymousEdition;
  sections: SectionData[];
}) {
  const split = Math.ceil(sections.length / 2);
  const left = sections.slice(0, split);
  const right = sections.slice(split);
  return (
    <Sheet footer="none" tall>
      <div className="flex min-h-0 flex-1 flex-col">
        <Masthead />
        <div className="grid min-h-0 flex-1 grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-5 print:grid-cols-2 print:gap-x-8 print:gap-y-5">
          <SectionStack edition={edition} sections={left} />
          <SectionStack edition={edition} sections={right} />
        </div>
        <StatsBlock edition={edition} />
      </div>
    </Sheet>
  );
}

export function EditionFooter() {
  return (
    <Sheet footer="none">
      <div className="anon-edition-footer relative flex min-h-0 flex-1 flex-col pb-[12mm]">
        <Masthead />
        <div className="relative min-h-0 flex-1">
          <div
            className="pointer-events-none absolute -right-6 top-4 hidden opacity-95 md:block print:block"
            aria-hidden
          >
            <Mark width={210} />
          </div>
          <div className="relative max-w-[128mm]">
            <h2
              className="break-words font-sans text-[1.55rem] font-bold leading-[1.12] tracking-tight md:text-[2.05rem]"
              style={{ color: R.ink }}
            >
              {FOOTER_HEADING}
            </h2>
            <p
              className="mt-5 font-sans text-[13px] font-normal leading-[1.5] md:text-[14px]"
              style={{ color: R.ink }}
            >
              {FOOTER_OBSERVATION}
            </p>
          </div>
          <div className="anon-edition-contact relative mt-12 max-w-[110mm]">
            <p className="font-sans text-[15px] font-medium" style={{ color: R.ink }}>
              Get in touch
            </p>
            <span className="mb-4 mt-2 block h-px w-10" style={{ background: R.orange }} aria-hidden />
            <div className="space-y-2.5">
              <ContactRow icon="mail">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </ContactRow>
              <ContactRow icon="web">
                <a href={CONTACT.webHref}>{CONTACT.webLabel}</a>
              </ContactRow>
              <ContactRow icon="phone">
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </ContactRow>
            </div>
          </div>
        </div>
        <p
          className="mt-auto max-w-[150mm] pt-8 font-sans text-[9px] leading-snug"
          style={{ color: R.olive, opacity: 0.85 }}
        >
          {FOOTER_NOTE}
        </p>
      </div>
    </Sheet>
  );
}

export function EditionPage({ edition }: { edition: AnonymousEdition }) {
  const [first, second, ...rest] = edition.sections;
  return (
    <div className="anon-edition min-h-screen bg-neutral-200 print:min-h-0 print:bg-white">
      <div className="mx-auto w-full min-w-0 max-w-[210mm] print:max-w-none">
        <div className="anon-edition-chrome no-print flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="font-sans text-xs text-neutral-600">
            Anonymous 1:1 · Edition {padEdition(edition.edition)}
          </p>
        </div>
        <div className="flex flex-col gap-4 pb-8 md:gap-6 md:pb-10 print:gap-0 print:pb-0">
          <EditionCover edition={edition} />
          {first ? <SpreadOne edition={edition} first={first} second={second} /> : null}
          {rest.length > 0 ? <SpreadTwo edition={edition} sections={rest} /> : null}
          <EditionFooter />
        </div>
      </div>
    </div>
  );
}
