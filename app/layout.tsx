import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
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
  metadataBase: new URL("https://buyerperception.com"),
  title:
    "Buyer Perception | Find out what your buyers really think about you",
  description:
    "Win-loss analysis tells you why you lost. We anonymously interview your lost prospects and churned customers to show you the pipeline they're creating or destroying right now, not what your CRM says.",
  openGraph: {
    title:
      "Buyer Perception | Find out what your buyers really think about you",
    description:
      "Win-loss analysis tells you why you lost. We anonymously interview your lost prospects and churned customers to show you the pipeline they're creating or destroying right now, not what your CRM says.",
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
      <body className={`${sans.className} ${dmSerif.variable} antialiased overflow-x-hidden`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

