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
      className="relative min-h-screen flex items-center justify-center py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0a0508] to-deepBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Us Photo - Final Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="relative mb-12 sm:mb-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <span className="font-playfair text-xs sm:text-sm tracking-[0.3em] text-roseGold uppercase font-semibold block mb-2">
              ✦ You & Me ✦
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient">
              Forever Us, Dolly
            </h2>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-warmGold/40 bg-[#0c090e] h-[380px] sm:h-[520px] md:h-[620px]">
            {/* Ambient blur background */}
            <Image
              src="/images/us.jpeg"
              alt=""
              fill
              sizes="100px"
              className="object-cover filter blur-2xl opacity-40 scale-110"
            />
            {/* Full Us photo 100% visible */}
            <Image
              src="/images/us.jpeg"
              alt="Aditya & Dolly - Forever Us"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/85 via-transparent to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 text-center z-30">
              <p className="font-cormorant text-lg sm:text-2xl md:text-3xl text-softIvory italic drop-shadow-lg">
                &quot;I love you, Dolly. In every version of my life where I&apos;m trying to be better for you.&quot;
              </p>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-roseGold/20 to-transparent blur-3xl -z-10"></div>
        </motion.div>

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
              This is not the end, Dolly.
              <br />
              It&apos;s just the beginning of us.
            </p>

            <div className="section-divider my-6 sm:my-8 mx-auto"></div>

            <p className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold gold-gradient tracking-wide">
              The best is yet to come. ♥️
            </p>
          </motion.div>
        </motion.div>

        {/* Personal Message from Aditya */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-12 sm:mt-24 mb-12 sm:mb-16"
        >
          <div className="max-w-4xl mx-auto relative">
            <div className="glass rounded-2xl p-6 sm:p-10 md:p-14 border border-warmGold/35 relative shadow-2xl bg-[#120a10]/50 backdrop-blur-md">
              <div className="space-y-6 sm:space-y-8 font-inter text-sm sm:text-base md:text-lg text-softIvory/90 leading-relaxed text-center sm:text-left">
                <p className="font-playfair text-2xl sm:text-3xl md:text-4xl text-warmGold font-bold text-center mb-4 sm:mb-6">
                  For You, Dolly ♥️
                </p>

                <p>
                  Dolly, if you&apos;ve made it this far, then you&apos;ve seen my whole heart laid out — raw, honest, and completely yours.
                </p>

                <p>
                  Many times I&apos;ve made mistakes, and many times you&apos;ve been angry with me. But I&apos;ve realized your anger never came from a place of hate. It came from care. You were angry because you wanted me to be better, and you never gave up on me, even when I gave you reasons to.
                </p>

                <p>
                  What amazes me most is how well you understand me. You see the person behind my mistakes, the one who never meant to hurt you. Even when I couldn&apos;t explain myself, you somehow knew. Very few people are understood like that, and I feel lucky that you are the one who does.
                </p>

                <p>
                  Every time you were upset with me, I learned something. You made me more patient, more thoughtful, and more honest with myself. If I&apos;m a better person today, it&apos;s because of you.
                </p>

                <p>
                  Somewhere along the way, my feelings grew into something I can&apos;t hide anymore. Your smile is my favourite sight, your voice is my peace, and even your anger carries so much love that I wouldn&apos;t trade it for anyone else&apos;s kindness.
                </p>

                <div className="my-6 p-6 sm:p-8 rounded-xl bg-warmGold/10 border-l-4 border-warmGold text-center space-y-2">
                  <p className="font-cormorant text-xl sm:text-2xl italic text-softIvory">
                    So on your special day, I want to say what my heart has been whispering for so long:
                  </p>
                  <p className="font-playfair text-3xl sm:text-5xl font-extrabold gold-gradient tracking-wide py-1">
                    I love you, Dolly. ♥️
                  </p>
                  <p className="font-cormorant text-base sm:text-xl italic text-softIvory/80">
                    Not just today, but in every version of my life where I&apos;m trying to be better for you.
                  </p>
                </div>

                <p className="text-center font-playfair text-lg sm:text-xl text-warmGold italic">
                  Happy Birthday, my love. May life return all the happiness you&apos;ve given me. ✨
                </p>
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
