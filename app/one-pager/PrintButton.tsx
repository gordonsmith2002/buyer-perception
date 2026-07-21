"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md bg-terracotta px-3.5 py-2 font-sans text-sm font-medium text-white hover:bg-[#9A3F26]"
    >
      Print / Save PDF
    </button>
  );
}
