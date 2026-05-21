import type {Metadata} from 'next';
import { Inter, League_Spartan } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'VerroAI | Intelligence. Automation. Impact.',
  description: 'Real-time operational intelligence for modern businesses.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${leagueSpartan.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
