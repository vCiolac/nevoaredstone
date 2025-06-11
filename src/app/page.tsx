"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const anchors = document.querySelectorAll("a[href^='#']");
    const scrollHandler = (e: Event) => {
      e.preventDefault();
      const target = document.querySelector(
        (e.currentTarget as HTMLAnchorElement).getAttribute("href")!
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", scrollHandler));
    return () => anchors.forEach((anchor) => anchor.removeEventListener("click", scrollHandler));
  }, []);

  return (
    <main className="pt-24">
      {/* INÍCIO */}
      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Qual personagem da Névoa Redstone é você?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
          Entre nesse universo místico e responda o quiz para descobrir sua alma mágica.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-xl"
        >
          <Link href="/quiz">Começar o Quiz</Link>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-purple-900 py-24 px-6 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Sobre o Projeto</h2>
        <p className="max-w-xl mx-auto text-lg md:text-xl">
          Névoa Redstone é um universo criado em pixel art inspirado por fantasia, RPG e o mundo dos blocos. Aqui, cada personagem representa uma faceta da sua alma.
        </p>
      </section>

      {/* JOGO */}
      <section id="jogo" className="bg-black py-24 px-6 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Jogue na Névoa Redstone</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Explore um mundo mágico em pixel art com ElkinaRei e Thalris! Use as setas para se mover e descubra segredos escondidos.
        </p>

        <div className="w-full max-w-5xl aspect-video mx-auto border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center justify-center h-full text-2xl text-yellow-400 font-bold">
            Em breve
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-zinc-900 text-white py-6 text-center text-sm">
        © 2025 Névoa Redstone. Criado com magia e pixels.
      </footer>
    </main>
  );
}
