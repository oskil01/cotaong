import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icônes directionnelles
import { actualites } from "../data/Actualites";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const ITEMS_PER_PAGE = 6; // Nombre d'actualités par page

export default function Actualites() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(actualites.length / ITEMS_PER_PAGE);

  // Obtenir les actualités à afficher pour la page courante
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = actualites.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* MENU avec onglet Actif */}
      <NavMenu active="actualites" />

      <section className="pt-28 mt-30 pb-20 px-6 max-w-6xl mx-auto">
        {/* SOUS-TITRE */}
        <p className="text-lg uppercase tracking-widest text-[#006176] mb-4">
          # Actualités
        </p>

        {/* GROS TITRE */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-800">
          Découvrez toutes les actualités sur nos programmes et activités, sur nos produits et services
        </h1>

        {/* LISTE PAGINÉE */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((a) => (
            <Link
              key={a.id}
              to={`/actualites/${a.id}`}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={a.image}
                className="h-48 w-full object-cover"
                alt={a.title}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{a.title}</h3>
                <p className="text-sm text-gray-500">{a.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* NAVIGATION PAGINATION */}
        <div className="flex justify-center items-center mt-10 gap-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-3 rounded-full shadow-lg hover:bg-gray-200 transition ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft />
          </button>

          <span className="font-semibold text-gray-700">
            Page {currentPage} / {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-full shadow-lg hover:bg-gray-200 transition ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
