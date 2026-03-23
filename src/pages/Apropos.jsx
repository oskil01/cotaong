import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Circle } from "lucide-react";
import {
  ArrowLeft,
  User2,
  Target,
  Eye,
  Megaphone,
  BookOpen,
  TrendingUp,
  Building2,
  Users,
  Sparkles,
  Scale,
  History,
  Rocket,
} from "lucide-react";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import WhyCotaDetails from "../components/components/WhyCotaDetails";
import MissionDetails from "../components/components/MissionDetails";
import VisionDetails from "../components/components/VisionDetails";
import Valeurs from "../components/components/Valeurs";
import Slogan from "../components/components/Slogan";
import Objet from "../components/components/Objet";
import Objectifs from "../components/components/Objectifs";
import Organes from "../components/components/Organes";
import Equipes from "../components/components/Equipes"
import DonneesNonDisponibles from "../components/components/DonneesNonDisponibles";
import StatutJuridique from "../components/components/StatutJuridique";


// Images
import bannerImage from "../assets/banner-about.jpg";
import imgQui from "../assets/hero.jpg";
import imgMission from "../assets/mission.jpg";
import imgVision from "../assets/vision.jpg";
import imgSlogan from "../assets/slogan.jpg";
import imgObjet from "../assets/objet.jpg";
import imgObjectifs from "../assets/objectifs.jpg";
import imgOrganes from "../assets/organes.jpg";
import imgEquipes from "../assets/equipes.jpg";
import imgValeurs from "../assets/valeurs.jpg";
import imgStatut from "../assets/statut.jpg";
import imgHistorique from "../assets/historique.jpg";
import imgProjets from "../assets/projets.jpg";

const iconColor = "#FF5722"; // couleur des icônes

// ==========================
// Données enrichies en JSX
// ==========================
const items = [
  {
    id: "qui",
    title: "Qui sommes-nous ?",
    icon: <User2 color={iconColor} size={30} />,
    image: imgQui,
    short: "Présentation du COTA.",
    detail: (
      <> 
        {/* === Contexte === */}
        <h4 
          className="text-2xl md:text-3xl font-bold py-4 
          uppercase">Contexte d'intervention
        </h4>
        <p className="text-xl sm:text-base py-4">
          La République Démocratique du Congo (RDC) est un pays 
          aux potentialités exceptionnelles. Riche en ressources 
          naturelles, humaines et économiques, elle occupe une 
          place stratégique au cœur de l’Afrique. Cependant, 
          malgré cette abondance, le pays demeure confronté à 
          de profonds défis structurels, institutionnels et 
          socio-économiques qui freinent son développement durable. 
          <br /> <br />
          Ces défis se manifestent notamment par la faiblesse des 
          capacités organisationnelles au sein de nombreuses 
          institutions publiques et privées, le manque d’outils 
          technologiques modernes, la faible disponibilité de 
          données fiables pour la planification et la prise de 
          décision, ainsi que la limitation des ressources 
          humaines qualifiées capables d’assurer une gestion 
          efficace et transparente. 
          <br /> <br />
          À cela s’ajoutent la vulnérabilité des initiatives 
          entrepreneuriales locales, la précarité des 
          conditions de vie, les enjeux environnementaux 
          majeurs (déforestation, érosion, pollution, 
          changement climatique) et les problèmes sanitaires 
          persistants. Ces réalités sont aggravées par des 
          défis en matière de gouvernance, d’inclusion 
          sociale et de respect des droits fondamentaux, qui 
          réduisent la portée des actions de développement 
          menées sur le territoire. 
          <br /> <br />
          Face à ces constats, il devient indispensable de 
          renforcer les capacités techniques, organisationnelles 
          et stratégiques des acteurs du développement – qu’il 
          s’agisse d’entreprises, d’ONG, d’institutions publiques 
          ou de communautés locales – afin d’assurer une 
          croissance inclusive, résiliente et durable. 
          C’est dans ce contexte qu’intervient le 
          Corps Technique pour l’Accompagnement (COTA), pour apporter une 
          réponse concrète aux besoins d’expertise, d’innovation 
          et de transformation structurelle du pays.
        </p>
        {/* === Présentation === */}
        <div className="py-4 px-3 bg-blue-100 rounded rounded-xl">
          <h4 
            className="text-2xl md:text-3xl font-bold py-4 
            text-[#03337F] uppercase py-8">QUI SOMMES-NOUS ?
          </h4>
          <p className="text-xl sm:text-base">
          Le Corps Technique pour l’Accompagnement (COTA) 
          est une Organisation Non Gouvernementale (ONG) 
          de droit congolais, humanitaire, multidisciplinaire 
          et innovante, fondée pour répondre aux besoins 
          croissants d’accompagnement technique, institutionnel 
          et stratégique des acteurs du développement en 
          République Démocratique du Congo. 
          <br /> <br />
          COTA se positionne comme un partenaire technique 
          de confiance, œuvrant à l’amélioration de la 
          performance, de l’efficacité et de l’impact des 
          organisations qu’elle accompagne. Notre approche 
          repose sur la formation, l’assistance technique, 
          la recherche appliquée, la digitalisation des 
          processus, ainsi que le renforcement des capacités 
          humaines et institutionnelles.
          <br /> <br />
          Nous travaillons aux côtés des entreprises, ONG, 
          institutions publiques et communautés locales pour 
          les aider à mieux planifier, gérer et évaluer leurs 
          initiatives, tout en intégrant les principes de bonne 
          gouvernance, d’innovation durable et de responsabilité 
          sociale.
          <br /> <br />
          À travers nos interventions, nous contribuons activement 
          à la transformation du tissu socio-économique congolais, 
          en promouvant la création d’emplois, le développement 
          des compétences locales, la valorisation des ressources 
          nationales et l’émergence d’un leadership technique et 
          stratégique au service du développement durable.
          </p>
        </div>

        {/* === Pourquoi COTA ? === */}
        <div>
          <WhyCotaDetails />
        </div>
      </>
    ),
  },
  {
    id: "mission",
    title: "Mission",
    icon: <Target color={iconColor} size={30} />,
    image: imgMission,
    short: "Notre mission en résumé.",
    detail: (
      <>
       <MissionDetails />
      </>
    ),
  },
  {
    id: "vision",
    title: "Vision",
    icon: <Eye color={iconColor} size={30} />,
    image: imgVision,
    short: "Notre ambition à long terme.",
    detail: (
      <>
        <VisionDetails />
      </>
    ),
  },
  {
    id: "slogan",
    title: "Slogan",
    icon: <Megaphone color={iconColor} size={30} />,
    image: imgSlogan,
    short: "Notre slogan et message.",
    detail: (
      <>
        <Slogan />
      </>
    ),
  },
  {
    id: "objet",
    title: "Objet",
    icon: <BookOpen color={iconColor} size={30} />,
    image: imgObjet,
    short: "Objet social et rôle.",
    detail: (
      <>
        <Objet />
      </>
    ),
  },
  {
    id: "objectifs",
    title: "Objectifs",
    icon: <TrendingUp color={iconColor} size={30} />,
    image: imgObjectifs,
    short: "Les principaux objectifs.",
    detail: (
      <>
       <Objectifs />
      </>
    ),
  },
  {
    id: "organes",
    title: "Organes de gestion",
    icon: <Building2 color={iconColor} size={30} />,
    image: imgOrganes,
    short: "Les structures dirigeantes du COTA.",
    detail: (
      <>
        <Organes />
      </>
    ),
  },
  {
    id: "equipes",
    title: "Équipes",
    icon: <Users color={iconColor} size={30} />,
    image: imgEquipes,
    short: "Les équipes opérationnelles.",
    detail: (
      <>
        <Equipes />
      </>
    ),
  },
  {
    id: "valeurs",
    title: "Valeurs",
    icon: <Sparkles color={iconColor} size={30} />,
    image: imgValeurs,
    short: "Nos valeurs fondamentales.",
    detail: (
      <>
      <Valeurs />
      </>
    ),
  },
  {
    id: "statut",
    title: "Statut juridique",
    icon: <Scale color={iconColor} size={30} />,
    image: imgStatut,
    short: "Statut légal et administratif.",
    detail: (
      <>
        <StatutJuridique /> 
      </>
    ),
  },
  {
    id: "historique",
    title: "Historique",
    icon: <History color={iconColor} size={30} />,
    image: imgHistorique,
    short: "Notre parcours à travers le temps.",
    detail: (
      <> 
        <DonneesNonDisponibles />
      </>
    ),
  },
  {
    id: "projets",
    title: "Projets",
    icon: <Rocket color={iconColor} size={30} />,
    image: imgProjets,
    short: "Projets phares du COTA.",
    detail: (
      <>
        <DonneesNonDisponibles />
      </>
    ),
  },
];

// ==========================
// Composant principal
// ==========================
export default function Apropos() {
  const [activeId, setActiveId] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
    setMounted(true);
  }, []);

  const handleKey = useCallback((e) => {
    if (e.key === "Escape") setActiveId(null);
  }, []);

  useEffect(() => {
    if (activeId) {
      window.addEventListener("keydown", handleKey);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.removeEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeId, handleKey]);

  const openDetail = (id) => {
    setActiveId(id);
    setTimeout(() => AOS.refresh(), 100);
  };

  const renderGrid = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <button
            key={it.id}
            onClick={() => openDetail(it.id)}
            data-aos="fade-up"
            data-aos-delay={idx * 60}
            className="relative group rounded-2xl overflow-hidden shadow-lg focus:outline-none transform transition duration-500 hover:scale-[1.02]"
            aria-label={`Voir ${it.title}`}
            style={{ minHeight: 180 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${it.image})`,
                filter: "brightness(0.55)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-white">
              <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
                {it.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-center drop-shadow-md">
                {it.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderDetail = () => {
    const it = items.find((x) => x.id === activeId);
    if (!it) return null;

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-3 md:gap-5 py-4 mt-8">
        <Circle className="text-[#006176] w-6 h-6 md:h-7 md:w-7" />
        <Circle className="text-[#CA451B] w-6 h-6 md:h-7 md:w-7" />
        <Circle className="text-[#03337F] w-6 h-6 md:h-7 md:w-7" />
        <Circle className="text-[#0069BD] w-6 h-6 md:h-7 md:w-7" />
      </div>
        <div className="flex items-center ">
          <button
            onClick={() => setActiveId(null)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition"
            aria-label="Retour"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
        </div>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src={it.image}
              alt={it.title}
              className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute left-6 bottom-6 z-10 text-white flex items-center gap-3">
              {it.icon}
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-2">
                  {it.title}
                </h2>
                <p className="text-sm md:text-base max-w-2xl">{it.short}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 bg-white">
            <div data-aos="fade-up" className="prose prose-lg max-w-none text-gray-700">
              {it.detail}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://wa.me/243820838387"
                className="inline-block px-6 py-3 rounded-full bg-[#03337F] text-white hover:bg-[#0069BD] transition"
              >
                Nous contacter
              </a>
              <button
                onClick={() => setActiveId(null)}
                className="inline-block px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-800 hover:shadow-md transition"
              >
                Retour à la liste
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <NavMenu activeMenu="A propos" />

      {/* === En-tête principal === */}
      <header
        className="relative h-[46vh] md:h-[54vh] flex items-center 
        justify-center mt-20 text-center overflow-hidden fixed"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,51,127,0.8), rgba(0,105,189,0.65)), url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 ">
          <h1
            className="text-4xl md:text-6xl xl:text-8xl font-extrabold text-white
            mb-8"
            data-aos="fade-down"
          >
            A propos de COTA
          </h1>
          <p
            className="mt-3 text-2xl text-gray-400 max-w-2xl md:text-3xl mx-auto uppercase"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Corps Technique pour l’Accompagnement
          </p>
        </div>
      </header>

      <main className="pb-20">
        {activeId ? renderDetail() : renderGrid()}
      </main>

      <Footer />
    </div>
  );
}
