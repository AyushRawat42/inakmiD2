'use client';
import { motion } from 'motion/react';
import { Code, Headphones, TrendingUp, GraduationCap, Database, PenTool } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Custom IT Solutions",
    description: "Tailored software development to solve complex business challenges and drive digital transformation."
  },
  {
    icon: Headphones,
    title: "BPO & Call Centers",
    description: "Robust inbound and outbound call centers handling international lead generation and back-office support."
  },
  {
    icon: Database,
    title: "Bulk Data Processing",
    description: "Efficient management of large-scale data, including comprehensive payroll management systems."
  },
  {
    icon: PenTool,
    title: "Web & Graphic Design",
    description: "Stunning, user-centric designs that elevate your brand identity and digital presence."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to expand your reach, engage audiences, and drive global growth."
  },
  {
    icon: GraduationCap,
    title: "Global IT Education",
    description: "Empowering the next generation of tech leaders with world-class IT education and training."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">Expertise</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Comprehensive solutions designed to scale your operations and accelerate innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#00f0ff]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00f0ff]/50 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
