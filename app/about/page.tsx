import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutHero } from './components/about-hero';
import { CompanyStory } from './components/company-story';
import { MissionVision } from './components/mission-vision';
import { OperationalPhilosophy } from './components/operational-philosophy';
import { StrategicFocus } from './components/strategic-focus';
import { OperatingPrinciples } from './components/operating-principles';
import { FounderPerspective } from './components/founder-perspective';
import { AboutCTA } from './components/about-cta';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0A0A0A] text-white selection:bg-brand-yellow selection:text-black">
      <Navbar />

      <div className="flex-grow pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <OperationalPhilosophy />
        <StrategicFocus />
        <OperatingPrinciples />
        <FounderPerspective />
        <AboutCTA />
      </div>

      <div className="bg-[#050505] border-t border-white/5">
        <Footer />
      </div>
    </main>
  );
}
