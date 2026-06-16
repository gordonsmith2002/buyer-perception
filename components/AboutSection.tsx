import React from "react";
import Image from "next/image";
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
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/gordon-headshot.png"
                alt="Gordon, founder of Buyer Perception"
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
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
                As VP Sales and Customer Success at three VC-backed companies,
                I&apos;ve led teams through significant periods of growth,
                retention challenges, GTM resets, and multiple acquisitions.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I kept seeing the same pattern at every company: buyers being
                marked as closed-lost in the CRM and never heard from again.
                Leadership teams building strategy on internal data and feedback
                from customers who were only ever going to say positive things.
                The buyers who could actually help us improve were the ones
                nobody was talking to.
              </p>
            </Reveal>
            <Reveal>
              <p>
                That&apos;s why I built Buyer Perception: to have the
                conversations that nobody else is having, with the people who
                actually made the decision, and bring back the truth. Even when
                it might not always be comfortable to hear.
              </p>
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
                <BookButton />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
