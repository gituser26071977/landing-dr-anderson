"use client";

import { ScrollReveal } from "../../components/ScrollReveal";
import { Award, BookOpen, Activity, HeartPulse } from "lucide-react";

const formações = [
  {
    title: "Cannabis Medicinal",
    description: "Dupla pós-graduação e pesquisa contínua sobre aplicações terapêuticas e modulação do sistema endocanabinoide.",
    icon: Award,
  },
  {
    title: "AH/SD",
    description: "Especialização em Altas Habilidades e Superdotação, com foco em diagnóstico e regulação emocional.",
    icon: BookOpen,
  },
  {
    title: "Medicina de Alta Complexidade",
    description: "Experiência sólida em Terapia Intensiva, Ultrassonografia e Intervenção orientada por imagem.",
    icon: Activity,
  },
  {
    title: "Visão Psicanalítica",
    description: "Formação em Psicanálise, trazendo profundidade à compreensão da psique e dos processos subjetivos.",
    icon: HeartPulse,
  },
];

export function SobreMedicine() {
  return (
    <section className="py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase block mb-8">Clínica & Ciência</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                Uma visão clínica <br />
                <span className="text-white/40 italic">profunda e integrada.</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg mb-12">
                A prática médica do Dr. Anderson não se limita a sintomas isolados. É uma abordagem que une a precisão da tecnologia de imagem à sensibilidade da escuta analítica, sempre fundamentada nas evidências mais recentes da ciência canabinoide e neurodiversidade.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {formações.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 rounded-px">
                  <item.icon className="w-8 h-8 text-[#C9A962] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
