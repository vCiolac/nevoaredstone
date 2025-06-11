import "./globals.css";
import { Inter } from "next/font/google";
import { AudioProvider } from "@/contexts/AudioContext";
import GameParallaxBackground from "@/components/GameParallaxBackground";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Névoa Redstone – Quiz",
  description: "Descubra seu personagem mágico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
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
