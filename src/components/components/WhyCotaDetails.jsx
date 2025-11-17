"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Zap, Award, Lightbulb, HeartHandshake } from "lucide-react";

const WhyCotaDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-8 px-4">
      {/* === TITRE PRINCIPAL === */}
      <div className="mb-16" data-aos="fade-down">
        <h2 className="text-2xl md:text-3xl font-bold py-4 
            text-[#03337F] uppercase py-8">
          Pourquoi COTA ?
        </h2>
        <p className="text-gray-600 text-xl sm:text-base">
          Dans un environnement marqué par des défis multiples 
          et un besoin croissant de performance et d’innovation, 
          COTA s’impose comme un partenaire stratégique fiable. 
          Notre crédibilité repose sur une approche rigoureuse, 
          une expertise avérée et un engagement profond envers le 
          développement durable.
          <br /> <br />
          Voici les facteurs qui guident chacune de nos interventions :
        </p>
      </div>

      {/* === CONTENU PRINCIPAL === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
        {/* === EFFICACITÉ === */}
        <div
          className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-2xl shadow-md p-8 text-center"
          data-aos="fade-up"
        >
          <div className="flex justify-center mb-5">
            <Zap className="w-12 h-12 text-blue-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Efficacité</h3>
          <p className="text-gray-600">
            Nous privilégions une approche orientée vers les résultats concrets
            et mesurables. Chaque action est conçue pour produire un impact
            durable et vérifiable.
          </p>
        </div>

        {/* === EXPERTISE === */}
        <div
          className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-2xl shadow-md p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex justify-center mb-5">
            <Award className="w-12 h-12 text-blue-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise</h3>
          <p className="text-gray-600">
            Notre équipe multidisciplinaire dispose d’un savoir-faire reconnu,
            combinant expérience terrain et compétences techniques pour offrir
            un accompagnement sur mesure.
          </p>
        </div>

        {/* === INNOVATION === */}
        <div
          className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-2xl shadow-md p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-center mb-5">
            <Lightbulb className="w-12 h-12 text-blue-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
          <p className="text-gray-600">
            Nous intégrons des approches modernes et technologiques pour
            transformer les défis en opportunités et améliorer la performance
            organisationnelle.
          </p>
        </div>

        {/* === ENGAGEMENT === */}
        <div
          className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-2xl shadow-md p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex justify-center mb-5">
            <HeartHandshake className="w-12 h-12 text-blue-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Engagement</h3>
          <p className="text-gray-600">
            Nous agissons avec rigueur, responsabilité et passion, en plaçant le
            développement durable et le bien-être des communautés au cœur de nos
            priorités.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCotaDetails;
