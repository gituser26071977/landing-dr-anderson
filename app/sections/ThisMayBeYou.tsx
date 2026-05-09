"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { ArrowRight, Check, User, Users2 } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const sinaisAdultos = [
  "Pensa constantemente, mesmo quando deveria descansar",
  "Não consegue desligar mentalmente",
  "Senta-se exausto apesar do alto desempenho",
  "Luta com insônia há anos",
  "Sentimentos intensos que outros não compreendem",
  "Sensação de nunca ser completamente compreendido",
  "Suspeita que pode ter altas habilidades",
  "Ansiedade persistente que parece não ter causa óbvia",
];

const sinaisCriancas = [
  "Tem um filho com sensibilidade emocional acima do esperado",
  "Criança faz perguntas muito avançadas para a idade",
  "Dificuldade de adaptação escolar apesar da inteligência",
  "Oscilações emocionais intensas e frequentes",
  "Tédio persistente mesmo com atividades diversas",
  "Sono irregular ou não reparador",
  "Perfeccionismo que paralisa em vez de motivar",
  "Sensação de que o filho 'pensa demais para a idade'",
];

export function ThisMayBeYou() {
  return (
    <section id="identificacao" className="py-20 lg:py-32 bg-[#2D5A3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#C9A962] uppercase mb-4">
              Autoidentificação
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
              Veja se você{" "}
              <span className="text-[#C9A962]">(ou seu filho)</span>
              {" "}tem essas características.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/80 leading-relaxed">
              A primeira etapa do cuidado é reconhecer o padrão. Muitos
              pacientes chegam após anos de sofrimento silencioso, sem saber que
              seu funcionamento mental tinha um nome.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#C9A962]/20 flex items-center justify-center">
                <User className="w-6 h-6 text-[#C9A962]" />
              </div>
              <h3 className="font-heading text-2xl text-white">
                Se você é adulto
              </h3>
            </div>
            <ul className="space-y-4">
              {sinaisAdultos.map((sinal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C9A962] flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#1A1A1A]" />
                  </div>
                  <span className="text-white/90 leading-relaxed">
                    {sinal}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#C9A962]/20 flex items-center justify-center">
                <Users2 className="w-6 h-6 text-[#C9A962]" />
              </div>
              <h3 className="font-heading text-2xl text-white">
                Se você é pai ou mãe
              </h3>
            </div>
            <ul className="space-y-4">
              {sinaisCriancas.map((sinal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C9A962] flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#1A1A1A]" />
                  </div>
                  <span className="text-white/90 leading-relaxed">
                    {sinal}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <ScrollReveal delay={0.3} className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#C9A962] hover:bg-[#B8984F] text-[#1A1A1A] px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group"
          >
            Falar sobre Meu Caso
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-white/60 text-sm">
            Avaliação inicial com escuta qualificada e sem julgamento
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
