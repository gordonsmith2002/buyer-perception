import React from "react";
import Reveal from "./Reveal";

export default function NpsReviewsSection() {
  return (
    <section className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="text-xs tracking-[0.2em] uppercase text-black/55 font-semibold">
            WHAT ABOUT NPS AND REVIEWS
          </div>
        </Reveal>

        <div className="mt-10 space-y-10 max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-black/10 bg-creamCard p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a]">
                NPS
              </h3>
              <p className="mt-4 text-base sm:text-lg text-[#555] leading-relaxed">
                NPS has its place. It gives you a fast, trackable pulse on your
                existing customers, and a falling score is a real warning sign.
                But a number from nought to ten tells you something changed, not
                why, and not what the buyer is now saying to their peers. It
                measures temperature, not cause.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="rounded-2xl border border-black/10 bg-creamCard p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a]">
                G2 reviews and testimonials
              </h3>
              <p className="mt-4 text-base sm:text-lg text-[#555] leading-relaxed">
                G2 reviews and testimonials are genuine buyer voices, and they
                are great for marketing. The catch is who they come from: your
                warmest, most willing customers, who know their name is
                attached. They are a highlight reel from people who were always
                going to speak well of you. The buyers who went elsewhere or
                churned are not writing reviews.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="flex justify-center">
          <p className="mt-12 max-w-4xl text-center font-serif text-xl sm:text-2xl leading-snug text-[#1a1a1a]">
            Both are useful. Neither tells you what the buyers you lost actually
            think, which is exactly the group whose opinion changes your
            pipeline.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
