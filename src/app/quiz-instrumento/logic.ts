import { Character, Option } from "./questions";

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

  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0] as Character;
}
