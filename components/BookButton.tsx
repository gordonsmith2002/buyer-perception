import React from "react";

/** Brief: placeholder `#contact`; replace with Calendly when ready */
const BOOK_HREF = "#contact";

export default function BookButton({
  children = "Book a Call",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={BOOK_HREF}
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
