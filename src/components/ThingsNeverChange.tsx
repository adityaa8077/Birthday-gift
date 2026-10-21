'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface QualityCard {
  id: number;
  title: string;
  subtitle: string;
  thought: string;
  image: string;
  objectPos: string;
  heartEmoji: string;
  accentColor: string;
  isSpecial?: boolean;
}

const romanticReasons: QualityCard[] = [
  {
    id: 1,
    title: "Your Eyes",
    subtitle: "The Universe in Your Gaze",
    thought: "When I look into your eyes, the whole loud world goes completely silent. They hold a depth, warmth, and innocence that makes my heart skip a beat every single time.",
    image: "/images/arpita-1.jpeg",
    objectPos: "50% 10%",
    heartEmoji: "❤️",
    accentColor: "from-rose-500/20 to-amber-500/10",
  },
  {
    id: 2,
    title: "Your Smile",
    subtitle: "My Daily Dose of Sunshine",
    thought: "Your smile is my favorite sight in the universe. It doesn't just brighten up the room — it completely heals my bad days and makes me want to protect your happiness forever.",
    image: "/images/arpita-2.jpeg",
    objectPos: "50% 10%",
    heartEmoji: "💖",
    accentColor: "from-pink-500/20 to-rose-500/10",
  },
  {
    id: 3,
    title: "Your Laugh",
    subtitle: "My Favorite Melody",
    thought: "That pure, sweet laugh of yours is the most addictive sound on earth. It fills every room with light, and it's the reason I try to say silly things just to hear you giggle.",
    image: "/images/arpita-3.jpeg",
    objectPos: "50% 10%",
    heartEmoji: "💓",
    accentColor: "from-amber-500/20 to-rose-500/10",
  },
  {
    id: 4,
    title: "Your Cute Expressions",
    subtitle: "Effortlessly Adorable",
    thought: "The way you tilt your head, the way you pout, and all your little innocent reactions. You don't even have to try — you are effortlessly the cutest girl in the world.",
    image: "/images/arpita-4.jpeg",
    objectPos: "50% 12%",
    heartEmoji: "💕",
    accentColor: "from-purple-500/20 to-pink-500/10",
  },
  {
    id: 5,
    title: "Your Kindness & Soul",
    subtitle: "Rare, Genuine & Pure",
    thought: "You care about people so deeply and so naturally. In a world that can be complicated, your soft heart and gentle kindness are a blessing I cherish every single day.",
    image: "/images/arpita-5.jpeg",
    objectPos: "50% 12%",
    heartEmoji: "🤍",
    accentColor: "from-rose-500/20 to-purple-500/10",
  },
  {
    id: 6,
    title: "Your Voice & Whispers",
    subtitle: "Peace in Every Word",
    thought: "There is magic in the way you speak to me. Even hearing your voice for just two minutes can calm my racing thoughts and make everything feel safe and right.",
    image: "/images/arpita-6.jpeg",
    objectPos: "50% 10%",
    heartEmoji: "💗",
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: 7,
    title: "Your Warmth & Comfort",
    subtitle: "My Safe Haven",
    thought: "Being near you feels like coming home after a long journey. You have this comforting warmth where I can let down all my guards and just be completely myself.",
    image: "/images/arpita-7.jpeg",
    objectPos: "50% 10%",
    heartEmoji: "💞",
    accentColor: "from-amber-500/20 to-pink-500/10",
  },
  {
    id: 8,
    title: "Your Strength & Grace",
    subtitle: "A Queen in Her Own Right",
    thought: "You're strong when life is hard, gentle when people need care, and brave when it matters most. You inspire me every day to be a better man worthy of your heart.",
    image: "/images/arpita-8.jpeg",
    objectPos: "50% 12%",
    heartEmoji: "❤️",
    accentColor: "from-red-500/20 to-amber-500/10",
  },
  {
    id: 9,
    title: "Your Radiance & Charm",
    subtitle: "A Rare Golden Glow",
    thought: "Every photo of you is pure poetry. You carry this natural charm and quiet confidence that turns heads without you even trying. You are one of one.",
    image: "/images/arpita-9.jpeg",
    objectPos: "50% 10%",
    heartEmoji: "✨",
    accentColor: "from-yellow-500/20 to-rose-500/10",
  },
  {
    id: 10,
    title: "Your Little Habits & Magic",
    subtitle: "Every Detail I Fall For",
    thought: "Every mood, every quirk, every look you give me — I notice every single detail about you, and I find myself falling deeper in love with you with each passing hour.",
    image: "/images/arpita-10.jpeg",
    objectPos: "50% 12%",
    heartEmoji: "💘",
    accentColor: "from-pink-500/20 to-rose-500/10",
  },
  {
    id: 11,
    title: "Your Whole Existence",
    subtitle: "✦ The Ultimate Reason I Love You ✦",
    thought: "The fact that you exist, that you're in my life, and that you are mine. I love you a lot, Arpita, and I will soon eat you and kiss you endlessly! You are my whole world, my entire existence, and my forever choice.",
    image: "/images/arpita-11.jpeg",
    objectPos: "50% 10%",
    heartEmoji: "❤️‍🔥",
    accentColor: "from-rose-600/30 via-amber-500/20 to-rose-600/30",
    isSpecial: true,
  },
];

export default function ThingsNeverChange() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [likedCards, setLikedCards] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({
    1: 342, 2: 512, 3: 428, 4: 689, 5: 395,
    6: 471, 7: 530, 8: 462, 9: 618, 10: 729, 11: 1024,
  });
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; cardId: number; x: number }[]>([]);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyLiked = !!likedCards[id];
    setLikedCards(prev => ({ ...prev, [id]: !isCurrentlyLiked }));
    setLikeCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + (isCurrentlyLiked ? -1 : 1),
    }));

    if (!isCurrentlyLiked) {
      const heartId = Date.now() + Math.random();
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      setFloatingHearts(prev => [...prev, { id: heartId, cardId: id, x }]);
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== heartId));
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section
      id="things-never-change"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0e070c] to-deepBlack overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-roseGold/10 border border-roseGold/30 mb-4">
            <span className="text-roseGold animate-pulse">❤️</span>
            <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] text-roseGold uppercase font-semibold">
              Romantic Reasons Why I Love You
            </span>
            <span className="text-roseGold animate-pulse">❤️</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient mb-6 leading-tight">
            Every Reason My Heart Chose You
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-softIvory/90 font-medium italic max-w-3xl mx-auto leading-relaxed">
            &quot;I didn&apos;t just fall in love with you all at once, Arpita.
            I fell in love with every little smile, every look, and every piece of who you are.&quot;
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-warmGold/40" />
            <span className="text-roseGold text-lg">✦ 💖 ✦</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-warmGold/40" />
          </div>
        </motion.div>

        {/* Reasons Grid - 11 Cards with Face-focused Photos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {romanticReasons.map((item, idx) => {
            const isLiked = !!likedCards[item.id];
            const isSpecialCard = item.isSpecial;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col ${
                  isSpecialCard
                    ? 'md:col-span-2 lg:col-span-3 border-warmGold/60 bg-gradient-to-br from-[#1d0e19]/90 via-[#150a12]/95 to-[#241018]/90 shadow-2xl shadow-roseGold/20'
                    : 'border-warmGold/20 hover:border-warmGold/50 bg-[#120a10]/60 hover:bg-[#190d16]/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-roseGold/10'
                }`}
              >
                {/* Glow ambient background */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${item.accentColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none -z-10`} />

                {/* Top Badge & Heart Button */}
                <div className="p-4 sm:p-5 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <span className="font-playfair text-xs tracking-widest text-warmGold uppercase font-semibold px-2.5 py-1 rounded-full bg-warmGold/10 border border-warmGold/25">
                      {isSpecialCard ? "✦ The Ultimate Reason ✦" : `Reason #${String(idx + 1).padStart(2, '0')}`}
                    </span>
                    <span className="text-sm select-none">{item.heartEmoji}</span>
                  </div>

                  {/* Interactive Heart Button */}
                  <button
                    onClick={(e) => toggleLike(item.id, e)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer ${
                      isLiked
                        ? 'bg-rose-500/20 border-rose-500/60 text-rose-400 scale-105'
                        : 'bg-white/5 border-white/10 text-softIvory/70 hover:text-rose-400 hover:border-rose-500/40'
                    }`}
                    title="Send a heart"
                    aria-label={`Like reason ${item.title}`}
                  >
                    <motion.span
                      animate={isLiked ? { scale: [1, 1.35, 1] } : {}}
                      transition={{ duration: 0.3 }}
                      className="text-base"
                    >
                      {isLiked ? '❤️' : '🤍'}
                    </motion.span>
                    <span className="font-inter text-xs font-semibold">
                      {isLiked ? 'Loved!' : likeCounts[item.id] || 0}
                    </span>
                  </button>
                </div>

                {/* Card Layout: Special Card is horizontal on desktop, standard is vertical */}
                <div className={`${isSpecialCard ? 'md:grid md:grid-cols-12 md:items-center' : 'flex flex-col flex-1'}`}>
                  {/* Photo Container */}
                  <div
                    className={`relative overflow-hidden ${
                      isSpecialCard
                        ? 'md:col-span-5 h-[320px] sm:h-[420px] md:h-[460px] m-4 sm:m-6 rounded-2xl border border-warmGold/40'
                        : 'w-full h-[280px] sm:h-[320px] px-4'
                    }`}
                  >
                    <div className={`relative w-full h-full rounded-xl overflow-hidden ${!isSpecialCard ? 'border border-warmGold/20' : ''}`}>
                      {/* Ambient blur backdrop for 100% full view guarantee */}
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="100px"
                        className="object-cover filter blur-xl opacity-35 scale-110 pointer-events-none"
                      />
                      {/* Sharp face-focused photo */}
                      <Image
                        src={item.image}
                        alt={`Arpita - ${item.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                        style={{ objectPosition: item.objectPos }}
                      />
                      {/* Gentle bottom shadow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-transparent to-transparent pointer-events-none z-20" />
                      
                      {/* Overlay badge on image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-30">
                        <span className="font-caveat text-xl sm:text-2xl text-softIvory drop-shadow-md">
                          My Arpita 💕
                        </span>
                        <span className="text-xs font-inter text-softIvory/80 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`p-5 sm:p-6 flex flex-col justify-between ${isSpecialCard ? 'md:col-span-7 md:pr-8' : 'flex-1'}`}>
                    <div>
                      <span className="font-inter text-xs tracking-wider text-roseGold uppercase font-semibold block mb-1">
                        {item.subtitle}
                      </span>
                      <h3 className={`font-playfair font-bold text-softIvory group-hover:text-warmGold transition-colors duration-300 ${
                        isSpecialCard ? 'text-3xl sm:text-4xl md:text-5xl mb-4 gold-gradient' : 'text-2xl sm:text-3xl mb-3'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`font-cormorant italic text-softIvory/90 leading-relaxed ${
                        isSpecialCard ? 'text-xl sm:text-2xl md:text-3xl text-warmGold/95 font-medium' : 'text-lg sm:text-xl'
                      }`}>
                        &quot;{item.thought}&quot;
                      </p>
                    </div>

                    {isSpecialCard && (
                      <div className="mt-6 pt-6 border-t border-warmGold/30 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl animate-bounce">💋</span>
                          <div>
                            <p className="font-playfair text-base sm:text-lg text-roseGold font-bold">
                              Endless Kisses & Love
                            </p>
                            <p className="font-cormorant text-sm sm:text-base text-softIvory/70 italic">
                              Can&apos;t wait to be near you and hold you forever.
                            </p>
                          </div>
                        </div>
                        <span className="font-caveat text-3xl sm:text-4xl text-warmGold font-bold">
                          Forever Yours, Aditya ❤️
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom subtle glow line */}
                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-warmGold to-transparent transition-all duration-700 mx-auto" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section Footer Affirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center mt-16 sm:mt-24 max-w-3xl mx-auto border-t border-warmGold/15 pt-12 px-4"
        >
          <span className="text-3xl sm:text-4xl inline-block mb-3 animate-pulse">💖</span>
          <p className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-softIvory font-medium italic leading-relaxed">
            &quot;These things will never fade, no matter the distance, no matter how many years pass.
            <br />
            <span className="gold-gradient font-bold not-italic">
              You are the greatest thing that ever happened to me, Arpita.
            </span>&quot;
          </p>
          <p className="font-caveat text-2xl sm:text-3xl text-warmGold mt-4">
            Aditya ❤️
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-30"></div>
      </div>

      {/* Floating Heart Burst Animation */}
      <AnimatePresence>
        {floatingHearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -120, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ left: heart.x }}
            className="fixed bottom-20 pointer-events-none z-50 text-3xl select-none"
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-roseGold/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
