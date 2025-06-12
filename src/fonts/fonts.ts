import { Inter, Bebas_Neue, DM_Serif_Display } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
export const dmSerif = DM_Serif_Display({
  subsets: ["latin"], variable: "--font-dm",
  weight: "400"
});
