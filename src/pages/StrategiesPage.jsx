import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { AnimatePresence, motion } from "framer-motion";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

import {
  ArrowLeft,
  Eye,
  Target,
  Briefcase,
  TrendingUp,
  CheckCircle,
  X,
} from "lucide-react";

const PRIMARY = "#CA451B";

/* ============================= */
/* STRATEGIES */
/* ============================= */

const strategies = [
  {
    id: 1,
    name: "CACOP RDC",
    logo: "/images/strategies/cacoprdc.jpg",
    cover:
      "https://i.pinimg.com/736x/5a/d5/b0/5ad5b0c4c856fb6ec23b32669c073f55.jpg",
    description:
      "Consultance Active pour la Capacitation Organisationnelle et Professionnelle.",
    quid:
  "CACOP RDC constitue le pilier d’accompagnement technique, organisationnel et professionnel du COTA. Cette stratégie vise à renforcer les capacités des ONG, entreprises, institutions publiques et acteurs communautaires à travers des mécanismes de consultance, de formation, de planification stratégique et de structuration organisationnelle adaptés aux réalités congolaises.",

    vision:
      "Construire un écosystème institutionnel congolais composé d’organisations performantes, structurées, transparentes et capables de générer un impact durable au sein des communautés.",

    mission:
      "Offrir un accompagnement technique et stratégique innovant permettant aux organisations et professionnels d’améliorer leur gouvernance, leur efficacité opérationnelle, leur leadership et leur capacité d’action.",

    objectif:
      "Renforcer durablement les capacités organisationnelles, techniques et professionnelles des structures partenaires afin d’améliorer leur performance et leur contribution au développement.",

    objectifs: [
      "Appui à la gouvernance organisationnelle",
      "Consultance en gestion de projets et programmes",
      "Renforcement institutionnel des ONG et entreprises",
      "Formation technique et professionnelle",
      "Mise en place d’outils de suivi-évaluation",
      "Accompagnement stratégique et opérationnel",
    ],

    impact:
      "Des organisations plus autonomes, professionnelles et efficaces, capables de piloter des initiatives de développement durables et d’apporter des réponses concrètes aux défis sociaux et économiques des communautés.",
  },

  {
    id: 2,
    name: "NOVATECH",
    logo: "/images/strategies/novatechrdc.jpg",
    cover:
      "https://i.pinimg.com/1200x/98/65/62/98656254a040636c9712a8f2472491aa.jpg",
    description:
      "LABORATOIRE D'INNOVATION TECHNOLOGIQUE POUR UN DEVELOPPEMENT DURABLE",
    quid:
  "NOVATECH est le laboratoire d’innovation technologique du COTA dédié à la transformation numérique, à la modernisation des systèmes d’information et à la création de solutions technologiques adaptées aux défis sociaux, éducatifs, économiques et institutionnels en RDC.",

    vision:
      "Faire émerger une société congolaise où l’innovation technologique devient un moteur d’inclusion, de performance institutionnelle et de développement durable.",

    mission:
      "Concevoir et promouvoir des solutions numériques innovantes capables d’améliorer la gouvernance, la gestion des données, l’accès à l’information et la prise de décision au sein des organisations et des communautés.",

    objectif:
      "Accélérer l’intégration des technologies numériques dans les processus de développement afin de renforcer l’efficacité, la transparence et l’innovation.",

    objectifs: [
      "Développement de plateformes numériques",
      "Digitalisation des systèmes organisationnels",
      "Création d’outils de collecte et d’analyse de données",
      "Formation aux compétences numériques",
      "Innovation technologique communautaire",
      "Appui aux start-ups et jeunes innovateurs",
    ],

    impact:
      "Des institutions et communautés mieux connectées, plus innovantes et capables d’utiliser la technologie comme levier de transformation sociale et économique.",
  },

  {
    id: 3,
    name: "ECOGEN RDC",
    logo: "/images/strategies/ecogenrdc.jpg",
    cover:
      "https://i.pinimg.com/1200x/14/58/b8/1458b8c0998873b2b971b59399e2bf47.jpg",
    description:
      "ECONOMIE ET CREATION D'OPPORTUNITES POUR LE GENIE DES NOUVELLES GENERATIONS EN RDC",
    quid:
  "ECOGEN RDC est une stratégie orientée vers la création d’opportunités économiques et l’accompagnement des nouvelles générations dans le développement de leurs initiatives entrepreneuriales, professionnelles et communautaires.",

    vision:
      "Une jeunesse congolaise autonome, créative et engagée dans le développement économique durable de la République Démocratique du Congo.",

    mission:
      "Favoriser l’émergence d’une nouvelle génération d’entrepreneurs, de leaders et d’innovateurs capables de transformer les ressources locales en opportunités de croissance inclusive.",

    objectif:
      "Renforcer l’autonomisation économique des jeunes et promouvoir l’entrepreneuriat durable comme moteur de résilience communautaire.",

    objectifs: [
      "Accompagnement des initiatives entrepreneuriales",
      "Formation en leadership et gestion",
      "Promotion des activités génératrices de revenus",
      "Incubation des jeunes projets innovants",
      "Insertion socio-professionnelle des jeunes",
      "Développement des compétences économiques",
    ],

    impact:
      "Une nouvelle génération de jeunes autonomes, qualifiés et capables de contribuer activement au développement économique et social de leurs communautés.",
  },

  {
    id: 4,
    name: "VIPES RDC",
    logo: "/images/strategies/vipesrdc.jpg",
    cover:
      "https://i.pinimg.com/1200x/d2/59/84/d2598407f042f256f6f0dacee9c2a051.jpg",
    description:
      "VISION INTEGREE POUR LA PROMOTION DE L'ENVIRONNEMENT ET DE LA SANTE EN RDC",
    quid:
  "VIPES RDC est une stratégie intégrée qui relie les enjeux environnementaux et sanitaires afin de promouvoir des communautés résilientes, conscientes et engagées dans la protection de leur santé et de leur environnement.",

    vision:
      "Des communautés vivant dans un environnement sain, équilibré et durable où la santé publique et la protection de la nature évoluent de manière complémentaire.",

    mission:
      "Développer des initiatives environnementales et sanitaires favorisant la prévention, la sensibilisation communautaire et la gestion durable des ressources naturelles.",

    objectif:
      "Contribuer à l’amélioration des conditions sanitaires et environnementales des populations à travers des approches participatives et durables.",

    objectifs: [
      "Sensibilisation à la santé communautaire",
      "Promotion de l’hygiène et assainissement",
      "Protection des ressources naturelles",
      "Éducation environnementale",
      "Prévention des maladies liées à l’environnement",
      "Actions communautaires de salubrité",
    ],

    impact:
      "Des communautés plus conscientes des enjeux sanitaires et environnementaux, capables d’adopter des comportements responsables et durables pour leur bien-être collectif.",
  },

  {
    id: 5,
    name: "CRESC RDC",
    logo: "/images/strategies/crescrdc.jpg",
    cover:
      "https://i.pinimg.com/736x/4d/28/a0/4d28a0b086049bfa1cb4f3fe4e43dc8c.jpg",
    description:
      "COMMUNICATION RENFORCEE POUR L'ENGAGEMENT ET LA SENSIBILISATION AU CHANGEMENT EN RDC",
    quid:
    "CRESC RDC constitue le mécanisme stratégique de communication, de sensibilisation et de mobilisation sociale du COTA. Cette stratégie vise à influencer positivement les comportements sociaux à travers des campagnes d’information, de plaidoyer et d’engagement communautaire.",

    vision:
      "Une société congolaise mieux informée, engagée et consciente de son rôle dans la transformation sociale et citoyenne.",

    mission:
      "Renforcer la communication stratégique et la sensibilisation communautaire afin de favoriser le changement de comportement et la participation citoyenne.",

    objectif:
      "Utiliser la communication comme outil de transformation sociale, de mobilisation communautaire et de promotion des valeurs citoyennes.",

    objectifs: [
      "Campagnes de sensibilisation communautaire",
      "Communication institutionnelle et sociale",
      "Production de contenus éducatifs",
      "Plaidoyer et engagement citoyen",
      "Mobilisation communautaire",
      "Promotion du changement de comportement",
    ],

    impact:
      "Des communautés mieux informées, plus impliquées et davantage engagées dans les dynamiques de développement, de citoyenneté et de transformation sociale.",
  },

  {
    id: 6,
    name: "ARIA RDC",
    logo: "/images/strategies/ariardc.jpg",
    cover:
      "https://i.pinimg.com/1200x/d2/08/40/d208401a21a08d41709c6192425ab661.jpg",
    description:
      "ACTIONS POUR RENFORCER L'INCLUSION ET L'AUTONOMISATION EN RDC",
    quid:
      "ARIA RDC est une stratégie d’inclusion sociale et d’autonomisation visant à réduire les inégalités et à renforcer la participation active des groupes vulnérables dans les processus de développement communautaire et économique.",

    vision:
      "Une société inclusive où chaque individu, indépendamment de son genre, de sa condition sociale ou de sa vulnérabilité, dispose des mêmes opportunités d’épanouissement et de participation.",

    mission:
      "Promouvoir l’inclusion, l’égalité des chances et l’autonomisation des groupes marginalisés à travers des actions de renforcement des capacités, de protection sociale et d’accompagnement communautaire.",

    objectif:
      "Créer des mécanismes durables favorisant l’inclusion sociale, l’autonomisation économique et la participation citoyenne des populations vulnérables.",

    objectifs: [
      "Promotion de l’inclusion sociale",
      "Autonomisation des groupes vulnérables",
      "Renforcement du leadership communautaire",
      "Accompagnement psychosocial",
      "Promotion de l’égalité des chances",
      "Participation citoyenne et communautaire",
    ],

    impact:
      "Des communautés plus inclusives, solidaires et résilientes où les groupes vulnérables participent activement au développement local et à la prise de décision.",
  },
];

export default function StrategiesPage() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-[#070B10] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081019] via-[#0B1118] to-black" />

      {/* CONTENT */}
      <div
        className={`
        relative z-10 min-h-screen
        transition-all duration-500
        ${active ? "xl:pr-[850px]" : ""}
        `}
      >

        {/* NAVBAR */}
        <NavMenu />
    
        {/* HERO */}
        <section className="pt-32 pb-16 relative overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img
              src="/images/strategies/strategies_hero.jpg" // 👉 remplace par ton image
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto px-6 md:px-10">

              <div
                className="w-24 h-[4px] rounded-full mb-8"
                style={{ backgroundColor: PRIMARY }}
              />

              <h1 className="text-5xl xl:text-7xl font-black leading-none max-w-5xl">
                Nos stratégies d’impact
              </h1>

              <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
                Des interventions structurées pour transformer durablement les
                communautés et renforcer leur résilience.
              </p>

            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-6 my-10 md:px-10">
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-8">

              {strategies.map((s, i) => (
                <motion.div
                  key={s.id}
                  layout
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  onClick={() => setActive(s)}
                  className="
                  group relative overflow-hidden
                  rounded-[32px]
                  bg-white/[0.04]
                  border border-white/10
                  backdrop-blur-xl
                  cursor-pointer
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-80 overflow-hidden">

                    <img
                      src={s.cover}
                      className="
                      w-full h-full object-cover
                      group-hover:scale-110
                      transition duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-6 left-6 right-6">

                      {/* LOGO + TITLE */}
                      <div className="flex items-center gap-4 mb-4">

                        <div
                          className="
                          w-24 h-24 rounded-2xl
                          bg-white/10 backdrop-blur
                          border border-white/10
                          flex items-center justify-center
                          overflow-hidden
                          "
                        >
                          <img
                            src={s.logo}
                            className="w-40 h-40 object-contain rounded-full"
                          />
                        </div>

                        <h2 className="text-2xl font-bold">
                          {s.name}
                        </h2>
                      </div>

                      <p className="text-white/70 text-lg uppercase leading-tight">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  {/* ACCENT */}
                  <div
                    className="h-[3px]"
                    style={{ backgroundColor: PRIMARY }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>

      {/* DETAIL PANEL */}
      <AnimatePresence>
        {active && (
          <>
            {/* OVERLAY */}
            <motion.div
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
              fixed inset-0
              bg-black/50 backdrop-blur-sm
              z-40
              "
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 260,
              }}
              className="
              fixed top-0 right-0 z-50
              h-screen
              w-full
              md:w-[700px]
              xl:w-[850px]
              max-w-full
              bg-[#0D1219]
              shadow-2xl
              overflow-hidden
              "
            >
              <div className="h-full overflow-y-auto">

                {/* HERO */}
                <div className="relative h-[420px] overflow-hidden">

                  <img
                    src={active.cover}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1219] via-black/40 to-black/10" />

                  {/* TOP ACTIONS */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">

                    {/* BACK */}
                    <button
                      onClick={() => setActive(null)}
                      className="
                      flex items-center gap-2
                      px-5 py-3 rounded-2xl
                      bg-black/40 backdrop-blur
                      border border-white/10
                      hover:bg-black/60
                      transition
                      "
                    >
                      <ArrowLeft size={18} />
                      Retour
                    </button>

                    {/* CLOSE */}
                    <button
                      onClick={() => setActive(null)}
                      className="
                      w-12 h-12 rounded-full
                      bg-black/40 backdrop-blur
                      border border-white/10
                      flex items-center justify-center
                      hover:rotate-90 transition
                      "
                    >
                      <X />
                    </button>
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-8 left-8 right-8">

                    <div className="flex items-center gap-5 mb-5">

                      {/* LOGO */}
                      <div
                        className="
                        w-24 h-24 rounded-2xl
                        bg-white/10 backdrop-blur
                        border border-white/10
                        flex items-center justify-center
                        overflow-hidden
                        "
                      >
                        <img
                          src={active.logo}
                          className="w-40 h-40 object-contain"
                        />
                      </div>

                      <h1 className="text-4xl xl:text-5xl font-black">
                        {active.name}
                      </h1>
                    </div>

                    <p className="text-white/80 text-lg leading-tight uppercase">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* BODY */}
                <div className="p-8 xl:p-10 space-y-10">

                  <Section
                    icon={<Eye />}
                    title="Quid"
                    text={active.quid}
                  />

                  <Section
                    icon={<Eye />}
                    title="Vision"
                    text={active.vision}
                  />

                  <Section
                    icon={<Briefcase />}
                    title="Mission"
                    text={active.mission}
                  />

                  <Section
                    icon={<Target />}
                    title="Objectif"
                    text={active.objectif}
                  />

                  {/* OBJECTIFS */}
                  <div>

                    <h3 className="text-2xl font-bold mb-6">
                      Objectifs stratégiques
                    </h3>

                    <div className="grid gap-4">

                      {active.objectifs.map((o, i) => (
                        <div
                          key={i}
                          className="
                          p-5 rounded-2xl
                          bg-white/[0.04]
                          border border-white/10
                          flex items-center gap-4
                          "
                        >
                          <CheckCircle
                            size={20}
                            style={{ color: PRIMARY }}
                          />

                          <span className="text-white/80">
                            {o}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IMPACT */}
                  <div
                    className="
                    p-8 rounded-[28px]
                    text-white
                    "
                    style={{
                      background: `linear-gradient(135deg, ${PRIMARY}, #ff7a4d)`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">

                      <TrendingUp size={24} />

                      <h3 className="text-2xl font-bold">
                        Impact attendu
                      </h3>
                    </div>

                    <p className="text-white/90 text-lg leading-relaxed">
                      {active.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


/* ============================= */
/* SECTION COMPONENT */
/* ============================= */

function Section({ icon, title, text }) {
  return (
    <div className="flex gap-5">

      <div
        className="
        min-w-14 h-14 rounded-2xl
        bg-white/[0.05]
        border border-white/10
        flex items-center justify-center
        "
        style={{ color: PRIMARY }}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-white/65 leading-relaxed text-lg">
          {text}
        </p>
      </div>
    </div>
  );
}