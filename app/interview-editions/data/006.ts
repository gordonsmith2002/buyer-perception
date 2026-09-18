import type { AnonymousEdition } from "../types";

const RESPONDENT = "VP of People";
const EMPLOYER = "Growth-Stage Technology";
const ATTRIBUTION = `${RESPONDENT}, ${EMPLOYER}`;

const HEADING_COMPASSION =
  "It started from a place of just showing me compassion where I needed it.";
const HEADING_LEVERS =
  "You have to give your salespeople flexibility so they don't feel like they're just robots";

export const edition006: AnonymousEdition = {
  edition: 6,
  date: "September 2026",
  hookQuote:
    "When things are great, you remember the product. When things are bad, you remember the person.",
  subtitle: "A VP of People on What One Renewal Conversation Can Change",
  buyerPersona: RESPONDENT,
  employer: EMPLOYER,
  companySize: "<500",
  technologies: ["ATS", "HRIS", "Payroll", "Comp"],
  topics: ["Churn", "Customer success", "Pricing & negotiation", "Renewal"],
  stage: ["Evaluation", "Renewal", "Churn"],
  framing:
    "Every vendor tracks renewals. Very few treat a customer asking for some flexibility as the make or break point in their renewal process.\n\nThis conversation is with a VP People at a growth-stage technology company who has bought, implemented, and removed enterprise HR platforms across multiple employers, large and small. They have managed vendor relationships through hypergrowth and through cost optimisation and they describe both from the buyer's side of the table.\n\nWhat stood out was not which vendors they chose, it was the fact that one conversation was able to completely flip their perspective of that vendor and how likely they were to recommend them or tell people to avoid them.",
  framingByline: "— Gordon Smith, Buyer Perception",
  highlightHeading: HEADING_COMPASSION,
  pageKicker:
    "One vendor said no and lost a supporter. Another said yes and gained one. Both were renewal conversations.",
  sections: [
    {
      heading: "If they'd just emailed me, I wouldn't have done the demo",
      exchanges: [
        {
          question: "How do you figure out which vendors to evaluate?",
          answer:
            "I still go to my HR groups and ask. What are you guys using for X? Once I've done that I'll go to an LLM to get an analysis of them. And that would be my shortlist.",
        },
        {
          question: "When's the last time someone got a meeting with you off the back of cold outreach?",
          answer:
            "Recently, I accidentally picked up my phone. It was the wrong time when they called and I was expecting another call, so I picked it up. I don't have time to talk. And they're like, cool, when is this time? But actually they put it in the diary, it was in there, and then I'm like, oh, I just feel bad because I remember speaking to the human. It wasn't an email exchange. So when it was in the diary, I talked to them, got a demo, and it made sense. I would not have done it if it was on email. I 100% would not.",
        },
      ],
    },
    {
      heading: "I'm actually pissed off even though I like the solution",
      exchanges: [
        {
          question: "Can you remember the last time you left a vendor?",
          answer:
            'We left our ATS provider last year. What\'s really interesting is I loved them when they first came out and I was a big fan. I had lots of relationships there, big supporter of the product too. They\'ve just gotten very successful and big and expensive as a result. We needed to reduce costs because of the scale we were at and also what AI allows us to do, you just don\'t need the same thing. But the inflexibility they had was wild. It\'s like, "well, no, you just can\'t do it". And I said, okay, either you reduce this or I have to go to a cheaper solution.',
        },
        {
          question: "When you say inflexibility, do you mean their approach and pricing, or the product?",
          answer:
            "It was just like, 'this is just how it works' - so corporate! There was just no conversation around it. I had paid for a certain tier, and I was like, I'm just trying to ask to reduce it. It's not like we're dying as a company. I just don't need it. And you're going to have more companies that go through this because AI is reducing headcount. So if you can't reduce it, and we were a year away from renewal, I'm actually pissed off even though I like the solution. And so then I just left it and we got a cheaper solution. I overpaid. I overlapped for a year with another solution, because I was so frustrated at how they handled it.",
        },
        {
          question: "What's your perception of them now?",
          answer: "They're not a partner.",
        },
      ],
    },
    {
      heading: HEADING_COMPASSION,
      exchanges: [
        {
          question: "Had they shown more flexibility, would that have changed how you felt?",
          answer:
            "100%. I'll give you a flip example. Our payroll and compliance platform. I hated them. Everybody hates them. Generally speaking, no one that actually uses them likes them, but you have to use them because they're a big player.\n\nAnd they surprisingly got the whole team - their customer success, the account manager, everybody - on a call and they said, help us understand. I said 'look, I know you're going to say no, but here's the situation. I don't need the number of seats any more'. And they came back and actually gave us below the minimum we asked for. I was stunned.\n\nI then wrote them an email saying, I'm actually really surprised you've done this and I thank you. Thank you for just being helpful - you have changed my view single-handedly.",
        },
        {
          question: "Would you reference either experience to a peer?",
          answer:
            "100%, which is so bizarre because I've hated them for what feels like a decade. Showing compassion really matters in sales and account management. The era is changing. Everyone's now looking at optimising and doing more with less. You get a very different version of sales when all you're doing is renewing with more and growing. But vendors need to recognise that same person's going to move to a company where they're going to try and reduce or optimise. Be a partner. Because not everyone's going to be on the same journey every single time.\n\nAnd you know what they also did - they said, we can give you these credits to put towards payroll if you want to do payroll with your UK entity. I had never intended to use them for payroll, but now they're offering me this credit, I'm like help me understand your payroll. And I might actually - which is so insane to say out loud - might actually use a different product of theirs. It started from a place of just showing me compassion where I needed it.",
        },
      ],
    },
    {
      heading: HEADING_LEVERS,
      exchanges: [
        {
          question:
            "If you could sit down with the CEO of the vendor you left and make some recommendations, what would you say?",
          answer:
            "Pricing is important to fix so you know what your baseline is - I get it. But you have to give your salespeople flexibility and fluidity to show some form of compassion, either through a reduction or a repivot or a delay. They need tools to be able to show compassion to their customers so they don't feel like they're just robots sticking to a price list. It is ultimately a sales strategy - what levers do they have? It's not the salesperson's fault. I have to be upset at someone and I'm going to be upset at you because that's just how the system works.\n\nSo you have to think about levers to give. We could just say, you guys don't want to do it, let's just pause. No cost for the next three months or six months, a year. You can continue using the product and you come back to us. You've got to be able to have some levers. And they don't need to be as extreme as what I'm saying. But you need to give levers to allow the perception of a partnership when you are speaking to people.",
        },
      ],
    },
    {
      heading: "If you're gonna stay in the space, I wouldn't burn a bridge if I was you",
      exchanges: [
        {
          question: "Do you think the vendor you left fully understood why?",
          answer: "Yeah, because when you're angry, you're very vocal, or at least I am.",
        },
        {
          question: "It's a tough position for the reps though.",
          answer:
            "They are stuck. But they're not going to hit a quota, and they're not going to burn a relationship. If you are in HR tech and you're going to stay in it - I'm in a startup now but when I leave, I might go back to a bigger company. You're still dealing with me. There's maybe five main ATS platforms, three or four in HRIS, a couple in comp. It's not that many. If you're gonna stay in the space, I wouldn't burn a bridge if I was you.",
        },
      ],
    },
  ],
  pullQuotes: [
    {
      quote: "Be a partner. Because not everyone's going to be on the same journey every single time.",
      placeAfterSection: HEADING_LEVERS,
      attribution: ATTRIBUTION,
    },
  ],
  stats: [
    {
      value: "1 year",
      context: "overlapping contracts to leave a vendor she liked, over inflexibility",
    },
    {
      value: "1",
      context: "phone call, the only cold outreach that recently led to a meeting",
    },
    {
      value: "2",
      context: "products now under evaluation from a vendor the buyer previously hated",
    },
    {
      value: "0",
      context: "emails would have got that same meeting",
    },
  ],
};
