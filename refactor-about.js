const fs = require('fs');
const path = require('path');

const dir = 'app/about/components';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

// 1. About Hero
fs.writeFileSync(path.join(dir, 'about-hero.tsx'), `'use client';

import { motion } from 'motion/react';
import { Compass } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export function AboutHero() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-32 md:mb-48">
      <motion.div 
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-gold text-xs font-bold tracking-[0.1em] uppercase mb-8"
      >
        <Compass className="w-3.5 h-3.5" />
        About VerroAI
      </motion.div>
      
      <motion.h1 
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-8 leading-[1.05]"
      >
        AI Operational Intelligence <br className="hidden md:block" />
        for <span className="text-white/40">Modern Startups.</span>
      </motion.h1>
      
      <motion.p 
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-lg sm:text-xl text-white/50 font-mono leading-relaxed max-w-2xl mx-auto"
      >
        We build the visibility, control, and automation infrastructure that technical founders need to scale AI systems predictably.
      </motion.p>
    </div>
  );
}
`);

// 2. Company Story
fs.writeFileSync(path.join(dir, 'company-story.tsx'), `export function CompanyStory() {
  return (
    <div className="max-w-5xl mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-white/60 font-mono text-sm md:text-base leading-relaxed">
        <div className="md:col-span-4">
          <span className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-4 block font-mono">The Genesis</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Born from operational friction.</h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p>
            As AI capabilities accelerated, we noticed a recurring pattern among high-velocity startups: the leap from an impressive prototype to a reliable production system was fraught with operational blind spots.
          </p>
          <p>
            Teams were patching together disparate tools to manage prompt drift, monitor unpredictable latency, and standardize chaotic JSON outputs. Innovation was bottlenecked by infrastructure. We realized that to treat AI as a core operational driver, startups needed a new primitive—an intelligence layer that prioritizes reliability over hype.
          </p>
        </div>
      </div>
    </div>
  );
}
`);

// 3. Mission Vision
fs.writeFileSync(path.join(dir, 'mission-vision.tsx'), `import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 hover:bg-white/10 transition-colors">
          <Target className="w-6 h-6 text-brand-yellow mb-6" />
          <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
          <p className="text-white/50 font-mono leading-relaxed text-sm md:text-base">
            To equip startups with the operational tooling required to build, observe, and trust autonomous software systems.
          </p>
        </div>
        <div className="bg-brand-yellow/5 border border-brand-yellow/10 rounded-3xl p-10 md:p-12 hover:bg-brand-yellow/10 transition-colors">
          <Eye className="w-6 h-6 text-brand-gold mb-6" />
          <h3 className="text-2xl font-display font-bold text-brand-gold mb-4">Our Vision</h3>
          <p className="text-brand-gold/60 font-mono leading-relaxed text-sm md:text-base">
            A future where AI operations are as transparent, deterministic, and scalable as traditional compute infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
`);

// 4. Operational Philosophy
fs.writeFileSync(path.join(dir, 'operational-philosophy.tsx'), `export function OperationalPhilosophy() {
  return (
    <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 mb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-4 block font-mono">Core Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Deterministic outcomes in probabilistic environments.</h2>
          <p className="text-white/50 font-mono text-sm leading-relaxed mb-8">
            We believe that enterprise reliability doesn't have to mean enterprise bloat. Startups need speed, but not at the cost of operational integrity.
          </p>
          <ul className="space-y-4">
            {[
              "Visibility precedes control.",
              "Code is the ultimate source of truth.",
              "Failures should be loud, handled, and logged."
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/50 uppercase tracking-wider font-bold">Execution Confidence</span>
                <span className="text-emerald-400 font-bold">99.9%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[99.9%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-white/50 uppercase tracking-wider font-bold">System Latency (p95)</span>
                <span className="text-brand-yellow font-bold">120ms</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-brand-yellow w-[15%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

// 5. Strategic Focus
fs.writeFileSync(path.join(dir, 'strategic-focus.tsx'), `import { Activity, Server, Layers } from 'lucide-react';

export function StrategicFocus() {
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-display font-bold text-white mb-4">Strategic Focus</h2>
        <p className="text-white/50 font-mono text-sm md:text-base max-w-2xl mx-auto">The pillars of our architectural approach.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Activity, title: "Telemetry & Logs", desc: "Detailed execution tracing for AI requests, responses, and token costs." },
          { icon: Server, title: "Infrastructure", desc: "Scalable VPC deployments designed for high-concurrency model routing." },
          { icon: Layers, title: "Workflow State", desc: "Managed state transitions for multi-step autonomous agent operations." }
        ].map((focus, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <focus.icon className="w-6 h-6 text-brand-yellow mb-6" />
            <h3 className="text-lg font-bold text-white mb-3">{focus.title}</h3>
            <p className="text-white/50 text-sm font-mono leading-relaxed">{focus.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

// 6. Operating Principles
fs.writeFileSync(path.join(dir, 'operating-principles.tsx'), `export function OperatingPrinciples() {
  return (
    <div className="max-w-6xl mx-auto mb-32 border-t border-white/10 pt-32">
      <span className="text-brand-gold uppercase tracking-widest font-bold text-xs mb-12 block text-center font-mono">Operating Principles</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {[
          { num: "01", title: "Ship with Precision", desc: "Speed is irrelevant if the system breaks in production." },
          { num: "02", title: "Design for Scale", desc: "Architect solutions that endure 10x volume increases." },
          { num: "03", title: "Embrace the Technical", desc: "Avoid abstracting away critical developer controls." },
          { num: "04", title: "Protect Data", desc: "Zero-compromise security posture on customer logic." }
        ].map((val, i) => (
          <div key={i} className="border-l border-brand-yellow/20 pl-6">
            <span className="text-brand-yellow font-mono text-sm font-bold block mb-2">{val.num}</span>
            <h4 className="text-white font-bold mb-2 text-[15px]">{val.title}</h4>
            <p className="text-white/50 text-xs font-mono leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

// 7. Founder Perspective
fs.writeFileSync(path.join(dir, 'founder-perspective.tsx'), `import { ShieldCheck, Zap } from 'lucide-react';

export function FounderPerspective() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
      <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-12 relative">
        <ShieldCheck className="w-6 h-6 text-brand-yellow mb-6" />
        <h3 className="text-2xl font-display font-bold text-white mb-6">Founder Perspective</h3>
        <p className="text-white/60 font-mono text-sm leading-relaxed mb-8">
          "We aren't building just another wrapper. We are building the foundational infrastructure that the next generation of SaaS companies will rely on. Our goal is to make AI systems boring, predictable, and exceptionally reliable."
        </p>
        <div className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono border-t border-white/10 pt-6">Leadership Team</div>
      </div>
      <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
        <Zap className="w-6 h-6 text-emerald-500 mb-6" />
        <h3 className="text-2xl font-display font-bold text-white mb-6">Future Direction</h3>
        <p className="text-white/60 font-mono text-sm leading-relaxed mb-8 block relative z-10">
          The AI landscape will commoditize language models, but operational execution will remain a defensible moat. We are extending our platform to support multi-agent orchestration, advanced security sandboxing, and deeper CI/CD integrations over the coming quarters.
        </p>
        <div className="text-xs font-bold text-emerald-400 flex items-center gap-2 relative z-10 font-mono border-t border-white/10 pt-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Platform Roadmap Active
        </div>
      </div>
    </div>
  );
}
`);

// 8. About CTA
fs.writeFileSync(path.join(dir, 'about-cta.tsx'), `import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutCTA() {
  return (
    <div className="max-w-4xl mx-auto text-center border-t border-white/10 pt-24">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Partner with VerroAI</h2>
      <p className="text-white/50 font-mono text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Bring operational intelligence to your AI-native software. Let's discuss your infrastructure requirements.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/book-demo" className="px-8 py-3.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-brand-ivory transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
          Book a Strategy Call <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/contact" className="px-8 py-3.5 bg-white/5 text-white font-bold text-sm rounded-lg hover:bg-white/10 border border-white/10 transition-colors w-full sm:w-auto text-center">
          Contact Team
        </Link>
      </div>
    </div>
  );
}
`);

// Reconstruct page.tsx
const pageContent = `import React from 'react';
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
    <main className="min-h-screen flex flex-col bg-[#020202] text-white selection:bg-brand-yellow selection:text-black">
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
`;

fs.writeFileSync('app/about/page.tsx', pageContent);

console.log('Successfully refactored about page components');
