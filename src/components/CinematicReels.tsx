'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const portraits = [
  { src: "/images/arpita-1.jpeg", caption: "The face that makes my heart skip a beat every single time 💕" },
  { src: "/images/arpita-2.jpeg", caption: "Every second with you is a memory I'll treasure forever ✨" },
  { src: "/images/arpita-3.jpeg", caption: "The most beautiful sight in my universe 🌹" },
  { src: "/images/arpita-4.jpeg", caption: "This is the unmatched happiness you bring into my world 🌟" },
  { src: "/images/arpita-5.jpeg", caption: "Even a single glimpse of your smile makes everything feel right 💝" },
  { src: "/images/arpita-6.jpeg", caption: "My favorite person. My favorite warmth. My favorite reason to smile. 🦋" },
  { src: "/images/arpita-7.jpeg", caption: "I could look at you forever and it still wouldn't be enough ♥️" },
  { src: "/images/arpita-8.jpeg", caption: "That gentle grace in your eyes where I always find peace 🕊️" },
  { src: "/images/arpita-9.jpeg", caption: "Your smile could heal anything and start poetry in silence 🌸" },
  { src: "/images/arpita-10.jpeg", caption: "The most beautiful soul wrapped in the most radiant smile ✨" },
  { src: "/images/arpita-11.jpeg", caption: "Always and forever my favorite person in the whole universe 💖" },
];

export default function CinematicReels() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const nextPhoto = () => {
    if (activePhoto !== null) {
      setActivePhoto((activePhoto + 1) % portraits.length);
    }
  };

  const prevPhoto = () => {
    if (activePhoto !== null) {
      setActivePhoto((activePhoto - 1 + portraits.length) % portraits.length);
    }
  };

  return (
    <section
      id="cinematic-reels"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0a070c] to-deepBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-roseGold/40 bg-roseGold/10 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(183,110,121,0.2)]">
              <span className="text-xs sm:text-sm font-inter tracking-[0.25em] text-roseGold uppercase font-semibold">
                📸 Arpita In Focus ✦ Tap Any Photo To Expand
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient tracking-wide">
              Cinematic Portraits 📸✨
            </h2>
            <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-2">
              &quot;Every picture of you is a masterpiece I want to keep framed in my heart forever.&quot;
            </p>
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-roseGold to-transparent mx-auto mt-4 sm:mt-6"></div>
          </motion.div>
        </div>

        {/* Photo Grid — Responsive, Cinematic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portraits.map((portrait, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => setActivePhoto(idx)}
              className="group relative rounded-2xl overflow-hidden border border-warmGold/20 hover:border-roseGold/60 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(183,110,121,0.35)] bg-[#0a0a0a] cursor-pointer"
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-900">
                <Image
                  src={portrait.src}
                  alt={`Arpita portrait ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover filter brightness-[0.93] group-hover:brightness-[1.04] group-hover:scale-106 transition-all duration-700"
                  style={{ objectPosition: 'center 15%' }}
                />

                {/* Subtle Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

                {/* Top Corner Badge: Tap to expand */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-warmGold/30 text-[10px] text-warmGold font-inter uppercase tracking-wider group-hover:bg-warmGold/20 transition-all">
                  ⛶ View Full
                </div>

                <div className="absolute bottom-3 left-3 text-xs font-inter uppercase tracking-widest text-warmGold/80 font-semibold drop-shadow-md">
                  #{String(idx + 1).padStart(2, '0')} ✦ Arpita
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-[#100b10] to-[#080507]">
                <p className="font-cormorant text-base sm:text-lg text-softIvory/90 italic leading-relaxed">
                  {portrait.caption}
                </p>
                <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-white/5">
                  <span className="text-xs font-inter text-roseGold group-hover:text-warmGold transition-colors flex items-center gap-1">
                    <span>✨</span> Click to view in high-res
                  </span>
                  <span className="text-xs font-inter text-softIvory/40">
                    Portrait {idx + 1}/{portraits.length}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Screen Photo Lightbox Modal */}
        <AnimatePresence>
          {activePhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 z-[170] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md sm:max-w-lg md:max-w-xl w-full rounded-2xl overflow-hidden border border-roseGold/40 shadow-[0_0_60px_rgba(183,110,121,0.4)] bg-deepBlack cursor-default flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-deepBlack/80 border border-roseGold/40 text-softIvory hover:text-roseGold flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left/Right Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 border border-warmGold/30 text-softIvory hover:text-warmGold flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous Photo"
                >
                  ‹
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 border border-warmGold/30 text-softIvory hover:text-warmGold flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next Photo"
                >
                  ›
                </button>

                {/* Photo in Modal */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full bg-black min-h-[400px] sm:min-h-[500px]">
                  <Image
                    src={portraits[activePhoto].src}
                    alt={`Arpita portrait ${activePhoto + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Modal Caption */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-deepBlack via-[#120a10] to-[#120a10] border-t border-roseGold/20 text-center">
                  <p className="font-cormorant text-base sm:text-xl text-softIvory italic leading-relaxed">
                    &quot;{portraits[activePhoto].caption}&quot;
                  </p>
                  <span className="text-xs font-inter uppercase tracking-widest text-roseGold/80 mt-2 block font-semibold">
                    Arpita ✦ Memory {activePhoto + 1} of {portraits.length}
                  </span>
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
