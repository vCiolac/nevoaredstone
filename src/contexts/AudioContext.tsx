"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { OrakReactionType } from "@/types/types";

type AudioContextType = {
  playClick: () => void;
  playResult: () => void;
  playOrakReaction: (type: OrakReactionType) => void;
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
  const orakSounds = useRef<Record<OrakReactionType, Howl>>({
    happy: new Howl({ src: ["/sounds/orak/happy.mp3"], volume: 0.25 }),
    sad: new Howl({ src: ["/sounds/orak/sad.mp3"], volume: 0.25 }),
    angry: new Howl({ src: ["/sounds/orak/angry.mp3"], volume: 0.25 }),
    thoughtful: new Howl({ src: ["/sounds/orak/thoughtful.mp3"], volume: 0.25 }),
    intrigued: new Howl({ src: ["/sounds/orak/intrigued.mp3"], volume: 0.25 }),
  });

  useEffect(() => {
    bgSound.current = new Howl({
      src: ["/sounds/bg-music.mp3"],
      volume: 0.2,
      loop: true,
      onload: () => setCanPlay(true),
    });

    clickSound.current = new Howl({
      src: ["/sounds/click.mp3"],
      volume: 0.5,
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
  }, [hasInteracted]);

  useEffect(() => {
    if (
      hasInteracted &&
      canPlay &&
      bgSound.current &&
      !bgSound.current.playing() &&
      !isMuted
    ) {
      bgSound.current.play();
    }
  }, [hasInteracted, canPlay, isMuted]);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    if (newMuted) {
      bgSound.current?.fade(bgSound.current.volume(), 0, 200);
      setTimeout(() => {
        bgSound.current?.pause();
      }, 500);
    } else {
      if (!hasInteracted) return;
      bgSound.current?.play();
      bgSound.current?.fade(0, 0.1, 200);
    }
  };

  const playOrakReaction = (type: OrakReactionType) => {
    if (!isMuted) {
      orakSounds.current[type]?.play();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        playClick: () => {
          if (!isMuted) clickSound.current?.play();
        },
        playResult: () => {
          if (!isMuted) resultSound.current?.play();
        },
        playOrakReaction,
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
