export type SpeakingTopic = {
  title: string;
  description: string;
  audience: string;
  icon: string;
};

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "Digital Assets & Tokenization",
    description: "From pilot to production: what it takes to deploy tokenized financial assets inside a regulated institution. Covers architecture, compliance, custody, and the business case for tokenization.",
    audience: "C-suite executives, regulators, institutional investors",
    icon: "◈",
  },
  {
    title: "CBDCs and DREX",
    description: "Brazil's DREX experiment offers a preview of how central bank digital currencies will reshape settlement, programmable money, and the relationship between public and private financial infrastructure.",
    audience: "Policymakers, central bankers, financial institutions",
    icon: "◎",
  },
  {
    title: "The Future of Banking Infrastructure",
    description: "The next generation of financial infrastructure will be onchain, programmable, and interoperable. A framework for how banks should think about the transition — without betting the institution on speculation.",
    audience: "Board members, technology executives, strategy teams",
    icon: "⬡",
  },
  {
    title: "AI in Financial Services",
    description: "Practical AI deployment inside a regulated bank. What works, what fails, and how to build governance structures that allow innovation without creating new systemic risks.",
    audience: "Technology leaders, risk officers, innovation teams",
    icon: "◐",
  },
  {
    title: "Quantum Computing for Executives",
    description: "Non-technical briefing on quantum computing threats to financial infrastructure. Covers timelines, Harvest Now Decrypt Later risks, and how to prioritize a post-quantum migration without panic or paralysis.",
    audience: "Board members, CISOs, risk executives",
    icon: "⬢",
  },
  {
    title: "Building Innovation Inside Large Organizations",
    description: "How to create, protect, and scale innovation capability within a large regulated institution. Covers team design, governance, budgeting, and the internal politics of doing new things in old places.",
    audience: "Innovation leads, technology executives, HR and strategy",
    icon: "◇",
  },
];
