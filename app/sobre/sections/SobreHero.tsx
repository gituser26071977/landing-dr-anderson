"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "../../components/ScrollReveal";

export function SobreHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#2D5A3D]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#C9A962]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-8">
              Trajetória Multidisciplinar
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-light leading-[1.1] mb-8">
              A medicina sempre foi apenas <span className="italic text-white/50 text-4xl md:text-6xl block mt-2">parte do processo.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-xl mb-12">
              Médico, pesquisador, desenvolvedor de sistemas, especialista em IA e criador multidisciplinar. Entusiasta de sustentabilidade com décadas de prática real.
            </p>
          </motion.div>

          <div className="flex gap-12 border-t border-white/10 pt-12">
            <div>
              <span className="block text-2xl font-light mb-1">20+</span>
              <span className="text-[10px] tracking-widest uppercase text-white/40">Anos de Medicina</span>
            </div>
            <div>
              <span className="block text-2xl font-light mb-1">15+</span>
              <span className="text-[10px] tracking-widest uppercase text-white/40">Linguagens & Tecnologias</span>
            </div>
            <div>
              <span className="block text-2xl font-light mb-1">∞</span>
              <span className="text-[10px] tracking-widest uppercase text-white/40">Projetos Ativos</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto w-full group"
        >
          <div className="absolute inset-0 border border-[#C9A962]/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
          <div className="relative h-full w-full overflow-hidden grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-700">
            <Image
              src="/images/Eu_Apenas_Eu.png"
              alt="Dr. Anderson Holzwarth"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative tech UI element */}
          <div className="absolute -bottom-8 -left-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 hidden md:block">
            <div className="flex gap-4">
              <div className="w-1 h-8 bg-[#C9A962]" />
              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase">System Status</div>
                <div className="text-xs font-mono text-[#C9A962]">INTEGRATED_MODE: ACTIVE</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
