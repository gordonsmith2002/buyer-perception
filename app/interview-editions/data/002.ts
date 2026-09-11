import type { AnonymousEdition } from "../types";

export const edition002: AnonymousEdition = {
  edition: 2,
  date: "September 2026",
  hookQuote: "Help me spend my money on you. Don't just try and flog me shit",
  buyerPersona: "Senior TA Leader",
  employer: "VC-backed tech company",
  companySize: "501 - 1,000",
  technologies: ["ATS"],
  topics: ["Churn", "Demos", "Cold outreach", "Sales process", "Business case & ROI"],
  stage: ["Churn", "Selection"],
  framing:
    "This buyer stayed with a vendor because of a CSM who showed up once a quarter and made it count every time. They left because another vendor didn't show up at all. The gap between the two wasn't product. It was presence. None of that showed up in a renewal forecast or usage report.",
  sections: [
    {
      heading: "The arrogance of the renewals manager was something else.",
      exchanges: [
        {
          question: "You've recently moved away from an ATS provider. What happened?",
          answer:
            'They were doing an okay job. But we didn\'t have a CSM. We heard nothing. Then when the renewal came around: "you\'re going to renew in four months." That was it.\n\nI actually dialled into one of their product roadmap calls with their VP of Product. The AI they were building was only going to be available in one geography. That was a problem for an international company. And when I told our renewals contact, they knew nothing about it. Had to send them away to find out.\n\nThe arrogance of the renewals manager was something else. And the product roadmap didn\'t have what we needed. So we started looking.',
        },
        {
          question: "Could they have kept you?",
          answer:
            "I tried to negotiate a break clause in the renewal: some flexibility, even a few months of overlap, and they wouldn't do it. That's where a bit of grace, a bit of flexibility, would have kept them in the picture longer. Instead, we gave 30 days' notice and moved on.",
        },
      ],
    },
    {
      heading: "The whole way demos are done needs to change.",
      exchanges: [
        {
          question:
            "What's something every TA tech company seems convinced buyers care about, but you probably don't?",
          answer:
            "Feature creep is an absolute nightmare. Systems have got so complicated. And sales folks are guilty of burying the potential buyer in detail. If I sit through one more demo which in 45 minutes tries to show me every single feature. People clicking through five screens and you've no idea how they got there. I've never seen the thing before. The whole way demos are done needs to change.\n\nIt needs to be really simple to start with. Then you give the prospect the chance to play with the system themselves. Some people go quickly, some slowly. But having an expert just zap through it. We all know what it's like when you get new software.",
        },
        {
          question: "So what do you actually want?",
          answer:
            "They think we want a million features. We don't. We've reached a point where what we want is greater simplicity. The fundamental system needs to be really simple and really reliable. Then you start bolting on. Ninety percent of it should be going on under the hood.",
        },
      ],
    },
    {
      heading: "They gave me everything I needed to convince my boss.",
      exchanges: [
        {
          question: "What did the vendor you chose do differently?",
          answer:
            "The simplicity and responsiveness of their whole operation. You ask a question, you get a simple response with supporting documents you can explore further. No fluff.\n\nAnd they brought an implementation plan. You put in your go-live date, who's involved, and it generates every stage you need to go through. That gave me everything I needed to go to my boss and say: we can do this in weeks, not months. Because the last implementation took over three months and they lost all the data halfway through.",
        },
        {
          question: "What does it feel like working with them now?",
          answer:
            "You just feel it. Our CSM is excellent. We only talk once a quarter now, but when we do, it matters. They had a great product roadmap. The AI was ahead of where we expected. They were massively responsive throughout.\n\nI'm a huge advocate. Not every system is right for every company. But they've absolutely nailed the sales process.",
        },
      ],
    },
    {
      heading: "When was the last time a vendor got a meeting with you completely cold?",
      exchanges: [
        {
          question: "",
          answer: "Can't remember. More than 10 years ago. Totally wasted on me.",
        },
        {
          question: "So how do you find vendors when you're actually in the market?",
          answer:
            'Research. I\'ll use AI tools to look at what\'s out there. I\'ll go to my peer networks, communities for senior TA leaders, and ask: anyone use this? What do you suggest? People are constantly coming up with things. I\'ll talk to industry peers directly. And then events. I\'m always up for an event.\n\nThe only cold approaches that do work are where somebody says, "We\'re holding this event. This is the focus. These are the sort of people going." If it\'s a relevant topic, I\'ll go. Because you never quite know where those might lead.',
        },
      ],
    },
    {
      heading: "Your job is to understand what problem I'm trying to solve.",
      exchanges: [
        {
          question: "If you could tell every TA tech salesperson one thing, what would it be?",
          answer:
            "Your job is to understand what problem I'm trying to solve. Don't sell me your widgets. It's basic enterprise selling. Help me spend my money on you. Don't just try and flog me shit.",
        },
      ],
    },
    {
      heading: "What are we actually trying to solve?",
      exchanges: [
        {
          question: "When you've decided to go to market, what does your process look like?",
          answer:
            "The first thing is: what are we trying to achieve? I've been teaching my team this because they're great, but they go charging in. I keep going back: what are we trying to do here? What does the output look like?\n\nThen it's research and networking. Specific questions to people I trust. Peer support conversations. I'm talking to someone later this morning who's come to me to ask about what we've done with our ATS and how we're using it.",
        },
        {
          question: "Who are your key stakeholders in a buying decision?",
          answer:
            "My boss, who holds the budget and makes the final call, although they went with our recommendation. Finance, for budget and headroom. Our third-party procurement partner who works on getting us the best deal. And the users. We ran focus groups with hiring managers to understand what they'd actually want.",
        },
      ],
    },
  ],
  pullQuotes: [
    {
      quote: "They think we want a million features. We don't. What we want is greater simplicity.",
      placeAfterSection: "They gave me everything I needed to convince my boss.",
    },
    {
      quote:
        "I'm a huge advocate. Not every system is right for every company. But they've absolutely nailed the sales process.",
      placeAfterSection: "What are we actually trying to solve?",
    },
  ],
  stats: [
    {
      value: "10+",
      context: "years since a cold approach led to a purchase. Events are the only exception.",
    },
    {
      value: "4",
      context: "stakeholders in every buying decision: boss, finance, procurement, end users.",
    },
    {
      value: "2",
      context: "major vendor selection processes in the last twelve months alone.",
    },
  ],
};
