"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Brain,
  Zap,
  Frown,
  Target,
  Users,
  FrownIcon,
  Moon,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const sinais = [
  {
    icon: Brain,
    title: "Mente acelerada o tempo todo",
    description:
      "A cabeça não para, mesmo quando o corpo precisa descansar. Pensamentos em loop constante.",
  },
  {
    icon: Zap,
    title: "Dificuldade de desligar",
    description:
      "Ideias, análises e preocupações continuam em loop, especialmente à noite, roubando o sono.",
  },
  {
    icon: Frown,
    title: "Ansiedade persistente",
    description:
      "Pode não ser visível aos outros, mas está presente como um ruído de fundo contínuo e exaustivo.",
  },
  {
    icon: Target,
    title: "Perfeccionismo paralisante",
    description:
      "Padrões altos que geram paralisia, culpa e a sensação de nunca estar bom o suficiente.",
  },
  {
    icon: Users,
    title: "Sensação de não pertencimento",
    description:
      "Mesmo em meio a pessoas, há uma distância difícil de nomear. Como se ninguém realmente entendesse.",
  },
  {
    icon: FrownIcon,
    title: "Oscilações emocionais intensas",
    description:
      "Alternância entre entusiasmo profundo e esgotamento silencioso, sem aviso aparente.",
  },
  {
    icon: Moon,
    title: "Insônia crônica",
    description:
      "Dificuldade para dormir, acordar durante a noite ou sensação de cansaço mesmo após horas de sono.",
  },
  {
    icon: RotateCcw,
    title: "Procrastinação multifatorial",
    description:
      "Não é preguiça. É sobrecarga cognitiva, excesso de possibilidades, medo do erro e autoexigência colidindo.",
  },
  {
    icon: Trophy,
    title: "Alto desempenho com sofrimento interno",
    description:
      "A máscara da produtividade esconde o custo emocional real. Exaustão camuflada por resultados.",
  },
];

export function Identification() {
  return (
    <section id="identificacao" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
              Sinais em Adultos
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
              Se você é adulto com AH/SD,{" "}
              <span className="text-[#2D5A3D]">pode estar vivendo isso:</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Esses padrões não são falta de disciplina. São sinais de um
              funcionamento mental intenso que precisa ser compreendido.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sinais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-[#FAFAF8] rounded-2xl p-6 border border-[#F0F2EE] hover:shadow-lg hover:border-[#2D5A3D]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F0F2EE] group-hover:bg-[#2D5A3D] flex items-center justify-center mb-4 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#2D5A3D] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-medium text-[#1A1A1A] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#7A7A7A] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#2D5A3D] rounded-2xl px-8 py-6">
            <p className="font-heading text-xl sm:text-2xl text-white">
              Isso não é falta de disciplina. É um padrão.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A962] hover:bg-[#B8984F] text-[#1A1A1A] px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap"
            >
              Entender Meu Caso
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
