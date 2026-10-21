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
              src="/images/dolly-6.jpeg"
              alt="Dolly - Quiet Dignity & Endless Charm"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: '50% 10%' }}
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
            A Special Reminder For You
          </span>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient">
            Dear Dolly,
          </h2>

          <div className="space-y-4 sm:space-y-6 font-inter text-sm sm:text-base md:text-lg text-softIvory/90 leading-relaxed">
            <p>
              I know life can be overwhelming sometimes, and days can feel quiet and heavy — but I see you. <span className="text-warmGold font-semibold">I adore you more than words could ever capture</span> — the gentle strength you carry, the warmth you pour into everyone around you, and the sheer magic of your kind heart.
            </p>
            <p>
              I just want you to remember: <span className="text-warmGold font-semibold">you are more extraordinary than you could ever imagine.</span>
            </p>
            <p>
              You don&apos;t need to achieve anything or prove anything to be worthy of love, happiness, and all the best things life has to offer. Just walking into a room, just smiling, just being yourself — you make this world a softer, brighter, and infinitely more beautiful place.
            </p>
            <p className="font-playfair text-lg sm:text-xl text-warmGold font-semibold italic border-l-2 border-warmGold/40 pl-4 py-1 text-left">
              You are truly one of a kind, Dolly. Never forget how special you are to me. ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
