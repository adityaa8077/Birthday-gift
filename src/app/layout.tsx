import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sandhya (Sandy) ✦",
  description: "A small corner of the internet, made just for Sandhya (Sandy) — to remind you how much you are admired and appreciated.",
  keywords: "Sandhya, Sandy, admiration, love, confession, appreciation, romance, gratitude, heartfelt letter",
  authors: [{ name: "Made with love by Aditya" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Sandhya (Sandy) ✦",
    description: "Something I wanted to tell you from the bottom of my heart.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${caveat.variable} font-inter antialiased bg-deepBlack text-softIvory`}>
        {children}
      </body>
    </html>
  );
}
