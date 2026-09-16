import type { AnonymousEdition } from "../types";

const RESPONDENT = "Senior TA Leader";

export const edition004: AnonymousEdition = {
  edition: 4,
  date: "September 2026",
  hookQuote:
    "They truly understand the problem I'm trying to solve, don't try to upsell me and help me realise the value of their product.",
  buyerPersona: RESPONDENT,
  employer: "Mid-size technology company",
  companySize: "<500",
  technologies: ["ATS", "Sourcing", "Video & Interview Intelligence"],
  topics: [
    "Customer success",
    "Product roadmap",
    "Cold outreach",
    "Peer influence",
    "Support",
    "Implementation",
  ],
  stage: ["Evaluation", "In-life", "Renewal"],
  framing:
    "This buyer rates his customer success manager as one of the best he's ever worked with. He rates them so highly he brought them with him when he changed companies. He is also, probably, going to leave their employer. Not because of anything they've done, but because the product stopped moving and a competitor didn't. The relationship was never with the vendor. It was with them.",
  sections: [
    {
      heading: "They've done nothing wrong.",
      exchanges: [
        {
          question: "How would you describe your customer success manager?",
          answer:
            "They're one of the best CSMs I've ever worked with. I brought them from my previous company to this one. They truly understand the problem I'm trying to solve, don't try to upsell me and help me realise the value of their product.",
        },
        {
          question: "And you're still looking at leaving?",
          answer:
            "They've done nothing wrong. But they've really stalled on reporting, and they've been slow on MCP. A competitor can do things they can't - you can use agents to talk to the data. A manager could just ask what their pipeline looks like, rather than running through various reports.",
        },
        {
          question: "Is that unusual, having a CSM that good?",
          answer:
            "It's rare. The other one I'd put in the same category was at a large platform vendor. They were the two best CSMs I've ever had from a TA tech vendor, and it's the same thing with both of them - they understand the problem I'm trying to solve. They don't try to upsell features.\n\nThat's not been my experience with that platform overall, though. I always felt like I was a nobody to them because I wasn't spending millions. Every QBR was an upsell.",
        },
      ],
    },
    {
      heading: "I've never gone from a cold approach to purchasing.",
      exchanges: [
        {
          question: "When was the last time a vendor got a meeting with you completely cold?",
          answer:
            "About two or three years ago. And only because it was genuinely novel - nobody had tried AI sourcing agents at that point, so I wanted to learn. But I've never gone from a cold approach to actually purchasing a product. Not that I can recall.",
        },
        {
          question: "What does outreach look like for you day-to-day?",
          answer:
            "I might get one or two messages a day. And I'm horrible - I just block them so I don't get them again. In the current climate where everyone's like, \"I can offer you an AI agent to do this, that and the other,\" it's just delete.",
        },
      ],
    },
    {
      heading: "My first go-to is my peer network.",
      exchanges: [
        {
          question: "So if cold outreach doesn't work, how do you find vendors when you need to?",
          answer:
            "I'm part of an invite-only community of TA leaders. It's the best community I've ever been part of - very different from a glorified Slack channel where people ask \"can you recommend an agency?\" It's much higher quality.\n\nWhen we were evaluating a sourcing tool, I went to that community and said: those of you using AI sourcing tools, what do you like and not like? And I got fantastic feedback - the good, the bad and the ugly from actual end users.\n\nI've been doing this for 17 years. I have a good enough network to leverage. I also speak to people at VCs who've invested in companies I've worked for - if they don't have insights, they can often connect me with somebody who does. And then newsletters, webinars, G2. But my first go-to, if I had to stack rank it, is that TA leadership network.",
        },
      ],
    },
    {
      heading: "Does it have an MCP?",
      exchanges: [
        {
          question: "How has AI changed the way you evaluate TA tech?",
          answer:
            "Completely. The phrase I hear from the C-suite is \"do we buy it, build it, or acquire it?\" I wouldn't go so far as to say I'm going to build an ATS myself. But our people analytics person has built amazing dashboards that replace what our ATS can't do. And now we're connecting agents to it so you can just talk to the data.\n\nHow I'd evaluate an ATS two years ago, I'd evaluate very differently now. The most important factor - does it have an MCP? Can I plug it into the AI platform I already live in? I don't want to work across ten different applications. I just want to do what I need to do in one place.",
        },
      ],
    },
    {
      heading: "It's the little things that annoy me, but they add up cumulatively.",
      exchanges: [
        {
          question: "You recently onboarded a new tool. How has the post-sale experience been?",
          answer:
            "It's the little things that annoy me, but they add up cumulatively. The CSM was on vacation. My team chased three times - no response. I escalated it. \"Oh, sorry, they're on vacation.\" I'm like, fine, but can you just put an out-of-office on and tell us who the alternative contact is? I've deliberately paid extra for a CSM.\n\nThen there are latency issues. It's not quick enough. I don't know if that's the vendor's problem or something behind the scenes, but it all starts to add up and become a pain.",
        },
        {
          question: "Does that change how you feel about the purchase?",
          answer:
            "You get the razzle dazzle in the sales process. It seems to work in the demo. Then five or six weeks in, you're having challenges. And you start to question whether it lives up to what you were promised.",
        },
      ],
    },
    {
      heading: "I don't feel comfortable with AI reviewing applications.",
      exchanges: [
        {
          question: "Are there types of TA tech you've chosen not to evaluate?",
          answer:
            "Yes. A lot of TA teams have a deluge of applications and want a tool to review them. I've resisted that. Ethically, I don't know how comfortable I feel - having been a job hunter myself - with AI reviewing applications. The vendor pushes the responsibility onto the customer by saying \"you've got a human in the loop.\" But recruiters are under such pressure, they'll just take the top ten recommendations.\n\nAnd these vendors are all using the same models behind the scenes. There's a lot of monoculturalism. If you apply to a hundred companies and they all use the same AI to filter, the algorithm could reject you across every single one. That has affected my reason not to move forward with purchasing that kind of technology.",
        },
      ],
    },
    {
      heading: "Tell me what success looks like, then put numbers around it.",
      exchanges: [
        {
          question: "What do you wish vendors asked you but don't?",
          answer:
            "I can't remember the last time a vendor said: \"This is what success is going to look like for you after 30, 60, 90 days.\" Not just onboarding - that's different. I mean agreeing what success looks like for my specific team, with tangible numbers. So I can say: we agreed we'd move the needle here, the needle has moved, and I feel I've got value out of the product.",
        },
      ],
    },
  ],
  pullQuotes: [
    {
      quote: "I've deliberately paid extra for a CSM, and we can't get hold of one.",
      placeAfterSection: "My first go-to is my peer network.",
    },
    {
      quote:
        "I don't want to work across ten different applications. I just want to do what I need to do in one place.",
      placeAfterSection: "Tell me what success looks like, then put numbers around it.",
    },
  ],
  stats: [
    {
      value: "17 yrs",
      context: "in talent acquisition, across enterprise and high-growth",
    },
    {
      value: "0",
      context: "purchases that have ever originated from a cold approach",
    },
    {
      value: "3",
      context: "chases before a paid-for CSM was escalated to him",
    },
    {
      value: "1-2",
      context: "outreach messages a day, most blocked on arrival",
    },
  ],
};
