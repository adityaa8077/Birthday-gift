'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type TrackName = 'sitare' | 'khat' | 'arz-kiya-hai' | 'sajde';

interface BackgroundMusicProps {
  playMusic: boolean;
  currentTrack: TrackName;
}

const trackLabels: Record<TrackName, string> = {
  'sitare': 'Sitaare ✦',
  'khat': 'Khat ✦',
  'arz-kiya-hai': 'Arz Kiya Hai ✦',
  'sajde': 'Sajde ✦',
};

const trackFiles: Record<TrackName, string> = {
  'sitare': '/audio/sitare.mp3',
  'khat': '/audio/khat.mp3',
  'arz-kiya-hai': '/audio/arz-kiya-hai.mp3',
  'sajde': '/audio/sajde.mp3',
};

export default function BackgroundMusic({ playMusic, currentTrack }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userMuted, setUserMuted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const currentTrackRef = useRef<TrackName | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Handle track switches and playMusic states
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playMusic || userMuted) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      }
      return;
    }

    // Always 100% full volume as requested
    audio.volume = 1.0;

    const targetSrc = trackFiles[currentTrack];

    // Check if we need to switch tracks
    if (currentTrackRef.current !== currentTrack) {
      currentTrackRef.current = currentTrack;
      audio.src = targetSrc;
      audio.currentTime = 0;
      audio.load();
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn(`Autoplay blocked for track ${currentTrack}:`, err);
            setIsPlaying(false);
          });
      }
    } else if (audio.paused && !userMuted) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.warn('Play attempt failed:', err));
      }
    }
  }, [playMusic, currentTrack, userMuted, isPlaying]);

  // Fallback interaction listener to guarantee playback on mobile / strict autoplay environments
  useEffect(() => {
    if (!playMusic || isPlaying || userMuted) return;

    const handleInteraction = () => {
      const audio = audioRef.current;
      if (audio && audio.paused && !userMuted) {
        audio.volume = 1.0;
        audio.play()
          .then(() => {
            setIsPlaying(true);
            removeListeners();
          })
          .catch((err) => console.warn('User interaction play failed:', err));
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => removeListeners();
  }, [playMusic, isPlaying, userMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setUserMuted(true);
    } else {
      setUserMuted(false);
      audio.volume = 1.0;
      if (!audio.src || currentTrackRef.current !== currentTrack) {
        audio.src = trackFiles[currentTrack];
        currentTrackRef.current = currentTrack;
      }
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Failed to toggle play audio:', err);
        });
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        preload="auto" 
        src={trackFiles[currentTrack]}
      />

      {/* Floating control button */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="mr-3 glass px-3.5 py-1.5 rounded-full border border-warmGold/30 text-xs font-cormorant text-softIvory whitespace-nowrap tracking-wider pointer-events-none select-none shadow-lg bg-deepBlack/90 flex items-center gap-2"
            >
              <span className="text-warmGold">♪</span>
              <span>{isPlaying ? `Playing: ${trackLabels[currentTrack]}` : 'Music paused'}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={togglePlay}
          className="relative w-12 h-12 rounded-full glass border border-warmGold/40 flex items-center justify-center text-warmGold shadow-lg hover:border-warmGold/80 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-warmGold/40 bg-deepBlack/80"
          aria-label={isPlaying ? "Mute Music" : "Play Music"}
        >
          {/* Pulsating background ring */}
          {isPlaying && !reducedMotion && (
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-warmGold/35 pointer-events-none"
            />
          )}

          {/* Equalizer / Play icon */}
          <div className="relative w-5 h-5 flex items-center justify-center">
            {isPlaying ? (
              <div className="flex gap-[3px] items-end h-4 w-4 justify-center">
                <span 
                  className={`w-[2px] bg-warmGold rounded-full ${!reducedMotion ? 'animate-[pulse_1s_infinite_alternate]' : 'h-3'}`}
                  style={{ animationDelay: '0.1s' }}
                />
                <span 
                  className={`w-[2px] bg-warmGold rounded-full ${!reducedMotion ? 'animate-[pulse_0.8s_infinite_alternate]' : 'h-4'}`}
                  style={{ animationDelay: '0.3s' }}
                />
                <span 
                  className={`w-[2px] bg-warmGold rounded-full ${!reducedMotion ? 'animate-[pulse_1.2s_infinite_alternate]' : 'h-2'}`}
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
            ) : (
              <svg 
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
            )}
          </div>
        </button>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% { height: 4px; }
          100% { height: 16px; }
        }
      `}</style>
    </>
  );
}
