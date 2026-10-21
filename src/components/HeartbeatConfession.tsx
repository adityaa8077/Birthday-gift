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
      "Sometimes I find myself lost in thoughts of you...",
      "composing a thousand different letters in my mind.",
    ],
    delay: 3600,
  },
  {
    phaseId: 'emotions',
    lines: [
      "There are so many emotions I have carried in my heart lately — heavy and beautiful all at once.",
      "Sometimes I just don't know the right way to weave them into words...",
      "or if I even have the courage to say them out loud.",
      "But my heart needs to speak.",
    ],
    delay: 3400,
  },
  {
    phaseId: 'presence',
    lines: [
      "I often sit back and wonder how someone like you walked into my life...",
      "and so effortlessly became one of the most beautiful parts of it.",
      "You came into my world like a gentle breeze on a suffocating day. ✨",
    ],
    delay: 3800,
  },
  {
    phaseId: 'admiration',
    lines: [
      "I want you to know: I admire you a lot. I am in absolute awe of your kindness, your warmth...",
      "and the effortless way you make everyone around you feel deeply valued and safe.",
      "I don't think you even realize the sheer amount of light you bring into a room just by existing.",
    ],
    delay: 3400,
  },
  {
    phaseId: 'smile',
    lines: [
      "And your smile… your smile is honestly one of my favorite miracles in this world.",
      "I don't know how you do it, but one glimpse of it makes even my hardest days feel instantly lighter.",
      "I am so profoundly grateful that out of all the billions of paths in this universe, ours managed to cross. ✨",
    ],
    delay: 3200,
  },
  {
    phaseId: 'choosing',
    lines: [
      "Today and always, my deepest prayers and heartfelt blessings are with you...",
      "May the universe always protect your tender heart and bring you endless joy.",
      "You have quietly, softly, become one of the most beautiful chapters of my life's story. ✨",
    ],
    delay: 3600,
  },
  {
    phaseId: 'promise',
    lines: [
      "And if you ever have a difficult day, or if you ever feel alone...",
      "I want you to close your eyes and just remember this:",
      "Somewhere out there is someone who genuinely, selflessly wishes the absolute best for you.",
      "Someone who thanks the stars every single night, just because you exist. ✨",
    ],
    delay: 3400,
  }
];

const montageImages = [
  { src: "/images/shatakshi-1.jpeg", caption: "“that genuine, heart-melting smile…”", objectPos: "50% 20%" },
  { src: "/images/shatakshi-2.jpeg", caption: "“that radiant grace…”", objectPos: "50% 15%" },
  { src: "/images/shatakshi-3.jpeg", caption: "“the warmth that makes every moment brighter…”", objectPos: "50% 15%" },
  { src: "/images/shatakshi-4.jpeg", caption: "“discovering who you are, one day at a time…”", objectPos: "50% 32%" },
  { src: "/images/shatakshi-5.jpeg", caption: "“I admire you so much, Shatakshi…”", objectPos: "50% 15%" },
  { src: "/images/shatakshi-6.jpeg", caption: "“simply grateful that our paths crossed…”", objectPos: "50% 18%" },
  { src: "/images/shatakshi-7.jpeg", caption: "“forever wishing you the happiest birthday ✨”", objectPos: "50% 6%" },
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
          isConfession: str.includes("I would choose to meet you every single time"),
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
            {showFullLetterMode ? "A Birthday Letter For Shatakshi" : "A Wish From The Heart"}
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
                A Birthday Wish From My Heart
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient">
                Happy Birthday, Shatakshi ✦
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
                        alt="Shatakshi"
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

              {/* The User's Letter in Beautiful Typography */}
              <div className="space-y-4 sm:space-y-6 font-cormorant text-lg sm:text-xl md:text-2xl leading-relaxed text-[#3d2a21] ml-2 sm:ml-6 md:ml-8">
                <p className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#6a1b29] italic">
                  Dear Shatakshi,
                </p>

                <p>
                  Today is your special day, and I wanted to put into words something I have carried in my heart for a long time. There are so many emotions and thoughts of genuine admiration I hold for you—quiet and beautiful all at once. Sometimes life moves so fast that we forget to tell the most wonderful people just how much they mean to us, but today, I want to make sure you know.
                </p>

                {/* Birthday Wish & Heartfelt Tribute */}
                <div className="my-5 p-5 sm:p-7 rounded-lg bg-[#f5ecdc] border-l-4 border-[#8b3a4a] shadow-sm space-y-4">
                  <p className="font-playfair text-2xl sm:text-3xl font-bold text-[#8b3a4a] italic">
                    Wishing You The Happiest Birthday! 🎂✨
                  </p>
                  <p className="font-cormorant text-lg sm:text-xl md:text-2xl italic leading-relaxed text-[#3d2a21]">
                    For I have come to believe that the most precious people are those who walk into our lives quietly,
                    <br />
                    not to make noise, but to bring warmth,
                    <br />
                    not to demand the spotlight, but to illuminate everyone around them,
                    <br />
                    and who carry genuine kindness like a natural instinct.
                  </p>
                  <p className="font-cormorant text-lg sm:text-xl md:text-2xl italic leading-relaxed text-[#3d2a21]">
                    You are one of those rare souls.
                    <br />
                    A blessing to everyone lucky enough to know you.
                    <br />
                    May this year give back to you all the warmth, joy, and peace you so selflessly give away.
                    <br />
                    May your laughter always be loud, your burdens always be light,
                    <br />
                    and may every step of your journey lead you toward your highest dreams.
                  </p>
                </div>

                <p>
                  Watching your journey, seeing how hard you work with such a brilliant mind, and yet how tenderly you hold on to your humility and kindness makes me admire you even more. You never boast; you just quietly shine.
                </p>

                <p>
                  I often sit back and wonder how someone like you walked into my life and so effortlessly became one of the most beautiful parts of it. You came into my world like a gentle breeze on a suffocating day. Your presence has this magical way of making everything feel brighter, calmer, and somehow exactly the way it is supposed to be.
                </p>

                <p className="font-semibold text-[#8b3a4a] italic border-l-2 border-[#b76e79] pl-3 sm:pl-4 py-0.5">
                  I am in absolute awe of your kindness, your warmth, and the effortless way you make everyone around you feel deeply valued and safe. I don't think you even realize the sheer amount of light you bring into a room just by existing.
                </p>

                <p>
                  And your smile… your smile is honestly one of my favorite miracles in this world. I don't know how you do it, but one glimpse of it makes even my hardest days feel instantly lighter. I am so profoundly grateful that out of all the billions of paths in this universe, ours managed to cross, and I was given the privilege of knowing you.
                </p>

                <p>
                  Some people bring happiness wherever they go, but you bring it to me even when I am just sitting alone in a quiet room, simply thinking about you.
                </p>

                <div className="py-3 sm:py-4 my-2 text-center border-y border-[#d8c3a1]/60">
                  <p className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#8b3a4a] tracking-wide">
                    May all the prayers and blessings of this universe surround you with peace, happiness, and light, today and always. ✨
                  </p>
                </div>

                <p>
                  You have quietly, softly, become one of the most beautiful chapters of my life's story.
                </p>

                <p>
                  I may not always say these things out loud to you, but please know that you mean more to me than language could ever explain. I truly hope that wherever life takes you, it lays out a path of flowers for you. I pray it gives you endless reasons to smile and surrounds you with all the incredible, beautiful things you deserve.
                </p>

                <p className="font-medium">
                  And if you ever have a difficult day, or if you ever feel alone, I want you to close your eyes and just remember this: somewhere out there is someone who genuinely, selflessly wishes the absolute best for you.
                </p>

                <p className="text-center font-playfair text-lg sm:text-xl md:text-2xl text-[#8b3a4a] font-semibold pt-2 sm:pt-4">
                  Someone who thanks the stars every single night, just because you exist. ✨
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
