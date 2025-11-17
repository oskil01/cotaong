"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

export default function RessourcesDetails() {
  const navigate = useNavigate();

  // === Données des offres ===
  const offres = [
    {
      id: 1,
      titre: "Chargé(e) de communication",
      organisation: "COTA",
      contrat: "Temps plein",
      date: "29 Oct 2025",
      deadline: "15 Nov 2025",
    },
    {
      id: 2,
      titre: "Consultant en développement rural",
      organisation: "COTA",
      contrat: "Temps partiel",
      date: "25 Oct 2025",
      deadline: "10 Déc 2025",
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
        className="relative text-white text-center py-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,132,0.8), rgba(88,255,88,0.4)), url('/images/banner-ressources.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Nos Ressources</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
          Découvrez nos offres, notre équipe, nos partenaires et d’autres ressources sur nos activités.
        </p>
      </section>

      {/* === OFFRES D’EMPLOI === */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <p className="uppercase text-sm font-semibold text-green-600"># Offres d’emploi</p>
            <h2 className="text-3xl font-bold text-gray-800">Travailler avec nous</h2>
          </div>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
            Déposer un CV
          </button>
        </div>

        {/* Cartes des offres */}
        {offres.map((offre) => (
          <div
            key={offre.id}
            onClick={() => goToDetails(offre.id)}
            className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden mb-6 hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row">
              <img src="/images/ssd.jpg" alt={offre.titre} className="w-full md:w-1/3 h-56 object-cover" />
              <div className="flex-1 p-6">
                <h5 className="text-lg font-semibold mb-2">{offre.titre}</h5>
                <p className="text-sm font-bold text-blue-700 mb-2">{offre.organisation}</p>
                <ul className="text-sm space-y-1">
                  <li>📍 Localisation non précisée</li>
                  <li>🕓 {offre.contrat}</li>
                  <li>📅 Publié le {offre.date}</li>
                  <li>⏳ Expire le {offre.deadline}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* === NOTRE ÉQUIPE === */}
      <section className="py-16 text-center relative bg-gradient-to-b from-gray-100 to-white">
        <p className="uppercase text-sm font-semibold text-green-600"># Notre équipe</p>
        <h2 className="text-3xl font-bold mb-10">Un personnel qualifié</h2>

        {/* Carrousel équipe */}
        <div className="flex items-center justify-center gap-4 mb-8">
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
        </div>

        {/* Boules indicatrices */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(equipe.length / visibleCount) }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === Math.floor(index / visibleCount) ? "bg-blue-700" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </section>

      {/* === PARTENAIRES === */}
      <section className="max-w-6xl mx-auto px-4 py-16">
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
      </section>

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}
