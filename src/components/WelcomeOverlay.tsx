'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeOverlayProps {
  onEnter: () => void;
}

export default function WelcomeOverlay({ onEnter }: WelcomeOverlayProps) {
  const [shouldShow, setShouldShow] = useState<boolean>(true);
  const [visitCount, setVisitCount] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const visits = localStorage.getItem('dearher_visits');
    const count = visits ? parseInt(visits, 10) : 0;
    setVisitCount(count);
  }, []);

  // Canvas background particle drift
  useEffect(() => {
    if (!shouldShow) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number; y: number; radius: number; alpha: number; dx: number; dy: number;
    }> = [];

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
      });
    }

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const radialGrad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 10,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.6
      );
      radialGrad.addColorStop(0, 'rgba(212, 175, 55, 0.05)');
      radialGrad.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldShow]);

  const handleEnter = () => {
    localStorage.setItem('dearher_visits', '1');
    setShouldShow(false);
    onEnter();
  };

  return (
    <>
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deepBlack/85 backdrop-blur-sm text-softIvory select-none px-4"
          >
            <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />

            <div className="relative z-10 text-center max-w-xl px-4 flex flex-col items-center justify-center w-full">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 tracking-widest text-warmGold"
              >
                Sandhya ✦
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="font-cormorant text-xl sm:text-2xl text-warmGold/80 italic mb-4 sm:mb-6 tracking-wider"
              >
                (Sandy)
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.85, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                className="font-cormorant text-lg sm:text-2xl leading-relaxed italic text-softIvory/90 mb-8 sm:mb-12 max-w-md px-2"
              >
                &quot;To someone I truly admire with all my heart...
                I made this little corner of the internet just for you.&quot;
              </motion.p>

              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="relative px-10 sm:px-14 py-3.5 sm:py-4 rounded border-2 border-warmGold text-warmGold font-inter tracking-[0.25em] uppercase text-xs sm:text-sm font-semibold overflow-hidden group cursor-pointer shadow-[0_0_25px_rgba(212,175,55,0.3)] bg-deepBlack/80"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-deepBlack">
                  Enter The Story ✨
                </span>
                <div className="absolute inset-0 bg-warmGold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-0"></div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!shouldShow && visitCount > 0 && (
        <div className="absolute top-16 sm:top-20 left-0 right-0 z-40 flex flex-col items-center justify-center pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center"
          >
            <p className="font-cormorant text-xs sm:text-sm italic tracking-widest text-warmGold/80">
              Welcome back ✦
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}
