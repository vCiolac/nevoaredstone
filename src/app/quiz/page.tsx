"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { questions, Option } from "./questions";
import { calcularResultado } from "./logic";
import { personagens } from "./personagens";
import { useAudio } from "@/contexts/AudioContext";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [respostas, setRespostas] = useState<Option[]>([]);
  const { playClick, playResult } = useAudio();

  const totalPerguntas = questions.length;

  const handleEscolha = (opcao: Option) => {
    playClick();
    setRespostas([...respostas, opcao]);
    setStep(step + 1);
  };

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
          <Image
            src={personagem.imagem}
            alt={personagem.nome}
            width={160}
            height={160}
            className="w-72 h-72 mx-auto mb-4 object-contain"
            priority
          />
          <h2 className="text-4xl font-bold mb-3">{personagem.nome}</h2>
          <p className="text-lg mb-6">{personagem.descricao}</p>

          <Link href="/" className="text-yellow-400 font-semibold hover:underline">
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
        className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl w-full text-white text-center"
      >
        <h3 className="text-2xl font-semibold mb-6">
          {perguntaAtual.question}
        </h3>
        <div className="flex flex-col gap-4">
          {perguntaAtual.options.map((opcao, idx) => (
            <button
              key={idx}
              onClick={() => handleEscolha(opcao)}
              className="bg-purple-700 hover:bg-purple-600 py-3 px-6 rounded-xl transition-all text-lg font-medium"
            >
              {opcao.text}
            </button>
          ))}
        </div>
        <div className="mt-6 text-sm text-white/60">
          Pergunta {step + 1} de {totalPerguntas}
        </div>
      </motion.div>
    </main>
  );
}
