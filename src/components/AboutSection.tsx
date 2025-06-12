"use client";

import { personagens } from "@/app/quiz/personagens";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { bebas, dmSerif } from "@/fonts/fonts";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-32 px-6 text-white text-center bg-gradient-to-br from-amber-900 via-fuchsia-800 to-amber-950 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="animate-pulse bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent w-[200%] h-[200%] absolute -top-1/2 -left-1/2 rounded-full blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`${dmSerif.className} text-4xl md:text-6xl font-bold mb-8 z-10 relative`}
      >
        Névoa Redstone: Um Universo Multimídia
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-4xl mx-auto text-lg md:text-xl mb-16 z-10 relative"
      >
        Névoa Redstone é um universo colaborativo com vídeos animados,
        quiz interativo, jogo em pixel art, episódios, trilhas mágicas e até desenhos para colorir.
        Um projeto que une narrativa, arte e interatividade — criado para todas as idades.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto z-10 relative"
      >
        {Object.values(personagens).map((p) => (
          <motion.div
            key={p.nome}
            className="bg-zinc-800/70 rounded-xl p-4 flex flex-col items-center text-center hover:scale-[1.03] transition-transform shadow-lg backdrop-blur-sm"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-500 mb-4 relative">
              <Image
                src={p.imagem}
                alt={`Ícone ${p.nome}`}
                fill
                sizes="(max-width: 80px) 80px, (max-width: 120px) 120px, 100px"
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-amber-500 text-lg font-bold mb-1">{p.nome}</h3>
            <p className="text-xs text-zinc-300">{p.descricao}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-24 max-w-xl mx-auto text-center text-sm text-zinc-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Descubra todos os episódios no{" "}
        <Link
          href="https://www.youtube.com/@nevoaredstone"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-300 transition-colors"
        >
          YouTube
        </Link>
        {" "}e{" "}
        <Link
          href="https://www.tiktok.com/@nevoaredstone"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-300 transition-colors"
        >
          TikTok
        </Link>
        , e explore um universo mágico feito com criatividade, tecnologia e alma.
      </motion.div>
    </section>
  );
}
