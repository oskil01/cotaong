"use client";

import { useEffect } from "react";
import {
  Users,
  Briefcase,
  Settings,
  Cpu,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OrganesGestionVitePublic() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const organes = [
    {
      id: 1,
      title: "Assemblée générale",
      role: "Organe suprême de COTA, garantissant la vision stratégique et la gouvernance.",
      attributions: [
        "Définir les orientations générales et stratégiques de l’organisation.",
        "Approuver le budget annuel et les rapports financiers.",
        "Élire les membres du Conseil d’administration.",
        "Valider les rapports annuels d’activités et de performance.",
        "Veiller au respect des valeurs et principes humanitaires.",
      ],
      icon: <Users className="w-12 h-12 text-[#03337F]" />,
      leader: null,
    },
    {
      id: 2,
      title: "Conseil d’administration",
      role: "Supervise la Direction générale et assure la conformité institutionnelle et stratégique.",
      attributions: [
        "Superviser la direction générale et valider les plans opérationnels.",
        "Approuver les projets et programmes majeurs.",
        "Garantir la conformité juridique, éthique et financière.",
        "Surveiller la gestion financière et les rapports.",
        "Suivre les indicateurs de performance organisationnelle.",
      ],
      icon: <Briefcase className="w-12 h-12 text-[#03337F]" />,
      leader: {
        name: "TAMBWE RAMAZANI Junior",
        role: "Président & D.G",
        bio: `Technicien en Développement rural (planification régionale)
        et Expert en management des projets avec une expérience de +5 ans
        incluant la gestion des équipes et supervision terrain.`,
        photo: "/images/Junior.png",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          messageCircle: "http://wa.me/243820838387",
        },
      },
    },
    {
      id: 3,
      title: "Direction générale",
      role: "Coordonne la mise en œuvre opérationnelle de la stratégie et supervise toutes les équipes et programmes.",
      attributions: [
        "Mettre en œuvre la stratégie définie par le Conseil d’administration.",
        "Superviser la planification et l’exécution des programmes.",
        "Gérer les ressources humaines, financières et matérielles.",
        "Représenter l’organisation auprès des partenaires et institutions.",
        "Assurer la communication interne et externe.",
      ],
      icon: <Settings className="w-12 h-12 text-[#03337F]" />,
      leader: {
        name: "BAHATI MURHULA Dieumerci",
        role: "Secrétaire & Admin RH",
        bio: "Professionnelle du développement avec plus de 12 ans d’expérience.",
        photo: "/images/noprofile.jpg",
        socials: { facebook: "#", linkedin: "#", twitter: "#", messageCircle: "#" },
      },
    },
    {
      id: 4,
      title: "Directions techniques et spécialisées",
      role: "Assurent la gestion et la mise en œuvre opérationnelle des programmes sectoriels et techniques.",
      attributions: [
        "Planifier, coordonner et superviser les activités spécifiques des programmes.",
        "Veiller à la qualité technique et scientifique des interventions.",
        "Évaluer l’impact des projets et proposer des améliorations.",
        "Former et encadrer les équipes opérationnelles.",
        "Assurer la conformité aux principes humanitaires et standards Sphere.",
      ],
      icon: <Cpu className="w-12 h-12 text-[#03337F]" />,
      leader: {
        name: "Sylvano KITENGE",
        role: "Directeur de programme & Directeur technique",
        bio: "David supervise les programmes communautaires et Isabelle gère les aspects techniques.",
        photo: "/images/noprofile.jpg",
        socials: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          messageCircle: "http://wa.me/243820838387",
        },
      },
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
      {/* === INTRODUCTION === */}
      <div className="max-w-4xl mx-auto mb-12" data-aos="fade-down">
        <p className="text-gray-700 text-base sm:text-lg">
          Les organes de COTA assurent la gouvernance, la supervision stratégique, la mise en œuvre
          opérationnelle et la qualité technique. La gestion du COTA tourne autour de{" "}
          <span className="font-bold">4 organes</span> à savoir :
        </p>
      </div>

      {/* === LISTE DES ORGANES === */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {organes.map((organe, index) => (
          <div
            key={organe.id}
            className="relative flex flex-col lg:flex-row items-start gap-8"
            data-aos="fade-up"
          >
            {/* === CONTENEUR PRINCIPAL DE L'ICÔNE + TITRE === */}
            <div className="flex items-center gap-3 mb-3 lg:mb-0">
              <div className="flex-shrink-0">{organe.icon}</div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#03337F]">
                {organe.title}
              </h4>
            </div>

            {/* === DESCRIPTION ET ATTRIBUTIONS === */}
            <div className={`flex-1 ${index % 2 !== 0 ? "lg:pr-8" : "lg:pl-8"}`}>
              <p className="text-gray-700 text-lg font-bold mb-4">{organe.role}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {organe.attributions.map((att, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    {att}
                  </li>
                ))}
              </ul>

              {/* === LEADER / RESPONSABLE === */}
              {organe.leader && (
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={organe.leader.photo}
                    alt={organe.leader.name}
                    className="w-32 h-32 rounded-full object-cover shadow-sm"
                    data-aos="zoom-in"
                  />
                  <div className="flex-1 max-w-4xl m-auto" data-aos="fade-left">
                    <h5 className="text-blue-800 text-xl font-bold">{organe.leader.name}</h5>
                    <p className="text-gray-600 text-base font-bold mb-1">{organe.leader.role}</p>
                    <p className="text-gray-700 text-sm mb-2">{organe.leader.bio}</p>
                    <div className="flex gap-3">
                      {organe.leader.socials.facebook && (
                        <a href={organe.leader.socials.facebook} target="_blank">
                          <Facebook className="w-5 h-5 text-blue-700 hover:text-blue-400" />
                        </a>
                      )}
                      {organe.leader.socials.linkedin && (
                        <a href={organe.leader.socials.linkedin} target="_blank">
                          <Linkedin className="w-5 h-5 text-blue-400 hover:text-blue-700" />
                        </a>
                      )}
                      {organe.leader.socials.twitter && (
                        <a href={organe.leader.socials.twitter} target="_blank">
                          <Twitter className="w-5 h-5 hover:text-blue-700 text-[#008EFF]" />
                        </a>
                      )}
                      {organe.leader.socials.messageCircle && (
                        <a href={organe.leader.socials.messageCircle} target="_blank">
                          <MessageCircle className="w-5 h-5 text-[#00AB9A] hover:text-blue-900" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
