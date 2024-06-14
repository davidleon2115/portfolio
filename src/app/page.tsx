import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Desarrollador Frontend con Más de 2 Años de Experiencia - React, HTML, CSS, JavaScript",
  description:
    "Portafolio de un desarrollador frontend con más de 2 años de experiencia. Especializado en React, HTML, CSS y JavaScript, creando interfaces de usuario modernas y responsivas con alta performance y usabilidad.",
  keywords:
    "Desarrollador frontend, React, HTML, CSS, JavaScript, UI/UX, diseño responsivo, desarrollo web, interfaces de usuario, experiencia frontend, aplicaciones web",
};

export default function Home() {
  return (
    <div className=" z-0">
      <Link rel="icon" href="/favicon.ico" />
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projets */}

      {/* Contact ME */}
    </div>
  );
}
