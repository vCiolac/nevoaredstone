export type OrakReactionType = "normal" | "happy" | "sad";

export type Character =
  | "ElkinaRei" | "Thalris" | "Raiat" | "Astrid"
  | "Flama" | "Yara" | "Andrômeda" | "Alaz"
  | "Nebulosa" | "Lipa" | "Peynir" | "Togur";

export type Option = {
  text: string;
  points: Partial<Record<Character, number>>;
  orakReaction: {
    expression: OrakReactionType;
    phrase: string;
  };
};

export type Question = {
  orakAsk: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    orakAsk: "Hm... diga-me, viajante, qual dessas qualidades pulsa mais forte em seu espírito?",
    options: [
      {
        text: "Coragem e liderança",
        points: { ElkinaRei: 2, Flama: 1, Raiat: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Ah, bravo e justo! O mundo precisa de corações destemidos como o seu!",
        },
      },
      {
        text: "Sabedoria e mistério",
        points: { Thalris: 2, Nebulosa: 1, Yara: 1 },
        orakReaction: {
          expression: "normal",
          phrase: "Vejo que as sombras e os segredos lhe atraem... intrigante.",
        },
      },
      {
        text: "Energia e criatividade",
        points: { Andrômeda: 2, Lipa: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Oh! A centelha criativa brilha em seus olhos!",
        },
      },
      {
        text: "Força e presença",
        points: { Peynir: 2, Togur: 1, ElkinaRei: 1 },
        orakReaction: {
          expression: "sad",
          phrase: "Força sem direção pode virar fúria... mas confio em sua sabedoria.",
        },
      },
    ],
  },
];

