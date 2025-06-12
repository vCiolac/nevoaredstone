import { Option, Question } from "./questions";

type QuizQuestionProps = {
  question: Question;
  onEscolha: (opcao: Option) => void;
};

export default function QuizQuestion({ question, onEscolha }: QuizQuestionProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[300px] px-4 text-center transition-all duration-300 ease-in-out">
      <p className="mb-6 text-lg italic text-blue-100 max-w-prose">{question.orakAsk}</p>
      <div className="flex flex-col gap-4 w-full max-w-md">
        {question.options.map((opcao, idx) => (
          <button
            key={idx}
            onClick={() => onEscolha(opcao)}
            className="bg-amber-800 hover:bg-fuchsia-900 py-3 px-6 rounded-xl transition-all text-lg font-medium"
          >
            {opcao.text}
          </button>
        ))}
      </div>
    </div>
  );
}
