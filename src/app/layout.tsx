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
  title: "Happy Birthday Shatakshi 🎂✨",
  description: "A small corner of the internet, made just for Shatakshi — celebrating your special day and the beautiful soul you are.",
  keywords: "Shatakshi, Happy Birthday, 21 October 2007, celebration, birthday wish, admiration, heartfelt letter",
  authors: [{ name: "Made with love by Aditya" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Happy Birthday Shatakshi 🎂✨",
    description: "A heartfelt birthday celebration made just for you.",
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
