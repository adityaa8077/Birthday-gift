'use client';

import { useEffect, useRef, useState } from 'react';

interface FallingPetalsProps {
  active: boolean;
}

export default function FallingPetals({ active }: FallingPetalsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!active || reducedMotion) return;

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

    // Petal configuration
    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      swaySpeed: number;
      swayRange: number;
      swayOffset: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
    }

    const petals: Petal[] = [];
    const maxPetals = 8;
    const colors = [
      'rgba(245, 242, 232, 0.65)',  // Soft white
      'rgba(255, 204, 213, 0.65)',  // Blush pink
      'rgba(230, 210, 250, 0.65)',  // Lavender
    ];

    const createPetal = (startY = -20): Petal => {
      const size = Math.random() * 8 + 6;
      return {
        x: Math.random() * canvas.width,
        y: startY,
        size,
        speedY: Math.random() * 0.8 + 0.5,
        speedX: Math.random() * 0.4 - 0.2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayRange: Math.random() * 1.5 + 0.5,
        swayOffset: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      };
    };

    // Initialize initial petals
    for (let i = 0; i < maxPetals; i++) {
      petals.push(createPetal(Math.random() * canvas.height));
    }

    // Scroll tracker
    let lastScrollY = window.scrollY;
    let windTime = 0;
    let windForce = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = Math.abs(currentScroll - lastScrollY);
      
      // Increase wind speed temporarily
      if (diff > 2) {
        windForce = Math.min(windForce + diff * 0.05, 3.5);
        windTime = 30; // duration in frames
      }
      lastScrollY = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = totalHeight > 0 ? scrollY / totalHeight : 0;

      // Gradually diminish petals as user approaches footer (last 15% of the page)
      let activeMaxPetals = maxPetals;
      let fadeMultiplier = 1;

      if (scrollRatio > 0.8) {
        const factor = (1 - scrollRatio) / 0.2; // 1 to 0
        fadeMultiplier = Math.max(0, factor);
        activeMaxPetals = Math.round(maxPetals * fadeMultiplier);
      }

      // Decay wind
      if (windTime > 0) {
        windTime--;
        if (windTime === 0) windForce *= 0.9;
      } else {
        windForce *= 0.95;
      }

      // Update and draw petals
      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];

        // Update kinematics
        p.y += p.speedY;
        
        // Sway movement
        p.swayOffset += p.swaySpeed;
        const sway = Math.sin(p.swayOffset) * p.swayRange;
        p.x += p.speedX + sway + windForce * 0.8;

        // Rotation
        p.rotation += p.rotationSpeed;

        // Wrap or respawn
        const isOutOfScreen = p.y > canvas.height || p.x < -20 || p.x > canvas.width + 20;
        if (isOutOfScreen) {
          if (petals.length > activeMaxPetals) {
            // Remove extra petals if we are fading them out
            petals.splice(i, 1);
            continue;
          } else {
            petals[i] = createPetal(-20);
            continue;
          }
        }

        // Draw leaf-shaped petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * fadeMultiplier;

        // Draw curved double-bezier leaf shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size / 2, p.size / 2, 0, p.size);
        ctx.bezierCurveTo(p.size / 2, p.size / 2, p.size / 2, -p.size / 2, 0, -p.size);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      // Spawn new petals up to the target limit
      while (petals.length < activeMaxPetals) {
        petals.push(createPetal(-20));
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, [active, reducedMotion]);

  if (reducedMotion || !active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
