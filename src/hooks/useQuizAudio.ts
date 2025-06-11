import { useEffect, useRef } from "react";
import { Howl } from "howler";

export function useQuizAudio() {
  const bgSound = useRef<Howl | null>(null);
  const clickSound = useRef<Howl | null>(null);
  const resultSound = useRef<Howl | null>(null);

  useEffect(() => {
    bgSound.current = new Howl({
      src: ["/sounds/bg-music.mp3"],
      volume: 0.15,
      loop: true,
    });

    clickSound.current = new Howl({
      src: ["/sounds/click.mp3"],
      volume: 0.3,
    });

    resultSound.current = new Howl({
      src: ["/sounds/result.mp3"],
      volume: 0.4,
    });

    // start bg with fade
    bgSound.current.once("load", () => {
      bgSound.current?.fade(0, 0.15, 2000);
      bgSound.current?.play();
    });

    return () => {
      bgSound.current?.fade(0.15, 0, 1500);
      setTimeout(() => bgSound.current?.stop(), 1600);
    };
  }, []);

  return {
    playClick: () => clickSound.current?.play(),
    playResult: () => resultSound.current?.play(),
  };
}
