'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Sliders, CheckCircle2, ChevronRight, FileText, ArrowRight, Server, ShieldCheck, FileSignature } from 'lucide-react';

export default function EnterprisePage() {
  // SLA contract choices
  const [latencyCeiling, setLatencyCeiling] = useState(240); // ms
  const [targetSSO, setTargetSSO] = useState(true);
  const [dedicatedVPC, setDedicatedVPC] = useState(false);
  const [availabilitySLA, setAvailabilitySLA] = useState("99.9% Core");

  // Math calculated metrics
  const calculatedServiceFee = Math.round(
    3200 + 
    (latencyCeiling < 200 ? 1400 : 0) + 
    (dedicatedVPC ? 2900 : 0) + 
    (availabilitySLA === "99.99% Ultra" ? 2200 : 0)
  );

  return (
    <main id="enterprise-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Shield className="w-3.5 h-3.5 text-brand-yellow" />
            Enterprise Grade SLA Protocols
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Compliance Secured. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Architecturally Honored.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Scale-up safely with SOC2 Type II frameworks, dedicated single-tenant VPC partitions, and strict latency bounds integrated directly into your infrastructure contracts.
          </p>
        </div>

        {/* 3 Core Compliance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: ShieldCheck,
              title: "SOC2 Compliance",
              desc: "Fully audited security access logs, process isolates, and encrypted pipeline storage databases. Ready to pass your risk diligence review in under 24 hours."
            },
            {
              icon: Server,
              title: "Dedicated Environments",
              desc: "Isolate your inference flows on dedicated secure clusters in Google Cloud peering boundaries. Zero multi-tenant memory leak risks or variable queue spikes."
            },
            {
              icon: FileSignature,
              title: "Latency SLAs",
              desc: "Every contract features inline performance SLA tiers. If mean latency scores exceed threshold limits, automated refunds are issued dynamically."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-brand-yellow/15 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-yellow">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Custom SLA contract builder widget */}
        <div className="border border-white/10 rounded-3xl bg-white/[0.02] p-6 sm:p-10 backdrop-blur-md overflow-hidden relative mb-24">
          <div className="mb-10 text-center lg:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-3">Enterprise Quoting</h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-semibold">
              Leverage selectors below to build and refine custom SLA metrics, calculating estimated contract bounds and drafting pilot parameters on-the-fly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left selector fields */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Latency Limit Ceiling Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold font-mono">
                  <span className="text-white/40 flex items-center gap-1"><Sliders className="w-3.5 h-3.5" /> Max Latency SLA Bounds</span>
                  <span className="text-brand-yellow font-black">{latencyCeiling}ms limit</span>
                </div>
                <input 
                  type="range" 
                  min="120" 
                  max="400" 
                  value={latencyCeiling} 
                  onChange={(e) => setLatencyCeiling(parseInt(e.target.value))}
                  className="w-full accent-brand-yellow h-1 px-1 bg-white/10 rounded-lg cursor-pointer border-none outline-none appearance-none"
                />
              </div>

              {/* Security peers checkboxes */}
              <div className="space-y-3">
                <span className="text-xs font-bold font-mono text-white/40 uppercase tracking-widest block">Compliance Options</span>
                
                <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={targetSSO}
                    onChange={(e) => setTargetSSO(e.target.checked)}
                    className="accent-brand-yellow w-4 h-4 rounded"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Full SSO Security</div>
                    <div className="text-[10px] text-white/45">Peered directly with Okta or Azure AD directories.</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dedicatedVPC}
                    onChange={(e) => setDedicatedVPC(e.target.checked)}
                    className="accent-brand-yellow w-4 h-4 rounded"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Single-Tenant VPC Peering (+ $2,900)</div>
                    <div className="text-[10px] text-white/45">Process runs inside custom designated isolated subnet boundaries.</div>
                  </div>
                </label>
              </div>

              {/* Availability tiers */}
              <div className="space-y-2">
                <span className="text-xs font-bold font-mono text-white/40">Guaranteed Availability SLA</span>
                <div className="grid grid-cols-2 gap-2">
                  {["99.9%", "99.99%"].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setAvailabilitySLA(tier)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${availabilitySLA === tier ? 'bg-brand-yellow/15 border-brand-yellow text-brand-yellow' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/50'}`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Generated SLA PDF/Document Preview */}
            <div className="lg:col-span-6 bg-black border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[340px] shadow-22xl relative">
              <div className="absolute top-6 right-6 font-mono text-[9px] bg-white/10 text-white/50 font-bold px-2 py-0.5 rounded tracking-widest uppercase">Draft Proposal</div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-yellow font-bold text-xs uppercase tracking-wider font-mono">
                  <FileText className="w-4 h-4" />
                  <span>Enterprise Contract Estimates</span>
                </div>
                
                <div className="space-y-3 font-mono text-[10px] sm:text-xs text-white/70 leading-relaxed border-t border-white/10 pt-4">
                  <p>&gt; Target Mean Latency Caps SLA: <strong className="text-white">{latencyCeiling}ms</strong></p>
                  <p>&gt; Single-Tenant VPC isolation: <strong className="text-brand-yellow">{dedicatedVPC ? "Designated VPN Tunnel Peered" : "By-Pass"}</strong></p>
                  <p>&gt; Availability threshold: <strong className="text-white">{availabilitySLA === "99.99%" ? "99.99% Multi-region redundant" : "99.9%"}</strong></p>
                  <p>&gt; Federated Okta SSO Integration: <strong className="text-white">{targetSSO ? "Configured" : "Bypass"}</strong></p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-6 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold block">Est. Monthly Service Rate</span>
                  <span className="text-2xl font-black font-mono text-white leading-none">${calculatedServiceFee.toLocaleString()} / mo</span>
                </div>
                
                <button 
                  onClick={() => alert(`Pilot agreement template successfully generated for estimated monthly rate of $${calculatedServiceFee.toLocaleString()}. Our accounts representative will reach out shortly.`)}
                  className="bg-white text-black text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-white/95 transition-all text-center flex items-center gap-1.5"
                >
                  Generate Outline
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
