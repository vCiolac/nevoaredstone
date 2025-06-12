export type OrakReactionType = "happy" | "sad" | "angry" | "thoughtful" | "intrigued";

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
    audioSrc?: string;
  };
};

export type Question = {
  id: number;
  orakAsk: string;
  audioSrc?: string;
  options: Option[];
};

export type InstrumentoData = {
  nome: string;
  descricao: string;
  imagem: string;
};
