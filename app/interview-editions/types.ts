import type { Stage, Technology, Topic } from "./lists";

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
};

export type InterviewStat = {
  value: string;
  context: string;
};

export type AnonymousEdition = {
  edition: number;
  date: string;
  hookQuote: string;
  buyerPersona: string;
  employer: string;
  companySize: string;
  technologies: Technology[];
  topics: Topic[];
  stage: Stage[];
  framing: string;
  sections: InterviewSection[];
  pullQuotes: PullQuote[];
  stats: InterviewStat[];
};
