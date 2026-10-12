'use client';

import { motion } from 'framer-motion';

const treasures = [
  { emoji: "🌸", title: "Gentle Kindness", description: "The genuine warmth and consideration you extend to everyone. Your heart is one of the purest places in this world." },
  { emoji: "✨", title: "That Miracle Smile", description: "The effortless beauty of your smile that brings light into any room and makes the hardest days feel instantly lighter." },
  { emoji: "🌙", title: "A Calming Presence", description: "Being around you feels like taking a deep, peaceful breath. You have this magical gift of making everything feel right." },
  { emoji: "🤍", title: "Quiet Grace", description: "The quiet dignity and natural elegance in the way you speak, laugh, and move through every moment of life." },
  { emoji: "💫", title: "Rare Authenticity", description: "In a world full of noise and pretending, you remain wonderfully, effortlessly, and genuinely yourself." },
  { emoji: "🌷", title: "A Beautiful Destiny", description: "Whatever lies ahead for you, I pray life surrounds you with endless reasons to smile and all the joy you deserve." },
];

export default function DreamsWorthChasing() {
  return (
    <section
      id="dreams"
      className="relative py-24 px-6 bg-gradient-to-b from-deepBlack via-[#0d0d0d] to-deepBlack overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-2">
            What Makes You Special
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 gold-gradient">
            Treasures of Your Heart
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto">
            &quot;Some people bring happiness wherever they go, but you bring it even in quiet thoughts.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treasures.map((dream, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-lg p-8 border border-warmGold/10 hover:border-warmGold/40 transition-all duration-300 text-center group"
            >
              <span className="text-4xl block mb-4">{dream.emoji}</span>
              <h3 className="font-playfair text-xl font-bold text-softIvory group-hover:text-warmGold transition-colors mb-3">
                {dream.title}
              </h3>
              <p className="font-inter text-sm text-softIvory/70 leading-relaxed">
                {dream.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mt-16"
        >
          <p className="font-cormorant text-2xl md:text-3xl text-warmGold italic">
            If I were given a hundred lifetimes, I would choose to know you every single time. ✨
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25"></div>
      </div>
    </section>
  );
}
