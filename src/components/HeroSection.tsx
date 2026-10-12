'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const lines = [
    "Some people walk into your life quietly.",
    "And change everything.",
  ];

  // Guarantee video playback even across strict mobile browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        const handleFirstInteraction = () => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
          window.removeEventListener('click', handleFirstInteraction);
          window.removeEventListener('touchstart', handleFirstInteraction);
        };
        window.addEventListener('click', handleFirstInteraction);
        window.addEventListener('touchstart', handleFirstInteraction);
      });
    }
  }, []);

  useEffect(() => {
    if (currentLine < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, lines.length]);

  const scrollToContent = () => {
    const element = document.getElementById('today-reminder') || document.getElementById('quiet-grind');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Background Video - Plays Full Screen in Background */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-0 h-[125%] w-full overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 sm:opacity-85 filter brightness-[0.88] contrast-[1.08]"
          style={{ objectPosition: '50% 18%' }}
        >
          <source src="/videos/new-video.mp4" type="video/mp4" />
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Soft, Transparent Vignette allowing the face to remain bright and focused */}
        <div className="absolute inset-0 bg-gradient-to-b from-netflixBlack/35 via-transparent to-deepBlack/95 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-deepBlack/15 to-deepBlack/65 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Opening lines */}
        <div className="mb-8 sm:mb-12 min-h-[70px] sm:min-h-[90px]">
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
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block gold-gradient">Dear Her ✦</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="font-playfair text-lg sm:text-2xl md:text-3xl text-softIvory mb-4 sm:mb-6 tracking-wide px-2"
          >
            &quot;In a world full of noise, you are my favorite quiet place.&quot;
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="font-cormorant text-base sm:text-xl md:text-2xl text-warmGold/90 mb-8 sm:mb-12 italic tracking-wide px-2"
          >
            For the one whose smile turns ordinary moments into poetry ✨
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
            onClick={scrollToContent}
            className="group relative px-8 sm:px-12 py-3.5 sm:py-4 font-inter text-base sm:text-lg font-semibold text-deepBlack bg-warmGold hover:bg-amberHighlight transition-all duration-300 overflow-hidden rounded-sm cursor-pointer shadow-lg active:scale-95"
          >
            <span className="relative z-10 font-bold tracking-wide">Begin the Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amberHighlight to-warmGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="mt-10 sm:mt-16"
          >
            <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-warmGold to-transparent mx-auto animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
