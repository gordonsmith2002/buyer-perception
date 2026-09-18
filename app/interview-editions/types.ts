import type { CompanySize, Stage, Technology, Topic } from "./lists";

export type Exchange = {
  question: string;
  answer: string;
};

export type InterviewSection = {
  heading: string;
  exchanges: Exchange[];
};

export type PullQuote = {
  quote: string;
  placeAfterSection: string;
  attribution?: string;
};

export type InterviewStat = {
  value: string;
  context: string;
};

export type AnonymousEdition = {
  edition: number;
  date: string;
  hookQuote: string;
  subtitle?: string;
  buyerPersona: string;
  employer: string;
  companySize: CompanySize;
  technologies: Technology[];
  topics: Topic[];
  stage: Stage[];
  framing: string;
  framingByline?: string;
  highlightHeading?: string;
  pageKicker?: string;
  sections: InterviewSection[];
  pullQuotes: PullQuote[];
  stats: InterviewStat[];
};
