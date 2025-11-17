"use client";
import React, { useEffect } from "react";
import { Heart, Globe2, Users2, Scale, Recycle, Shield, Handshake } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Valeurs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 py-10 px-4 md:px-8 overflow-hidden rounded-2xl">
      {/* === Décorations arrières légères === */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-48 h-48 bg-indigo-300 rounded-full blur-3xl opacity-30 bottom-0 right-0 animate-ping"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* === Texte principal === */}
        <div className="text-base md:text-xl" data-aos="fade-right">
          <p className="text-gray-700 leading-relaxed mb-5">
            Le <span className="font-semibold text-blue-700">Corps Technique pour l’Accompagnement (COTA)</span> fonde son
            action sur des valeurs fortes qui guident chacune de ses
            interventions. Ces valeurs traduisent notre engagement envers le
            respect des droits humains, la transparence, la durabilité et la
            dignité humaine.  
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Fidèle aux <span className="font-semibold">principes humanitaires universels</span> et aux
            <span className="font-semibold"> standards du Sphère Project</span>, COTA s’assure que chaque
            projet, chaque programme et chaque décision contribue à renforcer la
            résilience des communautés et à préserver la justice sociale.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ces principes sont non seulement notre boussole éthique, mais aussi
            le fondement de notre crédibilité et de notre responsabilité en tant
            qu’acteur humanitaire et technique œuvrant pour un développement
            inclusif et durable en République Démocratique du Congo.
          </p>
        </div>

        {/* === Bloc des valeurs/principes === */}
        <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-left">
          {/* Égalité */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Scale className="text-blue-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">Égalité</h4>
            <p className="text-gray-600 text-sm">
              Traitement juste et équitable de tous les bénéficiaires, sans
              aucune discrimination.
            </p>
          </div>

          {/* Impartialité */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Globe2 className="text-indigo-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">Impartialité</h4>
            <p className="text-gray-600 text-sm">
              Nos actions reposent sur les besoins réels, sans parti pris
              politique, ethnique ou religieux.
            </p>
          </div>

          {/* Neutralité */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Shield className="text-blue-700 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">Neutralité</h4>
            <p className="text-gray-600 text-sm">
              Indépendance totale vis-à-vis des idéologies et des partis
              politiques.
            </p>
          </div>

          {/* Transparence */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Handshake className="text-green-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">Transparence</h4>
            <p className="text-gray-600 text-sm">
              Gestion ouverte et responsable des ressources, fondée sur la
              redevabilité.
            </p>
          </div>

          {/* Participation */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Users2 className="text-yellow-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Participation et inclusion
            </h4>
            <p className="text-gray-600 text-sm">
              Implication active des bénéficiaires, partenaires et communautés.
            </p>
          </div>

          {/* Droits humains */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Heart className="text-red-500 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Droits humains & dignité
            </h4>
            <p className="text-gray-600 text-sm">
              Promotion de la dignité humaine, de l’égalité et de la justice
              sociale.
            </p>
          </div>

          {/* Durabilité */}
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 sm:col-span-2">
            <Recycle className="text-emerald-600 w-9 h-9 mb-2" />
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              Durabilité
            </h4>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Intégration du respect de l’environnement et du développement
              durable dans toutes les actions et interventions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
