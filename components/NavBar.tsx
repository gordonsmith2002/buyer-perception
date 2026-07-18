"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BOOK_CALL_URL } from "./BookButton";

const LINKS = [
  { href: "#problem", label: "Your Data Gap" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#invisible-pipeline", label: "Invisible Pipeline" },
  { href: "#about", label: "About" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-20 items-center justify-between gap-6 py-4 sm:py-5">
          <Link
            href="/"
            className="shrink-0 inline-flex items-center"
            onClick={() => setOpen(false)}
            aria-label="Buyer Perception home"
          >
            <Image
              src="/images/logo-primary.svg"
              alt="Buyer Perception"
              width={220}
              height={64}
              priority
              className="h-9 sm:h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-7 lg:gap-8">
              {LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans font-normal text-[15px] text-charcoal/80 hover:text-charcoal transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 bg-[#8F533C] text-white text-[15px] font-medium tracking-tight hover:bg-[#7A4633] transition-colors"
            >
              Book a Conversation
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-[#8F533C] text-white text-sm font-medium px-3.5 py-2"
            >
              Book a Conversation
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-charcoal hover:bg-charcoal/5"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <span className="flex flex-col items-center justify-center w-6 h-6">
                  <span className="block w-5 h-0.5 bg-charcoal rotate-45 translate-y-1/2" />
                  <span className="block w-5 h-0.5 bg-charcoal -rotate-45 -translate-y-1/2" />
                </span>
              ) : (
                <span className="flex flex-col gap-1.5 w-6 items-end">
                  <span className="block h-0.5 w-6 bg-charcoal rounded-full" />
                  <span className="block h-0.5 w-5 bg-charcoal rounded-full" />
                  <span className="block h-0.5 w-6 bg-charcoal rounded-full" />
                </span>
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden border-t border-charcoal/10 py-4 flex flex-col gap-1 pb-6">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-1 py-3 font-sans font-normal text-[15px] text-charcoal/80 hover:text-charcoal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-center rounded-md bg-[#8F533C] text-white text-[15px] font-medium py-3"
              onClick={() => setOpen(false)}
            >
              Book a Conversation
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
