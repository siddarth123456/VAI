'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Box, Zap, Share2 } from 'lucide-react';

const steps = [
  {
    icon: Box,
    title: "Connect Data",
    desc: "Ingest from APIs, databases, or webhook events natively."
  },
  {
    icon: Zap,
    title: "Process with AI",
    desc: "Use language models to extract, format, and reason about your data."
  },
  {
    icon: Share2,
    title: "Execute Actions",
    desc: "Push processed data back into your operational tools securely."
  }
];

export function WorkflowEcosystem() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center px-4 sm:px-0">
        
        <div className="text-center max-w-3xl mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] leading-[1.05] md:text-5xl lg:text-[56px] font-extrabold font-display tracking-tight text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            A clear path from event to action.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-white/50 font-medium"
          >
            Go from incoming data to automated action. No complex setup, just straightforward, reliable automated workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-[1440px] relative z-20">
          {/* Connector Line (Background) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] border-t-[3px] border-white/5 border-dashed -z-10"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
              className="flex flex-col items-center text-center relative group cursor-default"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 border border-white/10 rounded-[20px] md:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-center mb-6 md:mb-8 relative group-hover:border-white/20 group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] group-hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                 <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white/80 group-hover:text-brand-yellow group-hover:scale-110 transition-all duration-500 ease-out" />
                 {i !== steps.length -1 && (
                   <div className="hidden md:block absolute -right-[40%] top-1/2 -translate-y-1/2 w-8 transform text-brand-gold opacity-50 group-hover:translate-x-2 transition-transform duration-300">
                     <ArrowRight className="w-8 h-8" />
                   </div>
                 )}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 drop-shadow-sm">{step.title}</h3>
              <p className="text-white/50 font-medium text-sm md:text-sm max-w-[250px] leading-relaxed group-hover:text-white/70 transition-colors">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
