"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-[#FAFAF8] to-[#F0F2EE] pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#2D5A3D] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] rounded-full bg-[#4A7C5C] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6"
            >
              <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.25em] text-[#4A7C5C] uppercase mb-6">
                Atendimento Médico Especializado
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1A1A1A] leading-[1.15] tracking-tight">
                Você não precisa continuar vivendo em estado de{" "}
                <span className="text-[#2D5A3D]">exaustão</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="text-base sm:text-lg lg:text-xl text-[#4A4A4A] leading-relaxed mb-4"
            >
              Tratamentos individualizados com escuta humanizada, ciência e
              cannabis medicinal quando clinicamente indicada.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-base sm:text-lg text-[#7A7A7A] leading-relaxed mb-10"
            >
              Atendimento médico para adultos e crianças com altas habilidades,
              ansiedade persistente, insônia e intensidade emocional. Cada
              paciente carrega uma história clínica única — e cada tratamento
              começa com escuta verdadeira.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D5A3D] hover:bg-[#4A7C5C] text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group flex items-center justify-center"
              >
                Agendar Avaliação
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => scrollToSection("#identificacao")}
                className="border-2 border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
              >
                Ver os Sinais
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero_alt_2.png" 
                alt="Dr. Anderson Holzwarth" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A3D]/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#C9A962]/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#4A7C5C]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("#identificacao")}
          className="flex flex-col items-center text-[#7A7A7A] hover:text-[#2D5A3D] transition-colors"
          aria-label="Rolar para baixo"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
