import Image from "next/image";

type OrakExpression = "normal" | "happy" | "sad";
export type OrakReactionType = OrakExpression;

export function OrakCharacter({ expression }: { expression: OrakExpression }) {
  const imageMap = {
    normal: "/images/orak/normal.png",
    happy: "/images/orak/happy.png",
    sad: "/images/orak/sad.png",
  };

  return (
    <div className="w-48 h-64 relative">
      <Image
        src={imageMap[expression]}
        alt={`Orak ${expression}`}
        fill
        className="object-contain"
      />
    </div>
  );
}
