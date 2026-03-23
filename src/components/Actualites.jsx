"use client";

import { Circle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { CalendarDays, ArrowRight, User } from "lucide-react";

import ImageVolontariat from '../assets/offers/volontaires.jpg';
import Communique from '/communique.jpg';
import NovatechImg from "/novatech.jpg";

export default function RecentNews() {
  const [current, setCurrent] = useState(0);

  const news = [
    {
      id: 1,
      title: "AMI : Recrutement de plusieurs volontaires pour des postes vacants dans la province du Tanganyika.",
      author: "COTA ONG",
      date: "28 Janvier 2026",
      image: ImageVolontariat,
      description: `Dans le cadre du renforcement des capacités opérationnelles et pour combler
         les postes vacants au sein du personnel, nous recherchons des volonatires dériseux de travailler avec nous pour la mise en oeuvre du PAO-26.`,
    },
    {
      id: 2,
      title: "COMMUNIQUE OFFICIEL : Le Corps Technique pour l'Accompagnement (COTA) annonce la reprise de ses activités pour l'année 2026",
      author: "COTA ONG",
      date: "05 Janvier 2026",
      image: Communique,
      description: `La Direction Générale du Corps Technique pour l’Accompagnement (COTA) porte à la connaissance 
          de l’ensemble de ses membres, de ses partenaires techniques et financiers, 
          ainsi que des communautés bénéficiaires, que la reprise effective de ses 
          activités opérationnelles est fixée au 12 janvier 2026.`,
    },
    {
      id: 3,
      title: "Annonce de l’initiative « NOVATECH » par le Corps Technique pour l’Accompagnement (COTA)",
      author: "COTA ONG",
      date: "17 Février 2026",
      image: NovatechImg,
      description: `Dans le cadre de son axe stratégique relatif à l’innovation 
        et aux technologies numériques, COTA a le plaisir d’annoncer le 
        lancement officiel de son initiative dénommée « NOVATECH ». 
        COTA invite les institutions publiques, les ONG, les entreprises, 
        les jeunes innovateurs, les start-ups et les partenaires techniques 
        et financiers à rejoindre cette dynamique innovante.`,
    },
  ];

  // Tri par date (plus récente en premier)
  const monthMap = {
    Janvier: "01",
    Février: "02",
    Mars: "03",
    Avril: "04",
    Mai: "05",
    Juin: "06",
    Juillet: "07",
    Août: "08",
    Septembre: "09",
    Octobre: "10",
    Novembre: "11",
    Décembre: "12",
  };

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(" ");
    return new Date(`${year}-${monthMap[month]}-${day}`);
  };

  const sortedNews = [...news].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="actualites"
      className="block lg:hidden relative overflow-hidden py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-br from-white via-gray-100 to-gray-200"
    >
      {/* === TITRE === */}
      <div className="relative z-10 text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-4">
          Nos actualités récentes
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <Circle className='text-[#006176] w-5 h-5' />
          <Circle className='text-[#CA451B] w-5 h-5' />
          <Circle className='text-[#03337F] w-5 h-5' />
          <Circle className='text-[#0069BD] w-5 h-5' />
        </div>
        <p className="text-gray-600 max-w-6xl mx-auto text-base sm:text-lg mt-4">
          Explorez les moments forts, les initiatives et les projets marquants de COTA à travers le pays.
        </p>
      </div>

      {/* === GRILLE ACTUALITÉS === */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">

        {/* ACTUALITÉ PRINCIPALE */}
        <div className="lg:col-span-2 lg:row-span-2 group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
          <div className="overflow-hidden">
            <img
              src={sortedNews[0].image}
              alt={sortedNews[0].title}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {sortedNews[0].title}
            </h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              {sortedNews[0].description}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
              <span className="flex items-center gap-2">
                <User size={16}/> {sortedNews[0].author}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={16}/> {sortedNews[0].date}
              </span>
            </div>
            <Link
              to={`/actualites/${sortedNews[0].id}`}
              className="inline-flex items-center gap-2 bg-[#00AB9A] hover:bg-[#006176] text-white px-6 py-2 rounded-full"
            >
              Lire plus <ArrowRight/>
            </Link>
          </div>
        </div>

        {/* ACTUALITÉS DROITE */}
        {[sortedNews[1], sortedNews[2]].map((item, idx) => (
          <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-2">
                  <User size={16}/> {item.author}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays size={16}/> {item.date}
                </span>
              </div>
              <Link
                to={`/actualites/${item.id}`}
                className="inline-flex items-center gap-2 bg-[#00AB9A] hover:bg-[#006176] text-white px-5 py-2 rounded-full text-sm"
              >
                Lire plus <ArrowRight/>
              </Link>
            </div>
          </div>
        ))}

      </div>

      {/* === BOUTON GLOBAL === */}
      <div
        className="relative z-10 text-center mt-14"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button
          onClick={() => (window.location.href = "/actualites")}
          className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#00E0FF] to-[#0069BD] shadow-lg hover:shadow-xl transition-all duration-500"
        >
          Voir toutes les actualités
        </button>
      </div>
    </section>
  );
}