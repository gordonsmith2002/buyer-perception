import React from "react";
import CalendlyLink from "./CalendlyLink";

export const BOOK_CALL_URL =
  "https://calendly.com/gordon-buyerperception-rmza/intro";

export const GENERIC_BOOK_CALL_URL = BOOK_CALL_URL;

export const INSIGHTS_BOOK_CALL_URL =
  "https://calendly.com/gordon-buyerperception/30min";

export default function BookButton({
  children = "Book a Conversation",
  className,
  href = BOOK_CALL_URL,
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <CalendlyLink
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-md bg-terracotta px-5 py-3",
        "text-white font-medium tracking-tight hover:bg-[#9A3F26] transition-colors",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </CalendlyLink>
  );
}
