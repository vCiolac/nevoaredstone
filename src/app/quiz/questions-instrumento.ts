import { Question } from "@/types/types";

export const instrumentQuestions: Question[] = [
  {
    id: 0,
    orakAsk: "Se sua alma emitisse um som, qual seria sua vibração?",
    options: [
      {
        text: "Um acorde valente que inspira justiça",
        points: { ElkinaRei: 2, Flama: 1, Raiat: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Sua melodia carrega bravura — como um hino que guia multidões.",
        },
      },
      {
        text: "Um sopro misterioso que ecoa nos cantos escuros",
        points: { Thalris: 2, Nebulosa: 1, Yara: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Sons ocultos revelam verdades que os olhos não veem.",
        },
      },
      {
        text: "Notas saltitantes de invenção e surpresa",
        points: { Andrômeda: 2, Lipa: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Ideias dançam em você como sinos encantados!",
        },
      },
      {
        text: "Batidas profundas e ameaçadoras",
        points: { Peynir: 2, Togur: 1, ElkinaRei: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Há poder em cada nota pesada... mas não o desperdice.",
        },
      },
    ],
  },
  {
    id: 1,
    orakAsk: "Se você tivesse que despertar um poder adormecido, como faria?",
    options: [
      {
        text: "Com uma música calma que toca o coração",
        points: { Yara: 2, Astrid: 1, Flama: 1 },
        orakReaction: {
          expression: "sad",
          phrase: "Às vezes, só o silêncio e a melodia suave podem curar.",
        },
      },
      {
        text: "Com um som ritmado e crescente que anima",
        points: { Raiat: 2, Alaz: 1, Flama: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "O ritmo move o mundo... e também acorda gigantes!",
        },
      },
      {
        text: "Com tons graves que sacodem o chão",
        points: { Togur: 2, Peynir: 1, ElkinaRei: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Quando a terra treme, os medos se calam.",
        },
      },
      {
        text: "Com sons sutis que manipulam a realidade",
        points: { Thalris: 2, Nebulosa: 1, Andrômeda: 1 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Nem tudo o que altera o mundo precisa ser alto...",
        },
      },
    ],
  },
  {
    id: 2,
    orakAsk: "Qual desses estilos musicais mais te representa em alma?",
    options: [
      {
        text: "Tribal e ancestral",
        points: { Alaz: 2, Flama: 1, Yara: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "As raízes profundas ressoam com identidade e orgulho.",
        },
      },
      {
        text: "Etéreo e psíquico",
        points: { Astrid: 2, Lipa: 1, Thalris: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Há algo mágico nas vibrações que quase não se escutam...",
        },
      },
      {
        text: "Sombrio e poderoso",
        points: { Peynir: 2, Nebulosa: 1, Togur: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "O som das trevas não é para todos... mas você o domina.",
        },
      },
      {
        text: "Inovador e brilhante",
        points: { Andrômeda: 2, Lipa: 1, Raiat: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Criatividade sonora é um dom raro — e você o carrega.",
        },
      },
    ],
  },
  {
    id: 3,
    orakAsk: "Você encontra um instrumento mágico selado. Como reage?",
    options: [
      {
        text: "Toca-o com reverência e deixa que ele se revele",
        points: { Astrid: 2, Thalris: 1, Yara: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Todo artefato carrega uma história... e merece respeito.",
        },
      },
      {
        text: "Testa suas notas sem medo, deixando a música fluir",
        points: { ElkinaRei: 2, Raiat: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Você ouve a alma do instrumento... e ele ouve a sua.",
        },
      },
      {
        text: "Quebra o selo com força e convicção",
        points: { Togur: 2, Peynir: 1, Flama: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Determinado. Direto ao ponto. Que o som ecoe com impacto.",
        },
      },
      {
        text: "Analisa seu funcionamento antes de tocar qualquer nota",
        points: { Lipa: 2, Andrômeda: 1, Nebulosa: 1 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Tocar é fácil. Compreender é arte. Você entende isso bem.",
        },
      },
    ],
  },
  {
    id: 4,
    orakAsk: "Você é convocado para uma orquestra de batalha. Que papel assume?",
    options: [
      {
        text: "Comandar o ritmo e manter a harmonia do grupo",
        points: { Flama: 2, ElkinaRei: 1, Raiat: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Um maestro guerreiro! A melodia da vitória começa em ti.",
        },
      },
      {
        text: "Invocar efeitos mágicos com notas encantadas",
        points: { Astrid: 2, Thalris: 1, Yara: 1 },
        orakReaction: {
          expression: "thoughtful",
          phrase: "Suas notas tocam mais do que ouvidos... tocam o destino.",
        },
      },
      {
        text: "Desestabilizar o inimigo com sons caóticos e potentes",
        points: { Peynir: 2, Togur: 1, Nebulosa: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Nem todo som é para embalar... alguns são para derrubar.",
        },
      },
      {
        text: "Criar novas melodias durante a batalha",
        points: { Lipa: 2, Andrômeda: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Improviso em combate? Hah, ousado e genial!",
        },
      },
    ],
  },
  {
    id: 5,
    orakAsk: "No fim de uma jornada, que som você gostaria que o mundo lembrasse de você?",
    options: [
      {
        text: "Uma melodia de paz e cura",
        points: { Yara: 2, Astrid: 1, Lipa: 1 },
        orakReaction: {
          expression: "sad",
          phrase: "Corações curados jamais esquecem quem os tocou.",
        },
      },
      {
        text: "Um trovão que marcou a história",
        points: { Raiat: 2, Flama: 1, Alaz: 1 },
        orakReaction: {
          expression: "happy",
          phrase: "Ecos poderosos permanecem nos ventos por gerações.",
        },
      },
      {
        text: "Um sussurro que ainda assombra os inimigos",
        points: { Peynir: 2, Nebulosa: 1, Thalris: 1 },
        orakReaction: {
          expression: "angry",
          phrase: "Alguns sons não se esquecem... mesmo que ninguém os ouça mais.",
        },
      },
      {
        text: "Um enigma musical que ninguém jamais decifrou",
        points: { Andrômeda: 2, Lipa: 1, ElkinaRei: 1 },
        orakReaction: {
          expression: "intrigued",
          phrase: "Que legado intrigante... digno de estudos eternos.",
        },
      },
    ],
  },
];
