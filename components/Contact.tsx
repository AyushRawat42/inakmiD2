'use client';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">Future Together</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Ready to transform your business? Reach out to our team of experts to discuss your next big project.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Email Us</h4>
                  <p className="text-lg font-medium">contact@inkamiglobal.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Call Us</h4>
                  <p className="text-lg font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Headquarters</h4>
                  <p className="text-lg font-medium">Global Tech Park, Innovation Block<br/>Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7000ff]/10 blur-[80px] rounded-full pointer-events-none" />

            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">First Name</label>
                  <input type="text" className="w-full bg-[#030303] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Last Name</label>
                  <input type="text" className="w-full bg-[#030303] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Email Address</label>
                <input type="email" className="w-full bg-[#030303] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Message</label>
                <textarea rows={4} className="w-full bg-[#030303] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all resize-none" placeholder="How can we help you?" />
              </div>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#7000ff] text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
