import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Download,
  Share2,
  Copy,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Briefcase,
} from "lucide-react";

const pageUrl = window.location.href;

export default function Offre02() {
  const { id } = useParams();
  const [openShare, setOpenShare] = useState(false);

  // === Donnée simulée (à remplacer par API plus tard)
  const offre = {
    titre: "Directeur(trice) Financier(e) et Administratif(ve)",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "02/AMI-DAF/COTA/026",
    publication: "25 janvier 2026",
    cloture: "28 février 2026",
    lieu: "Tanganyika",
    nombre: 1,
    nature: "Volontariat (bénévolat) indemnisé",
    typeContrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
    responsable: "Directeur Général",
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Lien copié !");
  };

  return (
    <div className="text-gray-800 flex justify-center">
      {/* === CONTENU PRINCIPAL CENTRÉ ET LARGEUR MAX === */}
      <section className="w-full max-w-6xl px-4 pt-28 py-12 space-y-12">
        <h3 className="text-sm uppercase font-semibold mb-5 text-center">
          APPEL A MANIFESTATION D’INTERET N°02/AMI-DAF/COTA/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement d’Un(e) Directeur(trice) Financier(e) et Administratif(ve) pour le compte du Corps Technique pour l’Accompagnement (COTA ONG)
        </h1>

        {/* === TABLEAU RÉCAP === */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <tbody className="divide-y xl:text-lg">
              <tr><td className="font-semibold p-3">Titre du poste</td><td className="p-3">{offre.titre}</td></tr>
              <tr><td className="font-semibold p-3">Organisation</td><td className="p-3">{offre.organisation}</td></tr>
              <tr><td className="font-semibold p-3">Référence</td><td className="p-3">{offre.reference}</td></tr>
              <tr><td className="font-semibold p-3">Date de publication</td><td className="p-3">{offre.publication}</td></tr>
              <tr><td className="font-semibold p-3">Date de clôture</td><td className="p-3">{offre.cloture}</td></tr>
              <tr><td className="font-semibold p-3">Lieu d’affectation</td><td className="p-3">{offre.lieu}</td></tr>
              <tr><td className="font-semibold p-3">Nombre</td><td className="p-3">{offre.nombre}</td></tr>
              <tr><td className="font-semibold p-3">Nature du contrat</td><td className="p-3">{offre.nature}</td></tr>
              <tr><td className="font-semibold p-3">Type de contrat</td><td className="p-3">{offre.typeContrat}</td></tr>
              <tr><td className="font-semibold p-3">Responsable hiérarchique</td><td className="p-3">{offre.responsable}</td></tr>
            </tbody>
          </table>
        </div>

        {/* === SECTIONS DETAILLEE === */}
        <ArticleSection
          title="À propos du COTA"
          content={
            <>
              <p>
                Créé depuis le 20 Octobre 2020 selon l’esprit de la loi N°004/2001 du 20 juillet 2001 portant dispositions 
                générales applicables aux associations sans but lucratif et les établissements d’utilité publique, 
                le Corps Technique pour l’Accompagnement, « COTA » en sigle, est une organisation non gouvernementale 
                de droit congolais, sans but lucratif, apolitique, non confessionnelle, humanitaire et professionnelle, 
                spécialisée dans l’accompagnement technique et stratégique aux organisations, entreprises, institutions 
                et aux communautés, dans le but de renforcer leurs capacités, améliorer leurs performances et promouvoir 
                un développement inclusif, durable et participatif en République Démocratique du Congo.
              </p>
              <p>
                Basée à Kalemie, dans la province du Tanganyika, l’ONG  COTA oriente ses actions autour des axes dont : accompagnement 
                et consultance organisationnelle (appui stratégique aux entreprises, ONG et institutions dans la gestion de projets, 
                le développement organisationnel et institutionnel), innovation et technologies numériques (conception et mise en œuvre 
                de solutions technologiques adaptées aux besoins des organisations et des communautés ; développement de systèmes de 
                suivi-évaluation, traitement statistique et visualisation de données pour une meilleure prise de décision), entrepreneuriat, 
                développement économique et moyens de subsistance : accompagnement des jeunes, des start-ups et des initiatives locales et/ou 
                les AGR pour renforcer leurs capacités et faciliter l’accès aux ressources), santé et protection de l’environnement (conception 
                et mise en œuvre de programmes intégrant la durabilité environnementale et la promotion de la santé publique), Communication et 
                sensibilisation (élaboration de stratégies de communication et de plaidoyer pour renforcer la diffusion d’informations utiles et 
                mobiliser les acteurs sociaux sur le changement de comportements), droits de l’homme et gouvernance (promotion et protection des 
                droits humains fondamentaux, accompagnement des institutions et organisations dans l’intégration de pratiques de bonne gouvernance 
                et d’éthique).
              </p>
              <p>
                L’ONG COTA ambitionne de devenir un acteur de référence en accompagnement technique et en innovation en République Démocratique du Congo, 
                contribuant à la construction d’organisations performantes, d’entreprises durables et de communautés résilientes, dans le respect des 
                droits humains et de la gouvernance responsable.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Contexte"
          content={
            <>
              <p>
                Dans le cadre de renforcer son dispositif de gestion et ses capacités opérationnelles en rapport 
                avec la mise en œuvre de son plan d’action 2026-2027 (PAO-27) en particulier et de ses projets 
                et programmes en général, l’ONG COTA cherche à recruter un(e) Directeur(trice) Financier(e) 
                et Administratif(ve) pour sa direction du Tanganyika. 
              </p>
              <p>
                Ce poste stratégique vise à garantir la bonne gouvernance financière, 
                la conformité administrative, la transparence et la durabilité financière de 
                l’organisation, conformément aux standards des ONG nationales et internationales et aux exigences 
                des partenaires techniques et financiers.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Mission principale"
          content={
            <>
              <p>
                Sous la hiérarchie directe du Directeur Général, le/la Directeur(trice) 
                Administratif(ve) et Financier(e) est responsable de la planification, 
                de l’organisation, de la supervision et du contrôle de l’ensemble 
                des fonctions administratives, financières et comptables de COTA.
              </p>
              <p>
                Il/elle veille à une gestion efficiente, rigoureuse et conforme 
                des ressources financières et matérielles, tout en appuyant la 
                direction dans la prise de décision stratégique, la gestion des 
                risques et la pérennisation institutionnelle de l’organisation.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <p className="font-bold text-lg mb-2">
                1.	Gestion financière et budgétaire stratégique
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Élaborer le budget institutionnel annuel et les budgets détaillés des projets inscrits dans le PAO-26 ; </li>
                <li>Mettre en place un système de planification financière pluriannuelle ; </li>
                <li>Assurer le suivi budgétaire régulier, analyser les écarts et proposer des mesures correctives ; </li>
                <li>Veiller à l’optimisation des ressources financières et à la maîtrise des coûts ; </li>
                <li>Garantir la disponibilité de la trésorerie pour la mise en œuvre des activités. </li>
              </ul>
              <p className="font-bold text-lg mb-2">
                2.	Comptabilité, trésorerie et contrôle financier
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Superviser la tenue de la comptabilité générale et analytique ;</li>
                <li>Valider les écritures comptables et s’assurer de la conformité des pièces justificatives ; </li>
                <li>Gérer la trésorerie, les comptes bancaires et les rapprochements bancaires ; </li>
                <li>Mettre en place des mécanismes de séparation des tâches et de contrôle interne ; </li>
                <li>Préparer les clôtures comptables mensuelles et annuelles. </li>
              </ul>

              <p className="font-bold text-lg mb-2">
                3. Reporting financier et relations avec les bailleurs
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Produire des rapports financiers fiables, complets et dans les délais ; </li>
                <li>S’assurer du respect des exigences financières et contractuelles des bailleurs ; </li>
                <li>Appuyer la Direction dans la négociation financière avec les partenaires ; </li>
                <li>Participer à la préparation des propositions de projets (volet budgétaire) ; </li>
                <li>Assurer la traçabilité des fonds et la redevabilité financière. </li>
              </ul>

              <p className="font-bold text-lg mb-2">
                4. Administration générale et conformité légale
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Élaborer, mettre à jour et faire appliquer les procédures administratives et financières ; </li>
                <li>Assurer la conformité aux obligations fiscales, sociales et réglementaires ; </li>
                <li>Superviser la gestion administrative du personnel (contrats, paie, avantages) ; </li>
                <li>Gérer les dossiers administratifs, conventions et contrats de partenariat ; </li>
                <li>Organiser l’archivage physique et numérique des documents administratifs et financiers. </li>
              </ul>

              <p className="font-bold text-lg mb-2">
                5. Audit, gestion des risques et amélioration continue
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mettre en place un système de contrôle interne et de gestion des risques ; </li>
                <li>Préparer et coordonner les audits internes et externes ; </li>
                <li>Mettre en œuvre les recommandations issues des audits ; </li>
                <li>Identifier les risques financiers, administratifs et opérationnels ; </li>
                <li>Proposer des mesures d’amélioration continue des systèmes de gestion. </li>
              </ul>
              <p className="font-bold text-lg mb-2">
                6. Management et renforcement des capacités
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encadrer, former et évaluer le personnel administratif et financier ; </li>
                <li>Renforcer les capacités des équipes terrain en matière de gestion financière ; </li>
                <li>Promouvoir une culture organisationnelle basée sur l’éthique et la transparence ; </li>
                <li>Veiller au respect des politiques internes (code de conduite, PSEA, anti-fraude). </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Compétences et qualifications requises"
          content={
            <>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diplôme universitaire Bac+3 ou Bac+5 en Comptabilité, Finances, Économie, Gestion, Audit ou domaine équivalent. </li>
                <li>Une formation certifiante en gestion financière des ONG, audit ou contrôle interne constitue un atout important. </li>
                <li>Minimum 3 à 5 ans d’expérience progressive en gestion administrative et financière ; </li>
                <li>Expérience avérée à un poste de responsabilité (DAF, RAF, Chef comptable) ; </li>
                <li>Expérience confirmée dans la gestion de fonds de bailleurs ; </li>
                <li>Bonne connaissance du fonctionnement des ONG nationales et internationales ; </li>
                <li>Maîtrise approfondie de la comptabilité générale et analytique ONG ; </li>
                <li>Élaboration, exécution et suivi de budgets multi-projets ; </li>
                <li>Gestion de la trésorerie et des flux financiers ; </li>
                <li>Mise en place et application de procédures financières ; </li>
                <li>Préparation et gestion des audits financiers ; </li>
                <li>Maîtrise avancée des outils informatiques MS Excel (tableaux dynamiques, formules avancées), Logiciels comptables et financiers, Outils de reporting financier ; </li>
                <li>Capacité à interpréter des données financières pour la prise de décision. </li>
                <li>Intégrité morale irréprochable et sens élevé de l’éthique ; </li>
                <li>Grande rigueur, organisation et attention aux détails ; </li>
                <li>Excellentes capacités de communication et de collaboration ; </li>
                <li>Sens de la confidentialité et de la discrétion ; </li>
                <li>Capacité d’anticipation et de gestion des risques ; </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Conditions de soumission"
          content={
            <>
              <p>
                Les dossiers de candidature doivent impérativement contenir les pièces
                suivantes :
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Une lettre de motivation adressée au Directeur Général du Corps
                  Technique pour l’Accompagnement (COTA)
                </li>
                <li>
                  Un Curriculum Vitae à jour, mentionnant les coordonnées professionnelles
                  d’au moins trois (3) personnes de référence (les adresses e-mail
                  professionnelles sont vivement recommandées)
                </li>
                <li>Le diplôme universitaire le plus récent</li>
                <li>Une copie de la carte d’identité</li>
              </ul>

              <p className="font-semibold text-red-700 mt-6">
                Note Importante :
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  L’équipe d’étude des dossiers de candidature se réserve le droit de
                  contacter les personnes de référence selon les coordonnées mentionnées
                  et de rejeter, sans avis préalable, tout dossier contenant des
                  informations fausses
                </li>
                <li>
                  Un candidat ne peut soumettre sa candidature à plus d’un poste
                </li>
                <li>
                  La référence et le lieu d’affectation du poste doivent être clairement
                  mentionnés dans la lettre de motivation
                </li>
                <li>
                  Toute candidature ne respectant pas les exigences du poste seront 
                  rejetées sans nécessité d’en informer le candidat.
                </li>
                <li>Seuls les candidats dont les dossiers sont retenus seront contactés.</li>
                <li>Les candidatures féminines et celles de personnes vivant avec handicap sont vivement encouragées. </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          content={
            < >
              <div className="text-gray-400">
                <p className="italic">
                  L’ONG COTA adopte une approche transversale fondée sur le respect des droits fondamentaux, la protection des personnes vulnérables 
                  et la redevabilité envers les communautés, conformément aux politiques des standards sphère et aux principes humanitaires internationaux. 
                  Une attention particulière est apportée à l’application de la politique de tolérance zéro à l’égard de toute forme d’exploitation et d’abus 
                  sexuels. Tous les membres de l’équipe projet, y compris le personnel terrain et les partenaires locaux, sont informés et engagés formellement 
                  au respect des normes PEAS à travers la signature d’un code de conduite obligatoire, une formation spécifique PEAS lors du démarrage du projet 
                  et l’intégration des principes PEAS dans les procédures quotidiennes de mise en œuvre et de suivi. Toute allégation d’exploitation ou d’abus 
                  sera traitée de manière confidentielle, rapide et conforme aux mécanismes établis.
                </p> <br />
                <p className="italic">
                  Dans la mise en œuvre des projets et programmes, les bénéficiaires sont systématiquement informés de leurs droits et des mécanismes de plainte disponibles 
                  dès le lancement du projet. Ces mécanismes permettent aux communautés de signaler toute préoccupation liée à la mise en œuvre des projets, 
                  y compris les questions de PEAS, de manière sécurisée et sans crainte de représailles.
                </p><br />
                <p className="italic">
                  Tout projet garantit une participation volontaire, inclusive et respectueuse de la dignité humaine avec une attention particulière accordée à l’inclusion 
                  des femmes, des jeunes, des groupes minoritaires, des personnes âgées et des personnes vivant avec handicap ; l’adaptation des activités pour 
                  assurer l’accessibilité physique et informationnelle ; la création d’espaces sûrs favorisant l’expression libre des besoins et des préoccupations.
                </p><br />
                <p className="italic">
                  Tout projet de l’ONG  COTA est guidé par les principes humanitaires de neutralité, impartialité, humanité et indépendance, ainsi que par l’approche « Do No Harm ».  
                  Les activités sont conçues et mises en œuvre de manière à éviter toute exacerbation des tensions communautaires, prévenir les risques de stigmatisation ou d’exclusion, 
                  réduire les effets négatifs potentiels liés à l’intervention. Une analyse contextuelle est régulièrement actualisée afin d’adapter les activités en fonction de 
                  l’évolution des risques et du contexte local.
                </p>
              </div>
            </>
          }
        />
      </section>

      {/* === BOUTONS FLOTTANTS CENTRÉS === */}
      <div className="fixed bottom-20 xl:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">

        {/* Télécharger */}
        {/* <a
          // href="/offrespdf/AMI01_Chargé_de_programmes_Tanganyika_COTA_PAO27.pdf"
          download="AMI01_Chargé_de_programmes_Tanganyika_COTA_PAO27.pdf"
          className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 inline-flex"
        >
          <Download />
        </a> */}

        {/* Partager */}
        <div>
          <button
            onClick={async () => {
              if (navigator.share) {
                try {
                  await navigator.share({
                    title: document.title,
                    text: `Recrutement d'Un(e) Directeur(trice) Financier(e) et Administratif(ve) au Tanganyika pour l'ONG COTA`,
                    url: window.location.href,
                  });
                } catch (err) {
                  console.error('Erreur de partage :', err);
                }
              } else {
                // Fallback : copie le lien
                navigator.clipboard.writeText(window.location.href);
                alert('Votre navigateur ne supporte pas le partage direct. Le lien a été copié.');
              }
            }}
            className="bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
          >
            <Share2 />
          </button>
        </div>

        {/* Postuler */}
        <a
          href="https://tally.so/r/obG6bN"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0069BD] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#03337F] font-semibold"
        >
          POSTULER
        </a>
      </div>
    </div>
  );
}

/* === Composant texte générique flexible === */
function ArticleSection({ title, content }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-gray-700 text-base xl:text-lg space-y-3 leading-relaxed text-justify">
        {content}
      </div>
    </div>
  );
}
