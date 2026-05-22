'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from 'motion/react';
import { Workflow, Settings, Zap, Play, CheckCircle2, ChevronRight, RefreshCw, FileCode, AlertCircle } from 'lucide-react';

export default function WorkflowsPage() {
  const [selectedTrigger, setSelectedTrigger] = useState("stripe_charge_failed");
  const [selectedModel, setSelectedModel] = useState("flash-decide");
  const [safetyEnforced, setSafetyEnforced] = useState(true);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simOutput, setSimOutput] = useState<string[]>([]);

  // Generated JSON Blueprint
  const getJSONBlueprint = () => {
    return JSON.stringify({
      version: "1.3",
      pipeline_id: `workflow_${selectedTrigger}`,
      orchestration: {
        event: `webhooks.${selectedTrigger}`,
        routing: {
          strategy: selectedModel === "flash-decide" ? "fast-execution" : "complex-reasoning",
          threshold: 0.85,
          fallback_action: "human_review"
        },
        guardrails: {
          sanitize_pii: true,
          verify_sandbox_pci: safetyEnforced,
          max_timeout_seconds: 12
        }
      }
    }, null, 2);
  };

  // Run a dry run test
  const triggerLiveSimRun = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setSimOutput(["[INFO] Initializing workflow engine...", "[OK] Environment secured."]);

    setTimeout(() => {
      setSimOutput(prev => [...prev, `[EVENT] Received webhook event: '${selectedTrigger}'`]);
    }, 600);

    setTimeout(() => {
      setSimOutput(prev => [...prev, `[EXECUTION] Routed to Gemini ${selectedModel === 'flash-decide' ? '3.5 Flash' : '3.5 Pro'} in 45ms`]);
    }, 1200);

    setTimeout(() => {
      setSimOutput(prev => [...prev, safetyEnforced ? `[VALIDATION] Schema validation passed. Payload verified.` : `[WARN] Schema validation skipped. Evaluating raw payload.`]);
    }, 1800);

    setTimeout(() => {
      setSimOutput(prev => [...prev, `[SUCCESS] Output generated and action completed successfully.`]);
      setIsRunningSim(false);
    }, 2400);
  };

  return (
    <main id="workflows-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Workflow className="w-3.5 h-3.5 text-brand-yellow" />
            AI Workflow Engine
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Intelligent Event. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Predictable Action.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Build reliable workflows that monitor operational webhooks, evaluate the context, and execute the correct transactional response automatically.
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Controls Hub */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-brand-yellow" />
                Workflow Pipeline Properties
              </h3>

              {/* Step 1: Select Event Trigger */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest block font-mono">01. Choose Event Trigger</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "stripe_charge_failed", label: "Stripe Charge Failed" },
                    { id: "postgres_latency_spike", label: "Postgres Latency Spike" },
                    { id: "kafka_sensor_alert", label: "IoT Heat Alert" },
                    { id: "auth_intrusion_attempt", label: "Auth Intrusion Warn" }
                  ].map((trig) => (
                    <button
                      key={trig.id}
                      onClick={() => { setSelectedTrigger(trig.id); setSimOutput([]); }}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-bold flex flex-col gap-1 ${selectedTrigger === trig.id ? 'bg-brand-yellow/15 border-brand-yellow text-brand-yellow' : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-white/60'}`}
                    >
                      <span>{trig.label}</span>
                      <span className="text-[9px] font-mono text-white/30 truncate">webhooks.{trig.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Brain Layer */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest block font-mono">02. Execution Model</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "flash-decide", label: "Gemini Flash", desc: "Low latency. Ideal for routing." },
                    { id: "pro-reason", label: "Gemini Pro", desc: "Complex reasoning tasks." }
                  ].map((model) => (
                    <button
                      key={model.id}
                      onClick={() => { setSelectedModel(model.id); setSimOutput([]); }}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-bold flex flex-col gap-1 ${selectedModel === model.id ? 'bg-white/10 border-white/20 text-white' : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-white/50'}`}
                    >
                      <span>{model.label}</span>
                      <span className="text-[9px] font-medium text-white/40 leading-relaxed">{model.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Hard Safety Guardrails */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest block font-mono">03. Validation Rules</span>
                <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 cursor-pointer selection:bg-transparent">
                  <input
                    type="checkbox"
                    checked={safetyEnforced}
                    onChange={(e) => { setSafetyEnforced(e.target.checked); setSimOutput([]); }}
                    className="accent-brand-yellow w-4 h-4 rounded"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Strict Schema Validation</div>
                    <div className="text-[10px] text-white/45">Ensure payload matches exact schema before execution.</div>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={triggerLiveSimRun}
              disabled={isRunningSim}
              className={`w-full mt-8 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all shadow-md ${isRunningSim ? 'bg-brand-yellow/10 text-brand-gold cursor-not-allowed border border-brand-yellow/20' : 'bg-white text-black hover:bg-white/95 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.01]'}`}
            >
              {isRunningSim ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Processing Pipeline Simulate...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Test Live Execution Sim
                </>
              )}
            </button>
          </div>

          {/* Code Sandbox Output & Terminal */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* JSON Code Area */}
            <div className="bg-[#050505] border border-white/10 rounded-3xl overflow-hidden flex flex-col flex-1 shadow-2xl min-h-[220px]">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-brand-yellow" />
                  <span className="text-xs font-mono font-bold text-white/50">verro_config_manifest.json</span>
                </div>
                <span className="text-[10px] font-mono bg-white/10 text-white/60 px-2 py-0.5 rounded uppercase font-bold">Auto Updated</span>
              </div>
              <div className="p-6 font-mono text-xs text-white/80 overflow-y-auto leading-relaxed flex-grow">
                <pre>{getJSONBlueprint()}</pre>
              </div>
            </div>

            {/* Simulated Live Action Terminal */}
            <div className="bg-black border border-white/10 rounded-2xl overflow-hidden shadow-xl h-[230px] flex flex-col">
              <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-white/50 font-bold">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Workflow Execution Log</span>
                </div>
                {isRunningSim && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Executing</span>
                  </div>
                )}
              </div>
              
              <div className="p-5 font-mono text-[11px] text-white/70 overflow-y-auto flex-grow space-y-2 bg-black">
                {simOutput.length === 0 ? (
                  <div className="flex items-center gap-2 text-white/30 py-8 justify-center flex-col text-center">
                    <AlertCircle className="w-8 h-8 text-white/15" />
                    <span>Select configurations on the left and click **Test Live Execution Sim** to trace execution flows.</span>
                  </div>
                ) : (
                  simOutput.map((log, index) => {
                    let color = "text-white/60";
                    if (log.startsWith("[EVENT]")) color = "text-brand-yellow font-bold";
                    if (log.startsWith("[EXECUTION]")) color = "text-brand-ivory";
                    if (log.startsWith("[SUCCESS]")) color = "text-emerald-400 font-bold";
                    if (log.startsWith("[WARN]")) color = "text-red-400 font-bold animate-pulse";
                    
                    return (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.3 }} 
                        key={index} 
                        className={`flex gap-2 ${color}`}
                      >
                        <span>&gt;</span>
                        <span>{log}</span>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
