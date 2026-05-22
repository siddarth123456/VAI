import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-transparent pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 relative z-10 overflow-hidden">
      <div className="ambient-glow bg-brand-yellow/5 w-full max-w-[800px] h-[300px] top-0 left-1/2 -translate-x-1/2" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-16 md:mb-24 relative z-10">
        
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-6 text-xl md:text-2xl font-bold font-display tracking-tight text-white font-display">
            <span className="text-brand-yellow">✦</span> VerroAI
          </div>
          <p className="text-sm md:text-[15px] text-white/50 mb-6 md:mb-8 leading-relaxed font-semibold">
            The operational infrastructure for building, scaling, and managing reliable AI workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 flex-1 text-left">
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-white text-sm font-semibold mb-1 md:mb-3">System Platform</h4>
            <Link href="/platform" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">Platform Overview</Link>
            <Link href="/workflows" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">AI Workflows</Link>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-white text-sm font-semibold mb-1 md:mb-3">Company</h4>
            <Link href="/about" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">About VerroAI</Link>
            <Link href="/team" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">Our Team</Link>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-white text-sm font-semibold mb-1 md:mb-3">Contact</h4>
            <Link href="/book-demo" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">Book a Demo</Link>
            <Link href="/contact" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">Contact Team</Link>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-white text-sm font-semibold mb-1 md:mb-3">Legal</h4>
            <Link href="/" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-white/50 text-sm md:text-[15px] hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-xs md:text-sm text-white/40 font-mono">© {new Date().getFullYear()} VerroAI Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
