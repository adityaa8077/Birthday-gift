'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);

  const lines = [
    "To someone whose kindness lights up every room,",
    "Wishing you the happiest and most magical birthday.",
  ];

  useEffect(() => {
    if (currentLine < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, lines.length]);

  const scrollToContent = () => {
    const element = document.getElementById('birthday-timer') || document.getElementById('cinematic-reels');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Ambient Glow Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-warmGold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-roseGold/10 rounded-full blur-[120px]" />
      </div>

      {/* Background Photo with Cinematic Ken-Burns Motion & Full Face Focus */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-[1] h-[125%] w-full overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/arpita-1.jpeg"
            alt="Happy Birthday Arpita"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-85 sm:opacity-90 filter brightness-[0.88] contrast-[1.05]"
            style={{ objectPosition: '50% 10%' }}
          />
        </motion.div>

        {/* Soft, Transparent Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-netflixBlack/40 via-transparent to-deepBlack/95 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-deepBlack/10 to-deepBlack/70 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Opening lines */}
        <div className="mb-6 sm:mb-10 min-h-[70px] sm:min-h-[85px]">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentLine >= index ? 1 : 0,
                y: currentLine >= index ? 0 : 20,
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-cormorant text-xl sm:text-3xl md:text-4xl text-softIvory/90 mb-2 italic"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: currentLine >= lines.length - 1 ? 1 : 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          {/* Badge */}
          <div className="inline-block px-5 py-1.5 rounded-full border border-warmGold/40 bg-warmGold/10 backdrop-blur-md mb-3 sm:mb-4 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <span className="text-xs sm:text-sm font-inter tracking-[0.22em] text-warmGold uppercase font-semibold">
              🎂 22 October ✦ Happy Birthday Arpita 🎂
            </span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-5 leading-tight">
            <span className="block gold-gradient">Happy Birthday Arpita 🎂✨</span>
            <span className="block text-xl sm:text-3xl text-warmGold/80 font-cormorant italic mt-1 font-normal tracking-widest">
              Celebrating the Most Beautiful, Radiant Soul
            </span>
          </h1>

          <div className="inline-block px-4 py-1 rounded-full border border-warmGold/30 bg-black/40 backdrop-blur-sm mb-4">
            <span className="text-xs sm:text-sm font-inter tracking-[0.2em] text-warmGold uppercase font-medium">
              ✨ Pure Grace ✦ Unmatched Warmth ✦ Endless Charm ✨
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="font-playfair text-lg sm:text-2xl md:text-3xl text-softIvory mb-4 sm:mb-6 tracking-wide px-2"
          >
            &quot;May your special day be filled with endless laughter, gentle peace, and all the immense joy your beautiful heart brings into this world.&quot;
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="font-cormorant text-base sm:text-xl md:text-2xl text-warmGold/90 mb-8 sm:mb-10 italic tracking-wide px-2"
          >
            Today is entirely about celebrating you — your gentle heart, that breathtaking smile, and the light you bring to every single person lucky enough to know you. 🥂✨
          </motion.p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              onClick={scrollToContent}
              className="group relative px-10 sm:px-14 py-4 sm:py-4.5 font-inter text-base sm:text-lg font-bold text-deepBlack bg-warmGold hover:bg-amberHighlight transition-all duration-300 overflow-hidden rounded-full cursor-pointer shadow-[0_0_35px_rgba(212,175,55,0.45)] active:scale-95"
            >
              <span className="relative z-10 tracking-wide">Begin The Celebration ✦</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amberHighlight to-warmGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-12 sm:mt-16 flex flex-col items-center justify-center cursor-pointer"
            onClick={scrollToContent}
          >
            <span className="text-xs font-inter tracking-[0.2em] uppercase text-softIvory/60 mb-2">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-5 h-9 rounded-full border border-warmGold/40 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 bg-warmGold rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
