'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ShieldCheck, Database, Search, Terminal, AlertCircle, Cpu, Sliders, ChevronRight } from 'lucide-react';

const mockTraces = [
  {
    id: "trace_802",
    action: "Infrastructure Self-Healing Loop",
    status: "Completed",
    latency: "340ms",
    accuracy: "99.98%",
    trigger: "Postgres Storage Buffer Overload (93.1%)",
    systemPrompt: "You are the resident system daemon. Analyze storage limits on disk partition #4 and invoke clean_temp_logs when threshold exceeds 90%. Assert gVisor sandbox compliance.",
    contextRetrieved: "disk_used_percentage: 93.1%, environment: prod, isolated_vpc: peer-us-east"
  },
  {
    id: "trace_795",
    action: "Kafka Broker Hot Partition Recovery",
    status: "Completed",
    latency: "520ms",
    accuracy: "99.85%",
    trigger: "Kafka Partition Queue Starvation (Topic: analytics_event)",
    systemPrompt: "Evaluate network saturation triggers on Kakfa topic indices and balance broker loads across partitions 1-4. Validate safety hash values before re-allocating keys.",
    contextRetrieved: "starved_replicas: [3, 4], latency_delta: +140ms, total_topics: 15"
  },
  {
    id: "trace_740",
    action: "Stripe Retry Optimization",
    status: "Escalated",
    latency: "120ms",
    accuracy: "94.20%",
    trigger: "Continuous Stripe Charge Failures (Customer: #9034)",
    systemPrompt: "Check if failed payments occurred due to compliance blocks vs lack of funds. Trigger notification to customer if blocked by compliance gateway.",
    contextRetrieved: "decline_code: compliance_flag, retry_attempts: 3, fraud_score: 91"
  }
];

export default function AIInsightsPage() {
  const [selectedTrace, setSelectedTrace] = useState(mockTraces[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [exportComplete, setExportComplete] = useState(false);

  const triggerExportLogs = (id: string) => {
    setExportComplete(true);
    setTimeout(() => {
      setExportComplete(false);
    }, 3000);
  };

  const filteredTraces = mockTraces.filter(t => 
    t.action.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.trigger.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main id="ai-insights-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative bg-[#020202]">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Eye className="w-3.5 h-3.5 text-brand-yellow" />
            AI-Insights Auditor
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Real-Time AI-Insights <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">And Decisiveness Auditing.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Review detailed execution records. Verify prompting safety structures, input contextual dimensions, and check the performance profiles of our agent nodes.
          </p>
        </div>

        {/* Trace Terminal Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24 max-w-6xl mx-auto text-left">
          
          {/* Sidebar Trace Log Selector */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col backdrop-blur-md">
            
            {/* Search Input */}
            <div className="relative w-full mb-6">
              <Search className="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter traces by actions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
              />
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[440px] flex-grow pr-1">
              {filteredTraces.map((trace) => (
                <button
                  key={trace.id}
                  onClick={() => setSelectedTrace(trace)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex flex-col gap-2 relative overflow-hidden group ${selectedTrace.id === trace.id ? 'bg-brand-yellow/15 border-brand-yellow/30 text-brand-gold' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 text-white/70'}`}
                >
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                    <span className="text-white/45">{trace.id}</span>
                    <span className={`px-2 py-0.2 rounded font-black ${trace.status === 'Completed' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>{trace.status}</span>
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-brand-yellow transition-colors">{trace.action}</h4>
                  <p className="text-[10px] text-white/35 leading-tight truncate">Triggered by: {trace.trigger}</p>
                </button>
              ))}

              {filteredTraces.length === 0 && (
                <div className="text-center font-bold text-white/30 py-8 text-xs flex flex-col items-center gap-2">
                  <AlertCircle className="w-7 h-7 text-white/10" />
                  No traces match your filter criteria.
                </div>
              )}
            </div>
          </div>

          {/* Core Auditor Workspace */}
          <div className="lg:col-span-7 bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            
            {/* Tab Header */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between text-xs font-mono select-none">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-yellow" />
                <span className="text-white/70 font-bold">{selectedTrace.id} Cognitive Inspection Window</span>
              </div>
              <div className="flex gap-4 text-white/45 font-bold">
                <span>Latency Check: <strong className="text-white">{selectedTrace.latency}</strong></span>
                <span>Safety Rating: <strong className="text-emerald-400">{selectedTrace.accuracy}</strong></span>
              </div>
            </div>

            {/* Inspect Fields */}
            <div className="p-6 space-y-6 flex-grow overflow-y-auto max-h-[500px]">
              
              {/* Field 1: Action Title */}
              <div>
                <span className="text-[10px] font-mono uppercase font-black text-brand-gold tracking-widest block mb-2">Target Action Workflow</span>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-sm font-semibold text-white">
                  {selectedTrace.action}
                </div>
              </div>

              {/* Field 2: Prompt Instruction */}
              <div>
                <span className="text-[10px] font-mono uppercase font-black text-white/40 tracking-widest block mb-2">Cognitive System Instructs</span>
                <div className="bg-black/60 border border-white/5 p-4 rounded-xl text-xs font-mono text-white/80 leading-relaxed">
                  {selectedTrace.systemPrompt}
                </div>
              </div>

              {/* Field 3: Context Retrieved */}
              <div>
                <span className="text-[10px] font-mono uppercase font-black text-white/40 tracking-widest block mb-2">Ingestion variables mesh</span>
                <div className="bg-black/60 border border-white/5 p-4 rounded-xl text-xs font-mono text-brand-ivory leading-relaxed">
                  {selectedTrace.contextRetrieved}
                </div>
              </div>

            </div>

            {/* Bottom Panel Actions */}
            <div className="p-4 bg-white/5 border-t border-white/10 flex justify-between items-center text-xs font-bold text-white/50">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> gVisorProcess Isolation Verified</span>
              <button 
                onClick={() => triggerExportLogs(selectedTrace.id)}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${exportComplete ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-white text-black hover:bg-white/90'}`}
              >
                {exportComplete ? "✓ Logs Copied to Clipboard (Checksum Secured)" : "Export Trace Logs"}
              </button>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
