export const TECHNOLOGIES = [
  "ATS",
  "Assessment",
  "Sourcing",
  "Talent Intelligence",
  "Talent CRM / pooling",
  "Video & Interview Intelligence",
  "Recruitment Marketing",
  "Core HRIS",
  "Payroll / EOR",
  "Background screening",
  "Onboarding",
  "Other",
] as const;

export const TOPICS = [
  "Cold outreach",
  "Demos",
  "Discovery",
  "Pricing & negotiation",
  "Proposal",
  "Procurement",
  "Implementation",
  "Onboarding",
  "Customer success",
  "Renewal",
  "Churn",
  "Competitive evaluation",
  "Peer influence",
  "Business case & ROI",
  "Product roadmap",
  "Support",
  "Sales process",
] as const;

export const STAGES = [
  "Evaluation",
  "Selection",
  "Implementation",
  "In-life",
  "Renewal",
  "Churn",
] as const;

export type Technology = (typeof TECHNOLOGIES)[number];
export type Topic = (typeof TOPICS)[number];
export type Stage = (typeof STAGES)[number];
