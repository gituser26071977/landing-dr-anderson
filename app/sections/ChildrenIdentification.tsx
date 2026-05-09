"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  MessageCircle,
  HelpCircle,
  HeartCrack,
  Frown,
  School,
  Smile,
  Moon,
  Flame,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const sinaisCriancas = [
  {
    icon: MessageCircle,
    title: "Pensamento muito avançado para a idade",
    description:
      "Perguntas e raciocínios que surpreendem adultos, muitas vezes difíceis de acompanhar ou responder.",
  },
  {
    icon: HelpCircle,
    title: "Questionamentos constantes",
    description:
      "Curiosidade intensa que não se satisfaz com respostas simples ou genéricas. Sede insaciável de compreensão.",
  },
  {
    icon: HeartCrack,
    title: "Alta sensibilidade emocional",
    description:
      "Reações fortes a situações que outras crianças parecem levar de forma mais leve. Dor intensa com rejeição.",
  },
  {
    icon: Frown,
    title: "Ansiedade ou irritabilidade",
    description:
      "Humores tensos, preocupações precoces ou explosões emocionais aparentemente desproporcionais.",
  },
  {
    icon: School,
    title: "Dificuldade de adaptação escolar",
    description:
      "Tédio, desinteresse ou conflitos com a rotina e o ritmo da sala de aula, apesar da clara inteligência.",
  },
  {
    icon: Smile,
    title: "Tédio frequente",
    description:
      "Mesmo com atividades diversas, a criança parece desligada ou insatisfeita, buscando constantemente novidade.",
  },
  {
    icon: Moon,
    title: "Sono irregular",
    description:
      "Dificuldade para adormecer, acordar durante a noite ou não se sentir descansado mesmo com horas adequadas.",
  },
  {
    icon: Flame,
    title: "Intensidade emocional acima do esperado",
    description:
      "Gosta com intensidade, se frustra com intensidade, sente tudo de forma amplificada.",
  },
];

export function ChildrenIdentification() {
  return (
    <section id="criancas" className="py-20 lg:py-32 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
              Sinais em Crianças e Adolescentes
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
              Se você é pai ou mãe,{" "}
              <span className="text-[#2D5A3D]">
                pode reconhecer isso no seu filho:
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Nem sempre é comportamento — muitas vezes é um funcionamento
              diferente que precisa de compreensão, não apenas de correção.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sinaisCriancas.map((item, index) => (
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
              className="group bg-white rounded-2xl p-6 border border-[#F0F2EE] hover:shadow-lg hover:border-[#2D5A3D]/20 transition-all duration-300"
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#C9A962] rounded-2xl px-8 py-6">
            <p className="font-heading text-xl sm:text-2xl text-[#1A1A1A]">
              Nem sempre é comportamento — muitas vezes é funcionamento
              diferente.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] hover:bg-[#333333] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap"
            >
              Orientação para Pais
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
