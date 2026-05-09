"use client";

import { ScrollReveal } from "../components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    pergunta: "Preciso de um diagnóstico de AH/SD para consultar?",
    resposta:
      "Não. Muitos adultos nunca receberam diagnóstico formal de altas habilidades/superdotação. A avaliação clínica considera seu funcionamento cognitivo, emocional e seu histórico de vida. O diagnóstico pode ser um caminho dentro do tratamento, mas não é pré-requisito para começar.",
  },
  {
    pergunta: "A cannabis medicinal é recomendada para todos os pacientes?",
    resposta:
      "Não. A cannabis medicinal é uma ferramenta terapêutica entre várias outras. Ela é considerada apenas quando há indicação clínica adequada, após avaliação completa. Muitos pacientes são tratados com sucesso sem o uso de cannabis, através de abordagens farmacológicas convencionais, regulação de sono e estratégias de manejo emocional.",
  },
  {
    pergunta: "As consultas podem ser feitas online?",
    resposta:
      "Sim. Ofereço atendimento online para pacientes de qualquer localidade, mantendo a mesma qualidade de escuta e acompanhamento. Para casos que exigem avaliação presencial, atendo em Aracaju, Sergipe, no Horizonte Jardins.",
  },
  {
    pergunta: "Você atende crianças?",
    resposta:
      "Sim. Atendo crianças e adolescentes com perfil de altas habilidades, superdotação, ansiedade infantil e dificuldades de regulação emocional. O trabalho com crianças sempre envolve orientação aos pais como parte central do tratamento.",
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "A primeira consulta é uma avaliação aprofundada. Reservo tempo para ouvir sua história, entender seus padrões de funcionamento mental, emocional e de sono, e identificar como a intensidade cognitiva se manifesta no seu dia a dia. Não há pressa. Ao final, discutimos as possibilidades de tratamento e o caminho mais adequado para o seu caso.",
  },
  {
    pergunta: "O tratamento pode acontecer sem cannabis medicinal?",
    resposta:
      "Com certeza. A maior parte do trabalho clínico envolve regulação emocional, manejo da ansiedade, tratamento da insônia e reorganização de padrões mentais. A cannabis é apenas uma das ferramentas farmacológicas disponíveis, utilizada de forma seletiva quando clinicamente indicada.",
  },
  {
    pergunta: "A avaliação emocional está incluída no atendimento?",
    resposta:
      "Sim. A avaliação emocional é parte integrante de todo o atendimento. Em mentes intensas, os sintomas físicos — como insônia e ansiedade — quase sempre têm uma dimensão emocional profunda. O trabalho de compreensão dessa dimensão é essencial para um tratamento efetivo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">
              Dúvidas Frequentes
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
              Perguntas que recebo com{" "}
              <span className="text-[#2D5A3D]">frequência</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Respostas claras sobre o processo de avaliação, tratamento e o
              que esperar do acompanhamento.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <Accordion className="w-full">
            {perguntas.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#F0F2EE]"
              >
                <AccordionTrigger className="text-left font-heading text-lg text-[#1A1A1A] hover:text-[#2D5A3D] hover:no-underline py-6 transition-colors">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A4A4A] leading-relaxed pb-6 text-base">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
