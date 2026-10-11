'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function FinaleSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="finale"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 bg-deepBlack"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Final Showcase Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="relative mb-12 sm:mb-20 max-w-4xl mx-auto"
        >
          <div className="relative w-full rounded-lg overflow-hidden shadow-2xl border border-warmGold/30 bg-black/40 h-[360px] sm:h-[480px] md:h-[580px]">
            <Image
              src="/images/arpita/2.jpeg"
              alt="Arpita"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/50 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-warmGold/15 to-transparent blur-3xl -z-10"></div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center space-y-8 sm:space-y-12 mb-12 sm:mb-20"
        >
          <div className="glass rounded-lg p-6 sm:p-10 border border-warmGold/25 max-w-4xl mx-auto">
            <p className="font-cormorant text-xl sm:text-3xl md:text-4xl text-softIvory italic leading-relaxed">
              She didn&apos;t just dream about changing the world.
              <br />
              <span className="gold-gradient font-bold not-italic">
                She built the skills, the grit, and the heart to actually do it.
              </span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="font-cormorant text-2xl sm:text-4xl md:text-5xl text-softIvory/70 italic">
              This is not the end.
              <br />
              It&apos;s just the beginning.
            </p>

            <div className="section-divider my-6 sm:my-8 mx-auto"></div>

            <p className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold gold-gradient tracking-wide">
              The best is yet to come.
            </p>
          </motion.div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center mb-12 sm:mb-20 px-4"
        >
          <div className="inline-block glass rounded-full px-6 sm:px-12 py-3 sm:py-5 border border-warmGold/35 shadow-lg">
            <p className="font-cormorant text-lg sm:text-2xl md:text-4xl text-warmGold flex items-center justify-center gap-2 sm:gap-4">
              <span className="text-3xl sm:text-5xl">✨</span>
              <span className="italic font-semibold">For Arpita, with all my heart ✦</span>
            </p>
          </div>
        </motion.div>

        {/* Personal Message from Aditya */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12 sm:mt-24 mb-12 sm:mb-16"
        >
          <div className="max-w-4xl mx-auto relative">
            <div className="glass rounded-lg p-6 sm:p-10 md:p-14 border border-warmGold/35 relative shadow-2xl">
              <div className="space-y-6 sm:space-y-8 font-inter text-sm sm:text-base md:text-lg text-softIvory/90 leading-relaxed text-center sm:text-left">
                <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-warmGold font-semibold text-center mb-4 sm:mb-6">
                  From Someone Who Believes In You More Than Anyone
                </p>

                <p>
                  Hey Arpita. If you&apos;ve made it this far, thank you. Thank you for giving me a few minutes of your time. I know you&apos;re busy chasing your dreams, and I know your time is precious.
                </p>

                <p>
                  I made this because I wanted you to see yourself the way I see you. Not just the smart girl who&apos;s going to crack GATE and land at Google or ISRO. But the girl who cares so deeply, makes people laugh, and brings light wherever she goes.
                </p>

                <p>
                  You&apos;re my best friend, the smartest person I know, and honestly? The reason I believe in good things. You make the world better just by being in it.
                </p>

                <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-warmGold italic text-center font-medium pt-2 sm:pt-4">
                  Keep going, Arpita. The world has no idea what&apos;s coming.
                </p>
              </div>

              <div className="border-t border-warmGold/15 pt-6 sm:pt-8 mt-8 sm:mt-10 text-center">
                <p className="font-playfair text-lg sm:text-xl text-warmGold font-semibold uppercase tracking-widest">
                  With All My Love — Aditya ❤️
                </p>
                <div className="text-center mt-4">
                  <span className="text-3xl sm:text-5xl">✨</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-radial from-warmGold/15 to-transparent blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
