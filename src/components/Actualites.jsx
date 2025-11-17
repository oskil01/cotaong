"use client";
import { Circle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CalendarDays,
  ArrowRight,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function RecentNews() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const length = 4;

  const news = [
    {
      title: "Lancement du programme d’accompagnement des jeunes",
      author: "CFEN",
      date: "15 Octobre 2025",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      description:
        "Un programme innovant pour soutenir les jeunes entrepreneurs et renforcer leurs compétences en gestion, innovation et leadership.",
    },
    {
      title: "Atelier sur l’innovation numérique et la transformation locale",
      author: "CFEN",
      date: "10 Octobre 2025",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      description:
        "Des experts en technologie et développement durable réunis pour explorer le rôle du numérique dans la croissance communautaire.",
    },
    {
      title: "Signature du partenariat avec le Ministère du Plan",
      author: "CFEN",
      date: "05 Octobre 2025",
      image:
        "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80",
      description:
        "Un engagement fort pour la planification participative et l’optimisation des politiques publiques à impact local.",
    },
    {
      title: "Lancement du CFEN TechLab",
      author: "CFEN",
      date: "01 Octobre 2025",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      description:
        "Un espace d’expérimentation technologique dédié à l’éducation, la recherche et l’inclusion numérique des jeunes talents.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  // Auto défilement
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 7000);
    return () => clearInterval(autoSlide);
  }, []);

  // Swipe mobile
  useEffect(() => {
    const slider = sliderRef.current;
    let startX = 0;
    if (!slider) return;
    const handleTouchStart = (e) => (startX = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    };
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section
      id="actualites"
      className="relative overflow-hidden py-20 px-6 sm:px-10 md:px-16 
      bg-gradient-to-br from-white via-gray-100 to-gray-200"
    >
      {/* === ARRIÈRE-PLAN ANIMÉ === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#00E0FF20,transparent_60%),radial-gradient(circle_at_80%_80%,#0069BD20,transparent_60%)] 
        animate-[pulseHalo_12s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,0,0,0.03)_1px,transparent_1px)] 
        bg-[size:60px_60px] animate-[moveGrid_25s_linear_infinite]" />
      </div>

      {/* === ANIMATIONS CSS === */}
      <style jsx>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 100px 100px, -100px -100px;
          }
        }
        @keyframes pulseHalo {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      {/* === TITRE === */}
      <div
        className="relative z-10 text-center mb-16"
        data-aos="fade-down"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Nos actualités récentes
        </h2>
        {/* CERCLES  */}
        <div className="flex justify-center gap-3 mt-4">
          <Circle className='text-[#006176] w-5 h-5' />
          <Circle className='text-[#CA451B] w-5 h-5' />
          <Circle className='text-[#03337F] w-5 h-5' />
          <Circle className='text-[#0069BD] w-5 h-5' /> 
        </div>
        <p className="text-gray-600 max-w-7xl mx-auto text-base sm:text-lg mt-4">
          Explorez les moments forts, les initiatives et les projets marquants
          de COTA à travers le pays.
        </p>
      </div>

      {/* === CARROUSEL === */}
      <div className="relative z-10 max-w-6xl mx-auto" ref={sliderRef}>
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {news.map((item, index) => (
              <div key={index} className="min-w-full flex-shrink-0 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 sm:p-10 flex flex-col justify-end">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base max-w-3xl mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <span className="flex items-center gap-2">
                      <User size={16} /> {item.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarDays size={16} /> {item.date}
                    </span>
                  </div>
                  <button className="group flex items-center gap-2 bg-[#00AB9A] hover:bg-[#006176] text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg w-fit">
                    Lire plus{" "}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* === NAVIGATION === */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md hover:shadow-lg transition z-20"
          >
            <ChevronLeft size={26} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md hover:shadow-lg transition z-20"
          >
            <ChevronRight size={26} className="text-gray-700" />
          </button>
        </div>

        {/* === INDICATEURS === */}
        <div className="flex justify-center mt-6 space-x-2">
          {news.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-[#006176] scale-110 shadow-[0_0_8px_#00AB9A]"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
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
