"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useAudio } from "@/contexts/AudioContext";
import Image from "next/image";

export default function TopNav() {
  const { isMuted, toggleMute } = useAudio();
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizDropdownOpen, setQuizDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 text-white transition-transform duration-300 backdrop-blur-md ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${menuOpen ? "bg-black/80" : "bg-black/50"}`}
    >
      <div className="relative flex items-center justify-between">
        <span className="font-bold text-xl z-10 flex items-center gap-2">
          <Image
            src="/images/icon.png"
            alt="Ícone Névoa Redstone"
            width={28}
            height={28}
            className="inline-block align-middle"
          />
          Névoa Redstone
        </span>

        <ul className="hidden md:flex gap-6 text-sm md:text-base absolute left-1/2 -translate-x-1/2">
          <li>
            <Link href="/" className="hover:text-yellow-400">Início</Link>
          </li>
          <li>
            <Link href="/#sobre" className="hover:text-yellow-400">Sobre</Link>
          </li>
          <li>
            <Link href="/#jogo" className="hover:text-yellow-400">Jogo</Link>
          </li>
          <li className="relative group">
            <button
              onClick={() => setQuizDropdownOpen(!quizDropdownOpen)}
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              Quiz <ChevronDown className={`w-4 h-4 transition-transform ${quizDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {quizDropdownOpen && (
              <ul className="absolute bg-black text-white mt-2 rounded-md shadow-lg border border-white/10 w-56">
                <li>
                  <Link
                    href="/quiz?type=personagem"
                    className="block px-4 py-2 hover:bg-yellow-800"
                    onClick={() => setQuizDropdownOpen(false)}
                  >
                    Quiz de Personagem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quiz?type=instrumento"
                    className="block px-4 py-2 hover:bg-yellow-800"
                    onClick={() => setQuizDropdownOpen(false)}
                  >
                    Quiz de Instrumento
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-3 z-10">
          <button
            onClick={toggleMute}
            className="p-2 hover:text-yellow-400 transition-colors"
            title={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <button className="md:hidden p-2" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col md:hidden gap-3 mt-4 text-sm">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Início</Link>
          </li>
          <li>
            <Link href="/#sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
          </li>
          <li>
            <Link href="/#jogo" onClick={() => setMenuOpen(false)}>Jogo</Link>
          </li>
          <li>
            <button
              onClick={() => setQuizDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1"
            >
              Quiz {quizDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {quizDropdownOpen && (
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                <li>
                  <Link href="/quiz?type=personagem" onClick={() => setMenuOpen(false)}>
                    Quiz de Personagem
                  </Link>
                </li>
                <li>
                  <Link href="/quiz?type=instrumento" onClick={() => setMenuOpen(false)}>
                    Quiz de Instrumento
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
