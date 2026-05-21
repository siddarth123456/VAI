'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Cpu, Workflow, Layers, ShieldCheck, Activity, Eye, Compass, Heart, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full px-4 pt-6"
      >
        <div className="flex items-center justify-between w-full max-w-7xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-6 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-sm bg-gradient-to-br from-brand-yellow to-brand-gold flex items-center justify-center text-black text-sm font-black shadow-sm group-hover:scale-105 transition-transform">✦</span>
            <span className="text-white font-bold font-display text-xl tracking-tight">VerroAI</span>
          </Link>
          
          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-white/70 relative">
            
            {/* PLATFORM DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('platform')}
                className="flex items-center gap-1.5 hover:text-white transition-all cursor-pointer py-1"
              >
                Platform <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'platform' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'platform' && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 -translate-x-1/2 top-10 w-64 bg-black/95 border border-white/10 p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl z-20"
                    >
                      <Link href="/platform" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left">
                        <Compass className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Platform Overview</div>
                          <div className="text-[10px] text-white/40 font-medium">Core infrastructure overview.</div>
                        </div>
                      </Link>
                      <Link href="/workflows" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left">
                        <Workflow className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">AI Workflows</div>
                          <div className="text-[10px] text-white/40 font-medium">Map your workflow execution.</div>
                        </div>
                      </Link>
                      <Link href="/automations" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left">
                        <Layers className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Automations</div>
                          <div className="text-[10px] text-white/40 font-medium">Workflow trigger blueprints.</div>
                        </div>
                      </Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* INTELLIGENCE DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('intelligence')}
                className="flex items-center gap-1.5 hover:text-white transition-all cursor-pointer py-1"
              >
                Intelligence <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'intelligence' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'intelligence' && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 -translate-x-1/2 top-10 w-64 bg-black/95 border border-white/10 p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl z-20"
                    >
                      <Link href="/analytics" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left">
                        <Activity className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Telemetry & Analytics</div>
                          <div className="text-[10px] text-white/40 font-medium">Monitor execution metrics.</div>
                        </div>
                      </Link>
                      <Link href="/ai-insights" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left">
                        <Eye className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Execution Insights</div>
                          <div className="text-[10px] text-white/40 font-medium">Trace logs and execution context.</div>
                        </div>
                      </Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* DIRECT LINKS */}
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/enterprise" className="hover:text-white transition-colors">Enterprise SLA</Link>

            {/* COMPANY DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('company')}
                className="flex items-center gap-1.5 hover:text-white transition-all cursor-pointer py-1"
              >
                Company <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute right-0 top-10 w-64 bg-black/95 border border-white/10 p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl z-20"
                    >
                      <Link href="/about" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left">
                        <Compass className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">About VerroAI</div>
                          <div className="text-[10px] text-white/40 font-medium">Mission, story, and ecosystem.</div>
                        </div>
                      </Link>
                      <Link href="/team" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left">
                        <Users className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white">Our Team</div>
                          <div className="text-[10px] text-white/40 font-medium font-sans">Founding architects and advisers.</div>
                        </div>
                      </Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="/demo" className="text-[14px] font-semibold text-white/75 hover:text-white transition-colors">Sign In</Link>
            <Link href="/demo" className="bg-white text-black text-[14px] font-bold px-5 py-2.5 rounded-full hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all shadow-md">
              Book a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer with robust list */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-45 bg-black/90 md:hidden pt-28 px-4 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-1 overflow-y-auto max-h-[70vh] px-2 py-4">
              <div className="text-[10px] font-black tracking-widest text-brand-gold uppercase mb-2">Systems Platform</div>
              <Link href="/platform" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5">Platform Overview</Link>
              <Link href="/workflows" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5">AI Workflows</Link>
              <Link href="/automations" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5">Automations</Link>
              
              <div className="text-[10px] font-black tracking-widest text-brand-gold uppercase mt-6 mb-2">Telemetry Intelligence</div>
              <Link href="/analytics" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5">System Analytics</Link>
              <Link href="/ai-insights" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5">Trace Insights</Link>
              
              <div className="text-[10px] font-black tracking-widest text-brand-gold uppercase mt-6 mb-2">Scale & Structure</div>
              <Link href="/enterprise" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5">Enterprise SLA</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5 font-display">About VerroAI</Link>
              <Link href="/team" onClick={() => setIsOpen(false)} className="py-2.5 text-lg font-bold text-white hover:text-brand-yellow transition-all border-b border-white/5 font-display">Our Team</Link>
            </div>
            
            <div className="p-4 bg-white/[0.02] border-t border-white/10 flex flex-col gap-3 pb-8">
              <Link href="/demo" onClick={() => setIsOpen(false)} className="text-center font-bold text-white/50 hover:text-white py-3 text-sm">Sign In</Link>
              <Link href="/demo" onClick={() => setIsOpen(false)} className="w-full text-center bg-white text-black font-bold py-3.5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] text-sm">
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
