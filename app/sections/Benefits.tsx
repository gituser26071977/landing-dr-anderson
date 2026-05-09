"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  Brain, Heart, Moon, Target, Activity, Shield,
  Wind, RefreshCw, Droplet, HeartPulse, Flower2, Sun,
} from "lucide-react";

const beneficios = [
  { icon: Brain, title: "Epilepsia", description: "Redução significativa na frequência de crises. A FDA aprovou o CBD para epilepsias refratárias como Síndrome de Dravet e Lennox-Gastaut." },
  { icon: Heart, title: "Ansiedade", description: "Modulação do sistema endocanabinoide e receptores serotoninérgicos promove redução da ansiedade com baixo potencial de dependência." },
  { icon: Moon, title: "Insônia", description: "Melhora na qualidade do sono em 66,7% dos pacientes. Promove relaxamento sem efeito hipnótico direto." },
  { icon: Target, title: "TDAH", description: "Potencial terapêutico como coadjuvante no tratamento de sintomas de déficit de atenção e hiperatividade." },
  { icon: Activity, title: "Dores Crônicas", description: "Ação analgésica com menos efeitos colaterais que opioides. Pode reduzir ou substituir o uso de medicamentos tarja preta." },
  { icon: Shield, title: "TEPT", description: "Redução de pesadelos e hipervigilância. Auxilia na regulação emocional e resposta ao estresse traumático." },
  { icon: Wind, title: "Cessação do Tabagismo", description: "Estudos mostram redução de até 40% no consumo de cigarros em uma semana. Ajuda a controlar a compulsão e ansiedade da abstinência." },
  { icon: RefreshCw, title: "Dependência Química", description: "Coadjuvante no tratamento de dependência de álcool, crack e opioides. Reduz fissura e sintomas de abstinência." },
  { icon: Droplet, title: "Diabetes", description: "Potencial na regulação metabólica e redução de inflamação associada à resistência insulínica." },
  { icon: HeartPulse, title: "Hipertensão", description: "Estudo clínico mostrou redução de 4 mmHg na pressão sistólica e 3 mmHg na diastólica após 5 semanas de uso." },
  { icon: Flower2, title: "Endometriose", description: "Redução da dor pélvica crônica, cólicas intensas e melhora da qualidade de vida em mulheres com endometriose." },
  { icon: Sun, title: "Fibromialgia", description: "Redução da hiperalgesia e melhora da qualidade de vida com menos efeitos colaterais que tratamentos convencionais." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-[#F0F2EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#4A7C5C] uppercase mb-4">Benefícios Terapêuticos</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight mb-6">
              Condições que podem ser <span className="text-[#2D5A3D]">beneficiadas</span> com o tratamento
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#4A4A4A]">As pesquisas científicas mais recentes comprovam os benefícios da cannabis medicinal em diversas condições de saúde</p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F0F2EE] group-hover:bg-[#2D5A3D] flex items-center justify-center mb-5 transition-colors duration-300">
                <beneficio.icon className="w-7 h-7 text-[#2D5A3D] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-medium text-[#1A1A1A] mb-3">{beneficio.title}</h3>
              <p className="text-sm text-[#7A7A7A] leading-relaxed">{beneficio.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
