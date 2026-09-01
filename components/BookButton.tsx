import React from "react";

export const BOOK_CALL_URL =
  "https://calendly.com/gordon-buyerperception-rmza/30min";

export const GENERIC_BOOK_CALL_URL =
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-md bg-terracotta px-5 py-3",
        "text-white font-medium tracking-tight hover:bg-[#9A3F26] transition-colors",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
