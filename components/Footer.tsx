import Image from "next/image";
import React from "react";
import { BOOK_CALL_URL } from "./BookButton";

export default function Footer() {
  return (
    <footer className="bg-brandDark border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-brandLight">
            <Image
              src="/images/logo-inverted.svg"
              alt="Buyer Perception"
              width={200}
              height={59}
              className="h-8 w-auto"
            />
            <div className="text-white/50 text-sm mt-3">
              © 2026 Buyer Perception
            </div>
          </div>

          <div className="text-white/50 text-sm flex flex-col gap-2 md:items-end">
            <div>
              <a
                href="mailto:gordon@buyerperception.com"
                className="hover:text-white"
              >
                gordon@buyerperception.com
              </a>
            </div>
            <div>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Book a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
