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

export default function Offre07() {
  const { id } = useParams();
  const [openShare, setOpenShare] = useState(false);

  // === Donnée simulée (à remplacer par API plus tard)
  const offre = {
    titre: "Assistant(e)s Comptables (Tanganyika, Sud-kivu et Maniema)",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "07/AMI-AC/COTA/026",
    publication: "25 janvier 2026",
    cloture: "28 février 2026",
    lieu: "Tanganyika, Sud-Kivu et Maniema",
    nombre: 3,
    nature: "Volontariat (bénévolat) indemnisé",
    typeContrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
    responsable: "Directeur(trice) Administratif(ve) et Financier(ère) (DAF) ",
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
          APPEL A MANIFESTATION D’INTERET N°07/AMI-AC/COTA/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement de Trois(3) Assistant(e)s Comptables au Tanganyika, Sud-kivu et Maniema pour l'ONG COTA
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
              <tr><td className="font-semibold p-3">Lieux d’affectation</td><td className="p-3">{offre.lieu}</td></tr>
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
                et programmes en général, l’ONG COTA cherche à recruter Trois(3) Assistant(e)s Comptables pour sa 
                direction au Tanganyika et ses antennes au Sud-Kivu et Maniema.
              </p>
              <p>
                Ce poste stratégique vise à appoerter un appui comptable à la DAF afin de garantir la bonne gouvernance 
                financière, la conformité administrative, la transparence et la durabilité financière de 
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
                L’Assistant(e) Comptable, basé(e) dans une antenne provinciale ou urbaine 
                de l’ONG COTA, assure la gestion comptable quotidienne, le suivi des dépenses 
                locales et la tenue des pièces justificatives des activités mises en œuvre 
                dans sa zone d’intervention.
              </p>
              <p>
                Il/Elle contribue à la transparence financière, à la traçabilité des fonds et 
                au respect des procédures administratives et financières de l’organisation, 
                sous la supervision du Directeur Administratif et Financier (DAF) et en 
                collaboration étroite avec le/la Responsable de base.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <a className="font-bold text-lg mb-2">A. Gestion comptable quotidienne de l’antenne : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Enregistrer quotidiennement toutes les opérations financières (dépenses et recettes) </li>
                <li>Tenir les journaux de caisse et de banque de l’antenne</li>
                <li>Assurer la concordance entre soldes de caisse, relevés bancaires, pièces comptables</li>
                <li>Préparer et mettre à jour les tableaux de suivi financier des activités locales</li>
                <li>Vérifier la conformité des dépenses avec les budgets approuvés</li>
              </ul>
              <a className="font-bold text-lg mb-2">B. Gestion de la caisse et de la trésorerie locale : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Gérer la caisse de l’antenne conformément aux procédures internes</li>
                <li>Effectuer les paiements autorisés (salaires, per diem, fournisseurs, prestations) </li>
                <li>Assurer la sécurisation des fonds et des documents financiers</li>
                <li>Réaliser les arrêtés de caisse journaliers, hebdomadaires et mensuels</li>
                <li>Signaler immédiatement toute anomalie financière ou écart constaté</li>
              </ul>
              <a className="font-bold text-lg mb-2">C. Traitement et archivage des pièces justificatives : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Collecter, vérifier et classer les pièces justificatives factures, reçus, bons de commande, contrats, listes de présence</li>
                <li>S’assurer que toutes les pièces sont complètes, authentiques et conformes</li>
                <li>Organiser l’archivage physique et électronique des documents comptables</li>
                <li>Préparer les dossiers financiers pour les contrôles internes et audits</li>
              </ul>
              <a className="font-bold text-lg mb-2">D. Appui aux rapports financiers : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Préparer les rapports financiers mensuels de l’antenne</li>
                <li>Transmettre régulièrement les rapports et pièces au siège</li>
                <li>Appuyer la consolidation financière des projets</li>
                <li>Contribuer à la préparation des rapports financiers destinés aux bailleurs</li>
                <li>Participer à l’analyse des dépenses par activité et par ligne budgétaire</li>
              </ul>
              <a className="font-bold text-lg mb-2">E. Collaboration interne et respect des procédures : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Travailler en étroite collaboration avec le/la Responsable de base, les équipes programmes, la logistique locale</li>
                <li>Veiller au respect strict des procédures financières et administratives</li>
                <li>Sensibiliser les équipes terrain aux bonnes pratiques financières</li>
                <li>Participer aux réunions de coordination de l’antenne</li>
                <li>Appliquer les recommandations du DAF et des auditeurs</li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Compétences et qualifications requises"
          content={
            <>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diplôme minimum Bac+2 / Graduat en Comptabilité, Finance, Gestion, Administration des entreprises ; </li>
                <li>Une Licence (Bac+3) constitue un atout</li>
                <li>Formations complémentaires appréciées comptabilité des ONG, gestion financière de projets, procédures bailleurs ; </li>
                <li>Minimum 2 à 3 ans d’expérience dans un poste similaire</li>
                <li>Expérience souhaitée dans une ONG ou dans un projet de développement ou humanitaire ; </li>
                <li>Expérience de travail en milieu décentralisé ou terrain est un atout ; </li>
                <li>Bonne connaissance du contexte local (ville ou province d’affectation) ; </li>
                <li>Maîtrise des principes de base de la comptabilité ; </li>
                <li>Capacité à tenir une caisse et une comptabilité simple mais rigoureuse ; </li>
                <li>Bonne maîtrise d’Excel et des outils bureautiques (Word, Email) ; </li>
                <li>Capacité à utiliser des tableaux de suivi budgétaire ; </li>
                <li>Connaissance des procédures financières des ONG ; </li>
                <li>Capacité à lire et appliquer un manuel de procédures ; </li>
                <li>Aptitude à préparer des rapports financiers clairs ; </li>
                <li>Sensibilisation aux règles de contrôle interne ; </li>
                <li>Notions de gestion des achats et logistique ; </li>
                <li>Compréhension du lien entre activités terrain et dépenses ; </li>
                <li>Capacité à travailler avec des équipes non financières ; </li>
                <li>Connaissances de base en archivage électronique ; </li>
                <li>Capacité à travailler dans des zones à ressources limitées ; </li>
                <li>Honnêteté et intégrité irréprochables ; </li>
                <li>Sens élevé de la responsabilité ; </li>
                <li>Rigueur, méthode et précision ; </li>
                <li>Discrétion et respect de la confidentialité ; </li>
                <li>Capacité à travailler sous pression et dans des délais serrés ; </li>
                <li>Autonomie et sens de l’initiative ; </li>
                <li>Bonne organisation personnelle ; </li>
                <li>Esprit d’équipe et bonne communication ; </li>
                <li>Capacité d’adaptation au contexte local ; </li>
                <li>Engagement envers la mission et les valeurs de COTA. </li>
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
                    text: `Recrutement de Trois(3) Assistant(e)s Comptables au Tanganyika, Sud-kivu et Maniema pour l'ONG COTA`,
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
