export type Article = {
  num: string;
  title: string;
  venue: string;
  date: string;
  url: string;
  image: string;
};

export const articles: Article[] = [
  {
    num: "01",
    title: "DREX and the future of programmable money in Brazil",
    venue: "Valor Econômico",
    date: "2025 · Mar",
    url: "https://valor.globo.com",
    image: "/articles/drex.jpg",
  },
  {
    num: "02",
    title: "Tokenization of real-world assets: where institutions are betting",
    venue: "Fintech Brasil",
    date: "2025 · Jan",
    url: "https://fintechbrasil.com.br",
    image: "/articles/tokenization.jpg",
  },
  {
    num: "03",
    title: "Post-quantum cryptography: why financial institutions can't wait",
    venue: "MIT Technology Review Brasil",
    date: "2024 · Nov",
    url: "https://technologyreview.com",
    image: "/articles/pqc.jpg",
  },
];
