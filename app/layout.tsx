import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buyerperception.com"),
  title: "Buyer Perception Exercise",
  description: "Facilitated Buyer Perception Exercise session tool.",
  openGraph: {
    title:
      "Buyer Perception — Find out what your buyers really think about you",
    description:
      "We anonymously interview your lost prospects and churned customers and bring back the truth about how your market perceives you.",
    url: "https://buyerperception.com",
    siteName: "Buyer Perception",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Perception",
    description: "Find out what your buyers really think about you.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${display.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

