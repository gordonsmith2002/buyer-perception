import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Buyer Perception — One Pager",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    num: "01",
    title: "Your CRM is lying to you",
    body: 'Every closed-lost reason in your pipeline was supplied by someone with no incentive to be honest. "Budget" often means "I didn\'t trust you enough to spend it." "Timing" often means "I\'d already decided." Your forecasting, your coaching, your strategy — built on polite fictions, recorded as fact.',
  },
  {
    num: "02",
    title: "And your buyers have every reason to keep it that way",
    body: "Honesty with a salesperson buys them more calls, more objection handling, and a conversation they don't want. A clean, plausible reason ends it politely. They're not dishonest people — there's simply no upside in telling the truth to someone whose job is to change their mind.",
  },
  {
    num: "03",
    title: "Call recordings and AI can't fix this",
    body: 'They capture what was said. Not what was withheld. A buyer who has decided to say "we\'re going in a different direction" says it clearly, on the record. The AI transcribes it perfectly. The loss reason is logged with confidence. And it\'s still wrong — the real reason never entered the conversation.',
  },
] as const;

const STATS = [
  {
    figure: "73%",
    desc: "of B2B buyers say peer recommendations are the #1 factor in choosing a vendor.",
    source: "Wynter, 2024",
  },
  {
    figure: "15",
    desc: "the number of people a dissatisfied customer tells about their experience.",
    source: "American Express",
  },
  {
    figure: "64%",
    desc: 'of deals logged as "lost on price" were actually lost on trust, risk, or the buying process.',
    source: "Huthwaite",
  },
  {
    figure: "0.35★",
    desc: "how much lower buyers rate vendors when their review is anonymous.",
    source: "Analysis of 187,000 G2 reviews",
  },
] as const;

export default function OnePagerPage() {
  return (
    <div className="min-h-screen bg-neutral-200 text-charcoal print:bg-white print:min-h-0">
      <div className="mx-auto max-w-[210mm] print:max-w-none">
        <div className="no-print flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="font-sans text-xs text-neutral-600">
            Preview · A4 · use Open PDF (print dialog crashes this browser)
          </p>
          <PrintButton />
        </div>

        <article className="one-pager relative mx-auto flex min-h-[297mm] w-full flex-col overflow-hidden bg-white px-[16mm] pb-[12mm] pt-[14mm] shadow-sm print:min-h-[297mm] print:w-[210mm] print:shadow-none">
          <header className="mb-6 flex items-start justify-between gap-6">
            <div className="min-w-0">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal">
                Buyer Perception
              </p>
            </div>
            <div className="h-9 w-[7.5rem] shrink-0 opacity-90" aria-hidden>
              {/* Space reserved for logo artwork — matches landing primary mark */}
              <Image
                src="/images/logo-primary.svg"
                alt=""
                width={120}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </div>
          </header>

          <h1 className="max-w-[170mm] font-sans text-[2.05rem] font-bold leading-[1.08] tracking-tight sm:text-[2.15rem]">
            <span className="block text-charcoal">
              Your buyers don&apos;t tell you the truth.
            </span>
            <span className="mt-1 block text-terracotta">
              They have no reason to lie to me.
            </span>
          </h1>

          <p className="mt-5 max-w-[155mm] border-l border-terracotta/70 pl-3.5 font-sans text-[0.95rem] font-medium leading-snug text-charcoal">
            Every revenue decision you make is built on what buyers were willing
            to say to a salesperson. That&apos;s not the same as what happened.
          </p>

          <div className="mt-5 h-px w-full bg-platinum" aria-hidden />

          <div className="mt-5 space-y-4">
            {SECTIONS.map((section) => (
              <section key={section.num}>
                <h2 className="font-sans text-[0.95rem] font-bold leading-snug text-charcoal">
                  <span className="mr-1.5 text-terracotta">{section.num}</span>
                  {section.title}
                </h2>
                <p className="mt-1.5 font-sans text-[0.8rem] font-normal leading-[1.38] text-charcoal">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="relative -mx-[16mm] mt-5 bg-sand px-[16mm] py-5">
            <div className="grid grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div key={stat.figure} className="min-w-0">
                  <p className="font-sans text-[1.65rem] font-bold leading-none tracking-tight text-terracotta">
                    {stat.figure}
                  </p>
                  <div className="mt-2 h-0.5 w-8 bg-terracotta" aria-hidden />
                  <p className="mt-2.5 font-sans text-[0.7rem] font-normal leading-snug text-charcoal">
                    {stat.desc}
                  </p>
                  <p className="mt-1.5 font-sans text-[0.62rem] font-normal leading-snug text-charcoal/50">
                    {stat.source}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 h-px w-14 bg-terracotta" aria-hidden />
          <p className="mt-3.5 max-w-[170mm] font-sans text-[0.9rem] font-medium leading-snug text-charcoal">
            Right now, your former prospects and churned customers are telling
            peers exactly what they think of you. Some are recommending you.
            Some are warning people away. You can&apos;t see which — and
            it&apos;s building or destroying pipeline you&apos;ll never
            attribute.
          </p>

          <div className="mt-5 grid flex-1 grid-cols-[1.35fr_0.85fr] gap-7">
            <div>
              <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.16em] text-terracotta">
                What Buyer Perception does
              </p>
              <p className="mt-2 font-sans text-[0.75rem] font-normal leading-[1.38] text-charcoal">
                I sit anonymously with the buyers who said no and the customers
                who left — and find out what actually happened. No attribution,
                no social cost, no reason to filter. Then I work with your
                leadership team to fix what the findings say needs fixing. You
                get the real reasons behind your wins, losses, and churn. Which
                deals were recoverable. Who&apos;s recommending you,
                who&apos;s warning people off — and what to do about it.
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.16em] text-terracotta">
                Who this is for
              </p>
              <p className="mt-2 font-sans text-[0.75rem] font-normal leading-[1.38] text-charcoal">
                Revenue leaders and CEOs at B2B tech companies where every deal
                matters and every loss is felt.
              </p>
            </div>
          </div>

          <footer className="relative -mx-[16mm] -mb-[12mm] mt-5 overflow-hidden bg-charcoal px-[16mm] py-5 text-platinum">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6 opacity-[0.08]"
            >
              <Image
                src="/images/logo-mark-sand.svg"
                alt=""
                width={90}
                height={150}
                className="h-24 w-auto"
              />
            </div>
            <p className="relative font-sans text-[0.88rem] font-bold leading-snug text-white">
              The first conversation is a Lost Revenue Assessment — your own
              numbers, one hour, no charge.
            </p>
            <p className="relative mt-1.5 font-sans text-[0.8rem] font-medium text-terracotta">
              gordon@buyerperception.com · buyerperception.com
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
