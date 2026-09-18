import type { AnonymousEdition } from "../types";

const RESPONDENT = "Senior TA Leader";
const EMPLOYER = "Global Consumer Business";
const ATTRIBUTION = `${RESPONDENT}, ${EMPLOYER}`;

const HEADING_PROCUREMENT =
  "Procurement might make us put other vendors in the mix - and we have to have a good business case for not utilising them";
const HEADING_BUDGET =
  "Even if I saved the company $500k by taking out tech that wasn't hitting the mark - I don't just get it back";
const HEADING_ADOPTION = "The Tech works, the problem is you're not using it";
const HEADING_CHAMPION = "I wasn't there and they weren't doing that";

export const edition005: AnonymousEdition = {
  edition: 5,
  date: "September 2026",
  hookQuote: "BUYING TECH IN A TRUE ENTERPRISE COMPANY IS VERY, VERY ARDUOUS",
  subtitle: "A Senior TA Leader on What Kills Technology After the Sale",
  buyerPersona: RESPONDENT,
  employer: EMPLOYER,
  companySize: "10,000+",
  technologies: ["TA Platforms", "Assessments"],
  topics: ["Implementation", "Internal Sell", "Evaluation Criteria", "Customer success"],
  stage: ["Evaluation", "Implementation", "Churn"],
  framing:
    "Most vendors measure adoption by logins. The risk is you do not know who is pushing adoption on the client side and how they are doing it.\n\nThis conversation is with a senior talent acquisition leader who has managed global technology portfolios across organisations of more than a hundred thousand people. They have bought, built the business case for, implemented, and removed enterprise TA platforms and designed year-on-year adoption programmes to make the ones they kept actually deliver.\n\nWhat stood out wasn't what they thought about vendors. It was what happened after they left an organisation. The technology they'd spent years evaluating, purchasing and implementing was pulled out within two years, not because it stopped working, but because the person who made it work was no longer there.",
  framingByline: "— Gordon Smith, Buyer Perception",
  highlightHeading: HEADING_ADOPTION,
  pageKicker:
    "When tech isn't delivering, most buyers blame the product. This buyer looked at her own organisation first.",
  sections: [
    {
      heading: HEADING_PROCUREMENT,
      exchanges: [
        {
          question: "When you're evaluating new technology, who's actually involved in that decision?",
          answer:
            "It depends on the tech, but I would set up a project team with different vantage points - whether it be from the TA or HR space, or the psychology space if you're looking at assessments. A full RASCI, governance, ownership. And then the IT business partner - if a company has one, they are second to none. They know what else is in the mix with other HR technologies, where we're looking, what problem we're trying to solve.\n\nAnd then procurement and risk. I don't think it's valued enough on the other side of the fence how tightly you should be looking at the procurement and risk teams, because they are hugely involved. Sometimes they might make us put a couple of vendors in the mix because there are existing partnerships elsewhere across the company already. You might not want those solutions, but you need to take a look at them, and you have to have a good business case for not utilising them.",
        },
        {
          question: "So a vendor might assume they're talking to the decision-maker, but that's just the beginning?",
          answer:
            "When you're talking about small companies under 5,000, they can be more agile. The person typically has full ownership of the budget, so they can make their own decisions. When you get into medium 10,000 - 25,000, it's a bit tighter. When you get into large global, 25,000 person+ companies it's very tight. It's a lot of red tape. But having been in those organisations, it is for good reason.",
        },
      ],
    },
    {
      heading: HEADING_BUDGET,
      exchanges: [
        {
          question: "What does it actually take to get a new technology approved in a large global organisation?",
          answer:
            "What you're doing is making a business case for the budget. It's not a budget that's given to you. You fill out massive forms, what's the business challenge we're trying to solve, all the right questions. Then it goes to a committee who look at it from an overall HR standpoint. Where are we going to invest? What are our core priorities for the people agenda? And where does this fit in the mix?\n\nSo you really gotta really want it, because it can be very, very arduous.",
        },
        {
          question: "And if you remove a technology that isn't working - do you get that budget back?",
          answer:
            "Even if I saved $500,000 a year taking out one technology because it's not hitting the mark or people are underutilising it - what that didn't mean is I get the money back to do something else with it. If I wanted a new technology, I would still have to apply for strategic funding.\n\nSometimes I would see people keep tech projects running even though it wasn't showing a great ROI. I understand why, but to me that's not good business sense. I look at the money as if it's my money. I'm not going to be paying for something that's not adding significant value.",
        },
      ],
    },
    {
      heading: HEADING_ADOPTION,
      exchanges: [
        {
          question: "When technology isn't delivering, is the problem usually the product?",
          answer:
            'What really irritates me about others that put tech in is not fully embedding it and not following through on it. Because oftentimes you hear, "Oh, the tech didn\'t really work, or it wasn\'t that great." No. The tech works. The problem is you\'re not embedding it, you\'re not using it.\n\nWe need to ask - What\'s the organisational readiness? Do your recruiters have enough time to utilise it? Is it plugged in the right way so they don\'t have to open up twenty different tabs? Because if it\'s just adding time to their schedule when actually what we want to be doing is making things more efficient, that\'s a problem.',
        },
        {
          question: "So how did you solve that?",
          answer:
            "I would do run two-to-three-month programme with my global teams. An ongoing incentive that made it competitive: different teams, prizes, weekly modules. Much more interactive: You'd hear people saying 'I'm trying this', 'I'm seeing this', 'I'm struggling with this'. And then I could identify super users and ask them to lead those teams.\n\nYou're not going to get everybody on the team onboard. But if you can get a higher volume, then you stand to leverage the ROI. And you've got to do it year on year. It's not a one-and-done.",
        },
      ],
    },
    {
      heading: HEADING_CHAMPION,
      exchanges: [
        {
          question: "What happened when you left?",
          answer:
            "I think they're looking at taking it out a couple of years later. Because guess what? I wasn't there and they weren't doing that (focus on ongoing usage).\n\nAnd that's the problem. If you're going to do it and you've earned that cost from the organisation for it, you need to make sure that it's embedded in order to receive your ROI from it.",
        },
        {
          question: "How did you track whether technology was actually delivering?",
          answer:
            "I set up a scorecard - a generic one that I wanted for every technology so it remained the same. What is the tech? Where are we with it right now? What is the strategy going forward? What is it netting us? So that every quarter or half-year, we could take a look and say: is it meeting our needs? Do we need to invest more? At what point do we say it isn't working?\n\nIt wasn't just about me saying I'm cancelling this tech, we had a clear structure and strategy.",
        },
      ],
    },
  ],
  pullQuotes: [
    {
      quote:
        "I look at the money as if it's my money. I'm not going to be paying for something that's not adding significant value.",
      placeAfterSection: HEADING_ADOPTION,
      attribution: ATTRIBUTION,
    },
  ],
  stats: [
    {
      value: "$500K",
      context: "saved annually by removing underperforming tech, budget not returned",
    },
    {
      value: "20",
      context: "browser tabs open if the tech isn't plugged in properly",
    },
    {
      value: "2-3 months",
      context: "annual adoption programme, run every year",
    },
    {
      value: "2 years",
      context: "after champion left, technology being removed",
    },
  ],
};
