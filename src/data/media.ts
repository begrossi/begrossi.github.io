export type MediaItem = {
  date: string;
  publication: string;
  topic: string;
  url: string;
  type: "Interview" | "Quote" | "Feature" | "Podcast" | "Video";
};

export const mediaItems: MediaItem[] = [
  {
    date: "2026 · Mar",
    publication: "BeInCrypto",
    topic: "Central banks and the private sector shaping digital money in LATAM",
    url: "https://beincrypto.com/central-banks-private-sector-digital-money-latam/",
    type: "Feature",
  },

  // DREX × Chainlink — cross-border Brazil–Hong Kong experiment (Nov 2025)
  {
    date: "2025 · Nov",
    publication: "CoinDesk",
    topic: "Banco Inter & Chainlink power real-time CBDC trade settlement between Brazil and Hong Kong",
    url: "https://www.coindesk.com/business/2025/11/01/banco-inter-chainlink-power-real-time-cbdc-trade-settlement-between-brazil-and-hong-kong",
    type: "Feature",
  },
  {
    date: "2025 · Nov",
    publication: "CNN Brasil",
    topic: "Inter e Chainlink concluem primeiro teste de comércio entre BC e Hong Kong",
    url: "https://www.cnnbrasil.com.br/economia/negocios/inter-e-chainlink-concluem-primeiro-teste-de-comercio-entre-bc-e-hong-kong",
    type: "Feature",
  },
  {
    date: "2025 · Nov",
    publication: "The Defiant",
    topic: "Brazil taps Chainlink for cross-border CBDC trade finance pilot",
    url: "https://thedefiant.io/news/tradfi-and-fintech/brazil-taps-chainlink-for-cross-border-cbdc-trade-finance-pilot",
    type: "Feature",
  },
  {
    date: "2025 · Nov",
    publication: "GSBN",
    topic: "First cross-border, cross-chain trade experiment between the Central Bank of Brazil and the Hong Kong Monetary Authority",
    url: "https://gsbn.trade/banco-inter-and-chainlink-complete-first-cross-border-cross-chain-trade-experiment-between-the-central-bank-of-brazil-and-the-hong-kong-monetary-authority",
    type: "Feature",
  },

  // Quantum Computing — Inter × UFMG partnership (Mar 2025)
  {
    date: "2025 · Mar",
    publication: "O Tempo",
    topic: "Banco Inter anuncia parceria com UFMG para apoiar projetos de computação quântica",
    url: "https://www.otempo.com.br/economia/2025/3/5/banco-inter-anuncia-parceria-com-ufmg-para-apoiar-projetos-de-computacao-quantica",
    type: "Feature",
  },
  {
    date: "2025 · Mar",
    publication: "UFMG DCC",
    topic: "Inter e DCC/UFMG anunciam parceria para impulsionar inovação com projetos de computação quântica",
    url: "https://dcc.ufmg.br/inter-e-dcc-ufmg-anunciam-parceria-para-impulsionar-inovacao-com-projetos-de-computacao-quantica",
    type: "Feature",
  },
  {
    date: "2025 · Mar",
    publication: "NeoFeed",
    topic: "Inter Science: hub de tecnologias emergentes e pesquisa aplicada",
    url: "https://neofeed.com.br/negocios/inter-leva-o-banco-para-o-laboratorio-e-abre-hub-para-tecnologias-emergentes",
    type: "Feature",
  },

  // Stablecoins
  {
    date: "2025 · Jan",
    publication: "Exame",
    topic: "Stablecoins vêm para complementar o Pix, afirma head de ativos digitais do Inter",
    url: "https://exame.com/future-of-money/stablecoins-vem-para-complementar-o-pix-afirma-head-de-ativos-digitais-do-inter",
    type: "Interview",
  },

  // Podcast
  {
    date: "2024 · Nov",
    publication: "Brazil Crypto Report",
    topic: "DREX, CBDCs and digital financial infrastructure — live from Merge Buenos Aires",
    url: "https://brazilcrypto.substack.com/p/episode-146-live-from-merge-buenos",
    type: "Podcast",
  },

  // DREX × Chainlink — consortium announcement (Nov 2024)
  {
    date: "2024 · Nov",
    publication: "PR Newswire",
    topic: "Chainlink joins Banco Inter, Microsoft and 7COMm consortium for DREX pilot phase 2",
    url: "https://www.prnewswire.com/news-releases/chainlink-joins-banco-inter-microsoft-and-7comm-consortium-to-support-trade-finance-use-case-in-phase-2-of-drex-pilot-302309772.html",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "FF News",
    topic: "Chainlink joins Banco Inter, Microsoft and 7COMm for DREX trade finance use case",
    url: "https://ffnews.com/newsarticle/cryptocurrency/chainlink-joins-banco-inter-microsoft-and-7comm-consortium-to-support-trade-finance-use-case-in-phase-2-of-drex-pilot",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "Yahoo Finance",
    topic: "Chainlink joins Banco Inter and Microsoft for DREX pilot phase 2",
    url: "https://finance.yahoo.com/news/chainlink-joins-banco-inter-microsoft-140000759.html",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "Cointelegraph Brasil",
    topic: "Chainlink joins Banco Inter and Microsoft in DREX cross-border payments and tokenization project",
    url: "https://br.cointelegraph.com/news/chainlink-joins-banco-inter-and-microsoft-in-drex-cross-border-payments-and-tokenization-project",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "Cryptonomist",
    topic: "CBDC pilot in Brazil advances — new collaborations with Chainlink, Microsoft and Banco Inter",
    url: "https://en.cryptonomist.ch/2024/11/19/the-pilot-project-of-the-cbdc-in-brazil-advances-new-collaborations-with-chainlink-microsoft-and-banco-inter",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "Crypto Briefing",
    topic: "Chainlink DREX CBDC pilot in Brazil — interoperability and tokenization",
    url: "https://cryptobriefing.com/chainlink-drex-cbdc-pilot-brazil",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "Global Government Fintech",
    topic: "Brazil CBDC trade finance pilot — DREX use case with Chainlink",
    url: "https://www.globalgovernmentfintech.com/brazil-cbdc-trade-finance-pilot",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "Blocknews",
    topic: "Chainlink entra no consórcio do Inter no piloto do DREX para teste com Hong Kong",
    url: "https://www.blocknews.com.br/regulacao-governos/chainlink-entra-no-consorcio-do-inter-no-piloto-do-drex-para-teste-de-operacoes-com-hong-kong",
    type: "Feature",
  },
  {
    date: "2024 · Nov",
    publication: "Binance Square",
    topic: "DREX: Inter, Chainlink e Microsoft — consórcio para a fase 2 do piloto",
    url: "https://www.binance.com/en/square/post/16452713371658",
    type: "Feature",
  },

  // Digital Assets — blockchain adoption by banks (Oct 2024)
  {
    date: "2024 · Oct",
    publication: "Exame",
    topic: "Blockchain por bancos é um caminho sem volta — vai revolucionar o mercado, diz Inter",
    url: "https://exame.com/future-of-money/blockchain-por-bancos-e-um-caminho-sem-volta-vai-revolucionar-mercado-diz-inter",
    type: "Feature",
  },

  // Videos (YouTube)
  {
    date: "2024 · Sep",
    publication: "Web3 Club",
    topic: "Blockchain e ativos digitais — entrevista",
    url: "https://www.youtube.com/watch?v=e7ek3K9VrjI",
    type: "Video",
  },
  {
    date: "2024 · Sep",
    publication: "TudoCelular",
    topic: "DREX: Inter recebe aval para criar três projetos na fase 2",
    url: "https://www.tudocelular.com/mercado/noticias/n225865/drex-inter-recebe-aval-para-criar-tres-projetos.html",
    type: "Feature",
  },
  {
    date: "2024 · Jul",
    publication: "Chainlink",
    topic: "CBDCs, interoperability, and tokenization — international panel",
    url: "https://www.youtube.com/watch?v=jvOdrnz7OUY",
    type: "Video",
  },
  {
    date: "2024 · Jun",
    publication: "InfoMoney",
    topic: "Ativos digitais, blockchain e sistema financeiro — entrevista",
    url: "https://www.youtube.com/watch?v=0S_zOUwGQ54",
    type: "Video",
  },
  {
    date: "2024 · Mar",
    publication: "YouTube",
    topic: "Blockchain, DREX e transformação financeira — painel",
    url: "https://www.youtube.com/watch?v=kKoy86Cuv8E",
    type: "Video",
  },
  {
    date: "2024 · Feb",
    publication: "CNN Brasil Economia",
    topic: "DREX e moedas digitais — participação em painel",
    url: "https://www.youtube.com/watch?v=l8cVR62d2qc",
    type: "Video",
  },

  // DREX pilot — first operations (Sep–Oct 2023)
  {
    date: "2023 · Oct",
    publication: "Valor Econômico",
    topic: "TecBan faz primeira emissão e transferência no piloto do Real Digital",
    url: "https://valor.globo.com/financas/criptomoedas/noticia/2023/10/31/tecban-faz-primeira-emisso-e-transferncia-no-piloto-do-real-digital.ghtml",
    type: "Feature",
  },
  {
    date: "2023 · Oct",
    publication: "Sinqia",
    topic: "Avanços no DREX — resumo do piloto",
    url: "https://sinqia.com.br/2023/10/09/avancos-no-drex",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "O Globo",
    topic: "Bradesco faz primeira transferência com DREX — operação simultânea com Caixa e Inter",
    url: "https://oglobo.globo.com/economia/noticia/2023/09/07/bradesco-faz-primeira-transferencia-com-drex-o-real-digital-operacao-foi-simultanea-com-caixa-e-inter.ghtml",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "CNN Brasil",
    topic: "Inter e Caixa fazem primeira transferência entre banco público e privado usando DREX",
    url: "https://www.cnnbrasil.com.br/economia/inter-e-caixa-fazem-primeira-transferencia-entre-bancos-publico-e-privado-usando-drex",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "Cointelegraph Brasil",
    topic: "Bradesco makes first simultaneous DREX transfer with Caixa and Inter",
    url: "https://br.cointelegraph.com/news/bradesco-makes-the-first-simultaneous-transfer-of-drex-with-more-than-one-bank-caixa-and-inter",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "Valor Econômico",
    topic: "Real Digital tem primeiras transações de títulos públicos entre bancos",
    url: "https://valor.globo.com/financas/criptomoedas/noticia/2023/09/15/real-digital-tem-primeiras-transaes-de-ttulos-pblicos-entre-bancos.ghtml",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "InfoMoney",
    topic: "Caixa e BB fazem 1ª transferência via DREX por bancos públicos",
    url: "https://www.infomoney.com.br/minhas-financas/caixa-e-bb-fazem-1a-transferencia-via-drex-por-bancos-publicos",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "G1",
    topic: "DREX vai facilitar comércio exterior e compra de imóveis, avalia BC",
    url: "https://g1.globo.com/economia/noticia/2023/09/25/drex-moeda-digital-facilitara-comercio-exterior-e-podera-ser-solucao-para-compra-de-imoveis-avalia-bc.ghtml",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "Diário do Comércio",
    topic: "Real Digital chega para facilitar relação com o sistema financeiro",
    url: "https://diariodocomercio.com.br/financas/real-digital-chega-para-facilitar-relacao-com-sistema-financeiro",
    type: "Feature",
  },
  {
    date: "2023 · Sep",
    publication: "Exame",
    topic: "DREX vai impactar empregos e criar oportunidades de trabalho",
    url: "https://exame.com/future-of-money/drex-impactar-empregos-criar-portunidades-trabalho",
    type: "Quote",
  },
  {
    date: "2023 · Sep",
    publication: "Blocknews",
    topic: "DREX será revolucionário como foi a criação do sistema brasileiro de pagamentos",
    url: "https://www.blocknews.com.br/governos/drex-sera-revolucionario-como-foi-criacao-do-sistema-brasileiro-de-pagamentos",
    type: "Quote",
  },

  // Videos (2023)
  {
    date: "2023 · Dec",
    publication: "YouTube",
    topic: "DREX — entrevista e análise",
    url: "https://www.youtube.com/watch?v=9oQskLwaONY",
    type: "Video",
  },
  {
    date: "2023 · Nov",
    publication: "YouTube",
    topic: "Blockchain e sistema financeiro — participação em painel",
    url: "https://www.youtube.com/watch?v=FJQbnKNPVv0",
    type: "Video",
  },
];
