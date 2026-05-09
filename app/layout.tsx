import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Anderson Holzwarth | Médico Especialista em Mentes Intensas — AH/SD, Ansiedade e Insônia",
  description:
    "Atendimento médico especializado para adultos e crianças com altas habilidades (AH/SD), superdotação, ansiedade persistente, insônia e sobrecarga emocional. Abordagem humanizada, baseada em evidências e em vivência clínica própria. Agende sua avaliação em Aracaju ou online.",
  keywords: [
    "altas habilidades adultos",
    "superdotação adultos",
    "AH/SD",
    "ansiedade em superdotados",
    "insônia em altas habilidades",
    "mente acelerada",
    "sobrecarga emocional",
    "intensidade emocional",
    "adultos superdotados",
    "dessregulação emocional",
    "médico altas habilidades",
    "tratamento ansiedade superdotação",
    "cannabis medicinal ansiedade",
    "regulação emocional",
    "ansiedade generalizada",
    "insônia crônica",
    "pensamento hiperativo",
    "superdotação infantil",
    "altas habilidades crianças",
    "Aracaju",
    "Sergipe",
    "consulta online",
  ].join(", "),
  alternates: {
    canonical: "https://dranderson.aracannabis.com.br",
  },
  openGraph: {
    title: "Dr. Anderson Holzwarth | Médico Especialista em Mentes Intensas — AH/SD, Ansiedade e Insônia",
    description:
      "Atendimento médico especializado para adultos e crianças com altas habilidades, superdotação, ansiedade, insônia e sobrecarga emocional. Agende sua avaliação.",
    url: "https://dranderson.aracannabis.com.br",
    siteName: "Dr. Anderson Holzwarth",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} font-body antialiased bg-[#FAFAF8] text-[#1A1A1A]`}
      >
        {children}
      </body>
    </html>
  );
}
