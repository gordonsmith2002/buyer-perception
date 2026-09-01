import Image from "next/image";
import React from "react";
import type { LandingCopy } from "../lib/landing-copy";
import { genericLanding } from "../lib/landing-copy";
import BookButton from "./BookButton";
import Reveal from "./Reveal";

export default function Hero({
  copy = genericLanding,
}: {
  copy?: LandingCopy;
}) {
  return (
    <section className="relative bg-brandDark text-brandLight overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 flex w-full max-w-xl items-center justify-center md:justify-end md:pr-8 lg:pr-16"
      >
        <Image
          src="/images/logo-mark-sand.svg"
          alt=""
          width={420}
          height={700}
          className="h-[75%] w-auto max-h-[560px] opacity-[0.07] select-none"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="font-sans font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight text-white">
              {copy.hero.headlineBefore}{" "}
              <span className="text-terracotta [text-shadow:0.45px_0_0_currentColor,-0.45px_0_0_currentColor,0_0.45px_0_currentColor]">
                Buyer Perception
              </span>{" "}
              {copy.hero.headlineAfter}
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-7 max-w-2xl border-l border-terracotta/70 pl-4 font-sans font-normal text-base sm:text-lg leading-relaxed text-white/85">
              {copy.hero.subhead}
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col items-start gap-3">
            <Reveal>
              <BookButton href={copy.bookUrl} />
            </Reveal>
            <Reveal>
              <div className="text-white/70 text-sm">
                If your buyers don&apos;t engage, you don&apos;t pay.
              </div>
            </Reveal>
            <Reveal>
              <div className="text-white/75 text-xs sm:text-sm">
                {copy.hero.tagline}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
