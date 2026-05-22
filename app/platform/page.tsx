'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Cpu, Terminal, Sparkles, Sliders, Database, ArrowRight, Activity, HardDrive, Network, Zap } from 'lucide-react';

export default function PlatformPage() {
  // Calculator states
  const [activeWorkflows, setActiveWorkflows] = useState(15); // x1000 daily
  const [reliabilityTier, setReliabilityTier] = useState("99.9% SLA"); // SLA level
  const [modelType, setModelType] = useState("3.5-flash"); // Flash vs Pro vs Custom

  // Compute calculated metrics
  const dailyTotalTransactions = activeWorkflows * 1000;
  const targetLatency = modelType === "3.5-flash" ? 350 : modelType === "3.5-pro" ? 640 : 180; // ms
  const computeMemoryNeeded = Math.round(activeWorkflows * 1.8 + (reliabilityTier === "99.99% Extreme" ? 24 : 8)); // GB ram
  const throughputRate = Math.round((dailyTotalTransactions / 86400) * 100) / 100; // QPS

  return (
    <main id="platform-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Cpu className="w-3.5 h-3.5 text-brand-yellow" />
            Platform Infrastructure
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            The infrastructure for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">AI workflows.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            A secure managed platform that converts external events and API requests into reliable AI workflows. We handle the orchestration and scaling.
          </p>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Network,
              layer: "Layer 01",
              title: "Event Routing",
              desc: "Connect your existing REST endpoints or internal webhooks to trigger AI workflows."
            },
            {
              icon: BrainCircuitIcon,
              layer: "Layer 02",
              title: "Managed Execution",
              desc: "Execute workflows efficiently. We handle task queueing, retries, and model routing to ensure reliable operations."
            },
            {
              icon: ShieldCheckIcon,
              layer: "Layer 03",
              title: "Data Validation",
              desc: "Ensure predictable outputs through strict schema validation and execution logging."
            }
          ].map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-brand-yellow/20 hover:bg-white/10 transition-all backdrop-blur-md relative"
            >
              <div className="absolute top-6 right-6 text-[10px] font-bold text-brand-gold/60 tracking-wider font-mono uppercase">{card.layer}</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow mb-6">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">{card.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Deep Specs API Console / Interactive spec sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
                <Zap className="w-4 h-4 text-brand-yellow" />
                Platform Architecture
              </div>
              <h3 className="font-bold text-2xl text-white tracking-tight mb-4">Built for operational scale</h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium mb-6">
                VerroAI provides secure, scalable execution environments for your AI workflows. Built to support growing teams and intensive operational processes.
              </p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              {[
                { title: "Avg. Hot Agent Provision Time", value: "85ms" },
                { title: "Average Request Latency", value: "<1.4ms" },
                { title: "Schema Validation Success", value: "99.997%" },
                { title: "Execution Environment", value: "Isolated Containers" }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-center text-xs font-bold">
                  <span className="text-white/40">{spec.title}</span>
                  <span className="text-white font-mono">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-xs font-mono font-bold text-white/40 ml-4">verro-cli deploy --workflow payment_failures</span>
            </div>
            
            <div className="p-6 font-mono text-xs text-white/80 leading-relaxed overflow-x-auto select-none bg-black flex-grow">
              <span className="text-brand-yellow">{"// Initializing Verro Kernel v1.29.4-Production"}</span><br />
              <span className="text-white/40">{"$ curl -X POST https://api.verro.ai/v1/pipelines \\"}</span><br />
              <span className="text-white/40">{"  -H \"Authorization: Bearer $VERRO_API_KEY\" \\"}</span><br />
              <span className="text-white/40">{"  -d '{"}</span><br />
              <span className="text-brand-ivory">{"    \"pipeline_id\": \"route_payment_failures\","}</span><br />
              <span className="text-brand-ivory">{"    \"trigger_event\": \"webhooks.stripe.charge.failed\","}</span><br />
              <span className="text-brand-ivory">{"    \"model\": \"gemini-3.5-flash\","}</span><br />
              <span className="text-brand-ivory">{"    \"schema_validation\": true,"}</span><br />
              <span className="text-brand-ivory">{"    \"max_allowed_cost_per_iteration\": 0.04"}</span><br />
              <span className="text-white/40">{"  }'"}</span><br /><br />
              <span className="text-emerald-400">{"⚡ [202 OK] Pipeline provisioned successfully"}</span><br />
              <span className="text-white/40">{">> Workflow deployed to production"}</span><br />
              <span className="text-white/40">{">> Environment secured"}</span>
            </div>
          </div>
        </div>

        {/* Interactive Specs Calculator Section */}
        <div className="border border-white/10 rounded-3xl bg-white/[0.02] p-6 sm:p-10 backdrop-blur-md overflow-hidden relative">
          <div className="mb-10 text-center lg:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-3">Workflow Performance Estimator</h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-medium">
              Calculate expected throughput and latency based on your workflow volume and model requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Inputs Panel */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Daily Active Workflows Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold font-mono">
                  <span className="text-white/40 flex items-center gap-1"><Sliders className="w-3.5 h-3.5" /> Est. Daily Workflows</span>
                  <span className="text-brand-yellow font-black">{activeWorkflows * 1000} runs</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="150" 
                  value={activeWorkflows} 
                  onChange={(e) => setActiveWorkflows(parseInt(e.target.value))}
                  className="w-full accent-brand-yellow h-1 px-1 bg-white/10 rounded-lg cursor-pointer border-none outline-none appearance-none"
                />
              </div>

              {/* SLA Target Choices */}
              <div className="space-y-2">
                <span className="text-xs font-bold font-mono text-white/40">Select Reliability SLA Tier</span>
                <div className="grid grid-cols-3 gap-2">
                  {["99.9% SLA", "99.95% Pro", "99.99% Extreme"].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setReliabilityTier(tier)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${reliabilityTier === tier ? 'bg-brand-yellow/15 border-brand-yellow text-brand-yellow' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/60'}`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model Capability Target */}
              <div className="space-y-2">
                <span className="text-xs font-bold font-mono text-white/40">Model Intelligence Engine Target</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "3.5-flash", label: "Gemini 3.5 Flash" },
                    { id: "3.5-pro", label: "Gemini 3.5 Pro" },
                    { id: "custom", label: "Verro Edge" }
                  ].map((engine) => (
                    <button
                      key={engine.id}
                      onClick={() => setModelType(engine.id)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${modelType === engine.id ? 'bg-white/10 border-white/30 text-white' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/50'}`}
                    >
                      {engine.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Panel */}
            <div className="lg:col-span-6 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-2 gap-4 sm:gap-6">
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> Throughput QPS Rate
                </div>
                <div className="text-xl sm:text-2xl font-black font-mono text-white leading-none">{throughputRate} QPS</div>
                <p className="text-[10px] text-white/30 mt-1">Sustained system query limit</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-brand-yellow" /> Targeted Execution Latency
                </div>
                <div className="text-xl sm:text-2xl font-black font-mono text-brand-yellow leading-none">{targetLatency}ms</div>
                <p className="text-[10px] text-white/30 mt-1">Average execution round-trip</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <HardDrive className="w-3.5 h-3.5 text-brand-gold" /> System Isolated Memory
                </div>
                <div className="text-xl sm:text-2xl font-black font-mono text-white leading-none">{computeMemoryNeeded} GB</div>
                <p className="text-[10px] text-white/30 mt-1">gVisor hot RAM overhead</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-brand-ivory" /> Core Storage Cluster
                </div>
                <div className="text-xl sm:text-2xl font-black font-mono text-white leading-none">Shared VPC Node</div>
                <p className="text-[10px] text-white/30 mt-1">Cloud network peering zone</p>
              </div>

            </div>

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

// Minimal placeholder sub-icons so we don't depend on non-existent packages
function BrainCircuitIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

function ShieldCheckIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 11l2 2 4-4" />
    </svg>
  );
}
