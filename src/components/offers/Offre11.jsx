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

export default function Offre09() {
  const { id } = useParams();
  const [openShare, setOpenShare] = useState(false);

  // === Donnée simulée (à remplacer par API plus tard)
  const offre = {
    titre: "Enqueteurs",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "11/COTA/ESC-BD/RDC/026",
    publication: "25 juin 2026",
    cloture: "02 juillet 2026",
    lieu: "Tanganyika, Sud-Kivu, Nord-Kivu et Maniema",
    nombre: "Selon le besoin",
    nature: "Consultatif (en cas de besoin)",
    typeContrat: "Temporaire (journalier ou mensuel)",
    responsable: "Superviseur Terrain",
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
          APPEL A CANDIDATURES 11/COTA/ESC-BD/RDC/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement des Enqueteurs pour la constitution 
          de la base des données des agents temporaires dans les provinces du Tanganyika, 
          Sud-Kivu, Nord-Kivu et Maniema.
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
              <tr><td className="font-semibold p-3">Durée du contrat</td><td className="p-3">{offre.typeContrat}</td></tr>
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
                Créé depuis le 20 Octobre 2020 selon l’esprit de la loi N°004/2001 du 20 juillet 2001 portant 
                dispositions générales applicables aux ASBL & aux EUP, le Corps Technique pour l’Accompagnement (COTA), 
                est une ONG nationale de droit congolais, sans but lucratif, apolitique, non confessionnelle, humanitaire 
                et professionnelle, spécialisée dans l’accompagnement technique et stratégique aux organisations, 
                entreprises, institutions et aux communautés, dans le but de renforcer leurs capacités, améliorer 
                leurs performances et promouvoir un développement inclusif, durable et participatif en République 
                Démocratique du Congo. 
                <br /> <br />
                Basée à Kalemie dans la province du Tanganyika, l’ONG  COTA oriente ses actions autour des 
                six axes : (i) accompagnement et consultance organisationnelle (appui stratégique aux entreprises, 
                ONG et institutions dans la gestion de projets, le développement organisationnel et institutionnel) ; 
                (ii) innovation technologique (conception et mise en œuvre de solutions technologiques adaptées 
                aux besoins des organisations et des communautés, développement de systèmes de suivi-évaluation, 
                collecte, analyse, traitement statistique et visualisation des données pour une meilleure prise 
                de décision) ; (iii) entrepreneuriat, développement économique et moyens de subsistance 
                (accompagnement des start-ups et des initiatives locales et/ou les AGR pour renforcer leurs capacités 
                et faciliter l’accès aux ressources) ; (iv) santé et protection de l’environnement (conception et mise 
                en œuvre de programmes intégrant la durabilité environnementale et la promotion de la santé publique) ; 
                (v) communication et sensibilisation communautaire (élaboration de stratégies de communication et de plaidoyer 
                pour renforcer la diffusion d’informations utiles et mobiliser les acteurs sociaux sur le changement de comportements) 
                ; (vi) droits de l’homme et gouvernance (promotion et protection des droits humains fondamentaux, accompagnement 
                des institutions et organisations dans l’intégration de pratiques de bonne gouvernance et d’éthique). 
                <br /> <br />
                L’ONG COTA ambitionne de devenir un acteur de référence en accompagnement technique et en innovation en République 
                Démocratique du Congo, contribuant à la construction d’organisations performantes, d’entreprises durables et de 
                communautés résilientes, dans le respect des droits humains et de la gouvernance responsable. Parmi ses priorités 
                stratégiques figurent le développement de systèmes de suivi-évaluation, la gestion des données, le traitement statistique 
                et la production d'informations probantes destinées à améliorer la planification et la prise de décision.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Contexte de la mission"
          content={
            <p>
              L'ONG COTA cherche à constituer une base de données par province d’intervention de Coordonnateurs 
              Terrain pouvant être mobilisés ponctuellement dans le cadre des missions de recherche et 
              études socio-économiques, enquêtes quantitatives et qualitatives, évaluations de besoins 
              humanitaires, études de référence (baseline), évaluations finales, suivi-évaluation de projets, 
              cartographie communautaire, recensements, collectes de données numériques. 
            </p>
          }
        />

        <ArticleSection
          title="Mission principale"
          content={
            <>
              <p>
                Sous la supervision du Superviseur Terrain, l'Agent de Collecte de Données 
                (Enquêteur) est chargé de recueillir auprès des populations ciblées des 
                données quantitatives et qualitatives fiables, exactes et complètes 
                conformément aux outils, protocoles méthodologiques et standards de qualité 
                définis pour chaque mission.
                <br /> <br />
                Il contribue directement à la production d'informations probantes 
                destinées à soutenir la planification, la prise de décision, le suivi-évaluation 
                des projets et la conception de politiques ou programmes de développement 
                fondés sur des données objectives.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <ul className="list-disc pl-6 space-y-1">
                <li> Administrer les questionnaires auprès des ménages, institutions ou bénéficiaires ; </li> 
                <li> Réaliser des entretiens individuels ; </li>
                <li> Animer des groupes de discussion (focus groups) lorsque requis ; </li>
                <li> Utiliser les tablettes ou smartphones pour la collecte numérique ; </li>  
                <li> Respecter les procédures méthodologiques ; </li>
                <li> Garantir la confidentialité des informations recueillies ; </li>
                <li> Assurer la transmission quotidienne des données ; </li>
                <li> Signaler immédiatement tout incident ou difficulté.</li> 
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Profil recherché"
          content={
            <>
              <ul className="list-disc pl-6 space-y-2">
                <li> Diplôme universitaire (Bac+3 minimum) ; </li> 
                <li> Minimum 3 années d'expérience dans la supervision d'enquêtes ou d'activités terrain ; </li>
                <li> Expérience avérée dans les projets humanitaires ou de développement ; </li>
                <li> Bonne maîtrise des outils numériques de collecte ; </li>  
                <li> Bonne connaissance du contexte local ; </li>
                <li> Capacité à gérer des équipes ; </li>
                <li> Sens élevé de l'intégrité et de la rigueur ; </li>
                <li> Disponibilité pour les déplacements fréquents ;</li> 
                <li> Compétences techniques avancées dans l’utilisation des outils numériques (KoboCollect, ODK, SurveyCTO, Excel), contrôle qualité des données et cartographie GPS.</li>
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

              <ul className="list-disc pl-6 space-y-2">
                <li> Diplôme d'État au minimum ; </li>
                <li> Formation universitaire ou technique souhaitée ; </li>
                <li> Minimum 1 année d'expérience dans la collecte de données ; </li>
                <li> Expérience avec KoboCollect ou autres applications similaires ; </li>  
                <li> Bonne capacité de communication ; </li>
                <li> Maîtrise du français ; </li>
                <li> Connaissance d'au moins une langue locale de la province concernée ; </li>  
                <li> Capacité à travailler dans des zones rurales et urbaines ; </li>
                <li> Disponibilité immédiate pour les missions temporaires ; </li>
                <li> Expérience avec les ONG nationales ou internationales ; </li>
                <li> Expérience dans les enquêtes humanitaires ; </li>
                <li> Maîtrise du GPS ; </li>
                <li> Connaissance des techniques d'entretien et de facilitation communautaire. </li>
              </ul>

              <p className="font-semibold text-blue-700 mt-6">
                Note Importante :
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li className="text-red-700"> Cet appel ne constitue pas une offre d’emploi officielle, les candidats retenus ne seront appelés à signer un contrat de service que lorsque le besoin se présente. </li> 
                <li>Un candidat ne peut postuler à plus d’un poste.</li>
                <li>Le candidat doit habiter la province dans laquelle il souhaite postuler.</li>
                <li>Les candidatures envoyées après la date limite ne seront pas pris en compte. </li>
                <li>Seuls les candidats dont les dossiers sont retenus seront contactés.</li>  
                <li>Les candidatures féminines et celles de personnes vivant avec handicap sont vivement encouragées. </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          content={
            <> 
              <div className="text-gray-400">
                <p className="italic">
                  L’ONG COTA adopte une approche transversale fondée sur le 
                  respect des droits fondamentaux, la protection des personnes vulnérables 
                  et la redevabilité envers les communautés, conformément aux standards 
                  sphère et aux principes humanitaires internationaux de neutralité, 
                  impartialité, humanité et indépendance, ainsi que par l’approche « Do No Harm ». 
                  Une attention particulière est apportée à l’application de la politique de 
                  tolérance zéro à l’égard de toute forme d’exploitation et d’abus sexuels. 
                  Les activités sont conçues et mises en œuvre de manière à éviter toute 
                  exacerbation des tensions communautaires, prévenir les risques de 
                  stigmatisation ou d’exclusion, réduire les effets négatifs potentiels liés à l’intervention. 
                </p>
              </div>
            </>
          }
        />
      </section>

      {/* === BOUTONS FLOTTANTS CENTRÉS === */}
      <div className="fixed bottom-20 xl:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">

        {/* Télécharger */}
        <a
          href="/offrespdf/11_COTA_ESC_RDC_2026.pdf"
          download="11_COTA_ESC_RDC_2026.pdf"
          className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 inline-flex"
        >
          <Download />
        </a>

        {/* Partager */}
        <div>
          <button
            onClick={async () => {
              if (navigator.share) {
                try {
                  await navigator.share({
                    title: document.title,
                    text: `Appel à candidatures : Recrutement des Coordonnateurs Terrain pour la constitution de la base des données des agents temporaires.`,
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
          href="https://tally.so/r/jagdaR"
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
