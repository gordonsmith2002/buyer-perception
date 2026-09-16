import type { Metadata } from "next";
import { loadPrivacyPolicy } from "../../../../lib/legal-markdown";

const DESCRIPTION =
  "How Buyer Perception collects, uses and protects personal data.";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Buyer Perception" },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: "/legal/privacy" },
  openGraph: {
    title: "Privacy Policy | Buyer Perception",
    description: DESCRIPTION,
    url: "https://buyerperception.com/legal/privacy",
    siteName: "Buyer Perception",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const policy = loadPrivacyPolicy();

  return (
    <article className="bg-white">
      <div className="legal-doc mx-auto max-w-[680px] px-4 py-12 sm:py-16 md:py-20">
        <header className="mb-10">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta">
            Legal
          </p>
          <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {policy.title}
          </h1>
          <p className="mt-3 font-sans text-[15px] font-normal text-charcoal/70">
            Version {policy.version} · Effective {policy.effective}
          </p>
        </header>
        <div
          className="legal-body"
          dangerouslySetInnerHTML={{ __html: policy.html }}
        />
      </div>
    </article>
  );
}
