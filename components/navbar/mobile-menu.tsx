'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';
import { NavLink } from './nav-link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-[320px] bg-[#050505] shadow-2xl flex flex-col border-l border-white/10"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-md" onClick={() => setIsOpen(false)}>
                <span className="w-6 h-6 rounded bg-gradient-to-br from-brand-yellow to-brand-amber flex items-center justify-center text-white text-[10px] font-black shadow-sm group-hover:scale-105 transition-transform duration-300">✦</span>
                <span className="text-white font-bold font-display text-[30px] tracking-tight leading-none mt-1">VerroAI</span>
              </Link>
              <button 
                className="text-white/80 p-2 -mr-2 outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                return (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    name={item.name}
                    isActive={isActive}
                    onClick={() => setIsOpen(false)}
                    isMobile={true}
                  />
                );
              })}
            </div>
            
            <div className="p-6 border-t border-white/5 bg-[#020202]">
              <Link 
                href="/book-demo" 
                onClick={() => setIsOpen(false)} 
                className="group flex items-center justify-center gap-2 w-full bg-brand-yellow text-black font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(231,200,90,0.2)] text-[15px] hover:bg-brand-ivory transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
              >
                Book Demo
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
