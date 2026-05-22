'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Database, Workflow, Shield, Network, Zap, Cpu, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: <Workflow className="w-6 h-6 text-brand-yellow" />,
    title: "Reliable AI Workflows",
    description: "Build automated processes that use language models to categorize, route, and respond to operational data."
  },
  {
    icon: <Database className="w-6 h-6 text-brand-gold" />,
    title: "Structured Outputs",
    description: "Force language models to return strict, schemas-validated data that your existing systems can understand."
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-ivory" />,
    title: "Secure Execution",
    description: "Run AI operations in sandboxed environments with clear access controls and audit logging."
  },
  {
    icon: <Network className="w-6 h-6 text-brand-amber" />,
    title: "Managed Integrations",
    description: "Connect safely to your databases and APIs with managed authentication and automated error recovery."
  },
];

export function Features() {
  return (
    <section className="relative w-full flex flex-col items-center py-24 lg:py-32 px-4 sm:px-6 z-10">
      
      <div className="ambient-glow bg-[#D4AF37]/10 w-[600px] h-full left-0 top-1/2 -translate-y-1/2" />

      <div className="max-w-[1440px] w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20 px-2 sm:px-0"
        >
          <div className="max-w-3xl">
            <h2 className="text-[36px] leading-[1.05] md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-black mb-4 md:mb-6">
              Built for <br className="hidden sm:block" />
              <span className="text-text-muted">unprecedented scale.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed">
              VerroAI combines the performance of native cloud infrastructure with the adaptability of foundation models.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[14px] md:text-[15px] font-bold text-brand-yellow hover:text-brand-amber transition-colors mt-2 md:mt-0 group">
            Explore Documentation <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.0, 
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="glass-panel p-6 sm:p-8 rounded-2xl hover:bg-black/10 transition-colors relative overflow-hidden group"
            >
              <div className="mb-6 sm:mb-8 p-3 bg-black/10 inline-flex rounded-xl border border-black/5">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-text-muted text-[13px] md:text-[15px] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 w-full rounded-[24px] sm:rounded-3xl border border-white/10 glass-panel p-6 sm:p-10 lg:p-16 relative overflow-hidden flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="ambient-glow bg-brand-yellow/5 w-[500px] h-[500px] -top-32 -right-32 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
          
          <div className="max-w-xl z-10 flex-col relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full mb-6 md:mb-8 shadow-[0_0_15px_rgba(231,200,90,0.1)]">
               <span className="text-[10px] md:text-xs font-bold text-brand-yellow tracking-[0.1em] uppercase">Architecture</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white mb-4 md:mb-6 tracking-tight drop-shadow-sm">Code-First Workflows</h3>
            <p className="text-sm md:text-base lg:text-lg text-white/60 font-mono leading-relaxed">VerroAI helps engineering teams connect AI to their business logic. Use our platform to manage prompts, handle model latency, and ensure the data coming back is ready for production.</p>
          </div>
          
          <div className="w-full xl:w-auto flex flex-col gap-3 md:gap-4 min-w-full sm:min-w-[320px] z-10 relative">
            <div className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md shadow-inner group transition-all hover:bg-black/60 hover:border-white/10">
               <div className="flex items-center gap-3 md:gap-4">
                 <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-yellow/20 transition-colors">
                   <Cpu className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-brand-yellow flex-shrink-0 transition-colors" />
                 </div>
                 <span className="text-xs md:text-sm font-bold text-white/90">Managed Execution</span>
               </div>
               <span className="text-[10px] md:text-xs font-bold font-mono text-brand-yellow drop-shadow-[0_0_8px_rgba(231,200,90,0.8)]">Sandboxed</span>
            </div>
            <div className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md shadow-inner group transition-all hover:bg-black/60 hover:border-white/10">
               <div className="flex items-center gap-3 md:gap-4">
                 <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#10B981]/20 transition-colors">
                   <Database className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-[#10B981] flex-shrink-0 transition-colors" />
                 </div>
                 <span className="text-xs md:text-sm font-bold text-white/90">Schema Validation</span>
               </div>
               <span className="text-[10px] md:text-xs font-bold font-mono text-[#10B981] drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">Enforced</span>
            </div>
            <div className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md shadow-inner group transition-all hover:bg-black/60 hover:border-white/10">
               <div className="flex items-center gap-3 md:gap-4">
                 <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                   <Network className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-white flex-shrink-0 transition-colors" />
                 </div>
                 <span className="text-xs md:text-sm font-bold text-white/90">Audit Logs</span>
               </div>
               <span className="text-[10px] md:text-xs font-bold font-mono text-white/40">Visible</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
