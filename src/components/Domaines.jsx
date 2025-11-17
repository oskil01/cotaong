"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Handshake, Rocket, HandCoins, Circle, CheckCircle, ArrowRight } from "lucide-react";
import domaine1 from "../assets/domaine1.jpg";
import domaine2 from "../assets/domaine2.jpg";
import domaine3 from "../assets/domaine3.jpg";

const Domaines = () => {
  const navigate = useNavigate(); // <-- ✅ useNavigate *dans* le composant

  const [activeDomaine, setActiveDomaine] = useState(1);
  const [bgIndex, setBgIndex] = useState(0);

  const backgroundImages = [domaine1, domaine2, domaine3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const domaines = [
    {
      id: 1,
      icon: <Handshake className="w-5 h-5 sm:w-6" />,
      title: "Consultance et Accompagnement",
      desc: "Appui stratégique aux entreprises, ONG et institutions dans la gestion de projets, le développement organisationnel et institutionnel.",
      features: [
        "Gestion stratégique de projets",
        "Renforcement organisationnel",
        "Développement institutionnel",
        "Reporting optimisé",
      ],
      color: "bg-[#03337F]",
      butColor: "bg-[#03337F] hover:bg-[#0069BD]",
      iconColor: "text-[#D3E4FF]",
      image: domaine1,
    },
    {
      id: 2,
      icon: <Rocket className="w-5 h-5 sm:w-6" />,
      title: "Innovation et Technologies numériques",
      desc: "Conception et mise en œuvre de solutions technologiques adaptées aux besoins des organisations et des communautés.",
      features: ["Solutions sur mesure", "Innovation continue", "Impact communautaire", "Efficacité adaptative"],
      color: "bg-[#006176]",
      butColor: "bg-[#006176] hover:bg-[#00AB9A]",
      iconColor: "text-green-100",
      image: domaine2,
    },
    {
      id: 3,
      icon: <HandCoins className="w-5 h-5 sm:w-6" />,
      title: "Entrepreneuriat & Développement économique",
      desc: "Accompagnement des jeunes, des start-ups et des initiatives locales et/ou les AGR pour renforcer leurs capacités et faciliter l’accès aux ressources.",
      features: ["Soutien aux jeunes et start-ups", "Renforcement des capacités", "Accès aux ressources", "Sécurité financière"],
      color: "bg-[#CA451B]",
      butColor: "bg-[#CA451B] hover:bg-[#FFB298]",
      iconColor: "text-[#FFF4F0]",
      image: domaine3,
    },
  ];

  return (
    <section id="domaines" className="relative overflow-hidden py-12 px-4 sm:py-16 md:px-12 lg:px-20 text-white">
      {/* BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out transform ${
              bgIndex === index ? "opacity-100 scale-105" : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${typeof img === "string" ? img : img})`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a3d]/80 via-[#002b67]/70 to-[#013e8a]/70 mix-blend-multiply backdrop-blur-sm" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center mb-6" data-aos="fade-down">
          <div className="flex-1 max-w-2xl mx-auto space-y-6 mb-10 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold mb-4 leading-tight">
              Nos domaines <span className="text-[#CA451B]">d'activité</span>
            </h2>
            <div className="flex justify-center gap-3 mt-4">
              <Circle className="text-[#006176] w-5 h-5" />
              <Circle className="text-[#CA451B] w-5 h-5" />
              <Circle className="text-[#03337F] w-5 h-5" />
              <Circle className="text-[#0069BD] w-5 h-5" />
            </div>
          </div>
        </div>

        {/* boutons filtres */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center" data-aos="fade-up" data-aos-delay="100">
          {domaines.map((ser) => (
            <button
              key={ser.id}
              onClick={() => setActiveDomaine(ser.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium flex items-center gap-2 transition-all text-sm sm:text-base ${
                activeDomaine === ser.id ? `${ser.color} text-white shadow-lg` : `bg-white/20 text-gray-200 hover:bg-white/30`
              }`}
              data-aos="fade-up"
              data-aos-delay={ser.id * 100}
            >
              {ser.icon}
              {ser.title}
            </button>
          ))}
        </div>

        {/* détail */}
        <div className="bg-white/10 rounded-2xl md:rounded-3xl shadow-lg backdrop-blur-md p-6 sm:p-8 mb-12 md:mb-16 border border-white/20" data-aos="fade-up" data-aos-delay="200">
          {domaines.filter((ser) => ser.id === activeDomaine).map((ser) => (
            <div key={ser.id} className="flex flex-col lg:flex-row gap-6 md:gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 sm:gap-4 sm:mb-6" data-aos="fade-right" data-aos-delay="300">
                  <div className={`w-12 h-12 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center ${ser.color} bg-opacity-20`}>
                    <div className={ser.iconColor}>{ser.icon}</div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">{ser.title}</h3>
                </div>

                <p className="text-base sm:text-lg text-gray-100 mb-4 sm:mb-6 leading-relaxed" data-aos="fade-right" data-aos-delay="350">
                  {ser.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="400">
                  {ser.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2" data-aos="fade-up" data-aos-delay={450 + idx * 50}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-100 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="600">
                  <button
                    onClick={() => navigate("/domaines")}
                    className={`px-6 py-3 sm:px-8 ${ser.butColor} font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm sm:text-base text-white rounded-full`}
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 mt-6 lg:mt-0" data-aos="zoom-in" data-aos-delay="500">
                <div className="w-full h-60 sm:h-72 md:h-80 overflow-hidden shadow-lg rounded-xl md:rounded-2xl">
                  <img src={typeof ser.image === "string" ? ser.image : ser.image} alt={ser.title} className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOUTON FINAL */}
        <div className="flex justify-center mt-6 md:mt-10" data-aos="fade-up" data-aos-delay="700">
          <button onClick={() => navigate("/domaines")} className="bg-[#006176] hover:bg-[#00AB9A] text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg flex items-center gap-2 transition-all">
            Voir tous les domaines
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Domaines;
