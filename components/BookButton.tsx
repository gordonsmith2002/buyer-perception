import React from "react";

export const BOOK_CALL_URL =
  "https://calendly.com/gordon-buyerperception/30min";

export default function BookButton({
  children = "Book a Conversation",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={BOOK_CALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-md border border-accent bg-accent px-5 py-3",
        "text-white font-semibold tracking-tight hover:bg-[#b83228] hover:border-[#b83228] transition-colors",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
