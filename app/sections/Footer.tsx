"use client";

import { Separator } from "@/components/ui/separator";
import { MapPin, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK, DISPLAY_PHONE } from "@/lib/constants";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#ahsd", label: "O que é AH/SD" },
  { href: "#identificacao", label: "Sinais em Adultos" },
  { href: "#criancas", label: "Sinais em Crianças" },
  { href: "#sobre", label: "Sobre" },
  { href: "#proposta", label: "Proposta" },
  { href: "#cannabis", label: "Cannabis Medicinal" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export function Footer({ dark = false }: { dark?: boolean }) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`${dark ? "bg-black" : "bg-[#1A1A1A]"} text-white border-t border-white/5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#inicio");
              }}
              className="font-heading text-2xl font-semibold text-white hover:text-[#C9A962] transition-colors inline-block mb-4"
            >
              Dr. Anderson Holzwarth
            </a>
            <p className="text-white/60 mb-6 leading-relaxed">
              Atendimento médico especializado para mentes intensas — adultos e
              crianças com AH/SD, ansiedade e insônia.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#C9A962] hover:text-white transition-colors text-sm font-medium"
            >
              Agendar Avaliação
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div>
            <h4 className="font-heading text-lg font-medium mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-[#C9A962] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading text-lg font-medium mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 leading-relaxed">
                  Horizonte Jardins, Sala 1522/1523
                  <br />
                  Bairro Jardins, Aracaju, Sergipe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#C9A962] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#C9A962] transition-colors"
                >
                  {DISPLAY_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Dr. Anderson Holzwarth. Todos os
            direitos reservados.
          </p>
          <p className="text-white/40 text-sm text-center md:text-right max-w-md">
            As informações neste site têm caráter educativo e não substituem a
            consulta médica. CRM-SE 1234.
          </p>
        </div>
      </div>
    </footer>
  );
}
