export type Category = "Digital Assets" | "DREX" | "AI" | "Quantum" | "Leadership";

export type Article = {
  num: string;
  title: string;
  venue: string;
  date: string;
  url: string;
  image: string;
  category: Category;
  summary: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    num: "01",
    title: "What DREX Means for Brazil's Financial System",
    venue: "Valor Econômico",
    date: "2025 · Mar",
    url: "https://valor.globo.com",
    image: "/articles/drex.jpg",
    category: "DREX",
    summary: "A deep dive into Brazil's CBDC pilot and its implications for settlement, tokenization, and the future of regulated financial infrastructure.",
    featured: true,
  },
  {
    num: "02",
    title: "Why Banks Should Care About Quantum Computing",
    venue: "MIT Technology Review Brasil",
    date: "2025 · Jan",
    url: "https://technologyreview.com",
    image: "/articles/quantum.jpg",
    category: "Quantum",
    summary: "The cryptographic risks of the quantum era are not theoretical. Financial institutions that wait will face existential exposure. Here's what to do now.",
    featured: true,
  },
  {
    num: "03",
    title: "The Future of Tokenized Assets",
    venue: "Fintech Brasil",
    date: "2024 · Nov",
    url: "https://fintechbrasil.com.br",
    image: "/articles/tokenization.jpg",
    category: "Digital Assets",
    summary: "Tokenization is not a trend. It is a structural shift in how financial assets are issued, traded, and settled. What that means for regulated institutions.",
    featured: true,
  },
  {
    num: "04",
    title: "Building AI Strategy Inside a Regulated Bank",
    venue: "LinkedIn",
    date: "2024 · Sep",
    url: "https://linkedin.com/in/bruno-grossi",
    image: "/articles/ai-bank.jpg",
    category: "AI",
    summary: "Most AI initiatives inside financial institutions fail not because of technology but because of governance, risk appetite, and alignment. A practitioner's view.",
  },
  {
    num: "05",
    title: "Post-Quantum Cryptography: The Migration Banks Can't Afford to Delay",
    venue: "Febraban",
    date: "2024 · Jul",
    url: "https://febraban.org.br",
    image: "/articles/pqc.jpg",
    category: "Quantum",
    summary: "NIST's PQC standards are finalized. The migration window is shorter than most risk teams assume. A framework for prioritizing cryptographic resilience.",
  },
  {
    num: "06",
    title: "AMM for Tokenized Bonds: How It Works and Why It Matters",
    venue: "CoinDesk",
    date: "2024 · Apr",
    url: "https://coindesk.com",
    image: "/articles/amm.jpg",
    category: "Digital Assets",
    summary: "Automated market makers applied to fixed income are not just a DeFi experiment. They are a liquidity solution for thin markets in tokenized securities.",
  },
];
