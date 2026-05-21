import React from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Credibility } from '@/components/credibility';
import { DashboardPreview } from '@/components/dashboard-preview';
import { DashboardShowcase } from '@/components/dashboard-showcase';
import { Infrastructure } from '@/components/infrastructure';
import { WorkflowEcosystem } from '@/components/workflow-ecosystem';
import { WhyVerro } from '@/components/why-verro';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <Credibility />
      <div className="w-full relative z-20">
        <DashboardPreview />
      </div>
      <Infrastructure />
      <WorkflowEcosystem />
      <DashboardShowcase />
      <WhyVerro />
      <CTA />
      <Footer />
    </main>
  );
}
