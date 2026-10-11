'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function TodayReminder() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="today-reminder"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left: Photo with Face Focus */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative max-w-md mx-auto md:max-w-none w-full"
        >
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] rounded-lg overflow-hidden shadow-2xl border border-warmGold/25">
            <Image
              src="/images/arpita/3.jpeg"
              alt="Arpita"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: '50% 12%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-warmGold/10 to-transparent blur-2xl -z-10 rounded-lg"></div>
        </motion.div>

        {/* Right: Message */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8 text-center md:text-left"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block">
            A Reminder For Today
          </span>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient">
            Hey Arpita,
          </h2>

          <div className="space-y-4 sm:space-y-6 font-inter text-sm sm:text-base md:text-lg text-softIvory/90 leading-relaxed">
            <p>
              I know you&apos;re working really hard right now. GATE prep, coding assignments, all those algorithms that make your head spin at 2am — I see all of it.
            </p>
            <p>
              And I just want you to know: <span className="text-warmGold font-semibold">you&apos;re closer to your dream than you think.</span>
            </p>
            <p>
              Google, Microsoft, ISRO — they don&apos;t know it yet, but someone incredible is coming their way. Someone who doesn&apos;t give up. Someone who stays up late not because she has to, but because she wants to be the best.
            </p>
            <p className="font-playfair text-lg sm:text-xl text-warmGold font-semibold italic border-l-2 border-warmGold/40 pl-4 py-1 text-left">
              That someone is you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
