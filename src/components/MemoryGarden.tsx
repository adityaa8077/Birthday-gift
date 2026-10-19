'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const gardenImages = [
  { src: "/images/sandy-1.jpeg", caption: "Fairy tales are real. I'm looking at one.", className: "md:col-span-2 h-[380px] sm:h-[480px]", objectPos: "50% 15%" },
  { src: "/images/sandy-2.jpeg", caption: "That gentle, dreamy expression that stops time.", className: "md:col-span-1 h-[320px] sm:h-[380px]", objectPos: "50% 18%" },
  { src: "/images/sandy-3.jpeg", caption: "Every glance carries a quiet, effortless elegance.", className: "md:col-span-1 h-[320px] sm:h-[380px]", objectPos: "50% 15%" },
  { src: "/images/sandy-4.jpeg", caption: "That rare, glowing smile that makes everything brighter.", className: "md:col-span-1 h-[320px] sm:h-[380px]", objectPos: "50% 15%" },
  { src: "/images/sandy-5.jpeg", caption: "You don't even know how pretty you are.", className: "md:col-span-2 h-[380px] sm:h-[480px]", objectPos: "50% 20%" },
  { src: "/images/sandy-6.jpeg", caption: "Quiet grace and endless charm in every frame.", className: "md:col-span-1 h-[320px] sm:h-[380px]", objectPos: "50% 15%" },
];

export default function MemoryGarden() {
  return (
    <section
      id="memory-garden"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-deepBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient tracking-wide"
          >
            Through My Eyes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto px-2"
          >
            &quot;This is how I see you. This is what you look like to me.&quot;
          </motion.p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Responsive Grid with Face Focus & Immediate HD Rendering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          {gardenImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className={`group flex flex-col justify-start relative w-full ${img.className}`}
            >
              <div className="relative w-full h-[85%] rounded overflow-hidden border border-warmGold/20 group-hover:border-warmGold/60 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] bg-[#111]">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-[1.0]"
                  style={{ objectPosition: img.objectPos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/50 via-transparent to-transparent pointer-events-none" />
              </div>

              <p className="font-cormorant text-sm sm:text-base text-softIvory/90 italic mt-3 text-center sm:text-left tracking-wide leading-relaxed px-1">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-warmGold/[0.015] blur-[150px] pointer-events-none -z-10 rounded-full"></div>
    </section>
  );
}
