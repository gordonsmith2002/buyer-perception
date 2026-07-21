import Link from "next/link";

/** Avoid window.print() — it crashes Cursor's embedded browser. */
export default function PrintButton() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link
        href="/exports/Buyer-Perception-One-Pager.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-terracotta px-3.5 py-2 font-sans text-sm font-medium text-white hover:bg-[#9A3F26]"
      >
        Open PDF
      </Link>
      <a
        href="/exports/Buyer-Perception-One-Pager.pdf"
        download="Buyer-Perception-One-Pager.pdf"
        className="rounded-md border border-charcoal/20 bg-white px-3.5 py-2 font-sans text-sm font-medium text-charcoal hover:bg-platinum"
      >
        Download PDF
      </a>
    </div>
  );
}
