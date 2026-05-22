import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Confidential report unavailable | Buyer Perception",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReportUnavailablePage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-24 text-stone-900">
      <section className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
          Confidential report
        </p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Report unavailable
        </h1>
        <p className="mb-8 text-lg leading-8 text-stone-700">
          Sensitive report material is not stored in this public codebase. Please
          contact Buyer Perception directly if you need access to a client
          report.
        </p>
        <Link
          href="/#contact"
          className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
        >
          Contact Buyer Perception
        </Link>
      </section>
    </main>
  );
}
