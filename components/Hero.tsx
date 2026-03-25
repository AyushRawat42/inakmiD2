'use client';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7000ff]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#00f0ff] text-xs md:text-sm font-medium mb-8 tracking-widest uppercase">
            IP-Driven Technology & BPO
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[1.1]">
            Innovating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">
              Global Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Inkami Global Services delivers comprehensive IT solutions, robust BPO operations, and strategic digital marketing to empower businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-[#00f0ff] transition-all duration-300 flex items-center justify-center gap-2 group">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
