"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { BOOK_CALL_URL, GENERIC_BOOK_CALL_URL } from "./BookButton";

export default function Footer() {
  const pathname = usePathname();
  const bookUrl =
    pathname === "/ta" ? BOOK_CALL_URL : GENERIC_BOOK_CALL_URL;

  return (
    <footer className="bg-charcoal border-t border-platinum/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              src="/images/logo-inverted.svg"
              alt="Buyer Perception"
              width={200}
              height={59}
              className="h-8 w-auto"
            />
            <div className="text-platinum/70 text-sm mt-3">
              © 2026 Buyer Perception Ltd
            </div>
          </div>

          <div className="text-sm flex flex-col gap-2 md:items-end">
            <a
              href="mailto:gordon@buyerperception.com"
              className="text-platinum/80 hover:text-platinum transition-colors"
            >
              gordon@buyerperception.com
            </a>
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-platinum/80 hover:text-platinum transition-colors"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
