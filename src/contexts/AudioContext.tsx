"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Howl } from "howler";

type AudioContextType = {
  playClick: () => void;
  playResult: () => void;
  isMuted: boolean;
  toggleMute: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  const bgSound = useRef<Howl | null>(null);
  const clickSound = useRef<Howl | null>(null);
  const resultSound = useRef<Howl | null>(null);

  // Setup dos sons
  useEffect(() => {
    bgSound.current = new Howl({
      src: ["/sounds/bg-music.mp3"],
      volume: 0.2,
      loop: true,
      onload: () => {
        setCanPlay(true); // agora está pronto para tocar
      },
    });

    clickSound.current = new Howl({
      src: ["/sounds/click.mp3"],
      volume: 0.3,
    });

    resultSound.current = new Howl({
      src: ["/sounds/result.mp3"],
      volume: 0.25,
    });

    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setIsMuted(false);
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      bgSound.current?.stop();
    };
  }, []);

  // Quando puder tocar e já interagiu, toca de fato
  useEffect(() => {
    if (hasInteracted && canPlay && bgSound.current && !bgSound.current.playing()) {
      bgSound.current.play();
    }
  }, [hasInteracted, canPlay]);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    if (newMuted) {
      bgSound.current?.pause();
    } else {
      if (!hasInteracted) return;

      bgSound.current?.play();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        playClick: () => clickSound.current?.play(),
        playResult: () => resultSound.current?.play(),
        isMuted,
        toggleMute,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio precisa estar dentro de <AudioProvider>");
  return context;
};
