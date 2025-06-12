import { OrakReactionType } from "./questions";

type OrakReactionProps = {
  reaction: {
    expression: OrakReactionType;
    phrase: string;
  };
  isLastQuestion: boolean;
  onNext: () => void;
  buttonText?: string;
};

export default function OrakReaction({ reaction, isLastQuestion, onNext, buttonText }: OrakReactionProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[300px] px-4 text-center transition-all duration-300 ease-in-out">
      <p className="mb-6 text-lg italic text-blue-100 max-w-prose">{reaction.phrase}</p>
      <button
        onClick={onNext}
        className="mt-6 bg-amber-500 text-black font-bold px-6 py-3 rounded-full hover:bg-amber-600 transition-all"
      >
        {buttonText || (isLastQuestion ? "Ver resultado →" : "Próxima pergunta →")}
      </button>
    </div>
  );
}
