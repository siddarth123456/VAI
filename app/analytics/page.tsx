'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Activity, Gauge, Cpu, Sliders, TrendingUp, AlertTriangle, ShieldCheck, Database, Search } from 'lucide-react';

export default function AnalyticsPage() {
  const [qps, setQps] = useState(48); // query per second slider

  // Math models based on QPS
  const confidenceScore = Math.round(99.8 - (qps > 100 ? (qps - 100) * 0.015 : 0) * 100) / 100;
  const tokenProcessing = Math.round(qps * 820 * 1.5);
  const computePowerSaved = Math.round(qps * 3.4 * 0.85 * 10) / 10; // in MWh or operations
  const latencyAvg = Math.round(145 + (qps > 90 ? (qps - 90) * 0.75 : 0)); // ms

  // Dynamic Chart SVG points mapped from QPS load
  const loadProfilePoints = [
    { x: 0, y: 150 - qps * 0.2 },
    { x: 50, y: 140 - qps * 0.25 },
    { x: 100, y: 160 - qps * 0.3 },
    { x: 150, y: 120 - qps * 0.15 },
    { x: 200, y: 130 - qps * 0.4 },
    { x: 250, y: 90 - qps * 0.35 },
    { x: 300, y: 110 - qps * 0.5 },
    { x: 350, y: 80 - qps * 0.4 }
  ];

  const svgLinePath = loadProfilePoints.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <main id="analytics-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Activity className="w-3.5 h-3.5 text-brand-yellow" />
            Executive Telemetry Interface
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Hard System Telemetry. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Zero Speculation.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Audit inference health metrics, model efficiency gains, latency thresholds, and core compute footprint metrics in real-time under simulated multi-tenant loads.
          </p>
        </div>

        {/* Dynamic Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Latency */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-brand-yellow/15 transition-all">
            <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider flex items-center gap-1.5 mb-3">
              <Gauge className="w-3.5 h-3.5 text-brand-yellow" /> Avg Client Latency
            </span>
            <div className="text-3xl font-black font-mono text-white mb-2">{latencyAvg}ms</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-2">
              <div 
                className="bg-brand-yellow h-full rounded-full transition-all duration-300" 
                style={{ width: `${Math.min(100, (latencyAvg / 300) * 100)}%` }} 
              />
            </div>
            <p className="text-[10px] text-white/40 font-bold">Sub-millisecond routing feedback verified</p>
          </div>

          {/* Card 2: AI Accuracy / Confidence */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-brand-yellow/15 transition-all">
            <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider flex items-center gap-1.5 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Model Confidence
            </span>
            <div className="text-3xl font-black font-mono text-emerald-400 mb-2">{confidenceScore}%</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-2">
              <div 
                className="bg-emerald-400 h-full rounded-full transition-all duration-300" 
                style={{ width: `${confidenceScore}%` }} 
              />
            </div>
            <p className="text-[10px] text-white/40 font-bold">Guarded by inline safety verifiers</p>
          </div>

          {/* Card 3: Thruput Tokens */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-brand-yellow/15 transition-all">
            <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider flex items-center gap-1.5 mb-3">
              <Cpu className="w-3.5 h-3.5 text-brand-gold" /> Token Throughput / s
            </span>
            <div className="text-3xl font-black font-mono text-white mb-2">{(tokenProcessing / 1000).toFixed(1)}k</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-2">
              <div 
                className="bg-brand-gold h-full rounded-full transition-all duration-300" 
                style={{ width: `${Math.min(100, (tokenProcessing / 200000) * 100)}%` }} 
              />
            </div>
            <p className="text-[10px] text-white/40 font-bold">Active multi-tenant pipeline load</p>
          </div>

          {/* Card 4: Costs Saved */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-brand-yellow/15 transition-all">
            <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider flex items-center gap-1.5 mb-3">
              <Database className="w-3.5 h-3.5 text-brand-ivory" /> Compute Saved
            </span>
            <div className="text-3xl font-black font-mono text-brand-yellow mb-2">{computePowerSaved} MPh</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-2">
              <div 
                className="bg-brand-ivory h-full rounded-full transition-all duration-300" 
                style={{ width: `${Math.min(100, (computePowerSaved / 1500) * 100)}%` }} 
              />
            </div>
            <p className="text-[10px] text-white/40 font-bold">Bypassed heavyweight standard reasoning</p>
          </div>

        </div>

        {/* Graphic SVG Telemetry Map with Load Controller slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Interactive Chart Simulator */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h3 className="font-bold text-xl text-white tracking-tight">Active Computational Footprint</h3>
                  <p className="text-xs text-white/45">Finetuned model latency spikes relative to real-time event loads.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/15">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-mono font-bold text-white/50">Tracking Active</span>
                </div>
              </div>

              {/* Real SVG graph using math generated above */}
              <div className="w-full h-[220px] bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-4 top-4 flex flex-col justify-between text-[8px] font-mono text-white/15 pr-2 select-none pointer-events-none">
                  <span>Peak QPS Cap (250)</span>
                  <span>150 QPS Baseline</span>
                  <span>Optimized Active (0)</span>
                </div>

                <svg className="w-full h-[150px] overflow-visible" preserveAspectRatio="none" viewBox="0 0 350 150">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E7C85A" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#E7C85A" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Glowing Fill Areas */}
                  <path 
                    d={`M 0,150 L ${svgLinePath} L 350,150 Z`} 
                    fill="url(#chartGlow)" 
                    className="transition-all duration-300"
                  />
                  
                  {/* Main Wave Line */}
                  <polyline
                    fill="none"
                    stroke="#E7C85A"
                    strokeWidth="3.5"
                    points={svgLinePath}
                    className="transition-all duration-300"
                  />

                  {/* Node Pointer Dot */}
                  <circle cx="200" cy={130 - qps * 0.4} r="6" fill="#FFFFFF" stroke="#B68A12" strokeWidth="2" className="transition-all duration-300" />
                </svg>
              </div>
            </div>

            {/* QPS Load Controller Silder */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex justify-between items-center text-xs font-mono font-bold mb-3">
                <span className="text-white/40 flex items-center gap-1.5"><Sliders className="w-4 h-4 text-brand-yellow" /> Adjust Simulation Traffic Rate</span>
                <span className="text-brand-yellow font-black text-sm">{qps} Queries Per Second (QPS)</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="240" 
                value={qps} 
                onChange={(e) => setQps(parseInt(e.target.value))}
                className="w-full accent-brand-yellow h-1 px-1 bg-white/10 rounded-lg cursor-pointer border-none outline-none appearance-none"
              />
              <div className="flex justify-between text-[9px] font-mono text-white/30 mt-2">
                <span>10 QPS (Cold Dev Sandbox)</span>
                <span>120 QPS (Core SME Standard)</span>
                <span>240 QPS (Enterprise Stress Load)</span>
              </div>
            </div>

          </div>

          {/* Diagnostic Log Feed */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md">
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Core Anomalies / Warnings</h3>
              <div className="space-y-4">
                {[
                  { title: "Ingress Buffer Congestion Warning", level: "Low", text: "Rate limiting is active on staging node peer-4. Standard fallback active." },
                  { title: "Inference Token Cost Mitigation Alert", level: "Info", text: "Re-routed 1,240 simple customer requests to local Flash proxy cache. Saved $42.10." },
                  { title: "SOC2 Compliance Peering Handshake", level: "Safe", text: "Successfully Peered with Isolated VPC boundary. Tunnel encrypted." }
                ].map((log, idx) => (
                  <div key={idx} className="p-3.5 bg-black/40 border border-white/5 rounded-xl text-left flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-white truncate max-w-[150px]">{log.title}</span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${log.level === 'Low' ? 'bg-orange-500/10 text-orange-400' : log.level === 'Info' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>{log.level}</span>
                    </div>
                    <p className="text-[11px] text-white/40 leading-relaxed font-medium">{log.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-black text-brand-gold uppercase tracking-wider">
              <span>Node IP Reference</span>
              <span className="font-mono text-white/40 font-bold">10.14.98.05 (Cluster West)</span>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
