import ParallaxLayer from "@/components/ParallaxLayer";

const layers = [
  { src: "/images/parallax/sky.png",          speed: 0.2, z: -50 },
  { src: "/images/parallax/far-clouds.png",   speed: 0.4, z: -40 },
  { src: "/images/parallax/far-mountains.png",speed: 0.7, z: -30 },
  { src: "/images/parallax/mountains.png",    speed: 1,   z: -20 },
  { src: "/images/parallax/near-clouds.png",  speed: 1.5, z: -10 },
  { src: "/images/parallax/trees.png",        speed: 2,   z:   0 },
];

export default function GameParallaxBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {layers.map((layer, idx) => (
        <ParallaxLayer
          key={idx}
          src={layer.src}
          speed={layer.speed}
          zIndex={layer.z}
        />
      ))}
    </div>
  );
}
