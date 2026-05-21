'use client';

import React from 'react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Activity, 
  Zap, 
  Layers, 
  GitMerge, 
  CheckCircle2, 
  TrendingUp,
  Cpu,
  RefreshCw,
  BarChart3,
  Bot
} from 'lucide-react';
import { motion } from 'motion/react';

export function DashboardPreview() {
  return (
    <div className="w-full flex justify-center py-12 md:py-20 px-2 sm:px-6 lg:px-12 relative z-10">
      
      {/* Layout A Container */}
      <div className="relative w-full max-w-[1400px] flex flex-col rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
           style={{ background: 'linear-gradient(135deg, rgba(20,20,22,0.8) 0%, rgba(10,10,12,0.95) 100%)', backdropFilter: 'blur(40px)' }}>

        
        {/* Adds grain overlay just inside the preview container */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-overlay z-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}></div>
        
        {/* Header Navigation - App Style */}
        <motion.header 
          initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative z-20 flex justify-between items-center px-4 md:px-6 lg:px-8 pt-6 pb-4 border-b border-white/5 bg-black/20"
        >
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-lg md:text-xl font-bold font-display tracking-tight text-white md:pr-6 md:border-r border-white/10">
              <span className="text-brand-yellow drop-shadow-[0_0_8px_rgba(231,200,90,0.6)]">✦</span> <span className="hidden sm:inline">VerroAI</span>
            </div>
            <nav className="hidden lg:flex items-center gap-6 text-[0.9rem] font-medium text-white/50">
              <a href="#" className="text-white bg-white/10 px-3 py-1.5 rounded-md transition-colors shadow-sm">Overview</a>
              <a href="#" className="hover:text-white transition-colors">Nodes</a>
              <a href="#" className="hover:text-white transition-colors">Pipelines</a>
              <a href="#" className="hover:text-white transition-colors">Settings</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center text-xs md:text-sm font-medium text-white/50 bg-white/5 border border-white/10 rounded-full px-3 md:px-4 py-1.5 gap-2">
                 Workspace: <span className="text-white font-semibold">Production</span> <ChevronDown className="w-3 h-3 text-white/50" />
             </div>
             <button className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-brand-amber to-brand-yellow flex items-center justify-center text-black font-bold text-xs md:text-sm shadow-[0_0_20px_rgba(231,200,90,0.4)] hover:shadow-[0_0_30px_rgba(231,200,90,0.6)] transition-shadow">
               JD
             </button>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <div className="relative z-20 flex-grow flex flex-col px-4 md:px-6 lg:px-12 pb-8 md:pb-12 pt-6 md:pt-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">Operational Overview</h2>
              <p className="text-white/50 text-xs md:text-sm">System intelligence and automation metrics for the current billing cycle.</p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <div className="bg-white/5 border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] rounded-lg px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                System Healthy
              </div>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-colors rounded-lg px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white flex items-center gap-2 active:scale-95">
                <RefreshCw className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/60" /> Sync Now
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            
            {/* 4-Column Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
              <StatCard label="Active Workflows" value="1,204" trend="+12" trendUp={true} icon={Activity} delay={0.1} />
              <StatCard label="Tasks Automated" value="84.2K" trend="+23" trendUp={true} icon={RefreshCw} delay={0.2} />
              <StatCard label="Compute Saved" value="142h" trend="+8" trendUp={true} icon={Layers} delay={0.3} />
              <StatCard label="Error Rate" value="0.04%" trend="-1.2" trendUp={false} icon={Cpu} delay={0.4} />
            </div>

            {/* 2-Column Visual Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              
              {/* Workflow Activity Line Chart (Takes 2 columns) */}
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-2 bg-black/20 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-[16px] md:rounded-[20px] p-5 md:p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors"
              >
                <div className="relative z-10 flex justify-between items-start mb-6 md:mb-8">
                  <div>
                    <h3 className="font-bold text-white text-base md:text-lg mb-0.5 md:mb-1">Compute throughput</h3>
                    <p className="text-white/50 text-xs md:text-sm">Real-time vector operations passing through neural edge</p>
                  </div>
                  <button className="text-white/40 hover:text-white p-1.5 md:p-2 rounded-md hover:bg-white/5 transition-colors"><BarChart3 className="w-4 h-4 md:w-5 md:h-5" /></button>
                </div>
                
                <div className="relative w-full aspect-[2/1] md:aspect-[3/1] mt-auto">
                  <div className="absolute top-0 left-[60%] -translate-x-1/2 bg-white text-black text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-lg flex flex-col items-center font-bold transform -translate-y-4 z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap">
                    <span className="text-black/60 font-medium">May 19, 14:00</span>
                    <span>14,520 OPS</span>
                    <div className="absolute w-2 h-2 bg-white rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                  
                  {/* Clean SVG Path simulating activity */}
                  <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-brand-yellow)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--color-brand-yellow)" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 90 Q 50 85 100 60 T 200 40 T 300 25 T 400 15"
                      fill="url(#lineGrad)"
                    />
                    <path 
                      d="M 0 90 Q 50 85 100 60 T 200 40 T 300 25 T 400 15" 
                      fill="none" 
                      stroke="var(--color-brand-yellow)" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                    
                    <circle cx="240" cy="33.5" r="5" fill="#000000" stroke="var(--color-brand-yellow)" strokeWidth="3" className="animate-[pulse_2s_ease-in-out_infinite] origin-center z-10 relative drop-shadow-[0_0_8px_rgba(231,200,90,0.8)]" />
                  </svg>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 border-t border-b border-white/5 flex flex-col justify-between pointer-events-none">
                    <div className="w-full h-px bg-white/5"></div>
                    <div className="w-full h-px bg-white/5"></div>
                    <div className="w-full h-px bg-white/5"></div>
                  </div>
                </div>
              </motion.div>

              {/* AI Insights Card (Takes 1 column) */}
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.4, ease: "easeOut" } }}
                className="bg-black/20 backdrop-blur-xl border border-white/5 rounded-[16px] md:rounded-[20px] p-5 md:p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col relative overflow-hidden hover:border-white/10 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none"></div>

                <div className="flex justify-between items-center mb-5 md:mb-6 relative z-10">
                  <h3 className="font-bold text-white text-base md:text-lg flex items-center gap-2">
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow" />
                    System Insights
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4 md:gap-5 mt-auto relative z-10">
                  <InsightRow 
                    icon={Zap}
                    title="Optimization Applied" 
                    desc="Query latency reduced by 18% via distributed caching." 
                  />
                  <div className="w-full h-px bg-white/5"></div>
                  <InsightRow 
                    icon={GitMerge}
                    title="Traffic Bottleneck" 
                    desc="Pipeline 'ETL-CR-09' scaling horizontally to prevent drops." 
                    isWarning
                  />
                  <div className="w-full h-px bg-white/5"></div>
                  <InsightRow 
                    icon={CheckCircle2}
                    title="Anomaly Detected & Fixed" 
                    desc="Irregular request pattern blocked by Neural Edge." 
                  />
                </div>
                
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend, trendUp, icon: Icon, delay }: { label: string, value: string, trend: string, trendUp: boolean, icon: any, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-black/20 backdrop-blur-md border border-white/5 rounded-[12px] md:rounded-[16px] p-4 md:p-5 flex flex-col justify-between hover:bg-white/5 hover:border-white/10 hover:-translate-y-1 transition-all group shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
    >
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <span className="text-white/50 text-[10px] md:text-xs font-semibold leading-tight pr-1 md:pr-2 line-clamp-2 md:line-clamp-1">{label}</span>
        <div className="p-1.5 rounded-md bg-white/5 border border-white/5 shadow-sm text-white/50 group-hover:text-brand-yellow group-hover:border-brand-yellow/30 transition-all flex-shrink-0">
          <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </div>
      </div>
      <div>
        <div className="text-xl md:text-2xl font-black text-white tracking-tight drop-shadow-sm">{value}</div>
        <div className="flex items-center gap-1 mt-1 text-[9px] md:text-[11px] font-bold flex-wrap">
          {trendUp ? (
            <span className="text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-1.5  py-0.5 rounded-[4px] flex items-center gap-0.5">
              <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" /> {trend}%
            </span>
          ) : (
            <span className="text-white/50 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-[4px] flex items-center gap-0.5">
              <ChevronDown className="w-2.5 h-2.5 md:w-3 md:h-3" /> {trend}%
            </span>
          )}
          <span className="text-white/30 xl:inline hidden">vs last week</span>
        </div>
      </div>
    </motion.div>
  );
}

function InsightRow({ title, desc, icon: Icon, isWarning = false }: { title: string, desc: string, icon: any, isWarning?: boolean }) {
  return (
    <div className="flex items-start gap-3 md:gap-4 group">
      <div className={`mt-0.5 p-1.5 md:p-2 rounded-lg transition-colors duration-300 ${isWarning ? 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20' : 'bg-white/5 text-white/70 group-hover:bg-white/10'}`}>
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
      </div>
      <div className="flex-grow">
        <h4 className="text-xs md:text-sm font-bold text-white/90 mb-0.5 transition-colors group-hover:text-white">{title}</h4>
        <p className="text-[10px] md:text-xs text-white/50 leading-tight transition-colors group-hover:text-white/70">{desc}</p>
      </div>
    </div>
  );
}
