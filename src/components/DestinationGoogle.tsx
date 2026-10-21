'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const destinations = [
  { 
    name: "United Nations Delegate 🌐", 
    tagline: "A Voice for Humanity on the World Stage", 
    icon: "🏛️", 
    description: "Stepping into the grand halls of the UN with unmatched poise, advocating for justice, equality, and peace across nations. A true diplomat whose words carry the weight of change and the warmth of empathy." 
  },
  { 
    name: "Her Own NGO 🕊️", 
    tagline: "Her Dream, Her Heart, Her Mission", 
    icon: "🌱", 
    description: "Founding a non-profit dedicated to uplifting lives, nurturing dreams, and protecting the vulnerable. Building a sanctuary of hope and kindness that will touch countless generations." 
  },
  { 
    name: "Healing & Making The World Happy 💛", 
    tagline: "Spreading Sunshine Where It's Needed Most", 
    icon: "✨", 
    description: "Bringing warmth into spaces that felt forgotten. Showing the world that gentleness is the greatest strength, and making millions of hearts feel safe, cherished, and genuinely happy." 
  },
  { 
    name: "A Glorious Future Ahead 🚀", 
    tagline: "Every Whisper of Your Heart Coming True", 
    icon: "👑", 
    description: "Watching you conquer every goal you ever dreamed of, walking your path with radiance and courage, while I stand right beside you — proud, in awe, and cheering you on forever." 
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
            Her Destiny & Calling
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">
            Destined To Change The World 🌍✨
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-2">
            &quot;The world doesn&apos;t just need leaders — it needs someone with your pure heart to make it happy.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="glass rounded-xl p-6 sm:p-8 border border-warmGold/20 hover:border-warmGold/50 transition-all duration-300 group hover:-translate-y-1 bg-[#120e16]/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">{dest.icon}</span>
                <div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-softIvory group-hover:text-warmGold transition-colors">
                    {dest.name}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-warmGold/80 italic font-medium">{dest.tagline}</p>
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
          <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded-xl overflow-hidden shadow-2xl border border-warmGold/30 bg-[#0c090e]">
            {/* Ambient blur background */}
            <Image
              src="/images/dolly-2.jpeg"
              alt=""
              fill
              sizes="100px"
              className="object-cover filter blur-xl opacity-35 scale-110"
            />
            {/* Full photo completely visible */}
            <Image
              src="/images/dolly-2.jpeg"
              alt="Dolly - Destined For Greatness"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-contain z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/90 via-deepBlack/20 to-transparent pointer-events-none z-20"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-center sm:text-left">
              <span className="text-xs uppercase tracking-widest text-warmGold font-semibold block mb-1">
                A Promise From Aditya
              </span>
              <p className="font-cormorant text-lg sm:text-2xl text-softIvory italic font-medium leading-relaxed">
                &quot;I see your future so clearly, Dolly. You&apos;re going to touch millions of lives, and I will be here loving, protecting, and believing in you every single day.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
