"use client";

import { ScrollReveal } from "../components/ScrollReveal";
import { Leaf, Moon, Heart, Brain, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const indicacoes = [
  {
    icon: Brain,
    title: "Ansiedade",
    description:
      "Modulação da resposta de alarme constante em perfis clínicos selecionados, como coadjuvante.",
  },
  {
    icon: Moon,
    title: "Insônia",
    description:
      "Promoção de sono mais reparador quando há indicação individualizada e acompanhamento médico.",
  },
  {
    icon: Heart,
    title: "Regulação emocional",
    description:
      "Auxílio na suavização de oscilações intensas, como ferramenta complementar ao tratamento principal.",
  },
];

export function Cannabis() {
  return (
    <section id="cannabis" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <ScrollReveal>
              <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
                Uma Ferramenta Entre Outras
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
                Cannabis medicinal: quando clinicamente indicada
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xl text-[#2D5A3D] font-medium mb-6">
                Não é para todos, mas pode ser um dos pilares do manejo
                farmacológico.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                A cannabis medicinal pode fazer parte do tratamento quando há
                indicação clínica adequada. Minha atuação nessa área é
                estritamente baseada em evidências científicas e em mais de duas
                décadas de prática médica.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                É importante deixar claro: a cannabis{" "}
                <strong className="text-[#1A1A1A] font-medium">
                  não é uma solução única
                </strong>
                . Não é indicada para todos os pacientes, e muito menos
                apresentada como resposta milagrosa.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                Quando indicada, é prescrita de forma individualizada, com
                acompanhamento contínuo e ajustes progressivos. Quando não é a
                melhor opção, o tratamento segue com outras ferramentas
                igualmente válidas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 group"
              >
                Saber Mais sobre Indicações
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-[#FAFAF8] rounded-2xl p-8 border border-[#F0F2EE]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#2D5A3D] flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl text-[#1A1A1A]">
                  Em casos selecionados
                </h3>
              </div>

              <div className="space-y-6">
                {indicacoes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0F2EE] flex items-center justify-center mt-0.5">
                      <item.icon className="w-5 h-5 text-[#2D5A3D]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1A1A1A] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#7A7A7A]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#F0F2EE]">
                <p className="text-sm text-[#7A7A7A] leading-relaxed">
                  A decisão pelo uso de cannabis medicinal é sempre tomada após
                  avaliação completa e discussão transparente sobre riscos,
                  benefícios e alternativas disponíveis.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
