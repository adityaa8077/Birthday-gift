'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const qualities = [
  { title: "Your Kindness", thought: "You care about people without thinking twice. That's not common. That's special." },
  { title: "Your Honesty", thought: "You say things as they are. No sugarcoating. That takes more courage than people realize." },
  { title: "Your Patience", thought: "With code that doesn't work. With people who don't understand. With life when it gets hard. You stay calm." },
  { title: "Your Laugh", thought: "It's contagious. It lights up the whole room. And it makes everything feel okay." },
  { title: "Your Stubbornness", thought: "Yeah, I said it. You don't give up. Ever. That's not a flaw — it's your superpower." },
  { title: "Your Smile", thought: "I could write a whole page about this. But you already know what it does to people. Or maybe you don't. That makes it even better." },
  { title: "Your Heart", thought: "You feel deeply. You love deeply. In a world that pretends not to care, you care. That matters more than anything." },
  { title: "Your Fire", thought: "That quiet determination. That \"watch me\" energy. The world has no idea what's coming." },
];

export default function ThingsNeverChange() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section
      id="things-never-change"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-deepBlack via-[#0d0d0d] to-deepBlack overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16 px-4"
        >
          <span className="font-playfair text-xs tracking-[0.25em] text-warmGold uppercase block mb-4">
            Things About You That I Love
          </span>
          <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-softIvory font-medium italic leading-relaxed">
            &quot;In a world full of people trying to be someone else,
            <br />
            you&apos;re perfectly, beautifully, you.&quot;
          </p>
          <div className="w-[60px] h-[1px] bg-warmGold/20 mx-auto mt-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 my-16"
        >
          {qualities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-6 rounded border border-warmGold/5 hover:border-warmGold/20 transition-all duration-300 relative bg-deepBlack/20"
            >
              <div className="flex gap-4 items-start">
                <span className="text-warmGold text-lg mt-1 select-none">✦</span>
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-bold text-softIvory group-hover:text-warmGold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-cormorant text-lg italic text-[#9B8C7E]/90 leading-relaxed">
                    &quot;{item.thought}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-center mt-16 max-w-2xl mx-auto border-t border-warmGold/10 pt-10 px-4"
        >
          <p className="font-cormorant text-xl md:text-2xl text-softIvory/90 italic leading-relaxed">
            These things will never change. No matter what happens.
            <br />
            These are the reasons I&apos;ll always believe in you.
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25"></div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-warmGold/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
