"use client";

import Link from "next/link";
import { useAudio } from "@/contexts/AudioContext";
import { Volume2, VolumeX } from "lucide-react";

export default function TopNav() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 flex items-center justify-between px-6 py-4 text-white">
      <span className="font-bold text-xl">🌫️ Névoa Redstone</span>

      <ul className="flex gap-6 text-sm md:text-base">
        <li><Link href="/" className="hover:text-yellow-400">Início</Link></li>
        <li><Link href="/#sobre" className="hover:text-yellow-400">Sobre</Link></li>
        <li><Link href="/#jogo" className="hover:text-yellow-400">Jogo</Link></li>
        <li><Link href="/quiz" className="hover:text-yellow-400">Quiz</Link></li>
      </ul>

      <button
        onClick={toggleMute}
        className="ml-4 p-2 hover:text-yellow-400 transition-colors"
        title={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </nav>
  );
}
