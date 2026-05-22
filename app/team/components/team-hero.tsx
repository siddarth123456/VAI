'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export function TeamHero() {
  return (
    <div className="max-w-3xl mb-24 lg:mb-32 mt-8 lg:mt-12">
      <motion.div 
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/10 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-8"
      >
        <User className="w-3.5 h-3.5 text-brand-yellow" />
        Solo Founder
      </motion.div>
      
      <motion.h1 
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-8xl sm:text-9xl lg:text-[10rem] font-bold font-display tracking-tight text-white mb-8 leading-[0.95]"
      >
        Built for <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">execution.</span>
      </motion.h1>
      
      <motion.p 
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-lg sm:text-xl text-white/60 font-medium leading-relaxed max-w-2xl font-mono"
      >
        VerroAI is built by a solo founder focused entirely on execution. No corporate theater or inflated roadmaps—just rigorous engineering and operational pragmatism.
      </motion.p>
    </div>
  );
}
