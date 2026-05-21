'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Database, Network, Cpu, Lock, Workflow, GitMerge } from 'lucide-react';

const infraFeatures = [
  {
    title: "Managed Infrastructure",
    desc: "Deploy AI workflows without managing underlying compute or model endpoints.",
    icon: Network,
    delay: 0.1
  },
  {
    title: "Database Integrations",
    desc: "Securely connect to your existing data stores and APIs.",
    icon: Database,
    delay: 0.2
  },
  {
    title: "Secure Execution",
    desc: "Workflows run in isolated environments with explicit permissions and audit logs.",
    icon: Lock,
    delay: 0.3
  }
];

export function Infrastructure() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start px-2 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/80 text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase mb-6 shadow-[-4px_4px_15px_rgba(0,0,0,0.5)]"
            >
              <Cpu className="w-3 h-3 text-brand-yellow" />
              Platform Infrastructure
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[40px] leading-[1.05] sm:text-5xl lg:text-[56px] font-extrabold font-display tracking-tight text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Built for reliability and control.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-white/60 font-medium mb-10 md:mb-12 max-w-lg leading-relaxed"
            >
              VerroAI provides a secure environment to run AI workflows. We focus on low latency, strict data passing, and clear monitoring so you can confidently deploy AI into your business processes.
            </motion.p>
            
            <div className="flex flex-col gap-6 md:gap-8 w-full max-w-lg">
              {infraFeatures.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 + item.delay, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 md:gap-5 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.5)] group-hover:border-brand-yellow/30 group-hover:bg-white/10 transition-all duration-300">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white/80 group-hover:text-brand-yellow transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[15px] md:text-base font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors drop-shadow-sm">{item.title}</h4>
                    <p className="text-[13px] md:text-sm font-medium text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)", y: 30 }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-square bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] rounded-[24px] md:rounded-[32px] overflow-hidden p-6 md:p-8 flex flex-col justify-between group hover:border-white/20 transition-all backdrop-blur-sm"
            >
              {/* Graphic Mockup */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-white text-lg md:text-xl tracking-tight mb-2">System Architecture</h3>
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">
                  <span className="w-2h h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> 
                  System Healthy
                </div>
              </div>
              
              <div className="relative z-10 w-full flex-grow mt-6 flex justify-center items-center">
                {/* Simulated Nodes Graphic */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                  <div className="relative w-full max-w-[240px] md:max-w-sm aspect-square border border-white/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                    <div className="absolute w-[120%] h-[120%] border border-white/5 border-dashed rounded-full animate-[spin_80s_reverse_linear_infinite]"></div>
                    <div className="absolute w-[80%] h-[80%] border border-white/10 rounded-full flex items-center justify-center">
                       <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-[14px] md:rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(231,200,90,0.3)] relative z-20 border border-brand-yellow/30">
                         <Cpu className="w-6 h-6 md:w-8 md:h-8 text-brand-yellow" />
                         <div className="absolute inset-0 bg-brand-yellow blur-2xl opacity-40 -z-10 rounded-full"></div>
                       </div>
                    </div>
                    {/* Node Dots */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black border border-white/20 rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.6)] flex items-center justify-center"><Workflow className="w-3 h-3 md:w-4 md:h-4 text-white/80"/></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)] flex items-center justify-center rounded-[10px]"><Database className="w-3 h-3 md:w-4 md:h-4 text-white/80"/></div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)] flex items-center justify-center rounded-[10px]"><GitMerge className="w-3 h-3 md:w-4 md:h-4 text-white/80"/></div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)] flex items-center justify-center rounded-[10px]"><Network className="w-3 h-3 md:w-4 md:h-4 text-white/80"/></div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex border-t border-white/10 pt-4 md:pt-6 mt-4 justify-between items-center text-xs md:text-sm font-semibold text-white/50 bg-black/20 p-4 rounded-xl backdrop-blur-md">
                 <div>Tasks Processed: <span className="text-white font-black font-mono">1.2M+</span></div>
                 <div><span className="text-brand-yellow font-black font-mono drop-shadow-[0_0_5px_rgba(231,200,90,0.5)]">99.9%</span> SLA</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
