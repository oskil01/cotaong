"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Users2, Rocket, Globe2 } from "lucide-react";

const MissionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-8 px-6 sm:px-6 lg:px-20">
      {/* === CONTENU PRINCIPAL === */}
      <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-5 lg:gap-20">
        {/* === TEXTE === */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
            La{" "}
            <span className="font-semibold text-[#03337F]">mission du COTA</span>{" "}
            est d’accompagner, d’outiller et de transformer les acteurs du
            développement en République Démocratique du Congo à travers des
            solutions{" "}
            <strong>techniques, stratégiques et innovantes</strong>.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
            Nous œuvrons à{" "}
            <strong>renforcer les capacités institutionnelles et humaines</strong>,
            à <strong>améliorer les performances organisationnelles</strong> et
            à promouvoir une{" "}
            <strong>gouvernance participative et responsable</strong>.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            En plaçant{" "}
            <strong>l’innovation, la transparence et l’impact social</strong> au
            cœur de notre approche, COTA contribue à un{" "}
            <strong>développement inclusif, durable et résilient</strong>, où
            chaque acteur devient un moteur du changement positif.
          </p>
        </div>

        {/* === CARTES AVEC ICONES === */}
        <div
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-aos="fade-left"
        >
          {/* Carte 1 */}
          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#03337F] mx-auto mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              Objectif
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Renforcer les capacités et la performance des organisations à
              travers des solutions concrètes et mesurables.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <Users2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#03337F] mx-auto mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              Partenariat
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Collaborer avec les entreprises, ONG et institutions publiques
              pour bâtir des impacts collectifs durables.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-[#03337F] mx-auto mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              Innovation
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Intégrer les technologies modernes et l’intelligence locale pour
              accroître l’efficacité du développement.
            </p>
          </div>

          {/* Carte 4 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <Globe2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#03337F] mx-auto mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              Impact durable
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Promouvoir un développement inclusif et durable pour transformer
              positivement les communautés locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
