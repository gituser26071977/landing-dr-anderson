"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#identificacao", label: "Sinais" },
  { href: "#sinais-adultos", label: "Adultos" },
  { href: "#sobre", label: "O Médico" },
  { href: "#ahsd", label: "AH/SD" },
  { href: "#criancas", label: "Crianças" },
  { href: "#proposta", label: "Proposta" },
  { href: "#cannabis", label: "Cannabis" },
  { href: "#faq", label: "Dúvidas" },
  { href: "/sobre", label: "Trajetória" },
];

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-20">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#inicio");
              }}
              className="font-heading text-xl sm:text-2xl font-semibold text-[#2D5A3D] hover:text-[#4A7C5C] transition-colors"
            >
              Dr. Anderson Holzwarth
            </a>

            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-[#4A4A4A] hover:text-[#2D5A3D] transition-colors font-medium text-sm whitespace-nowrap group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2D5A3D] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D5A3D] hover:bg-[#4A7C5C] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Agendar Avaliação
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#2D5A3D] hover:bg-[#F0F2EE] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-base font-medium text-[#4A4A4A] hover:text-[#2D5A3D] transition-colors py-3 border-b border-[#F0F2EE]"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#2D5A3D] hover:bg-[#4A7C5C] text-white w-full py-3 rounded-lg font-medium text-center inline-flex items-center justify-center gap-2"
                  >
                    Agendar Avaliação
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
