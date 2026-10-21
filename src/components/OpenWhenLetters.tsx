'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = [
  {
    trigger: "Miss Me",
    title: "Open When You Miss Me",
    content: [
      "Hey Dolly. So you miss me? That honestly just made my entire day.",
      "Close your eyes and think of the last time we laughed together. Feel it? I'm right there, in that warmth.",
      "Distance doesn't change how I feel about you. Not even a little. You're always with me — in my thoughts, in my heartbeat, in every song I listen to.",
      "I'll be there soon. And when I am, I'm never letting go. ♥️"
    ]
  },
  {
    trigger: "Can't Sleep",
    title: "Open When You Can't Sleep",
    content: [
      "Hey, night owl. Can't sleep? Me neither, probably — I'm probably thinking about you right now too.",
      "Put down the phone. Close your eyes. Imagine me right there beside you, telling you that everything is going to be okay.",
      "You are safe. You are loved. And someone out there is falling asleep with your name in their heart.",
      "Sweet dreams, Dolly. I hope I'm in them. 💕"
    ]
  },
  {
    trigger: "Feel Sad",
    title: "Open When You Feel Sad",
    content: [
      "I know some days are heavy. Some moments feel like too much. And that's okay, Dolly.",
      "But I need you to hear this: you are the strongest, bravest, most incredible person I know. And even on your worst day, you're still my favorite person.",
      "Let yourself feel what you're feeling. Then let it go. Because better days are coming — I promise you that.",
      "And whenever you need a safe place to land, my heart is right here. Always. ♥️"
    ]
  },
  {
    trigger: "Need Confidence",
    title: "Open When You Need Confidence",
    content: [
      "Listen to me, Dolly. You are INCREDIBLE. And I mean that with every fiber of my being.",
      "You have this light inside you that doesn't dim for anyone. You walk into rooms and make them better just by being there.",
      "Whatever you're about to do — that test, that conversation, that scary decision — you've got this. You've always had this.",
      "Now go be the extraordinary person you are. I'm cheering you on with everything I've got. 🌟"
    ]
  },
  {
    trigger: "Need A Smile",
    title: "Open When You Need A Smile",
    content: [
      "Fun fact: your smile is literally the 8th wonder of the world. Scientists are baffled. Countries are fighting over it.",
      "Did that work? Are you smiling yet? Because if you are, then my entire purpose in life is fulfilled.",
      "Here's another fact: I like you so much that I'd sit through a 3-hour movie I hate just to see you happy watching it.",
      "There's that smile. See? My day just got 10000x better. ✨"
    ]
  },
  {
    trigger: "Feel Loved",
    title: "Open When You Want To Feel Loved",
    content: [
      "Dolly, if you're reading this, I want you to know something important:",
      "You are loved. Not because of what you do or how you look. You are loved for who you ARE — every flaw, every quirk, every beautiful imperfection.",
      "I choose you. In every mood, every season, every version of yourself. You are the one my heart keeps choosing.",
      "And that, my beautiful Dolly, will never, ever change. ♥️"
    ]
  },
];

interface OpenWhenLettersProps {
  onConfessionOpen: () => void;
}

export default function OpenWhenLetters({ onConfessionOpen }: OpenWhenLettersProps) {
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  return (
    <section
      id="open-when"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
    >
      {/* Ambient background video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover filter blur-[2px] brightness-60"
        >
          <source src="/videos/dolly-video-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-netflixBlack/90 via-deepBlack/80 to-netflixBlack/90 pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient tracking-wide"
          >
            Open When...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto px-2"
          >
            &quot;Letters I wrote for you, Dolly — for every mood, every moment, every day you need to hear how loved you are.&quot;
          </motion.p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Regular Envelopes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {letters.map((letter, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setActiveLetter(idx)}
              className="group relative cursor-pointer min-h-[160px] sm:aspect-[1.58] w-full rounded border border-warmGold/20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-lg flex flex-col justify-between p-5 sm:p-6 overflow-hidden hover:border-warmGold/60 hover:shadow-[0_12px_25px_rgba(212,175,55,0.12)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-warmGold/20 to-transparent" />
              <div 
                className="absolute top-0 left-0 right-0 h-8 sm:h-10 border-b border-warmGold/5 origin-top scale-y-100 group-hover:scale-y-105 transition-transform duration-300 pointer-events-none"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', background: 'rgba(212, 175, 55, 0.02)' }}
              />

              <h3 className="font-playfair text-base sm:text-lg font-bold text-softIvory/85 group-hover:text-warmGold transition-colors duration-300 z-10">
                {letter.title}
              </h3>

              <div className="flex justify-center items-center py-2 sm:py-4 z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#b38627] to-[#735112] border border-warmGold/50 flex items-center justify-center shadow-lg relative group-hover:scale-110 transition-transform duration-300">
                  <span className="text-softIvory/90 text-sm font-semibold select-none">✦</span>
                  <div className="absolute inset-1 rounded-full border border-warmGold/20 opacity-40"></div>
                </div>
              </div>

              <span className="font-cormorant text-xs italic text-softIvory/40 text-center tracking-widest block z-10 border-t border-softIvory/5 pt-2 group-hover:text-softIvory/70 transition-colors duration-300">
                &quot;Tap to break seal&quot;
              </span>
            </motion.div>
          ))}
        </div>

        {/* ═══════ THE 7TH ENVELOPE — CONFESSION TRIGGER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={onConfessionOpen}
            className="group relative cursor-pointer w-full max-w-lg min-h-[190px] sm:aspect-[1.58] rounded-lg border-2 border-roseGold/50 bg-gradient-to-br from-[#201017] via-[#140a0f] to-[#0a0507] shadow-xl flex flex-col justify-between p-6 sm:p-8 overflow-hidden hover:border-roseGold hover:shadow-[0_15px_40px_rgba(183,110,121,0.35)]"
          >
            {/* Rose-gold pulsing glow */}
            <motion.div
              className="absolute inset-0 rounded bg-roseGold/10"
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-roseGold to-transparent" />

            <h3 className="font-playfair text-lg sm:text-2xl font-bold text-blushPink group-hover:text-white transition-colors duration-300 z-10 text-center leading-snug">
              Open When You&apos;re Ready For My Confession ♥️
            </h3>

            <div className="flex justify-center items-center py-3 sm:py-4 z-10">
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-roseGold to-deepRose border-2 border-blushPink/60 flex items-center justify-center shadow-2xl relative"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-white text-xl sm:text-2xl select-none">💌</span>
                <div className="absolute inset-1 rounded-full border border-white/30 opacity-60"></div>
              </motion.div>
            </div>

            <span className="font-cormorant text-sm sm:text-base italic text-blushPink/75 text-center tracking-widest block z-10 border-t border-roseGold/20 pt-2 group-hover:text-blushPink transition-colors duration-300">
              &quot;Something I&apos;ve been wanting to tell you for so long…&quot;
            </span>
          </motion.div>
        </motion.div>

        {/* Letter Modal */}
        <AnimatePresence>
          {activeLetter !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLetter(null)}
              className="fixed inset-0 z-[110] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
            >
              {/* Ambient video in background of modal */}
              <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover filter blur-[2px]"
                >
                  <source src="/videos/dolly-video-5.mp4" type="video/mp4" />
                </video>
              </div>
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg bg-gradient-to-b from-[#faf6e8] to-[#f4edd0] text-[#3D2F26] p-6 sm:p-10 rounded border border-[#E8DFD0] shadow-2xl relative flex flex-col justify-between max-h-[85vh] overflow-y-auto cursor-default"
              >
                <div className="absolute top-0 bottom-0 left-4 sm:left-6 w-[1px] bg-[#E8DFD0]/50" />

                <button
                  onClick={() => setActiveLetter(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8C7A6B] hover:text-[#3D2F26] transition-colors p-2 cursor-pointer"
                  aria-label="Close Letter"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="border-b border-[#E8DFD0] pb-3 sm:pb-4 mb-4 sm:mb-6 ml-4 sm:ml-6">
                  <span className="font-playfair text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8C7A6B] uppercase block mb-1">
                    From Aditya
                  </span>
                  <h4 className="font-playfair text-lg sm:text-2xl font-bold text-[#3D2F26]">
                    {letters[activeLetter].title}
                  </h4>
                </div>

                <div className="space-y-4 sm:space-y-6 font-cormorant italic text-base sm:text-xl text-[#4A3B32] leading-relaxed ml-4 sm:ml-6 flex-1 py-2 sm:py-4">
                  {letters[activeLetter].content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="border-t border-[#E8DFD0] pt-4 sm:pt-6 mt-4 sm:mt-6 text-center ml-4 sm:ml-6">
                  <p className="font-cormorant text-sm sm:text-base text-[#8C7A6B] italic">
                    Always yours, Dolly. Always.
                  </p>
                  <span className="text-lg sm:text-xl inline-block mt-2 select-none">♥️</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
