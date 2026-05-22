'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Mail, Send, CheckCircle2, Shield, MessageSquare, Building2, User, Landmark, BrainCircuit } from 'lucide-react';

export default function ContactPage() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [category, setCategory] = useState('Enterprise SLA');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userCompany) return;
    setTicketId(Math.floor(100000 + Math.random() * 900000));
    setSubmitted(true);
  };

  return (
    <main id="contact-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative bg-[#020202]">
      {/* Background Ornaments */}
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Mail className="w-3.5 h-3.5 text-brand-yellow" />
            Direct Communications Gateway
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Initiate Contact with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Our Founding Engineers.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Whether inquiring about multi-region container redundant clusters, enterprise SOC2 Type II compliance controls, or private model tuning, our team responds within one business hour.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto mb-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold font-mono text-brand-gold uppercase tracking-[0.15em] block mb-1">Corporate Directory</span>
              <h2 className="text-xl sm:text-3.5xl font-extrabold font-display tracking-tight text-white">Direct Channels</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Technical Inquiries & Pilot Scaling",
                  desc: "Direct link to our founding systems research department for infrastructure architecture alignment reviews.",
                  email: "architecture@verro.ai",
                  icon: BrainCircuit
                },
                {
                  title: "Venture Partners & Institutional",
                  desc: "Strategic relationships, institutional validation requests, and sovereign framework access codes.",
                  email: "executive@verro.ai",
                  icon: Landmark
                },
                {
                  title: "Sovereign Compliance & Auditing",
                  desc: "Verify security guardrail parameters, SSO configurations, SOC2 reports, and SLA contracts.",
                  email: "compliance@verro.ai",
                  icon: Shield
                }
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex gap-4 text-left">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-yellow">
                    <item.icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-white/40 font-semibold mb-2 leading-relaxed">{item.desc}</p>
                    <a href={`mailto:${item.email}`} className="text-xs font-bold text-brand-gold font-mono tracking-wide hover:underline">{item.email}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-emerald-400 text-xs font-bold font-mono text-center">
              ● VERIFIED ENCRYPTED P2P PIPELINE ACTIVE
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-brand-yellow" />
                    Submit Custom Pilot Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Full Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Dr. Jordan Parker"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Corporate Email</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="j.parker@enterprise.com"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Company Name</label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={userCompany}
                          onChange={(e) => setUserCompany(e.target.value)}
                          placeholder="Standard Tech LLC"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Functional Role</label>
                      <div className="relative">
                        <Sparkles className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={userRole}
                          onChange={(e) => setUserRole(e.target.value)}
                          placeholder="VP of Infrastructure"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Primary Inquiry Scope</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Enterprise SLA', 'Private VPC Peering', 'Custom System Audit'].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setCategory(tag)}
                          className={`p-2.5 rounded-lg text-center text-[10px] sm:text-xs font-bold border transition-all ${category === tag ? 'bg-brand-yellow/15 border-brand-yellow text-brand-yellow' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Inquiry Specification / Detail</label>
                    <textarea
                      required
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      rows={4}
                      placeholder="Specify raw transaction limits, SLA parameters, or container infrastructure constraints..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs font-mono font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white text-black text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all shadow-md mt-6"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Communications Payload
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
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl text-white tracking-tight mb-2">Payload Securely Logged</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-semibold max-w-sm mb-6">
                    Founders have received your transmission securely. A principal architect will reply via <strong className="text-white font-bold">{userEmail}</strong> shorty.
                  </p>
                  
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-left w-full space-y-2 max-w-sm font-mono text-xs">
                    <p className="text-white/45">&gt; Transmit Status: <span className="text-emerald-400 font-bold">Encrypted [202 Safe]</span></p>
                    <p className="text-white/45">&gt; Registered Route: <span className="text-white font-bold">{category}</span></p>
                    <p className="text-white/45">&gt; Ticket Signature: <span className="text-white font-bold">#tx-{ticketId || 298402}</span></p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
