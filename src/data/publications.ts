export type Publication = {
  title: string;
  venue: string;
  date: string;
  url: string;
  abstract: string;
  category: string;
};

export const publications: Publication[] = [
  {
    title: "Post-Quantum Cryptography for DREX: Threat Models and Migration Strategies for Brazil's CBDC",
    venue: "Banco Central do Brasil / UFMG",
    date: "2024",
    url: "#",
    abstract: "Analysis of quantum computing threats to the cryptographic infrastructure underpinning DREX, with a proposed migration roadmap for regulated financial institutions in Brazil.",
    category: "Quantum / CBDC",
  },
  {
    title: "Tokenization of Real-World Assets in Regulated Markets: Lessons from Brazilian Trade Finance",
    venue: "Febraban Technical Series",
    date: "2024",
    url: "#",
    abstract: "Case study on the design and deployment of tokenized trade finance instruments within Brazil's regulatory framework. Covers smart contract architecture, custody, and interoperability with DREX.",
    category: "Digital Assets",
  },
  {
    title: "AMM Design for Fixed Income: Automated Market Making Applied to Tokenized Government Bonds",
    venue: "UFMG — MSc Computer Science",
    date: "2023",
    url: "#",
    abstract: "Research into automated market maker (AMM) mechanisms adapted for low-liquidity, regulated fixed income markets. Proposes a hybrid model combining CLOB and constant-function market makers.",
    category: "Digital Assets / Research",
  },
  {
    title: "Developer Experience as a Strategic Asset: Building Internal Platform Teams in Financial Institutions",
    venue: "IEEE Software",
    date: "2022",
    url: "#",
    abstract: "Framework for measuring and improving developer experience inside enterprise-scale financial institutions. Covers platform engineering, internal tooling strategy, and productivity metrics.",
    category: "Technology Leadership",
  },
];
