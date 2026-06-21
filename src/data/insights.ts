export type InsightCategory = "DREX" | "CBDCs" | "Stablecoins" | "Tokenization" | "AI" | "Quantum";

export type Insight = {
  title: string;
  category: InsightCategory;
  date: string;
  body: string;
  tags: string[];
};

export const insights: Insight[] = [
  {
    title: "DREX is not just a CBDC. It's a programmable settlement layer.",
    category: "DREX",
    date: "2025 · Mar",
    body: "Most coverage of DREX focuses on the retail angle — a digital real in citizens' hands. That's the wrong frame. The more interesting story is wholesale: DREX as a shared settlement infrastructure that enables atomic delivery-versus-payment between regulated institutions, removes correspondent banking from domestic transactions, and creates the foundation for programmable money in Brazil's financial system.",
    tags: ["DREX", "Settlement", "Programmable Money"],
  },
  {
    title: "The Harvest Now, Decrypt Later threat is already happening.",
    category: "Quantum",
    date: "2025 · Feb",
    body: "Adversaries are already collecting encrypted financial communications today, with the intent to decrypt them when sufficiently powerful quantum computers become available. This is not a 2035 problem. The data being harvested today — transaction records, client credentials, settlement confirmations — has long-term sensitivity. Financial institutions that wait for the quantum threat to materialize will find their historical data already compromised.",
    tags: ["Quantum", "HNDL", "Cryptography"],
  },
  {
    title: "Why tokenization is not DeFi for banks.",
    category: "Tokenization",
    date: "2025 · Jan",
    body: "There is a persistent confusion between tokenization and DeFi. They overlap technically but diverge completely in their regulatory assumptions. Tokenization of real-world assets inside regulated institutions is about using blockchain infrastructure to improve settlement efficiency, reduce operational risk, and create new liquidity mechanisms for existing asset classes. It is not about disintermediation. Banks that approach tokenization through the DeFi lens will design the wrong product.",
    tags: ["Tokenization", "RWA", "Regulation"],
  },
  {
    title: "AI governance in financial services will be the defining regulatory challenge of the decade.",
    category: "AI",
    date: "2024 · Dec",
    body: "Model risk management frameworks were designed for deterministic models. Large language models and generative AI introduce non-determinism, emergent behavior, and opacity at a scale that existing frameworks cannot handle. The institutions that build robust AI governance now — before regulators mandate it — will have a structural advantage in deploying AI at scale.",
    tags: ["AI", "Governance", "Regulation"],
  },
  {
    title: "Stablecoins and CBDCs are not competitors. They're layers.",
    category: "Stablecoins",
    date: "2024 · Nov",
    body: "The debate framing stablecoins and CBDCs as competing is wrong. In a mature digital currency ecosystem, CBDCs will be the settlement layer — final, sovereign, risk-free — and stablecoins will be the application layer, offering programmability and flexibility for specific use cases. The question is not which wins. The question is which institution builds the best bridge between them.",
    tags: ["Stablecoins", "CBDCs", "Architecture"],
  },
  {
    title: "The interoperability problem is the only problem that matters in digital assets.",
    category: "CBDCs",
    date: "2024 · Oct",
    body: "We now have dozens of tokenization platforms, multiple CBDC pilots across jurisdictions, and a growing number of private blockchain networks inside financial institutions. None of them talk to each other efficiently. The value of digital financial infrastructure scales with its interoperability. The institutions and standards bodies that solve cross-chain, cross-jurisdiction settlement will define the architecture of global finance for decades.",
    tags: ["Interoperability", "CBDCs", "Standards"],
  },
];
