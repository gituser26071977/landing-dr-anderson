"use client";

import { ScrollReveal } from "../../components/ScrollReveal";
import { Mic, Presentation, Share2, GraduationCap } from "lucide-react";

const teachingItems = [
  {
    icon: GraduationCap,
    title: "Professor",
    description: "Compartilhando conhecimento clínico e técnico em pós-graduações e cursos especializados."
  },
  {
    icon: Presentation,
    title: "Palestrante",
    description: "Abordando temas como Cannabis Medicinal, IA na Saúde e Altas Habilidades em eventos nacionais."
  },
  {
    icon: Share2,
    title: "Educação Digital",
    description: "Criação de conteúdo técnico e estratégico para profissionais e pacientes."
  }
];

export function SobreTeaching() {
  return (
    <section className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <ScrollReveal>
              <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase block mb-8">Ensino & Comunicação</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                Compartilhar é <br />
                <span className="italic text-white/40">expandir a ciência.</span>
              </h2>
              <div className="space-y-12 mt-16">
                {teachingItems.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C9A962]/50 transition-colors">
                      <item.icon className="w-5 h-5 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-white/40 leading-relaxed max-w-md">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full relative">
            <ScrollReveal direction="right">
              <div className="relative aspect-video rounded-px overflow-hidden bg-white/[0.03] border border-white/5 flex items-center justify-center group">
                <Mic className="w-20 h-20 text-white/5 group-hover:text-[#C9A962]/20 transition-colors duration-1000" />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <div className="text-[10px] tracking-widest uppercase text-[#C9A962] mb-2">Public Speaking</div>
                  <div className="text-lg font-light italic">"A tecnologia é o estetoscópio do futuro."</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
