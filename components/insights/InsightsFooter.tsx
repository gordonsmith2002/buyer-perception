import Image from "next/image";
import { GENERIC_BOOK_CALL_URL } from "../BookButton";

export default function InsightsFooter() {
  return (
    <footer className="border-t border-[color:var(--text-insights)]/10 bg-platinum">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="https://buyerperception.com" aria-label="Buyer Perception">
              <Image
                src="/images/logo-primary.svg"
                alt="Buyer Perception"
                width={200}
                height={59}
                className="h-8 w-auto"
              />
            </a>
            <div className="text-[color:var(--text-insights)]/70 text-sm mt-3">
              © 2026 Buyer Perception Ltd
            </div>
          </div>

          <div className="text-sm flex flex-col gap-2 md:items-end">
            <a
              href="mailto:gordon@buyerperception.com"
              className="text-[color:var(--text-insights)]/80 hover:text-[color:var(--text-insights)] transition-colors"
            >
              gordon@buyerperception.com
            </a>
            <a
              href={GENERIC_BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--text-insights)]/80 hover:text-[color:var(--text-insights)] transition-colors"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
