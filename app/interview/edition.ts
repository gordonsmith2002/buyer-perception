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
  reportTitle: string;
  coverMeta: { label: string; value: string }[];
  tags: string[];
  coverLines: { rest: string; punch: string }[];
  heroStat: string;
  heroTitle: string;
  subtitle: string;
  preparedBy: { name: string; role: string };
  intro: string[];
  editorNote: string;
  editorNoteBy: string;
  page2Sections: Section[];
  page2Quote: PullQuote;
  page2Stats: Stat[];
  page3Sections: Section[];
  page3Quote: PullQuote;
  page4Sections: Section[];
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
  series: "Buyer Perception · Anonymous 1:1 Edition · September 2026",
  dateLabel: "September 2026",
  reportTitle: "Anonymous Buyer Interview",
  coverMeta: [
    { label: "Title", value: "Global Head of Talent Acquisition" },
    { label: "Industry", value: "Media" },
    { label: "Company Size", value: "10,000+" },
    { label: "Date of Interview", value: "August 2026" },
  ],
  tags: ["Peer Influence", "Advocacy", "Sales Process", "Cold Outreach"],
  coverLines: [
    { rest: "Stop letting your competitors ", punch: "win deals you should have won" },
    { rest: "Stop losing customers ", punch: "you didn't need to lose" },
  ],
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
  editorNote:
    "The thing that stood out for me most wasn't what they said about the vendors they work with. It was what they said about the ones they didn’t buy from and what they’ve gone on to do to support them, without them even knowing.",
  editorNoteBy: "Gordon Smith, Buyer Perception",
  page2Sections: [
    {
      heading: "I'm Not Answering My Phone Any More",
      items: [
        {
          q: "You buy TA technology for a global enterprise. When was the last time a vendor got a meeting with you completely cold?",
          a: [
            "At least a couple of years ago and that's only because they had an interesting pitch - they knew a huge amount about my business and my challenges. They knew what my challenges were, in what market and at what level. So there was credibility coming through the call, rather than a completely sales-oriented approach where someone's just trying their luck.",
          ],
        },
        {
          q: "Two years is a long time.",
          a: [
            "I get probably twenty-odd emails a week, as a minimum. And at least five calls a day. I got five today. To the point I'm not even answering my mobile any more unless I know the number. So to reach me completely cold is very rare.",
          ],
        },
      ],
    },
    {
      heading: "I've Already Done My Due Diligence Before You Walk In",
      items: [
        {
          q: "When you are actively in the market with a problem to solve, what's the first thing you do?",
          a: [
            "Word of mouth. Trying to understand who everybody else is using. So I'll go to my peer networks, communities I’m part of for senior TA leaders and ask: what are people doing? Who would you recommend, who should I stay away from? It's peer-to-peer due diligence.",
          ],
        },
        {
          q: "So the shortlist is built before the vendor even knows they're being evaluated?",
          a: [
            "Yes. Before a vendor gets a call from me, quite a lot has already happened that they don't see, I will have had multiple conversations with people I trust to build my shortlist - then I’ll bring in the wider buying team.",
          ],
        },
        {
          q: "What does the buying team typically look like at your organisation?",
          a: [
            "Once I’m at Demo stage with Vendors, I'll generally invite a few people at different levels: the head of TA operations, a senior recruiter who's hands-on, legal, and procurement. So normally four people in the room on our side to begin with.",
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
      heading: "I Speak to Your Clients. Unofficially",
      items: [
        {
          q: "You mentioned back-channel references. Walk me through how that works.",
          a: [
            "Say a vendor has case studies on their website. I'll look at those companies to find a mutual connection and reach out to them directly. Unofficial. Not through the vendor.",
            "On that call I'll say: \"We're looking at this capability. Do you think they're good? What about these nuances? If I throw this specific problem at them, what are your thoughts?\" And they kind of tell you the good, the bad, and the ugly. I don’t expect anyone to be perfect",
          ],
        },
        {
          q: "Does the vendor know that conversation happened?",
          a: [
            "No. It's very open between us, but it's completely separate from the vendor's process. I've done that recently with two vendors we're evaluating right now. You do that reference checking at the same time as the formal evaluation but it's the informal conversation that carries the most weight.",
          ],
        },
      ],
    },
    {
      heading: "I Like Working with ‘Product Consultants’, Not Salespeople",
      items: [
        {
          q: "When you're in those vendor meetings, what separates the good from the bad?",
          a: [
            "You get a mixed bag. Some vendors are very much about the partnership. They want to understand your problem, they'll bend over backwards giving you demos and insight. And those are the ones you want to keep in touch with, even if you don't buy today. They look at the bigger picture. It's not the quick fix.",
            "Then you get the other stream, where it's selling, selling, selling all the time. And I tend to find they don't have the depth of knowledge of their product. They don't know what my needs are. It feels like a script.",
          ],
        },
        {
          q: "What do you actually want from the person across the table?",
          a: [
            "I like working with product consultants rather than salespeople. They can tell me stories. What worked, what didn't with other customers. That's what's key for me, rather than selling the product and then hoping for the best.",
            "And it's fine to say, \"I'm not sure I need to check and come back.\" That's so much better than trying to bluff your way through. Because I can tell. And once I feel that's happening, their credibility is completely gone.",
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
            "Yes. Because I can work with a great team that has a good product, rather than a company that has an amazing product but no flexibility.",
            "The world we operate in, things change all the time. So if I haven't got a vendor who can accommodate that change on a regular basis, I get stuck. I want a system that's scalable and a vendor that can be adaptable at any given time.",
          ],
        },
        {
          q: "Can you give me an example?",
          a: [
            "At a previous organisation, I changed ATS providers. I was evaluating two I’d previously worked with, one was very flexible with change requests: they'd put new features into the backlog, have a discussion, and get it done for us. The other was a blanket \"no.\" They'd say they'd look into it, but it might take six, nine months, a year. And that's too late.",
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
            "AI. Every single company calls out AI right now. \"We're special because of the AI we do.\" And that's a grey area. Is it AI in its purest form? Is it automation? Is it very basic?",
            "I always question, if it's simple AI, why can't we do it ourselves? We've got Copilot, we've got our own internal AI engine. We have people who can build bots. So why do I need a vendor to do it?",
            "And here's the thing that's really changed. Going back even nine months ago, I would have considered certain vendors because I didn't have the internal team that could build these things, and my ATS wasn't as advanced. But in six months, it's moved on. The conversation I had six months ago with a vendor has drastically changed now. Because what you sold me six months ago, I don't need any more. I can do that myself.",
          ],
        },
        {
          q: "That must be brutal for vendors.",
          a: [
            "It is. And I get it. It's really horrible for a vendor, because you have to keep evolving all the time and you just don't know what's around the corner. But the reality is: if what you're selling is already on my ATS's roadmap, or I can build it internally, you can't sell that product in.",
          ],
        },
      ],
    },
  ],
  page3Quote: {
    text: "I'd choose a good product with a great team behind it over an unflexible company with an amazing product",
    attribution: "Senior TA Leader",
    role: "Global Enterprise",
  },
  page4Sections: [
    {
      heading: "I’m about to buy from a Vendor who spent 4 years building a relationship with me",
      items: [
        {
          q: "You mentioned a vendor you've known for years but never purchased from. Tell me about that.",
          a: [
            "I've probably known them for four years. I never used them. But we've just had that respect for each other for four years. No pushing or hard selling, they've just kept in touch, shown me the demos. They've got a good reputation in the market with me, and in my peer group.",
            "Now I'm like, you know what, I might have that opportunity to work together. And they've come to the table to say: let's make it happen. You tell us what you need.",
          ],
        },
        {
          q: "Four years of relationship before a purchase. Most CRMs would have written you off.",
          a: [
            "Exactly. And that's the thing I haven't been a buyer for four years. But the relationship never stopped. And now it's real.",
          ],
        },
      ],
    },
    {
      heading: "80% of Vendors I've Recommended, I've Never Bought From",
      items: [
        {
          q: "Have you ever recommended a vendor to a peer that you yourself didn't buy from?",
          a: [
            "Quite a few. I'd say probably 80% of the vendors I've recommended to people, I have not worked with directly. But I had a good conversation with them. I've seen a product that I liked. I'd love to say I get all the budget I need, in which case I'd use them. But it doesn't happen. Perhaps it’s a great product, but it’s just not the right fit for my specific needs.",
            "So I'll walk out of a meeting and say to someone, \"I just met these guys, they're really good. Try them out.\" Even though I might not have the budget or the capacity to use them myself.",
          ],
        },
        {
          q: "The vendor who \"lost\" that deal has no idea you're out there selling for them.",
          a: [
            "No. They have no idea.",
          ],
        },
      ],
    },
    {
      heading: "If You Mess Up Once, I Won’t Use You Again",
      items: [
        {
          q: "Have you ever ruled a vendor out because of something a peer told you before you'd ever spoken to that vendor yourself?",
          a: [
            "Yes. More than once. Reputation is really important. Sometimes it's someone in your network. Sometimes you read something in the news. Especially today, you just can't afford to take that risk. Some of the companies I've worked for are quite big. If there are issues with a vendor, we get associated with them. So I need to make sure there are no legal repercussions, and that they can deliver what they say they can.",
          ],
        },
        {
          q: "Is it usually one story, or a pattern?",
          a: [
            "With certain vendors, you hear the same story over and over again - horror shows. So you revalidate what you're hearing. With some, it's a quick yes or no. And if they've messed up once with me directly, I would not use them again.",
          ],
        },
      ],
    },
    {
      heading: "The Bit You Don't Ask",
      items: [
        {
          q: "Is there a question you wish vendors would ask you, but don't?",
          a: [
            "One vendor I know, they've worked with me differently. They know I am open to working wth the, but rather than just quote me a price they have said: \"Tell me what you can do, what you can afford, what you need, and how we can support you.\" They're working backwards from my problem.",
            "I prefer when someone asks me: what are your challenges? What are the challenges with your finance team? What are the challenges with your boss? How can I make your life easier? And let's find a way to work together on that.",
          ],
        },
        {
          q: "Is that a new expectation, or has it always been the case?",
          a: [
            "I think it's going back to what it used to be. It's a human partnership and a human relationship. Sometimes you lose that. If you have a solution-driven mindset, you'll work with that individual. And that's what builds the relationship, long before any money changes hands.",
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
          "Quite a few. I'd say probably 80% of the vendors I've recommended to people, I have not worked with directly. But I had a good conversation with them. I've seen a product that I liked. I'd love to say I get all the budget I need, in which case I'd use them. But it doesn't happen. Perhaps it’s a great product, but it’s just not the right fit for my specific needs.",
          "So I'll walk out of a meeting and say to someone, \"I just met these guys, they're really good. Try them out.\" Even though I might not have the budget or the capacity to use them myself.",
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
    "This edition is part of an ongoing series of anonymous buyer interviews conducted by Buyer Perception. Every participant's identity is protected. No company names, product names, or identifying details are included. For more information, contact Gordon Smith at Buyer Perception.",
};
