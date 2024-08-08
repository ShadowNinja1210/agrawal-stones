import { Cormorant_Garamond, Questrial, Inter } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "300", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const questrial = Questrial({ weight: ["400"], subsets: ["latin"] });

export { cormorantGaramond, questrial, inter };
