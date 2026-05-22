'use client';

import { Eye, Rocket, CheckCircle2, Network } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    num: "01",
    title: "Operational Clarity",
    desc: "Visibility over black boxes. Every token, transition, and latency spike must be traceable. We don't believe in magic; we believe in telemetry."
  },
  {
    icon: Rocket,
    num: "02",
    title: "Startup Realism",
    desc: "Built for velocity. Drop in our infrastructure without enterprise bloat and get intelligence running in production within minutes."
  },
  {
    icon: CheckCircle2,
    num: "03",
    title: "Execution Focus",
    desc: "Deterministic outcomes in a probabilistic world. Strict schema adherence, explicit fallback boundaries, and silent error recovery."
  },
  {
    icon: Network,
    num: "04",
    title: "Intelligent Systems",
    desc: "Moving beyond basic text generation. We design for multi-agent workflows, scalable routing, and long-running autonomous tasks."
  }
];

export function OperatingPrinciples() {
  return (
    <section className="py-24 sm:py-32 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="mb-16 md:mb-24 md:flex md:items-end justify-between">
          <div className="max-w-2xl">
            <span className="text-brand-gold uppercase tracking-widest font-bold text-[11px] mb-4 block font-mono">Our DNA</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-12 leading-tight tracking-tight">
              Engineering <br className="hidden sm:block" /> first principles.
            </h2>
          </div>
          <p className="text-[15px] md:text-[17px] text-white/50 font-mono leading-[1.8] max-w-sm mt-6 md:mt-0">
            The core tenets driving our platform-centric architecture and product philosophy. We build what we would want to operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 sm:p-10 transition-all duration-500 overflow-hidden hover:border-white/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/3" />
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 transition-colors duration-500">
                  <principle.icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-white/30 font-bold text-lg">{principle.num}</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-medium font-display text-white mb-3 tracking-tight">{principle.title}</h3>
                <p className="text-[14px] leading-[1.8] text-white/50 font-medium">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
