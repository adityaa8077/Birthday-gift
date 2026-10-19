'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TheQuietGrind() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const romanticMoments = [
    { 
      title: "The Quiet Brilliance • IIT Jodhpur", 
      description: "Carrying both intellect and grace so effortlessly. Whether working through rigorous challenges at IIT Jodhpur or bringing calm to those around you, your quiet dedication and humble strength are truly inspiring." 
    },
    { 
      title: "The Generous Heart", 
      description: "The way you make others feel seen, safe, and deeply appreciated. You pour kindness into little moments without ever asking for praise or recognition." 
    },
    { 
      title: "The Unfiltered Smile", 
      description: "Not the smile put on for others, but that real, spontaneous laughter that lights up your eyes. It is honestly one of my favorite miracles in this world." 
    },
    { 
      title: "The Quiet Thoughts", 
      description: "Even when I am just sitting alone in a quiet room, thoughts of you bring an effortless smile to my face. Knowing you exist is enough to brighten any day." 
    },
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
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-2">
            What I Admire In You
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 gold-gradient">
            The Quiet Beauty in You
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto">
            &quot;It&apos;s not just how radiant you are. It&apos;s the gentle grace you carry everywhere.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {romanticMoments.map((moment, idx) => (
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
                  <p className="font-inter text-base text-softIvory/80 leading-relaxed">
                    {moment.description}
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
            You don&apos;t have to be anything more than you are. You are already my favorite miracle. ✨
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25"></div>
      </div>
    </section>
  );
}
