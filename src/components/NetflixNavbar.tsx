'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NetflixNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-deepBlack/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-6 sm:gap-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold gold-gradient cursor-pointer tracking-wider text-left"
          >
            ARPITA&apos;S STORY
          </button>
          
          <div className="hidden md:flex gap-6 font-inter text-sm">
            <button onClick={() => scrollToSection('hero')} className="text-softIvory/80 hover:text-warmGold transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('quiet-grind')} className="text-softIvory/80 hover:text-warmGold transition-colors cursor-pointer">
              The Grind
            </button>
            <button onClick={() => scrollToSection('visionary-action')} className="text-softIvory/80 hover:text-warmGold transition-colors cursor-pointer">
              Vision
            </button>
            <button onClick={() => scrollToSection('destination-google')} className="text-softIvory/80 hover:text-warmGold transition-colors cursor-pointer">
              Dreams
            </button>
            <button onClick={() => scrollToSection('heart-behind-brilliance')} className="text-softIvory/80 hover:text-warmGold transition-colors cursor-pointer">
              Her Heart
            </button>
            <button onClick={() => scrollToSection('open-when')} className="text-softIvory/80 hover:text-warmGold transition-colors cursor-pointer">
              Letters
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollToSection('open-when')}
            className="md:hidden text-xs font-inter uppercase tracking-widest text-warmGold border border-warmGold/30 px-3 py-1 rounded-full cursor-pointer"
          >
            Letters
          </button>
          <span className="text-2xl sm:text-3xl select-none">💫</span>
        </div>
      </div>
    </motion.nav>
  );
}
