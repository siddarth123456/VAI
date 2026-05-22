'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function CompanyStory() {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0A] relative border border-white/10 rounded-3xl overflow-hidden mb-32 shadow-none">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Header Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold uppercase tracking-widest font-bold text-[11px] mb-4 block font-mono">The Genesis</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white mb-6 leading-[1.1] tracking-tight">
                Born from <br /> operational friction.
              </h2>
              <div className="w-12 h-1 bg-brand-yellow/100 rounded-full mb-8" />
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative mt-12 hidden lg:block">
                <Quote className="w-6 h-6 text-white/30 absolute top-4 left-4" />
                <p className="text-white/60 font-medium italic relative z-10 pt-4 pl-4 text-[15px] leading-relaxed">
                  &quot;Startups were treating AI as a feature, but building it like a science project. We needed to bring engineering discipline and operational rigors to language models.&quot;
                </p>
                <div className="mt-6 pl-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black/20 border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-white/50">V</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Founding Team</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-[14px] sm:text-[15px] text-white/60 font-mono leading-relaxed relative"
            >
              <p>
                <strong className="text-white font-sans text-base sm:text-lg font-bold block mb-1">The Prototype Illusion.</strong> 
                As AI capabilities accelerated, we noticed a recurring pattern among high-velocity startups: the leap from an impressive demo to a reliable production system was fraught with operational blind spots.
              </p>
              
              <p>
                Teams were patching together disparate tools to manage prompt drift, monitor unpredictable latency spikes, and standardize chaotic JSON outputs. Innovation was bottlenecked by brittle, unscalable infrastructure. Engineers were spending massive amounts of time building bespoke logging layers just to make LLMs behave predictably.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-white/10 my-8">
                <div className="border-l-2 border-white/10 pl-4">
                  <h4 className="text-white font-sans font-bold mb-1">Brittle Abstractions</h4>
                  <p className="text-xs leading-relaxed">Relying on generic wrappers that hide the ground-truth token metrics and execution behaviors.</p>
                </div>
                <div className="border-l-2 border-amber-400 pl-4">
                  <h4 className="text-white font-sans font-bold mb-1">The Visibility Gap</h4>
                  <p className="text-xs leading-relaxed">Deploying models into production without structural logging, tracing, or latency monitoring.</p>
                </div>
              </div>

              <p>
                <strong className="text-white font-sans text-base sm:text-lg font-bold block mb-1">A New Primitive.</strong> 
                We realized that to treat AI as a core operational driver, startups needed more than just an API key wrapper. They needed a new primitive—an intelligence layer that prioritizes reliability, visibility, and structured control over hype. That&apos;s why we built VerroAI.
              </p>

              {/* Mobile Quote Version */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative mt-8 lg:hidden block">
                <Quote className="w-5 h-5 text-white/30 absolute top-4 left-4" />
                <p className="text-white/60 font-medium italic relative z-10 pt-2 pl-4 text-sm leading-relaxed">
                  &quot;Startups were treating AI as a feature, but building it like a science project. We needed to bring engineering discipline and operational rigors to language models.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
