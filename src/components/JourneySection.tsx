'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const journeySteps = [
  { 
    title: "The Day Everything Changed", 
    description: "I still remember it — the exact moment I first saw you. My heart skipped. My world tilted. And nothing, absolutely nothing, has been the same since. You walked into my life and rewrote the entire story.",
    image: "/images/arpita-2.jpeg",
    goldenQuote: "And in that single second, every star in the sky rearranged itself just for you. My heart knew before my mind even understood.",
    goldenSubtext: "You were the quiet beginning of every beautiful thing in my life.",
    flower: "🌸",
  },
  { 
    title: "Falling Without Realizing", 
    description: "I didn't plan to fall for you. It wasn't a decision. It was like gravity — quiet, powerful, and absolutely unstoppable. Every laugh, every look, every small moment pulled me closer until I realized: I was already completely, hopelessly yours.",
    image: "/images/arpita-3.jpeg",
    goldenQuote: "Loving you was never a conscious choice; it was the sweetest and most inevitable surrender of my life.",
    goldenSubtext: "I fell for the softness of your voice and the unspoken kindness in your eyes.",
    flower: "🌷",
  },
  { 
    title: "The Way You Make Me Feel", 
    description: "When you're near, the whole world goes quiet. My heartbeat gets louder. My thoughts get softer. You make even the most ordinary moments feel like poetry — like the universe wrote them just for us.",
    image: "/images/arpita-4.jpeg",
    goldenQuote: "With you, even the silence feels like the most sacred love song. Your presence is my favorite safe haven.",
    goldenSubtext: "You turned my chaotic world into a place of peace.",
    flower: "🌺",
  },
  { 
    title: "What I See When I Look At You", 
    description: "I see the most beautiful soul I've ever known. I see kindness that doesn't ask for anything in return. I see strength wrapped in gentleness. I see the person I want to wake up choosing, every single day, for the rest of my life.",
    image: "/images/arpita-5.jpeg",
    goldenQuote: "In a universe of billions, my eyes will always search for you and only you. You are more precious than any words I could ever write.",
    goldenSubtext: "A rare soul, an extraordinary heart, a girl like no other.",
    flower: "🌹",
  },
  { 
    title: "The Promise I'm Making", 
    description: "I may not be perfect, but my feelings for you are the most real thing I've ever felt. I promise to choose you — in silence and in noise, in sunshine and in storms. You are my favorite person, Arpita, and you always will be.",
    image: "/images/arpita-6.jpeg",
    goldenQuote: "My promise to you isn't just for easy days. It's for every day. Through every storm and every sunset, I will choose you.",
    goldenSubtext: "You will never have to doubt how deeply and genuinely you are loved.",
    flower: "💐",
  },
];

export default function JourneySection() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-16 sm:py-28 px-4 sm:px-6 bg-deepBlack overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-roseGold/[0.03] blur-[160px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-warmGold/[0.03] blur-[150px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warmGold/35 bg-warmGold/10 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="text-xs sm:text-sm font-inter tracking-[0.25em] text-warmGold uppercase font-semibold">
              ✨ Chapter by Chapter ✦ With All My Heart
            </span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">
            Our Story, My Heart
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-2">
            &quot;Every chapter of us is my favorite. But the chapter where I fell for you? That one changed my life forever.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        {/* ═══════ WHEN WE BEGIN STORY: FULL VISIBLE PLAYABLE VIDEO ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-24 max-w-2xl mx-auto"
        >
          <div className="text-center mb-4">
            <span className="text-xs sm:text-sm font-inter uppercase tracking-[0.25em] text-roseGold font-semibold">
              📸 Prologue ✦ The Beginning of Something Beautiful
            </span>
          </div>

          <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] border border-warmGold/35 bg-[#0a070c] group">
            <Image
              src="/images/arpita-4.jpeg"
              alt="Arpita"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95]"
              style={{ objectPosition: 'center 15%' }}
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-transparent to-deepBlack/30 pointer-events-none" />

            {/* Overlay badge on top */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-warmGold/40 text-[11px] font-inter text-warmGold uppercase tracking-wider font-semibold">
                ✨ The First Chapter
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none text-center">
              <p className="font-cormorant text-base sm:text-xl text-softIvory italic">
                &quot;Before any words were spoken, your smile had already written the first chapter. ✨&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* ═══════ THE TIMELINE WITH BALANCED OPPOSITE SIDES ═══════ */}
        <div className="relative">
          {/* Vertical line (centered on md, left on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-warmGold/50 via-warmGold/20 to-transparent transform -translate-x-1/2"></div>

          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-10 mb-16 sm:mb-24 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-warmGold to-roseGold rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(212,175,55,0.7)] border-2 border-deepBlack"></div>

              {/* ── SIDE 1: The Main Photo & Chapter Story Card ── */}
              <div className={`ml-10 md:ml-0 md:w-[46%] w-full ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass rounded-2xl overflow-hidden border border-warmGold/20 hover:border-warmGold/40 transition-all duration-300 shadow-xl bg-[#100b12]/60">
                  {/* Photo in timeline card - 100% fully visible */}
                  <div className="relative w-full h-[300px] sm:h-[380px] bg-[#0c090e] overflow-hidden">
                    {/* Ambient background blur */}
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      sizes="100px"
                      className="object-cover filter blur-xl opacity-35 scale-110"
                    />
                    {/* Full photo completely visible */}
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain filter brightness-[0.95] hover:brightness-100 transition-all duration-500 z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/70 via-transparent to-transparent pointer-events-none z-20" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-warmGold text-xs sm:text-sm font-inter tracking-[0.2em] uppercase font-semibold block mb-1">
                      Chapter {idx + 1}
                    </span>
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-softIvory mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm sm:text-base text-softIvory/85 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── SIDE 2: The Utilised Opposite Side with Glowing Golden Letters & Falling Flowers ── */}
              <div className={`ml-10 md:ml-0 md:w-[46%] w-full ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} relative`}>
                <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-warmGold/30 bg-gradient-to-br from-[#1c131b]/80 via-[#130b14]/80 to-[#0a050a]/80 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden group">
                  
                  {/* Glowing corner flare */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-warmGold/10 rounded-full blur-2xl pointer-events-none -z-10" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-roseGold/10 rounded-full blur-2xl pointer-events-none -z-10" />

                  {/* 🌸 Falling Flower Petals Floating Down 🌸 */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    {[...Array(6)].map((_, fIdx) => (
                      <motion.span
                        key={fIdx}
                        initial={{ y: -30, opacity: 0, x: `${(fIdx * 16) + 5}%` }}
                        animate={{
                          y: ['-10%', '115%'],
                          opacity: [0, 0.85, 0],
                          x: [
                            `${(fIdx * 16) + 5}%`,
                            `${(fIdx * 16) + (fIdx % 2 === 0 ? 12 : -8)}%`
                          ],
                          rotate: [0, fIdx % 2 === 0 ? 360 : -360]
                        }}
                        transition={{
                          duration: 5 + (fIdx * 1.5),
                          repeat: Infinity,
                          delay: fIdx * 0.9,
                          ease: 'easeInOut'
                        }}
                        className="absolute text-lg sm:text-2xl select-none"
                      >
                        {['🌸', '🌹', '🌷', '🌺', '✨', '💐'][fIdx % 6]}
                      </motion.span>
                    ))}
                  </div>

                  {/* Content in Glowing Golden Letters */}
                  <div className="relative z-10 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl sm:text-2xl select-none">{step.flower}</span>
                      <span className="text-xs font-inter uppercase tracking-[0.25em] text-warmGold font-semibold">
                        Whispers of My Heart ✦
                      </span>
                    </div>

                    <span className="text-3xl sm:text-4xl text-warmGold/60 font-serif leading-none block -mb-2 select-none">
                      “
                    </span>

                    <p className="font-playfair text-lg sm:text-2xl md:text-3xl font-bold gold-gradient italic leading-snug tracking-wide">
                      {step.goldenQuote}
                    </p>

                    <div className="w-12 h-[1px] bg-gradient-to-r from-warmGold to-transparent my-2" />

                    <p className="font-cormorant text-base sm:text-xl text-softIvory/80 italic leading-relaxed">
                      {step.goldenSubtext}
                    </p>

                    <div className="pt-2 flex items-center gap-2">
                      <span className="text-xs font-inter uppercase tracking-widest text-roseGold/70 font-medium">
                        Aditya to Arpita
                      </span>
                      <span className="text-xs text-roseGold/50">✦</span>
                      <span className="text-sm select-none">♥️</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
