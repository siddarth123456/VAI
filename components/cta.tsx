'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-[#050505] relative z-10 overflow-hidden flex flex-col items-center text-center border-t border-white/5">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--color-brand-yellow)_0%,transparent_60%)] opacity-[0.03] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "blur(16px)", scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl relative z-20"
      >
        <h2 className="text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold font-display tracking-tight text-white mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-lg">
          Ready to scale your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-brand-gold drop-shadow-[0_0_30px_rgba(231,200,90,0.3)]">operational intelligence?</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/50 font-medium mb-10 md:mb-12 max-w-2xl mx-auto px-4">
          Join leading enterprises building autonomous workflows and resilient infrastructure with VerroAI. 
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
          <Link href="/demo" className="flex items-center justify-center gap-2 bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] px-8 py-4 md:px-10 md:py-5 rounded-full font-bold w-full sm:w-auto hover:bg-white/90 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] active:scale-95 text-[15px] sm:text-lg group">
            Start Building
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/demo" className="flex items-center justify-center gap-2 bg-white/5 border-[1.5px] border-white/10 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold w-full sm:w-auto hover:bg-white/10 hover:border-white/20 transition-all text-[15px] sm:text-lg shadow-sm backdrop-blur-md">
            Talk to Sales
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
