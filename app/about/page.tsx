'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Compass, Sparkles, Server, Cpu, Target, Eye, Database, ShieldAlert, LineChart, Code2 } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function AboutPage() {
  return (
    <main id="about-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative bg-[#020202]">
      {/* Background Ornaments */}
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* SECTION 1: HERO & MISSION */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/10 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-brand-yellow" />
            Our Mission
          </motion.div>
          
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[40px] leading-[1.05] sm:text-5xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-6"
          >
            Building infrastructure for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">AI workflows.</span>
          </motion.h1>
          
          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto mb-8"
          >
            We are building VerroAI to solve a critical challenge for modern teams: bridging the gap between raw AI reasoning and reliable business operations.
          </motion.p>
        </div>

        {/* SECTION 2: VISION STATEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28 border-t border-white/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold font-mono text-brand-gold uppercase tracking-wider block mb-2">Our Vision</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white mb-6">
              AI needs operational infrastructure.
            </h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-semibold mb-6">
              Modern enterprises have access to powerful language models. The challenge is deploying them into live, high-throughput pipelines where reliability matters. 
            </p>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-semibold">
              VerroAI provides the infrastructure to build secure and predictable AI workflows. We give teams the deterministic feedback loops, security constraints, and execution environments needed to turn raw AI outputs into guaranteed actions.
            </p>
          </div>
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-gold mb-6 border-b border-white/5 pb-4">Core Principles</h4>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">Predictable Execution</h5>
                  <p className="text-xs text-white/50 leading-relaxed font-semibold mt-1">
                    Every automated task executes inside isolated environments. We enforce strict data schemas before models interact with your core systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-gold shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">Secure Integrations</h5>
                  <p className="text-xs text-white/50 leading-relaxed font-semibold mt-1">
                    Direct integration into high-performance message brokers, transaction databases, and internal APIs using managed OAuth and API keys.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">Performance Control</h5>
                  <p className="text-xs text-white/50 leading-relaxed font-semibold mt-1">
                    Control costs and latency by routing workflows to the appropriate models based on task complexity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: FOCUS AREAS */}
        <div className="mb-28">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">Our Focus Areas</h2>
            <p className="text-sm text-white/50 font-semibold leading-relaxed">We develop hyper-specific tooling to tackle infrastructure limitations in enterprise deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Operational Tooling",
                desc: "Active workflow engines that monitor state drift, handle latency, and manage execution errors."
              },
              {
                icon: Code2,
                title: "AI Workflows",
                desc: "Code-first task-sequence definition with strict fallbacks, data schema validation, and typed outputs."
              },
              {
                icon: Target,
                title: "Automation Systems",
                desc: "Trigger-ready, repeatable microservices designed to integrate directly with webhook events from your existing tools."
              },
              {
                icon: ShieldAlert,
                title: "Data Privacy",
                desc: "Protect sensitive data and PII before it reaches external language models."
              }
            ].map((focus, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-brand-yellow/20 hover:bg-white/[0.08] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-yellow">
                  <focus.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{focus.title}</h3>
                <p className="text-xs sm:text-sm text-white/45 leading-relaxed font-medium">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: PRODUCT ECOSYSTEM OVERVIEW */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 mb-28 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-wider block mb-2">Systems Architecture</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-4">The VerroAI Platform</h2>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold mb-6">
                Our technology platform operates as a cohesive stack, allowing teams to build, manage, and scale AI workflows easily.
              </p>
              
              <div className="border-t border-white/15 pt-6 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-white font-bold font-mono text-lg">99.9%</div>
                  <div className="text-[9px] text-white/40 uppercase tracking-widest font-black">Uptime Target</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-[#E7C85A] font-bold font-mono text-lg">SOC2</div>
                  <div className="text-[9px] text-white/40 uppercase tracking-widest font-black">Compliance</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  tier: "Step 01: Ingress",
                  title: "Event Routing Engine",
                  desc: "Handles incoming webhook streams, queue ingestion, and parses commands into actionable, structured micro-tasks."
                },
                {
                  tier: "Step 02: Verification",
                  title: "Inline Guardrails",
                  desc: "Validates all context vectors before they hit generative model APIs, preventing data schema pollution or data leaks."
                },
                {
                  tier: "Step 03: Processing",
                  title: "Managed Execution",
                  desc: "Fires isolated, light sandbox runtime environments where custom automation scripts and LLM prompts are executed."
                },
                {
                  tier: "Step 04: Analytics",
                  title: "Observability Logs",
                  desc: "Guarantees complete state logging with timeline histories, allowing engineers to debug prompts and model behavior."
                }
              ].map((ecosystem, i) => (
                <div key={i} className="p-5 bg-black/40 border border-white/5 rounded-xl text-left">
                  <span className="text-[9px] font-mono font-bold text-brand-gold uppercase tracking-wide block mb-1">{ecosystem.tier}</span>
                  <h4 className="font-bold text-white text-sm mb-1.5">{ecosystem.title}</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed font-medium">{ecosystem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5: CORPORATE HISTORY & COMPLIANCE STANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-widest block mb-1">Company Status</span>
              <h3 className="text-xl font-bold font-display text-white mb-4">Startup DNA</h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold mb-6">
                We are an early-stage team of engineers focused on building robust, reliable tools for developers and operators rather than speculative AI products.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/15 p-4 text-left">
              <div className="text-xs font-bold text-white flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Security First
              </div>
              <p className="text-[11px] text-white/40 leading-normal font-semibold">
                VerroAI is built with security as a priority, targeting core compliance standards for growing companies.
              </p>
            </div>
          </div>

          <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-widest block mb-1">Ecosystem Status</span>
              <h3 className="text-xl font-bold font-display text-white mb-4">Backed by Builders</h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold">
                VerroAI is a venture-backed startup supported by leading infrastructure developers. We operate on managed cloud partner networks to ensure stable deployments for our customers.
              </p>
            </div>
            
            <div className="flex gap-4 border-t border-white/5 pt-6 mt-6">
              <div>
                <span className="text-[9px] text-white/30 uppercase tracking-widest block font-bold">Cloud Infrastructure</span>
                <span className="text-white text-xs font-bold font-mono">Managed VPC</span>
              </div>
              <div className="w-px bg-white/10 h-8" />
              <div>
                <span className="text-[9px] text-white/30 uppercase tracking-widest block font-bold">Company Stage</span>
                <span className="text-white text-xs font-bold font-mono">Early Stage</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
