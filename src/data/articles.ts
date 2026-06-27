export type Category = "Digital Assets" | "DREX" | "AI" | "Quantum" | "Leadership";

export type Article = {
  num: string;
  title: string;
  venue: string;
  date: string;
  url: string;
  category: Category;
  summary: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    num: "01",
    title: "First Cross-Border, Cross-Chain Trade Experiment Between BCB and HKMA",
    venue: "Blog Inter",
    date: "2025 · Nov",
    url: "https://blog.inter.co/banco-inter-chainlink-first-cross-border-cross-chain-trade-experiment-between-bcb-and-hkma",
    category: "DREX",
    summary: "How Banco Inter and Chainlink completed the first cross-border, cross-chain trade finance experiment linking Brazil's Central Bank and the Hong Kong Monetary Authority.",
    featured: true,
  },
  {
    num: "02",
    title: "DREX: a Revolução do Real e do Sistema Financeiro Nacional",
    venue: "Blocknews Opinião",
    date: "2023 · Nov",
    url: "https://www.blocknews.com.br/opiniao/drex-a-revolucao-do-real-e-do-sistema-financeiro-nacional-pelo-banco-central",
    category: "DREX",
    summary: "Opinion piece on how DREX — Brazil's Digital Real — represents a structural revolution in the national financial system, beyond just a digital currency.",
    featured: true,
  },
  {
    num: "03",
    title: "Blockchain por Bancos é um Caminho Sem Volta",
    venue: "Exame",
    date: "2024 · Oct",
    url: "https://exame.com/future-of-money/blockchain-por-bancos-e-um-caminho-sem-volta-vai-revolucionar-mercado-diz-inter",
    category: "Digital Assets",
    summary: "Why blockchain adoption by major financial institutions is irreversible — and what it means for the future of markets, settlement, and financial infrastructure.",
    featured: true,
  },
];
