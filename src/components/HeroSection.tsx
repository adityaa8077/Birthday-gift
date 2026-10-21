'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('cinematic-reels') || document.getElementById('birthday-timer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openVideoModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Ambient Video Layer (Subtle, Behind Photo) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-25 filter blur-[1px] brightness-70"
        >
          <source src="/videos/dolly-video-1.mp4" type="video/mp4" />
        </video>
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
            src="/images/dolly-1.jpeg"
            alt="Happy Birthday Dolly"
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
              🎂 21 October ✦ Happy Birthday Dolly 🎂
            </span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-5 leading-tight">
            <span className="block gold-gradient">Happy Birthday Dolly 🎂✨</span>
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              onClick={scrollToContent}
              className="group relative px-8 sm:px-12 py-3.5 sm:py-4 font-inter text-base sm:text-lg font-semibold text-deepBlack bg-warmGold hover:bg-amberHighlight transition-all duration-300 overflow-hidden rounded-full cursor-pointer shadow-[0_0_25px_rgba(212,175,55,0.35)] active:scale-95"
            >
              <span className="relative z-10 font-bold tracking-wide">Begin The Celebration ✦</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amberHighlight to-warmGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 1 }}
              onClick={openVideoModal}
              className="px-6 sm:px-8 py-3.5 sm:py-4 font-inter text-sm sm:text-base font-semibold text-warmGold border border-warmGold/40 bg-black/50 backdrop-blur-md hover:bg-warmGold/15 transition-all duration-300 rounded-full cursor-pointer flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <span>🎬 Watch Video In Motion</span>
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

      {/* Starting Video Full Player Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm sm:max-w-md w-full rounded-2xl overflow-hidden border border-warmGold/40 shadow-[0_0_50px_rgba(212,175,55,0.4)] bg-deepBlack cursor-default"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-deepBlack/80 border border-warmGold/40 text-softIvory hover:text-warmGold flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  ref={modalVideoRef}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  src="/videos/dolly-video-1.mp4"
                />
              </div>

              <div className="p-4 sm:p-5 bg-gradient-to-t from-deepBlack via-[#120e10] to-[#120e10] border-t border-warmGold/20 text-center">
                <p className="font-cormorant text-base sm:text-lg text-softIvory italic">
                  &quot;The moments that make my heart skip a beat 💕&quot;
                </p>
                <span className="text-xs font-inter uppercase tracking-widest text-warmGold/70 mt-1 block">
                  Dolly In Motion ✦ With Love
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
