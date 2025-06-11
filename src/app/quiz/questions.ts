export type Character =
  | "ElkinaRei" | "Thalris" | "Raiat" | "Astrid"
  | "Flama" | "Yara" | "Andrômeda" | "Alaz"
  | "Nebulosa" | "Lipa" | "Peynir" | "Togur";

export type Option = {
  text: string;
  points: Partial<Record<Character, number>>;
};

export type Question = {
  question: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    question: "Qual dessas qualidades você mais se identifica?",
    options: [
      { text: "Coragem e liderança", points: { ElkinaRei: 2, Flama: 1, Raiat: 1 } },
      { text: "Sabedoria e mistério", points: { Thalris: 2, Nebulosa: 1, Yara: 1 } },
      { text: "Energia e criatividade", points: { Andrômeda: 2, Lipa: 1, Alaz: 1 } },
      { text: "Força e presença", points: { Peynir: 2, Togur: 1, ElkinaRei: 1 } },
    ],
  },
  {
    question: "O que você prefere fazer em seu tempo livre?",
    options: [
      { text: "Treinar ou explorar", points: { Raiat: 2, ElkinaRei: 1, Thalris: 1 } },
      { text: "Estudar, ler ou observar", points: { Astrid: 2, Yara: 1, Nebulosa: 1 } },
      { text: "Criar, compor ou imaginar", points: { Andrômeda: 2, Lipa: 1, Alaz: 1 } },
      { text: "Meditar ou planejar", points: { Peynir: 2, Flama: 1, Togur: 1 } },
    ],
  },
  {
    question: "Qual ambiente mais te inspira?",
    options: [
      { text: "Montanhas e florestas", points: { ElkinaRei: 2, Togur: 1, Raiat: 1 } },
      { text: "Cavernas misteriosas", points: { Thalris: 2, Nebulosa: 1, Peynir: 1 } },
      { text: "Laboratórios e oficinas", points: { Andrômeda: 2, Lipa: 1, Alaz: 1 } },
      { text: "Praias e oceanos", points: { Yara: 2, Astrid: 1, Flama: 1 } },
    ],
  },
  {
    question: "Como você lida com desafios?",
    options: [
      { text: "Com força e atitude", points: { ElkinaRei: 2, Raiat: 1, Togur: 1 } },
      { text: "Com estratégia e frieza", points: { Peynir: 2, Nebulosa: 1, Thalris: 1 } },
      { text: "Com criatividade e flexibilidade", points: { Lipa: 2, Andrômeda: 1, Alaz: 1 } },
      { text: "Com empatia e calma", points: { Yara: 2, Astrid: 1, Flama: 1 } },
    ],
  },
  {
    question: "Qual destes poderes você gostaria de ter?",
    options: [
      { text: "Transformação e força física", points: { ElkinaRei: 2, Togur: 1, Raiat: 1 } },
      { text: "Domínio da sombra e ilusão", points: { Nebulosa: 2, Peynir: 1, Thalris: 1 } },
      { text: "Manipulação de som e arte", points: { Lipa: 2, Andrômeda: 1, Alaz: 1 } },
      { text: "Conexão com a natureza", points: { Yara: 2, Astrid: 1, Flama: 1 } },
    ],
  },
  {
    question: "Como seus amigos te descreveriam?",
    options: [
      { text: "Protetor e determinado", points: { ElkinaRei: 2, Flama: 1, Raiat: 1 } },
      { text: "Misterioso e sábio", points: { Thalris: 2, Nebulosa: 1, Peynir: 1 } },
      { text: "Engraçado e criativo", points: { Andrômeda: 2, Lipa: 1, Alaz: 1 } },
      { text: "Doce e intuitivo", points: { Yara: 2, Astrid: 1, Flama: 1 } },
    ],
  },
  {
    question: "Escolha um instrumento mágico:",
    options: [
      { text: "Harpa etérea", points: { ElkinaRei: 2, Astrid: 1, Andrômeda: 1 } },
      { text: "Tambor flamejante", points: { Flama: 2, Raiat: 1, Togur: 1 } },
      { text: "Violino das pétalas", points: { Astrid: 2, Yara: 1, Lipa: 1 } },
      { text: "Baixo de ossos", points: { Peynir: 2, Nebulosa: 1, Alaz: 1 } },
    ],
  },
  {
    question: "O que te motiva em uma aventura?",
    options: [
      { text: "Lutar por justiça", points: { ElkinaRei: 2, Raiat: 1, Flama: 1 } },
      { text: "Buscar conhecimento", points: { Thalris: 2, Astrid: 1, Nebulosa: 1 } },
      { text: "Criar novas possibilidades", points: { Lipa: 2, Andrômeda: 1, Alaz: 1 } },
      { text: "Conectar com o mundo", points: { Yara: 2, Togur: 1, Peynir: 1 } },
    ],
  },
];
