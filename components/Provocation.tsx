import React from "react";
import Reveal from "./Reveal";

export default function Provocation() {
  return (
    <section className="bg-brandDark text-brandLight scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-white/50 font-semibold">
            THE PROBLEM
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-4xl font-serif text-xl sm:text-2xl font-bold leading-snug text-white">
            This isn&apos;t a you problem. Every revenue team is flying on the
            same instruments, and they all have the same blind spot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
