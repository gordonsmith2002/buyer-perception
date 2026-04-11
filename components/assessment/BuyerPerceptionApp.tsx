"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type AssessmentType = "new-business" | "post-sales";
type LossReason =
  | "Pricing / budget constraints"
  | "Product fit / missing features"
  | "Competitor preference"
  | "Timing / not ready to buy"
  | "Lost contact / went dark"
  | "Internal decision / no decision made"
  | "Other";

type DimensionDef = {
  key: string;
  title: string;
  question: string;
  context: string;
};

type DimensionResponse = {
  key: string;
  title: string;
  question: string;
  context: string;
  score: number;
  note: string;
};

type Predictions = {
  advocates: number;
  competitor1: string;
  competitor2: string;
  lossReason: LossReason;
  lossReasonOther: string;
  winnablePercent: number;
};

type ParticipantData = {
  id: string;
  name: string;
  mode: "facilitated" | "individual";
  completedAt: string;
  dimensions: DimensionResponse[];
  predictions: Predictions;
  selfAssessmentScore: number;
};

type SessionData = {
  id: string;
  companyName: string;
  assessmentType: AssessmentType;
  createdAt: string;
  participants: ParticipantData[];
};

declare global {
  interface Window {
    storage?: Storage;
  }
}

const NEW_BUSINESS_DIMENSIONS: DimensionDef[] = [
  {
    key: "responsiveness",
    title: "Responsiveness",
    question:
      "How would your lost prospects rate your team's responsiveness — from first enquiry through to final decision?",
    context:
      "Speed of first response. Follow-up consistency. How easy it was to get someone's attention.",
  },
  {
    key: "people",
    title: "People",
    question:
      "How would they rate the people they dealt with — expertise, professionalism, and how well they understood the buyer's problem?",
    context:
      "Whether buyers felt heard. Whether your team came across as trusted advisors or salespeople.",
  },
  {
    key: "proposal",
    title: "Proposal",
    question:
      "How would they rate the quality of your proposals — clarity, relevance, and how tailored they felt?",
    context:
      "Whether proposals felt bespoke or templated. How clearly the value was communicated.",
  },
  {
    key: "pricing",
    title: "Pricing",
    question:
      "How would they rate your pricing — not just the amount, but how clearly it was presented and how it compared to alternatives?",
    context:
      "Packaging clarity. Perceived value for money. How pricing was communicated.",
  },
  {
    key: "product",
    title: "Product",
    question:
      "How would they rate your product or solution's fit for their needs?",
    context:
      "Product demonstrations. Feature relevance. How your product compared to what else they evaluated.",
  },
];

const POST_SALES_DIMENSIONS: DimensionDef[] = [
  {
    key: "onboarding",
    title: "Onboarding",
    question:
      "How would your churned customers rate their onboarding — the setup, implementation, and handover from sales?",
    context:
      "The first experience of becoming a customer, from implementation to handover quality.",
  },
  {
    key: "support",
    title: "Support",
    question:
      "How would they rate the support they received when they needed help?",
    context:
      "Response quality, resolution speed, and whether support felt dependable under pressure.",
  },
  {
    key: "value",
    title: "Value",
    question:
      "How would they rate the value they got — did they achieve the outcomes they expected?",
    context:
      "Perceived return on investment and whether expected outcomes were actually delivered.",
  },
  {
    key: "relationship",
    title: "Relationship",
    question:
      "How would they rate the quality of the ongoing relationship?",
    context:
      "Proactivity, trust, strategic guidance, and how the relationship felt over time.",
  },
  {
    key: "product",
    title: "Product",
    question:
      "How would they rate the product itself over time — reliability, development, keeping pace with their needs?",
    context:
      "Reliability, roadmap confidence, and fit as their needs evolved.",
  },
];

const LOSS_REASONS: LossReason[] = [
  "Pricing / budget constraints",
  "Product fit / missing features",
  "Competitor preference",
  "Timing / not ready to buy",
  "Lost contact / went dark",
  "Internal decision / no decision made",
  "Other",
];

const TOTAL_DOTS = 11;

function getStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }
  return window.storage ?? window.localStorage;
}

function sessionKey(sessionId: string): string {
  return `session:${sessionId}`;
}

function participantKey(sessionId: string, participantId: string): string {
  return `participant:${sessionId}:${participantId}`;
}

function readSession(sessionId: string): SessionData | null {
  const storage = getStorage();
  if (!storage) {
    return null;
  }
  const raw = storage.getItem(sessionKey(sessionId));
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as SessionData;
  } catch {
    return null;
  }
}

function writeSession(session: SessionData): void {
  const storage = getStorage();
  if (!storage) {
    return;
  }
  storage.setItem(sessionKey(session.id), JSON.stringify(session));
}

function writeParticipant(sessionId: string, participant: ParticipantData): void {
  const storage = getStorage();
  if (!storage) {
    return;
  }
  storage.setItem(
    participantKey(sessionId, participant.id),
    JSON.stringify(participant),
  );
}

function makeId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function scoreColor(score: number): string {
  if (score < 4) {
    return "text-red-400";
  }
  if (score < 7) {
    return "text-amber-400";
  }
  return "text-emerald-400";
}

function scoreBg(score: number): string {
  if (score < 4) {
    return "bg-red-500/20 border-red-400/40";
  }
  if (score < 7) {
    return "bg-amber-500/20 border-amber-400/40";
  }
  return "bg-emerald-500/20 border-emerald-400/40";
}

function formatScore(score: number): string {
  return Number.isInteger(score) ? `${score}` : `${score.toFixed(1)}`;
}

function average(values: number[]): number {
  if (!values.length) {
    return 0;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getDimensions(type: AssessmentType): DimensionDef[] {
  return type === "new-business"
    ? NEW_BUSINESS_DIMENSIONS
    : POST_SALES_DIMENSIONS;
}

function DotStepper({ active }: { active: number }) {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {Array.from({ length: TOTAL_DOTS }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 w-1.5 rounded-full transition-all ${
            index === active
              ? "bg-white opacity-100"
              : "bg-white/30 opacity-60"
          }`}
        />
      ))}
    </div>
  );
}

function ScorePicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (next: number) => void;
}) {
  const slots: { value: number; between: boolean }[] = [];
  for (let i = 1; i <= 10; i += 1) {
    slots.push({ value: i, between: false });
    if (i < 10) {
      slots.push({ value: i + 0.5, between: true });
    }
  }

  return (
    <div className="space-y-6">
      <div className={`text-center text-6xl font-display ${scoreColor(value)}`}>
        {formatScore(value)}
      </div>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2">
        {slots.map((slot) => {
          if (slot.between) {
            const selected = value === slot.value;
            return (
              <button
                key={slot.value}
                type="button"
                onClick={() => onChange(slot.value)}
                className={`h-10 w-3 rounded-full border transition ${
                  selected
                    ? "border-white/70 bg-white/40"
                    : "border-white/20 bg-white/5 hover:bg-white/15"
                }`}
                aria-label={`Select ${slot.value}`}
              />
            );
          }
          const selected = value === slot.value;
          return (
            <button
              key={slot.value}
              type="button"
              onClick={() => onChange(slot.value)}
              className={`h-14 w-14 rounded-full border text-lg font-semibold transition ${
                selected
                  ? `${scoreBg(slot.value)} scale-110`
                  : "border-white/20 bg-white/5 text-white hover:bg-white/15"
              }`}
              aria-label={`Select ${slot.value}`}
            >
              {slot.value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RingScore({ score }: { score: number }) {
  const [displayScore, setDisplayScore] = useState(0);
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(score / 10, 1));
  const dashOffset = circumference * (1 - progress);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDisplayScore(score), 120);
    return () => window.clearTimeout(timeout);
  }, [score]);

  return (
    <div className="relative mx-auto h-64 w-64">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 240 240">
        <circle
          cx="120"
          cy="120"
          r={radius}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="14"
          fill="none"
        />
        <circle
          cx="120"
          cy="120"
          r={radius}
          stroke="currentColor"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className={`${scoreColor(score)} transition-[stroke-dashoffset] duration-1000 ease-out`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-display text-6xl ${scoreColor(score)}`}>
          {displayScore.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

export default function BuyerPerceptionApp({
  initialJoinSessionId,
}: {
  initialJoinSessionId?: string;
}) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [mode, setMode] = useState<"setup" | "exercise" | "team">("setup");
  const [step, setStep] = useState(0);
  const [isFacilitated, setIsFacilitated] = useState(!initialJoinSessionId);
  const [companyName, setCompanyName] = useState("");
  const [assessmentType, setAssessmentType] =
    useState<AssessmentType>("new-business");
  const [participantName, setParticipantName] = useState("");
  const [joinCode, setJoinCode] = useState(initialJoinSessionId ?? "");
  const [currentSession, setCurrentSession] = useState<SessionData | null>(null);
  const [currentParticipantId, setCurrentParticipantId] = useState<string>("");
  const [generateLink, setGenerateLink] = useState(true);
  const [joinError, setJoinError] = useState("");
  const [dimensionScores, setDimensionScores] = useState<number[]>([
    5, 5, 5, 5, 5,
  ]);
  const [dimensionNotes, setDimensionNotes] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [showContext, setShowContext] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [predictions, setPredictions] = useState<Predictions>({
    advocates: 5,
    competitor1: "",
    competitor2: "",
    lossReason: "Pricing / budget constraints",
    lossReasonOther: "",
    winnablePercent: 50,
  });
  const [savedParticipant, setSavedParticipant] = useState<ParticipantData | null>(
    null,
  );
  const [importError, setImportError] = useState("");

  const dimensions = useMemo(
    () => getDimensions(assessmentType),
    [assessmentType],
  );

  useEffect(() => {
    if (!initialJoinSessionId) {
      return;
    }
    const found = readSession(initialJoinSessionId);
    if (!found) {
      setJoinError("Session not found. Please ask the facilitator for a valid link.");
      return;
    }
    setCurrentSession(found);
    setCompanyName(found.companyName);
    setAssessmentType(found.assessmentType);
    setIsFacilitated(false);
  }, [initialJoinSessionId]);

  const dotIndex = Math.min(step, TOTAL_DOTS - 1);
  const currentJoinUrl =
    typeof window !== "undefined" && currentSession
      ? `${window.location.origin}/join/${currentSession.id}`
      : "";

  const selfScore = average(dimensionScores);

  const teamAverageScore = useMemo(() => {
    if (!currentSession?.participants.length) {
      return 0;
    }
    return average(currentSession.participants.map((p) => p.selfAssessmentScore));
  }, [currentSession]);

  function resetExerciseState() {
    setStep(0);
    setDimensionScores([5, 5, 5, 5, 5]);
    setDimensionNotes(["", "", "", "", ""]);
    setShowContext([false, false, false, false, false]);
    setPredictions({
      advocates: 5,
      competitor1: "",
      competitor2: "",
      lossReason: "Pricing / budget constraints",
      lossReasonOther: "",
      winnablePercent: 50,
    });
    setSavedParticipant(null);
  }

  function upsertParticipant(session: SessionData, participant: ParticipantData) {
    const nextParticipants = session.participants.some(
      (item) => item.id === participant.id,
    )
      ? session.participants.map((item) =>
          item.id === participant.id ? participant : item,
        )
      : [...session.participants, participant];
    const nextSession: SessionData = { ...session, participants: nextParticipants };
    writeSession(nextSession);
    writeParticipant(nextSession.id, participant);
    setCurrentSession(nextSession);
    setSavedParticipant(participant);
  }

  function handleCreateSession() {
    if (!companyName.trim() || !participantName.trim()) {
      setJoinError("Add company and participant name to begin.");
      return;
    }
    const session: SessionData = {
      id: makeId("session"),
      companyName: companyName.trim(),
      assessmentType,
      createdAt: new Date().toISOString(),
      participants: [],
    };
    writeSession(session);
    setCurrentSession(session);
    setCurrentParticipantId(makeId("participant"));
    setIsFacilitated(true);
    setMode("exercise");
    setJoinError("");
    resetExerciseState();
  }

  function handleJoinSession() {
    const session = readSession(joinCode.trim());
    if (!session) {
      setJoinError("Session not found. Check the code and try again.");
      return;
    }
    if (!participantName.trim()) {
      setJoinError("Add your name before joining.");
      return;
    }
    setCurrentSession(session);
    setCompanyName(session.companyName);
    setAssessmentType(session.assessmentType);
    setCurrentParticipantId(makeId("participant"));
    setIsFacilitated(false);
    setMode("exercise");
    setJoinError("");
    resetExerciseState();
  }

  function goNext() {
    if (step < 9) {
      setStep((prev) => prev + 1);
      return;
    }
    completeParticipant();
    setStep(10);
  }

  function goBack() {
    if (step > 0) {
      setStep((prev) => prev - 1);
      return;
    }
    setMode("setup");
  }

  function completeParticipant() {
    if (!currentSession) {
      return;
    }
    const participant: ParticipantData = {
      id: currentParticipantId || makeId("participant"),
      name: participantName.trim(),
      mode: isFacilitated ? "facilitated" : "individual",
      completedAt: new Date().toISOString(),
      dimensions: dimensions.map((dimension, index) => ({
        ...dimension,
        score: dimensionScores[index] ?? 5,
        note: dimensionNotes[index] ?? "",
      })),
      predictions,
      selfAssessmentScore: Number(selfScore.toFixed(1)),
    };
    upsertParticipant(currentSession, participant);
  }

  function exportSession() {
    if (!currentSession) {
      return;
    }
    const blob = new Blob(
      [JSON.stringify({ type: "session-export", session: currentSession }, null, 2)],
      {
        type: "application/json",
      },
    );
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${currentSession.id}-session-export.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function exportParticipant() {
    if (!savedParticipant || !currentSession) {
      return;
    }
    const payload = {
      type: "participant-export",
      sessionId: currentSession.id,
      participant: savedParticipant,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${savedParticipant.name.replace(/\s+/g, "-").toLowerCase()}-participant-export.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function handleImportFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result));
        if (payload.type === "session-export" && payload.session?.id) {
          const incoming = payload.session as SessionData;
          writeSession(incoming);
          setCurrentSession(incoming);
          setCompanyName(incoming.companyName);
          setAssessmentType(incoming.assessmentType);
          setJoinCode(incoming.id);
          setImportError("");
          return;
        }

        if (payload.type === "participant-export" && payload.sessionId) {
          const session = readSession(payload.sessionId);
          if (!session) {
            setImportError(
              "Participant import failed: matching session was not found on this device.",
            );
            return;
          }
          const participant = payload.participant as ParticipantData;
          upsertParticipant(session, participant);
          setImportError("");
          return;
        }
        setImportError("Unsupported JSON format for import.");
      } catch {
        setImportError("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  }

  function renderFrame() {
    const isNewBusiness = assessmentType === "new-business";
    return (
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-16 text-center md:py-24">
        <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
          {isNewBusiness
            ? "Before we speak to your buyers, we want to understand how you see it."
            : "Before we speak to your customers, we want to understand how you see it."}
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          {isNewBusiness
            ? "Think about the last 10 prospects who evaluated your company and chose not to buy. We're going to ask you to predict how those people would score you across five dimensions of the buying experience, and to make four predictions about what we'll find."
            : "Think about the last 10 customers who chose to leave. We're going to ask you to predict how those people would score you across five dimensions of the customer experience, and to make four predictions about what we'll find."}
          <br />
          <br />
          There are no right or wrong answers. The value is in the gap between what
          you predict and what your buyers actually tell us.
        </p>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm tracking-wide text-white transition hover:bg-white/20"
        >
          Begin →
        </button>
      </section>
    );
  }

  function renderDimensionScreen(index: number) {
    const dimension = dimensions[index];
    return (
      <section className="mx-auto max-w-6xl space-y-8 px-6 py-12 md:py-20">
        <h2 className="text-center font-display text-4xl leading-tight text-white md:text-6xl">
          {dimension.question}
        </h2>
        <p className="text-center text-base text-zinc-400 md:text-lg">
          {dimension.context}
        </p>
        <ScorePicker
          value={dimensionScores[index]}
          onChange={(next) =>
            setDimensionScores((prev) =>
              prev.map((value, itemIndex) =>
                itemIndex === index ? next : value,
              ),
            )
          }
        />
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4">
          <button
            type="button"
            onClick={() =>
              setShowContext((prev) =>
                prev.map((value, itemIndex) =>
                  itemIndex === index ? !value : value,
                ),
              )
            }
            className="w-full text-left text-sm tracking-wide text-zinc-300"
          >
            Add context {showContext[index] ? "−" : "+"}
          </button>
          {showContext[index] && (
            <textarea
              value={dimensionNotes[index]}
              onChange={(event) =>
                setDimensionNotes((prev) =>
                  prev.map((value, itemIndex) =>
                    itemIndex === index ? event.target.value : value,
                  ),
                )
              }
              className="mt-3 h-28 w-full rounded-xl border border-white/10 bg-[#0f0f15] p-3 text-sm text-zinc-200 outline-none placeholder:text-zinc-500 focus:border-white/30"
              placeholder="Capture relevant context from the discussion."
            />
          )}
        </div>
      </section>
    );
  }

  function renderAdvocateScreen() {
    const critics = 10 - predictions.advocates;
    return (
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-16 text-center">
        <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
          How many of your last 10 lost prospects would speak positively about you if
          a peer asked?
        </h2>
        <p className="text-zinc-400">
          These are people who didn't buy from you. How many would still say good
          things about the experience?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {Array.from({ length: 10 }).map((_, index) => {
            const value = index + 1;
            const active = value <= predictions.advocates;
            return (
              <button
                key={value}
                type="button"
                onClick={() =>
                  setPredictions((prev) => ({ ...prev, advocates: value }))
                }
                className={`h-14 w-14 rounded-full border text-lg transition ${
                  active
                    ? "border-emerald-300/50 bg-emerald-500/30 text-emerald-200"
                    : "border-red-300/40 bg-red-500/20 text-red-200"
                }`}
              >
                {value}
              </button>
            );
          })}
        </div>
        <p className="text-lg">
          <span className="text-emerald-400">{predictions.advocates} advocates</span>
          <span className="text-zinc-500">, </span>
          <span className="text-red-400">{critics} critics</span>
        </p>
      </section>
    );
  }

  function renderCompetitorScreen() {
    return (
      <section className="mx-auto max-w-4xl space-y-8 px-6 py-16 text-center">
        <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
          If you had to name the two competitors you lose most deals to, who would
          they be?
        </h2>
        <p className="text-zinc-400">
          The companies that come up most when a deal doesn't go your way.
        </p>
        <div className="grid gap-4 text-left">
          <input
            value={predictions.competitor1}
            onChange={(event) =>
              setPredictions((prev) => ({
                ...prev,
                competitor1: event.target.value,
              }))
            }
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-lg text-white outline-none placeholder:text-zinc-500 focus:border-white/30"
            placeholder="Competitor 1"
          />
          <input
            value={predictions.competitor2}
            onChange={(event) =>
              setPredictions((prev) => ({
                ...prev,
                competitor2: event.target.value,
              }))
            }
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-lg text-white outline-none placeholder:text-zinc-500 focus:border-white/30"
            placeholder="Competitor 2"
          />
        </div>
      </section>
    );
  }

  function renderLossReasonScreen() {
    return (
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-16 text-center">
        <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
          What do you believe is the primary reason you lose competitive deals?
        </h2>
        <p className="text-zinc-400">
          The one reason that accounts for the most losses.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          {LOSS_REASONS.map((reason) => {
            const selected = predictions.lossReason === reason;
            return (
              <button
                key={reason}
                type="button"
                onClick={() =>
                  setPredictions((prev) => ({ ...prev, lossReason: reason }))
                }
                className={`rounded-2xl border p-4 transition ${
                  selected
                    ? "border-white/40 bg-white/20 text-white"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {reason}
              </button>
            );
          })}
        </div>
        {predictions.lossReason === "Other" && (
          <input
            value={predictions.lossReasonOther}
            onChange={(event) =>
              setPredictions((prev) => ({
                ...prev,
                lossReasonOther: event.target.value,
              }))
            }
            className="mx-auto block w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-zinc-500 focus:border-white/30"
            placeholder="Describe the primary loss reason"
          />
        )}
      </section>
    );
  }

  function renderWinnableScreen() {
    return (
      <section className="mx-auto max-w-4xl space-y-8 px-6 py-16 text-center">
        <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
          What percentage of your lost deals in the last 12 months were genuinely
          winnable?
        </h2>
        <p className="text-zinc-400">
          Deals where something could realistically have been done differently to
          change the outcome.
        </p>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() =>
              setPredictions((prev) => ({
                ...prev,
                winnablePercent: Math.max(0, prev.winnablePercent - 5),
              }))
            }
            className="h-14 w-14 rounded-full border border-white/20 bg-white/10 text-3xl text-white hover:bg-white/20"
          >
            −
          </button>
          <div className="font-display text-7xl text-white">
            {predictions.winnablePercent}%
          </div>
          <button
            type="button"
            onClick={() =>
              setPredictions((prev) => ({
                ...prev,
                winnablePercent: Math.min(100, prev.winnablePercent + 5),
              }))
            }
            className="h-14 w-14 rounded-full border border-white/20 bg-white/10 text-3xl text-white hover:bg-white/20"
          >
            +
          </button>
        </div>
      </section>
    );
  }

  function renderResults() {
    if (!savedParticipant || !currentSession) {
      return null;
    }
    const othersCount = Math.max(
      0,
      currentSession.participants.filter((participant) => participant.id !== savedParticipant.id)
        .length,
    );
    const lossReasonSummary =
      predictions.lossReason === "Other" && predictions.lossReasonOther
        ? predictions.lossReasonOther
        : predictions.lossReason;

    return (
      <section className="mx-auto max-w-6xl space-y-8 px-6 py-12 md:py-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
            Your Predictions
          </p>
        </div>
        <RingScore score={savedParticipant.selfAssessmentScore} />

        <div className="grid gap-3 md:grid-cols-5">
          {savedParticipant.dimensions.map((dimension) => (
            <div
              key={dimension.key}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                {dimension.title}
              </p>
              <p className={`font-display text-3xl ${scoreColor(dimension.score)}`}>
                {formatScore(dimension.score)}
              </p>
              {dimension.note && (
                <details className="mt-2 text-left">
                  <summary className="cursor-pointer text-xs text-zinc-400">
                    Add context
                  </summary>
                  <p className="mt-2 text-xs text-zinc-500">{dimension.note}</p>
                </details>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200">
          <p>
            You predict <span className="text-emerald-400">{predictions.advocates}</span>{" "}
            of 10 would speak positively.
          </p>
          <p>
            You believe you lose most to{" "}
            <span className="text-white">
              {predictions.competitor1 || "—"} and {predictions.competitor2 || "—"}
            </span>
            .
          </p>
          <p>
            You believe the primary reason is{" "}
            <span className="text-white">{lossReasonSummary}</span>.
          </p>
          <p>
            You estimate{" "}
            <span className="text-white">{predictions.winnablePercent}%</span> of lost
            deals were winnable.
          </p>
        </div>

        <p className="text-center text-sm leading-relaxed text-zinc-500">
          These predictions will be compared against what your buyers actually say in
          anonymous interviews. The gap between this assessment and their reality is
          where the most actionable insights live.
        </p>

        {!isFacilitated && (
          <p className="text-center text-sm text-zinc-400">
            Your scores have been recorded. {othersCount} other participants have also
            completed the exercise. Combined results will be reviewed in your Buyer
            Perception Exercise session.
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          {isFacilitated && currentSession.participants.length >= 2 && (
            <button
              type="button"
              onClick={() => setMode("team")}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white hover:bg-white/20"
            >
              View Team Results
            </button>
          )}
          <button
            type="button"
            onClick={exportParticipant}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:bg-white/15"
          >
            Export Your JSON
          </button>
          {isFacilitated && (
            <button
              type="button"
              onClick={exportSession}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:bg-white/15"
            >
              Export Session JSON
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setMode("setup");
              setParticipantName("");
              setSavedParticipant(null);
            }}
            className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white hover:bg-white/20"
          >
            {isFacilitated ? "Done" : "Submit"}
          </button>
        </div>
      </section>
    );
  }

  function renderTeamDashboard() {
    if (!currentSession || currentSession.participants.length < 2) {
      return null;
    }

    const dimensionsList = getDimensions(currentSession.assessmentType);
    const participantNames = currentSession.participants.map((participant) => participant.name);
    const ranges = dimensionsList.map((dimension) => {
      const scores = currentSession.participants.map((participant) => {
        const found = participant.dimensions.find((value) => value.key === dimension.key);
        return found?.score ?? 0;
      });
      return {
        title: dimension.title,
        min: Math.min(...scores),
        max: Math.max(...scores),
        spread: Math.max(...scores) - Math.min(...scores),
        average: average(scores),
      };
    });

    const largest = ranges.reduce((acc, item) => (item.spread > acc.spread ? item : acc));
    const strongest = ranges.reduce((acc, item) => (item.spread < acc.spread ? item : acc));
    const winnableValues = currentSession.participants.map(
      (participant) => participant.predictions.winnablePercent,
    );
    const optimistIndex = winnableValues.indexOf(Math.max(...winnableValues));
    const pessimistIndex = winnableValues.indexOf(Math.min(...winnableValues));
    const reasonSet = new Set(
      currentSession.participants.map((participant) => participant.predictions.lossReason),
    );

    return (
      <section className="mx-auto max-w-7xl space-y-8 px-6 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-zinc-400">Your team's average Buyer Perception Self-Assessment Score:</p>
          <p className={`font-display text-6xl ${scoreColor(teamAverageScore)}`}>
            {teamAverageScore.toFixed(1)}
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            In our experience, the gap between this score and what buyers actually report is
            typically 1.5-2.0 points. We'll find out exactly where your gap is.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
          <h3 className="mb-4 font-display text-3xl text-white">Dimension Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-sm">
              <thead>
                <tr className="text-zinc-400">
                  <th className="border-b border-white/10 p-2 text-left">Dimension</th>
                  {participantNames.map((name) => (
                    <th key={name} className="border-b border-white/10 p-2 text-center">
                      {name}
                    </th>
                  ))}
                  <th className="border-b border-white/10 p-2 text-center">Team Average</th>
                </tr>
              </thead>
              <tbody>
                {dimensionsList.map((dimension) => {
                  const rowScores = currentSession.participants.map((participant) => {
                    const found = participant.dimensions.find((value) => value.key === dimension.key);
                    return found?.score ?? 0;
                  });
                  const rowAvg = average(rowScores);
                  return (
                    <tr key={dimension.key}>
                      <td className="border-b border-white/5 p-2 text-zinc-200">{dimension.title}</td>
                      {rowScores.map((score, index) => {
                        const disagreement = Math.abs(score - rowAvg) >= 2;
                        return (
                          <td key={`${dimension.key}-${index}`} className="border-b border-white/5 p-2 text-center">
                            <span
                              className={`inline-block rounded-md border px-2 py-1 ${scoreColor(score)} ${
                                disagreement
                                  ? "border-white/40 bg-white/10"
                                  : "border-white/10 bg-white/5"
                              }`}
                            >
                              {formatScore(score)}
                            </span>
                          </td>
                        );
                      })}
                      <td className="border-b border-white/5 p-2 text-center text-zinc-100">
                        {rowAvg.toFixed(1)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
              Largest internal disagreement: {largest.title} — scores ranged from{" "}
              {formatScore(largest.min)} to {formatScore(largest.max)}.
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
              Strongest consensus: {strongest.title} — all participants within{" "}
              {strongest.spread.toFixed(1)} point.
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
              Team average self-assessment: {teamAverageScore.toFixed(1)}.
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
          <h3 className="mb-4 font-display text-3xl text-white">Prediction Comparison</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {currentSession.participants.map((participant) => (
              <div key={participant.id} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
                <p className="mb-2 text-base text-white">{participant.name}</p>
                <p className="text-zinc-300">
                  Advocates/Critics:{" "}
                  <span className="text-emerald-400">{participant.predictions.advocates}</span>
                  /
                  <span className="text-red-400">{10 - participant.predictions.advocates}</span>
                </p>
                <p className="text-zinc-300">
                  Competitors: {participant.predictions.competitor1 || "—"},{" "}
                  {participant.predictions.competitor2 || "—"}
                </p>
                <p className="text-zinc-300">
                  Loss reason:{" "}
                  {participant.predictions.lossReason === "Other"
                    ? participant.predictions.lossReasonOther || "Other"
                    : participant.predictions.lossReason}
                </p>
                <p className="text-zinc-300">
                  Winnable: {participant.predictions.winnablePercent}%
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
            Your leadership team {reasonSet.size === 1 ? "agrees" : "disagrees"} on why
            you're losing deals. The widest spread appears in winnable estimate:{" "}
            {participantNames[optimistIndex]} at {winnableValues[optimistIndex]}% versus{" "}
            {participantNames[pessimistIndex]} at {winnableValues[pessimistIndex]}%.
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={exportSession}
            className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white hover:bg-white/20"
          >
            Export Session JSON
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:bg-white/15"
          >
            Import JSON
          </button>
          <button
            type="button"
            onClick={() => setMode("setup")}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:bg-white/15"
          >
            Close Dashboard
          </button>
        </div>
      </section>
    );
  }

  function renderExercise() {
    return (
      <div className="animate-fade">
        <DotStepper active={dotIndex} />
        {step === 0 && renderFrame()}
        {step >= 1 && step <= 5 && renderDimensionScreen(step - 1)}
        {step === 6 && renderAdvocateScreen()}
        {step === 7 && renderCompetitorScreen()}
        {step === 8 && renderLossReasonScreen()}
        {step === 9 && renderWinnableScreen()}
        {step === 10 && renderResults()}

        {step < 10 && (
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-10">
            <button
              type="button"
              onClick={goBack}
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm text-zinc-300 hover:bg-white/15"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white hover:bg-white/20"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    );
  }

  if (mode === "team") {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-zinc-100">
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              handleImportFile(file);
            }
            event.currentTarget.value = "";
          }}
        />
        {renderTeamDashboard()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            handleImportFile(file);
          }
          event.currentTarget.value = "";
        }}
      />

      {mode === "setup" ? (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h1 className="text-center font-display text-5xl text-white md:text-7xl">
            Buyer Perception Exercise
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            A structured prediction session for leadership teams.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-3xl text-white">Run a Team Session</h2>
              <div className="mt-5 space-y-3">
                <input
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/10 bg-[#101018] p-3 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-white/30"
                />
                <select
                  value={assessmentType}
                  onChange={(event) =>
                    setAssessmentType(event.target.value as AssessmentType)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#101018] p-3 text-zinc-100 outline-none focus:border-white/30"
                >
                  <option value="new-business">New Business</option>
                  <option value="post-sales">Post-Sales</option>
                </select>
                <input
                  value={participantName}
                  onChange={(event) => setParticipantName(event.target.value)}
                  placeholder="Participant name"
                  className="w-full rounded-xl border border-white/10 bg-[#101018] p-3 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-white/30"
                />
                <label className="flex items-center gap-2 text-sm text-zinc-300">
                  <input
                    checked={generateLink}
                    onChange={(event) => setGenerateLink(event.target.checked)}
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-transparent"
                  />
                  Generate link for additional participants
                </label>
                <button
                  type="button"
                  onClick={handleCreateSession}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white transition hover:bg-white/20"
                >
                  Start Session
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-3xl text-white">Join an Existing Session</h2>
              <div className="mt-5 space-y-3">
                <input
                  value={joinCode}
                  onChange={(event) => setJoinCode(event.target.value)}
                  placeholder="Session code"
                  className="w-full rounded-xl border border-white/10 bg-[#101018] p-3 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-white/30"
                />
                <input
                  value={participantName}
                  onChange={(event) => setParticipantName(event.target.value)}
                  placeholder="Participant name"
                  className="w-full rounded-xl border border-white/10 bg-[#101018] p-3 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-white/30"
                />
                <button
                  type="button"
                  onClick={handleJoinSession}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white transition hover:bg-white/20"
                >
                  Join Session
                </button>
                {joinCode.trim() && (
                  <button
                    type="button"
                    onClick={() => router.push(`/join/${joinCode.trim()}`)}
                    className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-3 text-zinc-200 transition hover:bg-white/15"
                  >
                    Open Join Link Route
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:bg-white/15"
            >
              Import JSON
            </button>
            {currentSession && (
              <button
                type="button"
                onClick={exportSession}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:bg-white/15"
              >
                Export Session JSON
              </button>
            )}
            <Link
              href="/report"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-zinc-200 hover:bg-white/15"
            >
              View Report Page
            </Link>
          </div>

          {generateLink && currentJoinUrl && currentSession && (
            <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
              Join link:{" "}
              <a href={currentJoinUrl} className="text-white underline">
                {currentJoinUrl}
              </a>
            </div>
          )}

          {(joinError || importError || (initialJoinSessionId && !currentSession)) && (
            <p className="mt-6 text-center text-sm text-red-300">
              {joinError || importError || "Unable to load session."}
            </p>
          )}
        </section>
      ) : (
        renderExercise()
      )}
    </div>
  );
}

