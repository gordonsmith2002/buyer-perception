export type QAItem = {
  q: string;
  a: string[];
};

export type Section = {
  heading: string;
  items: QAItem[];
};

export type Stat = {
  figure: string;
  desc: string;
};

export type PullQuote = {
  text: string;
  attribution: string;
  role: string;
};

export type InterviewEdition = {
  slug: string;
  series: string;
  dateLabel: string;
  heroStat: string;
  heroTitle: string;
  subtitle: string;
  preparedBy: { name: string; role: string };
  intro: string[];
  page2Sections: Section[];
  page2Quote: PullQuote;
  page2Stats: Stat[];
  page3Sections: Section[];
  highlight: {
    figure: string;
    heading: string;
    items: QAItem[];
  };
  page3Stats: Stat[];
  closeHeadline: string;
  closeSupport: string;
  footnote: string;
};

export const october2026: InterviewEdition = {
  slug: "october-2026",
  series: "Buyer Perception · Anonymous 1:1 Edition · October 2026",
  dateLabel: "October 2026",
  heroStat: "80%",
  heroTitle: "of the Vendors I've Recommended, I've Never Bought From",
  subtitle: "A Global TA Leader on What Happens After You Lose the Deal",
  preparedBy: {
    name: "Gordon Smith",
    role: "Founder, Buyer Perception",
  },
  intro: [
    "Every vendor tracks closed-lost deals. Almost none of them track what happens next.",
    "This conversation is with a Global Talent Acquisition leader at an International Media company. Someone who buys, evaluates, and influences purchasing decisions.",
    "Part of multiple peer networks where vendors are discussed openly, this leader has not taken a meeting from a cold approach in over two years.",
  ],
  page2Sections: [
    {
      heading: "I'm Not Answering My Phone Any More",
      items: [
        {
          q: "When was the last time a vendor got a meeting with you completely cold?",
          a: [
            "At least a couple of years ago, and only because they knew a huge amount about my business and my challenges. There was credibility coming through the call, rather than someone trying their luck.",
            "I get probably twenty-odd emails a week, as a minimum. And at least five calls a day. I'm not even answering my mobile any more unless I know the number. Completely cold is very rare.",
          ],
        },
      ],
    },
    {
      heading: "I've Already Done My Due Diligence Before You Walk In",
      items: [
        {
          q: "When you are actively in the market, what's the first thing you do?",
          a: [
            "Word of mouth. I'll go to my peer networks and ask: who would you recommend, who should I stay away from? It's peer-to-peer due diligence.",
            "Before a vendor gets a call from me, quite a lot has already happened that they don't see. Then I'll bring in the wider buying team. Normally four people in the room: TA operations, a senior recruiter, legal, and procurement.",
          ],
        },
      ],
    },
    {
      heading: "I Speak to Your Clients. Unofficially",
      items: [
        {
          q: "Walk me through how back-channel references work.",
          a: [
            "I'll find a mutual connection from a case study and reach out directly. Unofficial. Not through the vendor. They tell you the good, the bad, and the ugly.",
            "The vendor doesn't know that conversation happened. It's completely separate from their process, and it's the informal conversation that carries the most weight.",
          ],
        },
      ],
    },
  ],
  page2Quote: {
    text: "Before a vendor gets a call from me, quite a lot has already happened that they don't see.",
    attribution: "Senior TA Leader",
    role: "Global Enterprise",
  },
  page2Stats: [
    {
      figure: "20+",
      desc: "emails a week, as a minimum. Completely cold is very rare.",
    },
    {
      figure: "5",
      desc: "calls a day. Unknown numbers no longer get answered.",
    },
    {
      figure: "2 yrs",
      desc: "since the last vendor got a meeting completely cold.",
    },
    {
      figure: "4",
      desc: "people in the room at demo: TA ops, recruiter, legal, procurement.",
    },
  ],
  page3Sections: [
    {
      heading: "I Like Working with 'Product Consultants', Not Salespeople",
      items: [
        {
          q: "When you're in those vendor meetings, what separates the good from the bad?",
          a: [
            "Some vendors want to understand your problem. Those are the ones you keep in touch with, even if you don't buy today. Then you get selling, selling, selling. It feels like a script.",
            "I like working with product consultants. They can tell me stories: what worked, what didn't. And it's fine to say, \"I'm not sure, I need to check and come back.\" Bluffing ends credibility.",
          ],
        },
      ],
    },
    {
      heading: "I Chose the Weaker Product. Because the Team Was Better",
      items: [
        {
          q: "Have you ever gone with a vendor whose product wasn't as strong as a competitor's?",
          a: [
            "Yes. I can work with a great team that has a good product, rather than a company that has an amazing product but no flexibility. If they can't accommodate change, I get stuck.",
            "One ATS put change requests into the backlog and got them done. The other was a blanket no. Six, nine months, a year. That's too late.",
          ],
        },
      ],
    },
    {
      heading: "What You Sold Me Six Months Ago, I Don't Need Any More",
      items: [
        {
          q: "What's something every TA tech company seems convinced buyers care about, but you probably don't?",
          a: [
            "AI. Every company calls it out. I always question, if it's simple AI, why can't we do it ourselves? We've got Copilot, an internal engine, people who can build bots.",
            "Nine months ago I would have considered certain vendors. In six months, it's moved on. If what you're selling is already on my ATS's roadmap, you can't sell that product in.",
          ],
        },
      ],
    },
    {
      heading: "I'm about to buy from a Vendor who spent 4 years building a relationship with me",
      items: [
        {
          q: "Tell me about a vendor you've known for years but never purchased from.",
          a: [
            "I've probably known them for four years. I never used them. No pushing, no hard sell. They kept in touch, showed me the demos, built a reputation with me and in my peer group.",
            "I haven't been a buyer for four years. But the relationship never stopped. And now it's real. Most CRMs would have written me off.",
          ],
        },
      ],
    },
  ],
  highlight: {
    figure: "80%",
    heading: "80% of Vendors I've Recommended, I've Never Bought From",
    items: [
      {
        q: "Have you ever recommended a vendor to a peer that you yourself didn't buy from?",
        a: [
          "Quite a few. I'd say probably 80% of the vendors I've recommended, I have not worked with directly. I'll walk out of a meeting and say they're really good. Try them out.",
          "The vendor who \"lost\" that deal has no idea. They have no idea.",
        ],
      },
    ],
  },
  page3Stats: [
    {
      figure: "80%",
      desc: "of vendors recommended were never bought from.",
    },
    {
      figure: "4 yrs",
      desc: "of relationship before a purchase. Most CRMs would have written them off.",
    },
    {
      figure: "6-12 mo",
      desc: "typical wait for a feature request, and that's too late.",
    },
  ],
  closeHeadline: "What Are Your Buyers Saying When You're Not in the Room",
  closeSupport:
    "If they mess up once, this buyer would not use them again. Reputation travels in rooms vendors never enter. The question they wish more people asked: what are your challenges with finance, with your boss, and how can I make your life easier?",
  footnote:
    "This edition is part of an ongoing series of anonymous buyer interviews conducted by Buyer Perception. Every participant's identity is protected. No company names, product names, or identifying details are included.",
};
