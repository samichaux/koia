import type { Content } from "./fr";

const en = {
  hero: {
    headline: [
      { t: "THE", f: "bebas" },
      { t: "AI", f: "bebas" },
      { t: "COACH", f: "bebas" },
      { t: "THAT", f: "bebas" },
      { t: "ADAPTS", f: "bebas" },
      { t: "\n", f: "br" },
      { t: "REALLY", f: "gradient" },
      { t: "TO", f: "bebas" },
      { t: "YOU", f: "bebas" },
    ],
    subtitle:
      "Talk to it like a real coach. KOIA builds your plan and adjusts it every week.",
    formNote: "Free · No spam · Priority access",
  },

  problem: {
    eyebrow: "The problem",
    title: "What fitness apps are selling you",
    items: [
      {
        n: "01",
        title: "ChatGPT gives you a program. Not a coach.",
        text: "Millions of people already ask ChatGPT or Claude to write their training plan. But without the right setup, the AI improvises, generalises, and forgets your body, your injuries, your history. You get a generic plan dressed up as personalisation.",
      },
      {
        n: "02",
        title: "Fitness apps aren't really AI.",
        text: "A five-question quiz and a PDF. Most apps calling themselves \u201cAI\u201d are forms with a logo. No real adaptation, no explanation, no conversation.",
      },
      {
        n: "03",
        title: "Nobody tells you why.",
        text: "Why this exercise and not another? Why 4 sets and not 3? Neither ChatGPT nor the apps explain the reasoning — with KOIA, every choice has an answer you can read whenever you want to read it.",
      },
    ],
  },

  motivational: {
    line1: "STOP GUESSING.",
    line2: "START UNDERSTANDING.",
  },

  difference: {
    eyebrow: "The difference",
    title: "A coach that earns the name",
    block1: {
      title: "AI, done properly",
      body: "KOIA doesn't start from scratch with every message. It remembers your sessions, your aches, your progress — and adjusts, week after week, without you having to repeat yourself.",
      systemPrompt: "System prompt: 6 blocks · 47 rules · 0 bullshit",
      without: {
        label: "Without KOIA",
        footer: "Generic · No context",
        messages: [
          { side: "user", text: "Write me a strength program" },
          {
            side: "ai",
            text: "Day 1 — Bench press 4×10, Shoulder press 3×12, Triceps pushdown 3×15...",
          },
        ],
      },
      with: {
        label: "With KOIA",
        footer: "Adapted · In context · Sourced",
        messages: [
          { side: "user", text: "my right knee hurts" },
          {
            side: "ai",
            text: "Swapping the Bulgarian split squat for hip thrusts. Effort 6/10 today. If it keeps hurting → get it checked.",
          },
        ],
      },
    },
    block2: {
      title: "Transparent reasoning",
      body: "Every exercise is chosen for a reason. KOIA tells you why, and how strong the evidence is.",
      pills: [
        { t: "Scientific evidence ✓", dim: false },
        { t: "Clinical trials ✓", dim: false },
        { t: "Expert consensus ✓", dim: true },
      ],
    },
    block3: {
      title: "Meal tracking without the headache",
      body: "Describe what you eat. KOIA reads it and gives you concrete advice — no numbers, no guilt.",
      mealLabel: "Meal log — Tuesday lunch",
      userMessage: "I had chicken with rice and a salad",
      aiResponse:
        "Solid meal 👍 The chicken covers your protein well. The rice portion is a bit big compared to the salad though — try two fistfuls of veg next time.",
      tip: "Tip: add a source of good fat — a few nuts or a drizzle of olive oil.",
    },
  },

  programme: {
    eyebrow: "Example",
    title: "Your program, not everyone else's",
    cardLabel: "FULL BODY A",
    cardSubLabel: "Week 3 · Recomp",
    rows: [
      { name: "Hip Thrust", sets: "4×10", rpe: "Effort 8/10" },
      { name: "T-bar Row", sets: "4×10", rpe: "Effort 7/10" },
      { name: "Bulgarian Split Squat", sets: "3×12", rpe: "Effort 7/10" },
      { name: "Reverse Pec Deck", sets: "3×15", rpe: "Effort 6/10" },
      { name: "Hip Abduction Machine", sets: "3×15", rpe: "Effort 6/10" },
    ],
    coachNote:
      "Hip thrust first — we hit the glutes while you're still fresh. The row is chest-supported to protect your lower back.",
  },

  credibility: {
    eyebrow: "The foundations",
    items: [
      "Zero diet culture · Nothing to sell you",
      "Built by an athlete · 10 years of training",
      "Based on Schoenfeld, Morton, Helms, Contreras",
      "Effort tracking backed by research",
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "What you want to know",
    items: [
      {
        q: "Is KOIA a strength training app or a fitness app?",
        a: "Both. KOIA builds programs around your goals — building muscle, losing fat, getting fitter. The AI coach adapts to your level and your equipment.",
      },
      {
        q: "Why not just use ChatGPT for my program?",
        a: "You can, and the first program might even be good. The trouble starts in week 3: ChatGPT doesn't remember your last session, or whether something hurt. You have to type it all again every time. KOIA keeps track and adjusts without you re-explaining.",
      },
      {
        q: "How is KOIA's AI different from other apps?",
        a: "Most apps use a quiz to generate a static program. KOIA uses a conversational coach that understands your context, adapts week after week, and explains every choice.",
      },
      {
        q: "Does KOIA include nutrition tracking?",
        a: "Yes. You describe your meals, KOIA reads them against verified data. No obsessive counting — tracking based on portions and your protein goals.",
      },
      {
        q: "Is KOIA suitable for women?",
        a: "KOIA is built for everyone. The coach factors in the physical and hormonal specifics of each profile, including adapting to your menstrual cycle.",
      },
      {
        q: "How much will KOIA cost?",
        a: "Pricing will be announced at launch. Private beta members get preferential terms.",
      },
      {
        q: "When will KOIA be available?",
        a: "KOIA is in development. Join the beta to try it first and shape the product.",
      },
    ],
  },

  finalCta: {
    title: {
      line1: "Ready to try a coach",
      line2Before: "that doesn't",
      accent: "LIE",
      line2After: "to you?",
    },
    formNote: "Free · No spam · Priority access",
  },

  footer: {
    copyright: "© 2026 KOIA",
  },

  iPhone: {
    statusBarTime: "9:41",
    chatHeaderName: "KOIA",
    onlineStatus: "Online",
    inputPlaceholder: "Message your coach...",
    messages: [
      {
        from: "koia",
        text: "Hey! I'm your coach. To build your program I've got a few questions. What's your main goal?",
        delay: 500,
      },
      {
        from: "user",
        text: "recomp, I want to lose fat and firm up my glutes mainly",
        delay: 2000,
      },
      {
        from: "koia",
        text: "Got it. How long have you been training? And any current injuries or pain?",
        delay: 3500,
      },
      {
        from: "user",
        text: "10 years, my right knee hurts at the moment",
        delay: 5000,
      },
      {
        from: "koia",
        text: "With your experience I'll go with a Full Body 3×/week. For the knee: no deep squats, we'll favour hip thrusts and partial leg press.",
        delay: 6500,
      },
      {
        from: "koia",
        text: "I also spotted a back-dominant build — I'm dropping pull-ups to balance your proportions. Here's your program ↓",
        delay: 7500,
      },
    ],
  },
} as const;

export const enContent = en as unknown as Content;
