"use client";

import Image from "next/image";
import { ScrollReveal } from "../components/ScrollReveal";
import { Stethoscope, Microscope, HeartPulse, Lightbulb, Heart, ClipboardCheck, Users } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const credenciais = [
  {
    icon: Stethoscope,
    text: "Mais de 20 anos de experiência médica",
  },
  {
    icon: Microscope,
    text: "Pesquisador em cannabis medicinal e AH/SD",
  },
  {
    icon: HeartPulse,
    text: "Vivência pessoal com altas habilidades e superdotação",
  },
  {
    icon: Lightbulb,
    text: "Abordagem integrativa que considera mente, emoção e sono",
  },
];

export function Authority() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
                Quem Cuida
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
                Um médico que conhece essa intensidade{" "}
                <span className="text-[#2D5A3D]">por dentro e por fora</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                Sou médico há mais de 20 anos. Atuo com abordagem baseada em
                evidências científicas e sou pesquisador na área. Mas há outra
                dimensão que define minha prática: também sou uma pessoa com
                altas habilidades e superdotação.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                Vivi por décadas os desafios desse perfil. A intensidade
                mental. A sensação de inadequação em ambientes comuns. A
                dificuldade de desacelerar. O sono que não restaura. Aprendi na
                pele que mentes assim precisam de abordagens diferentes —
                técnicas, sim, mas também uma escuta que reconheça a
                complexidade antes de tentar simplificá-la.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                Há menos de um ano, iniciei uma abordagem integrativa
                específica para adultos e crianças com AH/SD. Para mim, isso
                representou um novo começo de vida. Hoje, ofereço esse mesmo
                tipo de acolhimento e estrutura clínica para quem vive o que eu
                também vivi — e para os pais que buscam orientação.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#2D5A3D] hover:bg-[#4A7C5C] text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
              >
                Conhecer Minha História
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2} className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/about_doctor.png"
                  alt="Dr. Anderson Holzwarth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#F0F2EE] rounded-2xl -z-10 translate-x-4 translate-y-4" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#C9A962] rounded-2xl -z-10 -translate-x-2 -translate-y-2" />
              
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg z-20 border border-[#F0F2EE]">
                <div className="space-y-4">
                  {credenciais.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F0F2EE] flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-[#2D5A3D]" />
                      </div>
                      <span className="text-xs font-medium text-[#4A4A4A] whitespace-nowrap">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="mt-12 lg:mt-16 bg-[#2D5A3D] rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                {credenciais.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A962] flex items-center justify-center mt-0.5">
                      <item.icon className="w-5 h-5 text-[#1A1A1A]" />
                    </div>
                    <span className="text-white/90 text-lg leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="font-heading text-xl text-white italic leading-relaxed">
                  &ldquo;Alta capacidade não impede sofrimento. Muitas vezes,
                  torna o sofrimento silencioso.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
