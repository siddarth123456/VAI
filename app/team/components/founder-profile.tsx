'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export function FounderProfile() {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <motion.div 
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <div className="sticky top-32">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-8 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-brand-yellow text-3xl sm:text-4xl font-display font-medium relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-yellow/5 bg-[linear-gradient(45deg,transparent_25%,rgba(231,200,90,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine"></div>
              SC
            </div>
            <h2 className="text-3xl font-bold font-display tracking-tight mb-2 text-white">Siddarth <br />Choudhary</h2>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-brand-gold font-mono font-bold text-[10px] tracking-wider uppercase">Founder & Architect</p>
              <a 
                href="https://www.linkedin.com/in/siddarth-choudhary/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 hover:text-brand-yellow transition-colors flex items-center justify-center p-2 rounded-full hover:bg-white/5"
                title="Siddarth Choudhary on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/60 font-medium">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-yellow/50 rounded-full"></span>
                Systems Architecture
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-yellow/50 rounded-full"></span>
                Product Engineering
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-yellow/50 rounded-full"></span>
                AI Infrastructure
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-7 space-y-10 text-lg sm:text-xl leading-relaxed text-white/70 font-medium"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-white mb-6 tracking-tight">The Vision</h3>
            <p className="font-mono">
              Foundation models are rapidly commoditizing. The real differentiation for the next decade of software is not the underlying model, but how it is orchestrated within complex, real-world constraints.
            </p>
            <p className="font-mono">
              I am building VerroAI to provide the connective tissue for AI-native operations—moving beyond conversational interfaces to deterministic, system-level execution.
            </p>
          </div>

          <div className="h-px w-full bg-white/10 rounded-full my-12"></div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-white mb-6 tracking-tight">Engineering Philosophy</h3>
            <p className="font-mono">
              Software built by large committees often inherits their communication structures. As a solo founder, I optimize for extreme architectural cohesion.
            </p>
            <p className="font-mono">
              Every layer of VerroAI—from the user interface to the deployment orchestration—is unified. This structural advantage permits rapid iteration and guarantees a lean, deeply integrated system void of organizational bloat.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
