'use client';

import React from 'react';
import { motion } from 'motion/react';

const companies = [
  "Acme Corp", "ClearScale", "Nexus Operations", "Globex", "Initech", "Vantage"
];

export function Credibility() {
  return (
    <section className="py-10 md:py-12 border-t border-b border-white/5 bg-transparent relative z-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <p className="text-center text-xs md:text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-6 md:mb-8 px-4">
          Trusted by engineering teams building modern workflows
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-20 opacity-60 px-4">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] md:text-2xl font-black font-display tracking-tighter text-white flex items-center gap-1.5 md:gap-2 hover:opacity-100 transition-opacity"
            >
              <div className="w-4 h-4 md:w-6 md:h-6 rounded md:rounded-md bg-white/10 flex items-center justify-center">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-white/80 rounded-sm" />
              </div>
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
