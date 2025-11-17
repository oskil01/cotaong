"use client";
import React, { useEffect } from "react";
import { Eye, Star, Building2, ShieldCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Vision() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-4 md:px-8 overflow-hidden rounded-2xl">
      {/* === Décorations arrières subtiles === */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-30 top-6 left-6 animate-pulse"></div>
        <div className="absolute w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-30 bottom-0 right-0 animate-ping"></div>
      </div>

      {/* === Contenu principal === */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* === Texte === */}
        <div data-aos="fade-right">
          <p className="text-gray-700 leading-relaxed mb-5">
            Le <span className="font-semibold text-blue-700">COTA</span>{" "}
            ambitionne de devenir un acteur de référence en accompagnement
            technique et en innovation en République Démocratique du Congo.
            Nous voulons contribuer à la construction d’organisations
            performantes, d’entreprises durables et de communautés résilientes,
            dans le respect des droits humains et de la bonne gouvernance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En s’appuyant sur des ressources humaines compétentes et engagées,
            le COTA voit sa vision comme une réalité possible, portée par la
            conviction qu’un développement inclusif et durable ne se construit
            qu’avec la participation de tous les acteurs.
          </p>
        </div>

        {/* === Bloc visuel thématique === */}
        <div
          className="grid sm:grid-cols-2 gap-6"
          data-aos="fade-left"
        >
          {/* Vision claire */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Eye className="text-blue-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Une vision claire
            </h4>
            <p className="text-gray-600 text-sm">
              Faire du COTA un repère national d’excellence et d’innovation.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Star className="text-yellow-500 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Excellence et qualité
            </h4>
            <p className="text-gray-600 text-sm">
              Promouvoir une culture d’exigence, de performance et de résultats
              concrets.
            </p>
          </div>

          {/* Gouvernance */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="text-green-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Gouvernance responsable
            </h4>
            <p className="text-gray-600 text-sm">
              Défendre l’éthique, la transparence et la responsabilité dans
              chaque action.
            </p>
          </div>

          {/* Croissance */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Building2 className="text-indigo-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Croissance durable
            </h4>
            <p className="text-gray-600 text-sm">
              Soutenir un développement équilibré et inclusif au service de la
              société.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
