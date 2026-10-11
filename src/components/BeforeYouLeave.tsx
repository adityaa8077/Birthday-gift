'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BeforeYouLeave() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }
  };

  return (
    <section
      id="before-leave"
      ref={ref}
      className="relative py-28 px-6 bg-deepBlack overflow-hidden flex items-center justify-center min-h-screen"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-12"
        >
          Before You Leave
        </motion.span>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 font-cormorant text-2xl md:text-3xl text-softIvory/90 italic leading-relaxed"
        >
          <motion.p variants={paragraphVariants}>
            If today was a good day…
            <br />
            <span className="text-warmGold font-medium not-italic text-3xl">I&apos;m happy for you.</span>
          </motion.p>

          <motion.p variants={paragraphVariants}>
            If today was rough…
            <br />
            <span className="text-warmGold font-medium not-italic text-3xl">I&apos;m still proud of you.</span>
          </motion.p>

          <motion.p variants={paragraphVariants}>
            If you&apos;re smiling right now…
            <br />
            <span className="text-warmGold font-medium not-italic text-3xl">I hope life gives you a million more reasons.</span>
          </motion.p>

          <motion.p variants={paragraphVariants}>
            If you&apos;re struggling…
            <br />
            <span className="text-warmGold font-medium not-italic text-3xl">I hope tomorrow is a little kinder.</span>
          </motion.p>

          <motion.div variants={paragraphVariants} className="space-y-3 pt-6">
            <p className="font-inter text-xs tracking-[0.25em] text-softIvory/40 uppercase not-italic">
              Whatever happens next —
            </p>
            <p className="font-playfair text-xl md:text-2xl not-italic text-softIvory/70 tracking-widest uppercase">
              GATE • Google • Microsoft • ISRO • AI • Or a completely unexpected path…
            </p>
          </motion.div>

          <motion.p variants={paragraphVariants} className="pt-8 text-3xl md:text-4xl text-softIvory font-medium not-italic font-playfair border-t border-warmGold/10 max-w-xl mx-auto">
            I hope you never forget this:
          </motion.p>

          <motion.div variants={paragraphVariants} className="space-y-6 pt-4">
            <p className="font-playfair text-3xl md:text-4xl gold-gradient font-bold not-italic">
              Your worth was never waiting for a job title or a rank.
              <br />
              It has always been part of who you are.
            </p>
          </motion.div>

          <motion.p variants={paragraphVariants} className="pt-10 text-xl md:text-2xl text-softIvory/75 font-cormorant leading-relaxed max-w-2xl mx-auto">
            And whenever you need a quiet place to rest your thoughts…
            <br />
            This little corner of the internet will be here.
            <br />
            Waiting for you.
            <br />
            Just as it always has.
          </motion.p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto mt-24 mb-8 opacity-25" />
      </div>
    </section>
  );
}
