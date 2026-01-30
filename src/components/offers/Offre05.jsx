import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Download,
  Share2,
  Copy,
  Facebook,
  Linkedin,
  Twitter,
  Briefcase,
  Calendar,
  MapPin,
  Users,
  FileText,
} from "lucide-react";

import NavMenu from "../NavMenu";
import Footer from "../Footer";

export default function Offre05() {
  const { id } = useParams();
  const [openShare, setOpenShare] = useState(false);

  // === Donnée simulée (à remplacer par API plus tard)
  const offre = {
    titre: "Directeur (trice) de programmes",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "01/AMI-DP/COTA/026",
    publication: "28 janvier 2026",
    cloture: "28 février 2026",
    lieu: "Tanganyika",
    nombre: 1,
    nature: "Volontariat (bénévolat) indemnisé",
    typeContrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
    responsable: "Directeur Général",
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Lien copié !");
  };

  return (
    <div className="text-gray-800">
      <NavMenu />

      {/* === HEADER === */}
      <section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-16 text-center px-4">
        <p className="text-sm uppercase font-semibold">
          APPEL A MANIFESTATION D’INTERET N°01/AMI-DP/COTA/026
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-3">
          Recrutement des volontaires – COTA
        </h1>
      </section>

      {/* === CONTENU === */}
      <section className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* === TABLEAU RÉCAP === */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <tbody className="divide-y">
              <tr><td className="font-semibold p-3">Titre du poste</td><td className="p-3">{offre.titre}</td></tr>
              <tr><td className="font-semibold p-3">Organisation</td><td className="p-3">{offre.organisation}</td></tr>
              <tr><td className="font-semibold p-3">Référence</td><td className="p-3">{offre.reference}</td></tr>
              <tr><td className="font-semibold p-3">Date de publication</td><td className="p-3">{offre.publication}</td></tr>
              <tr><td className="font-semibold p-3">Date de clôture</td><td className="p-3">{offre.cloture}</td></tr>
              <tr><td className="font-semibold p-3">Lieu d’affectation</td><td className="p-3">{offre.lieu}</td></tr>
              <tr><td className="font-semibold p-3">Nombre</td><td className="p-3">{offre.nombre}</td></tr>
              <tr><td className="font-semibold p-3">Nature du contrat</td><td className="p-3">{offre.nature}</td></tr>
              <tr><td className="font-semibold p-3">Type de contrat</td><td className="p-3">{offre.typeContrat}</td></tr>
              <tr><td className="font-semibold p-3">Responsable hiérarchique</td><td className="p-3">{offre.responsable}</td></tr>
            </tbody>
          </table>
        </div>

        {/* === TEXTE STRUCTURÉ === */}
        <ArticleSection title="À propos du COTA" />
        <ArticleSection title="Contexte" />
        <ArticleSection title="Mission principale" />
        <ArticleSection title="Tâches et responsabilités" />
        <ArticleSection title="Compétences et qualifications requises" />
        <ArticleSection title="Conditions de soumission" />
        <ArticleSection title="Comment postuler ?" />
        <ArticleSection title="Engagement PEAS & principes humanitaires" />

      </section>

      {/* === BOUTONS FLOTTANTS === */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        {/* Télécharger */}
        <button className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800">
          <Download />
        </button>

        {/* Partager */}
        <div className="relative">
          <button
            onClick={() => setOpenShare(!openShare)}
            className="bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
          >
            <Share2 />
          </button>

          {openShare && (
            <div className="absolute bottom-14 right-0 bg-white rounded-lg shadow p-3 space-y-2 w-48">
              <button onClick={copyLink} className="flex items-center gap-2 text-sm hover:text-blue-700">
                <Copy size={16} /> Copier le lien
              </button>
              <a className="flex items-center gap-2 text-sm" href="#"><Facebook size={16}/> Facebook</a>
              <a className="flex items-center gap-2 text-sm" href="#"><Twitter size={16}/> Twitter</a>
              <a className="flex items-center gap-2 text-sm" href="#"><Linkedin size={16}/> LinkedIn</a>
            </div>
          )}
        </div>

        {/* Postuler */}
        <a
          href="mailto:direction.cota@gmail.com"
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-500"
        >
          <Briefcase />
        </a>
      </div>

      <Footer />
    </div>
  );
}

/* === Composant texte générique === */
function ArticleSection({ title }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        {/* 👉 Tu peux coller ici le texte exact que tu as fourni */}
        Contenu détaillé conforme à l’appel à manifestation d’intérêt.
      </p>
    </div>
  );
}
