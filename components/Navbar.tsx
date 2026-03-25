'use client';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030303]/70 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#7000ff] flex items-center justify-center group-hover:glow transition-all duration-500">
            <Code2 className="text-black w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-widest">INKAMI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#services" className="hover:text-[#00f0ff] transition-colors">Services</Link>
          <Link href="#contact" className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-[#00f0ff] hover:text-black transition-all duration-300 border border-white/10 hover:border-[#00f0ff]">
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
