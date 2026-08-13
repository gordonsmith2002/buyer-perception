import Image from "next/image";
import type { ReactNode } from "react";
import type { PullQuote, QAItem, Section, Stat } from "./edition";

export const R = {
  orange: "#C1512D",
  ink: "#1A1A1A",
  tan: "#E8DFD0",
  olive: "#8B8455",
  white: "#FFFFFF",
  footer: "#F4F1EA",
} as const;

export function Sheet({
  children,
  bleed = false,
}: {
  children: ReactNode;
  bleed?: boolean;
}) {
  return (
    <article
      className={`a4-report relative mx-auto flex h-[297mm] w-full flex-col overflow-hidden bg-white shadow-sm print:h-[297mm] print:w-[210mm] print:shadow-none ${
        bleed ? "" : "px-[16mm] pb-[12mm] pt-[12mm]"
      }`}
    >
      {children}
    </article>
  );
}

export function OrangePeriod({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block translate-y-[0.02em] text-[1.12em] leading-none ${className}`}
      style={{ color: R.orange }}
    >
      .
    </span>
  );
}

export function Logo({ inverted = false, height = 32 }: { inverted?: boolean; height?: number }) {
  return (
    <Image
      src={inverted ? "/images/logo-inverted.svg" : "/images/logo-primary.svg"}
      alt="Buyer Perception"
      width={140}
      height={42}
      className="w-auto"
      style={{ height }}
      priority
    />
  );
}

export function Mark({
  className,
  width = 90,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <Image
      src="/images/interview/bp-mark.svg"
      alt=""
      width={width}
      height={Math.round(width * 1.75)}
      className={className}
      aria-hidden
    />
  );
}

export function Masthead({ page }: { page?: string }) {
  return (
    <header className="mb-6 flex items-start justify-between">
      <Logo height={28} />
      {page ? (
        <p
          className="pt-1 text-right font-sans text-[11px] font-medium tracking-[0.14em]"
          style={{ color: R.ink }}
        >
          {page}
          <span
            className="mt-1 block h-px w-7 ml-auto"
            style={{ background: R.olive }}
          />
        </p>
      ) : null}
    </header>
  );
}

export function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="min-w-0">
      <h2
        className="font-sans text-[18px] font-bold leading-snug"
        style={{ color: R.ink }}
      >
        “{section.heading}”
      </h2>
      <div className="mt-2.5 space-y-3">
        {section.items.map((item) => (
          <Exchange key={item.q} item={item} />
        ))}
      </div>
    </section>
  );
}

function Exchange({ item }: { item: QAItem }) {
  return (
    <div>
      <p
        className="font-sans text-[12px] font-medium italic leading-snug"
        style={{ color: R.olive }}
      >
        {item.q}
      </p>
      <div className="mt-1.5 space-y-1.5">
        {item.a.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="font-sans text-[11px] font-normal leading-[1.45]"
            style={{ color: R.ink }}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export function QuotePanel({ quote }: { quote: PullQuote }) {
  return (
    <aside className="relative flex h-full flex-col justify-between px-6 py-7" style={{ background: R.tan }}>
      <span
        className="font-sans text-[3.4rem] font-bold leading-none"
        style={{ color: R.orange }}
        aria-hidden
      >
        “
      </span>
      <p
        className="font-sans text-[1.05rem] font-bold leading-snug"
        style={{ color: R.ink }}
      >
        {quote.text}
      </p>
      <div>
        <span
          className="mt-5 block h-px w-10"
          style={{ background: R.orange }}
          aria-hidden
        />
        <p
          className="mt-3 font-sans text-[12px] font-bold"
          style={{ color: R.orange }}
        >
          {quote.attribution}
        </p>
        <p className="mt-0.5 font-sans text-[11px]" style={{ color: R.ink }}>
          {quote.role}
        </p>
      </div>
      <span
        className="absolute bottom-4 right-5 font-sans text-[3.4rem] font-bold leading-none"
        style={{ color: R.orange }}
        aria-hidden
      >
        ”
      </span>
    </aside>
  );
}

export function StatsBand({
  stats,
  tone = "orange",
}: {
  stats: Stat[];
  tone?: "orange" | "ink";
}) {
  const bg = tone === "orange" ? R.orange : R.ink;
  const figure = tone === "orange" ? R.white : R.orange;
  const desc = R.white;
  return (
    <div
      className="relative -mx-[16mm] mt-auto px-[16mm] py-4"
      style={{ background: bg }}
    >
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
      >
        {stats.map((stat) => (
          <div key={stat.figure}>
            <p
              className="font-sans text-[1.7rem] font-bold leading-none tracking-tight"
              style={{ color: figure }}
            >
              {stat.figure}
            </p>
            <p
              className="mt-2 font-sans text-[9.5px] font-normal leading-snug"
              style={{ color: desc, opacity: 0.92 }}
            >
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ValueProps() {
  const items = [
    { label: "Buyer Truth", icon: <IconBars color={R.orange} /> },
    { label: "Independent Insight", icon: <IconChat color={R.olive} /> },
    { label: "Competitive Intelligence", icon: <IconNodes color="#A89B7A" /> },
    { label: "Decision Confidence", icon: <IconShield color={R.ink} /> },
  ];
  return (
    <div
      className="grid grid-cols-4 divide-x"
      style={{ background: R.footer, borderColor: "#E2DCCF" }}
    >
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5 px-4 py-3.5">
          <span className="shrink-0">{item.icon}</span>
          <p
            className="font-sans text-[9px] font-medium leading-tight tracking-wide"
            style={{ color: R.ink }}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function IconBars({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="10" width="3.2" height="6" fill={color} />
      <rect x="7.4" y="6" width="3.2" height="10" fill={color} />
      <rect x="12.8" y="3" width="3.2" height="13" fill={color} />
    </svg>
  );
}

function IconChat({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M3 4.2h12v8.2H7.2L3 15.2V4.2Z"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

function IconNodes({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="4.2" r="1.6" fill={color} />
      <circle cx="4.2" cy="13.2" r="1.6" fill={color} />
      <circle cx="13.8" cy="13.2" r="1.6" fill={color} />
      <path d="M9 5.8 4.8 12M9 5.8l4.2 6.2M5.8 13.2h6.4" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

function IconShield({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 2.4 14.6 5v4.4c0 3.3-2.3 5.6-5.6 6.6-3.3-1-5.6-3.3-5.6-6.6V5L9 2.4Z"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      />
      <path d="M6.6 9.1 8.3 10.8 11.6 7.2" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

export function ContactRow({
  icon,
  children,
}: {
  icon: "phone" | "mail" | "web";
  children: ReactNode;
}) {
  return (
    <p className="flex items-center gap-2.5 font-sans text-[12px]" style={{ color: R.ink }}>
      <span
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ background: R.orange }}
      >
        {icon === "phone" ? (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="white" aria-hidden>
            <path d="M2.1 1.4h1.6l.7 1.8-1 1a6 6 0 0 0 2.4 2.4l1-1 1.8.7v1.6A6.6 6.6 0 0 1 2.1 1.4Z" />
          </svg>
        ) : icon === "mail" ? (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <rect x="1" y="2.2" width="8" height="5.6" stroke="white" strokeWidth="1" />
            <path d="M1.2 2.4 5 5.4 8.8 2.4" stroke="white" strokeWidth="1" />
          </svg>
        ) : (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <circle cx="5" cy="5" r="3.4" stroke="white" strokeWidth="1" />
            <path d="M1.6 5h6.8M5 1.6c1.2 1.2 1.8 2.3 1.8 3.4S6.2 7.2 5 8.4C3.8 7.2 3.2 6.1 3.2 5S3.8 2.8 5 1.6Z" stroke="white" strokeWidth="1" />
          </svg>
        )}
      </span>
      {children}
    </p>
  );
}
