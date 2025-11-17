"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BookOpen,
  BarChart3,
  Wrench,
  ShieldCheck,
  Megaphone,
  Database,
  Layers,
  Users,
  Laptop,
  FileText,
  Leaf,
  CheckSquare,
} from "lucide-react";

export default function NosEquipes() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 100 });
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* === En-tête === */}
      <header
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        data-aos="fade-down"
      >
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
          La Direction générale du COTA repose sur 11 équipes spécialisées,
          complémentaires et dynamiques, qui traduisent la vision de
          développement durable en actions concrètes. Elles assurent la
          conception, la mise en œuvre et le suivi des programmes, tout en
          maintenant des relations solides avec les partenaires et les
          communautés.
        </p>
      </header>

      <section className="space-y-12">
        {/* === Équipe 1 === */}
        <EquipeSection
          bg="white"
          icon={<BookOpen className="w-10 h-10" />}
          title="Équipe d’étude, recherche et innovation"
          role="Cette équipe est au cœur de la production 
          de connaissances. Elle réalise des analyses 
          contextuelles, études sectorielles et recherches 
          appliquées pour guider la conception des projets, 
          l’innovation sociale et l’amélioration continue des interventions."
          attributions={[
            "Réaliser études et diagnostics pour éclairer la stratégie.",
            "Développer des méthodologies participatives et inclusives.",
            "Publier des notes techniques et recommandations politiques.",
          ]}
          composition="Chercheurs, analystes, innovateurs, assistants de recherche."
          responsable="Chef de l’équipe Recherche & Innovation"
          impact="Les données et analyses issues de cette équipe 
          nourrissent la prise de décision et positionnent COTA 
          comme une référence en matière d’expertise technique et
          scientifique."
          iconBg="bg-[#D3E4FF] text-[#0337F]"
        />

        {/* === Équipe 2 === */}
        <EquipeSection
          bg="bg-blue-50"
          icon={<BarChart3 className="w-10 h-10" />}
          title="Équipe de planification, suivi, évaluation
          et apprentissage (PSEA)"
          role="Elle garantit la performance et la transparence 
          des programmes. En suivant les indicateurs et les 
          résultats, cette équipe permet à l’organisation 
          d’apprendre, d’ajuster ses stratégies et de rendre 
          compte de son impact."
          attributions={[
            "Concevoir les cadres logiques et plans de suivi-évaluation.",
            "Assurer la collecte, l’analyse et la capitalisation des données.",
            "Produire des rapports d’évaluation et de leçons apprises.",
          ]}
          composition="Experts en M&E, statisticiens, data managers, coordinateurs de projets."
          responsable="Directeur du suivi et apprentissage"
          impact="Cette équipe renforce la redevabilité et la qualité 
          de mise en œuvre en transformant les données en savoirs
          actionnables."
          iconBg="bg-white text-[#0069BD]"
        />

        {/* === Équipe 3 === */}
        <EquipeSection
          bg="white"
          icon={<Wrench className="w-10 h-10" />}
          title="Équipe d’accompagnement technique et renforcement des capacités"
          role="Chargée d’appuyer les partenaires, institutions et communautés à travers des formations, coaching et transfert de compétences techniques et organisationnelles."
          attributions={[
            "Concevoir des modules de formation et de transfert de compétences.",
            "Assurer le suivi technique et institutionnel des partenaires.",
            "Mettre en œuvre des programmes de renforcement organisationnel.",
          ]}
          composition="Formateurs, coachs, conseillers techniques, facilitateurs."
          responsable="Directeur Technique"
          impact="Elle améliore la performance institutionnelle et contribue à l’autonomie des acteurs locaux et des bénéficiaires."
          iconBg="bg-[#E7F4FF] text-[#008EFF]"
        />

        {/* === Équipe 4 === */}
        <EquipeSection
          bg="bg-blue-50"
          icon={<ShieldCheck className="w-10 h-10" />}
          title="Équipe protection, genre et inclusion"
          role="Cette équipe veille à l’intégration transversale des principes de dignité, d’équité et de non-discrimination dans tous les programmes."
          attributions={[
            "Analyser les risques de protection et élaborer des stratégies de mitigation.",
            "Intégrer le genre et l’inclusion dans les politiques et projets.",
            "Former les équipes et partenaires sur les approches sensibles au genre.",
          ]}
          composition="Conseillers genre, agents de protection, experts inclusion sociale."
          responsable="Directeur Protection & Genre"
          impact="Elle favorise l’équité et renforce la résilience des populations vulnérables dans tous les volets d’intervention."
          iconBg="bg-white text-[#006176]"
        />

        {/* === Équipe 5 === */}
        <EquipeSection
          bg="white"
          icon={<Megaphone className="w-10 h-10" />}
          title="Équipe de sensibilisation, mobilisation communautaire et plaidoyer"
          role="Porte-voix du COTA auprès des communautés, cette équipe conduit des actions de mobilisation sociale et de plaidoyer pour l’adoption de comportements positifs et le changement durable."
          attributions={[
            "Concevoir et mettre en œuvre des campagnes de sensibilisation.",
            "Renforcer les réseaux communautaires et les initiatives locales.",
            "Mener des plaidoyers auprès des décideurs et institutions publiques.",
          ]}
          composition="Agents de communication, animateurs communautaires, experts plaidoyer."
          responsable="Directeur de communication et plaidoyer"
          impact="Elle favorise la participation citoyenne et renforce la visibilité du COTA au niveau local et national."
          iconBg="bg-blue-50 text-blue-700"
        />

        {/* === Équipe 6 === */}
        <EquipeSection
          bg="bg-white"
          icon={<Database className="w-10 h-10" />}
          title="Équipe de collecte, gestion et analyse des données"
          role="Responsable de la fiabilité et de la gestion des données, cette équipe développe les outils et assure la qualité des informations nécessaires à la prise de décision."
          attributions={[
            "Concevoir les outils de collecte numériques et manuels.",
            "Assurer la sécurité et la traçabilité des données collectées.",
            "Produire des analyses et visualisations pour la prise de décision.",
          ]}
          composition="Data analysts, statisticiens, agents de saisie, experts SIG."
          responsable="Responsable Données et Analyse"
          impact="Les données fiables issues de cette équipe renforcent la planification stratégique et la transparence organisationnelle."
          iconBg="bg-[#FFE8E0] text-[#CA451B]"
        />

        {/* === Équipe 7 === */}
        <EquipeSection
          bg="white"
          icon={<Users className="w-10 h-10" />}
          title="Équipe de partenariat, coordination et relations institutionnelles"
          role="Assure la cohérence des actions du COTA avec celles des institutions publiques, ONG, entreprises et bailleurs de fonds. Elle favorise la coopération multisectorielle."
          attributions={[
            "Établir et maintenir des relations avec les partenaires clés.",
            "Coordonner les réunions stratégiques et les alliances techniques.",
            "Négocier et formaliser les conventions de partenariat.",
          ]}
          composition="Chargés de partenariat, diplomates, coordinateurs institutionnels."
          responsable="Directeur des Partenariats"
          impact="Elle accroît la crédibilité du COTA et renforce son influence dans les réseaux de développement."
          iconBg="bg-yellow-50 text-yellow-700"
        />

        {/* === Équipe 8 === */}
        <EquipeSection
          bg="bg-white/50"
          icon={<Laptop className="w-10 h-10" />}
          title="Équipe TIC et solutions numériques"
          role="Conçoit et implémente des outils numériques favorisant la gestion des données, la communication et l’efficacité des programmes."
          attributions={[
            "Développer des solutions logicielles adaptées aux besoins internes.",
            "Assurer la maintenance du système informatique et la cybersécurité.",
            "Former le personnel à l’utilisation des outils digitaux.",
          ]}
          composition="Développeurs, administrateurs systèmes, techniciens IT."
          responsable="Chef du département TIC"
          impact="Elle soutient la transformation numérique du COTA et améliore la productivité interne."
          iconBg="bg-pink-50 text-pink-700"
        />

        {/* === Équipe 9 === */}
        <EquipeSection
          bg="white"
          icon={<FileText className="w-10 h-10" />}
          title="Équipe communication, documentation et visibilité"
          role="Valorise les actions et impacts du COTA à travers la production de contenus visuels et rédactionnels, la gestion des médias et la documentation institutionnelle."
          attributions={[
            "Produire supports, vidéos et publications institutionnelles.",
            "Gérer la présence en ligne et les relations presse.",
            "Assurer la documentation et l’archivage organisationnel.",
          ]}
          composition="Rédacteurs, graphistes, vidéastes, chargés de communication."
          responsable="Community Manager"
          impact="Cette équipe renforce la notoriété du COTA et la confiance des partenaires."
          iconBg="bg-violet-50 text-violet-700"
        />

        {/* === Équipe 10 === */}
        <EquipeSection
          bg="bg-white"
          icon={<Layers className="w-10 h-10" />}
          title="Équipe administrative, financière et logistique"
          role="Pilier opérationnel du COTA, cette équipe assure la gestion transparente des ressources humaines, matérielles et financières."
          attributions={[
            "Assurer la comptabilité, la gestion budgétaire et le reporting.",
            "Superviser les achats et la logistique.",
            "Garantir la conformité administrative et fiscale.",
          ]}
          composition="Comptables, logisticiens, gestionnaires RH, assistants administratifs."
          responsable="Directeur Administratif et Financier"
          impact="Elle garantit la bonne gouvernance et la durabilité financière de l’organisation."
          iconBg="bg-purple-100 text-purple-700"
        />

        {/* === Équipe 11 === */}
        <EquipeSection
          bg="white"
          icon={<Leaf className="w-10 h-10" />}
          title="Équipe développement durable, environnement et résilience"
          role="Cette équipe intègre la durabilité environnementale et la résilience climatique dans les projets du COTA, tout en appuyant les communautés dans la gestion écologique de leurs ressources."
          attributions={[
            "Promouvoir des pratiques écologiques et inclusives.",
            "Mettre en œuvre des projets environnementaux et de résilience.",
            "Sensibiliser sur les effets du changement climatique.",
          ]}
          composition="Experts en environnement, ingénieurs écologues, conseillers durabilité."
          responsable="Chargé de l'environnement"
          impact="Elle contribue directement à la vision du COTA pour un développement équilibré et respectueux de la planète."
          iconBg="bg-[#E1F7F5] text-[#00AB9A]"
        />
      </section>
    </main>
  );
}

/* === Composant générique d’équipe === */
function EquipeSection({
  bg,
  icon,
  title,
  role,
  attributions,
  composition,
  responsable,
  impact,
  iconBg,
}) {
  return (
    <section className={`${bg}`} data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 sm:px-6 lg:px-8 py-10 items-start">
        <div className="lg:col-span-5 flex items-start gap-4">
          <div className={`p-4 rounded-lg ${iconBg}`}>{icon}</div>
          <div>
            <h2 className="text-xl font-bold text-[#03337F]">{title}</h2>
            <p className="text-gray-700 mt-2">{role}</p>
          </div>
        </div>

        <div className="lg:col-span-7 mt-6 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Attributions
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {attributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckSquare className="w-5 h-5 text-[#00AB9A] mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Composition & responsable
              </h3>
              <p className="text-sm text-gray-700 mb-2">{composition}</p>
              <p className="text-sm text-gray-700">
                Responsable :{" "}
                <span className="font-medium text-[#CA451B]">
                  {responsable}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-700">{impact}</div>
        </div>
      </div>
    </section>
  );
}
