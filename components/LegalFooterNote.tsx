import Link from "next/link";

export default function LegalFooterNote({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  const muted = onDark ? "text-platinum/70" : "text-charcoal/70";

  return (
    <div
      className={`mt-8 border-t pt-6 ${onDark ? "border-platinum/10" : "border-charcoal/10"}`}
    >
      <div
        className={`max-w-4xl space-y-0.5 font-sans text-[12px] leading-relaxed sm:text-[13px] ${muted}`}
      >
        <p>
          Buyer Perception Limited, registered in England and Wales, company no.
          17336914
        </p>
        <p>
          Registered office: 5th Floor, 167–169 Great Portland Street, London
          W1W 5PF
        </p>
        <p>VAT no. GB 525 7393 72</p>
      </div>
      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        <Link
          href="/legal/privacy"
          className="font-sans text-[12px] text-terracotta hover:underline sm:text-[13px]"
        >
          Privacy
        </Link>
        <Link
          href="/legal/terms-v1"
          className="font-sans text-[12px] text-terracotta hover:underline sm:text-[13px]"
        >
          Terms
        </Link>
      </p>
    </div>
  );
}
