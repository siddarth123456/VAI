
'use client';

import { motion } from 'motion/react';
import { Activity, Shield, Zap } from 'lucide-react';

export function OperationalPhilosophy() {
  return (
    <section className="max-w-6xl mx-auto mb-32 px-6 sm:px-12 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden "
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/100/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 text-white">
          <div>
            <span className="text-brand-yellow uppercase tracking-widest font-bold text-[11px] mb-6 block font-mono">Core Philosophy</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-6 leading-[1.1] tracking-tight">
              Deterministic outcomes in probabilistic environments.
            </h2>
            <p className="text-white/40 font-mono text-[15px] leading-relaxed mb-8">
              We believe that enterprise reliability doesn&apos;t have to mean enterprise bloat. Startups need speed, but not at the cost of operational integrity. Building with AI shouldn&apos;t feel like a black box.
            </p>
            <ul className="space-y-5">
              {[
                "Visibility precedes control.",
                "Code is the ultimate source of truth.",
                "Failures should be loud, handled, and logged."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[15px] text-white/30 font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0A0A0A]/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <Activity className="w-5 h-5 text-white/40 mb-6" />
              <div className="text-2xl font-display font-medium text-white mb-1">Total Observability</div>
              <p className="text-[13px] text-white/40 font-mono leading-relaxed">Full execution tracing across all agent workflows.</p>
            </div>
            <div className="bg-[#0A0A0A]/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <Zap className="w-5 h-5 text-brand-yellow mb-6" />
              <div className="text-2xl font-display font-medium text-white mb-1">State Managed</div>
              <p className="text-[13px] text-white/40 font-mono leading-relaxed">Persistent state transitions without external databases.</p>
            </div>
            <div className="bg-[#0A0A0A]/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md sm:col-span-2">
              <Shield className="w-5 h-5 text-emerald-400 mb-6" />
              <div className="text-2xl font-display font-medium text-white mb-1">Enterprise-Grade Security</div>
              <p className="text-[13px] text-white/40 font-mono leading-relaxed max-w-sm">SOC 2 compliant infrastructure with strict data isolation and zero-trust execution sandboxing.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
