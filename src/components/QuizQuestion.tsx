import { Question, Option } from "@/types/types";
import { motion } from "framer-motion";
import { useAudio } from "@/contexts/AudioContext";
import { useOrakVoice } from "@/hook/useOrakVoice";

type QuizQuestionProps = {
  question: Question;
  onEscolha: (opcao: Option) => void;
};

export default function QuizQuestion({ question, onEscolha }: QuizQuestionProps) {
  const { isMuted } = useAudio();

  useOrakVoice(true, isMuted, question.audioSrc);

  return (
    <div className="flex flex-col justify-center items-center min-h-[300px] px-4 text-center transition-all duration-300 ease-in-out">
      <p className="mb-6 text-lg italic text-blue-100 max-w-prose">{question.orakAsk}</p>
      <div className="flex flex-col gap-4 w-full max-w-md">
        {question.options.map((opcao, idx) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={idx}
            onClick={() => onEscolha(opcao)}
            className="bg-amber-800 hover:bg-fuchsia-900 py-3 px-6 rounded-xl transition-all text-lg font-medium"
          >
            {opcao.text}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
