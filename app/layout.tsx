import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
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
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Buyer Perception",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Perception",
    description: "Find out what your buyers really think about you.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} antialiased overflow-x-hidden`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
