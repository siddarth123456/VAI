'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, Activity, Hexagon, Component } from 'lucide-react';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

const principles = [
  {
    icon: Component,
    title: "Systems over Chaos",
    desc: "We build structured workflows, not fragile scripts. Scalable operations demand unified, observable systems that actively minimize friction."
  },
  {
    icon: Activity,
    title: "Execution Visibility",
    desc: "You cannot optimize what you cannot see. We prioritize deep observability and transparent state management across every automated routine."
  },
  {
    icon: Hexagon,
    title: "Pragmatic Architecture",
    desc: "Infrastructure over magic. We design deterministic, verifiable intelligent systems that prioritize reliability over hype."
  },
  {
    icon: Search,
    title: "Clarity over Complexity",
    desc: "Operational software must be instantly legible. We aggressively reduce cognitive load through precise interfaces and clean abstraction layers."
  }
];

export function OperationalPrinciples() {
  return (
    <div className="mb-24 sm:mb-32">
      <motion.div 
        custom={7}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-16 border-b border-white/5 pb-4"
      >
        <h4 className="font-mono text-xs uppercase tracking-wider text-brand-gold">Operational Principles</h4>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {principles.map((p, i) => (
          <motion.div 
            key={i} 
            custom={8 + i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 hover:border-brand-yellow/20 hover:bg-white/10 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-brand-yellow group-hover:text-brand-gold group-hover:bg-brand-yellow/10 transition-all duration-300">
              <p.icon className="w-5 h-5 outline-none" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold font-display text-white text-xl mb-4 tracking-tight">{p.title}</h3>
            <p className="text-[15px] font-medium text-white/60 leading-relaxed max-w-sm font-mono">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
