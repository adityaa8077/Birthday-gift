'use client';

import { motion } from 'framer-motion';

export default function WhenLifeFeelsHeavy() {
  return (
    <section
      id="life-heavy"
      className="relative py-24 px-6 bg-deepBlack overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="w-full max-w-xl mx-auto border-t border-warmGold/20 pt-16 mb-12" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12"
        >
          <p className="font-cormorant text-2xl md:text-3xl text-warmGold italic">
            &quot;If you&apos;ve come back here after a hard day, this part is for you.&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="glass rounded p-10 md:p-14 border border-warmGold/15 shadow-2xl relative bg-deepBlack/40 text-center md:text-left"
        >
          <div className="absolute inset-0 bg-gradient-radial from-warmGold/5 to-transparent blur-2xl -z-10" />

          <div className="space-y-6 font-inter text-base md:text-lg text-softIvory/90 leading-relaxed">
            <p className="font-cormorant text-xl md:text-2xl text-softIvory/70 italic mb-8">
              Maybe your code isn&apos;t working and you&apos;ve been debugging for hours.
              <br />
              Maybe GATE prep feels like climbing a mountain that never ends.
              <br />
              Maybe you&apos;re quietly asking yourself if you&apos;re good enough for Google, for ISRO, for any of it.
            </p>

            <p className="font-playfair text-xl text-warmGold font-semibold italic border-l-2 border-warmGold/40 pl-4 py-1 text-left my-6">
              Stop. Take a breath. Read this.
            </p>

            <p>
              Your dream of becoming an AI engineer, of building things that actually matter, of walking into Google or ISRO someday — that dream is beautiful. It&apos;s worth fighting for. And I believe with everything in me that you&apos;ll get there.
            </p>

            <p>
              But your worth — the real, deep thing that makes you who you are — <span className="text-warmGold font-semibold">has never lived in a GATE score or a placement package or a company name</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-y border-warmGold/10 py-6 my-6 text-left">
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>It lives in <span className="text-warmGold font-medium">your kindness</span>.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>In <span className="text-warmGold font-medium">your honesty</span>.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>In the way <span className="text-warmGold font-medium">you never give up</span>.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>In <span className="text-warmGold font-medium">your heart</span>. Always your heart.</p>
              </div>
            </div>

            <p>
              Those things can&apos;t be scored. Can&apos;t be ranked. Can&apos;t be taken from you.
            </p>

            <p>
              Whenever life feels too heavy — come back here. Read these words again.
            </p>

            <div className="pt-8 text-center border-t border-warmGold/5 mt-8 space-y-2">
              <p className="font-playfair text-xl md:text-2xl gold-gradient font-bold">
                Someone believes in you.
              </p>
              <p className="font-playfair text-xl md:text-2xl gold-gradient font-bold">
                Someone is proud of you.
              </p>
              <p className="font-cormorant text-lg md:text-xl text-softIvory/70 italic mt-4">
                And that will never change — no matter what.
                <br />
                Always.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25" />
      </div>
    </section>
  );
}
