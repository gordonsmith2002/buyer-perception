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
              Find out what your buyers really think about you.
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-6 text-white/80 text-lg sm:text-xl leading-relaxed">
              We anonymously interview your lost prospects and churned customers
              &mdash; and bring back the truth about how your market perceives you.
            </p>
          </Reveal>

          <Reveal>
            <p className="mt-5 max-w-2xl border-l border-accent/70 pl-4 font-serif italic text-white/90 text-lg sm:text-xl leading-relaxed">
              You coach your team not to have happy ears. Then you check your G2
              reviews, read your NPS scores, and believe them. The 60&ndash;70% who
              went elsewhere or left quietly aren&apos;t in that data. They&apos;re
              having conversations about you right now &mdash; and you have no idea
              what they&apos;re saying.
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

          <Reveal>
            <p className="mt-6 text-sm text-white/45 max-w-md">
              Built on 10+ years of B2B revenue leadership at LinkedIn, Hired &
              Hubble.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
