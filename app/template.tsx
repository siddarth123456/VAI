'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Premium Top Navigation Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-yellow via-brand-amber to-brand-gold z-[9999] origin-left pointer-events-none"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ 
          scaleX: [0, 0.3, 0.7, 1],
          opacity: [1, 1, 0.8, 0]
        }}
        transition={{ 
          duration: 0.65, 
          times: [0, 0.25, 0.6, 1],
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ originX: 0 }}
      />

      {/* Main Page Transition Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.995, y: 12, filter: 'blur(2px)' }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}

