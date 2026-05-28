import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  TrendingUp,
  Megaphone,
  Cross,
  Rocket,
  Scale,
  ArrowRight,
  Briefcase,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const strategies = [
  {
    id: 1,
    name: "Accompagnement Technique et Consultance Organisationnelle",
    icon: Briefcase,

    shortDescription:
      "Renforcer l’efficacité, la durabilité et l’impact des organisations partenaires à travers une meilleure gouvernance et une gestion axée sur les résultats.",

    description:
      `Nous accompagnons les entreprises, les organisations de la société civile, les ONG et les institutions publiques dans le renforcement de leurs capacités organisationnelles, stratégiques et opérationnelles. À travers une approche participative et orientée vers les résultats, nous proposons des services de conseil, de planification stratégique, de structuration institutionnelle, de suivi-évaluation et d’amélioration de la performance afin de favoriser une gouvernance efficace, durable et adaptée aux réalités locales.`,

    objectives: [
      "Appui à la gestion stratégique et à la planification institutionnelle des organisations et structures partenaires",
      "Renforcement du management organisationnel, du leadership institutionnel et des mécanismes de gouvernance interne",
      "Conception, formulation, suivi et évaluation de projets et programmes de développement communautaire",
      "Appui au développement institutionnel, à la structuration organisationnelle et à l’amélioration des processus internes",
      "Mise en place d’outils de suivi-évaluation, de redevabilité et de gestion axée sur les résultats",
      "Accompagnement dans l’élaboration de plans stratégiques, plans opérationnels et politiques institutionnelles",
      "Renforcement des capacités techniques et administratives des équipes et responsables d’organisations",
      "Appui à la mobilisation des ressources, à la gestion des partenariats et à la durabilité organisationnelle",
    ],

    impact:
      "Des organisations plus structurées, performantes et capables de produire un impact durable dans leurs communautés et secteurs d’intervention.",

    color: "from-emerald-500 to-green-700",
  },

  {
    id: 2,
    name: "Innovation technologique",
    icon: Rocket,

    shortDescription:
      "Faciliter la prise de décision fondée sur des données fiables et encourager l’innovation technologique au service du développement durable.",

    description:
      `Nous promouvons la transformation numérique des organisations et des communautés à travers le développement de solutions technologiques innovantes, accessibles et adaptées aux réalités locales. Notre approche vise à améliorer l’efficacité opérationnelle, la gestion des données, la communication institutionnelle et l’accès aux services numériques afin d’accélérer l’impact des projets de développement.`,

    objectives: [
      "Développement de plateformes web et d’applications mobiles adaptées aux projets et programmes de développement",
      "Conception de systèmes numériques de suivi-évaluation et de gestion de l’information",
      "Analyse, traitement statistique et visualisation de données pour la prise de décision stratégique",
      "Digitalisation des processus administratifs et opérationnels des organisations",
      "Renforcement des capacités des acteurs à l’utilisation des outils numériques et technologiques",
      "Promotion de l’innovation locale et des solutions numériques inclusives",
      "Mise en place de solutions de communication et de collaboration digitales",
      "Appui à la transformation digitale des institutions et organisations partenaires",
    ],

    impact:
      "Une meilleure digitalisation des processus, une gestion intelligente des données et une amélioration de l’efficacité opérationnelle des structures partenaires.",

    color: "from-blue-700 to-blue-900",
  },

  {
    id: 3,
    name: "Entrepreneuriat et moyens de subsistance",
    icon: TrendingUp,

    shortDescription:
      "Stimuler l’autonomisation économique et l’innovation locale pour un développement durable porté par les communautés elles-mêmes.",

    description:
      `Nous accompagnons les jeunes, les femmes, les entrepreneurs et les initiatives locales dans le développement d’activités économiques durables et inclusives. À travers des programmes de formation, d’accompagnement technique et de mentorat, nous favorisons la création d’emplois, l’innovation entrepreneuriale et le renforcement des capacités économiques des communautés.`,

    objectives: [
      "Formation et accompagnement des jeunes entrepreneurs et porteurs de projets innovants",
      "Appui à la création, à la gestion et au développement des activités génératrices de revenus (AGR)",
      "Renforcement des capacités en gestion financière, marketing et entrepreneuriat",
      "Facilitation de l’accès au financement et aux ressources productives",
      "Promotion de l’entrepreneuriat féminin et de l’inclusion économique des groupes vulnérables",
      "Mise en réseau des entrepreneurs, partenaires techniques et investisseurs",
      "Développement des chaînes de valeur locales et promotion de l’économie communautaire",
      "Encouragement des initiatives économiques durables et respectueuses de l’environnement",
    ],

    impact:
      "La création d’opportunités économiques durables, la réduction du chômage et le renforcement de l’autonomie financière des jeunes et des communautés.",

    color: "from-sky-500 to-blue-700",
  },

  {
    id: 4,
    name: "Santé et protection de l’environnement",
    icon: Cross,

    shortDescription:
      "Favoriser des communautés saines et un environnement durable à travers une approche intégrée santé–environnement.",

    description:
      `Nos interventions intègrent la promotion de la santé communautaire, la prévention des risques sanitaires et la protection de l’environnement à travers des approches participatives et durables. Nous soutenons des initiatives de sensibilisation, de prévention, d’hygiène, d’assainissement et de gestion durable des ressources naturelles afin de renforcer la résilience des communautés face aux défis sanitaires et environnementaux.`,

    objectives: [
      "Promotion de la santé communautaire et des pratiques d’hygiène et d’assainissement",
      "Sensibilisation sur la prévention des maladies et les comportements favorables à la santé",
      "Gestion des risques de catastrophes et renforcement de la résilience communautaire",
      "Lutte contre la pollution, la déforestation et la dégradation environnementale",
      "Promotion des énergies renouvelables et des pratiques écologiques durables",
      "Appui aux initiatives locales de protection de l’environnement et de conservation des ressources naturelles",
      "Renforcement des capacités des communautés sur les enjeux climatiques et environnementaux",
      "Promotion d’un environnement sain favorisant le bien-être des populations",
    ],

    impact:
      "Des communautés plus résilientes face aux défis sanitaires et environnementaux grâce à des pratiques durables et responsables.",

    color: "from-orange-500 to-amber-700",
  },

  {
    id: 5,
    name: "Communication et sensibilisation",
    icon: Megaphone,

    shortDescription:
      "Renforcer la participation citoyenne et la diffusion d’informations fiables au service du changement social et institutionnel.",

    description:
      `Nous développons des stratégies de communication sociale, institutionnelle et communautaire visant à promouvoir la sensibilisation, le plaidoyer et la mobilisation citoyenne. Grâce à des outils modernes et des approches participatives, nous renforçons la visibilité des actions, la diffusion d’informations fiables et l’engagement des communautés autour des enjeux de développement.`,

    objectives: [
      "Conception et mise en œuvre de campagnes de communication sociale et institutionnelle",
      "Production de supports visuels, audiovisuels et numériques adaptés aux publics cibles",
      "Organisation d’activités de sensibilisation, plaidoyer et mobilisation communautaire",
      "Renforcement des capacités en communication stratégique et storytelling social",
      "Promotion de la participation citoyenne et de l’engagement communautaire",
      "Gestion de la visibilité institutionnelle et valorisation des actions des partenaires",
      "Développement de stratégies digitales et gestion des médias sociaux",
      "Diffusion d’informations fiables pour encourager le changement social positif",
    ],

    impact:
      "Une meilleure mobilisation communautaire, une sensibilisation accrue et une visibilité renforcée des actions institutionnelles et sociales.",

    color: "from-lime-500 to-green-700",
  },

  {
    id: 6,
    name: "Protection et Gouvernance responsable",
    icon: Scale,

    shortDescription:
      "Contribuer à l’émergence d’une société juste, équitable et respectueuse des droits fondamentaux de tous.",

    description:
      `Nous œuvrons pour la promotion des droits humains, de la justice sociale et de la gouvernance démocratique à travers des actions de sensibilisation, de plaidoyer, de renforcement des capacités et d’accompagnement institutionnel. Nos interventions visent à promouvoir la transparence, la participation citoyenne, l’inclusion sociale et la protection des groupes vulnérables.`,

    objectives: [
      "Sensibilisation aux droits humains, à l’égalité de genre et à l’inclusion sociale",
      "Promotion de la gouvernance démocratique, de la transparence et de la redevabilité",
      "Renforcement des capacités des acteurs communautaires et institutionnels sur les droits fondamentaux",
      "Prévention des conflits et promotion de la cohésion sociale et du vivre-ensemble",
      "Plaidoyer pour la justice sociale, l’égalité des chances et la protection des groupes vulnérables",
      "Appui aux initiatives de participation citoyenne et de contrôle citoyen",
      "Promotion de mécanismes de gouvernance locale participative",
      "Accompagnement des institutions dans l’intégration des principes éthiques et démocratiques",
    ],

    impact:
      "Le renforcement de la justice sociale, de la cohésion communautaire et des mécanismes démocratiques de gouvernance participative.",

    color: "from-violet-500 to-purple-700",
  },
];

export default function StrategiesPage() {
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <NavMenu />

      <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-700 text-white py-28 px-6 lg:px-16">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%)]"></div>

          <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center py-10">
            <div data-aos="fade-right">
              <span className="inline-block my-10 px-8 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-wide mb-6">
                Domaines d'intervention
              </span>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Construire un impact durable et participatif au service des
                communautés.
              </h1>

              <p className="text-lg text-emerald-100 leading-relaxed max-w-2xl mb-8">
                Découvrez les domaines qui guident les interventions,
                les actions communautaires et les initiatives de transformation
                sociale de notre organisation.
              </p>

              <button
                onClick={() => {
                  const section = document.getElementById("strategies-grid");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 bg-white text-emerald-800 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Explorer les stratégies
                <ArrowRight size={20} />
              </button>
            </div>

            {/* HERO MINI CARDS */}
            <div
              data-aos="fade-left"
              className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] p-8 shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-5">
                {strategies.slice(0, 4).map((strategy, index) => {
                  const Icon = strategy.icon;

                  return (
                    <div
                      key={index}
                      className="bg-white/10 rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${strategy.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <Icon size={28} />
                      </div>

                      <h3 className="font-semibold text-sm md:text-base leading-snug">
                        {strategy.name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIES GRID */}
        <section
          id="strategies-grid"
          className="max-w-6xl mx-auto px-6 lg:px-16 py-24"
        >
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-emerald-700 font-semibold uppercase tracking-widest text-sm">
              Nos axes d’intervention
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Une approche stratégique globale
            </h2>

            <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
              Chaque domaine représente un engagement concret en faveur du
              développement humain, de la justice sociale et de la transformation
              durable des communautés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;

              return (
                <div
                  key={strategy.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group bg-white rounded-[28px] border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${strategy.color} flex items-center justify-center text-white shadow-xl mb-6 group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon size={38} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 leading-snug">
                    {strategy.name}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-8">
                    {strategy.shortDescription}
                  </p>

                  <button
                    onClick={() => setSelectedStrategy(strategy)}
                    className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Voir les détails
                    <ArrowRight size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* DETAILS PANEL */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-[650px] bg-white z-50 shadow-2xl transform transition-transform duration-500 overflow-y-auto ${
            selectedStrategy ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {selectedStrategy && (
            <>
              <div
                className={`relative bg-gradient-to-br ${selectedStrategy.color} text-white p-8 md:p-10`}
              >
                <button
                  onClick={() => setSelectedStrategy(null)}
                  className="absolute top-6 left-6 bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full backdrop-blur-md"
                >
                  <ArrowLeft size={20} />
                </button>

                <div className="mt-16">
                  <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                    <selectedStrategy.icon size={48} />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                    {selectedStrategy.name}
                  </h2>

                  <p className="text-lg text-white/90 leading-relaxed">
                    {selectedStrategy.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-10">
                {/* DESCRIPTION */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-5">
                    Présentation détaillée
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg">
                    {selectedStrategy.description}
                  </p>
                </div>

                {/* OBJECTIFS */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Objectifs stratégiques
                  </h3>

                  <div className="space-y-4">
                    {selectedStrategy.objectives.map((objective, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
                      >
                        <div className="min-w-[40px] h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                          <CheckCircle2 size={20} />
                        </div>

                        <p className="text-slate-700 leading-relaxed font-medium">
                          {objective}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* IMPACT */}
                <div className="mt-12 bg-slate-100 rounded-[28px] p-8 border border-slate-200">
                  <h4 className="text-xl font-bold mb-4">
                    Impact attendu
                  </h4>

                  <p className="text-slate-600 leading-relaxed">
                    {selectedStrategy.impact}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* BACKDROP */}
        {selectedStrategy && (
          <div
            onClick={() => setSelectedStrategy(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          />
        )}
      </div>

      <Footer />
    </>
  );
}