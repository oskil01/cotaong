"use client";
import { 
  Users, 
  Handshake, 
  Briefcase, 
  ArrowRight, 
  Circle 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RessourcesIntro() {
  return (
    <section
      id="ressources"
      className="relative overflow-hidden text-white py-20 px-6 sm:px-10 md:px-20 bg-[#011433]"
    >
      {/* === 🌐 Arrière-plan animé (lignes fines en mouvement continu) === */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-20 animate-[moveBackground_20s_linear_infinite]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#00E0FF"
                strokeWidth="0.4"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* === Halo dégradé dynamique === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03337F]/70 via-[#011433]/40 to-[#006176]/60 mix-blend-overlay z-0"></div>

      {/* === CONTENU GLOBAL CENTRÉ ET AÉRÉ === */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* === TITRE PRINCIPAL === */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Découvrez nos <span className="text-[#CA451B]">Ressources</span>
          </h2>
          {/* CERCLES  */}
          <div className="flex justify-center gap-3 mt-4">
            <Circle className='text-[#00AB9A] w-5 h-5' />
            <Circle className='text-[#EB501F] w-5 h-5' />
            <Circle className='text-[#0660EF] w-5 h-5' />
            <Circle className='text-[#008EFF] w-5 h-5' /> 
          </div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Une équipe inspirante, des partenaires stratégiques et des opportunités
            de collaboration pour bâtir l’avenir ensemble.
          </p>
        </div>

        {/* === CARTES === */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* ÉQUIPE */}
          <div
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-10 shadow-lg hover:shadow-[#00E0FF]/30 transition-all duration-700 hover:-translate-y-3 text-center"
            data-aos="flip-left"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="p-5 bg-[#00E0FF]/20 border border-[#00E0FF]/30 rounded-full shadow-[0_0_20px_#00E0FF80] group-hover:scale-110 transition-transform duration-700">
                <Users className="w-10 h-10 text-[#00E0FF]" />
              </div>
            </div>
            <h3 className="mt-10 text-2xl font-bold mb-3">Notre équipe</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Une équipe d’experts multidisciplinaires passionnés par
              l’accompagnement, la transformation et l’innovation sociale.
            </p>
            <Link
              // to='/ressources' 
              className="mt-6 flex justify-center items-center 
              text-[#00E0FF] font-semibold gap-2 hover:underline 
              cursor-pointer">
              <button>Découvrir</button><ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* PARTENAIRES */}
          <div
            className="group relative bg-white/10 backdrop-blur-2xl 
            border border-white/10 rounded-2xl p-10 shadow-lg 
            hover:shadow-[#CA451B]/30 transition-all duration-700 
            hover:-translate-y-3 text-center"
            data-aos="flip-up"
            data-aos-delay="200"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="p-5 bg-[#CA451B]/20 border border-[#CA451B]/30 
                rounded-full shadow-[0_0_20px_#CA451B] group-hover:scale-110 
                transition-transform duration-700">
                <Handshake className="w-10 h-10 text-[#CA451B]" />
              </div>
            </div>
            <h3 className="mt-10 text-2xl font-bold mb-3">Nos partenaires</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Des collaborations locales et internationales basées sur la confiance
              et la recherche d’un impact durable et mesurable.
            </p>
            <Link
              // to='/ressources'  
              className="mt-6 flex justify-center items-center text-[#CA451B] 
              font-semibold gap-2 hover:underline cursor-pointer">
              Voir plus <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* TRAVAILLER AVEC NOUS */}
          <div
            className="group relative bg-white/10 backdrop-blur-2xl 
            border border-white/10 rounded-2xl p-10 shadow-lg 
            hover:shadow-[#00AB9A]/30 transition-all duration-700 
            hover:-translate-y-3 text-center"
            data-aos="flip-right"
            data-aos-delay="250"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="p-5 bg-[#00AB9A]/20 border border-[#00AB9A]/30 
                rounded-full shadow-[0_0_20px_#00AB9A] group-hover:scale-110 
                transition-transform duration-700">
                <Briefcase className="w-10 h-10 text-[#00AB9A]" />
              </div>
            </div>
            <h3 className="mt-10 text-2xl font-bold mb-3">
              Travailler avec nous
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Rejoignez nos projets, postulez à nos offres ou proposez votre
              expertise pour renforcer nos actions.
            </p>
            <Link 
              // to='/ressources' 
              className="mt-6 flex justify-center items-center text-[#00AB9A] 
              font-semibold gap-2 hover:underline cursor-pointer">
              Voir les offres <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* === ANIMATIONS PERSONNALISÉES === */}
      <style jsx>{`
        @keyframes moveBackground {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-60px, -60px);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
}
