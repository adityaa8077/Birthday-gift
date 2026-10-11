'use client';

import { motion } from 'framer-motion';

const dreams = [
  { emoji: "🤖", title: "Artificial Intelligence", description: "Building machines that think, learn, and help humanity solve its biggest problems." },
  { emoji: "🚀", title: "ISRO & Space Tech", description: "Using AI to power India's space missions — because her dreams are literally out of this world." },
  { emoji: "🎯", title: "Cracking GATE", description: "Not just passing — dominating. She's not the type to settle for \"good enough.\"" },
  { emoji: "🌐", title: "Google / Microsoft", description: "Walking into those campuses not as a visitor, but as someone who belongs there." },
  { emoji: "💡", title: "Building Something of Her Own", description: "Someday, maybe a startup. Maybe a product. Something with her name on it." },
  { emoji: "✨", title: "Inspiring Other Girls in Tech", description: "Proving that a girl from India can code her way to the top of the world." },
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
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 gold-gradient">
            Dreams Worth Chasing
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto">
            &quot;She doesn&apos;t just have dreams. She has a plan.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.map((dream, idx) => (
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
            Every single one of these dreams? She&apos;s going to make them real.
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25"></div>
      </div>
    </section>
  );
}
