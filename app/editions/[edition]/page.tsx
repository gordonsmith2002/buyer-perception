import { notFound } from "next/navigation";
import { EditionPage } from "../../interview-editions/EditionPage";
import { metadataForEdition } from "../../interview-editions/metadata";
import { getEditionBySlug, listEditions } from "../../interview-editions/registry";
import { padEdition } from "../../interview-editions/config";

type Params = { edition: string };

export function generateStaticParams() {
  return listEditions().map((item) => ({ edition: padEdition(item.edition) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { edition: slug } = await params;
  const edition = getEditionBySlug(slug);
  if (!edition) return {};
  return metadataForEdition(edition);
}

export default async function EditionRoute({ params }: { params: Promise<Params> }) {
  const { edition: slug } = await params;
  const edition = getEditionBySlug(slug);
  if (!edition) notFound();
  return <EditionPage edition={edition} />;
}
