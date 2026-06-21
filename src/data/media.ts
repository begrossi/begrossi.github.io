export type MediaItem = {
  date: string;
  publication: string;
  topic: string;
  url: string;
  type: "Interview" | "Quote" | "Feature" | "Podcast" | "Video";
};

export const mediaItems: MediaItem[] = [
  {
    date: "2025 · Mar",
    publication: "Valor Econômico",
    topic: "DREX and the future of Brazilian financial infrastructure",
    url: "#",
    type: "Feature",
  },
  {
    date: "2025 · Feb",
    publication: "Exame",
    topic: "What banks need to know about quantum computing threats",
    url: "#",
    type: "Interview",
  },
  {
    date: "2025 · Jan",
    publication: "InfoMoney",
    topic: "Tokenization of real-world assets: where institutions are betting",
    url: "#",
    type: "Quote",
  },
  {
    date: "2024 · Nov",
    publication: "CoinDesk",
    topic: "Brazil's DREX pilot: insights from the inside",
    url: "#",
    type: "Feature",
  },
  {
    date: "2024 · Oct",
    publication: "Fintech Brasil Podcast",
    topic: "AI strategy inside a major bank — a practitioner's view",
    url: "#",
    type: "Podcast",
  },
  {
    date: "2024 · Sep",
    publication: "Bloomberg Línea",
    topic: "Latin America's role in the global CBDC race",
    url: "#",
    type: "Quote",
  },
  {
    date: "2024 · Jul",
    publication: "MIT Technology Review Brasil",
    topic: "Post-quantum cryptography: the timeline financial institutions are ignoring",
    url: "#",
    type: "Feature",
  },
  {
    date: "2024 · Jun",
    publication: "Febraban Tech Stage",
    topic: "The next decade of financial infrastructure",
    url: "#",
    type: "Video",
  },
  {
    date: "2024 · Apr",
    publication: "Cointelegraph Brasil",
    topic: "Institutional tokenization: beyond the pilot",
    url: "#",
    type: "Interview",
  },
  {
    date: "2024 · Jan",
    publication: "The Block",
    topic: "Brazilian banks and the DeFi infrastructure question",
    url: "#",
    type: "Quote",
  },
];
