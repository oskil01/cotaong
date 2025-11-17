"use client";

import React, { useEffect } from "react";
import {
  Briefcase,
  Layers,
  Rocket,
  Leaf,
  Megaphone,
  Scale,
  Circle,
  TrendingUp
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const domaineImages = [
  "/images/consultance.jpg",
  "/images/solutions.jpg",
  "/images/economy.jpg",
  "/images/health.jpg",
  "/images/communication.jpg",
  "/images/domainesBG.jpg",
];

export default function DomainesDetails() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const domaines = [
    {
      id: 1,
      title: "Accompagnement et consultance organisationnelle",
      icon: <Briefcase size={75} className="text-white/80 bg-[#03337F] py-6 rounded rounded-xl" />,
      image: domaineImages[0],
      description:
        "Nous accompagnons les entreprises, ONG et institutions dans le renforcement de leurs capacités organisationnelles et stratégiques, en offrant des services de conseil, de planification et de suivi de la performance institutionnelle.",
      points: [
        "Appui à la gestion stratégique et à la planification institutionnelle",
        "Renforcement du management organisationnel et de la gouvernance interne",
        "Conception et évaluation de projets de développement",
        "Appui au développement institutionnel et à la structuration des organisations",
      ],
      objectif:
        "Renforcer l’efficacité, la durabilité et l’impact des organisations partenaires à travers une meilleure gouvernance et une gestion axée sur les résultats.",
    },
    {
      id: 2,
      title: "Innovation et technologies numériques",
      icon: <Rocket size={75} className="text-white/80 bg-yellow-600 py-6 rounded rounded-xl" />,
      image: domaineImages[1],
      description:
        "Ce domaine vise à promouvoir la transformation numérique des organisations et des communautés à travers la conception de solutions technologiques sur mesure, adaptées à leurs besoins et réalités locales.",
      points: [
        "Développement de plateformes web et d’applications mobiles adaptées aux projets",
        "Conception de systèmes de suivi-évaluation numériques (S&E)",
        "Analyse, traitement statistique et visualisation de données",
        "Formation des acteurs à la maîtrise des outils technologiques",
      ],
      objectif:
        "Faciliter la prise de décision fondée sur des données fiables et encourager l’innovation technologique au service du développement durable.",
    },
    {
      id: 3,
      title:
        "Entrepreneuriat, développement économique et moyens de subsistance",
      icon: <TrendingUp size={75} className="text-white/80 bg-blue-800 py-6 rounded rounded-xl" />,
      image: domaineImages[2],
      description:
        "Nous soutenons les jeunes, les start-ups et les initiatives locales dans le développement de leurs projets économiques, la création d’emplois et la promotion d’un entrepreneuriat responsable et inclusif.",
      points: [
        "Formation et accompagnement des jeunes entrepreneurs",
        "Appui à la création et à la gestion des AGR (activités génératrices de revenus)",
        "Renforcement de l’accès au financement et aux ressources productives",
        "Mise en réseau et mentorat entrepreneurial",
      ],
      objectif:
        "Stimuler l’autonomisation économique et l’innovation locale pour un développement durable porté par les communautés elles-mêmes.",
    },
    {
      id: 4,
      title: "Santé et protection de l’environnement",
      icon: <Leaf size={75} className="text-white/80 bg-[#00AB9A] py-4 rounded rounded-xl" />,
      image: domaineImages[3],
      description:
        "Nos interventions intègrent la promotion de la santé communautaire et la durabilité environnementale, en appuyant des initiatives de prévention, de sensibilisation et de gestion durable des ressources naturelles.",
      points: [
        "Gestion de risques des catastrophes (GRC)",
        "Lutte contre la pollution et la dégradation environnementale",
        "Promotion des énergies renouvelables et pratiques écologiques",
        "Promotion de l'hygiène, assainissement et santé communautaire",
      ],
      objectif:
        "Favoriser des communautés saines et un environnement durable à travers une approche intégrée santé–environnement.",
    },
    {
      id: 5,
      title: "Communication et sensibilisation",
      icon: <Megaphone size={75} className="text-white/80 bg-[#CA451B] py-4 rounded rounded-xl" />,
      image: domaineImages[4],
      description:
        "Nous développons des stratégies de communication et de plaidoyer visant à diffuser des messages utiles, mobiliser les acteurs sociaux et renforcer la visibilité des actions communautaires et institutionnelles.",
      points: [
        "Conception et déploiement de campagnes de communication sociale",
        "Production de supports visuels, audiovisuels et numériques",
        "Organisation d’événements de plaidoyer et de mobilisation communautaire",
        "Formation en communication stratégique et storytelling social",
      ],
      objectif:
        "Renforcer la participation citoyenne et la diffusion d’informations fiables au service du changement social et institutionnel.",
    },
    {
      id: 6,
      title: "Droits de l’Homme et Gouvernance",
      icon: <Scale size={75} className="text-white/80 bg-green-800 py-4 rounded rounded-xl" />,
      image: domaineImages[5],
      description:
        "Nous œuvrons pour la promotion et la protection des droits humains fondamentaux, tout en appuyant les institutions et les acteurs locaux dans la mise en œuvre de principes de gouvernance démocratique, d’éthique et de redevabilité.",
      points: [
        "Sensibilisation aux droits humains, genre et inclusion sociale",
        "Renforcement des capacités sur la sensibilité aux conflits intercommunautaires",
        "Appui à la transparence, à la participation et à la redevabilité",
        "Plaidoyer pour l’égalité des genres et la justice sociale",
      ],
      objectif:
        "Contribuer à l’émergence d’une société juste, équitable et respectueuse des droits fondamentaux de tous.",
    },
  ];

  return (
    <>
      <NavMenu />

      {/* HEADER */}
      <section
        className="relative h-[45vh] flex flex-col 
        justify-center items-center text-center text-white 
        bg-cover bg-center mt-10 md:mt-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 132, 0.8), rgba(88, 255, 88, 0.2)), url(${domaineImages[0]})`,
        }}
      >
        <h1
          data-aos="fade-down"
          className="text-3xl sm:text-5xl md:text-6xl pt-15 font-extrabold md:mb-4"
        >
          Nos domaines d'activité
        </h1>
      </section>

      {/* SECTION PRINCIPALE AVEC FOND FLOU */}
      <section
        className="relative min-h-screen py-16 px-4 sm:px-8 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: `url(${domaineImages[5]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* flou global */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        <div className="relative z-10 space-y-16">
          <div className="flex justify-center gap-3">
        <Circle className="text-[#00AB9A] w-5 h-5" />
        <Circle className="text-[#CA451B] w-5 h-5" />
        <Circle className="text-[#055ADF] w-5 h-5" />
        <Circle className="text-[#008EFF] w-5 h-5" />
      </div>
          {domaines.map((domaine, i) => (
            <div
              key={domaine.id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-3xl overflow-hidden shadow-lg bg-white/15 backdrop-blur-xl border border-white/20 p-6 sm:p-10"
            >
              {/* Contenu texte à gauche */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {domaine.icon}
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {domaine.title}
                  </h2>
                </div>
                <p className="text-gray-100 text-sm sm:text-base mb-4 leading-relaxed">
                  {domaine.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {domaine.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-200 text-sm sm:text-base"
                    >
                      <span className="text-blue-300 mt-1.5">●</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-semibold text-white mt-3">
                  Objectif :{" "}
                  <span className="font-normal text-gray-100">
                    {domaine.objectif}
                  </span>
                </p>
              </div>

              {/* Image à droite */}
              <div className="flex justify-center">
                <img
                  src={domaine.image}
                  alt={domaine.title}
                  className="rounded-2xl w-full max-w-md shadow-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
