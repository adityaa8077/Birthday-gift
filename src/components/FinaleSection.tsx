'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FinaleSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="finale"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0a0508] to-deepBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center space-y-8 sm:space-y-12 mb-12 sm:mb-20"
        >
          <div className="glass rounded-xl p-6 sm:p-10 border border-warmGold/25 max-w-4xl mx-auto shadow-2xl">
            <p className="font-cormorant text-xl sm:text-3xl md:text-4xl text-softIvory italic leading-relaxed">
              She didn&apos;t have to change the whole world.
              <br />
              <span className="gold-gradient font-bold not-italic">
                She just smiled, and changed mine forever.
              </span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="font-cormorant text-2xl sm:text-4xl md:text-5xl text-softIvory/80 italic">
              This is not the end, Arpita.
              <br />
              It&apos;s just the beginning of us.
            </p>

            <div className="section-divider my-6 sm:my-8 mx-auto"></div>

            <p className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold gold-gradient tracking-wide">
              The best is yet to come. ♥️
            </p>
          </motion.div>
        </motion.div>

        {/* Personal Heartfelt Message from message scratch */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-12 sm:mt-24 mb-12 sm:mb-16"
        >
          <div className="max-w-4xl mx-auto relative">
            <div className="glass rounded-2xl p-6 sm:p-10 md:p-14 border border-warmGold/35 relative shadow-2xl bg-[#120a10]/50 backdrop-blur-md">
              <div className="space-y-6 sm:space-y-8 font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/90 leading-relaxed text-center sm:text-left">
                <div className="text-center">
                  <span className="font-inter text-xs tracking-[0.3em] uppercase text-roseGold font-semibold block mb-2">
                    A Letter From My Soul
                  </span>
                  <p className="font-playfair text-3xl sm:text-4xl md:text-5xl text-warmGold font-bold mb-4 sm:mb-6">
                    Happy Birthday To My Favorite Person ❤️
                  </p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mb-6" />
                </div>

                <p className="italic">
                  I don&apos;t think you&apos;ll ever truly know how much you&apos;ve changed my life. You walked into it so quietly, but somehow became the loudest part of my happiness.
                </p>

                <p className="italic">
                  We&apos;ve had our share of disagreements, overthinking, distance, and moments where things felt difficult. But every challenge only reminded me of one thing — <span className="text-warmGold font-semibold">I never wanted a life that didn&apos;t have you in it.</span>
                </p>

                <p className="italic">
                  Thank you for staying. Thank you for understanding me, even when I couldn&apos;t explain myself. Thank you for making ordinary days feel special just by being there.
                </p>

                <p className="italic">
                  My favorite thing about us isn&apos;t that we&apos;ve had a perfect story. It&apos;s that we&apos;ve continued writing it together, one day at a time.
                </p>

                <p className="italic">
                  Today, I don&apos;t just wish you happiness. I wish you the kind of peace you bring into my life. I hope every dream you&apos;ve kept in your heart finds its way to you, because no one deserves it more.
                </p>

                <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-warmGold/15 via-[#23151c]/80 to-warmGold/15 border border-warmGold/40 text-center space-y-3 shadow-xl">
                  <p className="font-cormorant text-xl sm:text-2xl italic text-softIvory">
                    And if life asks me again who I&apos;d choose...
                  </p>
                  <p className="font-playfair text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient tracking-wide py-1">
                    It will always be you.
                  </p>
                  <p className="font-playfair text-xl sm:text-2xl text-roseGold font-semibold italic">
                    Happy Birthday. ❤️
                  </p>
                  <p className="font-cormorant text-lg sm:text-2xl italic text-softIvory/90">
                    I love you more than words will ever be able to explain.
                  </p>
                </div>
              </div>

              <div className="border-t border-warmGold/20 pt-6 sm:pt-8 mt-8 sm:mt-10 text-center">
                <p className="font-cormorant text-base sm:text-lg text-softIvory/60 italic">
                  Forever yours,
                </p>
                <p className="font-caveat text-4xl sm:text-5xl font-bold text-warmGold mt-1">
                  Aditya ❤️
                </p>
                <div className="text-center mt-3">
                  <span className="text-3xl sm:text-4xl animate-pulse inline-block">🌹</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-radial from-roseGold/20 to-transparent blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
