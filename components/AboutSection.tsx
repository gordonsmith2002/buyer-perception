import React from "react";
import Image from "next/image";
import type { LandingCopy } from "../lib/landing-copy";
import { genericLanding } from "../lib/landing-copy";
import BookButton from "./BookButton";
import Reveal from "./Reveal";

export default function AboutSection({
  copy = genericLanding,
}: {
  copy?: LandingCopy;
}) {
  return (
    <section
      id="about"
      className="bg-brandDark text-brandLight scroll-mt-20 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
            ABOUT
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/gordon-headshot-bw.jpg"
                alt="Gordon, founder of Buyer Perception"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 384px"
                quality={85}
                priority={false}
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8 space-y-6 text-[#aaaaaa] text-base sm:text-lg leading-relaxed">
            <Reveal>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white leading-tight">
                Gordon
              </h2>
            </Reveal>
            <Reveal>
              <p>{copy.about.p1}</p>
            </Reveal>
            <Reveal>
              <p>{copy.about.p2}</p>
            </Reveal>
            <Reveal>
              <p>{copy.about.p3}</p>
            </Reveal>
            <Reveal>
              <p className="text-white/90">
                If that truth matters to you, let&apos;s talk.
              </p>
            </Reveal>
            <Reveal>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="mailto:gordon@buyerperception.com"
                  className="text-white/80 hover:text-white text-base underline-offset-4 hover:underline"
                >
                  gordon@buyerperception.com
                </a>
                <BookButton href={copy.bookUrl} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
