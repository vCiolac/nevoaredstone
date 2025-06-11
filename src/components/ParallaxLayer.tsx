"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ParallaxLayer({
  src,
  speed = 1,
  zIndex = 0,
}: {
  src: string;
  speed?: number;
  zIndex?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [copyCount, setCopyCount]   = useState(0);   // quantas cópias preciso
  const [scaledW, setScaledW]       = useState(0);   // largura já escalada
  const [scaledH, setScaledH]       = useState(0);   // = 100vh

  /* 1) Carrega a imagem e calcula escala */
  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      const screenH     = window.innerHeight;
      const scaleFactor = screenH / img.height;
      const w           = img.width * scaleFactor;
      const h           = screenH;

      setScaledW(w);
      setScaledH(h);

      const needed = Math.ceil(window.innerWidth / w) + 2;
      setCopyCount(needed);
    };
  }, [src]);

  /* 2) Loop de animação */
  useEffect(() => {
    if (!scaledW || !copyCount) return;

    const els = Array.from(
      containerRef.current?.children || []
    ) as HTMLDivElement[];

    let rafId: number;

    const tick = () => {
      els.forEach((el) => {
        const x  = parseFloat(el.style.left || "0") - speed;
        const nx = x <= -scaledW ? x + scaledW * copyCount : x;
        el.style.left = `${nx}px`;
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [scaledW, copyCount, speed]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex }}
    >
      {Array.from({ length: copyCount }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: `${i * scaledW}px`,
            width: `${scaledW}px`,
            height: `${scaledH}px`,
          }}
        >
          {/* Next Image no modo fill — agora com proporção certa */}
          <Image
            src={src}
            alt={`parallax-${i}`}
            fill
            style={{
              objectFit: "cover",     // cobre o bloco sem distorcer
              imageRendering: "pixelated",
            }}
            priority
            sizes="100vh"            // largura em função da altura
            unoptimized              // evita transformações do Next
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
