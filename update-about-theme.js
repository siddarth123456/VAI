const fs = require('fs');

fs.writeFileSync('app/about/components/mission-vision.tsx', `
'use client';

import { Target, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function MissionVision() {
  return (
    <section className="max-w-6xl mx-auto mb-32 px-6 sm:px-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-gray-200 rounded-3xl p-10 md:p-12 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8">
            <Target className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 tracking-tight">Our Mission</h3>
          <p className="text-gray-600 font-mono leading-relaxed text-[15px]">
            To equip startups with the operational tooling required to build, observe, and trust autonomous software systems.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-amber-50/50 border border-amber-100 rounded-3xl p-10 md:p-12 hover:shadow-[0_8px_30px_rgba(251,191,36,0.1)] hover:border-amber-200 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center mb-8">
            <Eye className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-2xl font-display font-bold text-amber-900 mb-4 tracking-tight">Our Vision</h3>
          <p className="text-amber-800/80 font-mono leading-relaxed text-[15px]">
            A future where AI operations are as transparent, deterministic, and scalable as traditional compute infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
`);

fs.writeFileSync('app/about/components/operational-philosophy.tsx', `
'use client';

import { motion } from 'motion/react';

export function OperationalPhilosophy() {
  return (
    <section className="max-w-6xl mx-auto mb-32 px-6 sm:px-12 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 border border-gray-800 rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 text-white">
          <div>
            <span className="text-amber-500 uppercase tracking-widest font-bold text-[11px] mb-6 block font-mono">Core Philosophy</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
              Deterministic outcomes in probabilistic environments.
            </h2>
            <p className="text-gray-400 font-mono text-[15px] leading-relaxed mb-8">
              We believe that enterprise reliability doesn't have to mean enterprise bloat. Startups need speed, but not at the cost of operational integrity.
            </p>
            <ul className="space-y-5">
              {[
                "Visibility precedes control.",
                "Code is the ultimate source of truth.",
                "Failures should be loud, handled, and logged."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[15px] text-gray-300 font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between text-xs font-mono mb-3">
                  <span className="text-gray-400 uppercase tracking-wider font-bold">Execution Confidence</span>
                  <span className="text-emerald-400 font-bold">99.9%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-emerald-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                  </motion.div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-mono mb-3">
                  <span className="text-gray-400 uppercase tracking-wider font-bold">System Latency (p95)</span>
                  <span className="text-amber-400 font-bold">120ms</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="h-full bg-amber-400 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                  </motion.div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-500 uppercase tracking-wider font-bold">Status</span>
                  <span className="text-gray-300 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
`);

fs.writeFileSync('app/about/components/strategic-focus.tsx', `
'use client';

import { Activity, Server, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function StrategicFocus() {
  return (
    <section className="max-w-6xl mx-auto mb-32 px-6 sm:px-12 lg:px-16">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-amber-600 uppercase tracking-widest font-bold text-[11px] mb-4 block font-mono">Architecture</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">Strategic Focus</h2>
        <p className="text-gray-500 font-mono text-[15px] max-w-2xl mx-auto leading-relaxed">The pillars of our architectural approach. Designed for enterprise scale with startup agility.</p>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {[
          { icon: Activity, title: "Telemetry & Logs", desc: "Detailed execution tracing for AI requests, responses, and token costs." },
          { icon: Server, title: "Infrastructure", desc: "Scalable VPC deployments designed for high-concurrency model routing." },
          { icon: Layers, title: "Workflow State", desc: "Managed state transitions for multi-step autonomous agent operations." }
        ].map((focus, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
              <focus.icon className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="text-lg font-display font-bold text-gray-900 mb-3 tracking-tight">{focus.title}</h3>
            <p className="text-gray-500 text-[14px] font-mono leading-relaxed">{focus.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
`);

fs.writeFileSync('app/about/components/about-cta.tsx', `
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutCTA() {
  return (
    <section className="w-full pt-12">
      <div className="border-t border-gray-200 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 py-24 sm:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 uppercase tracking-widest font-bold text-[11px] mb-6 block font-mono">Next Steps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tight">Partner with VerroAI</h2>
            <p className="text-gray-500 font-mono text-[15px] sm:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
              Bring operational intelligence to your AI-native software. Let's discuss your infrastructure requirements and deployment goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/demo" 
                className="px-8 py-4 bg-gray-900 text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-lg shadow-gray-900/20"
              >
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-gray-900 font-bold text-sm rounded-full hover:bg-gray-50 border border-gray-200 transition-colors w-full sm:w-auto text-center"
              >
                Contact Team
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-50 rounded-full blur-[100px] -z-10 pointer-events-none translate-y-1/2" />
      </div>
    </section>
  );
}
`);
