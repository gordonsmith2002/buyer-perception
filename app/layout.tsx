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
    "Win-loss analysis tells you why you lost the deal. Buyer Perception tells you what that buyer is saying about you right now.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title:
      "Buyer Perception | Find out what your buyers really think about you",
    description:
      "Win-loss analysis tells you why you lost the deal. Buyer Perception tells you what that buyer is saying about you right now.",
    url: "https://buyerperception.com",
    siteName: "Buyer Perception",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Buyer Perception — Find out what your buyers really think about you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Perception",
    description:
      "Win-loss analysis tells you why you lost the deal. Buyer Perception tells you what that buyer is saying about you right now.",
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
