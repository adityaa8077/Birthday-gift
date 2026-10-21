'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reels = [
  { src: "/videos/dolly-video-1.mp4", caption: "The moments that make my heart skip a beat 💕" },
  { src: "/videos/dolly-video-2.mp4", caption: "Every second with you is a memory I'll treasure forever ✨" },
  { src: "/videos/dolly-video-3.mp4", caption: "You in motion — the most beautiful sight in the universe 🌹" },
  { src: "/videos/dolly-video-4.mp4", caption: "This is the happiness you bring into my world 🌟" },
  { src: "/videos/dolly-video-5.mp4", caption: "Even a tiny clip of you makes everything feel right 💝" },
  { src: "/videos/dolly-video-6.mp4", caption: "My favorite person. My favorite moments. My favorite life. 🦋" },
  { src: "/videos/dolly-video-7.mp4", caption: "I could watch you forever and it still wouldn't be enough ♥️" },
];

export default function CinematicReels() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [playingInline, setPlayingInline] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Auto-play videos silently when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videoRefs.current.forEach((v) => {
      if (v) observer.observe(v);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeVideo !== null && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  const toggleInlinePlay = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[idx];
    if (!video) return;

    if (video.paused) {
      video.muted = false; // unmute when explicitly played
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
      setPlayingInline(idx);
    } else {
      video.pause();
      setPlayingInline(null);
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
                🎬 All Videos In Motion ✦ Play Any Video
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient tracking-wide">
              Cinematic Memories 🎬✨
            </h2>
            <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-2">
              &quot;Every clip of you is a movie scene I never want to end. Tap any video to play with sound!&quot;
            </p>
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-roseGold to-transparent mx-auto mt-4 sm:mt-6"></div>
          </motion.div>
        </div>

        {/* Video Grid — Responsive, Cinematic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reels.map((reel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              className="group relative rounded-xl overflow-hidden border border-warmGold/20 hover:border-roseGold/60 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(183,110,121,0.3)] bg-[#0a0a0a]"
            >
              {/* Video Player Container */}
              <div 
                className="relative w-full aspect-[9/16] sm:aspect-[4/5] overflow-hidden cursor-pointer bg-black"
                onClick={() => setActiveVideo(idx)}
              >
                <video
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  muted
                  loop
                  playsInline
                  controls={playingInline === idx}
                  preload="metadata"
                  className="w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-[1.0] transition-all duration-500"
                >
                  <source src={reel.src} type="video/mp4" />
                </video>

                {/* Gradient overlay */}
                {playingInline !== idx && (
                  <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-transparent to-transparent pointer-events-none" />
                )}

                {/* Quick Play/Pause Badge & Fullscreen Icon */}
                {playingInline !== idx && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={(e) => toggleInlinePlay(idx, e)}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-roseGold/40 hover:bg-roseGold/70 backdrop-blur-md border border-roseGold/60 flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 cursor-pointer"
                      title="Play with sound"
                    >
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Top Corner Badge: Tap for Fullscreen */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(idx);
                  }}
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-warmGold/30 text-[10px] text-warmGold font-inter uppercase tracking-wider hover:bg-warmGold/20 transition-all"
                  title="Expand to Fullscreen"
                >
                  ⛶ Expand
                </button>
              </div>

              {/* Caption & Play Action Bar */}
              <div className="p-4 sm:p-5 flex flex-col justify-between">
                <p className="font-cormorant text-sm sm:text-base text-softIvory/90 italic leading-relaxed">
                  {reel.caption}
                </p>
                <div className="flex items-center justify-between gap-2 mt-3 pt-2 border-t border-white/5">
                  <button
                    onClick={(e) => toggleInlinePlay(idx, e)}
                    className="flex items-center gap-1.5 text-xs font-inter text-roseGold hover:text-warmGold transition-colors cursor-pointer"
                  >
                    <span>{playingInline === idx ? '⏸ Pause' : '▶ Play with sound'}</span>
                  </button>
                  <button
                    onClick={() => setActiveVideo(idx)}
                    className="text-[11px] font-inter text-softIvory/60 hover:text-softIvory transition-colors cursor-pointer"
                  >
                    Fullscreen ↗
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Screen Video Modal */}
        <AnimatePresence>
          {activeVideo !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-sm sm:max-w-md w-full rounded-2xl overflow-hidden border border-roseGold/40 shadow-[0_0_50px_rgba(183,110,121,0.4)] bg-deepBlack cursor-default"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-deepBlack/80 border border-roseGold/40 text-softIvory hover:text-roseGold flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Video */}
                <div className="relative aspect-[9/16] w-full bg-black">
                  <video
                    ref={modalVideoRef}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                    src={reels[activeVideo].src}
                  />
                </div>

                {/* Modal Caption */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-deepBlack via-[#120a10] to-[#120a10] border-t border-roseGold/20 text-center">
                  <p className="font-cormorant text-base sm:text-lg text-softIvory italic">
                    {reels[activeVideo].caption}
                  </p>
                  <span className="text-xs font-inter uppercase tracking-widest text-roseGold/70 mt-1 block">
                    Memory {activeVideo + 1} of {reels.length}
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
