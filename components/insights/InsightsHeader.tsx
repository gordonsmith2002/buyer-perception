import Image from "next/image";
import { GENERIC_BOOK_CALL_URL } from "../BookButton";

export default function InsightsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--text-insights)]/10 bg-[color:var(--bg-insights)]/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-20 items-center justify-between gap-6 py-4 sm:py-5">
          <span className="shrink-0 inline-flex items-center">
            <Image
              src="/images/logo-primary.svg"
              alt="Buyer Perception"
              width={220}
              height={64}
              priority
              className="h-9 sm:h-10 w-auto"
            />
          </span>

          <a
            href={GENERIC_BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md px-3.5 py-2 sm:px-5 sm:py-2.5 bg-terracotta text-white text-sm sm:text-[15px] font-medium tracking-tight hover:bg-[#9A3F26] transition-colors"
          >
            Book a Conversation
          </a>
        </div>
      </div>
    </header>
  );
}
