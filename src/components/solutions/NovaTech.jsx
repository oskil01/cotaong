import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import {
  Smartphone,
  WifiOff,
  FileText,
  MapPin,
  BarChart3,
  ShieldCheck,
  Database,
  Users,
  Globe,
  ArrowRight
} from "lucide-react"

export default function NovatechSection() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const features = [
    { icon: Smartphone, title: "Solutions mobiles", desc: "Des applications innovantes pour smartphone et tablette, adaptées aux besoins terrain." },
    { icon: WifiOff, title: "Travail hors ligne", desc: "Toutes nos solutions peuvent fonctionner même sans connexion internet." },
    { icon: FileText, title: "Formulaires et workflows intelligents", desc: "Des outils modulables pour concevoir des processus numériques sur mesure." },
    { icon: MapPin, title: "Géolocalisation et suivi", desc: "Localisez et suivez chaque activité ou intervention avec précision." },
    { icon: BarChart3, title: "Analyse avancée", desc: "Dashboards et indicateurs pour visualiser les données et faciliter la prise de décision." },
    { icon: ShieldCheck, title: "Sécurité et fiabilité", desc: "Protection complète des données avec stockage sécurisé et accès contrôlé." }
  ]

  const steps = [
    "Identification des besoins et conception des solutions",
    "Développement et intégration sur plateformes mobiles et web",
    "Déploiement et accompagnement des utilisateurs",
    "Collecte, traitement et visualisation des données",
    "Optimisation continue et innovation pour de nouveaux projets"
  ]

  const advantages = [
    "Accélération de la transformation numérique",
    "Centralisation et sécurisation des données",
    "Solutions évolutives pour tous types de projets",
    "Prise de décision basée sur des insights fiables",
    "Un laboratoire d’innovation pour l’ensemble des initiatives COTA"
  ]

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-gray-100 text-gray-700 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img
            src="/images/novatech-icon.jpg"
            alt="Logo NOVATECH"
            data-aos="zoom-in"
            className="mx-auto mb-8 w-34 rounded-full md:w-52"
          />
          <h1 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-6 p-5">
            NOVATECH, l’initiative COTA pour l’innovation numérique
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl max-w-3xl mx-auto font-extrabold">
            NOVATECH est le laboratoire technologique de l’ONG COTA, où toutes nos solutions numériques innovantes sont conçues et développées. De COTA Collect et COTADB à de nouvelles applications, NOVATECH réinvente la façon dont les données et les technologies soutiennent les projets humanitaires et de développement.
          </p>
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-700 leading-relaxed text-lg">
            Dans un monde où la transformation numérique est essentielle, NOVATECH permet à l’ONG COTA de créer des solutions sur mesure pour répondre aux besoins croissants des organisations, des communautés et des projets de terrain.
          </p>
          <br />
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-700 leading-relaxed text-lg pb-5">
            L’initiative vise à centraliser l’innovation, à expérimenter de nouvelles technologies et à fournir des outils performants qui augmentent l’impact des interventions humanitaires et de développement.
          </p>
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-14">
            Nos axes d’innovation
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white p-7 rounded-xl shadow-sm hover:shadow-md transition">
                  <Icon className="text-blue-900 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
            Comment nous innovons
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} data-aos="fade-right" className="flex items-center gap-6">
                <div className="bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
            Pourquoi NOVATECH
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="flex items-start gap-4">
                <Database className="text-blue-900" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Globe size={40} className="mx-auto text-blue-900 mb-6" />
          <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">
            Notre vision à travers NOVATECH
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-700">
            À travers NOVATECH, l’ONG COTA ambitionne de devenir un acteur de référence en innovation technologique, capable de concevoir et de déployer des solutions numériques variées qui transforment la manière dont les projets humanitaires et de développement sont menés et évalués.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <Users size={36} className="mx-auto mb-6" />
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Rejoignez notre démarche d’innovation
        </h2>

        <a
          href="/partenaires"
          className="bg-white ms-50 me-50 text-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto cursor-pointer"
        >
          Devenons partenaires
          <ArrowRight size={18} />
        </a>
      </section>

    </div>
  )
}