"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { Sparkles, Brain, Heart, Moon, Gauge } from "lucide-react";

const caracteristicas = [
  {
    icon: Brain,
    title: "Pensamento hiperativo",
    description:
      "A mente processa constantemente, mesmo quando o corpo precisa descansar.",
  },
  {
    icon: Heart,
    title: "Intensidade emocional",
    description:
      "Emoções vividas de forma amplificada, com oscilações que outros não compreendem.",
  },
  {
    icon: Moon,
    title: "Insônia e cansaço",
    description:
      "Dificuldade para adormecer, sono não reparador e exaustão crônica.",
  },
  {
    icon: Gauge,
    title: "Sobrecarga mental",
    description:
      "Excesso de estímulos internos que geram ansiedade persistente e burnout silencioso.",
  },
];

export function WhatIsAHSD() {
  return (
    <section id="ahsd" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-5">
                Compreendendo o Funcionamento
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#1A1A1A] leading-tight mb-8">
                AH/SD significa{" "}
                <span className="text-[#2D5A3D]">
                  Altas Habilidades/Superdotação
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                Muitas pessoas não sabem que vivem com esse perfil. AH/SD não é
                apenas alto QI — é um funcionamento neurológico diferente, que
                pode trazer capacidades extraordinárias junto com desafios
                significativos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                Em adultos e crianças, o perfil de altas habilidades pode
                coexistir com{" "}
                <strong className="text-[#1A1A1A] font-medium">
                  ansiedade persistente, insônia, pensamento hiperativo,
                  perfeccionismo extremo e dificuldade de regulação emocional
                </strong>
                .
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-[#F0F2EE] rounded-2xl p-8 border-l-4 border-[#2D5A3D]">
                <p className="text-[#1A1A1A] leading-relaxed text-lg">
                  <Sparkles className="w-5 h-5 text-[#C9A962] inline-block mr-2 -mt-1" />
                  <strong>Alta capacidade não impede sofrimento.</strong>{" "}
                  Muitas vezes, a intensidade mental precisa ser compreendida
                  antes de ser tratada.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {caracteristicas.map((item, index) => (
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
                className="group bg-[#FAFAF8] rounded-2xl p-8 border border-[#F0F2EE] hover:border-[#2D5A3D]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0F2EE] group-hover:bg-[#2D5A3D] flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#2D5A3D] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-medium text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#7A7A7A] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
