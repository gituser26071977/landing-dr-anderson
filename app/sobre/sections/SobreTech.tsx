"use client";

import { ScrollReveal } from "../../components/ScrollReveal";
import { Code2, Cpu, Bot, Zap, Network, Database } from "lucide-react";

const techItems = [
  { icon: Code2, label: "Desenvolvimento Fullstack" },
  { icon: Bot, label: "Arquitetura de Agentes IA" },
  { icon: Cpu, label: "Automação de Processos" },
  { icon: Network, label: "Integração de Sistemas" },
  { icon: Database, label: "Soluções Tech para Saúde" },
  { icon: Zap, label: "Inovação Digital" },
];

export function SobreTech() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Matrix-like subtle background effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C9A962_1px,transparent_1px),linear-gradient(to_bottom,#C9A962_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal>
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase block mb-8">Tecnologia & IA</span>
            <h2 className="font-heading text-4xl md:text-6xl font-light mb-8">
              A arquitetura da <span className="text-[#C9A962]">inovação.</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg max-w-2xl mx-auto">
              Como desenvolvedor e especialista em IA, busco a ponte entre a lógica computacional e a complexidade biológica, criando ferramentas que amplificam a capacidade de cuidar.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {techItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="flex flex-col items-center p-10 border border-white/5 bg-white/[0.01] hover:border-[#C9A962]/30 transition-all duration-500">
                <item.icon className="w-10 h-10 text-[#C9A962] mb-6 stroke-[1px]" />
                <span className="text-sm tracking-widest uppercase text-white/60 text-center">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Code snippet decoration */}
        <div className="mt-24 p-8 bg-white/[0.02] border border-white/5 rounded-px font-mono text-[10px] md:text-xs text-white/30 overflow-hidden">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <div className="w-2 h-2 rounded-full bg-green-500/40" />
          </div>
          <code>
            {`class MedicalAI {
  constructor(specialty) {
    this.specialty = 'AH/SD';
    this.empathyLevel = Infinity;
  }
  
  analyze(patientData) {
    return integrate(biometrics, intuition, ai_models);
  }
}`}
          </code>
        </div>
      </div>
    </section>
  );
}
