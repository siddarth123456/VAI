'use client';

import { motion } from 'motion/react';
import { Compass, Sparkles } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export function AboutHero() {
  return (
    <div className="relative w-full max-w-5xl mx-auto text-center mb-32 md:mb-48 pt-10 md:pt-20">
      {/* Background gradients for the cinematic cream feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-yellow/10 via-[#0A0A0A]/20 to-transparent blur-3xl -z-10 pointer-events-none" />
      
      <motion.div 
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0A] border border-white/10 shadow-none text-white/50 text-[11px] font-bold tracking-[0.15em] uppercase mb-12"
      >
        <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">Our Genesis</span>
      </motion.div>
      
      <motion.h1 
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-[44px] leading-[1.1] sm:text-6xl lg:text-[76px] font-medium font-display tracking-tight text-white mb-12"
      >
        AI Operational Intelligence <br className="hidden md:block" />
        for <span className="text-white/40">Modern Startups.</span>
      </motion.h1>
      
      <motion.p 
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-lg sm:text-xl text-white/50 font-mono leading-[1.8] max-w-2xl mx-auto mb-16"
      >
        We build the visibility, control, and automation infrastructure that technical founders need to scale AI systems predictably.
      </motion.p>

      {/* Trust / metrics indicators subtly placed */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-20 pt-10 border-t border-white/10 max-w-3xl mx-auto"
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-extrabold font-mono text-white mb-1.5 tracking-tight">99.99%</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 font-bold">Target Uptime</span>
        </div>
        <div className="hidden sm:block w-px h-12 bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-extrabold font-mono text-white mb-1.5 tracking-tight">SOC 2</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 font-bold">Compliance Tier</span>
        </div>
        <div className="hidden sm:block w-px h-12 bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-extrabold font-mono text-white mb-1.5 tracking-tight">&lt;50ms</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 font-bold">Execution Latency</span>
        </div>
      </motion.div>
    </div>
  );
}
