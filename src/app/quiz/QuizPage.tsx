
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { instrumentQuestions } from "./questions-instrumento";
import { characterQuestions } from "./questions-personagens";
import { instrumentos } from "./instrumentos";
import { personagens } from "./personagens";

import { useAudio } from "@/contexts/AudioContext";
import { calcularResultado } from "@/utils/logic";
import OrakReaction from "@/components/OrakReaction";
import QuizQuestion from "@/components/QuizQuestion";
import { Option } from "@/types/types";
import { useOrakVoice } from "@/hook/useOrakVoice";

export default function QuizPage() {
  const searchParams = useSearchParams();
  const quizType = searchParams.get("type") ?? "personagem";

  const questions = quizType === "instrumento" ? instrumentQuestions : characterQuestions;
  const resultados = quizType === "instrumento" ? instrumentos : personagens;

  const [step, setStep] = useState(-1);
  const [currentOption, setCurrentOption] = useState<Option | null>(null);
  const [respostas, setRespostas] = useState<Option[]>([]);
  const [view, setView] = useState<
    "intro" | "question" | "reaction" | "final-reaction" | "result"
  >("intro");

  const { playClick, playResult, playOrakReaction, isMuted } = useAudio();

  const iniciarQuiz = () => {
    setStep(0);
    setView("question");
  };

  const handleEscolha = (opcao: Option) => {
    playClick();

    setTimeout(() => {
      playOrakReaction(opcao.orakReaction.expression);
    }, 200);

    setTimeout(() => {
      setCurrentOption(opcao);

      const novasRespostas = [...respostas];
      novasRespostas[step] = opcao;
      setRespostas(novasRespostas);

      setView("reaction");
    }, 500);
  };

  const avancar = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setCurrentOption(null);
      setView("question");
    } else {
      setCurrentOption(null);
      setView("final-reaction");
    }
  };

  const introText = quizType === "instrumento"
    ? {
      title: "Orak, o Narrador",
      description: "Feche os olhos... e ouça. Um som vibra em seu interior, esperando para ser revelado.",
      button: "Descobrir meu instrumento mágico!"
      // voice: "/sounds/orak/orak-intro-instrumento.mp3",
    }
    : {
      title: "Orak, o Narrador",
      description: "Saudações, viajante! Pronto para descobrir sua essência?",
      button: "Sim, vamos começar!",
      voice: "/sounds/orak/orak-intro-personagem.mp3",
    };

  const finalReaction = quizType === "instrumento"
    ? {
      phrase: "Hm… terminei de afinar sua vibração mágica. Está pronto para ouvir qual instrumento ecoa sua alma?",
      // voice: "/sounds/orak/orak-final-instrumento.mp3"
    }
    : {
      phrase: "Hm… terminei de traçar seu mapa astral cósmico. As constelações se alinharam. Pronto para ver quem você realmente é?",
      voice: "/sounds/orak/orak-final-personagem.mp3"
    };

  useOrakVoice(view === "intro", isMuted, introText.voice);
  useOrakVoice(view === "final-reaction", isMuted, finalReaction.voice);

  if (view === "intro") {
    return (
      <main className="h-screen flex items-center justify-center px-6 py-12">
        <motion.div className="bg-black/90 p-10 rounded-2xl text-white text-center mt-17">
          <Image
            src="/images/orak/orak-normal.png"
            alt="Orak"
            width={256}
            height={288}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">{introText.title}</h1>
          <p className="text-lg mb-6">{introText.description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={iniciarQuiz}
            className="bg-amber-500 px-6 py-3 rounded-full font-bold text-black"
          >
            {introText.button}
          </motion.button>
        </motion.div>
      </main>
    );
  }

  if (view === "final-reaction") {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div className="bg-black/80 p-8 rounded-2xl max-w-4xl text-white flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Image
              src="/images/orak/orak-happy.png"
              alt="Orak final"
              width={224}
              height={320}
              className="border-2 border-blue-400 rounded-lg"
            />
            <p className="mt-4 text-sm italic text-blue-200">Orak, o narrador</p>
          </div>

          <div className="w-full md:w-2/3 flex items-center justify-center">
            <OrakReaction
              reaction={{
                expression: "happy",
                phrase: finalReaction.phrase,
              }}
              isLastQuestion={true}
              onNext={() => {
                playResult();
                setView("result");
              }}
            />
          </div>
        </motion.div>
      </main>
    );
  }

  if (view === "result") {
    const resultado = calcularResultado(respostas);
    const resultadoFinal = resultados[resultado];

    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div className="bg-black/80 p-8 rounded-2xl text-white text-center">
          <Image src={resultadoFinal.imagem} alt={resultadoFinal.nome} width={192} height={288} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-3">{resultadoFinal.nome}</h2>
          <p className="text-lg mb-6">{resultadoFinal.descricao}</p>
          <Link href="/" className="text-amber-700 font-semibold hover:underline">← Voltar ao início</Link>
        </motion.div>
      </main>
    );
  }

  const perguntaAtual = questions[step];
  const isLast = step === questions.length - 1;
  const orakExpression =
    view === "reaction" && currentOption
      ? currentOption.orakReaction.expression
      : view === "question"
        ? "normal"
        : "happy";

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div className="bg-black/80 p-8 rounded-2xl max-w-4xl text-white flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {(view !== "reaction" || currentOption) && (
            <Image
              key={orakExpression}
              src={`/images/orak/orak-${orakExpression}.png`}
              alt="Orak"
              width={224}
              height={320}
              className="border-2 border-blue-400 rounded-lg transition-opacity duration-200"
            />
          )}
          <p className="mt-4 text-sm italic text-blue-200">Orak, o narrador</p>
        </div>

        <div className="w-full md:w-2/3 text-center">
          {view === "question" && (
            <QuizQuestion question={perguntaAtual} onEscolha={handleEscolha} />
          )}

          {view === "reaction" && currentOption && (
            <OrakReaction
              reaction={currentOption.orakReaction}
              isLastQuestion={isLast}
              onNext={avancar}
              buttonText={isLast ? "Finalizar →" : undefined}
            />
          )}

          <div className="mt-6 text-sm text-white/60">
            Pergunta {step + 1} de {questions.length}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
