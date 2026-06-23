export type Event = {
  num: string;
  name: string;
  role: string;
  location: string;
  date: string;
  url: string;
  topic?: string;
};

export const events: Event[] = [
  {
    num: "01",
    name: "Merge Madrid",
    role: "Speaker",
    location: "Madrid, Spain",
    date: "2024 · Nov",
    url: "https://www.mmerge.io/speaker/bruno-grossi",
    topic: "Digital Assets & Tokenization",
  },
  {
    num: "02",
    name: "Blockchain Rio",
    role: "Keynote",
    location: "Rio de Janeiro, BR",
    date: "2024 · Sep",
    url: "https://app.4.events/palestrante-bruno-grossi-103-c24755",
    topic: "CBDCs and DREX",
  },
  {
    num: "03",
    name: "SmartCon",
    role: "Panelist",
    location: "Hong Kong",
    date: "2024 · Jun",
    url: "https://smartcon.chain.link/speakers",
    topic: "Chainlink & Financial Infrastructure",
  },
  {
    num: "04",
    name: "Febraban Tech",
    role: "Speaker",
    location: "São Paulo, BR",
    date: "2024 · Jun",
    url: "https://febrabantech.com.br",
    topic: "AI in Financial Services",
  },
  {
    num: "05",
    name: "Consensus",
    role: "Panelist",
    location: "Austin, TX",
    date: "2024 · May",
    url: "https://consensus.coindesk.com",
    topic: "The Future of Tokenized Assets",
  },
  {
    num: "06",
    name: "Hong Kong FinTech Week",
    role: "Speaker",
    location: "Hong Kong",
    date: "2023 · Nov",
    url: "https://www.hkfintech.org",
    topic: "CBDCs: Lessons from Emerging Markets",
  },
];
