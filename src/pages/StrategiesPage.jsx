import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

// 👉 adapte ces imports selon ton projet
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

import headerImg from "../assets/atelier.png"

const strategies = [
  {
    id: 1,
    title: "ARIA RDC",
    logo: "/images/aria.png",
    color: "text-[#0069BD]",
    underline: "bg-red-500",
    subtitle: "Action pour renforcer l'inclusion et l'autonomisation en RDC",
    description:
    <>
      <p className="text-gray-500 text-md md:text-lg leading-relaxed">
        La République Démocratique du Congo (RDC) dispose d’un cadre 
        juridique protecteur des droits humains (Constitution de 2006, 
        ratification du PIDCP, du PIDESC, de la Charte africaine des droits 
        de l’homme et des peuples, etc.). Cependant, l’écart entre les normes 
        et les réalités sur le terrain reste considérable, en particulier pour 
        les groupes historiquement marginalisés :
      </p>

      <ul className="list-disc pl-6 space-y-1 my-2 text-gray-500 text-md md:text-lg leading-relaxed">
          <li> 
              <span className="font-extrabold">Femmes et filles : </span>
              violences basées sur le genre (VBG) endémiques, 
              faible accès à la justice foncière et successorale, sous-représentation 
              dans les instances de décision (moins de 15% aux postes électifs locaux).
          </li>
          <li> 
              <span className="font-extrabold">Peuples autochtones (Pygmées) : </span>
              discriminations territoriales, accès limité aux soins de santé et à l’état civil, faible participation aux processus de développement local.
          </li>
          <li> 
              <span className="font-extrabold"> Autres groupes vulnérables :</span>
                minorités ethniques, déplacés internes, populations des zones rurales isolées.
          </li>
      </ul>

      <p className="text-gray-500 py-5 text-md md:text-lg leading-relaxed">
        COTA, à travers son axe « Droits de l’Homme et Gouvernance » (Document Directeur, p. 8), 
        a pour mission d’ancrer les pratiques organisationnelles et institutionnelles dans le respect, 
        la protection et la réalisation des droits humains fondamentaux. La stratégie ARIA RDC est le véhicule 
        opérationnel de cet engagement, en cohérence avec les objectifs de développement durable (ODD 5, 10, 16).
      </p>

      <p className="text-gray-500 text-md md:text-lg leading-relaxed">
        A travers ARIA RDC, COTA ONG ambitionne de construire une RDC où chaque citoyen, sans exclusion, jouit de ses droits fondamentaux et participe 
        activement à la gouvernance de sa communauté. 
        Renforcer l’inclusion sociale, l’accès à la justice et 
        la gouvernance participative en faveur des groupes marginalisés, par le renforcement 
        des capacités des acteurs locaux, l’accompagnement des institutions publiques et privées, 
        et le plaidoyer fondé sur des données probantes.
      </p>
    </>,
      
  },
  {
    id: 2,
    title: "CRESC RDC",
    logo: "/images/cresc.png",
    color: "text-[#006176] ",
    underline: "bg-yellow-500",
    subtitle: "Communication Renforcée pour l'Engagement et la Sensibilisation au Changement en RDC",
    description:
      "CRESC RDC vise à renforcer la communication et la sensibilisation autour des enjeux sociaux majeurs.",
    developpement:
      "Ce programme met en œuvre des campagnes de sensibilisation, des formations et des outils de communication pour influencer positivement les comportements.",
  },
  {
    id: 3,
    title: "ECOGEN RDC",
    logo: "/images/ecogen.png",
    color: "text-[#CA451B]",
    underline: "bg-black",
    subtitle: "Économie et Creation d'Opportunités pour le Génie des Nouvelles Generations en RDC",
    description:
      "ECOGEN RDC soutient la création d'opportunités économiques pour les jeunes et les communautés vulnérables.",
    developpement:
      "Il accompagne les jeunes dans l’entrepreneuriat, la formation professionnelle et l’accès aux ressources économiques.",
  },

  {
    id: 4,
    title: "VIPES RDC",
    logo: "/images/vipes.png",
    color: "text-green-600",
    underline: "bg-red-500",
    subtitle: "Vision Integrée pour la Promotion de l'Environnement et de la santé en RDC",
    description: "Description stratégie 4...",
    developpement: "Développement stratégie 4...",
  },
  {
    id: 5,
    title: "NOVATECH",
    logo: "/images/novatech_logo.png",
    color: "text-black",
    underline: "bg-gray-400",
    subtitle: "LABORATOIRE D'INNOVATION TECHNOLOGIQUE",
    description: "Description stratégie 5...",
    developpement: "Développement stratégie 5...",
  },
  {
    id: 6,
    title: "INITIATIVE CAV",
    logo: "/images/cav.jpg",
    color: "text-[#FF9800]",
    underline: "bg-[#009688] ",
    subtitle: "Sous-titre stratégie 6",
    description: "Description stratégie 6...",
    developpement: "Développement stratégie 6...",
  },
]

export default function StrategiesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
      {/* HEADER GLOBAL */}
      <NavMenu />

      {/* HERO */}
        <div
        className="h-[300px] md:h-[350px] bg-cover bg-center relative flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${headerImg})` }}
        >
        <div className="absolute inset-0 bg-[#006176]/80"></div>

        {/* TITRE */}
        <h1 className="relative text-white text-4xl md:text-7xl font-extrabold mb-4 mt-20">
            Nos stratégies
        </h1>

        {/* DESCRIPTION */}
        <p 
            className="relative text-lg text-gray-100 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            Pour concrétiser sa vision, COTA déploie ses activités à travers 6 stratégies clés. 
            Découvrez comment nous nous projetons vers l’horizon avec détermination.
        </p>
        </div>

      {/* CONTENU PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {strategies.map((item) => (
          <section key={item.id} data-aos="fade-up" className="mb-16">
            
            {/* Ligne séparation */}
            <div className="border-t border-gray-300 mb-6"></div>

            <div className="grid md:grid-cols-3 gap-6">

              {/* LOGO */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-[180px] object-contain"
                />
              </div>

              {/* CONTENU */}
              <div className="md:col-span-2 text-center md:text-left">

                {/* TITRE */}
                <h2 className={`text-2xl md:text-3xl font-bold ${item.color}`}>
                  {item.title}
                </h2>

                {/* BARRE */}
                <div className={`w-20 h-1 my-2 mx-auto md:mx-0 ${item.underline}`}></div>

                {/* SOUS TITRE */}
                <h3 className="text-gray-700 font-semibold mb-3 uppercase text-xl">
                  {item.subtitle}
                </h3>

                {/* TRAIT */}
                <div className="border-t border-gray-300 mb-4"></div>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-justify mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* DÉVELOPPEMENT */}
                <p className="text-gray-600 text-justify leading-relaxed">
                  {item.developpement}
                </p>

              </div>
            </div>
          </section>
        ))}

      </div>

      {/* FOOTER */}
      <Footer />
    </>
  )
}