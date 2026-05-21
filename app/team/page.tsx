'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Users2, Shield, Code, Cpu, Lightbulb, GraduationCap, Building2, Briefcase, Rocket } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const founders = [
  {
    name: "Marcus Verron",
    role: "CEO",
    academic: "Ex-Google Software Engineer",
    focus: "Infrastructure, Product Strategy, Go-to-market.",
    bio: "Marcus is a software engineer with a background in machine learning infrastructure. At VerroAI, he focuses on building reliable foundations that connect LLMs to business workflows.",
    avatarText: "MV",
    avatarBg: "bg-gradient-to-br from-[#E7C85A]/30 to-[#B68A12]/60"
  },
  {
    name: "Helen Zhao",
    role: "CTO",
    academic: "Distributed Systems Engineering",
    focus: "Sandboxing, Security, Core Infrastructure.",
    bio: "Helen comes from a background in distributed systems and cloud infrastructure. She leads our engineering efforts, ensuring our workflow engine is secure and performant.",
    avatarText: "HZ",
    avatarBg: "bg-gradient-to-br from-white/20 to-[#E7C85A]/45"
  }
];

const leadership = [
  {
    name: "Siddharth Choudhary",
    role: "Head of Engineering",
    bg: "Ex-Stripe",
    focus: "Product development, Integrations, Developer Experience.",
    bio: "Siddharth has a background in product engineering and API design. At VerroAI, he heads our product development and customer experience, ensuring developers have the right tools.",
    avatarText: "SC",
    avatarBg: "bg-gradient-to-br from-white/10 to-brand-ivory/25"
  }
];

const advisors = [
  {
    name: "Alan Vance",
    role: "Technical Advisor",
    source: "Systems Researcher",
    desc: "Advises VerroAI on infrastructure architecture, fault-tolerance, and scaling execution environments."
  },
  {
    name: "Sarah Jenkins",
    role: "Compliance Advisor",
    source: "Data Security Expert",
    desc: "Advises VerroAI on product strategy, data compliance, and enterprise deployment patterns."
  }
];

const values = [
  {
    icon: Shield,
    title: "Predictability First",
    desc: "We don't believe business automation should be a guessing game. Every workflow runs within strict constraints to ensure predictable outputs."
  },
  {
    icon: Cpu,
    title: "Developer Tools",
    desc: "Our mission is to build tools that developers actually want to use. We prioritize clean APIs, great documentation, and clear error logs."
  },
  {
    icon: Code,
    title: "Operations Focused",
    desc: "AI is a means to an end. We care about the final operational outcome—saving time, reducing errors, and improving business processes."
  }
];

export default function TeamPage() {
  return (
    <main id="team-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative bg-[#020202]">
      {/* Visual Glare Decor */}
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Users2 className="w-3.5 h-3.5 text-brand-yellow" />
            The VerroAI Team
          </motion.div>
          
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[40px] leading-[1.05] sm:text-5xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-6"
          >
            Built by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow font-display">engineers.</span>
          </motion.h1>
          
          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            We are a team of software engineers, cloud architects, and product builders focused on making AI reliable for business operations.
          </motion.p>
        </div>

        {/* SECTION 1: FOUNDERS */}
        <div className="mb-24">
          <div className="border-b border-white/10 pb-4 mb-12 text-left">
            <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-[0.15em] block mb-1">Founding Team</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold font-display tracking-tight text-white">The Founding Team</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, i) => (
              <div 
                key={i}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-yellow/20 hover:bg-white/[0.04] transition-all backdrop-blur-md relative"
              >
                <div>
                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
                    {/* Founder Symbol Avatar */}
                    <div className={`w-14 h-14 rounded-full ${founder.avatarBg} flex items-center justify-center text-white text-xl font-normal tracking-wide shadow-lg shrink-0`}>
                      {founder.avatarText}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white block">{founder.name}</h3>
                      <p className="text-xs font-bold text-brand-gold block mt-0.5">{founder.role}</p>
                      <p className="text-[10px] font-mono text-white/40 block mt-1 uppercase tracking-wider">{founder.academic}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-white/30 tracking-widest block mb-1">Focus</span>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">{founder.focus}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-white/30 tracking-widest block mb-1 font-mono">Bio</span>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold">{founder.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: EXECUTIVE LEADERSHIP */}
        <div className="mb-24">
          <div className="border-b border-white/10 pb-4 mb-12 text-left">
            <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-[0.15em] block mb-1">Company Leadership</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold font-display tracking-tight text-white">Engineering Leadership</h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {leadership.map((lead, i) => (
              <div 
                key={i}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-md hover:border-brand-yellow/15 transition-all"
              >
                <div className="lg:col-span-4 flex flex-row sm:flex-row gap-5 items-center">
                  <div className={`w-14 h-14 rounded-full ${lead.avatarBg} flex items-center justify-center text-white text-xl font-normal tracking-wide shadow-lg shrink-0`}>
                    {lead.avatarText}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">{lead.name}</h3>
                    <p className="text-xs font-bold text-brand-gold mt-0.5">{lead.role}</p>
                    <p className="text-[10px] font-mono text-white/40 mt-1 uppercase tracking-wider">{lead.bg}</p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-white/30 tracking-widest block mb-1">Expertise</span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">{lead.focus}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-white/30 tracking-widest block mb-1">Background</span>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold">{lead.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: COMPANY VALUES */}
        <div className="mb-24 bg-white/[0.01] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-[0.15em] block mb-1">Our Core Values</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold font-display tracking-tight text-white">How We Build VerroAI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="bg-black/50 border border-white/5 rounded-2xl p-6 hover:border-brand-yellow/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-yellow">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-white/45 leading-relaxed font-semibold">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* SECTION 4: ADVISOR & SCIENTIFIC NETWORK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-[0.15em] block mb-1">Advisors</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-6">Strategic Peer Advisory Team</h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-semibold">
              We complement our team with guidance from expert voices in cloud infrastructure, compliance, and enterprise execution.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {advisors.map((adv, i) => (
              <div 
                key={i}
                className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex gap-5 items-start backdrop-blur-md hover:border-brand-yellow/15 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Lightbulb className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-bold text-white text-base leading-none">{adv.name}</h4>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block mt-1.5">{adv.role}</span>
                    <span className="text-[10px] font-mono text-white/40 block mt-1 uppercase tracking-widest">{adv.source}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
