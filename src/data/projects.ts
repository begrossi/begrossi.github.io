export type Project = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "DREX Trade Finance",
    category: "Digital Assets · CBDC",
    challenge: "Brazilian exporters and importers faced multi-day settlement cycles and high costs in trade finance operations, relying on legacy correspondent banking rails.",
    solution: "Designed and led the architecture of a tokenized trade finance platform built on DREX — Brazil's CBDC infrastructure. Implemented smart contract-based conditional settlement, replacing manual reconciliation with programmable money.",
    impact: "Reduced settlement from T+2 to near real-time. Eliminated counterparty risk through atomic delivery-versus-payment. Positioned the institution as a DREX pilot reference implementation.",
    tags: ["DREX", "Tokenization", "Smart Contracts", "Trade Finance"],
  },
  {
    title: "Tokenized Receivables Platform",
    category: "Digital Assets · DeFi",
    challenge: "SME receivables lacked liquidity and secondary market access. Traditional securitization was too slow and costly for smaller ticket sizes.",
    solution: "Built a tokenized receivables platform that converts trade receivables into on-chain assets with embedded compliance logic. Integrated with an AMM designed for fixed-income instruments to enable secondary market liquidity.",
    impact: "Enabled fractional ownership of receivables. Created new funding channels for SMEs. Generated yield-bearing on-chain assets accessible to institutional investors in a regulated framework.",
    tags: ["Tokenization", "AMM", "DeFi", "Receivables"],
  },
  {
    title: "Quantum Readiness Program",
    category: "Quantum · Security",
    challenge: "The financial institution's cryptographic infrastructure — PKI, TLS, digital signatures — was entirely based on algorithms vulnerable to Harvest Now, Decrypt Later (HNDL) attacks from future quantum computers.",
    solution: "Led a multi-year quantum readiness program: threat modeling, cryptographic inventory, prioritization of high-risk systems, and implementation of NIST-standardized post-quantum cryptographic algorithms in critical settlement and custody systems.",
    impact: "Institution became one of the first in Latin America to deploy post-quantum cryptography in production financial systems. Program recognized by regulators as a reference model for sector-wide PQC migration.",
    tags: ["Post-Quantum Cryptography", "Risk Management", "Security Architecture"],
  },
];
