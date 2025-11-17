"use client";

import { useEffect } from "react";
import { Globe2, Settings, Cpu, BarChart2, Users, Heart, ShieldCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Objectifs() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-12 text-gray-800 rounded-xl">
      {/* === Titre objectif global === */}
      <div className="max-w-4xl mx-auto mb-4" data-aos="fade-down">
        <h3 className="text-2xl font-bold text-blue-800 mb-8">
          Objectif global
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          L’<span className="font-semibold text-blue-700">objectif global</span> du COTA est de 
          <span className="font-medium text-blue-700"> contribuer au développement durable de la République Démocratique du Congo</span>, 
          en accompagnant les entreprises, ONG, institutions et communautés à renforcer leurs capacités, améliorer leur efficacité et maximiser leur impact sur le développement économique, social et environnemental du pays.
        </p>
      </div>

      {/* === Titre objectifs spécifiques === */}
      <div className="max-w-4xl mx-auto mb-6" data-aos="fade-down">
        <h3 className="text-2xl font-bold text-blue-800 py-6">
          Objectifs spécifiques
        </h3>
      </div>

      {/* === Objectifs spécifiques === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
        {/* Objectif 1 */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
          <Settings className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl mb-2 font-semibold text-blue-800 mb-1">
              Renforcement institutionnel et organisationnel
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Fournir des services de consultance et de conseil pour améliorer la structure, la gouvernance et la performance des organisations, institutions et entreprises afin de les rendre plus résilientes et efficaces.
            </p>
          </div>
        </div>

        {/* Objectif 2 */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
          <Cpu className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl mb-2 font-semibold text-blue-800 mb-1">
              Solutions numériques et innovantes
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Concevoir et mettre en œuvre des outils numériques et des approches innovantes pour répondre aux défis socio-économiques et améliorer l’efficacité des interventions des partenaires.
            </p>
          </div>
        </div>

        {/* Objectif 3 */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
          <BarChart2 className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl mb-2 font-semibold text-blue-800 mb-1">
              Suivi, évaluation et gestion de données
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Développer des systèmes fiables pour collecter, analyser et utiliser les données afin de soutenir la planification stratégique et la prise de décision éclairée.
            </p>
          </div>
        </div>

        {/* Objectif 4 */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
          <Users className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl mb-2 font-semibold text-blue-800 mb-1">
              Promotion de l’entrepreneuriat
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Encourager l’esprit entrepreneurial, en particulier chez les jeunes et les start-ups, en facilitant leur accès aux ressources, aux opportunités et aux réseaux de soutien pour renforcer leur succès et leur impact.
            </p>
          </div>
        </div>

        {/* Objectif 5 */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
          <Heart className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl mb-2 font-semibold text-blue-800 mb-1">
              Environnement et santé publique
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Élaborer et soutenir des projets intégrant la protection de l’environnement et la promotion de la santé publique, pour un développement durable et responsable.
            </p>
          </div>
        </div>

        {/* Objectif 6 */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
          <Globe2 className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl mb-2 font-semibold text-blue-800 mb-1">
              Communication, sensibilisation et plaidoyer
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Développer des stratégies de communication et de plaidoyer pour influencer positivement les comportements sociaux et renforcer la participation des communautés aux processus de développement.
            </p>
          </div>
        </div>

        {/* Objectif 7 */}
        <div className="bg-blue-50 border border-blue-100 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
          <ShieldCheck className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl mb-2 font-semibold text-blue-800 mb-1">
              Droits humains et gouvernance
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Promouvoir et défendre les droits humains, tout en encourageant la bonne gouvernance, l’éthique et la responsabilité au sein des organisations et institutions partenaires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
