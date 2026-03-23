import { useState } from "react"
import { useEffect } from "react"
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
  ArrowRight,
  AlertCircle, 
  X, 
  MessageCircle
} from "lucide-react"

export default function CotaCollectSection() {

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const features = [
    {
      icon: Smartphone,
      title: "Collecte mobile",
      desc: "Collectez des données terrain via smartphone ou tablette."
    },
    {
      icon: WifiOff,
      title: "Mode hors connexion",
      desc: "Travaillez dans les zones sans internet et synchronisez plus tard."
    },
    {
      icon: FileText,
      title: "Formulaires intelligents",
      desc: "Créez des formulaires personnalisés pour vos enquêtes."
    },
    {
      icon: MapPin,
      title: "Données GPS",
      desc: "Géolocalisez les activités terrain et les bénéficiaires."
    },
    {
      icon: BarChart3,
      title: "Tableaux de bord",
      desc: "Analysez vos données avec graphiques et indicateurs."
    },
    {
      icon: ShieldCheck,
      title: "Sécurité des données",
      desc: "Protection et gestion sécurisée des informations collectées."
    }
  ]

  const steps = [
    "Création des formulaires numériques",
    "Déploiement sur les appareils mobiles",
    "Collecte des données sur le terrain",
    "Synchronisation vers le serveur central",
    "Analyse et visualisation des résultats"
  ]

  const advantages = [
    "Amélioration de la fiabilité des données",
    "Réduction des coûts de collecte",
    "Suivi en temps réel des activités",
    "Meilleure prise de décision",
    "Centralisation et sécurité des données"
  ]

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-gray-100 text-gray-700 py-14">

       <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Logo du produit */}
        <img
          src="/images/cota-collect-logo.jpg"
          alt="Logo COTA Collect"
          data-aos="zoom-in"
          className="mx-auto mb-8 w-34 rounded-full md:w-52 "
        />

        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold mb-6 p-5"
        >
          COTA Collect, Une solution numérique pour la collecte et la gestion des données terrain
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl max-w-3xl mx-auto font-extrabold"
        >
          COTA Collect est une application mobile et une plateforme 
          numérique de collecte de données terrain développée par l’ONG COTA 
          (Corps Technique pour l’Accompagnement) afin de répondre aux besoins 
          croissants des organisations œuvrant dans les domaines humanitaire, 
          du développement communautaire, de la recherche et de la gouvernance.
        </p>
      </div>

      </section>

      {/* CONTEXTE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 leading-relaxed text-lg"
          >
           Dans un contexte où les décisions stratégiques doivent 
           de plus en plus s’appuyer sur des données fiables, 
           actualisées et accessibles, COTA Collect offre une 
           solution technologique moderne permettant de numériser, 
           structurer et valoriser les données collectées sur le 
           terrain.
          </p> <br /> 
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 leading-relaxed text-lg pb-5"
          >
           Conçu pour fonctionner efficacement même dans des 
           environnements à connectivité limitée, COTA Collect 
           facilite la collecte, la centralisation et l’analyse 
           des informations issues des activités de terrain, 
           contribuant ainsi à améliorer la qualité du suivi des 
           projets, l’efficacité opérationnelle et la prise de 
           décision basée sur des données probantes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold mb-10 text-center"
          >
            Pourquoi COTA Collect ?
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 leading-relaxed text-lg"
          >
            Dans de nombreux projets de développement et d’action
            humanitaire, la collecte de données terrain constitue
            un élément clé pour le suivi des activités et
            l’évaluation de l’impact des interventions.
            Cependant, les méthodes traditionnelles reposant sur
            des supports papier présentent plusieurs limites :
            lenteur dans la transmission des informations,
            erreurs de saisie et difficultés d’analyse.
          </p>
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-center mb-14"
          >
            Fonctionnalités principales
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {features.map((feature, index) => {

              const Icon = feature.icon

              return (

                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white p-7 rounded-xl shadow-sm hover:shadow-md transition"
                >

                  <Icon
                    className="text-blue-900 mb-4"
                    size={32}
                  />

                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600">
                    {feature.desc}
                  </p>

                </div>

              )

            })}

          </div>

        </div>

      </section>

      {/* COMMENT CA MARCHE */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-center mb-12"
          >
            Comment fonctionne COTA Collect
          </h2>

          <div className="space-y-6">

            {steps.map((step, index) => (

              <div
                key={index}
                data-aos="fade-right"
                className="flex items-center gap-6"
              >

                <div className="bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  {index + 1}
                </div>

                <p className="text-lg text-gray-700">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* AVANTAGES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-center mb-12"
          >
            Valeur ajoutée
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {advantages.map((item, index) => (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-start gap-4"
              >

                <Database className="text-blue-900" />

                <p className="text-lg text-gray-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* VISION */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Globe
            size={40}
            className="mx-auto text-blue-900 mb-6"
          />

          <h2
            data-aos="fade-up"
            className="text-4xl font-bold mb-6"
          >
            Notre vision
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-gray-700"
          >
            À travers COTA Collect, l’ONG COTA ambitionne de
            contribuer à la modernisation des systèmes de gestion
            de l’information dans les projets de développement
            et d’action humanitaire en Afrique.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Users
            size={36}
            className="mx-auto mb-6"
          />

          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Améliorez la gestion de vos données terrain
          </h2>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto cursor-pointer"
          >
            Demander une démonstration
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 text-center relative">

            {/* bouton fermer en haut */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={22} />
            </button>

            {/* icone */}
            <div className="flex justify-center mb-4">
              <AlertCircle className="text-yellow-500" size={48} />
            </div>

            {/* titre */}
            <h3 className="text-4xl font-bold mb-3">
              Ops !
            </h3>

            {/* message */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Merci pour votre intérêt.
              Le produit est actuellement en cours de développement afin
              d’offrir une solution fiable et adaptée aux besoins des
              organisations travaillant sur le terrain.

              Une version de démonstration sera prochainement mise à
              disposition. Nous vous invitons à nous contacter pour
              obtenir plus d’informations ou être informé dès que
              la démo sera disponible.
            </p>

            {/* boutons */}
            <div className="flex gap-3 justify-center">

              <a
                href="https://wa.me/243820838387"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Nous contacter
              </a>

              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg"
              >
                Fermer
              </button>

            </div>

          </div>

        </div>

        )}

    </div>
  )
}

