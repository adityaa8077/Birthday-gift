'use client';

import { useState, useEffect } from 'react';
import NetflixNavbar from '@/components/NetflixNavbar';
import HeroSection from '@/components/HeroSection';
import TheQuietGrind from '@/components/TheQuietGrind';
import VisionaryAction from '@/components/VisionaryAction';
import DestinationGoogle from '@/components/DestinationGoogle';
import HeartBehindBrilliance from '@/components/HeartBehindBrilliance';
import FinaleSection from '@/components/FinaleSection';
import ParticleBackground from '@/components/ParticleBackground';

// Keepsake & Journey components
import ClientEffects from '@/components/ClientEffects';
import WelcomeOverlay from '@/components/WelcomeOverlay';
import BackgroundMusic, { TrackName } from '@/components/BackgroundMusic';
import FallingPetals from '@/components/FallingPetals';
import TodayReminder from '@/components/TodayReminder';
import JourneySection from '@/components/JourneySection';
import DreamsWorthChasing from '@/components/DreamsWorthChasing';
import VisionBook from '@/components/VisionBook';
import ThingsNeverChange from '@/components/ThingsNeverChange';
import MemoryGarden from '@/components/MemoryGarden';
import OpenWhenLetters from '@/components/OpenWhenLetters';
import HeartbeatConfession from '@/components/HeartbeatConfession';
import WhenLifeFeelsHeavy from '@/components/WhenLifeFeelsHeavy';
import BeforeYouLeave from '@/components/BeforeYouLeave';
import FinalScene from '@/components/FinalScene';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [confessionOpen, setConfessionOpen] = useState(false);
  const [sectionTrack, setSectionTrack] = useState<'sitare' | 'khat' | 'sajde'>('sitare');

  // Track scroll position to determine which song should play:
  // 1. "Sitaare" plays till she reaches "Things About You That I Love"
  // 2. "Khat" starts playing when she comes down to "Things About You That I Love"
  // 3. "Sajde" starts playing when she comes down to "Through My Eyes"
  useEffect(() => {
    const handleScroll = () => {
      const thingsElem = document.getElementById('things-never-change');
      const memoryElem = document.getElementById('memory-garden');

      if (!thingsElem || !memoryElem) return;

      const triggerPoint = window.innerHeight * 0.45;
      const thingsTop = thingsElem.getBoundingClientRect().top;
      const memoryTop = memoryElem.getBoundingClientRect().top;

      if (memoryTop <= triggerPoint) {
        setSectionTrack('sajde');
      } else if (thingsTop <= triggerPoint) {
        setSectionTrack('khat');
      } else {
        setSectionTrack('sitare');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute active track:
  // - In letter ("Open When You're Ready For Something I Never Said"): play "arz-kiya-hai" only
  // - Otherwise: play track corresponding to the current section (sitare -> khat -> sajde)
  const currentTrack: TrackName = confessionOpen ? 'arz-kiya-hai' : sectionTrack;

  return (
    <>
      {/* Visual micro-details: dynamic custom cursor, scroll indicator bar, DevTools logs */}
      <ClientEffects />

      {/* Intro Overlay & Music Loader */}
      <WelcomeOverlay onEnter={() => setStarted(true)} />
      <BackgroundMusic playMusic={started} currentTrack={currentTrack} />
      <FallingPetals active={started} />
      
      {/* Header bar */}
      <NetflixNavbar />
      
      <main className="relative min-h-screen">
        <ParticleBackground />
        
        {/* Story & Keepsake Sections */}
        <HeroSection />
        <TodayReminder />
        <JourneySection />
        <TheQuietGrind />
        <VisionaryAction />
        <DestinationGoogle />
        <DreamsWorthChasing />
        <VisionBook />
        <HeartBehindBrilliance />
        <ThingsNeverChange />
        <MemoryGarden />
        <OpenWhenLetters onConfessionOpen={() => setConfessionOpen(true)} />
        <WhenLifeFeelsHeavy />
        <BeforeYouLeave />
        <FinaleSection />
        <FinalScene onInViewChange={() => {}} />
      </main>

      {/* Heartbeat Confession Experience Overlay - plays "arz kiya hai" only */}
      <HeartbeatConfession
        isOpen={confessionOpen}
        onClose={() => setConfessionOpen(false)}
      />
    </>
  );
}
