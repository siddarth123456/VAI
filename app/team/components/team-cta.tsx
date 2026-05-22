'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export function TeamCta() {
  return (
    <motion.div 
      custom={12}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      className="bg-[#050505] border border-white/10 text-white rounded-[2rem] p-12 sm:p-20 text-center relative overflow-hidden mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-50" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight mb-6">
          Ready to execute?
        </h2>
        <p className="text-lg text-white/60 font-medium mb-10 max-w-lg mx-auto font-mono">
          Stop managing software boundaries. Start executing core workflows with AI-native infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/platform" 
            className="flex items-center justify-center gap-2 bg-brand-yellow text-black shadow-[0_0_40px_rgba(231,200,90,0.2)] px-8 py-3.5 rounded-full font-bold text-sm h-12 w-full sm:w-auto hover:bg-brand-ivory hover:shadow-[0_0_60px_rgba(231,200,90,0.3)] transition-all hover:scale-[1.02] active:scale-95 group"
          >
            Explore the Platform
          </Link>
          <Link 
            href="/book-demo" 
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white transition-colors px-8 py-3.5 rounded-full font-bold text-sm h-12 w-full sm:w-auto hover:bg-white/10 hover:border-white/20"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
