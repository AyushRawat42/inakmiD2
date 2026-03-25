import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Inkami Global Services',
  description: 'IP-driven technology and BPO company.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#030303] text-white selection:bg-[#00f0ff] selection:text-black`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
