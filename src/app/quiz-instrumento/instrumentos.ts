import type { Character } from "./questions";

export type InstrumentoData = {
  nome: string;
  descricao: string;
  imagem: string;
};

export const instrumentos: Record<Character, InstrumentoData> = {
  ElkinaRei: {
    nome: "Harpa Eterna",
    descricao:
      "A harpa etérea tocada por ElkinaRei vibra com justiça e coragem.",
    imagem: "/images/personagens/elkinarei.jpeg",
  },
  Thalris: {
    nome: "Flauta Sombria",
    descricao:
      "A melodia sibilante de Thalris ecoa nas profundezas das sombras.",
    imagem: "/images/personagens/thalris.jpeg",
  },
  Raiat: {
    nome: "Guitarra Tempestuosa",
    descricao:
      "A guitarra elétrica mais rápida do reino, carregada de relâmpagos.",
    imagem: "/images/personagens/raiat.jpeg",
  },
  Astrid: {
    nome: "Violino Psíquico",
    descricao:
      "Cordas que ressoam com energia mental e as pétalas do destino.",
    imagem: "/images/personagens/astrid.jpeg",
  },
  Flama: {
    nome: "Tambores Flamejantes",
    descricao: "Ritmos quentes que inflamam o coração dos protetores.",
    imagem: "/images/personagens/flama.jpeg",
  },
  Yara: {
    nome: "Concha Ressonante",
    descricao: "Ecoa as marés e revela verdades submersas.",
    imagem: "/images/personagens/yara.jpeg",
  },
  Andrômeda: {
    nome: "Sinos Kodan",
    descricao: "Sinos cósmicos que vibram com ideias criativas.",
    imagem: "/images/personagens/andromeda.jpeg",
  },
  Alaz: {
    nome: "Berimbau Encantado",
    descricao: "Força e tradição se unem em cada toque tribal.",
    imagem: "/images/personagens/alaz.jpeg",
  },
  Nebulosa: {
    nome: "Pandeiro Sussurrante",
    descricao:
      "Percussão discreta que conduz passos silenciosos na escuridão.",
    imagem: "/images/personagens/nebulosa.jpeg",
  },
  Lipa: {
    nome: "Teclado Alquímico",
    descricao:
      "Cada tecla é uma poção sonora repleta de descobertas mágicas.",
    imagem: "/images/personagens/lipa.jpeg",
  },
  Peynir: {
    nome: "Baixo Vampírico",
    descricao: "Notas profundas que carregam dor e poder ancestral.",
    imagem: "/images/personagens/peynir.jpeg",
  },
  Togur: {
    nome: "Tuba de Rocha",
    descricao:
      "Instrumento pesado que ressoa das profundezas da própria terra.",
    imagem: "/images/personagens/togur.jpeg",
  },
};
