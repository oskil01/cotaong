"use client";

import { useEffect } from "react";
import { Rocket, Handshake } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slogan() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-white py-10 sm:py-12 px-4 sm:px-8 lg:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-10" data-aos="fade-down">
        {/* === Titre principal === */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl pb-4 font-bold text-blue-800 mb-3">
          Partenaire dans l’action, Pionnier dans le progrès
        </h2>

        {/* === Brève introduction === */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Le <span className="font-semibold text-blue-700">COTA</span> s’engage
          à conjuguer <span className="font-medium">collaboration</span> et{" "}
          <span className="font-medium">innovation</span> pour relever les défis
          du développement durable en République Démocratique du Congo.  
          À travers ses interventions, l’organisation agit à la fois comme un{" "}
          <span className="italic">partenaire dans l’action</span> et un{" "}
          <span className="italic">pionnier dans le progrès</span>, plaçant
          l’humain, la performance et la durabilité au cœur de son approche.
        </p>
      </div>

      {/* === Contenu principal === */}
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        data-aos="fade-up"
      >
        {/* === Carte 1 : Partenaire dans l’action === */}
        <div className="bg-blue-50 border border-blue-100 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-blue-700" />
            <h3 className="text-xl font-semibold text-blue-800">
              COTA en tant que partenaire dans l’action
            </h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            En tant que <span className="font-medium text-blue-700">partenaire dans l’action</span>, 
            le COTA valorise la collaboration et la mise en synergie des compétences pour concevoir 
            des solutions <span className="font-medium">pratiques, inclusives et durables</span>. 
            Nous croyons que le changement durable naît du travail collectif et de la responsabilité partagée.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-3">
            À travers l’écoute, la co-création et le renforcement des capacités, 
            nous soutenons les acteurs du développement à transformer leurs ambitions en résultats concrets.
          </p>
        </div>

        {/* === Carte 2 : Pionnier dans le progrès === */}
        <div className="bg-blue-50 border border-blue-100 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-blue-700" />
            <h3 className="text-xl font-semibold text-blue-800">
              COTA en tant que pionnier dans le progrès
            </h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            En tant que <span className="font-medium text-blue-700">pionnier dans le progrès</span>, 
            COTA adopte une approche proactive, axée sur l’innovation technique, stratégique et sociale. 
            Nous anticipons les défis futurs pour offrir des solutions adaptées aux besoins spécifiques 
            des institutions, entreprises et communautés.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-3">
            Notre ambition est d’être un catalyseur du changement positif, en favorisant 
            des pratiques responsables, efficaces et respectueuses des valeurs humaines et environnementales.
          </p>
        </div>
      </div>
    </section>
  );
}
