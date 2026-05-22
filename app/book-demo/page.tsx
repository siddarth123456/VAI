'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle, User, Mail, Calendar, Building, BrainCircuit, ChevronRight, Check } from 'lucide-react';

export default function BookDemoPage() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [demoDate, setDemoDate] = useState('');
  const [demoTime, setDemoTime] = useState('14:00');
  const [apiUnits, setApiUnits] = useState('Under 10M Actions');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userCompany || !demoDate) return;
    setSubmitted(true);
  };

  return (
    <main id="book-demo-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative bg-[#020202]">
      {/* Background Ornaments */}
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-spin" />
            Vetted Corporate Sandbox Demonstration
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Schedule an Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Pilot Integration.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Book a dedicated 30-minute workspace review with a Staff Engineer to map custom database schemas, sandbox configurations, and verify SOC2 audit requirements.
          </p>
        </div>

        {/* Content Section Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch mb-20">
          
          {/* Calendar Select Panel */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between text-left">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-brand-yellow" />
                      Select Scheduler Parameters
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Full Name</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Alex Mercer"
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Corporate Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Corporate Email</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            placeholder="a.mercer@company.com"
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Enterprise Name</label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            value={userCompany}
                            onChange={(e) => setUserCompany(e.target.value)}
                            placeholder="Global logistics Systems"
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* API usage */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Estimated Monthly Load</label>
                        <select
                          value={apiUnits}
                          onChange={(e) => setApiUnits(e.target.value)}
                          className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-xs font-semibold text-white/70 focus:outline-none cursor-pointer"
                        >
                          <option value="Under 10M Actions">Under 10M Actions/mo</option>
                          <option value="10M - 100M Actions">10M - 100M Actions/mo</option>
                          <option value="100M+ Actions">100M+ Hyperscale Actions</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-4 mt-2">
                      {/* Date */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Target Demo Date</label>
                        <input
                          type="date"
                          required
                          value={demoDate}
                          onChange={(e) => setDemoDate(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-xs font-mono font-semibold text-white focus:outline-none cursor-pointer"
                        />
                      </div>

                      {/* Time */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Preferred Time (UTC)</label>
                        <input
                          type="time"
                          required
                          value={demoTime}
                          onChange={(e) => setDemoTime(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-xs font-mono font-semibold text-white focus:outline-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-white/95 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm mt-8 shadow-lg"
                  >
                    Confirm & Reserve Slot
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="feedback"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl text-white tracking-tight mb-2">Booking Success</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-semibold max-w-sm mb-6">
                    We have successfully locked your session. An executive representative will send details for: <strong className="text-white">{demoDate} at {demoTime} UTC</strong>.
                  </p>
                  
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-left w-full space-y-2 max-w-sm font-mono text-xs">
                    <p className="text-white/45">&gt; Registrant: <span className="text-white font-bold">{userName}</span></p>
                    <p className="text-white/45">&gt; Organization: <span className="text-white font-bold">{userCompany}</span></p>
                    <p className="text-white/45">&gt; Queue Load: <span className="text-brand-yellow font-bold">{apiUnits}</span></p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Vetting checklist checklist details card */}
          <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-bold font-mono text-brand-gold uppercase tracking-[0.15em] block mb-2">SLA Inclusion Standards</span>
              <h4 className="text-white font-bold text-lg mb-6">Demonstration Deliverables</h4>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Architecture Map Blueprint",
                    desc: "Co-founders will sketch your specific REST mapping or message queue pipelines live on the canvas."
                  },
                  {
                    title: "Live Cost & Throughput Models",
                    desc: "Interactive analysis of Llama, Gemma, and Gemini inference pricing with latency guarantees."
                  },
                  {
                    title: "SOC2 Compliance Verification",
                    desc: "Verify localized container models, in-memory isolation, sandboxing rules, and secure audit directories."
                  }
                ].map((del, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-xs sm:text-sm">{del.title}</h5>
                      <p className="text-xs text-white/40 leading-normal font-semibold mt-1">{del.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-12 flex justify-between items-center text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">
              <span>Powered by</span>
              <span className="text-white/60">Google</span>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
