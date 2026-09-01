import Image from "next/image";
import BookButton, { GENERIC_BOOK_CALL_URL } from "../BookButton";
import Reveal from "../Reveal";

const STATS = [
  {
    percentage: "12.4%",
    headline:
      "B2B NPS surveys average a 12.4% response rate. 88% of customers never respond at all.",
    source: "Source: Bain & Company / CustomerGauge",
  },
  {
    percentage: "90%",
    headline:
      "90% of executives believe customer loyalty has grown. Only 40% of customers agree.",
    source: "Source: PwC, 2025",
  },
];

function CompactStatCard({
  percentage,
  headline,
  source,
  delayMs = 0,
}: {
  percentage: string;
  headline: string;
  source: string;
  delayMs?: number;
}) {
  return (
    <Reveal delayMs={delayMs}>
      <div className="rounded-xl bg-sand px-5 py-6 sm:px-6 sm:py-7">
        <p
          className="font-sans text-[3.25rem] sm:text-[3.75rem] font-bold leading-none tracking-tight text-charcoal"
          aria-hidden
        >
          {percentage}
        </p>
        <div className="mt-3 h-1 w-12 bg-terracotta" aria-hidden />
        <p className="mt-4 font-sans text-base sm:text-lg font-medium leading-snug text-charcoal">
          {headline}
        </p>
        <p className="mt-3 text-xs sm:text-sm tracking-wide text-charcoal/45">
          {source}
        </p>
      </div>
    </Reveal>
  );
}

export default function InsightsPage() {
  return (
    <div className="insights-page min-h-screen flex flex-col bg-[color:var(--bg-insights)] text-[color:var(--text-insights)]">
      <Hero />
      <FeedbackGap />
      <WhatWeDo />
      <WhatYouGet />
      <About />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--text-insights)]/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 flex w-full max-w-xl items-center justify-center md:justify-end md:pr-8 lg:pr-16"
      >
        <Image
          src="/images/logo-mark-charcoal.svg"
          alt=""
          width={420}
          height={700}
          className="h-[75%] w-auto max-h-[560px] opacity-[0.06] select-none"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="font-sans font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight text-[color:var(--text-insights)]">
              Nobody is asking TA leaders what it&apos;s really like to evaluate
              and buy technology.{" "}
              <span className="text-terracotta [text-shadow:0.45px_0_0_currentColor,-0.45px_0_0_currentColor,0_0.45px_0_currentColor]">
                We&apos;re changing that.
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-7 max-w-2xl border-l border-terracotta/70 pl-4 font-sans font-normal text-base sm:text-lg leading-relaxed text-[color:var(--text-insights)]/80">
              We&apos;re building the most honest picture of what it&apos;s like
              to evaluate, buy, and implement TA and HR technology in 2026. We
              can only do that by speaking to the people who actually live it.
              Every conversation is anonymous. In return, you get access to what
              your peers are really saying: the challenges they&apos;re facing,
              how they&apos;re navigating vendor selection, and what&apos;s
              actually working.
            </p>
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <BookButton href={GENERIC_BOOK_CALL_URL}>
                Share Your Perspective
              </BookButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedbackGap() {
  return (
    <section
      id="feedback-gap"
      className="scroll-mt-20 border-t border-[color:var(--text-insights)]/10 bg-platinum"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
            The feedback gap
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-sans font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[color:var(--text-insights)]">
            You&apos;ve given feedback before, but has anything actually
            changed?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-[color:var(--text-insights)]/70 leading-relaxed">
            Through vendor surveys, NPS scores, polite conversations at events,
            and exit interviews where you both knew the outcome wouldn&apos;t
            change anything. The problem isn&apos;t that you haven&apos;t shared
            your perspective. It&apos;s that your perspective hasn&apos;t cut
            through the noise.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {STATS.map((stat, i) => (
            <CompactStatCard
              key={stat.percentage}
              percentage={stat.percentage}
              headline={stat.headline}
              source={stat.source}
              delayMs={i * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-20 border-t border-[color:var(--text-insights)]/10 bg-[color:var(--bg-insights)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
            What we&apos;re doing differently
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-sans font-bold text-3xl sm:text-4xl leading-tight text-[color:var(--text-insights)]">
            Anonymous. Independent. Designed to actually reach the people who
            build the products.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-[color:var(--text-insights)]/70 leading-relaxed">
            We conduct in-depth anonymous interviews with senior TA and HR
            leaders about their real experiences of evaluating, buying, and
            implementing technology. Not on behalf of any single vendor.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-[color:var(--text-insights)]/70 leading-relaxed">
            This isn&apos;t a survey. It&apos;s a 25-minute conversation with
            someone who&apos;s spent twenty years selling TA technology and
            knows exactly how the other side of the table works. Your company is
            never named. Your identity is never shared. The insights are
            consolidated across multiple interviews and published as independent
            research. This insight is delivered to the people who can actually
            change things.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section
      id="what-you-get"
      className="scroll-mt-20 border-t border-[color:var(--text-insights)]/10 bg-platinum"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
            What you get back
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 max-w-4xl font-sans font-bold text-3xl sm:text-4xl leading-tight text-[color:var(--text-insights)]">
            Insight you can&apos;t get anywhere else
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-[color:var(--text-insights)]/70 leading-relaxed">
            Every participant receives access to the consolidated findings from
            across all interviews. What your peers are experiencing. How
            they&apos;re navigating the same challenges you face. What&apos;s
            working and what isn&apos;t, in a format that&apos;s genuinely
            useful, not a 60-page report nobody reads.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-[color:var(--text-insights)]/70 leading-relaxed">
            Senior TA leaders consistently tell us that the most compelling
            reason to participate is understanding what their peers are actually
            doing, through a lens that&apos;s independent, anonymous, and
            impossible to get from vendor marketing, G2 reviews, or conference
            panels.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-[color:var(--text-insights)]/10 bg-[color:var(--bg-insights)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
            ABOUT
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-[color:var(--text-insights)]/10">
              <Image
                src="/images/gordon-headshot-bw.jpg"
                alt="Gordon, founder of Buyer Perception"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 384px"
                quality={85}
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8 space-y-6 text-[color:var(--text-insights)]/75 text-base sm:text-lg leading-relaxed">
            <Reveal>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[color:var(--text-insights)] leading-tight">
                Gordon
              </h2>
            </Reveal>
            <Reveal>
              <p>
                I&apos;ve spent nearly 20 years in B2B revenue leadership across
                TA and HR technology, including VP Sales and Customer Success
                roles at three VC-backed companies. I&apos;ve sat on the vendor
                side of every buying conversation, and I know exactly how little
                honest feedback makes it through.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I built Buyer Perception because I believe TA leaders deserve to
                be heard properly, not through a survey that gets a 12%
                response rate, and not through a polite conversation with a
                salesperson who&apos;s trained to handle objections rather than
                listen to them.
              </p>
            </Reveal>
            <Reveal>
              <p>
                If you&apos;ve recently been through a technology evaluation,
                purchase, or implementation, I&apos;d genuinely value 25 minutes
                of your time. What you share will be anonymous, consolidated
                with other perspectives, and put directly in front of the people
                building the products you use every day.
              </p>
            </Reveal>
            <Reveal>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="mailto:gordon@buyerperception.com"
                  className="text-[color:var(--text-insights)]/80 hover:text-[color:var(--text-insights)] text-base underline-offset-4 hover:underline"
                >
                  gordon@buyerperception.com
                </a>
                <BookButton href={GENERIC_BOOK_CALL_URL}>
                  Book a Conversation
                </BookButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
