import type { ReactNode } from "react";
import { Libre_Baskerville } from "next/font/google";

const checkpointEditorial = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-editorial-checkpoint",
});

export default function TypeCompareLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={`${checkpointEditorial.variable}`}>{children}</div>
  );
}
