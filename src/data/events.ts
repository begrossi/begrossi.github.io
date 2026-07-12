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
    name: "Blockchain Rio",
    role: "Speaker",
    location: "Rio de Janeiro, BR",
    date: "2026 · Aug",
    url: "https://app.4.events/palestrante-bruno-grossi-103-c24755",
    topic: "Digital Assets & the Future of Finance",
  },
  {
    num: "02",
    name: "Merge São Paulo",
    role: "Speaker",
    location: "São Paulo, BR",
    date: "2026 · Mar",
    url: "https://www.mmerge.io/speaker/bruno-grossi",
    topic: "Digital Assets, DREX & Tokenization",
  },
  {
    num: "03",
    name: "SmartCon",
    role: "Speaker",
    location: "New York, NY",
    date: "2025 · Oct",
    url: "https://smartcon.chain.link/speakers",
    topic: "Cross-Chain Interoperability & CBDCs",
  },
  {
    num: "04",
    name: "Blockchain Rio",
    role: "Speaker",
    location: "Rio de Janeiro, BR",
    date: "2025 · Aug",
    url: "https://app.4.events/palestrante-bruno-grossi-103-c24755",
    topic: "CBDCs, Stablecoins & Tokenization",
  },
  {
    num: "05",
    name: "TokenNation",
    role: "Speaker",
    location: "São Paulo, BR",
    date: "2025 · Jun",
    url: "https://www.tokennation.com.br",
    topic: "Tokenization & Digital Assets",
  },
  {
    num: "06",
    name: "Merge Buenos Aires",
    role: "Speaker",
    location: "Buenos Aires, AR",
    date: "2025 · Mar",
    url: "https://www.mmerge.io/merge-buenos-aires-25/speakers",
    topic: "DREX, Stablecoins & Quantum Computing",
  },
  {
    num: "07",
    name: "Merge Madrid",
    role: "Speaker",
    location: "Madrid, Spain",
    date: "2024 · Nov",
    url: "https://www.mmerge.io/speaker/bruno-grossi",
    topic: "Digital Assets & Tokenization",
  },
  {
    num: "08",
    name: "SmartCon",
    role: "Panelist",
    location: "Hong Kong",
    date: "2024 · Oct",
    url: "https://smartcon.chain.link/speakers",
    topic: "Chainlink & Financial Infrastructure",
  },
  {
    num: "09",
    name: "Blockchain Rio",
    role: "Keynote",
    location: "Rio de Janeiro, BR",
    date: "2024 · Aug",
    url: "https://app.4.events/palestrante-bruno-grossi-103-c24755",
    topic: "CBDCs and DREX",
  },
  {
    num: "10",
    name: "Febraban Tech",
    role: "Speaker",
    location: "São Paulo, BR",
    date: "2024 · Jun",
    url: "https://febrabantech.com.br",
    topic: "AI in Financial Services",
  },
  {
    num: "11",
    name: "Blockchain Rio",
    role: "Speaker",
    location: "Rio de Janeiro, BR",
    date: "2023 · Aug",
    url: "https://app.4.events/palestrante-bruno-grossi-103-c24755",
    topic: "Blockchain & Digital Transformation",
  },
];
