import React from "react";
import Reveal from "./Reveal";

function PersonNode({
  size = "sm",
  className,
}: {
  size?: "lg" | "sm" | "xs";
  className?: string;
}) {
  const scale = size === "lg" ? 1.35 : size === "sm" ? 0.72 : 0.52;
  return (
    <svg
      viewBox="0 0 32 40"
      width={28 * scale}
      height={35 * scale}
      className={className}
      aria-hidden
    >
      <circle cx="16" cy="10" r="7" fill="currentColor" />
      <path
        d="M4 38 C4 28 8 22 16 22 C24 22 28 28 28 38"
        fill="currentColor"
      />
    </svg>
  );
}

function FanArrows({
  variant,
  className,
}: {
  variant: "advocate" | "critic";
  className?: string;
}) {
  const stroke = variant === "advocate" ? "#3d6b4f" : "#64748b";
  const markerId = `arrow-${variant}`;
  return (
    <svg
      viewBox="0 0 56 80"
      className={["w-12 sm:w-14 shrink-0 self-center", className].join(" ")}
      aria-hidden
    >
      <defs>
        <marker
          id={markerId}
          markerWidth="5"
          markerHeight="5"
          refX="4"
          refY="2.5"
          orient="auto"
        >
          <path d="M0,0 L5,2.5 L0,5 Z" fill={stroke} fillOpacity="0.55" />
        </marker>
      </defs>
      <path
        d="M2 40 C16 38 28 22 54 12"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        strokeOpacity="0.48"
        markerEnd={`url(#${markerId})`}
      />
      <path
        d="M2 40 L54 40"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        strokeOpacity="0.58"
        markerEnd={`url(#${markerId})`}
      />
      <path
        d="M2 40 C16 42 28 58 54 68"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        strokeOpacity="0.48"
        markerEnd={`url(#${markerId})`}
      />
    </svg>
  );
}

type PanelProps = {
  variant: "advocate" | "critic";
  title: string;
  nodeLabel: string;
  outcomes: [string, string, string];
  secondaryLabel: string;
  pipelineValue: string;
  footnote: string;
  delayMs?: number;
};

function PeerOutcome({
  caption,
  variant,
}: {
  caption: string;
  variant: "advocate" | "critic";
}) {
  const isAdv = variant === "advocate";
  return (
    <div className="flex flex-col items-center text-center min-w-0 flex-1 px-1">
      <div
        className={[
          "flex items-center justify-center",
          isAdv ? "text-emerald-800/75" : "text-slate-600/75",
        ].join(" ")}
      >
        <PersonNode size="sm" />
      </div>
      <p className="mt-2 text-[11px] sm:text-xs leading-snug text-[#444]">
        {caption}
      </p>
    </div>
  );
}

function RipplePanel({
  variant,
  title,
  nodeLabel,
  outcomes,
  secondaryLabel,
  pipelineValue,
  footnote,
  delayMs = 0,
}: PanelProps) {
  const isAdv = variant === "advocate";
  return (
    <Reveal delayMs={delayMs} className="flex-1 min-w-0">
      <div
        className={[
          "h-full border border-black/10 px-5 py-8 sm:px-7 sm:py-10",
          isAdv ? "bg-[#eef5ef]/60" : "bg-[#f4f4f5]/80",
        ].join(" ")}
      >
        <p
          className={[
            "text-[10px] tracking-[0.22em] uppercase font-semibold",
            isAdv ? "text-emerald-900/70" : "text-slate-600",
          ].join(" ")}
        >
          {title}
        </p>

        <div className="mt-8 flex items-center gap-2 sm:gap-3">
          <div
            className={[
              "flex flex-col items-center shrink-0 w-[64px] sm:w-[76px]",
              isAdv ? "text-emerald-800/85" : "text-slate-600/85",
            ].join(" ")}
          >
            <PersonNode size="lg" />
            <p className="mt-2 text-[11px] sm:text-xs font-medium text-[#1a1a1a] text-center leading-snug">
              {nodeLabel}
            </p>
          </div>

          <FanArrows variant={variant} />

          <div className="flex-1 min-w-0 overflow-x-auto">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 min-w-[240px] items-start">
              {outcomes.map((line) => (
                <PeerOutcome key={line} caption={line} variant={variant} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end pr-1 sm:pr-2">
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div
              className={[
                "flex items-center gap-2",
                isAdv ? "text-emerald-800/45" : "text-slate-500/50",
              ].join(" ")}
            >
              <svg viewBox="0 0 40 12" className="w-10 h-3" aria-hidden>
                <path
                  d="M0 6 C10 6 20 4 36 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />
              </svg>
              <PersonNode size="xs" className="opacity-55" />
            </div>
            <p className="mt-2 text-[11px] sm:text-xs text-black/45 leading-relaxed italic">
              {secondaryLabel}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-black/10">
          <p className="font-serif text-base sm:text-lg leading-snug text-[#1a1a1a]">
            {pipelineValue}
          </p>
          <p className="mt-2 text-xs text-black/45 leading-relaxed">{footnote}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function RippleVisualization() {
  return (
    <div className="mt-14 sm:mt-16 flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-stretch">
      <RipplePanel
        variant="advocate"
        title="Advocates creating pipeline"
        nodeLabel="One advocate"
        outcomes={[
          "Put you on their shortlist for Q3.",
          "Asked for an intro to your team.",
          "Mentioned you in a buying group discussion.",
        ]}
        secondaryLabel="Second-degree referral you will never trace back."
        pipelineValue="Each advocate: approximately £50K to £150K in invisible pipeline per year."
        footnote="Based on 2 to 3 peer recommendations per year at average B2B deal values."
      />
      <RipplePanel
        variant="critic"
        delayMs={80}
        title="Critics destroying pipeline"
        nodeLabel="One critic"
        outcomes={[
          "Told a peer not to bother with you.",
          "Recommended your main competitor instead.",
          "Removed you from a shortlist before you knew you were on it.",
        ]}
        secondaryLabel="A deal you will never know you lost."
        pipelineValue="Each critic: approximately £50K to £150K in invisible pipeline damage per year."
        footnote="Based on 2 to 3 negative conversations per year at average B2B deal values."
      />
    </div>
  );
}
