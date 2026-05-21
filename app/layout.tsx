import type {Metadata} from 'next';
import { Inter, League_Spartan, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'VerroAI | Enterprise AI Infrastructure & Automations',
  description: 'VerroAI provides deterministic AI infrastructure and secure execution environments for enterprise operations. Built for throughput, compliant by design, and peered with leading cloud networks.',
  openGraph: {
    title: 'VerroAI | Enterprise AI Infrastructure',
    description: 'Deterministic AI infrastructure and secure execution environments for enterprise operations.',
    url: 'https://verro.ai',
    siteName: 'VerroAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VerroAI - Enterprise AI Infrastructure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VerroAI | Enterprise AI Infrastructure',
    description: 'Deterministic AI infrastructure and secure execution environments for enterprise operations.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn(leagueSpartan.variable, "font-sans", geist.variable)}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
