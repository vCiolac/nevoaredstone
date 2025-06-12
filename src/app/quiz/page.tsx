"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { questions, Option } from "./questions";
import { calcularResultado } from "./logic";
import { personagens } from "./personagens";
import QuizQuestion from "./QuizQuestion";
import OrakReaction from "./OrakReaction";
import { useAudio } from "@/contexts/AudioContext";

export default function QuizPage() {
  const [step, setStep] = useState(-1);
  const [currentOption, setCurrentOption] = useState<Option | null>(null);
  const [respostas, setRespostas] = useState<Option[]>([]);
  const [view, setView] = useState<
    "intro" | "question" | "reaction" | "final-reaction" | "result"
  >("intro");

  const { playClick, playResult, playOrakReaction } = useAudio();

  const iniciarQuiz = () => {
    setStep(0);
    setView("question");
  };

  const handleEscolha = (opcao: Option) => {
    playClick();
    playOrakReaction(opcao.orakReaction.expression);
    setCurrentOption(opcao);

    const novasRespostas = [...respostas];
    novasRespostas[step] = opcao;
    setRespostas(novasRespostas);

    setView("reaction");
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

  if (view === "intro") {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div className="bg-black/90 p-10 rounded-2xl text-white text-center">
          <Image src="/images/orak/orak-normal.png" alt="Orak" width={256} height={288} className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Orak, o Narrador</h1>
          <p className="text-lg mb-6">Saudações, viajante! Pronto para descobrir sua essência?</p>
          <button onClick={iniciarQuiz} className="bg-amber-500 px-6 py-3 rounded-full font-bold text-black">
            Sim, vamos começar!
          </button>
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
                phrase:
                  "Hm… terminei de traçar seu mapa astral cósmico. As constelações se alinharam. Pronto para ver quem você realmente é?",
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
    const personagem = personagens[resultado];

    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div className="bg-black/80 p-8 rounded-2xl text-white text-center">
          <Image src={personagem.imagem} alt={personagem.nome} width={192} height={288} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-3">{personagem.nome}</h2>
          <p className="text-lg mb-6">{personagem.descricao}</p>
          <Link href="/" className="text-amber-700 font-semibold hover:underline">← Voltar ao início</Link>
        </motion.div>
      </main>
    );
  }

  const perguntaAtual = questions[step];
  const isLast = step === questions.length - 1;
  const orakExpression = view === "reaction" ? currentOption?.orakReaction.expression : "normal";

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div className="bg-black/80 p-8 rounded-2xl max-w-4xl text-white flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <Image
            src={`/images/orak/orak-${orakExpression}.png`}
            alt="Orak"
            width={224}
            height={320}
            className="border-2 border-blue-400 rounded-lg"
          />
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
