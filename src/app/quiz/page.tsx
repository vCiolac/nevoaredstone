"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { questions, Option } from "./questions";
import { calcularResultado } from "./logic";
import { personagens } from "./personagens";
import { useAudio } from "@/contexts/AudioContext";
import type { OrakReactionType } from "@/components/OrakCharacter";

export default function QuizPage() {
  const [step, setStep] = useState(-1); // -1: introdução
  const [respostas, setRespostas] = useState<Option[]>([]);
  const [orakExpression, setOrakExpression] = useState<OrakReactionType>("normal");
  const [orakPhrase, setOrakPhrase] = useState("...");
  const [aguardandoAvanco, setAguardandoAvanco] = useState(false);

  const { playClick, playResult, playOrakReaction } = useAudio();
  const totalPerguntas = questions.length;

  const iniciarQuiz = () => {
    setStep(0);
    setOrakPhrase(questions[0].orakAsk);
    setOrakExpression("normal");
    playOrakReaction("normal");
  };

  const handleEscolha = (opcao: Option) => {
    playClick();
    setRespostas([...respostas, opcao]);
    const { expression, phrase } = opcao.orakReaction;
    setOrakExpression(expression);
    setOrakPhrase(phrase);
    playOrakReaction(expression);
    setAguardandoAvanco(true);
  };

  const avancarPergunta = () => {
    const proximo = step + 1;

    if (proximo < totalPerguntas) {
      setStep(proximo);
      setOrakPhrase(questions[proximo].orakAsk);
      setOrakExpression("normal");
      setAguardandoAvanco(false);
    } else {
      setStep(totalPerguntas); // Acaba o quiz
    }
  };

  if (step === -1) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-black/50 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-2xl text-center text-white"
        >
          <div className="w-64 h-72 mx-auto relative mb-4 border-4 border-blue-400 rounded-lg overflow-hidden">
            <Image
              src="/images/orak/orak-normal.png"
              alt="Orak"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Orak, o Narrador</h1>
          <p className="text-lg mb-6">
            Saudações, viajante! Eu sou Orak, guardião das almas ocultas. Está pronto para descobrir
            quem você é neste reino da Névoa Redstone?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={iniciarQuiz}
            className="bg-amber-500 text-black font-bold px-6 py-3 rounded-full hover:bg-amber-600 transition-all"
          >
            Sim, vamos começar!
          </motion.button>
        </motion.div>
      </main>
    );
  }

  if (step >= totalPerguntas) {
    const resultado = calcularResultado(respostas);
    const personagem = personagens[resultado];
    playResult();

    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl text-center text-white"
        >
          <div className="mx-auto mb-6 w-48 h-72 border-4 border-fuchsia-700 rounded-lg overflow-hidden shadow-lg bg-black/30 relative">
            <Image
              src={personagem.imagem}
              alt={personagem.nome}
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-4xl font-bold mb-3">{personagem.nome}</h2>
          <p className="text-lg mb-6">{personagem.descricao}</p>

          <Link href="/" className="text-amber-700 font-semibold hover:underline">
            ← Voltar ao início
          </Link>
        </motion.div>
      </main>
    );
  }

  const perguntaAtual = questions[step];

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-4xl w-full text-white flex flex-col md:flex-row gap-6"
      >
        {/* ORAK IMAGEM */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-56 h-80 relative border-2 border-blue-400 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/images/orak/orak-${orakExpression}.png`}
              alt={`Orak ${orakExpression}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-sm italic text-blue-200 text-center">Orak, o narrador</p>
        </div>

        {/* PERGUNTA / FALA DO ORAK */}
        <div className="w-full md:w-2/3 text-center">
          <motion.div
            key={orakPhrase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 text-lg italic text-blue-100"
          >
            {orakPhrase}
          </motion.div>

          {!aguardandoAvanco && (
            <div className="flex flex-col gap-4">
              {perguntaAtual.options.map((opcao, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    (e.currentTarget as HTMLButtonElement).blur();
                    handleEscolha(opcao);
                  }}
                  className="bg-amber-800 hover:bg-fuchsia-800 py-3 px-6 rounded-xl transition-all text-lg font-medium"
                >
                  {opcao.text}
                </button>
              ))}
            </div>
          )}

          {aguardandoAvanco && (
            <motion.button
              onClick={avancarPergunta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-amber-500 text-black font-bold px-6 py-3 rounded-full hover:bg-amber-600 transition-all"
            >
              Próxima pergunta →
            </motion.button>
          )}

          <div className="mt-6 text-sm text-white/60">
            Pergunta {step + 1} de {totalPerguntas}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
