"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { ArrowRight, MessageCircle, CalendarCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="py-20 lg:py-32 bg-gradient-to-br from-[#FAFAF8] to-[#F0F2EE] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#2D5A3D] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#C9A962] blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-normal text-[#1A1A1A] leading-tight mb-8">
            Você passou anos tentando{" "}
            <span className="text-[#2D5A3D]">funcionar melhor</span>.
            <br className="hidden sm:block" /> Talvez agora seja hora de
            entender como sua mente{" "}
            <span className="text-[#2D5A3D]">realmente funciona</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-xl sm:text-2xl text-[#4A4A4A] font-medium mb-4">
            Atendimento para adultos e crianças com AH/SD
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg text-[#7A7A7A] leading-relaxed mb-10 max-w-2xl mx-auto">
            A avaliação é conduzida com escuta qualificada, sem pressa e com
            orientação individualizada. O primeiro passo é simples: uma
            conversa.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D5A3D] hover:bg-[#4A7C5C] text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 group flex items-center justify-center shadow-lg"
              >
                <CalendarCheck className="mr-2 w-5 h-5" />
                Agendar Avaliação
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#7A7A7A]">
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5" />
              <span>Presencial em Aracaju, SE</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-[#D4D4D4]" />
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Consultas online disponíveis</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
