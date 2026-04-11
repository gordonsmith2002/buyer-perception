"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-roi-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-roi-sans",
});

type WinScenario = 5 | 10 | 15;

type Inputs = {
  companyName: string;
  contactName: string;
  date: string;
  dealValue: number;
  dealsPerQuarter: number;
  winRate: number;
  dealsLost12Months: number;
  arr: number;
  retentionRate: number;
  contractLengthYears: number;
  criticPct: number;
  advocatePct: number;
  negativeConversationsPerCritic: number;
  positiveConversationsPerAdvocate: number;
  influenceRate: number;
  engagementFee: number;
  scenarioName: string;
};

type SavedScenario = {
  key: string;
  label: string;
  data: Inputs;
};

const DEFAULTS: Inputs = {
  companyName: "",
  contactName: "",
  date: new Date().toISOString().slice(0, 10),
  dealValue: 50000,
  dealsPerQuarter: 30,
  winRate: 25,
  dealsLost12Months: 80,
  arr: 3000000,
  retentionRate: 85,
  contractLengthYears: 2,
  criticPct: 50,
  advocatePct: 20,
  negativeConversationsPerCritic: 2.5,
  positiveConversationsPerAdvocate: 2.5,
  influenceRate: 20,
  engagementFee: 5000,
  scenarioName: "Default scenario",
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function toNum(value: string, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function currency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function oneDecimal(value: number) {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function decimal(value: number) {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function shortDate(dateValue: string) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;
  return date.toLocaleDateString("en-GB");
}

function normalizeKeyPart(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function NumberField({
  label,
  helper,
  value,
  step = 1,
  min,
  max,
  onChange,
}: {
  label: string;
  helper: string;
  value: number;
  step?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[#e7e7eb]">{label}</span>
      <input
        type="number"
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={(event) => onChange(toNum(event.target.value, value))}
        className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
      />
      <span className="text-xs text-[#8f93a0]">{helper}</span>
    </label>
  );
}

function SliderField({
  label,
  helper,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  helper: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-[#e7e7eb]">{label}</span>
        <span className="rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white">
          {value}%
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="accent-[#c0392b]"
      />
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(event) =>
          onChange(clamp(toNum(event.target.value, value), min, max))
        }
        className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
      />
      <span className="text-xs text-[#8f93a0]">{helper}</span>
    </label>
  );
}

export default function RoiCalculatorPage() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const [winScenario, setWinScenario] = useState<WinScenario>(10);
  const [savedScenarios, setSavedScenarios] = useState<SavedScenario[]>([]);
  const [selectedScenarioKey, setSelectedScenarioKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [discoveryOpen, setDiscoveryOpen] = useState(false);

  const updateInput = <K extends keyof Inputs>(key: K, value: Inputs[K]) => {
    setInputs((current) => ({ ...current, [key]: value }));
  };

  const readScenarios = () => {
    if (typeof window === "undefined") return;
    const items: SavedScenario[] = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("roi:")) continue;
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      try {
        const parsed = JSON.parse(raw) as Inputs;
        items.push({
          key,
          data: parsed,
          label: `${parsed.scenarioName || "Scenario"} — ${
            parsed.companyName || "Unknown company"
          } (${shortDate(parsed.date)})`,
        });
      } catch {
        // Ignore malformed storage entries.
      }
    }
    items.sort((a, b) => b.key.localeCompare(a.key));
    setSavedScenarios(items);
  };

  useEffect(() => {
    readScenarios();
  }, []);

  const winRateCalc = useMemo(() => {
    const baseWinRate = clamp(inputs.winRate, 0, 100) / 100;
    const scenarioMultiplier = 1 + winScenario / 100;
    const improvedWinRate = Math.min(baseWinRate * scenarioMultiplier, 1);
    const currentQuarterlyWins = inputs.dealsPerQuarter * baseWinRate;
    const improvedQuarterlyWins = inputs.dealsPerQuarter * improvedWinRate;
    const additionalWinsQuarter = improvedQuarterlyWins - currentQuarterlyWins;
    const additionalWinsYear = additionalWinsQuarter * 4;
    const additionalAnnualRevenue = additionalWinsYear * inputs.dealValue;
    const roi = additionalAnnualRevenue / Math.max(inputs.engagementFee, 1);
    const feePercent = (inputs.engagementFee / Math.max(additionalAnnualRevenue, 1)) * 100;
    return {
      baseWinRate,
      improvedWinRate,
      additionalWinsYear,
      additionalAnnualRevenue,
      roi,
      feePercent,
    };
  }, [inputs.dealValue, inputs.dealsPerQuarter, inputs.engagementFee, inputs.winRate, winScenario]);

  const conservativeWinImpact = useMemo(() => {
    const baseRate = clamp(inputs.winRate, 0, 100) / 100;
    const improvedRate = baseRate * 1.05;
    const currentWins = inputs.dealsPerQuarter * baseRate;
    const improvedWins = inputs.dealsPerQuarter * improvedRate;
    const deltaYear = (improvedWins - currentWins) * 4;
    const annualRevenue = deltaYear * inputs.dealValue;
    const roi = annualRevenue / Math.max(inputs.engagementFee, 1);
    return { annualRevenue, roi };
  }, [inputs.dealValue, inputs.dealsPerQuarter, inputs.engagementFee, inputs.winRate]);

  const pipelineCalc = useMemo(() => {
    const critics = inputs.dealsLost12Months * (clamp(inputs.criticPct, 0, 100) / 100);
    const advocates = inputs.dealsLost12Months * (clamp(inputs.advocatePct, 0, 100) / 100);
    const annualNegativeConversations = critics * inputs.negativeConversationsPerCritic;
    const annualPositiveConversations = advocates * inputs.positiveConversationsPerAdvocate;
    const influence = clamp(inputs.influenceRate, 0, 50) / 100;
    const dealsDiscouraged = annualNegativeConversations * influence;
    const dealsInfluenced = annualPositiveConversations * influence;
    const annualDamage = dealsDiscouraged * inputs.dealValue;
    const annualGeneration = dealsInfluenced * inputs.dealValue;
    const netPosition = annualGeneration - annualDamage;
    const damageReduction = (3 / Math.max(critics, 1)) * annualDamage;
    const newAdvocacy = 2 * inputs.positiveConversationsPerAdvocate * influence * inputs.dealValue;
    const potentialSwing = damageReduction + newAdvocacy;
    const roi = potentialSwing / Math.max(inputs.engagementFee, 1);
    return {
      critics,
      advocates,
      annualDamage,
      annualGeneration,
      netPosition,
      potentialSwing,
      roi,
    };
  }, [
    inputs.advocatePct,
    inputs.criticPct,
    inputs.dealValue,
    inputs.dealsLost12Months,
    inputs.engagementFee,
    inputs.influenceRate,
    inputs.negativeConversationsPerCritic,
    inputs.positiveConversationsPerAdvocate,
  ]);

  const churnCalc = useMemo(() => {
    const annualChurnRevenue = inputs.arr * (1 - clamp(inputs.retentionRate, 0, 100) / 100);
    const preventableChurn = annualChurnRevenue * 0.65;
    const savedAnnualRevenue = preventableChurn * 0.2;
    const lifetimeSavedRevenue = savedAnnualRevenue * inputs.contractLengthYears;
    const roi = lifetimeSavedRevenue / Math.max(inputs.engagementFee, 1);
    return {
      annualChurnRevenue,
      preventableChurn,
      savedAnnualRevenue,
      lifetimeSavedRevenue,
      roi,
    };
  }, [inputs.arr, inputs.contractLengthYears, inputs.engagementFee, inputs.retentionRate]);

  const combinedImpact =
    winRateCalc.additionalAnnualRevenue +
    pipelineCalc.potentialSwing +
    churnCalc.lifetimeSavedRevenue;
  const combinedRoi = combinedImpact / Math.max(inputs.engagementFee, 1);

  const summary = `Based on ${inputs.companyName || "this company"}'s current metrics:

Win rate impact: A ${winScenario}% improvement in win rate would generate approximately ${currency(
    winRateCalc.additionalAnnualRevenue,
  )} in additional annual revenue — ${oneDecimal(
    winRateCalc.additionalWinsYear,
  )} additional deals at ${currency(inputs.dealValue)} each.

Invisible pipeline: An estimated ${oneDecimal(
    pipelineCalc.critics,
  )} critics among lost prospects are generating approximately ${currency(
    pipelineCalc.annualDamage,
  )} in annual pipeline damage through negative word-of-mouth. The total potential swing from shifting perception is ${currency(
    pipelineCalc.potentialSwing,
  )}+.

Churn prevention: ${currency(
    churnCalc.annualChurnRevenue,
  )} in annual revenue is currently lost to churn. An estimated ${currency(
    churnCalc.preventableChurn,
  )} of this is preventable. Even a modest improvement preserves ${currency(
    churnCalc.lifetimeSavedRevenue,
  )} in lifetime customer value.

Combined potential impact: ${currency(combinedImpact)}
Buyer Perception engagement fee: ${currency(inputs.engagementFee)}
ROI: ${oneDecimal(combinedRoi)}x return on investment

Even the most conservative scenario - a 5% win rate improvement alone - generates ${currency(
    conservativeWinImpact.annualRevenue,
  )}, representing a ${oneDecimal(conservativeWinImpact.roi)}x return.`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSaveScenario = (event: FormEvent) => {
    event.preventDefault();
    const companyKey = normalizeKeyPart(inputs.companyName || "unknown");
    const key = `roi:${companyKey}:${inputs.date}`;
    localStorage.setItem(key, JSON.stringify(inputs));
    setSaveMessage(`Saved to ${key}`);
    readScenarios();
    setTimeout(() => setSaveMessage(""), 2500);
  };

  const handleLoadScenario = (key: string) => {
    setSelectedScenarioKey(key);
    if (!key) return;
    const raw = localStorage.getItem(key);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as Inputs;
      setInputs(parsed);
    } catch {
      // Ignore malformed scenario.
    }
  };

  const handleResetDefaults = () => {
    setInputs({
      ...DEFAULTS,
      date: new Date().toISOString().slice(0, 10),
    });
    setWinScenario(10);
    setSelectedScenarioKey("");
    setCopied(false);
    setSaveMessage("Reset to defaults");
    setTimeout(() => setSaveMessage(""), 2000);
  };

  return (
    <main
      className={[
        playfair.variable,
        dmSans.variable,
        "min-h-screen bg-[#0a0a0f] px-5 py-8 text-[#f5f5f7] sm:px-8",
        "font-[var(--bp-roi-sans)]",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 border-b border-white/10 pb-6">
          <p className="text-xs uppercase tracking-[0.16em] text-[#8f93a0]">
            Internal Tool
          </p>
          <h1 className="mt-3 font-[var(--bp-roi-serif)] text-4xl text-white">
            Buyer Perception ROI Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-[#9da1ad]">
            Fast internal business-case builder for discovery calls and proposal
            prep. All outputs update in real time.
          </p>
        </header>

        <section className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4 sm:grid-cols-3 sm:p-6">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#e7e7eb]">Company name</span>
            <input
              type="text"
              value={inputs.companyName}
              onChange={(event) => updateInput("companyName", event.target.value)}
              className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#e7e7eb]">Contact name</span>
            <input
              type="text"
              value={inputs.contactName}
              onChange={(event) => updateInput("contactName", event.target.value)}
              className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#e7e7eb]">Date</span>
            <input
              type="date"
              value={inputs.date}
              onChange={(event) => updateInput("date", event.target.value)}
              className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
            />
          </label>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <div className="grid gap-6">
            <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <h2 className="font-[var(--bp-roi-serif)] text-2xl text-white">
                Input Panel - Core Metrics
              </h2>
              <div className="mt-5 grid gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#8f93a0]">
                    Revenue & Pipeline Inputs
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <NumberField
                      label="Average deal value (£)"
                      helper="Their typical contract value"
                      value={inputs.dealValue}
                      min={0}
                      onChange={(value) => updateInput("dealValue", Math.max(0, value))}
                    />
                    <NumberField
                      label="Competitive deals per quarter"
                      helper="How many competitive opportunities per quarter"
                      value={inputs.dealsPerQuarter}
                      min={0}
                      onChange={(value) =>
                        updateInput("dealsPerQuarter", Math.max(0, value))
                      }
                    />
                    <SliderField
                      label="Current win rate (%)"
                      helper="What % of competitive deals they're winning"
                      value={inputs.winRate}
                      min={0}
                      max={100}
                      onChange={(value) => updateInput("winRate", value)}
                    />
                    <NumberField
                      label="Deals lost in last 12 months"
                      helper="Total closed-lost in the past year"
                      value={inputs.dealsLost12Months}
                      min={0}
                      onChange={(value) =>
                        updateInput("dealsLost12Months", Math.max(0, value))
                      }
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#8f93a0]">
                    Retention Inputs
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <NumberField
                      label="Annual recurring revenue (£)"
                      helper="Current ARR or annual revenue"
                      value={inputs.arr}
                      min={0}
                      onChange={(value) => updateInput("arr", Math.max(0, value))}
                    />
                    <SliderField
                      label="Gross retention rate (%)"
                      helper="% of revenue retained year-over-year"
                      value={inputs.retentionRate}
                      min={50}
                      max={100}
                      onChange={(value) => updateInput("retentionRate", value)}
                    />
                    <NumberField
                      label="Average contract length (years)"
                      helper="How long customers typically stay"
                      value={inputs.contractLengthYears}
                      min={1}
                      step={0.1}
                      onChange={(value) =>
                        updateInput("contractLengthYears", Math.max(1, value))
                      }
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#8f93a0]">
                    Invisible Pipeline Inputs
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <SliderField
                      label="Estimated critic % of lost deals"
                      helper="What % of lost prospects are likely critics? (Industry avg: 40-60%)"
                      value={inputs.criticPct}
                      min={0}
                      max={100}
                      onChange={(value) => updateInput("criticPct", value)}
                    />
                    <SliderField
                      label="Estimated advocate % of lost deals"
                      helper="What % of lost prospects are likely advocates? (Industry avg: 15-25%)"
                      value={inputs.advocatePct}
                      min={0}
                      max={100}
                      onChange={(value) => updateInput("advocatePct", value)}
                    />
                    <NumberField
                      label="Negative conversations per critic per year"
                      helper="How many peers does each critic warn? (Conservative: 2-3)"
                      value={inputs.negativeConversationsPerCritic}
                      step={0.1}
                      min={0}
                      onChange={(value) =>
                        updateInput("negativeConversationsPerCritic", Math.max(0, value))
                      }
                    />
                    <NumberField
                      label="Positive conversations per advocate per year"
                      helper="How many peers does each advocate recommend to? (Conservative: 2-3)"
                      value={inputs.positiveConversationsPerAdvocate}
                      step={0.1}
                      min={0}
                      onChange={(value) =>
                        updateInput("positiveConversationsPerAdvocate", Math.max(0, value))
                      }
                    />
                    <SliderField
                      label="Influence rate (%)"
                      helper="What % of those conversations actually influence a buying decision?"
                      value={inputs.influenceRate}
                      min={0}
                      max={50}
                      onChange={(value) => updateInput("influenceRate", value)}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#8f93a0]">
                    Engagement Inputs
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <NumberField
                      label="Buyer Perception engagement fee (£)"
                      helper="What we're quoting for this engagement"
                      value={inputs.engagementFee}
                      min={1}
                      onChange={(value) =>
                        updateInput("engagementFee", Math.max(1, value))
                      }
                    />
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[#e7e7eb]">
                        Scenario name
                      </span>
                      <input
                        type="text"
                        value={inputs.scenarioName}
                        onChange={(event) =>
                          updateInput("scenarioName", event.target.value)
                        }
                        className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
                      />
                      <span className="text-xs text-[#8f93a0]">
                        Used when saving calculation scenarios
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-[var(--bp-roi-serif)] text-2xl text-white">
                    Summary & Talking Points
                  </h2>
                  <p className="mt-1 text-sm text-[#9da1ad]">
                    Auto-generated from current inputs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="rounded-md border border-[#c0392b] bg-[#c0392b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228]"
                >
                  {copied ? "Copied" : "Copy to clipboard"}
                </button>
              </div>
              <pre className="mt-4 whitespace-pre-wrap rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-[#d6d8e0]">
                {summary}
              </pre>
            </article>

            <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <button
                type="button"
                onClick={() => setDiscoveryOpen((current) => !current)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-[var(--bp-roi-serif)] text-2xl text-white">
                  Quick Reference - Discovery Questions
                </span>
                <span className="text-sm text-[#9da1ad]">
                  {discoveryOpen ? "Hide" : "Show"}
                </span>
              </button>
              {discoveryOpen && (
                <ol className="mt-4 grid gap-2 text-sm leading-relaxed text-[#c2c5cf]">
                  <li>
                    1. Roughly how many competitive deals does your team run per
                    quarter?
                  </li>
                  <li>2. What kind of deal sizes are we talking about?</li>
                  <li>
                    3. And of those, what percentage would you say you&apos;re
                    winning right now?
                  </li>
                  <li>
                    4. Over the last twelve months, how many of those ended up in
                    closed-lost?
                  </li>
                  <li>
                    5. What about retention - are customers staying, or are you
                    seeing churn?
                  </li>
                  <li>
                    6. What does a typical customer contract look like - how long
                    do they stay?
                  </li>
                  <li>7. What&apos;s your rough ARR right now? (if appropriate)</li>
                </ol>
              )}
            </article>
          </div>

          <div className="grid gap-6">
            <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-[var(--bp-roi-serif)] text-2xl text-white">
                Impact of a {winScenario}% win rate improvement
              </h3>
              <div className="mt-4 flex gap-2">
                {[5, 10, 15].map((scenario) => (
                  <button
                    key={scenario}
                    type="button"
                    onClick={() => setWinScenario(scenario as WinScenario)}
                    className={[
                      "rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors",
                      winScenario === scenario
                        ? "border-[#c0392b] bg-[#c0392b] text-white"
                        : "border-white/15 bg-white/5 text-[#d7dae4] hover:border-white/30",
                    ].join(" ")}
                  >
                    {scenario === 5
                      ? "Conservative (5%)"
                      : scenario === 10
                        ? "Realistic (10%)"
                        : "Ambitious (15%)"}
                  </button>
                ))}
              </div>
              <p className="mt-5 font-[var(--bp-roi-serif)] text-4xl text-white">
                {currency(winRateCalc.additionalAnnualRevenue)}
              </p>
              <p className="mt-2 text-sm text-[#c8cbd5]">
                From a {winScenario}% improvement in win rate (
                {oneDecimal(winRateCalc.baseWinRate * 100)}% -&gt;{" "}
                {oneDecimal(winRateCalc.improvedWinRate * 100)}%)
              </p>
              <p className="mt-2 text-sm text-[#9da1ad]">
                That&apos;s {oneDecimal(winRateCalc.additionalWinsYear)} additional
                deals per year at {currency(inputs.dealValue)} each.
              </p>
              <p className="mt-3 text-sm font-semibold text-[#34d399]">
                ROI: {oneDecimal(winRateCalc.roi)}x your investment
              </p>
              <p className="mt-2 text-xs text-[#8f93a0]">
                Your engagement fee represents {decimal(winRateCalc.feePercent)}%
                of the potential impact.
              </p>
            </article>

            <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-[var(--bp-roi-serif)] text-2xl text-white">
                Invisible pipeline impact
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-[#ef4444]/35 bg-[#ef4444]/10 p-3">
                  <p className="font-[var(--bp-roi-serif)] text-2xl text-[#fecaca]">
                    {currency(pipelineCalc.annualDamage)}
                  </p>
                  <p className="mt-1 text-xs text-[#fecaca]">
                    Estimated annual pipeline damage
                  </p>
                </div>
                <div className="rounded-md border border-[#34d399]/35 bg-[#34d399]/10 p-3">
                  <p className="font-[var(--bp-roi-serif)] text-2xl text-[#d1fae5]">
                    {currency(pipelineCalc.annualGeneration)}
                  </p>
                  <p className="mt-1 text-xs text-[#d1fae5]">
                    Estimated annual pipeline generation
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#d2d5df]">
                Net position:{" "}
                <span
                  className={
                    pipelineCalc.netPosition < 0 ? "text-[#fda4af]" : "text-[#6ee7b7]"
                  }
                >
                  {currency(pipelineCalc.netPosition)} per year
                </span>
              </p>
              <p className="mt-2 text-sm text-[#9da1ad]">
                Moving just 5 critics to neutral or advocate status could be worth{" "}
                {currency(pipelineCalc.potentialSwing)}+ annually.
              </p>
              <p className="mt-3 text-sm font-semibold text-[#34d399]">
                ROI: {oneDecimal(pipelineCalc.roi)}x your investment
              </p>
              <p className="mt-2 text-xs text-[#8f93a0]">
                Estimates based on conservative influence assumptions. Directional,
                not precise.
              </p>
            </article>

            <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-[var(--bp-roi-serif)] text-2xl text-white">
                Churn prevention impact
              </h3>
              <p className="mt-5 font-[var(--bp-roi-serif)] text-4xl text-white">
                {currency(churnCalc.annualChurnRevenue)}
              </p>
              <p className="mt-2 text-sm text-[#d2d5df]">
                Annual revenue currently lost to churn.
              </p>
              <p className="mt-2 text-sm text-[#9da1ad]">
                Estimated {currency(churnCalc.preventableChurn)} is preventable
                (based on industry patterns).
              </p>
              <p className="mt-2 text-sm text-[#9da1ad]">
                Preventing just 20% of preventable churn saves{" "}
                {currency(churnCalc.savedAnnualRevenue)} per year.
              </p>
              <p className="mt-2 text-sm text-[#9da1ad]">
                Over average contract length:{" "}
                {currency(churnCalc.lifetimeSavedRevenue)} in lifetime value
                preserved.
              </p>
              <p className="mt-3 text-sm font-semibold text-[#34d399]">
                ROI: {oneDecimal(churnCalc.roi)}x your investment
              </p>
            </article>

            <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-[var(--bp-roi-serif)] text-2xl text-white">
                Save / Load
              </h3>
              <form onSubmit={handleSaveScenario} className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  className="rounded-md border border-[#c0392b] bg-[#c0392b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228]"
                >
                  Save current scenario
                </button>
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-[#d7dae4] transition-colors hover:border-white/35 hover:bg-white/10"
                >
                  Reset to defaults
                </button>
                {saveMessage && (
                  <p className="text-xs text-[#9ae6c8] sm:col-span-2">{saveMessage}</p>
                )}
              </form>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[#cfd3dd]">Load previous</span>
                <select
                  value={selectedScenarioKey}
                  onChange={(event) => handleLoadScenario(event.target.value)}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/30"
                >
                  <option value="">Select a scenario...</option>
                  {savedScenarios.map((scenario) => (
                    <option key={scenario.key} value={scenario.key}>
                      {scenario.label}
                    </option>
                  ))}
                </select>
              </label>
              <p className="mt-2 text-xs text-[#8f93a0]">
                Storage key format: roi:company-name:YYYY-MM-DD
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
