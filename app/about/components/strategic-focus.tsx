
'use client';

import { Activity, Server, Layers } from 'lucide-react';

export function StrategicFocus() {
  return (
    <section className="max-w-6xl mx-auto mb-32 px-6 sm:px-12 lg:px-16">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-brand-gold uppercase tracking-widest font-bold text-[11px] mb-4 block font-mono">Architecture</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white mb-6 tracking-tight">Strategic Focus</h2>
        <p className="text-white/50 font-mono text-[15px] max-w-2xl mx-auto leading-relaxed">The pillars of our architectural approach. Designed for enterprise scale with startup agility.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {[
          { icon: Activity, title: "Telemetry & Logs", desc: "Detailed execution tracing for AI requests, responses, and token costs." },
          { icon: Server, title: "Infrastructure", desc: "Scalable VPC deployments designed for high-concurrency model routing." },
          { icon: Layers, title: "Workflow State", desc: "Managed state transitions for multi-step autonomous agent operations." }
        ].map((focus, i) => (
          <div 
            key={i} 
            className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 sm:p-10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <focus.icon className="w-5 h-5 text-white/80" />
            </div>
            <h3 className="text-lg font-display font-medium text-white mb-3 tracking-tight">{focus.title}</h3>
            <p className="text-white/50 text-[14px] font-mono leading-relaxed">{focus.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
