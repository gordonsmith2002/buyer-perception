"use client";

import Link from "next/link";
import React, { useState } from "react";

const LINKS = [
  { href: "#problem", label: "The Problem" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brandDark/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-brandLight font-serif text-lg sm:text-xl shrink-0 z-10"
            onClick={() => setOpen(false)}
          >
            Buyer Perception
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-md px-4 py-2 bg-accent text-white text-sm font-semibold tracking-tight border border-accent hover:bg-[#b83228] hover:border-[#b83228] transition-colors"
            >
              Book a Call
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="inline-flex rounded-md bg-accent text-white text-xs font-semibold px-3 py-2 border border-accent"
            >
              Book a Call
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-white/90 hover:bg-white/10"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <span className="flex flex-col items-center justify-center w-6 h-6">
                  <span className="block w-5 h-0.5 bg-white rotate-45 translate-y-1/2" />
                  <span className="block w-5 h-0.5 bg-white -rotate-45 -translate-y-1/2" />
                </span>
              ) : (
                <span className="flex flex-col gap-1 w-6 items-end">
                  <span className="block h-0.5 w-6 bg-white rounded-full" />
                  <span className="block h-0.5 w-5 bg-white rounded-full" />
                  <span className="block h-0.5 w-6 bg-white rounded-full" />
                </span>
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden border-t border-white/10 py-4 flex flex-col gap-1 pb-6">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-3 rounded-md text-sm text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 mx-3 text-center rounded-md bg-accent text-white text-sm font-semibold py-3 border border-accent"
              onClick={() => setOpen(false)}
            >
              Book a Call
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
