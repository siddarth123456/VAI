'use client';

import React from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-[#FCFBF9] text-black">
      <h2 className="text-2xl font-bold font-display mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-[#111111] text-white px-6 py-3 rounded-full hover:bg-black transition-colors font-semibold"
      >
        Try again
      </button>
    </div>
  );
}
