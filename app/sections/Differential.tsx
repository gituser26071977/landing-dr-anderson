"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { UserCheck, Ear, RefreshCw, FlaskConical, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const diferenciais = [
  {
    icon: UserCheck,
    title: "Avaliação individualizada",
    description:
      "Cada pessoa — e cada criança — é única. O plano terapêutico é construído a partir da história clínica individual, não de protocolos prontos.",
  },
  {
    icon: Ear,
    title: "Escuta qualificada",
    description:
      "Tempo e atenção para entender o que está por trás dos sintomas. Tratamentos individualizados começam com escuta verdadeira.",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento contínuo",
    description:
      "Regulação leva tempo. O tratamento é acompanhado de perto, com ajustes conforme a resposta de cada organismo.",
  },
  {
    icon: FlaskConical,
    title: "Medicina baseada em evidências",
    description:
      "Conhecimento técnico sólido combinado com experiência clínica. Ciência e humanidade no mesmo lugar.",
  },
];

export function Differential() {
  return (
    <section className="py-20 lg:py-32 bg-[#2D5A3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#C9A962] uppercase mb-4">
              Por Que Essa Abordagem
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
              O que torna esse acompanhamento{" "}
              <span className="text-[#C9A962]">diferente</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/80 leading-relaxed">
              Mentes intensas precisam de abordagens que respeitem sua
              complexidade, em vez de tentar simplificá-las.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => (
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A962] flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="font-heading text-xl font-medium text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <p className="font-heading text-2xl sm:text-3xl text-white italic leading-relaxed mb-8 max-w-3xl mx-auto">
            &ldquo;Intensidade sem regulação pode virar sobrecarga. Mas
            intensidade compreendida pode virar potência.&rdquo;
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#C9A962] hover:bg-[#B8984F] text-[#1A1A1A] px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Conversar sobre meu caso
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
