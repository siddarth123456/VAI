'use client';

import React from 'react';
import { motion } from 'motion/react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export function WhyVerro() {
  return (
    <div className="mb-24 sm:mb-32">
      <div className="h-px w-full bg-white/10 rounded-full mb-24 sm:mb-32"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <motion.div 
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white sticky top-32">
            Why VerroAI<br />Exists
          </h2>
        </motion.div>

        <motion.div 
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-8 space-y-12"
        >
          <div>
            <h3 className="text-xs font-bold font-mono text-brand-gold uppercase tracking-wider mb-4 border-b border-white/5 pb-4">Operational Fragmentation</h3>
            <p className="text-lg sm:text-xl text-white/70 font-medium leading-relaxed font-mono">
              As companies scale, execution speed degrades. Workflows fracture across dozens of disjointed tools. Teams spend more time managing software boundaries and connecting data silos than executing core tasks.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold font-mono text-brand-gold uppercase tracking-wider mb-4 border-b border-white/5 pb-4">Loss of State Visibility</h3>
            <p className="text-lg sm:text-xl text-white/70 font-medium leading-relaxed font-mono">
              When a process spans multiple disconnected platforms, global visibility is lost. Tracking the true state of cross-functional workflows devolves into a manual abstraction layer, managed by humans instead of software.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold font-mono text-brand-gold uppercase tracking-wider mb-4 border-b border-white/5 pb-4">The AI Integration Gap</h3>
            <p className="text-lg sm:text-xl text-white/70 font-medium leading-relaxed font-mono">
              Most AI tools operate as isolated cognitive utilities, generating text in a vacuum. VerroAI exists to bridge this gap, acting as deeply integrated infrastructure that observes operational state and programmatically advances workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
