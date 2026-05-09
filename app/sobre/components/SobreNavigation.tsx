"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function SobreNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/"
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium tracking-widest uppercase">Voltar ao Consultório</span>
        </Link>

        <div className="font-heading text-xl tracking-[0.2em] uppercase font-light">
          Trajetória <span className="text-[#C9A962]">&</span> Projetos
        </div>

        <div className="hidden md:flex gap-8">
          <button className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors">Curadoria</button>
          <button className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors">Laboratório</button>
        </div>
      </div>
    </nav>
  );
}
