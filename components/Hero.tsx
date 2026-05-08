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
              Find out what your buyers really think about you
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-7 max-w-3xl border-l border-accent/70 pl-4 font-serif text-xl sm:text-2xl leading-relaxed text-white/90">
              Your CRM data reflects{" "}
              <span className="italic text-white">your perception</span>. Your
              call recordings reflect{" "}
              <span className="italic text-white">your perception</span>. Your
              rep debriefs, your G2 reviews, your NPS scores &mdash; they all
              reflect <span className="italic text-white">your perception</span>.{" "}
              <span className="font-semibold text-accent">
                We go and get your buyer&apos;s.
              </span>
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Reveal>
              <BookButton />
            </Reveal>
            <Reveal>
              <div className="text-white/70 text-sm">
                If your buyers don&apos;t engage, you don&apos;t pay.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
