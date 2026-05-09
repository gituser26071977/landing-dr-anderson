"use client";

import { ScrollReveal } from "../components/ScrollReveal";

export function Procrastination() {
  return (
    <section className="py-20 lg:py-28 bg-[#2D5A3D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <ScrollReveal>
          <span className="inline-block text-sm font-medium tracking-[0.2em] text-[#C9A962] uppercase mb-4">Sobre a Procrastinação</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-8">
            Quando tudo parece importante,<br />
            <span className="text-[#C9A962]">começar se torna difícil.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6">
            A procrastinação em mentes intensas raramente é preguiça. É, na maioria das vezes, 
            <strong> excesso de processamento</strong>: a mente enxerga tantas possibilidades, 
            caminhos e implicações que a ação simplesmente trava.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            Também pode envolver dificuldade de priorizar, medo do erro, autoexigência elevada 
            e uma sensação de que, se não for feito perfeitamente, não vale a pena começar. 
            Entender esse mecanismo é o primeiro passo para desbloqueá-lo.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
