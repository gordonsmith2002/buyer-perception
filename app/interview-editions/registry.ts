import { edition001 } from "./data/001";
import { edition002 } from "./data/002";
import { edition003 } from "./data/003";
import { edition004 } from "./data/004";
import { edition005 } from "./data/005";
import { edition006 } from "./data/006";
import { edition007 } from "./data/007";
import type { AnonymousEdition } from "./types";
import { padEdition } from "./config";
import { validateEdition } from "./validate";

const editions: AnonymousEdition[] = [
  edition001,
  edition002,
  edition003,
  edition004,
  edition005,
  edition006,
  edition007,
];

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
