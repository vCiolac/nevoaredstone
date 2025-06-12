import { Question } from "@/types/types";

export const characterQuestions: Question[] = [
  {
    id: 0,
    orakAsk: "Hm... diga-me, viajante, qual dessas qualidades pulsa mais forte em seu espírito?",
    audioSrc: "/sounds/perguntas/P1.mp3",
    options: [
      {
        text: "Coragem e liderança",
        points: { ElkinaRei: 2, Flama: 1, Raiat: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Ah, bravo e justo! O mundo precisa de corações destemidos como o seu!",
          audioSrc: "/sounds/reacoes/P1-1.mp3"
        }
      },
      {
        text: "Sabedoria e mistério",
        points: { Thalris: 2, Nebulosa: 1, Yara: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Vejo que as sombras e os segredos lhe atraem... há profundezas aí.",
          audioSrc: "/sounds/reacoes/P1-2.mp3"
        }
      },
      {
        text: "Energia e criatividade",
        points: { Andrômeda: 2, Lipa: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Oh! A centelha criativa brilha em seus olhos!",
          audioSrc: "/sounds/reacoes/P1-3.mp3"
        }
      },
      {
        text: "Força e presença",
        points: { Peynir: 2, Togur: 1, ElkinaRei: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Força sem direção vira destruição... cuidado com o que carrega.",
          audioSrc: "/sounds/reacoes/P1-4.mp3"
        }
      }
    ]
  },
  {
    id: 1,
    orakAsk: "Se você pudesse escolher um lugar para explorar, qual seria?",
    audioSrc: "/sounds/perguntas/P2.mp3",
    options: [
      {
        text: "Uma floresta mágica cheia de criaturas misteriosas",
        points: { Yara: 2, Nebulosa: 1, Thalris: 1 },
        orakReaction: {
          expression: "intrigued",
          phrase: "A natureza guarda segredos antigos para quem sabe ouvir...",
          audioSrc: "/sounds/reacoes/P2-1.mp3"
        }
      },
      {
        text: "Uma cidade flutuante repleta de invenções e luzes",
        points: { Andrômeda: 2, Lipa: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Ah, a inovação e a criatividade elevam o espírito!",
          audioSrc: "/sounds/reacoes/P2-2.mp3"
        }
      },
      {
        text: "Um castelo antigo onde lendas ganham vida",
        points: { ElkinaRei: 2, Astrid: 1, Flama: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Lugares antigos ecoam verdades esquecidas...",
          audioSrc: "/sounds/reacoes/P2-3.mp3"
        }
      },
      {
        text: "Uma montanha gelada e desafiadora",
        points: { Togur: 2, Peynir: 1, Raiat: 1 },
        orakReaction: {
          expression: "sad",
          phrase: "Nem todo desafio é fácil, mas cada passo fortalece a alma.",
          audioSrc: "/sounds/reacoes/P2-4.mp3"
        }
      }
    ]
  },
  {
    id: 2,
    orakAsk: "Qual dessas frases mais combina com você em um momento difícil?",
    audioSrc: "/sounds/perguntas/P3.mp3",
    options: [
      {
        text: "Enfrento de cabeça erguida, não fujo do desafio",
        points: { Flama: 2, ElkinaRei: 1, Togur: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "A bravura é uma luz mesmo nas noites mais escuras!",
          audioSrc: "/sounds/reacoes/P3-1.mp3"
        }
      },
      {
        text: "Procuro entender e aprender com a situação",
        points: { Thalris: 2, Nebulosa: 1, Yara: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Sabedoria é o melhor escudo contra a adversidade.",
          audioSrc: "/sounds/reacoes/P3-2.mp3"
        }
      },
      {
        text: "Transformo o problema em algo novo e criativo",
        points: { Andrômeda: 2, Lipa: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Criatividade é magia em ação!",
          audioSrc: "/sounds/reacoes/P3-3.mp3"
        }
      },
      {
        text: "Resisto com força e protejo quem está comigo",
        points: { Peynir: 2, Raiat: 1, Astrid: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Proteger com fúria também é amor... mas um amor que arde.",
          audioSrc: "/sounds/reacoes/P3-4.mp3"
        }
      }
    ]
  },
  {
    id: 3,
    orakAsk: "Diante de uma escolha difícil, o que você costuma seguir?",
    audioSrc: "/sounds/perguntas/P4.mp3",
    options: [
      {
        text: "Meu instinto, mesmo que pareça arriscado",
        points: { Raiat: 2, Flama: 1, Togur: 1 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Instinto é a bússola daqueles que confiam na própria essência.",
          audioSrc: "/sounds/reacoes/P4-1.mp3"
        }
      },
      {
        text: "Minha lógica, sempre buscando o caminho mais seguro",
        points: { Thalris: 2, Nebulosa: 1, Astrid: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Pensar antes de agir é a arma dos sábios... e dos sobreviventes.",
          audioSrc: "/sounds/reacoes/P4-2.mp3"
        }
      },
      {
        text: "Minha vontade de ajudar os outros, mesmo me sacrificando",
        points: { Yara: 2, ElkinaRei: 1, Lipa: 1 },
        orakReaction: {
          expression: "sad",
          phrase: "Corações altruístas brilham... mesmo quando sofrem em silêncio.",
          audioSrc: "/sounds/reacoes/P4-3.mp3"
        }
      },
      {
        text: "O que for mais útil e eficaz no momento",
        points: { Peynir: 2, Alaz: 1, Andrômeda: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Frieza e precisão... às vezes, são necessárias. Mas não sem custo.",
          audioSrc: "/sounds/reacoes/P4-4.mp3"
        }
      }
    ]
  },
  {
    id: 4,
    orakAsk: "Quando você entra em um novo grupo, como costuma se comportar?",
    audioSrc: "/sounds/perguntas/P5.mp3",
    options: [
      {
        text: "Me apresento com confiança e já assumo responsabilidades",
        points: { ElkinaRei: 2, Raiat: 1, Flama: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Ah! Um espírito que não teme a liderança... inspirador!",
          audioSrc: "/sounds/reacoes/P5-1.mp3"
        }
      },
      {
        text: "Observo em silêncio até entender melhor cada pessoa",
        points: { Thalris: 2, Astrid: 1, Nebulosa: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Ouvir antes de falar é a arte dos mais velhos e dos mais sábios.",
          audioSrc: "/sounds/reacoes/P5-2.mp3"
        }
      },
      {
        text: "Tento alegrar o grupo com ideias criativas",
        points: { Alaz: 2, Andrômeda: 1, Lipa: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Um sopro de energia pode transformar até o mais escuro salão!",
          audioSrc: "/sounds/reacoes/P5-3.mp3"
        }
      },
      {
        text: "Fico na retaguarda, pronto para agir se necessário",
        points: { Togur: 2, Peynir: 1, Yara: 1 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Há valor na presença silenciosa... e poder, se for despertada.",
          audioSrc: "/sounds/reacoes/P5-4.mp3"
        }
      }
    ]
  },
  {
    id: 5,
    orakAsk: "Se você fosse um guardião da Névoa, qual seria seu maior desafio?",
    audioSrc: "/sounds/perguntas/P6.mp3",
    options: [
      {
        text: "Manter a paz entre os reinos",
        points: { ElkinaRei: 2, Yara: 1, Thalris: 1 },
        orakReaction: {
          expression: "sad",
          phrase: "A paz é frágil como cristal... e dolorosa de preservar.",
          audioSrc: "/sounds/reacoes/P6-1.mp3"
        }
      },
      {
        text: "Lidar com a corrupção interna e decisões difíceis",
        points: { Peynir: 2, Nebulosa: 1, Raiat: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Corromper a Névoa é tocar o caos... e enfrentá-lo exige firmeza.",
          audioSrc: "/sounds/reacoes/P6-2.mp3"
        }
      },
      {
        text: "Proteger os inocentes a qualquer custo",
        points: { Flama: 2, Astrid: 1, Togur: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Você tem a alma de um escudo. Nobre... e necessária.",
          audioSrc: "/sounds/reacoes/P6-3.mp3"
        }
      },
      {
        text: "Decifrar os segredos esquecidos da magia",
        points: { Andrômeda: 2, Lipa: 1, Alaz: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Mistérios antigos não se revelam com pressa... nem com medo.",
          audioSrc: "/sounds/reacoes/P6-4.mp3"
        }
      }
    ]
  }
];
