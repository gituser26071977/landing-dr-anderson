"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { Heart, Brain, Moon, Sparkles, Baby, School, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const pilaresAdultos = [
  {
    icon: Heart,
    title: "Regulação emocional",
    description:
      "Entender os picos e quedas como parte do funcionamento, não como falha pessoal. Desenvolver estratégias de estabilização.",
  },
  {
    icon: Brain,
    title: "Manejo da ansiedade",
    description:
      "Reduzir a carga mental constante sem apagar a capacidade de pensamento. Tratar a ansiedade como sintoma, não como identidade.",
  },
  {
    icon: Sparkles,
    title: "Organização mental",
    description:
      "Estruturar a multiplicidade de ideias em fluxos possíveis, diminuindo a paralisia e a sensação de sobrecarga.",
  },
  {
    icon: Moon,
    title: "Regulação do sono",
    description:
      "Tratar a insônia e o sono não reparador como peça central da regulação. O sono é a base de toda estabilidade emocional.",
  },
];

const pilaresCriancas = [
  {
    icon: Baby,
    title: "Orientação aos pais",
    description:
      "Explicação clara sobre o funcionamento da criança e como apoiá-la no dia a dia, sem sobreproteção nem exigência excessiva.",
  },
  {
    icon: Heart,
    title: "Manejo emocional",
    description:
      "Estratégias para ajudar a criança a lidar com a intensidade emocional de forma saudável e compreendida.",
  },
  {
    icon: School,
    title: "Suporte ao desenvolvimento",
    description:
      "Acompanhamento do desenvolvimento cognitivo, social e escolar de forma integrada, respeitando o ritmo individual.",
  },
];

export function Proposal() {
  return (
    <section id="proposta" className="py-20 lg:py-32 bg-[#F0F2EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
              Proposta Terapêutica
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
              O foco não é corrigir —{" "}
              <span className="text-[#2D5A3D]">
                é ajudar a regular, compreender e viver melhor com essa
                intensidade
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Cada tratamento é construído a partir da história individual. Não
              existem protocolos rígidos para mentes que funcionam fora do
              padrão.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <h3 className="font-heading text-2xl text-[#1A1A1A] mb-6 text-center">
            Para Adultos
          </h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pilaresAdultos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#F0F2EE]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F0F2EE] flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#2D5A3D]" />
              </div>
              <h4 className="font-heading text-xl font-medium text-[#1A1A1A] mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-[#7A7A7A] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <h3 className="font-heading text-2xl text-[#1A1A1A] mb-6 text-center">
            Para Crianças e Adolescentes
          </h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {pilaresCriancas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#F0F2EE]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F0F2EE] flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#2D5A3D]" />
              </div>
              <h4 className="font-heading text-xl font-medium text-[#1A1A1A] mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-[#7A7A7A] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#2D5A3D] hover:bg-[#4A7C5C] text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group"
          >
            Conhecer a Proposta Completa
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
