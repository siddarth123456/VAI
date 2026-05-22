'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { NAV_ITEMS } from '@/constants/navigation';
import { NavLink } from './nav-link';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full px-4 pt-6 pointer-events-none"
      >
        <nav 
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1440px] rounded-full px-6 py-3 md:py-3.5 transition-all duration-300 relative overflow-hidden isolate ${
            scrolled 
              ? 'bg-white/80 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]' 
              : 'bg-white/70 backdrop-blur-lg border border-white/10 shadow-sm'
          }`}
          aria-label="Main Navigation"
        >
          <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none -z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-md">
            <span className="w-6 h-6 rounded bg-gradient-to-br from-brand-yellow to-brand-amber flex items-center justify-center text-white text-[10px] font-black shadow-sm group-hover:scale-105 transition-transform duration-300">✦</span>
            <span className="text-[#111111] font-bold font-display text-[30px] tracking-tight leading-none mt-1">VerroAI</span>
          </Link>
          
          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <NavLink
                  key={item.name}
                  href={item.href}
                  name={item.name}
                  isActive={isActive}
                />
              );
            })}
          </div>
          
          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/book-demo" 
              className="group flex items-center gap-2 bg-[#111111] text-white text-[13px] font-mono font-bold px-5 py-2 md:py-2.5 rounded-full hover:bg-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Book Demo
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden text-black/80 p-2 -mr-2 outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-md hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
