'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full px-4 pt-6"
      >
        <div className="flex items-center justify-between w-full max-w-7xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-4 md:px-6 py-3 md:py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-sm bg-gradient-to-br from-brand-yellow to-brand-gold flex items-center justify-center text-black text-sm font-black shadow-sm">✦</span>
            <span className="text-white font-bold font-display text-xl tracking-tight">VerroAI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-white/60">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[15px] font-medium text-white/60 hover:text-white transition-colors">Sign In</a>
            <button className="bg-white text-black text-[15px] font-bold px-5 py-2.5 rounded-full hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all shadow-md">
              Book Demo
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/80 md:hidden pt-32 px-6 flex flex-col border-t border-white/10"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold font-display tracking-tight text-white">
              <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} href="#" className="hover:text-brand-gold transition-colors block border-b border-white/5 pb-4">Platform</motion.a>
              <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} href="#" className="hover:text-brand-gold transition-colors block border-b border-white/5 pb-4">Architecture</motion.a>
              <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} href="#" className="hover:text-brand-gold transition-colors block border-b border-white/5 pb-4">Solutions</motion.a>
              <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} href="#" className="hover:text-brand-gold transition-colors block border-b border-white/5 pb-4">Company</motion.a>
            </div>
            <div className="mt-auto pb-12 flex flex-col gap-4">
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} href="#" className="text-center font-bold text-white/60 py-4">Sign In</motion.a>
              <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="w-full bg-white text-black font-bold py-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] text-lg">
                Book Executive Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
