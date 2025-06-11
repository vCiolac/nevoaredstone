import type { Character } from "./questions";

export type PersonagemData = {
  nome: string;
  descricao: string;
  imagem: string;
  icone: string;
};

export const personagens: Record<Character, PersonagemData> = {
  ElkinaRei: {
    nome: "ElkinaRei",
    descricao: "Guardião da justiça e da coragem. Sua harpa etérea ecoa nos vales da Névoa.",
    imagem: "/images/personagens/elkinarei.jpeg",
    icone: "/images/personagens/icons/elkinarei-icon.jpeg"
  },
  Thalris: {
    nome: "Thalris",
    descricao: "Silencioso e enigmático, domina as sombras com sabedoria ancestral.",
    imagem: "/images/personagens/thalris.jpeg",
    icone: "/images/personagens/icons/thalris-icon.jpeg"
  },
  Raiat: {
    nome: "Raiat",
    descricao: "Tempestade viva, com a guitarra elétrica mais rápida do reino.",
    imagem: "/images/personagens/raiat.jpeg",
    icone: "/images/personagens/icons/raiat-icon.jpeg"
  },
  Astrid: {
    nome: "Astrid",
    descricao: "Violinista psíquica com conexão profunda às pétalas e aos segredos.",
    imagem: "/images/personagens/astrid.jpeg",
    icone: "/images/personagens/icons/astrid-icon.jpeg"
  },
  Flama: {
    nome: "Flama",
    descricao: "Chamas dançam com seus tambores. Um espírito ardente e protetor.",
    imagem: "/images/personagens/flama.jpeg",
    icone: "/images/personagens/icons/flama-icon.jpeg"
  },
  Yara: {
    nome: "Yara",
    descricao: "Voz das marés. A concha ressonante em suas mãos revela a verdade.",
    imagem: "/images/personagens/yara.jpeg",
    icone: "/images/personagens/icons/yara-icon.jpeg"
  },
  Andrômeda: {
    nome: "Andrômeda",
    descricao: "Inventora cósmica. Os sinos Kodan vibram com suas ideias criativas.",
    imagem: "/images/personagens/andromeda.jpeg",
    icone: "/images/personagens/icons/andromeda-icon.jpeg"
  },
  Alaz: {
    nome: "Alaz",
    descricao: "Guerreiro tribal, une força e tradição no som do berimbau encantado.",
    imagem: "/images/personagens/alaz.jpeg",
    icone: "/images/personagens/icons/alaz-icon.jpeg"
  },
  Nebulosa: {
    nome: "Nebulosa",
    descricao: "Guardião das sombras móveis. Seus passos são silêncio e mistério.",
    imagem: "/images/personagens/nebulosa.jpeg",
    icone: "/images/personagens/icons/nebulosa-icon.jpeg"
  },
  Lipa: {
    nome: "Lipa",
    descricao: "Cientista das poções sonoras. Cada tecla é uma descoberta mágica.",
    imagem: "/images/personagens/lipa.jpeg",
    icone: "/images/personagens/icons/lipa-icon.jpeg"
  },
  Peynir: {
    nome: "Peynir",
    descricao: "Vampiro mascarado. Carrega o peso de uma história de dor e poder.",
    imagem: "/images/personagens/peynir.jpeg",
    icone: "/images/personagens/icons/peynir-icon.jpeg"
  },
  Togur: {
    nome: "Togur",
    descricao: "Gigante da terra, sua tuba de rocha ressoa nos confins do mundo.",
    imagem: "/images/personagens/togur.jpeg",
    icone: "/images/personagens/icons/togur-icon.jpeg"
  },
};
