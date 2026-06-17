import React from "react";
import Reveal from "./Reveal";

export default function WhoThisIsFor() {
  return (
    <section
      id="who-this-is-for"
      className="bg-brandLight text-brandDark border-t border-black/5 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <Reveal className="flex justify-center">
          <p className="max-w-4xl text-center font-serif font-semibold text-xl sm:text-2xl leading-snug text-[#1a1a1a]">
            For revenue leaders and founders who want independent buyer truth
            before investing in the wrong fix.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
