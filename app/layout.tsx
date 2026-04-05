import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Buyer Perception",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} ${dmSerif.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

