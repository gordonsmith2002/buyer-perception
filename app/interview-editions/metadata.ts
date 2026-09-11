import type { Metadata } from "next";
import {
  INDEX_ANONYMOUS_EDITIONS,
  editionTitle,
  padEdition,
} from "./config";
import type { AnonymousEdition } from "./types";

export function metadataForEdition(edition: AnonymousEdition): Metadata {
  const title = editionTitle(edition.edition, edition.date);
  return {
    title,
    robots: INDEX_ANONYMOUS_EDITIONS
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      url: `https://buyerperception.com/interview-${padEdition(edition.edition)}`,
    },
  };
}
