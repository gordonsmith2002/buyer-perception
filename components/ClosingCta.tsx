import React from "react";
import BookButton from "./BookButton";
import Reveal from "./Reveal";

export default function ClosingCta() {
  return (
    <section
      id="contact"
      className="bg-brandLight text-brandDark scroll-mt-20 border-t border-black/5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 lg:py-32 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] leading-tight text-[#1a1a1a] max-w-4xl mx-auto">
            <span>Stop letting your competitors win deals you should have won.</span>
            <span className="block mt-5">
              Stop losing customers you didn&apos;t need to lose.
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-8 text-lg text-[#555] max-w-2xl mx-auto leading-relaxed">
            Find out what your buyers say about you when you are not in the room.
          </p>
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Reveal>
            <BookButton />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
