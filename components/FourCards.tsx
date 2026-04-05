import React from "react";
import Reveal from "./Reveal";

function FeatureCard({
  title,
  children,
  index,
}: {
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <Reveal delayMs={index * 100}>
      <div
        className={[
          "rounded-2xl border border-black/10 p-6 h-full min-h-[320px] flex flex-col",
          "bg-creamCard shadow-[0_1px_3px_rgba(0,0,0,0.06)]",
          "transition-all duration-300 ease-out",
          "md:hover:scale-[1.02] md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
        ].join(" ")}
      >
        <h3 className="font-serif text-xl sm:text-2xl leading-tight min-h-[3.25rem] text-[#1a1a1a]">
          {title}
        </h3>
        <div className="mt-4 flex-1 text-[#555] text-base leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export default function FourCards() {
  return (
    <section className="bg-brandLight text-brandDark scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            WHY YOU CAN&apos;T SOLVE THIS INTERNALLY
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 lg:items-stretch">
          <FeatureCard
            index={0}
            title="The conversations that matter most still need a human"
          >
            <p>
              In a world where everything is being automated, the conversations
              that matter most - the ones where someone tells you what they
              really think - still require a human who knows how to listen.
              Not a survey. Not an AI chatbot. A conversation.
            </p>
          </FeatureCard>

          <FeatureCard
            index={1}
            title="Your CRM captures the seller's workflow, not the buyer's verdict"
          >
            <p>
              CRM loss reasons are chosen by the person who lost the deal.
              Research shows 85% of closed-lost data doesn&apos;t match what
              buyers actually report. You&apos;re making strategic decisions on
              data that&apos;s structurally unreliable.
            </p>
          </FeatureCard>

          <FeatureCard index={2} title="Your tech stack has a blind spot">
            <p>
              You&apos;ve invested in Gong, Salesforce, Clari, the full stack.
              They capture what happened when the buyer was in the room. None of
              them capture what happened after they left. The ghost - the
              prospect who stops replying - is invisible to every tool you own.
            </p>
          </FeatureCard>

          <FeatureCard
            index={3}
            title="Your buyers won't tell your sales team the truth"
          >
            <p>
              When a prospect ghosts you or gives a polite &apos;we went
              another direction,&apos; they&apos;re not being honest - they&apos;re
              being efficient. Anything they share with your team will be used
              to sell to them. They know this. So they say nothing useful.
            </p>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
