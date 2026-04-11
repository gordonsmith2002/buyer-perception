"use client";

import { FormEvent, useMemo, useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-blind-spot-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-blind-spot-sans",
});

type Answer = "yes" | "no";

type Question = {
  prompt: string;
  yes: string;
  no: string;
};

const questions: Question[] = [
  {
    prompt:
      "Do you know — with certainty — what your last 10 lost prospects told their peers about you after the decision?",
    yes: "Yes, we have visibility on this",
    no: "No, we have no idea",
  },
  {
    prompt:
      "If your CRM says 'lost to pricing,' do you trust that's the real reason?",
    yes: "Yes, our CRM data is reliable",
    no: "Honestly, probably not",
  },
  {
    prompt:
      "Could your team tell you the difference between a lost prospect who's recommending you to peers and one who's warning people away?",
    yes: "Yes, we'd know",
    no: "No, we can't see that",
  },
  {
    prompt:
      "Has anyone outside your sales team ever spoken directly to a lost prospect about what the buying experience was actually like?",
    yes: "Yes, we've done this",
    no: "No, never",
  },
  {
    prompt:
      "Do you know which competitor your buyers rank you against — not who you think you compete with, but who they actually compared you to?",
    yes: "Yes, from buyer conversations",
    no: "Only from what our reps tell us",
  },
];

const CALENDLY_URL = "https://calendly.com/admin-buyerperception/30min";

export default function BlindSpotTestPage() {
  const [screen, setScreen] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [flash, setFlash] = useState<Answer | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const noCount = useMemo(
    () => answers.filter((answer) => answer === "no").length,
    [answers],
  );

  const handleStart = () => setScreen(1);

  const handleAnswer = (answer: Answer) => {
    setAnswers((current) => [...current, answer]);
    setFlash(answer);

    window.setTimeout(() => {
      setFlash(null);
      setScreen((current) => current + 1);
    }, 220);
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const showHighBlindSpotResult = noCount >= 3;
  const activeQuestion =
    screen >= 1 && screen <= questions.length ? questions[screen - 1] : null;

  return (
    <main
      className={[
        playfair.variable,
        dmSans.variable,
        "min-h-screen bg-[#0a0a0f] text-[#f5f5f7]",
        "font-[var(--bp-blind-spot-sans)]",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none fixed inset-0 z-10 opacity-0 transition-opacity duration-200",
          flash === "yes" ? "bg-[#34d399]/20 opacity-100" : "",
          flash === "no" ? "bg-[#ef4444]/20 opacity-100" : "",
        ].join(" ")}
      />

      <section className="relative mx-auto flex min-h-screen w-full max-w-4xl items-center px-5 py-10 sm:px-8">
        <div key={screen} className="bp-screen-in mx-auto w-full text-center">
          {screen === 0 && (
            <div className="mx-auto max-w-3xl">
              <h1 className="font-[var(--bp-blind-spot-serif)] text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                How much do you really know about what your buyers think?
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-[#a3a3ad] sm:text-lg">
                Five questions. Sixty seconds. Be honest.
              </p>
              <button
                type="button"
                onClick={handleStart}
                className="mx-auto mt-10 inline-flex rounded-md border border-[#c0392b] bg-[#c0392b] px-7 py-3.5 text-sm font-semibold tracking-tight text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228] sm:text-base"
              >
                Start →
              </button>
            </div>
          )}

          {activeQuestion && (
            <div className="mx-auto max-w-3xl">
              <h2 className="font-[var(--bp-blind-spot-serif)] text-3xl leading-tight text-white sm:text-5xl">
                {activeQuestion.prompt}
              </h2>
              <div className="mx-auto mt-12 flex w-full max-w-[500px] flex-col gap-4">
                <button
                  type="button"
                  onClick={() => handleAnswer("yes")}
                  className="w-full rounded-md border border-white/20 bg-white/5 px-5 py-4 text-left text-sm font-medium text-[#d1d5db] transition-all hover:border-[#34d399]/50 hover:bg-[#34d399]/10 hover:text-[#ecfdf5] sm:text-base"
                >
                  {activeQuestion.yes}
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer("no")}
                  className="w-full rounded-md border border-[#ef4444]/50 bg-[#ef4444]/10 px-5 py-4 text-left text-sm font-semibold text-[#fee2e2] transition-all hover:border-[#ef4444] hover:bg-[#ef4444]/20 sm:text-base"
                >
                  {activeQuestion.no}
                </button>
              </div>
            </div>
          )}

          {screen === 6 && (
            <div className="mx-auto max-w-3xl text-left sm:text-center">
              {showHighBlindSpotResult ? (
                <>
                  <h2 className="font-[var(--bp-blind-spot-serif)] text-3xl leading-tight text-white sm:text-5xl">
                    You have {noCount} blind spots in your buyer perception.
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#a3a3ad] sm:text-lg">
                    Most leadership teams do. The difference is whether you find
                    out from us — or from your pipeline slowly disappearing.
                  </p>
                  <div className="mx-auto mt-10 max-w-2xl rounded-md border border-white/10 bg-white/[0.02] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d1d5db]">
                      Here&apos;s what you don&apos;t know:
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#b8bbc4] sm:text-base">
                      — What your lost prospects are telling their peers about
                      you right now
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#b8bbc4] sm:text-base">
                      — Whether your CRM loss reasons match what buyers actually
                      think
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#b8bbc4] sm:text-base">
                      — How many of your &apos;lost&apos; deals are actually
                      generating referrals — and how many are destroying future
                      pipeline
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="font-[var(--bp-blind-spot-serif)] text-3xl leading-tight text-white sm:text-5xl">
                    You&apos;re ahead of most. But there&apos;s still a gap.
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#a3a3ad] sm:text-lg">
                    Even companies with strong buyer visibility find a 1.5 to 2
                    point gap between what leadership predicts and what buyers
                    actually report. The question isn&apos;t whether the gap
                    exists — it&apos;s how big it is and where it&apos;s costing
                    you revenue.
                  </p>
                </>
              )}

              <button
                type="button"
                onClick={() => setScreen(7)}
                className="mt-10 inline-flex rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-[#e4e4e9] transition-colors hover:border-white/30 hover:bg-white/5 sm:text-base"
              >
                Continue →
              </button>
            </div>
          )}

          {screen === 7 && (
            <div className="mx-auto max-w-3xl">
              <h2 className="font-[var(--bp-blind-spot-serif)] text-3xl leading-tight text-white sm:text-5xl">
                We close the gap.
              </h2>

              <div className="mx-auto mt-10 grid max-w-2xl gap-6 text-left">
                <p className="text-base leading-relaxed text-[#b2b5bf] sm:text-lg">
                  We anonymously interview your lost prospects and churned
                  customers.
                </p>
                <p className="text-base leading-relaxed text-[#b2b5bf] sm:text-lg">
                  We find out what they actually think about your people, your
                  product, your pricing, and your process.
                </p>
                <p className="text-base leading-relaxed text-[#b2b5bf] sm:text-lg">
                  We deliver it in a Buyer Perception Report with a score, a
                  competitive picture, and specific actions your team can
                  implement in days.
                </p>
              </div>

              <div className="mx-auto mt-10 max-w-2xl rounded-md border border-white/10 bg-white/[0.02] p-6">
                <p className="text-sm leading-relaxed text-[#e4e4e9] sm:text-base">
                  No surveys. No forms. No AI chatbots. Real conversations with
                  a real person.
                </p>
              </div>

              <div className="mt-9 flex flex-col items-center gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md border border-[#c0392b] bg-[#c0392b] px-7 py-3.5 text-sm font-semibold tracking-tight text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228] sm:text-base"
                >
                  Book a Call →
                </a>
                <p className="text-sm text-[#8f93a0]">
                  If your buyers don&apos;t engage, you don&apos;t pay.
                </p>
                <button
                  type="button"
                  onClick={() => setScreen(8)}
                  className="text-sm text-[#b2b5bf] underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                >
                  Not ready to talk yet
                </button>
              </div>
            </div>
          )}

          {screen === 8 && (
            <div className="mx-auto max-w-3xl">
              <h2 className="font-[var(--bp-blind-spot-serif)] text-3xl leading-tight text-white sm:text-5xl">
                Not ready to talk yet?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#a3a3ad] sm:text-lg">
                We&apos;ll send you one insight per week on buyer perception, CRM
                blind spots, and invisible pipeline.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-10 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#868a97] outline-none transition-colors focus:border-white/25 focus:bg-white/[0.07] sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="rounded-md border border-[#c0392b] bg-[#c0392b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228] sm:text-base"
                >
                  Subscribe
                </button>
              </form>

              {subscribed && (
                <p className="mt-4 text-sm text-[#9ae6c8]">
                  You&apos;re in. We&apos;ll send the first insight soon.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .bp-screen-in {
          animation: bp-screen-in 340ms ease both;
        }

        @keyframes bp-screen-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
