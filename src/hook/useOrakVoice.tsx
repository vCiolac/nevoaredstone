"use client";

import { useEffect, useRef } from "react";
import { Howl } from "howler";

export function useOrakVoice(playCondition: boolean, isMuted: boolean, audioSrc?: string) {
  const voice = useRef<Howl | null>(null);

  useEffect(() => {
    if (!audioSrc || !playCondition || isMuted) return;

    voice.current?.stop();
    voice.current?.unload();

    const sound = new Howl({
      src: [audioSrc],
      volume: 0,
    });

    voice.current = sound;

    sound.play();
    sound.fade(0, 0.5, 200);

    return () => {
      if (voice.current?.playing()) {
        voice.current.fade(0.5, 0, 200);
        setTimeout(() => {
          voice.current?.stop();
          voice.current?.unload();
        }, 500);
      }
    };
  }, [audioSrc, playCondition, isMuted]);
}
