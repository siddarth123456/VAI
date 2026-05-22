'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FCFBF9] text-black">
      <h2 className="text-4xl font-bold font-display mb-4">404 - Not Found</h2>
      <p className="text-gray-600 mb-8">Could not find requested resource</p>
      <Link href="/" className="bg-[#111111] text-white px-6 py-3 rounded-full hover:bg-black transition-colors font-semibold">
        Return Home
      </Link>
    </div>
  );
}
