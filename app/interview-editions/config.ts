export const INDEX_ANONYMOUS_EDITIONS = false;

export const CONTACT = {
  email: "gordon@buyerperception.com",
  webLabel: "www.buyerperception.com",
  webHref: "https://www.buyerperception.com",
  phone: "+44 7493 328672",
  phoneHref: "tel:+447493328672",
} as const;

export const PREPARED_BY = {
  name: "Gordon Smith",
  role: "Founder, Buyer Perception",
} as const;

export const FOOTER_HEADING =
  "What are your buyers saying when you're not in the room?";

export const FOOTER_OBSERVATION =
  "Most revenue leaders can tell you their win rate. Far fewer can tell you what the buyers who went elsewhere are saying about them right now.";

export const FOOTER_NOTE =
  "This edition is part of an ongoing series of anonymous buyer interviews conducted by Buyer Perception. Every participant's identity is protected. No company names, product names, or identifying details are included.";

export const DISCLOSURE_COPY = [
  "This report was created from an independent, anonymised interview. It was not part of a paid client engagement. Buyer Perception actively recruits B2B buyers to participate in these conversations because the market needs an honest picture of how technology actually gets bought.",
] as const;

export function padEdition(edition: number): string {
  return String(edition).padStart(3, "0");
}

export function editionTitle(edition: number, date: string): string {
  return `Anonymous 1:1 · Edition ${padEdition(edition)} · ${date} | Buyer Perception`;
}
