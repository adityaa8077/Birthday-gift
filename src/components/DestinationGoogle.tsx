'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const wishes = [
  { 
    name: "Endless Peace", 
    tagline: "A calm, serene heart", 
    icon: "🌸", 
    description: "Quiet mornings, restful nights, and a life where your soul is always at ease and free from burdens." 
  },
  { 
    name: "Unconditional Warmth", 
    tagline: "Cherished for who you are", 
    icon: "✨", 
    description: "Surrounded by people who protect, appreciate, and treasure the softness of your gentle heart." 
  },
  { 
    name: "A Path of Flowers", 
    tagline: "Beyond what you ever imagined", 
    icon: "🌙", 
    description: "Every quiet wish you whisper to the universe unfolding in the most beautiful, magical ways." 
  },
  { 
    name: "Infinite Reasons to Smile", 
    tagline: "That miracle smile", 
    icon: "🤍", 
    description: "Because that smile of yours is one of the world's greatest miracles, and you deserve endless joy." 
  },
];

export default function DestinationGoogle() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="destination-google"
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-2">
            My Wishes For You
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">
            All The Beauty You Deserve
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto px-2">
            &quot;I truly hope that wherever life takes you, it lays out a path of flowers for you.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {wishes.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="glass rounded-lg p-6 sm:p-8 border border-warmGold/15 hover:border-warmGold/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">{dest.icon}</span>
                <div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-softIvory group-hover:text-warmGold transition-colors">
                    {dest.name}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-warmGold/70 italic">{dest.tagline}</p>
                </div>
              </div>
              <p className="font-inter text-sm sm:text-base text-softIvory/80 leading-relaxed">
                {dest.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Romantic Portrait with face focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-full max-w-2xl mx-auto"
        >
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-lg overflow-hidden shadow-2xl border border-warmGold/20">
            <Image
              src="/images/sandy-2.jpeg"
              alt="Sandhya (Sandy) - Radiant Grace"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover"
              style={{ objectPosition: '50% 15%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-deepBlack/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-center sm:text-left">
              <p className="font-cormorant text-lg sm:text-2xl text-softIvory italic font-medium">
                &quot;Somewhere out there is someone who thanks the stars every single night, just because you exist.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
