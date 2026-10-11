'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = [
  {
    trigger: "Tired",
    title: "Open When You're Tired",
    content: [
      "Hey Arpita. Put the laptop down. Close VS Code. Step away from the screen.",
      "I know you've been coding for hours. I know GATE prep feels endless. I know your brain is fried right now.",
      "But listen — you've already done more today than most people do in a week. That's not nothing. That's everything.",
      "Rest now. The code will still be there tomorrow. But your health won't wait forever. Take care of yourself. For me."
    ]
  },
  {
    trigger: "Doubt Yourself",
    title: "Open When You Doubt Yourself",
    content: [
      "So you're sitting there thinking \"Am I even good enough for this?\" Let me answer that for you: YES.",
      "You are brilliant. You are resilient. And you have this quiet fire inside you that most people can only dream of having.",
      "Doubt is just your brain being dramatic. It doesn't change the fact that you were MADE for this — AI, tech, Google, ISRO, all of it.",
      "I believe in you. Even on the days you can't believe in yourself. Especially on those days."
    ]
  },
  {
    trigger: "GATE Feels Too Hard",
    title: "Open When GATE Feels Too Hard",
    content: [
      "I know. The syllabus feels infinite. The competition feels impossible. Some days it feels like everyone else is smarter.",
      "But here's what I know about you: you don't quit. You never have. You just take a breath and go again.",
      "One topic at a time. One problem at a time. One day at a time. That's all it takes.",
      "And when you finally crack it — and you WILL — I'll be the first person celebrating. Louder than anyone."
    ]
  },
  {
    trigger: "Need to Smile",
    title: "Open When You Need to Smile",
    content: [
      "Did you know your smile is literally my favorite thing in the whole world? I'm not even exaggerating.",
      "When you smile, everything just... stops. Like the world pauses for a second to appreciate it.",
      "I don't care if it's been the worst day ever — you reading this right now, I just want you to smile. Even a tiny one.",
      "There it is. See? The world already feels better. You have that power. Don't ever forget it."
    ]
  },
  {
    trigger: "Feel Lonely",
    title: "Open When You Feel Lonely",
    content: [
      "Hey. If you're reading this, you're probably having one of those nights where everything feels too quiet and too loud at the same time.",
      "I want you to know something: you are never alone. Not really. I'm always just one call, one text, one thought away.",
      "I made this whole website so that even on the loneliest nights, you'd have somewhere to come. A place that reminds you that someone out there thinks about you. A lot.",
      "You are loved, Arpita. More than you know. Always."
    ]
  },
  {
    trigger: "Get Into Google / ISRO",
    title: "Open When You Get Into Google / ISRO",
    content: [
      "ARPITA. YOU DID IT. YOU ACTUALLY DID IT.",
      "Do you remember all those nights? The ones where you wanted to give up? The ones where you thought you weren't good enough? LOOK AT YOU NOW.",
      "I always knew this day would come. Not because I'm optimistic — because I know YOU. I've watched you work harder than anyone I've ever met.",
      "I am so, so, SO proud of you. The proudest person alive right now. And I will never stop telling everyone that my best friend made it to the top. 🚀"
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
            &quot;Letters for the days you need them most. From someone who&apos;ll always care.&quot;
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
              Open When You&apos;re Ready For Something I Never Said
            </h3>

            <div className="flex justify-center items-center py-3 sm:py-4 z-10">
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-roseGold to-deepRose border-2 border-blushPink/60 flex items-center justify-center shadow-2xl relative"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-white text-xl sm:text-2xl select-none">♥</span>
                <div className="absolute inset-1 rounded-full border border-white/30 opacity-60"></div>
              </motion.div>
            </div>

            <span className="font-cormorant text-sm sm:text-base italic text-blushPink/75 text-center tracking-widest block z-10 border-t border-roseGold/20 pt-2 group-hover:text-blushPink transition-colors duration-300">
              &quot;This one is different. Take your time.&quot;
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
              className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
            >
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
                    Always here for you. Always.
                  </p>
                  <span className="text-lg sm:text-xl inline-block mt-2 select-none">💫</span>
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
