'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BirthdayTimer() {
  const [timeData, setTimeData] = useState({
    years: 2,
    months: 8,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 975,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateTimer = () => {
      const now = new Date();
      // Reference date: exactly 2 years and 8 months prior
      const startDate = new Date(now.getFullYear() - 2, now.getMonth() - 8, 1, 0, 0, 0);
      const diffMs = Math.max(0, now.getTime() - startDate.getTime());

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      setTimeData({
        years: 2,
        months: 8,
        days: Math.abs(days),
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const timerUnits = [
    { label: 'Years', value: 2, subtext: 'years of pure adoration' },
    { label: 'Months', value: 8, subtext: 'months of endless smiles' },
    { label: 'Days', value: timeData.days, subtext: 'days of cherished memories' },
    { label: 'Hours', value: timeData.hours, subtext: 'hours of thinking of you' },
    { label: 'Minutes', value: timeData.minutes, subtext: 'minutes of gentle prayers' },
    { label: 'Seconds', value: timeData.seconds, subtext: 'seconds and counting...' },
  ];

  return (
    <section id="birthday-timer" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0f0b0d] to-deepBlack overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-warmGold/[0.04] blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-roseGold/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto relative z-10 w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-warmGold/35 bg-warmGold/10 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="text-sm">✨</span>
            <span className="text-xs sm:text-sm font-inter tracking-[0.2em] text-warmGold uppercase font-semibold">
              2 Years & 8 Months ✦ Cherishing Dolly
            </span>
            <span className="text-sm">✨</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 gold-gradient">
            How Long I've Adored You
          </h2>
          <p className="font-cormorant text-lg sm:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-4">
            &quot;2 Years, 8 Months — and counting every single second of loving your smile, your warmth, and the gentle soul you are, Dolly.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto mb-10">
          {timerUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-xl border border-warmGold/25 bg-gradient-to-b from-[#181416]/90 to-[#0e0a0d]/90 p-4 sm:p-5 shadow-xl backdrop-blur-md overflow-hidden hover:border-warmGold/60 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-warmGold/40 to-transparent" />
              
              <div className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient mb-1 tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="font-inter text-xs uppercase tracking-widest text-warmGold font-semibold mb-1">
                {unit.label}
              </div>
              <div className="font-cormorant text-[11px] sm:text-xs text-softIvory/50 italic group-hover:text-softIvory/80 transition-colors">
                {unit.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Days Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block glass rounded-full px-6 sm:px-10 py-3 sm:py-4 border border-warmGold/30 shadow-2xl"
        >
          <p className="font-cormorant text-base sm:text-xl md:text-2xl text-softIvory/90 italic flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span>✨</span>
            <span><strong className="gold-gradient font-playfair font-bold text-xl sm:text-2xl not-italic">2 Years & 8 Months</strong> of having you as my favorite person in the entire universe ♥️</span>
            <span>✨</span>
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
