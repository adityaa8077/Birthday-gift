'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function VisionaryAction() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="visionary-action"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-deepBlack via-[#0d0d0d] to-deepBlack overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="space-y-10"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block">
            Pure Grace
          </span>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold gold-gradient">
            The Magic of Her Presence
          </h2>

          <div className="glass rounded-lg p-10 md:p-14 border border-warmGold/20 max-w-3xl mx-auto">
            <p className="font-cormorant text-2xl md:text-3xl text-softIvory italic leading-relaxed mb-8">
              &quot;She came into my world like a gentle breeze on a suffocating day,
              <br />
              and made everything brighter just by existing.&quot;
            </p>

            <div className="space-y-6 font-inter text-base md:text-lg text-softIvory/85 leading-relaxed text-left">
              <p>
                Some people leave impressions through grand gestures, but with her, it is in the simplest, purest moments. The effortless way she makes everyone around her feel valued and safe. The softness in her voice, and the natural kindness she pours out so freely.
              </p>
              <p>
                In a world where people so often build walls, she chooses to remain gentle, real, and compassionate. That unfiltered grace is what makes her truly unforgettable.
              </p>
              <p className="text-warmGold font-semibold text-center text-xl sm:text-2xl font-playfair italic pt-2">
                She didn&apos;t try to change my world. She just smiled. ✨
              </p>
            </div>
          </div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25"></div>
      </div>
    </section>
  );
}
