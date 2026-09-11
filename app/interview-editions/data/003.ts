import type { AnonymousEdition } from "../types";

const RESPONDENT = "Director of Talent Acquisition";

export const edition003: AnonymousEdition = {
  edition: 3,
  date: "September 2026",
  hookQuote: "Show me a clear return on investment, time or money. That's golden.",
  buyerPersona: RESPONDENT,
  employer: "Global Software Company",
  companySize: "<500",
  technologies: ["ATS", "Sourcing", "Assessment"],
  topics: [
    "Business case & ROI",
    "Pricing & negotiation",
    "Peer influence",
    "Product roadmap",
    "Cold outreach",
  ],
  stage: ["Evaluation", "Selection"],
  framing:
    "Most vendors sell to the person in the room. The best ones sell to the person who isn't — the one who signs the cheque. This buyer has been through more than ten ATS purchases and shares what they find with a peer network of up to fifty other TA leaders. What stood out wasn't the buying. It was the selling — not the vendor's, the buyer's. Every purchase starts with a pitch to finance, and most vendors don't give them what they need to make it.",
  sections: [
    {
      heading: "Not wishy-washy HR return on investment.",
      exchanges: [
        {
          question: "What do vendors typically get wrong when selling to TA leaders?",
          answer:
            "Not having something which helps TA leaders get stuff through finance. A really solid return on investment pitch. Not wishy-washy HR return on investment — where it's going to save us money.\n\nMy pitch to finance is very often: you're losing two teams' worth of engineering managers' time every year interviewing. If I can take three interviews out of every process and three days out of every process, this is the amount of engineering time you get back. You can build two entire squads and another product.\n\nTying it into commercial outcomes is what makes it compelling for me. Candidate experience, time to hire — a real commercial CFO doesn't really care about those at the stage of growth they're at. Show me a clear return on investment in time or money. That's golden.",
        },
      ],
    },
    {
      heading: "We'll all tell each other exactly what we're paying.",
      exchanges: [
        {
          question: "How much does a peer recommendation influence your shortlist?",
          answer:
            "Significant influence. I'm on WhatsApp with 20, 30, 40, 50 of my peers and we'll all tell each other exactly what we're paying. There was a period about two years ago where anybody looking for an ATS — there was just this buzzing on my WhatsApp groups. It was almost a fait accompli.\n\nAnd with a major platform vendor, the faux escalation really annoys me. \"Oh, you need to speak to this person now, this person, this person.\" I call it out when it happens. I know a number of my peers are experimenting with different ways of actually taking them out of the process because the cost is excessive and the experience is not great.",
        },
      ],
    },
    {
      heading: "Let's do it for a month. Both sides putting skin in the game.",
      exchanges: [
        {
          question: "You've implemented several AI tools recently. How is that buying process different?",
          answer:
            "Very different. Often they're relatively unproven. What really stands out is a try-before-you-buy. The opportunity to actually try something, A/B test it really quickly. The most important part is that their data governance is really strong and they already have APIs or are native to whichever ATS you go to.\n\nI've bought quite a few on the basis of: let's do it for a month, that's fine. And then the conversation becomes much larger. But both sides are putting skin in the game, and that really stands out.\n\nThe other thing I'm looking at is the product roadmap. I'm not just buying a tool for now. It needs to be able to evolve at the same pace as everything else. I've bought tools specifically because of what was coming on their roadmap, not what they could do today.",
        },
      ],
    },
    {
      heading: "It's probably a longer game than some sales teams are seeing.",
      exchanges: [
        {
          question: "If you were going to start your own HR tech company, how would you go to market?",
          answer:
            "Blind pitching, AI emails via LinkedIn, getting hold of my number on WhatsApp — we're all getting bombarded. I'd be relying on word of mouth. Actually speaking about something meaningful at events and creating a buzz.\n\nAnd it's probably a longer game than some sales teams are seeing. The cycles for renewal are two to three years now. So you need to be building relationships and understanding those cycles rather than expecting a quick close.",
        },
      ],
    },
  ],
  pullQuotes: [
    {
      quote:
        "At the moment you're losing two teams' worth of engineering managers' time every year interviewing.",
      placeAfterSection: "It's probably a longer game than some sales teams are seeing.",
    },
  ],
  stats: [
    {
      value: "10+",
      context: "ATS purchases and migrations across high-growth technology companies",
    },
    {
      value: "50",
      context: "peers in a WhatsApp group who share exactly what they pay",
    },
    {
      value: "2 squads",
      context: "of engineering time recovered by taking three interviews out of every process",
    },
    {
      value: "2-3 yrs",
      context: "the renewal cycle vendors are underestimating",
    },
  ],
};
