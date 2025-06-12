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
  };
};

export type Question = {
  id: number;
  orakAsk: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    "id": 0,
    "orakAsk": "Hm... diga-me, viajante, qual dessas qualidades pulsa mais forte em seu espírito?",
    "options": [
      {
        "text": "Coragem e liderança",
        "points": {
          "ElkinaRei": 2,
          "Flama": 1,
          "Raiat": 1
        },
        "orakReaction": {
          "expression": "happy",
          "phrase": "Ah, bravo e justo! O mundo precisa de corações destemidos como o seu!"
        }
      },
      {
        "text": "Sabedoria e mistério",
        "points": {
          "Thalris": 2,
          "Nebulosa": 1,
          "Yara": 1
        },
        "orakReaction": {
          "expression": "thoughtful",
          "phrase": "Vejo que as sombras e os segredos lhe atraem... há profundezas aí."
        }
      },
      {
        "text": "Energia e criatividade",
        "points": {
          "Andrômeda": 2,
          "Lipa": 1,
          "Alaz": 1
        },
        "orakReaction": {
          "expression": "happy",
          "phrase": "Oh! A centelha criativa brilha em seus olhos!"
        }
      },
      {
        "text": "Força e presença",
        "points": {
          "Peynir": 2,
          "Togur": 1,
          "ElkinaRei": 1
        },
        "orakReaction": {
          "expression": "angry",
          "phrase": "Força sem direção vira destruição... cuidado com o que carrega."
        }
      }
    ]
  },
  {
    "id": 1,
    "orakAsk": "Se você pudesse escolher um lugar para explorar, qual seria?",
    "options": [
      {
        "text": "Uma floresta mágica cheia de criaturas misteriosas",
        "points": {
          "Yara": 2,
          "Nebulosa": 1,
          "Thalris": 1
        },
        "orakReaction": {
          "expression": "intrigued",
          "phrase": "A natureza guarda segredos antigos para quem sabe ouvir..."
        }
      },
      {
        "text": "Uma cidade flutuante repleta de invenções e luzes",
        "points": {
          "Andrômeda": 2,
          "Lipa": 1,
          "Alaz": 1
        },
        "orakReaction": {
          "expression": "happy",
          "phrase": "Ah, a inovação e a criatividade elevam o espírito!"
        }
      },
      {
        "text": "Um castelo antigo onde lendas ganham vida",
        "points": {
          "ElkinaRei": 2,
          "Astrid": 1,
          "Flama": 1
        },
        "orakReaction": {
          "expression": "thoughtful",
          "phrase": "Lugares antigos ecoam verdades esquecidas..."
        }
      },
      {
        "text": "Uma montanha gelada e desafiadora",
        "points": {
          "Togur": 2,
          "Peynir": 1,
          "Raiat": 1
        },
        "orakReaction": {
          "expression": "sad",
          "phrase": "Nem todo desafio é fácil, mas cada passo fortalece a alma."
        }
      }
    ]
  },
  {
    "id": 2,
    "orakAsk": "Qual dessas frases mais combina com você em um momento difícil?",
    "options": [
      {
        "text": "Enfrento de cabeça erguida, não fujo do desafio",
        "points": {
          "Flama": 2,
          "ElkinaRei": 1,
          "Togur": 1
        },
        "orakReaction": {
          "expression": "happy",
          "phrase": "A bravura é uma luz mesmo nas noites mais escuras!"
        }
      },
      {
        "text": "Procuro entender e aprender com a situação",
        "points": {
          "Thalris": 2,
          "Nebulosa": 1,
          "Yara": 1
        },
        "orakReaction": {
          "expression": "thoughtful",
          "phrase": "Sabedoria é o melhor escudo contra a adversidade."
        }
      },
      {
        "text": "Transformo o problema em algo novo e criativo",
        "points": {
          "Andrômeda": 2,
          "Lipa": 1,
          "Alaz": 1
        },
        "orakReaction": {
          "expression": "happy",
          "phrase": "Criatividade é magia em ação!"
        }
      },
      {
        "text": "Resisto com força e protejo quem está comigo",
        "points": {
          "Peynir": 2,
          "Raiat": 1,
          "Astrid": 1
        },
        "orakReaction": {
          "expression": "angry",
          "phrase": "Proteger com fúria também é amor... mas um amor que arde."
        }
      }
    ]
  }
];

