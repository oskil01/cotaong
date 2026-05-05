import { Link } from "react-router-dom";
import { Circle } from 'lucide-react';

export default function StrategiesSection() {
  const programmes = [
    { id: "aria", title: "ARIA RDC", image: "/images/aria.png", color: "bg-blue-600", desc:"Action pour Renforcer l'Inclusion et l'Autonomisation en RDC" }, 
    { id: "cresc", title: "CRESC RDC", image: "/images/cresc.png", color: "bg-green-700", desc:"Communication Renforcée pour l'Engagement et la Sensibilisation au Changement en RDC" },
    { id: "ecogen", title: "ECOGEN RDC", image: "/images/ecogen.png", color: "bg-orange-500", desc:"Economie et Création d'Opportunités pour le Génie des Nouvelles Générations en RDC" },
    { id: "vipes", title: "VIPES RDC", image: "/images/vipes.png", color: "bg-red-600", desc:"Vision Intégrée pour la Promotion de l'Environnement et de la Santé en RDC" },
    { id: "cav", title: "INITIATIVE CAV", image: "/images/cav.jpg", color: "bg-black", desc:"Compte d'Aide aux Vulnérables" },
    { id: "novatech", title: "NOVATECH", image: "/images/novatech_logo.png", color: "bg-blue-800", desc:"Laboratoire pour innover des solutions numériques pour l'emploi" },
  ];

  // Double le tableau pour créer un effet infini
  const doubledProgrammes = [...programmes, ...programmes];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scrollLeft 25s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* ===== EN-TÊTE CENTRÉ ===== */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Nos <span className="text-teal-600">stratégies</span>
          </h2>

          <div 
            className="flex justify-center gap-3 mt-4 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Circle className="text-[#006176] w-5 h-5" />
            <Circle className="text-[#0069BD] w-5 h-5" />
            <Circle className="text-[#CA451B] w-5 h-5" /> 
            <Circle className="text-[#03337F] w-5 h-5" />
          </div>

          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Pour concrétiser sa vision, COTA déploie ses activités à travers 6 stratégies clés. 
            Découvrez comment nous nous projetons vers l’horizon avec détermination.
          </p>
        </div>

        {/* ===== CARROUSEL HORIZONTAL INFINI ===== */}
        <div className="w-full overflow-hidden max-w-6xl mx-auto">
          <div className="inline-flex gap-6 animate-scroll-left">
            {doubledProgrammes.map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                to={`/programmes/${item.id}`}
                className="w-72 flex-shrink-0 bg-white rounded-xl shadow hover:shadow-xl transition hover:scale-105 duration-300 block"
              >
                <div className={`h-1 ${item.color}`}></div>
                <div className="p-6 text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-18 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== BOUTON CENTRÉ EN BAS ===== */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="700">
          <Link
            to="#"
            className="inline-block text-lg bg-teal-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-teal-700 transition"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}