import { COMPANY_SIZES, STAGES, TECHNOLOGIES, TOPICS } from "./lists";
import type { AnonymousEdition } from "./types";

const TITLE_CASE_MIN_WORDS = 3;

function normalize(text: string): string {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function isSentenceCase(heading: string): boolean {
  const body = heading.replace(/^[“"']+/, "").trim();
  if (!body) return false;
  const firstLetter = body.match(/[A-Za-z]/)?.[0];
  if (!firstLetter || firstLetter !== firstLetter.toUpperCase()) return false;

  const words = body.split(/\s+/).filter((word) => /[A-Za-z]/.test(word));
  if (words.length < TITLE_CASE_MIN_WORDS) return true;

  const titleCased = words.every((word) => {
    const letter = word.match(/[A-Za-z]/)?.[0];
    return Boolean(letter && letter === letter.toUpperCase());
  });
  return !titleCased;
}

function sectionContainsQuote(answer: string, quote: string): boolean {
  const haystack = normalize(answer);
  const needle = normalize(quote);
  if (haystack.includes(needle)) return true;
  const firstClause = needle.split(/[.!?]/)[0]?.trim();
  return Boolean(firstClause && firstClause.length >= 24 && haystack.includes(firstClause));
}

function sourceSectionHeading(edition: AnonymousEdition, quote: string): string | null {
  for (const section of edition.sections) {
    const answers = section.exchanges.map((item) => item.answer).join("\n");
    if (sectionContainsQuote(answers, quote)) return section.heading;
  }
  return null;
}

export function validateEdition(edition: AnonymousEdition): void {
  const prefix = `Anonymous 1:1 edition ${edition.edition}`;
  const errors: string[] = [];

  if (edition.sections.length < 4 || edition.sections.length > 8) {
    errors.push(`${prefix}: sections must be between 4 and 8 (found ${edition.sections.length}).`);
  }

  const answerWords = edition.sections.reduce((sum, section) => {
    return (
      sum +
      section.exchanges.reduce((inner, exchange) => inner + wordCount(exchange.answer), 0)
    );
  }, 0);
  if (answerWords > 2000) {
    errors.push(`${prefix}: answer word count is ${answerWords}, which exceeds 2,000.`);
  }

  if (edition.pullQuotes.length > 2) {
    errors.push(`${prefix}: pullQuotes must be 2 or fewer (found ${edition.pullQuotes.length}).`);
  }

  if (edition.stats.length < 3 || edition.stats.length > 4) {
    errors.push(`${prefix}: stats must contain 3 or 4 items (found ${edition.stats.length}).`);
  }

  for (const value of edition.technologies) {
    if (!TECHNOLOGIES.includes(value)) {
      errors.push(`${prefix}: technology "${value}" is not in the controlled list.`);
    }
  }
  for (const value of edition.topics) {
    if (!TOPICS.includes(value)) {
      errors.push(`${prefix}: topic "${value}" is not in the controlled list.`);
    }
  }
  for (const value of edition.stage) {
    if (!STAGES.includes(value)) {
      errors.push(`${prefix}: stage "${value}" is not in the controlled list.`);
    }
  }

  if (!edition.buyerPersona.trim()) {
    errors.push(`${prefix}: Buyer Persona is required.`);
  }
  if (!edition.employer.trim()) {
    errors.push(`${prefix}: Employer is required.`);
  }
  if (!COMPANY_SIZES.includes(edition.companySize)) {
    errors.push(
      `${prefix}: company size "${edition.companySize}" is not in the controlled list (${COMPANY_SIZES.join(" · ")}).`,
    );
  }

  for (const section of edition.sections) {
    if (!isSentenceCase(section.heading)) {
      errors.push(`${prefix}: heading is not sentence case: "${section.heading}"`);
    }
  }

  const hook = normalize(edition.hookQuote);
  for (const item of edition.pullQuotes) {
    if (normalize(item.quote) === hook || normalize(item.quote).includes(hook) || hook.includes(normalize(item.quote))) {
      errors.push(`${prefix}: hookQuote must not also appear in pullQuotes.`);
    }

    const headings = edition.sections.map((section) => section.heading);
    if (
      headings.some(
        (heading) => normalize(heading).replace(/[.?!]+$/, "") === normalize(item.quote).replace(/[.?!]+$/, ""),
      )
    ) {
      errors.push(`${prefix}: pull quote must not duplicate a section heading.`);
    }
    if (!headings.includes(item.placeAfterSection)) {
      errors.push(
        `${prefix}: pull quote placeAfterSection "${item.placeAfterSection}" does not match a section heading.`,
      );
    }

    const source = sourceSectionHeading(edition, item.quote);
    if (source && source === item.placeAfterSection) {
      errors.push(
        `${prefix}: pull quote is placed after the section it was said in ("${source}").`,
      );
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}
