'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TeamHero } from './components/team-hero';
import { FounderProfile } from './components/founder-profile';
import { WhyVerro } from './components/why-verro';
import { OperationalPrinciples } from './components/operational-principles';
import { TeamCta } from './components/team-cta';

export default function TeamPage() {
  return (
    <main id="team-page" className="min-h-screen bg-[#020202] text-white selection:bg-brand-yellow selection:text-black overflow-hidden flex flex-col justify-between relative">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-24 relative z-10 w-full flex-grow">
        <TeamHero />
        <FounderProfile />
        <WhyVerro />
        <OperationalPrinciples />
        <TeamCta />
      </div>

      <Footer />
    </main>
  );
}
