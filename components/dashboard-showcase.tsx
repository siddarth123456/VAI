'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Workflow, 
  Settings, 
  Cpu, 
  GitBranch, 
  Activity,
  ArrowRight,
  Sparkles,
  Search,
  Clock,
  ShieldAlert,
  Terminal,
  ServerCrash
} from 'lucide-react';

export function DashboardShowcase() {
  return (
    <section className="w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-12 relative z-20 bg-transparent">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-brand-yellow)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8">
          <div className="max-w-2xl px-2 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-yellow/10 border border-brand-yellow/20 text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase mb-4 md:mb-6 shadow-[0_0_15px_rgba(231,200,90,0.15)]"
            >
              <Sparkles className="w-3 h-3" />
              Platform Intelligence
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[36px] leading-[1.05] md:text-5xl lg:text-[56px] font-extrabold font-display tracking-tight text-white mb-4 md:mb-6 drop-shadow-sm"
            >
              Monitor execution in real-time.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-white/60 font-medium"
            >
              Real-time operational visibility into AI workflows, automated actions, and system health. Make executive decisions based on reliable data, not guesswork.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-auto px-2 lg:px-0"
          >
            <Link href="/analytics" className="flex-shrink-0 group flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 md:py-4 rounded-full font-bold hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full lg:w-auto text-[15px] md:text-base">
              Explore Interactive Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Dashboard UI Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden backdrop-blur-xl"
        >
          {/* Top Bar Navigation (Mock) */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-gold font-bold text-xs md:text-sm">✦</span>
                </div>
                <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
                <div className="text-xs md:text-sm font-semibold text-white truncate max-w-[100px] sm:max-w-none">Acme Corp</div>
                <div className="px-1.5 py-0.5 rounded text-[9px] md:text-[10px] font-bold bg-emerald-500/20 text-emerald-400 hidden sm:block border border-emerald-500/20">PRO</div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 max-w-md w-full ml-12">
              <div className="relative w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search workflows, nodes, insights..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm font-medium focus:outline-none focus:ring-2 ring-brand-yellow/50 transition-shadow placeholder:text-white/40 text-white"
                  readOnly
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-white/50 hover:text-white transition-colors relative">
                <Settings className="w-4 h-4 md:w-5 md:h-5" />
                <span className="absolute top-0 right-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 border border-black translate-x-1 -translate-y-1 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
              </button>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="flex flex-col xl:grid xl:grid-cols-12 min-h-[500px] md:min-h-[700px] flex-grow overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="hidden xl:flex flex-col border-r border-white/10 bg-white/[0.02] w-full col-span-2 pt-6">
              <nav className="flex flex-col gap-1 px-4">
                <SidebarItem icon={Activity} label="Overview" active />
                <SidebarItem icon={Workflow} label="Pipelines" />
                <SidebarItem icon={GitBranch} label="Workflow Nodes" />
                <SidebarItem icon={Cpu} label="Execution Queue" />
              </nav>

              <div className="mt-auto p-6">
                <div className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-xl p-4 shadow-inner">
                  <h4 className="text-xs font-bold text-brand-gold mb-1 uppercase tracking-wider">Health Status</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    <span className="text-sm font-semibold text-white">All Systems Normal</span>
                  </div>
                  <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden shadow-inner flex">
                    <div className="bg-emerald-500 w-full h-full rounded-full drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="col-span-1 border-t border-white/10 xl:border-none xl:col-span-10 flex flex-col p-4 md:p-6 lg:p-10 gap-6 md:gap-8 lg:gap-10 overflow-x-hidden">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1 md:mb-2 drop-shadow-sm">Platform Operations</h1>
                  <p className="text-white/60 text-xs md:text-sm font-medium">Monitoring 2.4M automated events over the last 24 hours.</p>
                </div>
                <div className="flex items-center gap-2">
                  <select className="bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 md:px-3 text-xs md:text-sm font-medium text-white focus:outline-none cursor-pointer shadow-sm backdrop-blur-md">
                    <option className="bg-black text-white">Last 24 Hours</option>
                    <option className="bg-black text-white">Last 7 Days</option>
                    <option className="bg-black text-white">Last 30 Days</option>
                  </select>
                </div>
              </div>

              {/* 3-col KPI Layout taking up space */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <HighlightCard 
                  label="Inbound Data Flow" 
                  value="4.2 TB/s" 
                  desc="Peak ingestion rate via 4 active Kafka streams." 
                  icon={Activity} 
                  trend="+12%" 
                />
                <HighlightCard 
                  label="Avg. Latency" 
                  value="14ms" 
                  desc="End-to-end processing delay across 35 edge regions." 
                  icon={Clock} 
                  trend="-3ms" 
                  goodTrend 
                />
                <div className="sm:hidden lg:block">
                    <HighlightCard 
                    label="Automations Fired" 
                    value="24.8M" 
                    desc="Total automated workflow step executions." 
                    icon={Sparkles} 
                    trend="+1.2M" 
                    />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Large Chart Area */}
                <div className="lg:col-span-12 xl:col-span-7 bg-white/5 border border-white/10 rounded-[16px] md:rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col shadow-sm overflow-hidden backdrop-blur-sm">
                  <div className="flex justify-between items-start md:items-center mb-6 md:mb-8">
                    <div>
                      <h3 className="font-bold text-white text-base md:text-lg drop-shadow-sm">System Load vs Accuracy</h3>
                      <p className="text-white/50 text-xs md:text-sm">System performance under varying load.</p>
                    </div>
                    <button className="p-1.5 md:p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors flex-shrink-0 border border-white/10"><BarChart3 className="w-4 h-4 text-white/80" /></button>
                  </div>

                  <div className="w-full flex-grow flex items-end gap-1.5 md:gap-2 pb-4 pt-4 md:pt-10 px-2 md:px-4 min-h-[160px] md:min-h-[250px] relative">
                    {/* Y-axis labels mock */}
                    <div className="absolute left-0 top-4 md:top-10 bottom-4 flex flex-col justify-between text-[8px] md:text-[10px] font-bold text-white/30 text-right pr-2">
                      <span>100%</span>
                      <span className="hidden md:inline">80%</span>
                      <span>60%</span>
                      <span className="hidden md:inline">40%</span>
                    </div>

                    {/* Chart bars */}
                    {[85, 92, 88, 95, 90, 84, 96, 92, 98, 94, 89, 97].map((height, i) => (
                      <div key={i} className={`flex-1 flex flex-col justify-end items-center group relative h-full ${i > 7 ? 'hidden sm:flex' : 'flex'}`}>
                        
                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity -top-6 md:-top-8 bg-white text-black text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-lg pointer-events-none z-10 border border-white/20">
                          {height}%
                        </div>

                        <div className="w-full max-w-[20px] md:max-w-[40px] bg-white/5 rounded-t-[2px] md:rounded-t-sm group-hover:bg-brand-yellow/10 transition-colors relative border-t border-white/5" style={{ height: '100%' }}>
                          <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                            className="absolute bottom-0 w-full bg-gradient-to-t from-brand-gold/80 to-brand-yellow rounded-t-[2px] md:rounded-t-sm shadow-[0_0_10px_rgba(231,200,90,0.5)]"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between border-t border-white/10 pt-3 md:pt-4 mt-2">
                    <div className="text-[10px] md:text-xs font-bold text-white/50">Load Context:</div>
                    <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-semibold">
                      <div className="flex items-center gap-1 md:gap-1.5"><span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-gold shadow-[0_0_5px_rgba(231,200,90,0.8)]"></span> <span className="text-white/80">Accuracy</span></div>
                      <div className="flex items-center gap-1 md:gap-1.5"><span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20"></span> <span className="text-white/80">QPS Vol.</span></div>
                    </div>
                  </div>
                </div>

                {/* Vertical Feed / Analytics */}
                <div className="lg:col-span-12 xl:col-span-5 flex flex-col sm:flex-row xl:flex-col gap-4 md:gap-6">
                  {/* Model Performance Gauge */}
                  <div className="bg-white/5 border border-white/10 rounded-[16px] md:rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-center relative overflow-hidden flex-1 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                      <Terminal className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={1} />
                    </div>
                    
                    <h3 className="font-bold text-white text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wider z-10 relative drop-shadow-sm">System Reliability</h3>
                    
                    <div className="flex items-end gap-3 md:gap-4 z-10 relative">
                      <div className="text-[40px] md:text-[56px] leading-[1] font-extrabold font-display tracking-tight text-white flex items-start drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        99.8<span className="text-xl md:text-2xl mt-1 md:mt-2 text-white/40">%</span>
                      </div>
                      <div className="pb-1 md:pb-2">
                        <div className="text-[10px] md:text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md mb-1">+0.4%</div>
                        <div className="text-[10px] md:text-xs font-medium text-white/50">Uptime Healthy</div>
                      </div>
                    </div>
                  </div>

                  {/* Anomaly Feed */}
                  <div className="bg-white/5 border border-white/10 rounded-[16px] md:rounded-2xl shadow-sm flex-grow flex flex-col flex-1 backdrop-blur-sm">
                    <div className="p-4 md:p-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                      <h3 className="font-bold text-white text-[10px] md:text-sm uppercase tracking-wider drop-shadow-sm">Intercepted Anomalies</h3>
                      <div className="text-[10px] md:text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.2)]">3 Today</div>
                    </div>
                    <div className="p-4 md:p-5 flex flex-col gap-4">
                      
                      <AnomalyItem 
                        icon={ShieldAlert}
                        title="Rate Limit Enforced"
                        time="12 mins ago"
                        desc="Rate limiting blocked abnormal API request volume from 3 IPs."
                        urgency="high"
                      />
                      
                      <AnomalyItem 
                        icon={ServerCrash}
                        title="Server Rotation"
                        time="3 hrs ago"
                        desc="Replica took over seamlessly during planned maintenance."
                        urgency="med"
                        last
                      />

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SidebarItem({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${active ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/5' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>
      <Icon className={`w-4 h-4 ${active ? 'text-brand-yellow drop-shadow-[0_0_5px_rgba(231,200,90,0.8)]' : 'text-white/40'}`} />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}

function HighlightCard({ label, value, desc, icon: Icon, trend, goodTrend }: { label: string, value: string, desc: string, icon: any, trend: string, goodTrend?: boolean }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[16px] md:rounded-2xl p-5 md:p-6 shadow-sm flex flex-col group hover:border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <div className="p-2 md:p-2.5 rounded-xl bg-white/5 text-white/50 group-hover:bg-brand-yellow/10 group-hover:text-brand-yellow transition-colors border border-white/5">
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className={`text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-md border ${goodTrend || trend.startsWith('+') ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.2)]' : 'bg-white/5 text-white/50 border-white/5'}`}>
          {trend}
        </div>
      </div>
      <div className="text-2xl md:text-[32px] font-black font-display tracking-tight text-white mb-1 md:mb-2 drop-shadow-sm">{value}</div>
      <div className="text-xs md:text-sm font-bold text-white mb-1">{label}</div>
      <p className="text-[10px] md:text-xs font-medium text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{desc}</p>
    </div>
  );
}

function AnomalyItem({ icon: Icon, title, time, desc, urgency, last }: { icon: any, title: string, time: string, desc: string, urgency: 'high' | 'med', last?: boolean }) {
  return (
    <div className="flex gap-3 md:gap-4 relative">
      {!last && <div className="absolute left-[9.5px] md:left-[11px] top-5 md:top-6 bottom-[-20px] w-px bg-white/10"></div>}
      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 border ${urgency === 'high' ? 'bg-red-500/20 text-red-500 border-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-orange-500/20 text-orange-400 border-orange-500/20 shadow-[0_0_8px_rgba(249,115,22,0.5)]'}`}>
        <Icon className="w-2.5 h-2.5 md:w-3 md:h-3" />
      </div>
      <div>
        <div className="flex justify-between items-center mb-0.5 md:mb-1 gap-2">
          <h4 className="text-[11px] md:text-sm font-bold text-white truncate drop-shadow-sm">{title}</h4>
          <span className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-wide flex-shrink-0">{time}</span>
        </div>
        <p className="text-[10px] md:text-xs text-white/50 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}
