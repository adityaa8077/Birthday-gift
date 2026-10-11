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
  title: "For Arpita ✦",
  description: "A small corner of the internet, made just for you — to remind you how incredible you already are.",
  keywords: "Arpita, love, confession, tech, AI engineer, dreams, GATE",
  authors: [{ name: "Made with love by Aditya" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "For Arpita ✦",
    description: "Something I should have told you a long time ago.",
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
