"use client";

import { useEffect, useRef } from "react";
import { Howl } from "howler";

export function useOrakVoice(playCondition: boolean, isMuted: boolean, audioSrc?: string) {
  const voice = useRef<Howl | null>(null);

  useEffect(() => {
    if (!audioSrc || !playCondition || isMuted) return;

    voice.current?.stop();
    voice.current?.unload();

    voice.current = new Howl({
      src: [audioSrc],
      volume: 0.50,
    });

    voice.current.play();

    return () => {
      voice.current?.stop();
    };
  }, [audioSrc, playCondition, isMuted]);
}
