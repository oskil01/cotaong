"use client";

import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight,
  Hash,
  MapPin,
  Clock,
  CalendarDays,
  Hourglass 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

import AfficheOffre from '../assets/offers/AfficheOffre.jpg'

export default function RessourcesDetails() {
  const navigate = useNavigate();

  // === Données des offres ===
  const offres = [
    {
      id: 1,
      titre: "01/AMI-DP/COTA/026 : Recrutement d'Un(e) Directeur(trice) de progragrammes",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Un(e) Directeur(trice)  de programmes </span> 
        pour sa direction au Tanganyika. 
      </>,
      number: "1",
      location: "Tanganyika, RDC",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
     {
      id: 2,
      titre: "02/AMI-DAF/COTA/026 : Recrutement d'Un(e) Directeur(trice) Financier(ère) et Administratif(ve) (DAF)",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Un(e) Directeur(trice) Administratif(ve) et Financier(ère) </span> 
        pour sa direction au Tanganyika. 
      </>,
      number: "1",
      location: "Tanganyika, RDC",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
    {
      id: 3,
      titre: "03/AMI-OM/COTA/026 : Recrutement d'Un(e) Officier MEAL ",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Un(e) Officier MEAL </span> 
        pour sa direction au Tanganyika. 
      </>,
      number: "1",
      location: "Tanganyika, RDC",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
    {
      id: 4,
      titre: "04/AMI-LOG/COTA/026 : Recrutement d'Un(e) Logisticien(ne) ",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Un(e) Logisticien(ne) </span> 
        pour sa direction au Tanganyika. 
      </>,
      number: "1",
      location: "Tanganyika, RDC",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
    {
      id: 5,
      titre: "05/AMI-DB/COTA/026 : Recrutement d'Un(e) Responsable Data Base ",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Un(e) Responsable Data Base </span> 
        pour sa direction au Tanganyika. 
      </>,
      number: "1",
      location: "Tanganyika, RDC",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
    {
      id: 6,
      titre: "06/AMI-CGSI/COTA/026 : Recrutement d'Un(e) Responsable de communication et gestion du système de l’information",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Un(e) Responsable de communication et GSI </span> 
        pour sa direction au Tanganyika. 
      </>,
      number: "1",
      location: "Tanganyika, RDC",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
    {
      id: 7,
      titre: "07/AMI-AC/COTA/026 : Recrutement de Trois(3) Assistant(e)s Comptables (Tanganyika, Sud-kivu et Maniema)",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Trois(3) Assistant(e)s Comptables </span> 
        pour sa direction et ses antennes. 
      </>,
      number: "3",
      location: "Tanganyika, Sud-kivu et Maniema",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
    {
      id: 8,
      titre: "08/AMI-PF/COTA/026 : Recrutement de Deux(2) Points Focaux (Sud-kivu et Maniema)",
      organisation: "CORPS TECHNIQUE POUR L'ACCOMPAGNEMENT (COTA ONG)",
      description: 
      <>
        Dans le cadre de renforcer son dispositif de gestion
        et ses capacités opérationnelles en rapport avec la 
        mise en œuvre de son plan d’action 2026-2027 (PAO-27)
        , l’ONG COTA cherche à recruter <span className="font-bold">Deux(2) Points Focaux </span> 
        pour sa direction et ses antennes. 
      </>,
      number: "2",
      location: "Sud-kivu et Maniema",
      contrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
      date: "25 Janvier 2026",
      deadline: "28 Février 2026",
    },
  ];

  // Fonction de navigation vers la page OffresDetails
  const goToDetails = (id) => navigate(`/offres/${id}`);

  // === Données de l’équipe ===
  const equipe = [
    { nom: "Jean Pierre M.", fonction: "Chef de projet", bio: "Expert en développement communautaire avec 7 ans d’expérience.", photo: "/images/agent.jpg" },
    { nom: "Aline K.", fonction: "Responsable communication", bio: "Spécialiste en relations publiques et marketing digital.", photo: "/images/agent.jpg" },
    { nom: "Patrick T.", fonction: "Analyste financier", bio: "Assure la gestion budgétaire et le suivi des ressources.", photo: "/images/agent.jpg" },
    { nom: "Sandra N.", fonction: "Chargée de projet", bio: "Coordonne les activités sur le terrain avec efficacité.", photo: "/images/agent.jpg" },
    { nom: "David B.", fonction: "Formateur", bio: "Anime les ateliers de renforcement des capacités locales.", photo: "/images/agent.jpg" },
    { nom: "Marie L.", fonction: "Consultante RH", bio: "Supervise la sélection et la gestion du personnel.", photo: "/images/agent.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Gestion dynamique du nombre de cartes visibles pour le carrousel
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + (isMobile ? 1 : 2)) % equipe.length);
  const prevSlide = () => setIndex((prev) => (prev - (isMobile ? 1 : 2) + equipe.length) % equipe.length);
  const visibleCount = isMobile ? 1 : 2;
  const visibleMembers = equipe.slice(index, index + visibleCount);

  // === Partenaires ===
  const partenaires = ["usalama.png", "printsa.png", "stargo.png", "unikal.png", "oskil.png", "mwinda.png"];

  return (
    <div className="text-gray-800">
      {/* === NAVIGATION === */}
      <NavMenu activePage="Ressources" />

      {/* === BANNIÈRE === */}
      <section
        className="relative text-white text-center py-14 pt-54"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,132,0.8), rgba(88,255,88,0.4)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nos Ressources</h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto px-4">
          Découvrez nos offres, notre équipe, nos partenaires et d’autres ressources sur nos activités.
        </p>
      </section>

      {/* === OFFRES D’EMPLOI === */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <p className="uppercase text-xl font-semibold text-green-600 mb-4"># Offres d’emploi</p>
            <h2 className="text-5xl font-bold text-gray-800">Travailler avec nous</h2>
          </div>
          <Link to="/depot-cv-indisponible">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
              Déposer un CV
            </button>
          </Link>
        </div>

        {/* Cartes des offres */}
        {offres.map((offre) => (
          <div
            key={offre.id}
            onClick={() => goToDetails(offre.id)}
            className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden mb-6 hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row">
              <img src={AfficheOffre} alt={offre.titre} className="w-full md:w-1/3 h-full object-cover" />
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold mb-2">{offre.titre}</h3>
                <p className="text-medium font-bold text-blue-700 mb-2">{offre.organisation}</p>
                <p className="text-medium mb-3">{offre.description}</p>
                <ul className="text-medium space-y-1">
                  <li className="flex items-center gap-2">
                    <Hash className="w-5 h-5 text-blue-600" />
                    <span>{offre.number}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{offre.location}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{offre.contrat}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-blue-600" />
                    <span>Publié le {offre.date}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Hourglass className="w-5 h-5 text-blue-600" />
                    <span>Expire le {offre.deadline}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* === NOTRE ÉQUIPE === */}
      {/* <section className="py-16 text-center relative bg-gradient-to-b from-gray-100 to-white">
        <p className="uppercase text-sm font-semibold text-green-600"># Notre équipe</p>
        <h2 className="text-3xl font-bold mb-10">Un personnel qualifié</h2>

        {/* Carrousel équipe */}
        {/* <div className="flex items-center justify-center gap-4 mb-8">
          <button onClick={prevSlide} className="bg-white rounded-full shadow p-2 hover:bg-gray-200">
            <ChevronLeft />
          </button>

          <div className="flex gap-6 overflow-hidden w-full max-w-4xl justify-center">
            {visibleMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition w-full md:w-[45%]"
              >
                <img src={member.photo} alt={member.nom} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
                <h6 className="font-semibold">{member.nom}</h6>
                <p className="text-sm text-gray-500">{member.fonction}</p>
                <p className="text-sm mt-2 text-gray-700">{member.bio}</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook size={18} /></a>
                  <a href="#" className="text-gray-700 hover:text-black"><Twitter size={18} /></a>
                  <a href="#" className="text-blue-700 hover:text-blue-900"><Linkedin size={18} /></a>
                </div>
              </div>
            ))}
          </div>

          <button onClick={nextSlide} className="bg-white rounded-full shadow p-2 hover:bg-gray-200">
            <ChevronRight />
          </button>
        </div> */}

        {/* Boules indicatrices */}
        {/* <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(equipe.length / visibleCount) }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === Math.floor(index / visibleCount) ? "bg-blue-700" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </section> */} 

      {/* === PARTENAIRES === */}
      {/* <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <p className="uppercase text-sm font-semibold text-green-600"># Nos partenaires</p>
            <h2 className="text-3xl font-bold text-gray-800">Ils nous font confiance</h2>
          </div>
          <button className="order-2 md:order-1 border border-red-600 text-red-600 px-6 py-2 rounded-md hover:bg-red-600 hover:text-white transition">
            Devenir partenaire
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 order-1 md:order-2">
          {partenaires.map((logo, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img src={`/images/${logo}`} alt="Partenaire" className="h-14 object-contain mb-2" />
              <p className="text-sm font-semibold text-gray-700 uppercase">{logo.split(".")[0]}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}
