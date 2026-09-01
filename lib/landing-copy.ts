export type DataGapRow = {
  crmField: string;
  buyerTruth: string;
  currentReality: string;
};

export type HowItWorksStage = {
  stage: string;
  title: string;
  duration: string;
  detail: string;
  badge?: string;
  note?: string;
};

export type LandingCopy = {
  bookUrl: string;
  hero: {
    headlineBefore: string;
    headlineAfter: string;
    subhead: string;
    tagline: string;
  };
  dataGapRows: DataGapRow[];
  howItWorksStages?: HowItWorksStage[];
  about: {
    p1: string;
    p2: string;
    p3: string;
  };
  closingSecondLine: string;
};

export const GENERIC_BOOK_URL =
  "https://calendly.com/gordon-buyerperception/30min";

export const genericLanding: LandingCopy = {
  bookUrl: GENERIC_BOOK_URL,
  hero: {
    headlineBefore:
      "Win-loss analysis tells you why you lost the deal.",
    headlineAfter: "tells you what that buyer is saying about you right now.",
    subhead:
      "Not what your CRM says. Not what your team tells you. Anonymous interviews with your lost prospects and churned customers to find out what you did well, what you could have done differently, and what to fix first.",
    tagline: "Built on 20 years of B2B revenue leadership",
  },
  dataGapRows: [
    {
      crmField: "Closed Lost: Pricing",
      buyerTruth:
        "Pricing was never the issue. My CFO overruled me, and nobody on your team ever spoke to my CFO.",
      currentReality:
        "Your champion still rates you. She has already told two peers to put you on their shortlist. You will never see either deal coming.",
    },
    {
      crmField: "Closed Lost: No decision",
      buyerTruth:
        "We were ready to buy, but I could not get it prioritised internally, and nobody on your side helped me build the business case, so we moved on to a new project.",
      currentReality:
        "They still rate you highly and would re-engage if someone reached out. Nobody has. That deal is sitting there.",
    },
    {
      crmField: "Churned: Non-renewal",
      buyerTruth:
        "The product did what it said. We just went quiet on each other after onboarding. I have not heard from anyone in months.",
      currentReality:
        "They recently attended an industry event and told three separate people not to consider you in a selection process.",
    },
  ],
  about: {
    p1: "As VP Sales and Customer Success at three VC-backed companies, I've led teams through growth, retention challenges, GTM resets, and multiple acquisitions.",
    p2: "I've sat where you sit: forecasting from closed-lost reasons I suspected were fiction, and building strategy on feedback from the customers most likely to say something positive. The buyers who could actually help us improve were the ones nobody was talking to.",
    p3: "That's why I built Buyer Perception: to have the conversations nobody else is having, with the people who actually made the decision, and bring back the truth. Even when that might not be comfortable to hear.",
  },
  closingSecondLine: "Stop losing customers you didn't need to lose.",
};

export const taLanding: LandingCopy = {
  bookUrl: "https://calendly.com/gordon-buyerperception-rmza/30min",
  hero: {
    headlineBefore:
      "Win-loss analysis tells you why you lost the deal.",
    headlineAfter:
      "tells you what HR and TA leaders are saying about you right now.",
    subhead:
      "Not what your CRM says, not what your team tells you. Anonymous interviews with the HR & TA leaders who evaluated you to find out what you did well, what you could have done differently, and what to fix first.",
    tagline: "Built on 20 years of revenue leadership in TA and HR technology",
  },
  dataGapRows: [
    {
      crmField: "Closed Lost: Went with competitor",
      buyerTruth:
        "We were choosing between you and one other. Honestly, the products were almost identical. But their team felt like partners from the first call. Yours felt like they were running a process. We went with the people we trusted to still care after we'd signed.",
      currentReality:
        "That buyer just told their entire TA leadership Slack group that your competitor was better to work with. Three of those people are starting vendor evaluations this quarter. None of them will include you.",
    },
    {
      crmField: "Closed Lost: Pricing",
      buyerTruth:
        "Pricing was fine. The problem was your implementation team. We heard from three people in our network that onboarding wasn't great, and nobody on your side addressed it.",
      currentReality:
        "Your champion at that account still rates your product. She's already recommended you to two peers who are heading into an evaluation process. You'll never see either one coming.",
    },
    {
      crmField: "Churned: Non-renewal",
      buyerTruth:
        "The assessment tool did what it said. But six months in, our governance team flagged an AI bias concern and nobody on your side could answer it. We couldn't justify renewing when we couldn't prove compliance to our board.",
      currentReality:
        "They've already told their CHRO the category isn't worth the risk. That CHRO sits on two advisory boards. The ripple effect on your pipeline is invisible and already happening.",
    },
  ],
  about: {
    p1: "I've spent nearly 20 years in B2B revenue leadership, including VP Sales and Customer Success roles at three VC-backed companies in the TA and HR technology space. I've sold into TA leaders, built teams that sell into TA leaders, and sat across the table from buyers navigating the same noisy, competitive market you're selling into right now.",
    p2: "I've sat where you sit: forecasting from closed-lost reasons I suspected were fiction, and building strategy on feedback from the customers most likely to say something positive. The TA leaders who could actually help us improve were the ones nobody was talking to.",
    p3: "That's why I built Buyer Perception: to have the conversations nobody else is having, with the people who actually made the decision, and bring back the truth. Even when that might not be comfortable to hear.",
  },
  closingSecondLine: "Stop losing customers you didn't need to lose.",
};

export const genericLandingMeta = {
  title: "Buyer Perception | Find out what your buyers really think about you",
  description:
    "Win-loss analysis tells you why you lost the deal. Buyer Perception tells you what that buyer is saying about you right now.",
};

export const taLandingMeta = {
  title: "Buyer Perception | Find out what your buyers really think about you",
  description:
    "Anonymous interviews with the TA leaders who evaluated you, bought from you, or chose your competitor. Find out what they really think.",
};
