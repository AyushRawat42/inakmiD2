import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#7000ff] flex items-center justify-center">
            <Code2 className="text-black w-4 h-4" />
          </div>
          <span className="font-display font-bold tracking-widest text-lg">INKAMI</span>
        </div>
        <p className="text-white/40 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Inkami Global Services Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
