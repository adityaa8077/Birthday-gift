'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const journeySteps = [
  { 
    title: "The Quiet First Impression", 
    description: "How softly you walked into my world, completely unaware of the light you carry. Some people need to make noise to be noticed; you captured my attention simply by being yourself." 
  },
  { 
    title: "The Kindness You Give", 
    description: "The effortless way you make everyone around you feel valued, safe, and heard. In a world that often rushes past feelings, your heart remains one of the warmest places to be." 
  },
  { 
    title: "The Miracle of Your Smile", 
    description: "That genuine, radiant smile of yours that honestly stops time. One glimpse of it has this magical way of making even the heaviest, most exhausting days instantly lighter." 
  },
  { 
    title: "The Tender Soul Inside", 
    description: "Beyond your graceful elegance lies a heart so deeply sincere and caring. You choose gentleness, warmth, and honesty — and that is the rarest kind of beauty." 
  },
  { 
    title: "The Greatest Gift", 
    description: "Out of all the billions of paths in this universe, ours managed to cross. You have quietly, softly, become one of the most beautiful chapters of my life's story." 
  },
];

export default function JourneySection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-deepBlack overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-2">
            Moments Of Admiration
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">
            Chapters of Your Grace
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto px-2">
            &quot;In every chapter, you bring a quiet magic that makes everything feel right.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-warmGold/40 via-warmGold/20 to-transparent"></div>

          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`relative flex items-start gap-4 sm:gap-8 mb-12 sm:mb-16 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-warmGold rounded-full transform -translate-x-1/2 mt-2 z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-[45%] w-full ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <div className="glass rounded-lg p-6 sm:p-8 border border-warmGold/15 hover:border-warmGold/30 transition-all duration-300">
                  <span className="text-warmGold text-xs sm:text-sm font-inter tracking-widest uppercase block mb-1">
                    Chapter {idx + 1}
                  </span>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-softIvory mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-softIvory/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey photo with face focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative w-full max-w-md mx-auto mt-8 sm:mt-12"
        >
          <div className="relative w-full h-[360px] sm:h-[460px] rounded-lg overflow-hidden shadow-2xl border border-warmGold/20">
            <Image
              src="/images/dear-her-4.jpeg"
              alt="Her Grace"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
              style={{ objectPosition: '50% 12%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/50 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-warmGold/10 to-transparent blur-3xl -z-10"></div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
