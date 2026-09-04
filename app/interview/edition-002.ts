import type { PullQuote, Section, Stat } from "./edition";

export const edition002 = {
  slug: "002",
  series: "Buyer Perception · Anonymous 1:1 Edition · September 2026",
  dateLabel: "September 2026",
  reportTitle: "Anonymous Buyer Interview",
  coverMeta: [
    { label: "Title", value: "Senior TA Leader" },
    { label: "Industry", value: "VC-backed tech company" },
    { label: "Company Size", value: "500" },
    { label: "Date of Interview", value: "September 2026" },
  ],
  tags: ["Churn", "Demos", "Cold Outreach", "Sales Process"],
  coverLines: [
    { rest: "Stop letting your competitors ", punch: "win deals you should have won" },
    { rest: "Stop losing customers ", punch: "you didn't need to lose" },
  ],
  heroTitle: "Help me spend my money on you. Don't just try and flog me shit",
  subtitle: "A Senior TA Leader on Why Vendors Lose Deals They Should Win",
  preparedBy: {
    name: "Gordon Smith",
    role: "Founder, Buyer Perception",
  },
  intro: [
    "Every vendor has a churn they can't explain. A customer who seemed fine, and then wasn't.",
    "This conversation is with a senior talent acquisition leader at a global technology company. They buy, evaluate, and benchmark TA platforms against the art of the possible, and they've just been through two major vendor selection processes in the last twelve months.",
    "What made this conversation different was the contrast. The same buyer, two completely different vendor experiences: one that drove them away, and one that made them an advocate. The gap between the two is where most revenue gets lost.",
  ],
  churnSection: {
    heading: "The arrogance of the renewals manager was something else.",
    items: [
      {
        q: "You've recently moved away from an ATS provider. What happened?",
        a: [
          'They were doing an okay job. But we didn\'t have a CSM. We heard nothing. Then when the renewal came around: "you\'re going to renew in four months." That was it.',
          "I actually dialled into one of their product roadmap calls with their VP of Product. The AI they were building was only going to be available in one geography. That was a problem for an international company. And when I told our renewals contact, they knew nothing about it. Had to send them away to find out.",
          "The arrogance of the renewals manager was something else. And the product roadmap didn't have what we needed. So we started looking.",
        ],
      },
      {
        q: "Could they have kept you?",
        a: [
          "I tried to negotiate a break clause in the renewal: some flexibility, even a few months of overlap, and they wouldn't do it. That's where a bit of grace, a bit of flexibility, would have kept them in the picture longer. Instead, we gave 30 days' notice and moved on.",
        ],
      },
    ],
  } satisfies Section,
  demosSection: {
    heading: "The Whole Way Demos Are Done Needs to Change.",
    items: [
      {
        q: "What's something every TA tech company seems convinced buyers care about, but you probably don't?",
        a: [
          "Feature creep is an absolute nightmare. Systems have got so complicated. And sales folks are guilty of burying the potential buyer in detail. If I sit through one more demo which in 45 minutes tries to show me every single feature. People clicking through five screens and you've no idea how they got there. I've never seen the thing before. The whole way demos are done needs to change.",
          "It needs to be really simple to start with. Then you give the prospect the chance to play with the system themselves. Some people go quickly, some slowly. But having an expert just zap through it. We all know what it's like when you get new software.",
        ],
      },
      {
        q: "So what do you actually want?",
        a: [
          "They think we want a million features. We don't. We've reached a point where what we want is greater simplicity. The fundamental system needs to be really simple and really reliable. Then you start bolting on. Ninety percent of it should be going on under the hood.",
        ],
      },
    ],
  } satisfies Section,
  advocateSection: {
    heading: "They Gave Me Everything I Needed to Convince My Boss.",
    items: [
      {
        q: "What did the vendor you chose do differently?",
        a: [
          "The simplicity and responsiveness of their whole operation. You ask a question, you get a simple response with supporting documents you can explore further. No fluff.",
          "And they brought an implementation plan. You put in your go-live date, who's involved, and it generates every stage you need to go through. That gave me everything I needed to go to my boss and say: we can do this in weeks, not months. Because the last implementation took over three months and they lost all the data halfway through.",
        ],
      },
      {
        q: "What does it feel like working with them now?",
        a: [
          "You just feel it. Our CSM is excellent. We only talk once a quarter now, but when we do, it matters. They had a great product roadmap. The AI was ahead of where we expected. They were massively responsive throughout.",
          "I'm a huge advocate. Not every system is right for every company. But they've absolutely nailed the sales process.",
        ],
      },
    ],
  } satisfies Section,
  closeThought: {
    heading: "Your Job Is to Understand What Problem I'm Trying to Solve.",
    items: [
      {
        q: "If you could tell every TA tech salesperson one thing, what would it be?",
        a: [
          "Your job is to understand what problem I'm trying to solve. Don't sell me your widgets. It's basic enterprise selling. Help me spend my money on you. Don't just try and flog me shit.",
        ],
      },
    ],
  } satisfies Section,
  supportingSections: [
    {
      heading: "When was the last time a vendor got a meeting with you completely cold?",
      items: [
        {
          q: "",
          a: ["Can't remember. More than 10 years ago. Totally wasted on me."],
        },
        {
          q: "So how do you find vendors when you're actually in the market?",
          a: [
            "Research. I'll use AI tools to look at what's out there. I'll go to my peer networks, communities for senior TA leaders, and ask: anyone use this? What do you suggest? People are constantly coming up with things. I'll talk to industry peers directly. And then events. I'm always up for an event.",
            'The only cold approaches that do work are where somebody says, "We\'re holding this event. This is the focus. These are the sort of people going." If it\'s a relevant topic, I\'ll go. Because you never quite know where those might lead.',
          ],
        },
      ],
    },
    {
      heading: "What Are We Actually Trying to Solve?",
      items: [
        {
          q: "When you've decided to go to market, what does your process look like?",
          a: [
            "The first thing is: what are we trying to achieve? I've been teaching my team this because they're great, but they go charging in. I keep going back: what are we trying to do here? What does the output look like?",
            "Then it's research and networking. Specific questions to people I trust. Peer support conversations. I'm talking to someone later this morning who's come to me to ask about what we've done with our ATS and how we're using it.",
          ],
        },
        {
          q: "Who are your key stakeholders in a buying decision?",
          a: [
            "My boss, who holds the budget and makes the final call, although they went with our recommendation. Finance, for budget and headroom. Our third-party procurement partner who works on getting us the best deal. And the users. We ran focus groups with hiring managers to understand what they'd actually want.",
          ],
        },
      ],
    },
  ] satisfies Section[],
  page2Quote: {
    text: "They think we want a million features. We don't. What we want is greater simplicity.",
    attribution: "Senior TA Leader",
    role: "Global Technology Company",
  } satisfies PullQuote,
  page3Quote: {
    text: "Help me spend my money on you. Don't just try and flog me shit.",
    attribution: "Senior TA Leader",
    role: "Global Technology Company",
  } satisfies PullQuote,
  page2Stats: [
    {
      figure: "10+",
      desc: "years since a cold approach led to a purchase. Events are the only exception.",
    },
    {
      figure: "4",
      desc: "stakeholders in every buying decision: boss, finance, procurement, end users.",
    },
    {
      figure: "2",
      desc: "major vendor selection processes in the last twelve months alone.",
    },
    {
      figure: "45 min",
      desc: 'demos that try to show every feature. "The whole way demos are done needs to change."',
    },
  ] satisfies Stat[],
  closeHeadline: "What Are Your Buyers Saying When You're Not in the Room",
  closeSupport:
    "This buyer stayed because of a CSM who showed up once a quarter and made it count. They left because another vendor didn't show up at all. The gap between the two wasn't product. It was presence. None of that showed up in a renewal forecast. None of it showed up in a usage report.",
  closeCta:
    "Buyer Perception conducts anonymous, in-depth interviews with TA and HR leaders who buy, evaluate, and influence purchasing decisions in your market.",
  closeCtaBold:
    "If you'd like to know what your buyers are saying when you're not in the room, get in touch.",
  footnote:
    "This edition is part of an ongoing series of anonymous buyer interviews conducted by Buyer Perception. Every participant's identity is protected. No company names, product names, or identifying details are included. For more information, contact Gordon Smith at Buyer Perception.",
};
