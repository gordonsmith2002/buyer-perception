import React from "react";
import BookButton from "./BookButton";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-brandDark text-brandLight scroll-mt-20 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-white/50 font-semibold">
            ABOUT
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-4">
            <div className="aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
              <span className="text-sm text-white/35">Photo</span>
            </div>
          </Reveal>

          <div className="lg:col-span-8 space-y-6 text-[#aaaaaa] text-base sm:text-lg leading-relaxed">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                Gordon
              </h2>
            </Reveal>
            <Reveal>
              <p>
                I spent a decade in B2B revenue leadership, running sales
                teams, sitting in deal reviews, and watching the same CRM data
                everyone else watches. I know how companies make decisions
                about their pipeline, their positioning, and their competition.
                And I know how much of that is guesswork dressed up as data.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Buyer Perception exists because every company deserves to hear
                what their market actually thinks: not the filtered version
                that makes it through internal reporting. I started this
                business to close the gap between what leadership believes and
                what buyers experience.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-white/90">If that gap matters to you, let&apos;s talk.</p>
            </Reveal>
            <Reveal>
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="mailto:gordon@buyerperception.com"
                  className="text-white/80 hover:text-white text-base underline-offset-4 hover:underline"
                >
                  gordon@buyerperception.com
                </a>
                <BookButton />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
