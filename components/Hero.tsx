import React from "react";
import BookButton from "./BookButton";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="bg-brandDark text-brandLight">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight text-white">
              Win-loss analysis tells you why you lost the deal. We tell you
              what that buyer is saying about you right now.
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-7 max-w-3xl border-l border-accent/70 pl-4 font-serif text-xl sm:text-2xl leading-relaxed text-white/90">
              Not what your CRM says. Not what your team tells you. Anonymous
              interviews with your lost prospects and churned customers to find
              out what you did well, what you could have done differently, and
              what to fix first.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col items-start gap-3">
            <Reveal>
              <BookButton />
            </Reveal>
            <Reveal>
              <div className="text-white/70 text-sm">
                If your buyers don&apos;t engage, you don&apos;t pay.
              </div>
            </Reveal>
            <Reveal>
              <div className="text-white/75 text-xs sm:text-sm">
                Built on 20 years of B2B revenue leadership
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
