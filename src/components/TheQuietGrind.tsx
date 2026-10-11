'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TheQuietGrind() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const grindMoments = [
    { title: "The Late Nights", description: "When everyone&apos;s asleep and you&apos;re still staring at code, trying to fix that one bug that makes no sense. That&apos;s not just studying — that&apos;s building your future, line by line." },
    { title: "The Failed Runs", description: "When the code doesn&apos;t compile, when the logic breaks, when you want to throw your laptop. But you don&apos;t. You debug. You try again. That&apos;s what separates dreamers from builders." },
    { title: "The Silent Sacrifices", description: "The parties you skipped. The weekends you gave to DSA. The times you chose LeetCode over Netflix. Nobody sees these sacrifices, but I do." },
    { title: "The 2am Questions", description: "\"Am I good enough?\" \"Will I crack GATE?\" \"Can I really make it to Google?\" — Yes. Yes. And absolutely yes." },
  ];

  return (
    <section
      id="quiet-grind"
      ref={ref}
      className="relative py-24 px-6 bg-deepBlack overflow-hidden"
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
            The Quiet Grind
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto">
            &quot;Nobody sees the hours you put in. But the results will speak for themselves.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {grindMoments.map((moment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="glass rounded-lg p-8 border border-warmGold/15 hover:border-warmGold/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-warmGold text-lg mt-1">✦</span>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-warmGold mb-3">
                    {moment.title}
                  </h3>
                  <p className="font-inter text-base text-softIvory/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: moment.description }}>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="font-cormorant text-2xl md:text-3xl text-softIvory/90 italic leading-relaxed">
            Keep grinding, Arpita. The world isn&apos;t ready for what you&apos;re about to become.
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25"></div>
      </div>
    </section>
  );
}
