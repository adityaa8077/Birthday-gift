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
      "Arpita…",
      "There's something I've been carrying inside my heart for so long.",
      "Words I've written and erased a thousand times. But tonight, my heart refuses to stay silent.",
    ],
    delay: 3600,
  },
  {
    phaseId: 'realization',
    lines: [
      "I don't know when it started.",
      "Maybe it was the first time I saw your smile and forgot how to breathe.",
      "Maybe it was the way you laugh — like the whole world suddenly doesn't matter.",
      "Or maybe it was always you. From the very beginning.",
    ],
    delay: 3400,
  },
  {
    phaseId: 'feelings',
    lines: [
      "I think about you in the mornings before I even open my eyes.",
      "I think about you in the quiet moments when the world goes still.",
      "You're the first person I want to tell good news to…",
      "and the only person who can make a bad day feel okay.",
    ],
    delay: 3800,
  },
  {
    phaseId: 'truth',
    lines: [
      "So on your special day, I want to say what my heart has been whispering:",
      "I love you, Arpita. ♥️",
      "Not just today, but in every version of my life where I'm trying to be better for you.",
      "You see the person behind my mistakes, and you never gave up on me.",
    ],
    delay: 3400,
  },
  {
    phaseId: 'depth',
    lines: [
      "Your smile is my favourite sight. Your voice is my peace.",
      "Even your anger carries so much care that I wouldn't trade it for anyone else's kindness.",
      "If I am a better person today, it is because of you.",
      "You made me more patient, more thoughtful, and more honest with myself.",
    ],
    delay: 3200,
  },
  {
    phaseId: 'promise',
    lines: [
      "I won't rush you, and I will respect whatever you feel.",
      "I just wanted you to know that you are deeply, truly, and completely loved.",
      "Happy Birthday, my love. May life return all the happiness you've given me.",
      "Forever yours, Aditya. ✨",
    ],
    delay: 3600,
  },
  {
    phaseId: 'confession',
    lines: [
      "If the universe gave me one wish,",
      "it wouldn't be for wealth, or fame, or power.",
      "It would be you. It would always be you.",
      "I love you, Arpita. Always and forever. ♥️",
    ],
    delay: 3400,
  }
];

const montageImages = [
  { src: "/images/arpita-2.jpeg", caption: "“You are my whole universe, Arpita ♥️”", objectPos: "50% 10%" },
  { src: "/images/arpita-1.jpeg", caption: "“the face that rewrote my entire definition of beautiful…”", objectPos: "50% 10%" },
  { src: "/images/arpita-3.jpeg", caption: "“every time I see you, I fall a little harder…”", objectPos: "50% 10%" },
  { src: "/images/arpita-5.jpeg", caption: "“you don't know what you do to my heart…”", objectPos: "50% 10%" },
  { src: "/images/arpita-7.jpeg", caption: "“this smile — the reason I believe in magic…”", objectPos: "50% 10%" },
  { src: "/images/arpita-9.jpeg", caption: "“I want to be the reason you smile like this…”", objectPos: "50% 10%" },
  { src: "/images/arpita-10.jpeg", caption: "“my favorite person in the whole wide universe…”", objectPos: "50% 12%" },
  { src: "/images/arpita-11.jpeg", caption: "“I'm so in love with everything about you ♥️”", objectPos: "50% 10%" },
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
          isConfession: str.includes("I love you, Arpita") || str.includes("It would be you"),
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
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
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
            {showFullLetterMode ? "A Confession For Arpita" : "My Heart Speaking"}
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
              Read my full confession →
            </motion.button>
          </div>
        )}

        {/* PHASE 2: Complete Parchment Love Letter with Photo Carousel */}
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
                A Confession Written With My Whole Heart
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient">
                Dear Arpita ♥️
              </h2>
              <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-roseGold to-transparent mx-auto mt-3" />
            </div>

            {/* Letter Parchment Container */}
            <div className="w-full bg-gradient-to-b from-[#faf6ed] via-[#f7f0df] to-[#f2e7ce] text-[#33221b] p-5 sm:p-10 md:p-14 rounded-lg border border-[#e5d5b7] shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden space-y-6 sm:space-y-8">
              
              <div className="absolute top-0 bottom-0 left-3 sm:left-6 md:left-8 w-[1px] bg-[#d8c3a1]/60" />

              {/* Photo Showcase Carousel - 100% Fully Visible Photos */}
              <div className="ml-2 sm:ml-6 md:ml-8 mb-6 sm:mb-8">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden border border-[#d8c3a1] shadow-md bg-[#120d10]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={montageIndex}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.8 }}
                      className="relative w-full h-full"
                    >
                      {/* Ambient blur background */}
                      <Image
                        src={montageImages[montageIndex].src}
                        alt=""
                        fill
                        sizes="100px"
                        className="object-cover filter blur-xl opacity-35 scale-110"
                      />
                      {/* Foreground full photo completely visible */}
                      <Image
                        src={montageImages[montageIndex].src}
                        alt="Arpita"
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-contain z-10"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none z-20" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 text-center z-30">
                        <p className="font-cormorant text-base sm:text-xl md:text-2xl text-softIvory italic drop-shadow-md px-2">
                          {montageImages[montageIndex].caption}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* The Confession Letter */}
              <div className="space-y-4 sm:space-y-6 font-cormorant text-lg sm:text-xl md:text-2xl leading-relaxed text-[#3d2a21] ml-2 sm:ml-6 md:ml-8">
                <p className="font-playfair text-2xl sm:text-3xl font-bold text-[#8b3a4a] italic">
                  My dearest Arpita,
                </p>

                <p>
                  Happy Birthday to my favorite person. ❤️
                </p>

                <p>
                  I don&apos;t think you&apos;ll ever truly know how much you&apos;ve changed my life. You walked into it so quietly, but somehow became the loudest part of my happiness.
                </p>

                <p>
                  We&apos;ve had our share of disagreements, overthinking, distance, and moments where things felt difficult. But every challenge only reminded me of one thing — I never wanted a life that didn&apos;t have you in it.
                </p>

                <p>
                  Thank you for staying. Thank you for understanding me, even when I couldn&apos;t explain myself. Thank you for making ordinary days feel special just by being there. My favorite thing about us isn&apos;t that we&apos;ve had a perfect story. It&apos;s that we&apos;ve continued writing it together, one day at a time.
                </p>

                <p>
                  Today, I don&apos;t just wish you happiness. I wish you the kind of peace you bring into my life. I hope every dream you&apos;ve kept in your heart finds its way to you, because no one deserves it more.
                </p>

                {/* The Big Confession Box */}
                <div className="my-6 p-6 sm:p-8 rounded-xl bg-[#f5ecdc] border-l-4 border-[#8b3a4a] shadow-sm text-center space-y-3">
                  <p className="font-cormorant text-lg sm:text-xl italic text-[#6d5547]">
                    And if life asks me again who I&apos;d choose... it will always be you.
                  </p>
                  <p className="font-playfair text-3xl sm:text-5xl font-bold text-[#8b3a4a] italic gold-gradient">
                    I love you, Arpita. ♥️
                  </p>
                  <p className="font-cormorant text-base sm:text-xl italic text-[#3d2a21] mt-2 leading-relaxed">
                    Not just today, but in every version of my life where I&apos;m trying to be better for you.
                    <br />
                    I love you more than words will ever be able to explain.
                  </p>
                </div>

                <p className="text-center font-playfair text-xl sm:text-2xl text-[#8b3a4a] italic font-semibold pt-2 sm:pt-4">
                  Happy Birthday, my love. May life return all the happiness you&apos;ve given me. ✨
                </p>
              </div>

              {/* Signature Block */}
              <div className="border-t border-[#d8c3a1] pt-6 sm:pt-8 mt-6 sm:mt-10 text-center space-y-2 ml-2 sm:ml-6 md:ml-8">
                <p className="font-cormorant text-base sm:text-lg text-[#6d5547] italic">
                  Forever yours,
                </p>
                <p className="font-caveat text-4xl sm:text-5xl font-bold text-[#8b3a4a]">
                  Aditya ❤️
                </p>
              </div>
            </div>

            {/* Exit Action Button */}
            <div className="mt-8 sm:mt-12 text-center">
              <button
                onClick={onClose}
                className="px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-roseGold to-deepRose text-softIvory font-inter font-semibold tracking-widest uppercase text-xs sm:text-sm shadow-xl hover:shadow-[0_0_30px_rgba(183,110,121,0.6)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                Keep This In My Heart Forever ♥️
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
