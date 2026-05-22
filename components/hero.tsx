'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Terminal } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  }
};

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 sm:px-6 z-10 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="ambient-glow bg-[#D4AF37]/20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="ambient-glow bg-brand-yellow/30 w-[600px] h-[400px] md:w-[800px] md:h-[600px] top-0 left-1/2 -translate-x-1/2" />
      
      <motion.div 
        className="flex flex-col items-center text-center max-w-4xl w-full z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          hidden: {}
        }}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full mb-6 max-w-full">
          <span className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse flex-shrink-0 shadow-[0_0_12px_rgba(231,200,90,0.8)]" />
          <span className="text-[10px] sm:text-xs font-bold text-white/80 tracking-[0.2em] uppercase truncate">Operational Intelligence</span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-[43px] leading-[1.05] sm:text-[63px] lg:text-[75px] xl:text-[83px] font-extrabold tracking-[-0.04em] text-white font-display mb-6 md:mb-8 drop-shadow-2xl max-w-[1000px] mx-auto px-2"
        >
          AI infrastructure for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-yellow to-brand-amber">business operations.</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-2xl mb-10 md:mb-12 leading-relaxed font-mono px-4"
        >
          VerroAI provides the infrastructure for startups and growing teams to build reliable AI workflows. Connect language models to your daily operations with predictable, secure execution.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0 mt-4">
          <Link href="/book-demo" className="group flex items-center justify-center gap-2 bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] px-8 py-3.5 sm:py-4 rounded-full font-bold w-full sm:w-auto hover:bg-white/90 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] active:scale-95 text-[15px] sm:text-base">
            Book a Demo
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          
          <Link href="/platform" className="flex items-center justify-center gap-2 glass-button px-8 py-3.5 sm:py-4 rounded-full font-semibold w-full sm:w-auto hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-95 text-[15px] sm:text-base text-white">
            <Terminal className="w-4 h-4 text-white/50" />
            Explore Platform
          </Link>
        </motion.div>
        
      </motion.div>
    </section>
  );
}
