'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, Zap, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-black relative">
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
            Simple & Transparent
          </motion.div>
          
          <h1 className="text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
            Pricing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-yellow">operational scale.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Choose a plan that fits your team&apos;s needs. Scale up infrastructure as your workflows grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Starter Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col backdrop-blur-md relative overflow-hidden"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-sm text-white/50 h-10">For small teams building their first operational workflows.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">$49</span>
                <span className="text-sm text-white/50">/ mo</span>
              </div>
            </div>
            
            <div className="flex-grow space-y-4 mb-8">
              {[
                "Up to 10 active workflows",
                "10,000 tasks / month",
                "Standard API endpoints",
                "Community support"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link href="/demo" className="w-full">
              <Button className="w-full bg-white/10 text-white font-bold py-3.5 rounded-xl hover:bg-white/20 transition-colors text-sm border-transparent h-auto">
                Start Building
              </Button>
            </Link>
          </motion.div>

          {/* Scale Plan (Recommended) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/[0.02] border-2 border-brand-yellow/30 rounded-3xl p-8 flex flex-col backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(231,200,90,0.1)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-yellow text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg">
              Most Popular
            </div>
            
            <div className="mb-6 pt-2">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-yellow" />
                Scale
              </h3>
              <p className="text-sm text-white/50 h-10">For scaling startups requiring higher throughput and reliability.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">$199</span>
                <span className="text-sm text-white/50">/ mo</span>
              </div>
            </div>
            
            <div className="flex-grow space-y-4 mb-8">
              {[
                "Unlimited active workflows",
                "100,000 tasks / month",
                "Custom API endpoints",
                "Priority email support",
                "Advanced analytics dashboard"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link href="/demo" className="w-full">
              <Button className="w-full bg-brand-yellow text-black font-bold py-3.5 rounded-xl hover:bg-brand-gold transition-colors text-sm shadow-[0_0_20px_rgba(231,200,90,0.3)] h-auto">
                Start with Scale
              </Button>
            </Link>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col backdrop-blur-md relative overflow-hidden"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-white/50" />
                Enterprise
              </h3>
              <p className="text-sm text-white/50 h-10">For large organizations requiring strict compliance and SLAs.</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">Custom</span>
              </div>
            </div>
            
            <div className="flex-grow space-y-4 mb-8">
              {[
                "SOC2 Compliance",
                "Dedicated Environments",
                "Latency SLAs",
                "Full SSO Security",
                "24/7 Phone Support"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link href="/enterprise" className="w-full">
              <Button className="w-full bg-white/10 text-white font-bold py-3.5 rounded-xl hover:bg-white/20 transition-colors text-sm border-transparent h-auto">
                View Enterprise Specs
              </Button>
            </Link>
          </motion.div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
