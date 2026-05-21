'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Cpu, Zap, Database, ArrowRight, Play, Terminal, HelpCircle, HardDrive, RefreshCw, Layers } from 'lucide-react';

const mockRecipes = [
  {
    id: "rec_101",
    title: "Database Maintenance Job",
    desc: "Reacts proactively to disk space or process limits. Automatically invokes localized cache evictions, system resets, and database vacuum scripts without manual ops.",
    category: "Infrastructure Management",
    frequency: "Active Real-Time",
    savings: "$1,840/mo saved"
  },
  {
    id: "rec_104",
    title: "SaaS Proactive Churn Pre-emption",
    desc: "Evaluates consecutive API latency spikes or error status rates for high-tier accounts. Instantly issues warning Slack triggers and crafts retry exceptions.",
    category: "Operations Optimization",
    frequency: "Real-Time Watch",
    savings: "42 Hours Ops Saved"
  },
  {
    id: "rec_108",
    title: "Automated Compliance Auditing",
    desc: "Periodically scans database records to sanitize PII payloads, mask sensitive fields, and aggregate audit logs into compliance storage.",
    category: "Security & Auditing",
    frequency: "Trigger hourly",
    savings: "100% Compliant audit"
  }
];

export default function AutomationsPage() {
  const [selectedRecipe, setSelectedRecipe] = useState(mockRecipes[0]);
  const [runningRecipe, setRunningRecipe] = useState<string | null>(null);
  const [runLogs, setRunLogs] = useState<string[]>([]);

  const simulatedBlueprintStart = (recipeId: string) => {
    if (runningRecipe) return;
    setRunningRecipe(recipeId);
    setRunLogs(["[INIT] Spawning Verro sandbox isolation node...", "[OK] Secure execution boundary established."]);

    setTimeout(() => {
      setRunLogs(prev => [...prev, `[RECIPE] Initializing matching checklist properties for '${selectedRecipe.title}'`]);
    }, 600);

    setTimeout(() => {
      setRunLogs(prev => [...prev, `[TRANSACTION] Performing verification checks across local clusters...`]);
    }, 1200);

    setTimeout(() => {
      setRunLogs(prev => [...prev, `[SUCCESS] Event resolved. Action completed in exactly 2.4s. System state validated.`]);
      setRunningRecipe(null);
    }, 1900);
  };

  return (
    <main id="automations-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
      <div className="ambient-background" />
      <div className="vignette" />
      <div className="grain-overlay" />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10 w-full flex-grow">
        
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/15 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
          >
            <Cpu className="w-3.5 h-3.5 text-brand-yellow" />
            Automations Blueprint Library
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Ready-to-Use Blueprints. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Repeatable Precision.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Review deployment-ready task recipes. Launch isolated system monitors that automatically handle routine transactions, trace latencies, and protect databases.
          </p>
        </div>

        {/* Catalog Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Recipes Listing */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-bold text-lg text-white mb-4">Enterprise-Ready Blueprints</h3>
            
            {mockRecipes.map((recipe) => (
              <div 
                key={recipe.id}
                onClick={() => { setSelectedRecipe(recipe); setRunLogs([]); }}
                className={`p-6 rounded-2xl border text-left cursor-pointer transition-all ${selectedRecipe.id === recipe.id ? 'bg-white/10 border-brand-yellow/40 shadow-xl' : 'bg-white/5 border-white/5 hover:border-white/15'}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-brand-gold font-bold bg-brand-yellow/10 px-2 py-0.5 rounded mr-2">{recipe.frequency}</span>
                    <span className="text-[10px] font-mono text-white/45 font-bold uppercase">{recipe.category}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400">{recipe.savings}</span>
                </div>
                <h4 className="font-bold text-base text-white mb-2">{recipe.title}</h4>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-medium">{recipe.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Simulated Testing Sandbox */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold uppercase tracking-wider mb-4">
                <Terminal className="w-4 h-4 text-brand-yellow" />
                Workflow Sandboxed Run Simulation
              </div>
              <h3 className="font-bold text-xl text-white tracking-tight mb-2">{selectedRecipe.title}</h3>
              <p className="text-xs text-white/45 leading-relaxed font-medium mb-6">
                Click launch below to trace a simulated offline execution of this pipeline. Watch real terminal transactions simulated through secure execution environments.
              </p>

              {/* Terminal Screen inside Tester */}
              <div className="w-full bg-black/80 border border-white/10 rounded-xl p-4 h-[180px] font-mono text-[10px] text-white/70 overflow-y-auto space-y-2 select-none">
                {runLogs.length === 0 ? (
                  <div className="text-white/20 text-center py-10">
                    &lt; Sandbox Empty. Click Launch Simulation to execute &gt;
                  </div>
                ) : (
                  runLogs.map((log, index) => {
                    let color = "text-white/60";
                    if (log.startsWith("[RECIPE]")) color = "text-brand-yellow font-bold";
                    if (log.startsWith("[SUCCESS]")) color = "text-emerald-400 font-bold";
                    
                    return (
                      <div key={index} className={`flex gap-1.5 ${color}`}>
                        <span>$</span>
                        <span>{log}</span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <button
              onClick={() => simulatedBlueprintStart(selectedRecipe.id)}
              disabled={runningRecipe !== null}
              className={`w-full mt-6 py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${runningRecipe ? 'bg-brand-yellow/10 text-brand-gold cursor-wait border border-brand-yellow/20' : 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]'}`}
            >
              {runningRecipe ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running Automation Trial...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Launch Sandbox Trail
                </>
              )}
            </button>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
