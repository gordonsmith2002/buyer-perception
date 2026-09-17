import type { Metadata } from "next";
import { loadTerms } from "../../../../lib/legal-markdown";

const DESCRIPTION =
  "Standard terms of business for Buyer Perception client engagements.";

export const metadata: Metadata = {
  title: { absolute: "Standard Terms of Business | Buyer Perception" },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: "/legal/terms-v1" },
  openGraph: {
    title: "Standard Terms of Business | Buyer Perception",
    description: DESCRIPTION,
    url: "https://buyerperception.com/legal/terms-v1",
    siteName: "Buyer Perception",
    type: "website",
  },
};

export default function TermsPage() {
  const terms = loadTerms();

  return (
    <article className="bg-white">
      <div className="legal-doc mx-auto max-w-[680px] px-4 py-12 sm:py-16 md:py-20">
        <header className="mb-10">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta">
            Legal
          </p>
          <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {terms.title}
          </h1>
          <p className="mt-3 font-sans text-[15px] font-normal text-charcoal/70">
            Version {terms.version} · Effective {terms.effective}
          </p>
        </header>
        <div
          className="legal-body"
          dangerouslySetInnerHTML={{ __html: terms.html }}
        />
      </div>
    </article>
  );
}
