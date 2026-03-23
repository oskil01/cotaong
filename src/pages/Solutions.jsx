import { useState, useEffect } from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { Zap, GaugeCircle, Headset } from "lucide-react";

import CotaCollect from "../components/solutions/CotaCollect";
import CotaDb from "../components/solutions/CotaDb";
import Novatech from "../components/solutions/NovaTech";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Solutions() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  const solutions = [
    {
      id: 1,
      title: "NOVATECH : un laboratoire des solutions innovantes sur mesure",
      logo: "/images/novatech-icon.jpg",
      image: "/images/novatech.jpg",
      pitch: 
      <>
      <Novatech />
      </>
      ,
    },

    {
      id: 2,
      title:
        "COTACOLLECT : une solution innovante pour collecter des données fiables et sécurisées",
      logo: "/images/cotacollect-icon.jpg",
      image: "/images/cotacollect-oveview.jpg",
      pitch: 
        <>
        <CotaCollect />
        </>,
    },

    {
      id: 3,
      title:
        "COTADB : une solution pour centraliser et stocker vos données en sécurité",
      logo: "/images/cotadb-icon.jpg",
      image: "/images/cotadb-banner.jpg",
      pitch: 
      <>
      <CotaDb />
      </>,
    },
  ];

  const [active, setActive] = useState(solutions[0]);

  return (
    <div>

      <NavMenu />

      {/* HEADER */}
      <section
        className="relative text-white pt-28 pb-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,120,255,0.55)), url('/images/hero-solution.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="max-w-6xl mx-auto min-h-screen sm:min-h-auto 
          md:min-h-auto lg:min-h-auto xl:min-h-auto grid md:grid-cols-2 
          gap-10 items-center px-6 py-10 "
        >

          <div data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Découvrez nos solutions innovantes et sur mesure
            </h1>
          </div>

          <div 
            className="flex justify-center md:justify-end" 
            data-aos="fade-left"
          >
            <img
              src="/images/hero-solution-sticker.png"
              className="absolute max-h-90 sm:max-h-120 object-contain 
              mt-[-168px] sm:mt"
            />
          </div>

        </div>
      </section>

      {/* CARTES AVANTAGES */}
      <section className="relative -mt-28 z-20 ">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">

          <div
            className="bg-white shadow-lg p-10 text-center rounded-xl md:rounded-r-none md:-mr-6"
            data-aos="fade-up"
          >
            <Zap className="mx-auto text-blue-600 mb-3" size={40} />
            <h3 className="font-bold text-2xl">Gain de temps</h3>
            <p className="text-gray-600 text-lg mt-2">
              Des outis et solutions pour automatiser vos processus et optimisez la gestion de vos activités.
            </p>
          </div>

          <div
            className="bg-white shadow-xl p-10 text-center rounded-xl z-10 scale-105"
            data-aos="zoom-in"
          >
            <GaugeCircle className="mx-auto text-green-600 mb-3" size={45} />
            <h3 className="font-bold text-2xl">Efficacité opérationnelle</h3>
            <p className="text-gray-600 text-lg mt-2">
              Chaque outil numérique conçu répond d'urgence au besoin réel d'amélioration de la performance
              et de la coordination des équipes.
            </p>
          </div>

          <div
            className="bg-white shadow-lg p-10 text-center rounded-xl md:rounded-l-none md:-ml-6"
            data-aos="fade-up"
          >
            <Headset className="mx-auto text-indigo-600 mb-3" size={40} />
            <h3 className="font-bold text-2xl">Assistance intelligente</h3>
            <p className="text-gray-600 text-lg mt-2">
              Des solutions adaptées pour accompagner vos actions sur le terrain.
            </p>
          </div>
        </div>
      </section>

      {/* TITRE */}
      <section className="text-center py-20 px-6" data-aos="fade-up">
        <h2 className="text-4xl max-w-4xl mx-auto md:text-5xl font-bold">
          Des solutions numériques conçues pour renforcer l’impact de vos actions
        </h2>
      </section>

      {/* SECTION SOLUTIONS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 pb-20">

        {/* MENU (Passe avant le contenu sur mobile) */}
        <div className="space-y-4 order-1 md:order-2" data-aos="fade-left">

          {solutions.map((sol) => (

            <div
              key={sol.id}
              onClick={() => setActive(sol)}
              className={`cursor-pointer flex items-center gap-4 p-4 rounded-lg shadow
              ${
                active.id === sol.id
                  ? "bg-blue-700 text-white"
                  : "bg-white"
              }`}
            >

              <img src={sol.logo} className="w-20 h-20 rounded-xl object-contain" />

              <span className="font-semibold text-xl text-extrabold ">
                {sol.title}
              </span>

            </div>

          ))}

        </div>

        {/* CONTENU */}
        <div
          className="md:col-span-2 bg-white shadow-lg p-8 rounded-lg order-2 md:order-1"
          data-aos="fade-right"
        >

          <img src={active.image} className="w-full rounded-xl mb-6" />

          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {active.pitch}
          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}
