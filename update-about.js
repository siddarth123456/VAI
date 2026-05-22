const fs = require('fs');

const content = `
'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Compass, BarChart3, Workflow, LayoutDashboard, ShieldCheck, Zap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF9] text-gray-900 selection:bg-brand-yellow selection:text-black">
      <Navbar />

      <div className="flex-grow pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
        
        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold tracking-[0.1em] uppercase mb-8"
          >
            <Compass className="w-3.5 h-3.5" />
            Our Mission
          </motion.div>
          
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display tracking-tight text-[#111111] mb-8 leading-[1.05]"
          >
            AI Operational Intelligence <br className="hidden md:block" />
            for <span className="text-gray-400">Modern Startups.</span>
          </motion.h1>
          
          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-600 font-mono leading-relaxed max-w-2xl mx-auto"
          >
            We build the visibility, control, and automation infrastructure that technical founders need to scale AI systems predictably.
          </motion.p>
        </div>

        {/* CORE PHILOSOPHY */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24 md:mb-40 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight mb-6 leading-tight">Deterministic execution in a probabilistic world.</h2>
            <p className="text-gray-600 font-medium mb-6 leading-relaxed">
              Startups leveraging AI often encounter the same structural roadblock: moving from engineered demos to reliable, production-grade automated systems. 
            </p>
            <p className="text-gray-500 font-mono text-sm leading-relaxed">
              We started VerroAI because we saw engineering teams wasting cycles building bespoke logging, routing, and schema-validation wrappers just to make LLMs behave predictably. Our core thesis is simple: AI operations should be as observable and structured as traditional software operations.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.02)] relative overflow-hidden h-full flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Operational Visibility</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">Trace every token, latency spike, and schema validation error in real-time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl border border-amber-100 bg-amber-50 flex items-center justify-center shrink-0">
                  <Workflow className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Workflow Automation</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">Model-agnostic task sequencing with strict error boundaries and fallbacks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0">
                  <LayoutDashboard className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Executive Decision Support</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">Metrics that matter. ROI analysis on automated operations natively built-in.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STARTUP DNA SECTION */}
        <div className="max-w-6xl mx-auto text-center mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold font-display tracking-tight mb-6"
          >
            Engineered for velocity.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 font-mono max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            We are operators building for operators. Our architecture reflects the agility required by high-growth environments without sacrificing enterprise-grade stability.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.15 }}
               className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <Zap className="w-6 h-6 text-amber-500 mb-4 relative z-10" />
              <h3 className="font-bold text-gray-900 text-lg mb-2 relative z-10">Startup Realistic</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed relative z-10">
                No complex enterprise bloat. Drop VerroAI into your existing stack and get operational insight within minutes, not months.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.25 }}
               className="p-8 bg-black rounded-2xl shadow-sm transition-transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")\` }}></div>
              <ShieldCheck className="w-6 h-6 text-white mb-4 relative z-10" />
              <h3 className="font-bold text-white text-lg mb-2 relative z-10">Technically Credible</h3>
              <p className="text-sm text-white/50 font-medium leading-relaxed relative z-10">
                Built on robust, scalable primitives. We handle the concurrency mapping and webhook orchestration silently in the background.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.35 }}
               className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1"
            >
              <LayoutDashboard className="w-6 h-6 text-gray-700 mb-4" />
              <h3 className="font-bold text-gray-900 text-lg mb-2">Premium Experience</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Developer tools shouldn&apos;t look like spreadsheets. We believe exceptional design drives exceptional usage and better structural decisions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* INVESTOR / PARTNER METRICS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gray-50/50 border border-gray-200 p-8 md:p-12 rounded-3xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200"
        >
          <div className="pt-4 sm:pt-0">
            <div className="text-4xl md:text-5xl font-extrabold text-black font-mono mb-2">99.99%</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold">Target SLA</div>
          </div>
          <div className="pt-8 sm:pt-0">
            <div className="text-4xl md:text-5xl font-extrabold text-black font-mono mb-2">SOC 2</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold">Compliance Status</div>
          </div>
          <div className="pt-8 sm:pt-0">
            <div className="text-4xl md:text-5xl font-extrabold text-amber-600 font-mono mb-2">24/7</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold">System Telemetry</div>
          </div>
        </motion.div>

      </div>

      <div className="bg-[#050505] selection:bg-brand-yellow selection:text-black">
        <Footer />
      </div>
    </main>
  );
}
`;

fs.writeFileSync('app/about/page.tsx', content);
