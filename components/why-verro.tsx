'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Managed infrastructure",
  "Predictable workflow outputs",
  "Secure execution environments",
  "Clear audit logging",
  "Centralized prompt management",
  "Scalable integrations"
];

export function WhyVerro() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-black text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-brand-yellow/10 blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 px-2 sm:px-0">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] leading-[1.05] md:text-5xl lg:text-[56px] font-extrabold font-display tracking-tight text-white mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Why engineering teams choose VerroAI.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-white/60 font-medium max-w-xl leading-relaxed mb-10 md:mb-12"
          >
            Stop building internal tooling just to manage language models. VerroAI provides the core infrastructure and necessary abstractions, so you can focus on building your product, not maintaining AI pipelines.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {reasons.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow flex-shrink-0 drop-shadow-[0_0_8px_rgba(231,200,90,0.5)]" />
                <span className="font-semibold text-[14px] sm:text-[15px] text-white/90 drop-shadow-sm">{r}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[400px] lg:max-w-[500px] aspect-square rounded-[32px] md:rounded-[40px] bg-white/5 border border-white/10 p-1 flex relative hover:rotate-[1deg] hover:scale-105 transition-all duration-500 will-change-transform"
            >
              <div className="w-full h-full rounded-[28px] md:rounded-[36px] bg-black border border-white/10 overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="absolute top-8 left-6 md:top-10 md:left-10 text-white font-mono text-[11px] md:text-sm opacity-50">
                    <div>{`>> Deploying workflow`}</div>
                    <div className="mt-2">{`[OK] Workflow engine ready`}</div>
                    <div className="mt-2">{`[OK] Validation schemas loaded`}</div>
                    <div className="mt-2 text-brand-yellow font-bold">{`[READY] Listening for events`}</div>
                 </div>
                 
                 <div className="absolute bottom-8 right-6 md:bottom-10 md:right-10 flex gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-brand-yellow animate-pulse"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/20"></div>
                 </div>
                 
                 {/* Decorative vector */}
                 <svg className="absolute bottom-[-10%] left-[-10%] w-[120%] opacity-20 pointer-events-none" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="var(--color-brand-yellow)" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.2" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="var(--color-brand-yellow)" strokeWidth="0.5" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="0.5" />
                 </svg>
              </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
