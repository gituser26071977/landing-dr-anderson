"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

const featuredResearch = {
  title: "Hipertensão Primária: Estudo Clínico Randomizado",
  source: "European Heart Journal, 2025",
  summary: "Pesquisa com 70 pacientes mostrou redução média de 4 mmHg na pressão sistólica e 3 mmHg na diastólica após 5 semanas de uso de CBD, com excelente tolerabilidade.",
  highlight: "Redução de 4 mmHg sistólica / 3 mmHg diastólica",
};

const researches = [
  { title: "Fibromialgia e Dor Crônica", source: "Revista Contribuciones, 2025", description: "Cannabis mostrou eficácia na redução da hiperalgesia e melhora da qualidade de vida em pacientes com fibromialgia, com menos efeitos colaterais que tratamentos convencionais.", tags: ["Dor Crônica", "Fibromialgia"] },
  { title: "Ansiedade Generalizada", source: "Lumen et Virtus, 2025", description: "Revisão integrativa confirmou que CBD atua modulando o sistema endocanabinoide, promovendo redução da ansiedade, melhora do humor e da resposta ao estresse.", tags: ["Ansiedade", "Saúde Mental"] },
  { title: "Endometriose - Estudo de Longo Prazo", source: "Reino Unido, 2025", description: "Acompanhamento de 18 meses com 63 pacientes demonstrou alívio significativo das dores e melhora da qualidade de vida.", tags: ["Endometriose", "Dor Pélvica"] },
  { title: "Dependência de Crack", source: "UnB / International Journal of Mental Health and Addiction, 2024", description: "Estudo pioneiro no Brasil mostrou CBD seguro e tolerável, com desempenho melhor na redução do uso e melhora da autoavaliação de saúde.", tags: ["Dependência Química", "Crack"] },
  { title: "Cessação do Tabagismo", source: "Morgan et al. / Cheeks et al., 2024", description: "Fumantes que usaram CBD reduziram em até 40% o consumo de cigarros em uma semana, com diminuição dos sintomas físicos da abstinência.", tags: ["Tabagismo", "Abstinência"] },
  { title: "TDAH", source: "TJRJ / Revisão Sistemática, 2025", description: "Pesquisas em andamento indicam potencial terapêutico dos canabinoides como coadjuvante no tratamento do TDAH.", tags: ["TDAH", "Neurodesenvolvimento"] },
];

export function Research() {
  return (
    <section id="pesquisas" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">Evidências Científicas</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
              As últimas pesquisas comprovam os benefícios da <span className="text-[#2D5A3D]">cannabis medicinal</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#4A4A4A]">Mantenho-me atualizado com os estudos mais recentes para oferecer o melhor tratamento baseado em evidências</p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mb-12">
          <Card className="bg-gradient-to-br from-[#2D5A3D] to-[#1A3D2A] border-none overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-[#C9A962]" />
                    <span className="text-sm text-[#C9A962] font-medium">Pesquisa em Destaque</span>
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl text-white mb-3">{featuredResearch.title}</h3>
                  <p className="text-white/80 mb-4">{featuredResearch.source}</p>
                  <p className="text-white/90 leading-relaxed max-w-2xl">{featuredResearch.summary}</p>
                </div>
                <div className="lg:text-right">
                  <div className="inline-block bg-[#C9A962] rounded-xl px-6 py-4">
                    <div className="font-heading text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">{featuredResearch.highlight}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researches.map((research, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="h-full bg-[#FAFAF8] border-none hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2 flex-wrap">
                      {research.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-[#F0F2EE] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white transition-colors">{tag}</Badge>
                      ))}
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#7A7A7A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-heading text-xl font-medium text-[#1A1A1A] mb-2">{research.title}</h4>
                  <p className="text-sm text-[#4A7C5C] mb-3">{research.source}</p>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed">{research.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
