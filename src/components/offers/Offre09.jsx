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
    titre: "Cordonnateurs (trices) Terrain",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "09/COTA/ESC-BD/RDC/026",
    publication: "25 juin 2026",
    cloture: "02 juillet 2026",
    lieu: "Tanganyika, Sud-Kivu, Nord-Kivu et Maniema",
    nombre: 4,
    nature: "Consultatif (en cas de besoin)",
    typeContrat: "Temporaire (journalier ou mensuel)",
    responsable: "Directeur de programmes",
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
          APPEL A CANDIDATURES 09/COTA/ESC-BD/RDC/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement de 04 Coordonnateurs (trices) Terrain pour la constitution 
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
                Sous la supervision du Directeur des Programmes, du Chef de Projet ou de l’Officier MEAL, 
                le Coordonnateur Terrain participe à la planification, l'organisation, la coordination 
                et fait le suivi global des opérations de collecte de données dans sa province d'affectation. 
                Il veille à la bonne exécution des activités de terrain, à la qualité méthodologique des 
                données produites, au respect des délais contractuels, des procédures opérationnelles, des normes 
                éthiques et des exigences des partenaires techniques et financiers. 
                <br /> <br />
                Il constitue le principal point focal provincial entre l’ONG COTA, les équipes de terrain, 
                les autorités locales, les communautés et les partenaires impliqués dans les missions de recherche, 
                d'évaluation, de suivi-évaluation ou de collecte de données. 
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <ul className="list-disc pl-6 space-y-1">
                <li>Participer à la planifier et coordonner les opérations de collecte de données dans sa province ; </li> 
                <li>Assurer la liaison entre COTA, les partenaires et les équipes terrain ; </li>
                <li>Superviser les superviseurs et enquêteurs ; </li>
                <li>Élaborer les plans opérationnels de collecte ; </li>  
                <li>Participer au recrutement et à la formation des équipes ; </li>
                <li>Assurer le contrôle qualité des données collectées ; </li>
                <li>Garantir le respect des méthodologies, protocoles et calendriers ; </li>
                <li>Produire les rapports de terrain ; </li>
                <li>Gérer les aspects logistiques et sécuritaires des missions ; </li>
                <li>Assurer le respect des normes éthiques et de protection des données. </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Profil recherché"
          content={
            <>
              <ul className="list-disc pl-6 space-y-2">
                <li> Diplôme universitaire (Bac+5 de préférence) en sciences sociales, statistiques, démographie, économie, gestion de projets, développement rural, informatique ou domaine connexe ; 
                </li> 
                <li> Minimum 5 années d'expérience dans la coordination des enquêtes ou projets terrain ; 
                </li>
                <li> Expérience démontrée dans la supervision d'équipes multidisciplinaires ; 
                </li>
                <li> Maîtrise des outils KoboCollect, ODK, SurveyCTO, CommCare ou similaires ;
                </li>  
                <li> Bonne connaissance des provinces concernées ; </li>
                <li> Excellentes capacités organisationnelles ; </li>
                <li> Aptitude à travailler sous pression ;</li>
                <li> Très bonnes capacités rédactionnelles en français ; 
                </li>
                <li>La connaissance des langues locales et la maitrise de l’outil informatique constituent un atout.
                </li>
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
                <li>
                  Une lettre de motivation adressée au Directeur Général
                </li>
                <li>
                  Un Curriculum Vitae à jour, mentionnant les coordonnées professionnelles
                  d’au moins trois (3) personnes de référence (les adresses e-mail
                  professionnelles sont vivement recommandées)
                </li>
                <li>Le diplôme universitaire le plus récent</li>
                <li>Les attestations de services rendus</li>
                <li>Une copie de la carte d’identité</li>
              </ul>

              <p className="font-semibold text-blue-700 mt-6">
                Note Importante :
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li className="text-red-700">Cet appel ne constitue pas une offre d’emploi officielle, les candidats retenus ne seront appelés à signer un contrat de service que lorsque le besoin se présente. </li> 
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
          href="/offrespdf/09_COTA_ESC_RDC_2026.pdf"
          download="09_COTA_ESC_RDC_2026.pdf"
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
