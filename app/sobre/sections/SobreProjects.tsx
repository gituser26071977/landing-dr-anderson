"use client";

import { ScrollReveal } from "../../components/ScrollReveal";
import { Hammer, Zap, Trees, Ship, Layers, PencilRuler } from "lucide-react";
import Image from "next/image";

const hobbies = [
  { icon: Trees, label: "Cultivo Orgânico" },
  { icon: Ship, label: "Construção Naval" },
  { icon: Hammer, label: "Marcenaria & Serralheria" },
  { icon: Zap, label: "Eletrônica & IoT" },
  { icon: Layers, label: "Design & Impressão 3D" },
  { icon: PencilRuler, label: "Maker Culture" },
];

export function SobreProjects() {
  return (
    <section className="py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <ScrollReveal>
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase block mb-8">Oficina & Criação</span>
            <h2 className="font-heading text-4xl md:text-6xl font-light mb-8">
              Mente inquienta, <span className="text-white/40 italic">mãos ocupadas.</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg max-w-2xl mx-auto">
              Fora do consultório e do terminal, a curiosidade toma forma física. Da marcenaria ao design naval, cada projeto é um exercício de solução de problemas e expressão criativa.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {hobbies.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05} direction="up">
              <div className="p-8 border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-[#C9A962]/20 transition-all duration-300">
                <item.icon className="w-6 h-6 text-[#C9A962]/60" />
                <span className="text-[10px] tracking-widest uppercase text-white/40 text-center leading-tight">
                  {item.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mosaic-like gallery placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 aspect-[21/9]">
          <ScrollReveal className="md:col-span-2 relative overflow-hidden bg-white/5 group">
             <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <PencilRuler className="w-12 h-12" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <span className="text-xs tracking-widest uppercase text-[#C9A962]">Project Lab 01</span>
             </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="relative overflow-hidden bg-white/5 group">
             <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <Trees className="w-10 h-10" />
             </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="relative overflow-hidden bg-white/5 group">
             <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <Ship className="w-10 h-10" />
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
