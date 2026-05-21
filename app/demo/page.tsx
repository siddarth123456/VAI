'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, HelpCircle, User, Mail, Calendar, Building, MessageSquare, Code, CheckCircle, BrainCircuit, ChevronRight } from 'lucide-react';

const counselorQuestions = [
  {
    step: 0,
    text: "Welcome to VerroAI Enterprise Pilot center. What is your estimated monthly transactional API load?",
    options: [
      { label: "Under 1M Actions", nextScore: 100 },
      { label: "1M to 50M Actions (Scales Quick)", nextScore: 500 },
      { label: "50M+ Hyperscale (SOC2 Peered)", nextScore: 2000 }
    ]
  },
  {
    step: 1,
    text: "Excellent. Which cloud environment does your enterprise utilize to peer with isolated clusters?",
    options: [
      { label: "Google Cloud Platform (GCP Preferred)", nextScore: 10 },
      { label: "Amazon Web Services (AWS)", nextScore: 100 },
      { label: "Microsoft Azure Node", nextScore: 200 },
      { label: "On-Premises Dedicated Server", nextScore: 1000 }
    ]
  },
  {
    step: 2,
    text: "Understood. What is the target latency limit bounds for your mission-critical pipelines?",
    options: [
      { label: "Under 200ms Mean (Fast-Heuristic)", nextScore: 800 },
      { label: "200ms - 500ms (Staggered Reasoning Loops)", nextScore: 200 },
      { label: "Asynchronous background execution", nextScore: 50 }
    ]
  }
];

export default function DemoPage() {
  // Input fields state
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [demoDate, setDemoDate] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Counselor chatbot states
  const [currentStep, setCurrentStep] = useState(0);
  const [scoreHistory, setScoreHistory] = useState<number[]>([]);
  const [botChatHistory, setBotChatHistory] = useState<string[]>([
    "VerroAI System Counselor initializing... Verified SSL peering handshake online."
  ]);

  const handleSubOption = (optionRate: number, optionLabel: string) => {
    setScoreHistory(prev => [...prev, optionRate]);
    setBotChatHistory(prev => [...prev, `You selected: ${optionLabel}`]);

    if (currentStep < counselorQuestions.length - 1) {
      const nextQ = counselorQuestions[currentStep + 1];
      setTimeout(() => {
        setBotChatHistory(prev => [...prev, nextQ.text]);
        setCurrentStep(prev => prev + 1);
      }, 400);
    } else {
      setTimeout(() => {
        const totalRatingFactor = scoreHistory.reduce((a, b) => a + b, 0) + optionRate;
        const estCost = Math.round(1500 + totalRatingFactor * 3.5);
        
        setBotChatHistory(prev => [
          ...prev,
          `System processing parameters complete [200 OK]. Based on cloud peering needs and workflow limits, we've compiled your customized pilot spec summary:`,
          `> Est. Monthly Rate: $${estCost.toLocaleString()} / mo`,
          `> ISO Safe Sandboxes: Full gVisor Processes Isolated`,
          `Your parameters are successfully cached. Submit the scheduling form on the left to confirm your meeting with a Staff Architect.`
        ]);
        setCurrentStep(99); // chat completed
      }, 500);
    }
  };

  const handleDemoFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userCompany) {
      alert("Please enter values for Name, Email, and Enterprise Team.");
      return;
    }
    setIsFormSubmitted(true);
  };

  return (
    <main id="contact-demo-page" className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
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
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            Lock In Peer Evaluation Demo
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Book an Executive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">Architecture Consultation.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Review integration scopes with our co-founders. Analyze performance requirements, customize SLA variables, and design secure sandbox architectures.
          </p>
        </div>

        {/* Form and Counselor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Booking Scheduler Form Card */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isFormSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleDemoFormSubmit} 
                  className="space-y-5 flex-grow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-yellow" />
                      Reserve Integration Consultation
                    </h3>

                    {/* Inputs */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Full Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="E.g. Dr. Helen Zhao"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Corporate Email Address</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="name@acme.com"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Enterprise / Team Name</label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="Axcme Corp"
                            value={userCompany}
                            onChange={(e) => setUserCompany(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest block">Preferred Pilot Date</label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            required
                            value={demoDate}
                            onChange={(e) => setDemoDate(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 transition-shadow cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-8 bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    Lock Meeting Slot
                    <ArrowRight className="w-4 h-4 animate-pulse" />
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
                  <h3 className="font-bold text-2xl text-white tracking-tight mb-2">Slot Locked Successfully</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-semibold max-w-sm mb-6">
                    A technical coordinator will confirm your calendared date: <strong className="text-white">{demoDate || "TBD"}</strong>.
                  </p>
                  
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-left w-full space-y-2 max-w-sm font-mono text-xs">
                    <p className="text-white/40">&gt; Registrant: <span className="text-white font-bold">{userName}</span></p>
                    <p className="text-white/40">&gt; Organization: <span className="text-white font-bold">{userCompany}</span></p>
                    <p className="text-white/40">&gt; Contact: <span className="text-white font-bold">{userEmail}</span></p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Interactive AI Pilot Counselor Column */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest font-mono flex items-center gap-1">
                  <BrainCircuit className="w-4 h-4 text-brand-yellow animate-pulse" />
                  VerroAI Pilot Chat counselor
                </span>
                <span className="text-[9px] font-mono font-bold bg-[#111111] px-2 py-0.5 rounded text-white/40 border border-white/5">SSL SECURE</span>
              </div>

              {/* Bot chat bubble scroll area */}
              <div className="w-full bg-black/40 border border-white/5 rounded-xl p-4 h-[240px] overflow-y-auto space-y-3 font-mono text-[10px] sm:text-xs leading-relaxed select-none">
                {botChatHistory.map((text, i) => {
                  const isUser = text.startsWith("You selected:");
                  const isSlaLine = text.startsWith(">");
                  return (
                    <div 
                      key={i} 
                      className={`p-2.5 rounded-lg max-w-[90%] ${isUser ? 'bg-white/5 text-white/50 ml-auto border border-white/5' : isSlaLine ? 'text-brand-yellow font-bold pl-3 border-l border-brand-yellow/30' : 'text-white/80'}`}
                    >
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step Selection options */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <AnimatePresence mode="wait">
                {currentStep !== 99 && currentStep < counselorQuestions.length ? (
                  <motion.div 
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2"
                  >
                    <div className="text-[10px] font-bold font-mono text-white/30 mb-2 uppercase tracking-wide">Select to Answer Chat:</div>
                    {counselorQuestions[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSubOption(option.nextScore, option.label)}
                        className="w-full p-3 bg-white/5 border border-white/5 rounded-xl text-left text-xs font-bold font-mono hover:border-brand-yellow/30 hover:bg-white/10 text-white/80 transition-all flex justify-between items-center group"
                      >
                        <span>{option.label}</span>
                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-brand-yellow transition-colors" />
                      </button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-center py-4 text-xs font-bold text-white/40 font-mono"
                  >
                    &lt; Setup Config Compiled. Complete Form to Book Slot &gt;
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
