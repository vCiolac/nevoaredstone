"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizDropdown() {
  const [open, setOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleTouch = () => setIsTouchDevice(true);
    window.addEventListener("touchstart", handleTouch, { once: true });
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  const toggleOpen = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);
  const openHover = () => !isTouchDevice && setOpen(true);

  return (
    <div
      className="relative"
      onMouseEnter={openHover}
      onMouseLeave={close}
    >
      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold py-4 px-8 rounded-full shadow-xl flex items-center gap-2"
      >
        Fazer o Quiz <ChevronDown size={20} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg mt-2 z-10"
          >
            <Link
              href="/quiz?type=personagem"
              onClick={close}
              className="block px-4 py-3 text-white hover:bg-amber-600 transition-colors"
            >
              🔮 Quiz de Personagem
            </Link>
            <Link
              href="/quiz?type=instrumento"
              onClick={close}
              className="block px-4 py-3 text-white hover:bg-amber-600 transition-colors"
            >
              🪕 Quiz de Instrumento
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
