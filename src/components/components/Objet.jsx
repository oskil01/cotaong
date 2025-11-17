"use client";

import { useEffect } from "react";
import { Target, Settings, Globe2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Objet() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8 px-3 sm:px-6 text-gray-800 rounded-xl">
      {/* === Description introductive === */}
      <div className="max-w-4xl mx-auto text-center mb-6" data-aos="fade-down">
        <p className="text-gray-700 text-base md:text-xl sm:text-base leading-relaxed pb-5">
          L’<span className="font-semibold text-blue-700">ONG Corps Technique pour l’Accompagnement (COTA) </span>   
          a pour objet principal de <span className="font-medium">fournir un appui technique, organisationnel 
          et stratégique</span> aux acteurs publics, privés et communautaires afin de renforcer leurs capacités, 
          améliorer leur gouvernance et promouvoir un développement durable, inclusif et responsable en 
          République Démocratique du Congo.
        </p>
      </div>

      {/* === Contenu principal : cartes === */}
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
        data-aos="fade-up"
      >
        {/* Carte 1 : Appui technique et stratégique */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
          <Target className="w-10 h-10 text-blue-700 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            Appui technique et stratégique
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            COTA accompagne les organisations dans la conception, la mise en œuvre 
            et le suivi de leurs projets, en leur apportant une expertise adaptée 
            à leurs besoins et à leur contexte d’intervention.
          </p>
        </div>

        {/* Carte 2 : Renforcement des capacités */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
          <Settings className="w-10 h-10 text-blue-700 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            Renforcement des capacités
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            L’organisation développe des programmes de formation et d’accompagnement 
            sur mesure visant à renforcer les compétences techniques, managériales 
            et organisationnelles de ses partenaires.
          </p>
        </div>

        {/* Carte 3 : Promotion du développement durable */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
          <Globe2 className="w-10 h-10 text-blue-700 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-blue-800 mb-1">
            Promotion du développement durable
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            À travers ses interventions, COTA contribue à la construction d’une société 
            résiliente, équitable et respectueuse de l’environnement, en alignement 
            avec les Objectifs de Développement Durable (ODD).
          </p>
        </div>
      </div>

      {/* === Paragraphe de synthèse === */}
      <div className="max-w-4xl mx-auto mt-6 text-center" data-aos="fade-up">
        <p className="text-gray-700 text-base md:text-xl sm:text-base leading-relaxed">
          En somme, l’objet du COTA est de 
          <span className="font-semibold text-blue-700"> catalyser le progrès </span> 
          et de <span className="font-semibold text-blue-700">stimuler les dynamiques locales </span>  
          en mettant la technologie, la stratégie et l’humain au service d’un 
          développement plus juste et durable.  
          COTA agit ainsi comme un <span className="font-medium">levier de transformation</span>, 
          au carrefour de l’expertise, de l’innovation et de l’engagement communautaire.
        </p>
      </div>
    </section>
  );
}
