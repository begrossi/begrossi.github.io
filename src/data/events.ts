export type Event = {
  num: string;
  name: string;
  role: string;
  location: string;
  date: string;
  url: string;
  image: string;
};

export const events: Event[] = [
  {
    num: "01",
    name: "Brazil Blockchain Summit",
    role: "Keynote",
    location: "São Paulo, BR",
    date: "2025 · May",
    url: "https://brazilblockchainsummit.com",
    image: "/events/bbs2025.jpg",
  },
  {
    num: "02",
    name: "CBDC Forum — Central Bank Innovation",
    role: "Panelist",
    location: "London, UK",
    date: "2025 · Mar",
    url: "https://cbdcforum.com",
    image: "/events/cbdc-london.jpg",
  },
  {
    num: "03",
    name: "Febraban Tech",
    role: "Speaker",
    location: "São Paulo, BR",
    date: "2024 · Jun",
    url: "https://febrabantech.com.br",
    image: "/events/febrabantech.jpg",
  },
  {
    num: "04",
    name: "Consensus",
    role: "Panelist",
    location: "Austin, TX",
    date: "2024 · May",
    url: "https://consensus.coindesk.com",
    image: "/events/consensus.jpg",
  },
];
