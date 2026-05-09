"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "../components/ScrollReveal";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { Heart, Stethoscope, Users, ClipboardCheck } from "lucide-react";

const diferenciais = [
  { icon: Heart, text: "Atendimento humanizado e individualizado" },
  { icon: Stethoscope, text: "Prescrição baseada em evidências científicas" },
  { icon: ClipboardCheck, text: "Acompanhamento contínuo do tratamento" },
  { icon: Users, text: "Equipe multidisciplinar especializada" },
];

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/1000007193.jpg"
                alt="Dr. Anderson Holzwarth em atendimento humanizado"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F0F2EE] rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#C9A962] rounded-2xl -z-10" />
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
                Sobre o Médico
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
                Um médico que coloca o{" "}
                <span className="text-[#2D5A3D]">acolhimento</span> no centro
                do tratamento
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                Dr. Anderson Holzwarth é médico especialista em cannabis
                medicinal, dedicado a oferecer tratamentos personalizados que
                combinam evidências científicas com um cuidado humano e
                atencioso. Sua abordagem vai além da prescrição: ele acredita em
                construir uma relação de confiança com cada paciente, ouvindo
                suas necessidades e acompanhando de perto cada etapa do
                tratamento.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4 mb-10">
                {diferenciais.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0F2EE] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#2D5A3D]" />
                    </div>
                    <span className="text-[#4A4A4A]">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#F0F2EE]">
                <AnimatedCounter end={20} suffix="+" label="Anos de Experiência" />
                <AnimatedCounter end={98} suffix="%" label="Satisfação" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
