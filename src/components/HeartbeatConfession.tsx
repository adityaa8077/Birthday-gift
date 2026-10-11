'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeartbeatConfessionProps {
  isOpen: boolean;
  onClose: () => void;
  onFullLetterChange?: (isFullLetter: boolean) => void;
}

const narrativePhases = [
  {
    phaseId: 'intro',
    lines: [
      "Sometimes I find myself wanting to write about Arpita...",
      "and I realize I still don’t know enough words to describe what she has come to mean to me.",
    ],
    delay: 3600,
  },
  {
    phaseId: 'connection',
    lines: [
      "It’s strange how someone can enter your life so recently and yet leave such a beautiful impression.",
      "We haven’t known each other for very long, and I know it’s too early to give everything a name or to understand where this connection is going.",
      "Maybe that’s exactly why I don’t want to rush it.",
      "I just want to appreciate it for what it is.",
    ],
    delay: 3400,
  },
  {
    phaseId: 'qualities',
    lines: [
      "You have this softness in the way you talk, this kindness in the way you treat people, and this warmth that makes conversations feel easier than they should.",
      "The more I get to know you, the more I realize that the person I imagined you to be was only a small part of who you actually are.",
      "And your smile… honestly, I don’t know how you manage it, but somehow it makes ordinary moments feel a little brighter. ✨",
    ],
    delay: 3800,
  },
  {
    phaseId: 'respect',
    lines: [
      "I know you’ve told me that you don’t want attachment or commitment right now.",
      "I heard you. And I respect that.",
      "I don’t want my feelings to become a weight you have to carry, nor do I want you to feel that you owe me anything because I care about you.",
    ],
    delay: 3400,
  },
  {
    phaseId: 'discovery',
    lines: [
      "Maybe some people aren’t meant to be understood all at once.",
      "Maybe they’re meant to be discovered slowly—through random conversations, silly arguments, unexpected jokes, and all those tiny moments that somehow stay with you.",
      "That’s how I want to know you.",
      "Not as an idea. Not as someone I’ve imagined. But simply as Arpita.",
    ],
    delay: 3200,
  },
  {
    phaseId: 'confession',
    lines: [
      "And yes… I like you. ❤️",
      "But there’s no hurry.",
      "Let’s let time tell us what this is supposed to become.",
    ],
    delay: 3600,
  },
  {
    phaseId: 'gratitude',
    lines: [
      "Until then, wherever life takes you, I genuinely hope it gives you reasons to smile and takes you further than you ever imagined.",
      "I’m simply grateful that our paths crossed.",
      "No expectations. No pressure. Just gratitude, affection, and a little bit of hope. ✨",
    ],
    delay: 3400,
  }
];

const montageImages = [
  { src: "/images/arpita/1.jpeg", caption: "“that genuine, heart-melting smile…”", objectPos: "50% 20%" },
  { src: "/images/arpita/2.jpeg", caption: "“that radiant grace…”", objectPos: "50% 15%" },
  { src: "/images/arpita/3.jpeg", caption: "“the warmth that makes every moment brighter…”", objectPos: "50% 15%" },
  { src: "/images/arpita/7.jpeg", caption: "“discovering who you are, one day at a time…”", objectPos: "50% 12%" },
  { src: "/images/arpita/5.jpeg", caption: "“simply grateful that our paths crossed…”", objectPos: "50% 15%" },
  { src: "/images/arpita/8.jpeg", caption: "“forever wishing you happiness, Arpita ✨”", objectPos: "50% 18%" },
];

export default function HeartbeatConfession({ isOpen, onClose, onFullLetterChange }: HeartbeatConfessionProps) {
  const [currentPhase, setCurrentPhase] = useState(-1);
  const [currentLine, setCurrentLine] = useState(-1);
  const [showFullLetterMode, setShowFullLetterMode] = useState(false);
  const [montageIndex, setMontageIndex] = useState(0);
  const [roseShift, setRoseShift] = useState(false);

  useEffect(() => {
    if (isOpen) {
      onFullLetterChange?.(showFullLetterMode);
    } else {
      onFullLetterChange?.(false);
    }
  }, [isOpen, showFullLetterMode, onFullLetterChange]);

  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number; size: number; duration: number }>>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playHeartbeatSound = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Lub
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(62, now);
      osc1.frequency.exponentialRampToValueAtTime(32, now + 0.12);
      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Dub
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(54, now + 0.16);
      osc2.frequency.exponentialRampToValueAtTime(28, now + 0.28);
      gain2.gain.setValueAtTime(0.28, now + 0.16);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.16);
      osc2.stop(now + 0.28);
    } catch {
      // Audio autoplay policy fallback silently
    }
  }, []);

  const spawnHearts = useCallback(() => {
    const list = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 92 + 4,
      delay: Math.random() * 5,
      size: Math.random() * 16 + 12,
      duration: Math.random() * 4 + 6,
    }));
    setHearts(list);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setCurrentPhase(-1);
      setCurrentLine(-1);
      setShowFullLetterMode(false);
      setMontageIndex(0);
      setRoseShift(false);
      setHearts([]);
      return;
    }

    const t = setTimeout(() => {
      setCurrentPhase(0);
      setCurrentLine(0);
      playHeartbeatSound();
    }, 1800);

    return () => clearTimeout(t);
  }, [isOpen, playHeartbeatSound]);


  useEffect(() => {
    if (currentPhase < 0 || currentLine < 0 || showFullLetterMode) return;

    const phase = narrativePhases[currentPhase];
    if (!phase) return;

    playHeartbeatSound();

    if (currentLine >= phase.lines.length) {
      const nextPhase = currentPhase + 1;

      if (nextPhase >= narrativePhases.length) {
        const finishTimer = setTimeout(() => {
          setRoseShift(true);
          setShowFullLetterMode(true);
          spawnHearts();
        }, 2200);
        return () => clearTimeout(finishTimer);
      }

      const phaseTimer = setTimeout(() => {
        setCurrentPhase(nextPhase);
        setCurrentLine(0);

        if (nextPhase >= 4) {
          setRoseShift(true);
        }
        if (nextPhase === 5) {
          spawnHearts();
        }
      }, 1600);

      return () => clearTimeout(phaseTimer);
    }

    const lineDelay = phase.delay;
    const lineTimer = setTimeout(() => {
      setCurrentLine((prev) => prev + 1);
    }, lineDelay);

    return () => clearTimeout(lineTimer);
  }, [currentPhase, currentLine, showFullLetterMode, playHeartbeatSound, spawnHearts]);

  useEffect(() => {
    if (!showFullLetterMode) return;
    const cycle = setInterval(() => {
      setMontageIndex((prev) => (prev + 1) % montageImages.length);
    }, 4500);
    return () => clearInterval(cycle);
  }, [showFullLetterMode]);

  const getRevealedLines = () => {
    const output: Array<{ text: string; id: string; isConfession: boolean }> = [];
    for (let p = 0; p <= currentPhase && p < narrativePhases.length; p++) {
      const limit = p === currentPhase ? currentLine : narrativePhases[p].lines.length;
      for (let l = 0; l < limit && l < narrativePhases[p].lines.length; l++) {
        const str = narrativePhases[p].lines[l];
        output.push({
          text: str,
          id: `${p}-${l}`,
          isConfession: str.includes("And yes… I like you."),
        });
      }
    }
    return output;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="fixed inset-0 z-[200] overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start bg-deepBlack text-softIvory select-none"
        style={{
          background: roseShift
            ? 'radial-gradient(ellipse at center, #240f17 0%, #0d0609 50%, #050203 100%)'
            : '#080808',
          transition: 'background 2.5s ease',
        }}
      >
        {/* Subtle Ambient Background Glow */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-roseGold/10 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Floating Heart Particles */}
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: '105vh', x: `${h.x}vw`, opacity: 0, scale: 0.8 }}
            animate={{
              y: '-15vh',
              opacity: [0, 0.75, 0.75, 0],
              scale: [0.8, 1.1, 0.9],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: h.duration,
              delay: h.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="fixed z-[201] pointer-events-none select-none text-roseGold drop-shadow-[0_0_8px_rgba(244,160,160,0.6)]"
            style={{ fontSize: `${h.size}px` }}
          >
            ♥
          </motion.div>
        ))}

        {/* Top Heartbeat Pulsing Indicator */}
        <div className="fixed top-4 sm:top-6 left-0 right-0 z-30 flex items-center justify-center gap-2 sm:gap-3 pointer-events-none px-4">
          <motion.div
            animate={{
              scale: [1, 1.45, 1.1, 1.35, 1],
              opacity: [0.4, 0.9, 0.6, 0.85, 0.4],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-roseGold to-blushPink shadow-[0_0_20px_rgba(244,160,160,0.8)]"
          />
          <span className="font-playfair text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-blushPink/80 truncate">
            {showFullLetterMode ? "A Letter For Arpita" : "Listening to My Heart"}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full glass border border-roseGold/30 text-softIvory/70 hover:text-blushPink hover:border-roseGold transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
          aria-label="Close"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* PHASE 1: Real-time Cinematic Text Stream */}
        {!showFullLetterMode && (
          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 py-24 sm:py-28 flex flex-col items-center justify-center min-h-screen text-center">
            <div className="space-y-6 sm:space-y-8">
              {getRevealedLines().map((item) => (
                <motion.p
                  key={item.id}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className={`leading-relaxed transition-colors duration-500 ${
                    item.isConfession
                      ? 'font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-blushPink tracking-wide py-3 sm:py-4 drop-shadow-[0_0_25px_rgba(244,160,160,0.6)]'
                      : 'font-caveat text-xl sm:text-3xl md:text-4xl text-softIvory/90 font-medium'
                  }`}
                >
                  {item.text}
                </motion.p>
              ))}
            </div>

            {/* Skip prompt */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setRoseShift(true);
                setShowFullLetterMode(true);
                spawnHearts();
              }}
              className="mt-12 sm:mt-16 text-[11px] sm:text-xs font-inter tracking-[0.25em] uppercase text-softIvory/50 hover:text-blushPink cursor-pointer transition-all border border-roseGold/20 px-4 py-2 rounded-full"
            >
              Read full letter →
            </motion.button>
          </div>
        )}

        {/* PHASE 2: Complete Parchment Love Letter with Face-Focused Carousel */}
        {showFullLetterMode && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-4xl px-3 sm:px-6 py-20 sm:py-24 flex flex-col items-center"
          >
            {/* Header Title */}
            <div className="text-center mb-8 sm:mb-12 space-y-2 sm:space-y-3">
              <span className="font-playfair text-[10px] sm:text-xs tracking-[0.35em] text-blushPink uppercase block">
                From My Heart To Yours
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient">
                For Arpita ✦
              </h2>
              <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-roseGold to-transparent mx-auto mt-3" />
            </div>

            {/* Letter Parchment Container with Mobile Padding */}
            <div className="w-full bg-gradient-to-b from-[#faf6ed] via-[#f7f0df] to-[#f2e7ce] text-[#33221b] p-5 sm:p-10 md:p-14 rounded-lg border border-[#e5d5b7] shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden space-y-6 sm:space-y-8">
              
              <div className="absolute top-0 bottom-0 left-3 sm:left-6 md:left-8 w-[1px] bg-[#d8c3a1]/60" />

              {/* Photo Showcase Carousel with Face Focus */}
              <div className="ml-2 sm:ml-6 md:ml-8 mb-6 sm:mb-8">
                <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] rounded-lg overflow-hidden border border-[#d8c3a1] shadow-md bg-black/10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={montageIndex}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.8 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={montageImages[montageIndex].src}
                        alt="Arpita"
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-cover"
                        style={{ objectPosition: montageImages[montageIndex].objectPos }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 text-center">
                        <p className="font-cormorant text-base sm:text-xl md:text-2xl text-softIvory italic drop-shadow-md px-2">
                          {montageImages[montageIndex].caption}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Exact User Words in Beautiful Typography */}
              <div className="space-y-4 sm:space-y-6 font-cormorant text-lg sm:text-xl md:text-2xl leading-relaxed text-[#3d2a21] ml-2 sm:ml-6 md:ml-8">
                <p>
                  Sometimes I find myself wanting to write about Arpita, and I realize I still don’t know enough words to describe what she has come to mean to me.
                </p>

                <p>
                  It’s strange how someone can enter your life so recently and yet leave such a beautiful impression. We haven’t known each other for very long, and I know it’s too early to give everything a name or to understand where this connection is going. Maybe that’s exactly why I don’t want to rush it.
                </p>

                <p className="font-semibold text-[#8b3a4a] italic border-l-2 border-[#b76e79] pl-3 sm:pl-4 py-0.5">
                  I just want to appreciate it for what it is.
                </p>

                <p>
                  You have this softness in the way you talk, this kindness in the way you treat people, and this warmth that makes conversations feel easier than they should. The more I get to know you, the more I realize that the person I imagined you to be was only a small part of who you actually are.
                </p>

                <p>
                  And your smile… honestly, I don’t know how you manage it, but somehow it makes ordinary moments feel a little brighter. ✨
                </p>

                <p>
                  I know you’ve told me that you don’t want attachment or commitment right now. I heard you. And I respect that. I don’t want my feelings to become a weight you have to carry, nor do I want you to feel that you owe me anything because I care about you.
                </p>

                <p>
                  Maybe some people aren’t meant to be understood all at once. Maybe they’re meant to be discovered slowly—through random conversations, silly arguments, unexpected jokes, and all those tiny moments that somehow stay with you.
                </p>

                <p>
                  That’s how I want to know you.
                </p>

                <p className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-[#6a1b29]">
                  Not as an idea. Not as someone I’ve imagined. But simply as Arpita.
                </p>

                <div className="py-3 sm:py-4 my-2 text-center border-y border-[#d8c3a1]/60">
                  <p className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#8b3a4a] tracking-wide">
                    And yes… I like you. ❤️
                  </p>
                </div>

                <p>
                  But there’s no hurry.
                </p>

                <p className="italic text-[#4a3429]">
                  Let’s let time tell us what this is supposed to become.
                </p>

                <p>
                  Until then, wherever life takes you, I genuinely hope it gives you reasons to smile and takes you further than you ever imagined.
                </p>

                <p className="font-medium">
                  I’m simply grateful that our paths crossed.
                </p>

                <p className="text-center font-playfair text-lg sm:text-xl md:text-2xl text-[#8b3a4a] font-semibold pt-2 sm:pt-4">
                  No expectations. No pressure. Just gratitude, affection, and a little bit of hope. ✨
                </p>
              </div>

              {/* Signature Block */}
              <div className="border-t border-[#d8c3a1] pt-6 sm:pt-8 mt-6 sm:mt-10 text-center space-y-2 ml-2 sm:ml-6 md:ml-8">
                <p className="font-cormorant text-base sm:text-lg text-[#6d5547] italic">
                  Forever wishing you happiness,
                </p>
                <p className="font-caveat text-3xl sm:text-4xl md:text-5xl font-bold text-[#8b3a4a]">
                  — Aditya ❤️
                </p>
              </div>
            </div>

            {/* Exit Action Button */}
            <div className="mt-8 sm:mt-12 text-center">
              <button
                onClick={onClose}
                className="px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-roseGold to-deepRose text-softIvory font-inter font-semibold tracking-widest uppercase text-xs sm:text-sm shadow-xl hover:shadow-[0_0_30px_rgba(183,110,121,0.6)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                Keep This in My Heart ✨
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
