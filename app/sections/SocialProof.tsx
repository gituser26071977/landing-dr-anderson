"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { Moon, Brain, Heart, Eye, Ear } from "lucide-react";

const relatos = [
  {
    icon: Moon,
    title: "Sono de qualidade restaurado",
    description:
      "Após anos de insônia, finalmente conseguiram dormir de forma reparadora.",
  },
  {
    icon: Brain,
    title: "Redução da sobrecarga mental",
    description:
      "A sensação de 'cabeça cheia' diminuiu, trazendo mais clareza no dia a dia.",
  },
  {
    icon: Heart,
    title: "Maior clareza emocional",
    description:
      "Conseguiram entender suas oscilações em vez de serem dominadas por elas.",
  },
  {
    icon: Eye,
    title: "Ansiedade crônica reduzida",
    description:
      "O estado de alerta constante deu lugar a uma sensação de maior estabilidade.",
  },
  {
    icon: Ear,
    title: "Sentimento de ser compreendido",
    description:
      "Pela primeira vez, sentiram que um médico realmente entendia seu funcionamento.",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
              Resultados do Acompanhamento
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
              O que pacientes frequentemente{" "}
              <span className="text-[#2D5A3D]">relatam</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Cada trajetória é única, mas alguns padrões de transformação se
              repetem no consultório.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {relatos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group bg-white rounded-2xl p-6 border border-[#F0F2EE] hover:border-[#2D5A3D]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F0F2EE] group-hover:bg-[#2D5A3D] flex items-center justify-center mb-4 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[#2D5A3D] group-hover:text-white transition-colors duration-300" />
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
          <p className="font-heading text-xl sm:text-2xl text-[#1A1A1A] italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;Nem toda mente intensa precisa ser suprimida. Muitas primeiro
            precisam ser compreendidas.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
