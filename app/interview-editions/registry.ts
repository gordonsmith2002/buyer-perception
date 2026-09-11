import { edition001 } from "./data/001";
import { edition002 } from "./data/002";
import type { AnonymousEdition } from "./types";
import { padEdition } from "./config";
import { validateEdition } from "./validate";

const editions: AnonymousEdition[] = [edition001, edition002];

for (const edition of editions) {
  validateEdition(edition);
}

export function listEditions(): AnonymousEdition[] {
  return editions;
}

export function getEdition(edition: number): AnonymousEdition {
  const found = editions.find((item) => item.edition === edition);
  if (!found) {
    throw new Error(`No Anonymous 1:1 edition ${edition} is registered.`);
  }
  return found;
}

export function getEditionBySlug(slug: string): AnonymousEdition | null {
  return editions.find((item) => padEdition(item.edition) === slug) ?? null;
}
