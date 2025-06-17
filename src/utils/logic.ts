import { Character, Option } from "@/types/types";

export function calcularResultado(respostas: Option[]): Character {
  const score: Record<Character, number> = {
    ElkinaRei: 0, Thalris: 0, Raiat: 0, Astrid: 0,
    Flama: 0, Yara: 0, Andrômeda: 0, Alaz: 0,
    Nebulosa: 0, Lipa: 0, Peynir: 0, Togur: 0,
  };

  respostas.forEach(option => {
    for (const personagem in option.points) {
      score[personagem as Character] += option.points[personagem as Character] || 0;
    }
  });

  const maxScore = Math.max(...Object.values(score));
  const empatados = Object.entries(score)
    .filter(([, value]) => value === maxScore)
    .map(([key]) => key as Character);

  const escolhido = empatados[Math.floor(Math.random() * empatados.length)];
  return escolhido;
}
