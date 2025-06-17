import { Question } from "@/types/types";

export const instrumentQuestions: Question[] = [
  {
    id: 0,
    orakAsk: "Se sua alma emitisse um som, qual seria sua vibração?",
    audioSrc: "/sounds/perguntas/instrumentos/P1.mp3",
    options: [
      {
        text: "Um acorde valente que inspira justiça",
        points: { Togur: 0.5, Lipa: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "Sua melodia carrega bravura — como um hino que guia multidões.",
          audioSrc: "/sounds/reacoes/I1-1.mp3",
        },
      },
      {
        text: "Um sopro misterioso que ecoa nos cantos escuros",
        points: { Astrid: 0.5, Alaz: 0.5 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Sons ocultos revelam verdades que os olhos não veem.",
          audioSrc: "/sounds/reacoes/I1-2.mp3",
        },
      },
      {
        text: "Notas saltitantes de invenção e surpresa",
        points: { Flama: 0.5, Thalris: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "Ideias dançam em você como sinos encantados!",
          audioSrc: "/sounds/reacoes/I1-3.mp3",
        },
      },
      {
        text: "Batidas profundas e ameaçadoras",
        points: { Raiat: 0.5, Nebulosa: 0.5 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Há poder em cada nota pesada... mas não o desperdice.",
          audioSrc: "/sounds/reacoes/I1-4.mp3",
        },
      },
    ],
  },
  {
    id: 1,
    orakAsk: "Se você tivesse que despertar um poder adormecido, como faria?",
    audioSrc: "/sounds/perguntas/instrumentos/P2.mp3",
    options: [
      {
        text: "Com uma música calma que toca o coração",
        points: { Yara: 0.5, ElkinaRei: 0.5 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Às vezes, só o silêncio e a melodia suave podem curar.",
          audioSrc: "/sounds/reacoes/I2-1.mp3",
        },
      },
      {
        text: "Com um som ritmado e crescente que anima",
        points: { Andrômeda: 0.5, Togur: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "O ritmo move o mundo... e também acorda gigantes!",
          audioSrc: "/sounds/reacoes/I2-2.mp3",
        },
      },
      {
        text: "Com tons graves que sacodem o chão",
        points: { Lipa: 0.5, Nebulosa: 0.5 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Quando a terra treme, os medos se calam.",
          audioSrc: "/sounds/reacoes/I2-3.mp3",
        },
      },
      {
        text: "Com sons sutis que manipulam a realidade",
        points: { Astrid: 0.5, Flama: 0.5 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Nem tudo o que altera o mundo precisa ser alto...",
          audioSrc: "/sounds/reacoes/I2-4.mp3",
        },
      },
    ],
  },
  {
    id: 2,
    orakAsk: "Qual desses estilos musicais mais te representa em alma?",
    audioSrc: "/sounds/perguntas/instrumentos/P3.mp3",
    options: [
      {
        text: "Tribal e ancestral",
        points: { Thalris: 0.5, ElkinaRei: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "As raízes profundas ressoam com identidade e orgulho.",
          audioSrc: "/sounds/reacoes/I3-1.mp3",
        },
      },
      {
        text: "Etéreo e psíquico",
        points: { Alaz: 0.5, Raiat: 0.5 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Há algo mágico nas vibrações que quase não se escutam...",
          audioSrc: "/sounds/reacoes/I3-2.mp3",
        },
      },
      {
        text: "Sombrio e poderoso",
        points: { Yara: 0.5, Peynir: 0.5 },
        orakReaction: {
          expression: "intrigued",
          phrase: "O som das trevas não é para todos... mas você o domina.",
          audioSrc: "/sounds/reacoes/I3-3.mp3",
        },
      },
      {
        text: "Inovador e brilhante",
        points: { Nebulosa: 0.5, Andrômeda: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "Criatividade sonora é um dom raro — e você o carrega.",
          audioSrc: "/sounds/reacoes/I3-4.mp3",
        },
      },
    ],
  },
  {
    id: 3,
    orakAsk: "Você encontra um instrumento mágico selado. Como reage?",
    audioSrc: "/sounds/perguntas/instrumentos/P4.mp3",
    options: [
      {
        text: "Toca-o com reverência e deixa que ele se revele",
        points: { Flama: 0.5, Andrômeda: 0.5 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Todo artefato carrega uma história... e merece respeito.",
          audioSrc: "/sounds/reacoes/I4-1.mp3",
        },
      },
      {
        text: "Testa suas notas sem medo, deixando a música fluir",
        points: { ElkinaRei: 0.5, Raiat: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "Você ouve a alma do instrumento... e ele ouve a sua.",
          audioSrc: "/sounds/reacoes/I4-2.mp3",
        },
      },
      {
        text: "Quebra o selo com força e convicção",
        points: { Astrid: 0.5, Togur: 0.5 },
        orakReaction: {
          expression: "angry",
          phrase: "Determinado. Direto ao ponto. Que o som ecoe com impacto.",
          audioSrc: "/sounds/reacoes/I4-3.mp3",
        },
      },
      {
        text: "Analisa seu funcionamento antes de tocar qualquer nota",
        points: { Peynir: 0.5, Thalris: 0.5 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Tocar é fácil. Compreender é arte. Você entende isso bem.",
          audioSrc: "/sounds/reacoes/I4-4.mp3",
        },
      },
    ],
  },
  {
    id: 4,
    orakAsk: "Você é convocado para uma orquestra de batalha. Que papel assume?",
    audioSrc: "/sounds/perguntas/instrumentos/P5.mp3",
    options: [
      {
        text: "Comandar o ritmo e manter a harmonia do grupo",
        points: { Lipa: 0.5, Nebulosa: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "Um maestro guerreiro! A melodia da vitória começa em ti.",
          audioSrc: "/sounds/reacoes/I5-1.mp3",
        },
      },
      {
        text: "Invocar efeitos mágicos com notas encantadas",
        points: { Thalris: 0.5, Flama: 0.5 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Suas notas tocam mais do que ouvidos... tocam o destino.",
          audioSrc: "/sounds/reacoes/I5-2.mp3",
        },
      },
      {
        text: "Desestabilizar o inimigo com sons caóticos e potentes",
        points: { Alaz: 0.5, Andrômeda: 0.5 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Nem todo som é para embalar... alguns são para derrubar.",
          audioSrc: "/sounds/reacoes/I5-3.mp3",
        },
      },
      {
        text: "Criar novas melodias durante a batalha",
        points: { ElkinaRei: 0.5, Yara: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "Improviso em combate? Hah, ousado e genial!",
          audioSrc: "/sounds/reacoes/I5-4.mp3",
        },
      },
    ],
  },
  {
    id: 5,
    orakAsk: "No fim de uma jornada, que som você gostaria que o mundo lembrasse de você?",
    audioSrc: "/sounds/perguntas/instrumentos/P6.mp3",
    options: [
      {
        text: "Uma melodia de paz e cura",
        points: { Togur: 0.5, Nebulosa: 0.5 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Corações curados jamais esquecem quem os tocou.",
          audioSrc: "/sounds/reacoes/I6-1.mp3",
        },
      },
      {
        text: "Um trovão que marcou a história",
        points: { Astrid: 0.5, Peynir: 0.5 },
        orakReaction: {
          expression: "happy",
          phrase: "Ecos poderosos permanecem nos ventos por gerações.",
          audioSrc: "/sounds/reacoes/I6-2.mp3",
        },
      },
      {
        text: "Um sussurro que ainda assombra os inimigos",
        points: { Raiat: 0.5, Lipa: 0.5 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Alguns sons não se esquecem... mesmo que ninguém os ouça mais.",
          audioSrc: "/sounds/reacoes/I6-3.mp3",
        },
      },
      {
        text: "Um enigma musical que ninguém jamais decifrou",
        points: { Peynir: 0.5, Yara: 0.5 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Que legado intrigante... digno de estudos eternos.",
          audioSrc: "/sounds/reacoes/I6-4.mp3",
        },
      },
    ],
  },
];
