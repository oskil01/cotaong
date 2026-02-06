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
    titre: "Points Focaux (Sud-kivu et Maniema)",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "08/AMI-PF/COTA/026",
    publication: "25 janvier 2026",
    cloture: "28 février 2026",
    lieu: "Sud-Kivu et Maniema",
    nombre: 2,
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
          APPEL A MANIFESTATION D’INTERET N°08/AMI-PF/COTA/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement de Deux(2) Points Focaux au Sud-kivu et Maniema pour l'ONG COTA
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
                et programmes en général, l’ONG COTA cherche à recruter Deux(2) Points Focaux pour ses 
                antennes au Sud-Kivu et Maniema.
              </p>
              <p>
                Ce poste stratégique vise à apporter un appui operationel et logistique à la mise oeuvre, la coordination 
                et l'organisation stratégique des activités et programmes au niveau des antennes du COTA. 
              </p>
            </>
          }
        />

        <ArticleSection
          title="Mission principale"
          content={
            <>
              <p>
                Le/La Point Focal est le/la représentant(e) opérationnel(le) de l’ONG COTA 
                dans sa zone d’intervention (ville, territoire ou province). Il/Elle assure 
                la coordination locale des activités, la liaison entre les communautés, 
                les autorités locales et le siège, ainsi que le suivi de la mise en œuvre 
                des projets conformément au Plan d’Action Opérationnel 2026-2027 (PAO-27).
              </p>
              <p>
                Le Point Focal joue un rôle central dans la collecte d’informations terrain, 
                la mobilisation communautaire, la facilitation des interventions, 
                et le renforcement de l’ancrage institutionnel de COTA au niveau local.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <a className="font-bold text-lg mb-2">A. Représentation institutionnelle et relations locales : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Représenter officiellement l’ONG COTA auprès des autorités administratives et locales, des leaders communautaires et des partenaires locaux</li>
                <li>Maintenir de bonnes relations avec les services techniques de l’État</li>
                <li>Faciliter les autorisations locales nécessaires à la mise en œuvre des activités</li>
                <li>Participer aux réunions de coordination locales (clusters, cadres de concertation) </li>
                <li>Promouvoir l’image, la mission et les valeurs de COTA dans la zone</li>
              </ul>
              <a  className="font-bold text-lg mb-2">B. Coordination et suivi des activités terrain : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Coordonner la mise en œuvre des activités de projets dans la zone</li>
                <li>Veiller au respect des plans de travail et calendriers d’activités</li>
                <li>Superviser les équipes terrain et les volontaires locaux</li>
                <li>Assurer la bonne organisation logistique des activités communautaires</li>
                <li>Identifier et signaler les contraintes opérationnelles et sécuritaires</li>
                <li>Proposer des solutions adaptées au contexte local</li>
              </ul>
              <a className="font-bold text-lg mb-2">C. Mobilisation communautaire et participation locale : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mobiliser les communautés bénéficiaires autour des activités</li>
                <li>Faciliter l’implication des leaders locaux, femmes et jeunes</li>
                <li>Appuyer la mise en place et l’animation des comités communautaires</li>
                <li>Assurer la participation inclusive et sensible au genre</li>
                <li>Gérer les attentes communautaires et prévenir les conflits</li>
              </ul>
              <a className="font-bold text-lg mb-2">D. Collecte de données et reporting terrain :</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Collecter les données terrain liées aux activités (présences, résultats, témoignages) </li>
                <li>Transmettre régulièrement les informations au siège</li>
                <li>Contribuer aux rapports d’activités narratifs</li>
                <li>Appuyer l’équipe MEAL dans la collecte de données de suivi et évaluation</li>
                <li>Documenter les bonnes pratiques, défis et leçons apprises</li>
              </ul>
              <a className="font-bold text-lg mb-2">E. Veille contextuelle et alerte précoce : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Assurer une veille permanente sur le contexte sécuritaire, les dynamiques</li><li>communautaires, les besoins émergents</li>
                <li>Alerter rapidement le siège en cas de risques ou incidents</li>
                <li>Fournir des analyses contextuelles pour l’adaptation des interventions</li>
                <li>Contribuer à l’identification de nouvelles opportunités de projets</li>
              </ul>
              <a className="font-bold text-lg mb-2">F. Respect des procédures et redevabilité : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Veiller au respect des politiques internes de COTA</li>
                <li>Appliquer les principes de redevabilité envers les bénéficiaires</li>
                <li>Sensibiliser les communautés aux mécanismes de plaintes et retours</li>
                <li>Promouvoir la tolérance zéro contre l’exploitation et les abus</li>
                <li>Collaborer avec les assistants comptables et logisticiens locaux</li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Compétences et qualifications requises"
          content={
            <>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diplôme minimum Bac+2 / Graduat en Sciences sociales, Développement </li>communautaire, Gestion de projets, Administration, Communication ou domaine similaire
                <li>Une Licence (Bac+3) constitue un atout</li>
                <li>Formations appréciées mobilisation communautaire, protection, genre et inclusion, gestion de projets ONG</li>
                <li>Minimum 2 à 4 ans d’expérience dans un projet communautaire ou dans une ONG ou association locale</li>
                <li>Expérience de travail en milieu communautaire exigée</li>
                <li>Bonne connaissance de la zone d’intervention</li>
                <li>Expérience en coordination locale ou supervision terrain est un atout</li>
                <li>Capacité à coordonner des activités terrain</li>
                <li>Bonne connaissance des approches communautaires participatives</li>
                <li>Capacité à collecter et transmettre des données terrain fiables</li>
                <li>Maîtrise de la rédaction de rapports simples</li>
                <li>Connaissances de base en logistique, gestion administrative, suivi des activités</li>
                <li>Maîtrise des outils bureautiques de base (Word, Excel, WhatsApp, Email) </li>
                <li>Capacité à appliquer des procédures ONG</li>
                <li>Connaissance du contexte humanitaire et de développement local</li>
                <li>Capacité à travailler avec des autorités et leaders traditionnels</li>
                <li>Notions de gestion de conflits communautaires</li>
                <li>Sensibilité aux questions de genre, protection et inclusion</li>
                <li>Capacité à travailler en réseau avec d’autres acteurs locaux</li>
                <li>Maîtrise des langues locales est un atout majeur</li>
                <li>Leadership local et sens des responsabilités</li>
                <li>Intégrité, honnêteté et exemplarité</li>
                <li>Bonne capacité de communication interpersonnelle</li>
                <li>Diplomatie et sens de la négociation</li>
                <li>Esprit d’initiative et autonomie</li>
                <li>Capacité d’adaptation à des contextes complexes</li>
                <li>Patience et écoute active</li>
                <li>Résilience et gestion du stress</li>
                <li>Sens de l’organisation et respect des délais</li>
                <li>Engagement envers la mission et les valeurs de COTA</li>
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
                    text: `Recrutement de Deux(2) Points Focaux au Sud-kivu et Maniema pour l'ONG COTA`,
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
