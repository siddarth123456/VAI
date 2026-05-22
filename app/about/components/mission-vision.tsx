
'use client';

import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="max-w-6xl mx-auto mb-32 px-6 sm:px-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-12 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-12">
            <Target className="w-5 h-5 text-white/80" />
          </div>
          <h3 className="text-xl font-display font-medium text-white mb-4 tracking-tight">Our Mission</h3>
          <p className="text-white/60 font-mono leading-[1.8] text-[14px]">
            To equip startups with the operational tooling required to build, observe, and trust autonomous software systems.
          </p>
        </div>
        
        <div className="bg-brand-yellow/5 border border-brand-yellow/10 rounded-3xl p-10 md:p-12 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 border border-brand-yellow/20 flex items-center justify-center mb-12">
            <Eye className="w-5 h-5 text-brand-gold" />
          </div>
          <h3 className="text-xl font-display font-medium text-brand-gold mb-4 tracking-tight">Our Vision</h3>
          <p className="text-brand-gold/80 font-mono leading-[1.8] text-[14px]">
            A future where AI operations are as transparent, deterministic, and scalable as traditional compute infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
