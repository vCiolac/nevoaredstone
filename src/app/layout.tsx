import "./globals.css";
import { AudioProvider } from "@/contexts/AudioContext";
import GameParallaxBackground from "@/components/GameParallaxBackground";
import TopNav from "@/components/TopNav";
import { inter, bebas, dmSerif } from "@/fonts/fonts";

export const metadata = {
  title: "Névoa Redstone – Quiz",
  description: "Descubra seu personagem mágico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebas.variable} ${dmSerif.variable}`}>
      <body className={`${inter.variable} font-sans text-white`}>
        <AudioProvider>
          <GameParallaxBackground />
          <TopNav />
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
