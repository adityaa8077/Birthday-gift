'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function HeartBehindBrilliance() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="heart-behind-brilliance"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-2">
            The Pure Soul Inside
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 gold-gradient">
            The Heart Behind That Smile
          </h2>
          <p className="font-cormorant text-lg sm:text-2xl md:text-3xl text-softIvory/75 italic max-w-3xl mx-auto px-2">
            Radiant on the outside, but your gentle kindness is what truly captivates me.
          </p>
          <div className="w-[80px] sm:w-[100px] h-[2px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Photo with Face Focus */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="md:col-span-5 relative max-w-md mx-auto md:max-w-none w-full"
          >
            <div className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] rounded-lg overflow-hidden shadow-2xl border border-warmGold/20">
              <Image
                src="/images/arpita-8.jpeg"
                alt="Arpita - Pure Heart"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: '50% 10%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -inset-4 bg-gradient-radial from-warmGold/10 to-transparent blur-2xl -z-10 rounded-lg"></div>
          </motion.div>

          {/* Letter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="md:col-span-7 relative w-full"
          >
            <div className="glass rounded-lg p-6 sm:p-10 md:p-12 border border-warmGold/20 relative shadow-2xl space-y-4 sm:space-y-6">
              <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-warmGold font-medium italic leading-relaxed border-b border-warmGold/15 pb-4 sm:pb-6">
                &quot;Behind that graceful smile lies a heart that cares more deeply and gently than words can ever tell.&quot;
              </p>

              <div className="space-y-4 sm:space-y-6 font-inter text-sm sm:text-base md:text-lg text-softIvory/90 leading-relaxed">
                <p className="font-playfair text-lg sm:text-xl md:text-2xl text-softIvory font-semibold">
                  To Arpita, the person who stole my heart,
                </p>

                <p>
                  People will always notice how effortlessly radiant you look, or how gracefully you carry yourself wherever you go. And watching you work with such sharp intellect, passion, and quiet dedication is so inspiring.
                </p>

                <p>
                  <span className="text-warmGold font-semibold">I admire you a lot</span> — not just for your brilliance and beauty, but for the depth of your kindness. The way you make everyone around you feel safe and deeply valued. The effortless gentleness with which you listen, and the quiet comfort you bring just by walking into a room. You don&apos;t just make the world look better; you make it feel softer, warmer, and whole.
                </p>
              </div>

              <div className="pt-2 sm:pt-4 flex justify-center md:justify-start">
                <span className="text-3xl sm:text-4xl">💫</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
