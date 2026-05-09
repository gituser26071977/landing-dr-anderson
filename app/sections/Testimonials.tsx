"use client";

import { ScrollReveal } from "../components/ScrollReveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const depoimentos = [
  { nome: "Maria S.", condicao: "Fibromialgia", depoimento: "Depois de anos sofrendo com dores crônicas e tomando vários remédios, encontrei no Dr. Anderson um tratamento que realmente funciona. A dor diminuiu significativamente e minha qualidade de vida melhorou muito.", avaliacao: 5 },
  { nome: "João P.", condicao: "Ansiedade e Insônia", depoimento: "O Dr. Anderson não só me prescreveu o tratamento, mas me ouviu com atenção e me deu toda a orientação necessária. Hoje durmo melhor e minha ansiedade está sob controle.", avaliacao: 5 },
  { nome: "Ana L.", condicao: "Endometriose", depoimento: "Finalmente encontrei um médico que entende minha dor. O tratamento com cannabis medicinal trouxe alívio real para minhas cólicas e dor pélvica. Sou muito grata!", avaliacao: 5 },
  { nome: "Carlos M.", condicao: "Dores Crônicas", depoimento: "Consegui reduzir drasticamente o uso de opioides graças ao tratamento com cannabis. O Dr. Anderson foi fundamental nesse processo, sempre atencioso e presente.", avaliacao: 5 },
  { nome: "Fernanda R.", condicao: "TEPT", depoimento: "Os pesadelos diminuíram e consigo dormir melhor. O tratamento mudou minha vida. O acompanhamento do Dr. Anderson faz toda a diferença.", avaliacao: 5 },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">Depoimentos</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">O que meus <span className="text-[#2D5A3D]">pacientes</span> dizem</h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {depoimentos.map((depoimento, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4"><Quote className="w-10 h-10 text-[#C9A962]" /></div>
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: depoimento.avaliacao }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                        ))}
                      </div>
                      <p className="text-[#4A4A4A] leading-relaxed flex-1 mb-6">&ldquo;{depoimento.depoimento}&rdquo;</p>
                      <div className="pt-4 border-t border-[#F0F2EE]">
                        <p className="font-medium text-[#1A1A1A]">{depoimento.nome}</p>
                        <p className="text-sm text-[#7A7A7A]">{depoimento.condicao}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white hover:bg-[#2D5A3D] hover:text-white border-[#D4D4D4]" />
              <CarouselNext className="static translate-y-0 bg-white hover:bg-[#2D5A3D] hover:text-white border-[#D4D4D4]" />
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
