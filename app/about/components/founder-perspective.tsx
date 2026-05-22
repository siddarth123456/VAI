'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function FounderPerspective() {
  return (
    <section className="py-24 sm:py-32 mb-32 relative">
      <div className="absolute inset-x-0 inset-y-12 bg-[#0A0A0A]/5 border-y border-white/10 rounded-[3rem] -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Quote Section */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="w-10 h-10 text-brand-yellow mb-12" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white mb-12 leading-[1.3] tracking-tight">
                &quot;We aren&apos;t building just another wrapper. We&apos;re building the infrastructure that the next generation of SaaS companies will rely on. Our goal is to make AI systems <span className="text-brand-gold block sm:inline">boring, predictable, and exceptionally reliable.</span>&quot;
              </h2>
              
              <div className="flex items-center justify-between sm:justify-start gap-12 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center  relative overflow-hidden">
                    <span className="text-white/60 font-bold font-mono text-sm">VF</span>
                    <div className="absolute inset-0 bg-[#0A0A0A]/20 mix-blend-overlay opacity-20"></div>
                  </div>
                  <div>
                    <div className="font-bold text-white tracking-tight text-[15px]">The Founders</div>
                    <div className="text-[13px] font-mono text-white/50 mt-0.5">VerroAI Core Team</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision/Future Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-none relative overflow-hidden hover:shadow-none transition-shadow duration-500"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="font-bold text-white font-display text-xl mb-4 relative z-10 flex items-center gap-3">
                Long-term Vision
              </h3>
              <p className="text-[15px] text-white/50 leading-[1.8] font-mono mb-12 relative z-10">
                Language models will commoditize, but operational execution will remain a defensible moat. We are building for absolute scale and reliability.
              </p>
              
              <div className="space-y-8 relative z-10">
                {[
                  "Orchestrating multi-agent state machines.",
                  "Zero-trust execution sandboxing.",
                  "Rigid CI/CD deployment pipelines."
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    key={i} 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-200 group-hover:bg-brand-yellow mt-2 shrink-0 transition-colors duration-300" />
                    <p className="text-[13px] text-white/60 font-medium leading-[1.8] group-hover:text-white transition-colors duration-300">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 font-mono">Platform Vector</span>
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-brand-gold font-mono">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow/100 animate-pulse" /> Active Path
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
