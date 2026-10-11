'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientEffects() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);
  const [showIdleToast, setShowIdleToast] = useState(false);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor (Desktop only)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Mobi|Android|iPhone|iPad|Macintosh/i.test(navigator.userAgent) || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0)
      );
    };
    checkMobile();
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Idle Toast
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const resetTimer = () => {
      setShowIdleToast(false);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowIdleToast(true);
      }, 5 * 60 * 1000); // 5 minutes
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []);

  // Auto-hide Idle Toast after 6 seconds
  useEffect(() => {
    if (showIdleToast) {
      const hideTimer = setTimeout(() => {
        setShowIdleToast(false);
      }, 6000);
      return () => clearTimeout(hideTimer);
    }
  }, [showIdleToast]);

  // Console Easter Egg
  useEffect(() => {
    console.log(
      "%cHello, curious one. This page was made with a lot of care. ✦",
      "color: #D4AF37; font-size: 16px; font-weight: bold; font-family: 'Playfair Display', serif; text-shadow: 0 0 5px rgba(212,175,55,0.4);"
    );
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator (Hairline top) */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-warmGold z-[60] transition-all duration-100 ease-out origin-left"
        style={{ width: `${scrollPercent}%` }}
        aria-hidden="true"
      />

      {/* Custom Cursor (Soft small circle) */}
      {!isMobile && (
        <motion.div
          className="fixed w-4 h-4 rounded-full border border-warmGold/40 bg-warmGold/5 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: cursorPos.x,
            y: cursorPos.y,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 300,
            mass: 0.5,
          }}
          aria-hidden="true"
        />
      )}

      {/* Idle Toast */}
      <AnimatePresence>
        {showIdleToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[55] glass px-6 py-3 rounded-full border border-warmGold/30 text-softIvory/80 text-sm italic font-cormorant tracking-wide shadow-lg text-center"
          >
            "Still here. Take your time."
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
