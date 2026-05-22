
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutCTA() {
  return (
    <section className="w-full pt-12">
      <div className="border-t border-white/10 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 py-24 sm:py-32 relative z-10">
          <span className="text-brand-gold uppercase tracking-widest font-bold text-[11px] mb-12 block font-mono">Next Steps</span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium text-white mb-12 tracking-tight">Partner with VerroAI</h2>
          <p className="text-white/50 font-mono text-[16px] sm:text-[17px] mb-12 max-w-2xl mx-auto leading-[1.8]">
            Bring operational intelligence to your AI-native software. Let&apos;s discuss your infrastructure requirements and deployment goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo" 
              className="px-8 py-4 bg-[#0A0A0A] text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2 "
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-yellow/10 rounded-full blur-[100px] -z-10 pointer-events-none translate-y-1/2" />
      </div>
    </section>
  );
}
