"use client";

import Image from "next/image";
import { ScrollReveal } from "../components/ScrollReveal";
import { Stethoscope, Microscope, HeartPulse, Lightbulb, Heart, ClipboardCheck, Users, GraduationCap, Activity } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const credenciais = [
  {
    icon: Stethoscope,
    text: "Mais de 20 anos de experiência médica",
  },
  {
    icon: Activity,
    text: "Atuação em terapia intensiva e medicina hospitalar",
  },
  {
    icon: Microscope,
    text: "Experiência em ultrassonografia e diagnóstico",
  },
  {
    icon: GraduationCap,
    text: "Pós-graduações em Cannabis Medicinal",
  },
  {
    icon: Lightbulb,
    text: "Abordagem integrativa baseada em evidências",
  },
  {
    icon: Heart,
    text: "Escuta humanizada e avaliação individualizada",
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
                evidências científicas e acolhimento humanizado. Minha trajetória
                inclui atuação em terapia intensiva, ultrassonografia e medicina
                multidisciplinar — uma base técnica sólida que sustenta cada
                decisão clínica.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                Há outra dimensão que define minha prática: também sou uma pessoa
                com altas habilidades e superdotação. Vivi por décadas os desafios
                desse perfil. A intensidade mental. A dificuldade de desacelerar.
                O sono que não restaura. Isso me permite oferecer uma escuta que
                reconhece a complexidade antes de tentar simplificá-la.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                O objetivo não é apenas tratar sintomas — é devolver qualidade de
                vida. Cada paciente carrega uma história clínica única, e cada
                tratamento é construído a partir dela.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#2D5A3D] hover:bg-[#4A7C5C] text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
              >
                Agendar Consulta
              </a>
              <a
                href="/sobre"
                className="inline-flex items-center justify-center border border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
              >
                Conhecer Trajetória Completa
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2} className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/Eu_Apenas_Eu.png"
                  alt="Dr. Anderson Holzwarth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#F0F2EE] rounded-2xl -z-10 translate-x-4 translate-y-4" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#C9A962] rounded-2xl -z-10 -translate-x-2 -translate-y-2" />
              
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
          </div>
        </div>
      </div>
    </section>
  );
}
