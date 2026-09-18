import type { AnonymousEdition } from "../types";

const RESPONDENT = "Head of Talent";
const EMPLOYER = "Growth-Stage Startup";
const ATTRIBUTION = `${RESPONDENT}, ${EMPLOYER}`;

const HEADING_NETWORK = "I always reach out to my network first";
const HEADING_SALE = "They just wanted to get the sale";
const HEADING_LISTEN = "Just sit back. Show. Listen.";
const HEADING_ONE_PERSON = "It works when there's one person";

export const edition007: AnonymousEdition = {
  edition: 7,
  date: "September 2026",
  hookQuote: "A bit of fact-finding would go a long way",
  subtitle: "A Head of Talent on What Vendors Miss Before They Demo",
  buyerPersona: RESPONDENT,
  employer: EMPLOYER,
  companySize: "<500",
  technologies: ["ATS"],
  topics: ["Evaluation Criteria", "Demo", "Customer success", "Peer influence"],
  stage: ["Evaluation", "Churn"],
  framing:
    "Every vendor prepares a demo. Very few ask what the buyer actually needs before they start it.\n\nThis conversation is with a head of talent who has bought and implemented applicant tracking systems across recruitment agencies and growth-stage companies. They have evaluated multiple platforms, managed vendor relationships through business model changes, and walked away from a provider that oversold and underdelivered.\n\nWhat stood out was not what went wrong with the technology. It was that vendor after vendor spent time selling features this buyer had no use for. Nobody had asked first.",
  framingByline: "— Gordon Smith, Buyer Perception",
  highlightHeading: HEADING_LISTEN,
  pageKicker:
    "She knew what she didn't want. The question was whether the next vendor would bother to ask.",
  sections: [
    {
      heading: HEADING_NETWORK,
      exchanges: [
        {
          question: "Can you think of the last time a vendor managed to get a meeting with you completely cold?",
          answer:
            "The only reason I even did it was because I was curious. The talent lead at a well-known founder's portfolio company reached out to me on LinkedIn and asked if I'd be open to a demo. I always get messages from random people, and to be honest from random countries as well. It's a bit much when you're just getting bombarded. But this was peer-to-peer, and that definitely helped.",
        },
        {
          question: "If you're in the market for something, what steps do you take to build a shortlist?",
          answer:
            "I always reach out to my network, to people that work in similar companies, ask what they're using, ask for their feedback. Have a look on the website, see if there's any reviews. Then I'll book in maybe two to three demos. But always my network first.",
        },
      ],
    },
    {
      heading: HEADING_SALE,
      exchanges: [
        {
          question: "Can you remember the last time you decided to switch out a vendor?",
          answer:
            "We were thinking of switching our ATS at my previous employer. It just wasn't fit for purpose for an internal talent team in a recruitment agency. We didn't complete the switch because I ended up leaving. I'm pretty sure they're still using it, but I think that's probably because no one's paid any attention to it.",
        },
        {
          question: "Where was the mismatch between what they said and what actually materialised?",
          answer:
            "The talent pooling was really difficult. It works really well for inbound job applications, but we weren't getting them because a lot of our market was passive. We were headhunting. It didn't integrate with LinkedIn very well. From memory, you could only upload from LinkedIn Recruiter, so all the direct messages, WhatsApp, none of that could come through. The integrations were quite poor.",
        },
        {
          question: "What's your overall perception of them now?",
          answer: "They oversold and underdelivered. They just wanted to get the sale, which I get, but it just didn't live up to what they said it could do.",
        },
      ],
    },
    {
      heading: HEADING_LISTEN,
      exchanges: [
        {
          question: "When you're meeting vendors, what separates the good ones from the bad?",
          answer:
            "The ones that show you the product and don't try to sell to you. Just sit back. Show. Listen. The ones that ask your use case first rather than diving straight into the product, because a lot of the features I've been shown are not relevant at all.",
        },
        {
          question: "What do vendors assume you care about that you probably don't?",
          answer:
            'The career site. "Oh, we\'ve got this career site integration, we can get your career site up and running." Most companies have a career site. We don\'t need that. And then they go into ten minutes selling on it. The same with volume applications and how you sift through them. We don\'t get volume applications. So that\'s completely irrelevant. A bit of fact-finding would go a long way.',
        },
      ],
    },
    {
      heading: HEADING_ONE_PERSON,
      exchanges: [
        {
          question: "Is there anything that would make switching platforms easier?",
          answer:
            "Data migration. That's the one thing that would stop me from wanting to use a new ATS. You have to get all the data over and it's long. The companies I've worked in have been a bit more unique in that the candidates we're targeting are passive, so we have to have that communication log with them over six months, a year, two years, and if we lose that, then it's what's in our heads and what's on WhatsApp and LinkedIn. Our current provider offered it as a service. That was really appealing.",
        },
        {
          question: "What's the best experience you've had dealing with a vendor?",
          answer:
            "The account manager. One person who was always attentive and responsive, even after we'd already signed the contract. That was probably the best, just from a human-to-human interaction. Contrast that with being passed around different customer success people who don't know what's going on and get confused. It works when there's one person.",
        },
      ],
    },
  ],
  pullQuotes: [
    {
      quote:
        "I always reach out to my network, to people that work in similar companies. Always my network first.",
      placeAfterSection: HEADING_SALE,
      attribution: ATTRIBUTION,
    },
  ],
  stats: [
    {
      value: "2-3",
      context: "demos booked per evaluation, always after asking her network first",
    },
    {
      value: "10 minutes",
      context: "spent selling a career site integration she didn't need",
    },
    {
      value: "1 person",
      context: "what good customer success looks like",
    },
    {
      value: "0 emails",
      context: "that have ever led to a cold meeting",
    },
  ],
};
