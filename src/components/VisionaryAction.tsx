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
            The Vision
          </span>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold gold-gradient">
            She Doesn&apos;t Just Dream
          </h2>

          <div className="glass rounded-lg p-10 md:p-14 border border-warmGold/20 max-w-3xl mx-auto">
            <p className="font-cormorant text-2xl md:text-3xl text-softIvory italic leading-relaxed mb-8">
              &quot;She doesn&apos;t just want a job in tech.
              <br />
              She wants to build things that change the world.&quot;
            </p>

            <div className="space-y-6 font-inter text-base md:text-lg text-softIvory/85 leading-relaxed text-left">
              <p>
                Most people talk about their dreams. Arpita works for them. Quietly. Consistently. Without waiting for applause.
              </p>
              <p>
                While others scroll through reels, she&apos;s reading about neural networks. While others complain about how hard coding is, she&apos;s already on her next project. While the world sleeps, she&apos;s preparing for GATE.
              </p>
              <p className="text-warmGold font-semibold text-center text-xl font-playfair">
                That&apos;s not ambition. That&apos;s destiny.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25"></div>
      </div>
    </section>
  );
}
