import Link from "next/link";

const LEGAL_LINE =
  "Buyer Perception Ltd · Registered in England and Wales, company no. 17336914 · Registered office: 5th Floor, 167–169 Great Portland Street, London W1W 5PF · VAT no. GB 525 7393 72";

export default function LegalFooterNote({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  return (
    <div
      className={`mt-8 border-t pt-6 ${onDark ? "border-platinum/10" : "border-charcoal/10"}`}
    >
      <p
        className={`max-w-4xl font-sans text-[12px] leading-relaxed sm:text-[13px] ${
          onDark ? "text-platinum/70" : "text-charcoal/70"
        }`}
      >
        {LEGAL_LINE}
      </p>
      <Link
        href="/legal/privacy"
        className="mt-2 inline-block font-sans text-[12px] text-terracotta hover:underline sm:text-[13px]"
      >
        Privacy
      </Link>
    </div>
  );
}
