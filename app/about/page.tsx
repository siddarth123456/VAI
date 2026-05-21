'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Users, Award, Shield, CheckCircle, TrendingUp, Cpu, Sparkles, Code, Globe } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const team = [
  {
    name: "Marcus Verron",
    role: "Co-Founder & CEO",
    bio: "Ex-Google Brain Staff Research Scientist. M.S. in Computer Science (Stanford AI Lab). Pioneer in symbolic agent reasoning architectures.",
    avatarBg: "bg-gradient-to-br from-brand-yellow/30 to-brand-gold/60"
  },
  {
    name: "Dr. Helen Zhao",
    role: "Co-Founder & CTO",
    bio: "PhD in Distributed Cloud Systems from MIT. Former Principal Engineer at Palantir and Staff Architect at VMware. Architect of elite edge fabrics.",
    avatarBg: "bg-gradient-to-br from-brand-ivory/30 to-brand-amber/60"
  },
  {
    name: "Siddharth Choudhary",
    role: "VP of Enterprise Engineering",
    bio: "Ex-Stripe Core Platform Lead. Builder of mission-critical orchestration systems serving trillions of requests globally.",
    avatarBg: "bg-gradient-to-br from-brand-yellow/20 to-brand-ivory/40"
  }
];

const advisors = [
  {
    name: "Prof. Alan Vance",
    role: "Academic Advisor",
    org: "Professor of AI at Stanford, ex-Director at Google Research. Pioneer in autonomous error-correction systems."
  },
  {
    name: "Sarah Jenkins",
    role: "Infrastructure Advisor",
    org: "Former VP of Infrastructure at Stripe. Leading advisor on hyperscale systems compliance."
  }
];

const milestones = [
  { year: "Q1 2025", title: "VerroAI Launched", desc: "Spun out of MIT & Stanford research labs; secured $4.2M seed financing led by Tier-1 Silicon Valley VCs." },
  { year: "Q3 2025", title: "v1 Intelligent Agent Layer", desc: "Released core routing engine, achieving sub-50ms self-healing actions on private testbeds." },
  { year: "Q1 2026", title: "Enterprise Compliance Node", desc: "Achieved full SOC2 Type II audit readiness and launched Google Cloud Partnership tier." },
  { year: "Q4 2026 (Roadmap)", title: "Fully Autonomous Infrastructure mesh", desc: "Deployment of cross-tenant federated self-correction modules for fortune-500 hyper-clouds." }
];

export default function AboutPage() {
  return (
    <main id="about-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Users className="w-3.5 h-3.5 text-brand-yellow" />
            Company & Credibility
          </motion.div>
          
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6"
          >
            Built for Scale. <br />
            Rooted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Academic Rigor.</span>
          </motion.h1>
          
          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-white/60 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            VerroAI was founded by former Google Brain researchers and MIT systems architects. We build the operating system for autonomous enterprise scale-up operations.
          </motion.p>
        </div>

        {/* Core Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Shield,
              title: "Enterprise Legitimacy",
              desc: "From SOC2 Type II frameworks to dedicated VPC clusters, we hold our platform to military-grade compliance and transaction parameters."
            },
            {
              icon: Cpu,
              title: "Autonomous Native",
              desc: "We bypass standard conditional logic queues in favor of intent-driven, neural network agent layers that actively self-heal."
            },
            {
              icon: Sparkles,
              title: "VC Backed Security",
              desc: "Supported by prominent deep-tech venture houses and active partners in Google for Startups Accelerator labs."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-yellow/30 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-yellow">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Founding Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">Leadership Behind VerroAI</h2>
            <p className="text-sm sm:text-base text-white/50 max-w-lg mx-auto">Venture-scale pedigree combining hyper-growth enterprise scaling with core neural AI research.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                custom={i + 5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col justify-between hover:border-brand-yellow/20 transition-all group"
              >
                <div className="p-6">
                  {/* Decorative Profile Icon/Initial */}
                  <div className={`w-14 h-14 rounded-full ${member.avatarBg} flex items-center justify-center mb-6`}>
                    <span className="text-xl font-bold font-display text-white">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                  </div>
                  <h3 className="font-bold text-xl text-white group-hover:text-brand-yellow transition-colors">{member.name}</h3>
                  <div className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-4">{member.role}</div>
                  <p className="text-sm text-white/50 leading-relaxed font-medium">{member.bio}</p>
                </div>
                
                <div className="border-t border-white/15 p-4 bg-white/[0.02] flex items-center justify-between text-xs font-bold text-white/40">
                  <span>Verified Credentials</span>
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">AI Lab</span>
                    <span className="px-2 py-0.5 rounded bg-brand-yellow/10 text-brand-gold">M.S.</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisory Board & Backers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-yellow" />
              Strategic Advisory
            </h3>
            <div className="space-y-6">
              {advisors.map((adv, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-brand-yellow/30 pl-4 py-1">
                  <div>
                    <h4 className="font-bold text-white text-base">{adv.name}</h4>
                    <p className="text-xs font-bold text-brand-gold mb-1.5">{adv.role}</p>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-medium">{adv.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-yellow" />
                Seed Investors & Support
              </h3>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-medium mb-6">
                VerroAI is backed by premium Tier-1 global seed funds, active tech angel circles, and Google Cloud's Venture-Scale Startup Credits Framework. 
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-center">
                <div className="text-white font-bold text-lg leading-tight font-display">SECURE</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">Capital Ratio</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-center">
                <div className="text-brand-yellow font-bold text-lg leading-tight font-display">$4.2M</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">Seed Round Raised</div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones & Roadmap */}
        <div className="border border-white/10 rounded-3xl bg-white/[0.02] p-8 backdrop-blur-md overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 text-brand-yellow/10 pointer-events-none">
            <TrendingUp className="w-32 h-32" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-8">Evolution & Roadmap</h2>
          
          <div className="relative border-l border-white/10 ml-4 pl-8 space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative group">
                {/* Node Dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-bg-dark border-2 border-brand-yellow flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-yellow group-hover:scale-125 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-gold bg-brand-yellow/10 px-2 py-0.5 rounded-full border border-brand-yellow/20">{m.year}</span>
                  <h4 className="font-bold text-lg text-white mt-2 mb-1">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-medium max-w-3xl">{m.desc}</p>
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
