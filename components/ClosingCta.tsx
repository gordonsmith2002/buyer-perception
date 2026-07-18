import Image from "next/image";
import React from "react";
import BookButton from "./BookButton";
import Reveal from "./Reveal";

export default function ClosingCta() {
  return (
    <section
      id="contact"
      className="relative bg-charcoal text-platinum scroll-mt-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/images/logo-mark-sand.svg"
          alt=""
          width={420}
          height={700}
          className="h-[70%] w-auto max-h-[520px] opacity-[0.07] select-none"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 lg:py-32 text-center">
        <Reveal>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-tight text-sand max-w-4xl mx-auto">
            <span>Stop letting your competitors win deals you should have won.</span>
            <span className="block mt-5">
              Stop losing customers you didn&apos;t need to lose.
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-8 text-lg text-platinum/70 max-w-2xl mx-auto leading-relaxed">
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
