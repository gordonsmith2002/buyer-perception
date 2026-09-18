import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteAnalytics from "../components/SiteAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buyerperception.com"),
  title: "Buyer Perception | Win-loss analysis, done properly.",
  description:
    "Your buyers had no incentive to tell your salespeople the truth. Honesty just invites a debate and more selling. They have no reason to lie to us: we interview your lost prospects and churned customers anonymously, and no name ever reaches you.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Buyer Perception | Win-loss analysis, done properly.",
    description:
      "Your buyers had no incentive to tell your salespeople the truth. Honesty just invites a debate and more selling. They have no reason to lie to us: we interview your lost prospects and churned customers anonymously, and no name ever reaches you.",
    url: "https://buyerperception.com",
    siteName: "Buyer Perception",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Buyer Perception - Win-loss analysis, done properly.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Perception",
    description:
      "Your buyers had no incentive to tell your salespeople the truth. Honesty just invites a debate and more selling. They have no reason to lie to us: we interview your lost prospects and churned customers anonymously, and no name ever reaches you.",
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
        <SiteAnalytics />
        {children}
      </body>
    </html>
  );
}
