'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

export function NavLink({ href, name, isActive, onClick, isMobile = false }: NavLinkProps) {
  if (isMobile) {
    return (
      <Link 
        href={href} 
        onClick={onClick} 
        className={`flex items-center justify-between px-4 py-3.5 text-sm font-mono tracking-tight font-semibold transition-all rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${
          isActive ? 'bg-black/5 text-black font-bold' : 'text-black/60 hover:text-black hover:bg-black/5'
        }`}
      >
        {name}
        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className={`relative font-mono tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-md transition-colors duration-200 ${
        isActive ? 'text-black' : 'text-black/60 hover:text-black'
      }`}
    >
      {name}
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand-gold rounded-full"
        />
      )}
    </Link>
  );
}
