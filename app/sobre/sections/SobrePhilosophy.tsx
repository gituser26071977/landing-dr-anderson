"use client";

import { ScrollReveal } from "../../components/ScrollReveal";
import { Leaf, Bike, ShieldCheck, Heart } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Vegetarianismo Ético",
    description: "Há quase 30 anos, uma escolha baseada em respeito e consciência, muito antes de se tornar tendência."
  },
  {
    icon: Bike,
    title: "Transporte Sustentável",
    description: "Mais de 10 anos de prática real e diária. A sustentabilidade não é um conceito, é um modal de vida."
  },
  {
    icon: ShieldCheck,
    title: "Coerência Prática",
    description: "A crença de que a saúde individual é indissociável da saúde do ecossistema onde vivemos."
  }
];

export function SobrePhilosophy() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="grid gap-8">
              {pillars.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-px">
                    <div className="flex items-center gap-4 mb-4">
                      <item.icon className="w-6 h-6 text-[#C9A962]" />
                      <h3 className="text-xl font-medium">{item.title}</h3>
                    </div>
                    <p className="text-white/40 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <ScrollReveal direction="right">
              <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase block mb-8">Ética & Sustentabilidade</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                Valores que <br />
                <span className="italic text-white/40">moldam a existência.</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg mb-8">
                A sustentabilidade e a ética não são apenas temas de estudo, mas pilares que sustentam cada decisão do dia a dia. Ser vegetariano há três décadas e adotar o transporte sustentável há mais de dez anos são reflexos de um compromisso real com o futuro.
              </p>
              <div className="flex items-center gap-2 text-[#C9A962]/60 italic text-sm">
                 <Heart className="w-4 h-4 fill-current" />
                 <span>Prática real, coerência inegociável.</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
