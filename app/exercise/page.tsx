"use client";

import { useMemo, useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-exercise-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-exercise-sans",
});

const dimensions = [
  "Responsiveness",
  "People",
  "Proposal",
  "Pricing",
  "Product",
] as const;

type DimensionKey = (typeof dimensions)[number];

type Scores = Record<DimensionKey, number>;

type Participant = {
  id: string;
  name: string;
  role: string;
  scores: Scores;
};

const defaultScores: Scores = {
  Responsiveness: 7,
  People: 7,
  Proposal: 7,
  Pricing: 7,
  Product: 7,
};

function createParticipant(index: number): Participant {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name: `Participant ${index}`,
    role: "",
    scores: { ...defaultScores },
  };
}

function clampScore(value: number) {
  if (Number.isNaN(value)) return 1;
  return Math.min(10, Math.max(1, value));
}

function oneDecimal(value: number) {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function scoreClass(value: number) {
  if (value < 4) return "text-[#ef4444]";
  if (value < 7) return "text-[#f59e0b]";
  return "text-[#34d399]";
}

export default function ExercisePage() {
  const [companyName, setCompanyName] = useState("");
  const [sessionDate, setSessionDate] = useState(new Date().toISOString().slice(0, 10));
  const [participants, setParticipants] = useState<Participant[]>([
    createParticipant(1),
    createParticipant(2),
    createParticipant(3),
  ]);
  const [buyerReality, setBuyerReality] = useState<Scores>({
    Responsiveness: 5.5,
    People: 6.5,
    Proposal: 5.0,
    Pricing: 5.5,
    Product: 6.0,
  });

  const updateParticipant = (
    id: string,
    updater: (participant: Participant) => Participant,
  ) => {
    setParticipants((current) =>
      current.map((participant) =>
        participant.id === id ? updater(participant) : participant,
      ),
    );
  };

  const addParticipant = () => {
    setParticipants((current) => [...current, createParticipant(current.length + 1)]);
  };

  const removeParticipant = (id: string) => {
    setParticipants((current) =>
      current.length === 1 ? current : current.filter((participant) => participant.id !== id),
    );
  };

  const averages = useMemo(() => {
    const count = Math.max(participants.length, 1);
    const byDimension = dimensions.reduce(
      (acc, dimension) => {
        const total = participants.reduce(
          (sum, participant) => sum + participant.scores[dimension],
          0,
        );
        acc[dimension] = total / count;
        return acc;
      },
      {} as Record<DimensionKey, number>,
    );
    const overall =
      dimensions.reduce((sum, dimension) => sum + byDimension[dimension], 0) /
      dimensions.length;
    return { byDimension, overall };
  }, [participants]);

  const gap = useMemo(() => {
    const byDimension = dimensions.reduce(
      (acc, dimension) => {
        acc[dimension] = buyerReality[dimension] - averages.byDimension[dimension];
        return acc;
      },
      {} as Record<DimensionKey, number>,
    );
    const overall =
      dimensions.reduce((sum, dimension) => sum + byDimension[dimension], 0) /
      dimensions.length;
    return { byDimension, overall };
  }, [averages.byDimension, buyerReality]);

  return (
    <main
      className={[
        playfair.variable,
        dmSans.variable,
        "min-h-screen bg-[#0a0a0f] px-5 py-8 text-[#f5f5f7] sm:px-8",
        "font-[var(--bp-exercise-sans)]",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 border-b border-white/10 pb-5">
          <p className="text-xs uppercase tracking-[0.16em] text-[#9aa0ad]">
            Buyer Perception Exercise
          </p>
          <h1 className="mt-3 font-[var(--bp-exercise-serif)] text-4xl text-white">
            Leadership Prediction Workshop
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-[#b2b8c4]">
            Capture how your team predicts buyers will score your performance
            across five dimensions. Then compare against actual buyer scores to
            quantify the perception gap.
          </p>
        </header>

        <section className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4 sm:grid-cols-2 lg:grid-cols-3">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/90">Company</span>
            <input
              type="text"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              placeholder="Meridian Solutions"
              className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-white/35"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/90">Session date</span>
            <input
              type="date"
              value={sessionDate}
              onChange={(event) => setSessionDate(event.target.value)}
              className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-white/35"
            />
          </label>
          <div className="flex items-end">
            <button
              type="button"
              onClick={addParticipant}
              className="w-full rounded-md border border-[#c0392b] bg-[#c0392b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228]"
            >
              Add participant
            </button>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] p-4 sm:p-5">
          <h2 className="font-[var(--bp-exercise-serif)] text-2xl text-white">
            Team Scores Matrix (1-10)
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.12em] text-[#9aa0ad]">
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Role</th>
                  {dimensions.map((dimension) => (
                    <th key={dimension} className="px-3 py-2">
                      {dimension}
                    </th>
                  ))}
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant) => (
                  <tr key={participant.id} className="bg-white/[0.03] text-sm">
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        value={participant.name}
                        onChange={(event) =>
                          updateParticipant(participant.id, (current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        className="w-36 rounded border border-white/15 bg-black/20 px-2 py-1.5 text-sm text-white outline-none focus:border-white/35"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        type="text"
                        value={participant.role}
                        onChange={(event) =>
                          updateParticipant(participant.id, (current) => ({
                            ...current,
                            role: event.target.value,
                          }))
                        }
                        placeholder="CRO"
                        className="w-28 rounded border border-white/15 bg-black/20 px-2 py-1.5 text-sm text-white outline-none focus:border-white/35"
                      />
                    </td>
                    {dimensions.map((dimension) => (
                      <td key={dimension} className="px-3 py-2">
                        <input
                          type="number"
                          min={1}
                          max={10}
                          step={0.1}
                          value={participant.scores[dimension]}
                          onChange={(event) =>
                            updateParticipant(participant.id, (current) => ({
                              ...current,
                              scores: {
                                ...current.scores,
                                [dimension]: clampScore(Number(event.target.value)),
                              },
                            }))
                          }
                          className="w-20 rounded border border-white/15 bg-black/20 px-2 py-1.5 text-sm text-white outline-none focus:border-white/35"
                        />
                      </td>
                    ))}
                    <td className="px-3 py-2">
                      <button
                        type="button"
                        onClick={() => removeParticipant(participant.id)}
                        className="rounded border border-white/20 px-2 py-1 text-xs text-white/80 transition-colors hover:border-white/35"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
            <h2 className="font-[var(--bp-exercise-serif)] text-2xl text-white">
              Predicted Buyer Perception
            </h2>
            <p className="mt-1 text-sm text-[#a7adbb]">
              Average of all leadership participant scores.
            </p>
            <div className="mt-4 grid gap-3">
              {dimensions.map((dimension) => (
                <div
                  key={dimension}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 px-3 py-2"
                >
                  <span className="text-sm text-white/85">{dimension}</span>
                  <span className={`text-lg font-semibold ${scoreClass(averages.byDimension[dimension])}`}>
                    {oneDecimal(averages.byDimension[dimension])}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-white/15 bg-white/[0.03] px-3 py-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[#9aa0ad]">
                Overall Predicted Score
              </p>
              <p className={`mt-1 font-[var(--bp-exercise-serif)] text-4xl ${scoreClass(averages.overall)}`}>
                {oneDecimal(averages.overall)} / 10
              </p>
            </div>
          </article>

          <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
            <h2 className="font-[var(--bp-exercise-serif)] text-2xl text-white">
              Buyer Reality + Gap
            </h2>
            <p className="mt-1 text-sm text-[#a7adbb]">
              Enter actual buyer scores once interviews are complete.
            </p>
            <div className="mt-4 grid gap-3">
              {dimensions.map((dimension) => (
                <div
                  key={dimension}
                  className="grid grid-cols-[1fr_90px_90px] items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2"
                >
                  <span className="text-sm text-white/85">{dimension}</span>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    step={0.1}
                    value={buyerReality[dimension]}
                    onChange={(event) =>
                      setBuyerReality((current) => ({
                        ...current,
                        [dimension]: clampScore(Number(event.target.value)),
                      }))
                    }
                    className="w-full rounded border border-white/15 bg-black/20 px-2 py-1.5 text-sm text-white outline-none focus:border-white/35"
                  />
                  <span className={`text-right text-sm font-semibold ${scoreClass(gap.byDimension[dimension] + 5)}`}>
                    {gap.byDimension[dimension] > 0 ? "+" : ""}
                    {oneDecimal(gap.byDimension[dimension])}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-white/15 bg-white/[0.03] px-3 py-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[#9aa0ad]">
                Overall Perception Gap (Actual - Predicted)
              </p>
              <p className={`mt-1 font-[var(--bp-exercise-serif)] text-4xl ${scoreClass(gap.overall + 5)}`}>
                {gap.overall > 0 ? "+" : ""}
                {oneDecimal(gap.overall)}
              </p>
            </div>
          </article>
        </section>

        <section className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] p-5">
          <h2 className="font-[var(--bp-exercise-serif)] text-2xl text-white">
            Session Snapshot
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#b2b8c4]">
            {companyName || "This company"} leadership team predicts an overall
            buyer perception score of{" "}
            <span className={scoreClass(averages.overall)}>{oneDecimal(averages.overall)}</span> on{" "}
            {sessionDate}. Current participant count: {participants.length}. Use
            this as your pre-interview baseline before validating with live buyer
            interviews.
          </p>
        </section>
      </div>
    </main>
  );
}
