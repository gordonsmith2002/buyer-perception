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
        "inline-flex items-center justify-center rounded-md bg-terracotta px-5 py-3",
        "text-white font-normal tracking-tight hover:bg-[#9a5a43] transition-colors",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
