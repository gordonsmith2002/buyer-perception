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
                I spent twenty years in B2B sales and have been VP Sales at
                three VC-backed SaaS companies, running sales and customer
                success teams in fast-paced, imperfect companies. I know how
                companies make decisions about their pipeline, their
                positioning, and their competition. And I know how much of it is
                based on their own version of events.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Buyer Perception exists because I kept seeing the same pattern:
                buyers being marked as closed-won or closed-lost in the CRM and
                never heard from again, while leadership teams built strategy on
                internal data and feedback from the customers who were always
                going to say nice things. The buyers who could actually help
                them improve were the ones nobody was talking to.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-white/90">If that gap matters to you, let&apos;s talk.</p>
            </Reveal>
            <Reveal>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
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
