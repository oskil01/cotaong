"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import cavImage from "../assets/cav.jpg";

export default function CAVSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <section className="py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto mt-30 mb-10 grid lg:grid-cols-2 gap-8 items-center">

        {/* IMAGE */}
        <div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          data-aos="fade-left"
        >
          <img
            src={cavImage}
            alt="Compte d'Aide aux Vulnérables"
            className="w-full max-w-sm lg:max-w-l shadow-2xl"
          />
        </div>

        {/* TEXTE */}
        <div
          data-aos="fade-right"
          className="order-2 lg:order-1 "
        >
          <span className="text-[#006176] font-extrabold text-3xl sm:text-7xl tracking-wide">
            Initiative CAV
          </span>

          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Pour tous les victimes et vulnérables :
            <span className="text-gray-500">
              {" "}Sauver la vie et préserver la dignité humaine.
            </span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            L'Initiative CAV (Compte d'Aide aux Vulnérables) vise à répondre rapidement 
            aux situations d’urgence humanitaire affectant les communautés, 
            notamment les victimes de conflits armés, de violences sexuelles 
            et basées sur le genre, de catastrophes naturelles, de déplacements 
            forcés de populations ou de toute autre crise mettant en péril la 
            vie et la dignité humaine. 
          </p>

          {/* BOUTONS */}
          <div className="mt-10 flex flex-wrap gap-6">

            <Link
              to="/initiative-cav"
              className="flex items-center gap-3 bg-[#006176] text-white px-8 py-4 font-semibold text-lg hover:bg-[#004c57] transition">
              VOIR PLUS
              <ArrowRight size={20}/>
            </Link>

            <button className="flex items-center gap-3 bg-[#CA451B] text-white px-8 py-4 font-semibold text-lg hover:bg-[#a83716] transition">
              FAIRE UN DON
              <ArrowRight size={20}/>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}