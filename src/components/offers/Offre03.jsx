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

export default function Offre03() {
  const { id } = useParams();
  const [openShare, setOpenShare] = useState(false);

  // === Donnée simulée (à remplacer par API plus tard)
  const offre = {
    titre: "Officier(ère) MEAL",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "03/AMI-OM/COTA/026",
    publication: "25 janvier 2026",
    cloture: "28 février 2026",
    lieu: "Tanganyika",
    nombre: 1,
    nature: "Volontariat (bénévolat) indemnisé",
    typeContrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
    responsable: "Directeur(trice) de programmes",
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
          APPEL A MANIFESTATION D’INTERET N°03/AMI-OM/COTA/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement d’Un(e) Officier(ère) MEAL
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
                Dans le cadre du renforcement de la qualité, de la performance 
                et de la redevabilité de ses interventions prévues dans le Plan 
                d’Action Opérationnel 2026 (PAO-26), l’ONG Corps Technique pour 
                l’Accompagnement (COTA) recrute un(e) Officier(ère) MEAL pour sa 
                direction au Tanganyika.
              </p>
              <p>
                Ce poste vise à doter l’organisation d’un système structuré de suivi, 
                d’évaluation, de redevabilité et d’apprentissage, conforme aux standards des ONG 
                et aux exigences des partenaires techniques et financiers, afin de garantir des 
                interventions fondées sur les données, orientées vers les résultats et centrées sur les bénéficiaires.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Mission principale"
          content={
            <>
              <p>
                Sous la supervision du/de la Directeur(trice) de Programmes, l’Officier(ère) 
                MEAL est responsable de la conception, de la mise en œuvre et de la coordination du système MEAL de COTA.
              </p>
              <p>
                Il/elle veille à la mesure des résultats, à l’analyse de l’impact, à la redevabilité envers les communautés 
                bénéficiaires et à la capitalisation des apprentissages, afin d’améliorer continuellement la qualité des programmes inscrits dans le PAO-27.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <a className="font-bold text-lg mb-2">A. Conception et structuration du système MEAL :</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Concevoir et mettre à jour le cadre MEAL institutionnel de COTA ; </li>
                <li>Développer les cadres logiques, théories du changement et plans MEAL des projets ; </li>
                <li>Définir des indicateurs SMART (résultats, effets, impact) ; </li>
                <li>Élaborer les outils de collecte de données (quantitatifs et qualitatifs) ; </li>
                <li>Intégrer les dimensions transversales : genre, protection, inclusion, redevabilité. </li>
              </ul>

              <a className="font-bold text-lg mb-2">B. Suivi de la mise en œuvre des projets : </a>
              <ul className="list-disc pl-6 space-y-1">
              <li>Assurer le suivi régulier des activités et des indicateurs ; </li>
                <li>Organiser les visites de suivi terrain ; </li>
                <li>Vérifier la cohérence entre activités, résultats et indicateurs ; </li>
                <li>Identifier les écarts, contraintes et risques opérationnels ; </li>
                <li>Proposer des ajustements basés sur les données collectées. </li>
              </ul>
              <a className="font-bold text-lg mb-2">C. Collecte, gestion et analyse des données : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Superviser la collecte de données terrain (enquêtes, formulaires, interviews) ; </li>
                <li>Assurer le contrôle qualité, la fiabilité et la cohérence des données ; </li>
                <li>Gérer les bases de données MEAL ; </li>
                <li>Analyser les données quantitatives et qualitatives ; </li>
                <li>Produire des tableaux de bord analytiques et visuels. </li>
              </ul>
              <a className="font-bold text-lg mb-2">D. Évaluation, apprentissage et capitalisation : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Planifier et coordonner les évaluations internes et externes (baseline, midline, endline) ; </li>
                <li>Appuyer les consultants externes lors des évaluations ; </li>
                <li>Documenter les bonnes pratiques, leçons apprises et innovations ; </li>
                <li>Organiser des sessions d’apprentissage et de restitution interne ; </li>
                <li>Contribuer à l’amélioration des stratégies programmatiques. </li>
              </ul>
              <a className="font-bold text-lg mb-2">E. Redevabilité et participation communautaire :</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mettre en place et gérer des mécanismes de feedback et de plaintes ; </li>
                <li>Assurer la prise en compte des retours des bénéficiaires ; </li>
                <li>Promouvoir la participation communautaire dans le suivi des projets ; </li>
                <li>Veiller au respect des principes de transparence et de redevabilité ; </li>
                <li>Produire des rapports de redevabilité. </li>
              </ul>
              <a className="font-bold text-lg mb-2">F. Reporting et coordination :</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contribuer à la rédaction des rapports narratifs et techniques ; </li>
                <li>Appuyer la Direction des Programmes dans la prise de décision basée sur les données ; </li>
                <li>Former et accompagner les équipes terrain sur les outils MEAL ; </li>
                <li>Collaborer étroitement avec les équipes Programmes, Finances et Communication. </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Compétences et qualifications requises"
          content={
            <>
             <a className="font-bold text-lg mb-2">A. Formation académique : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diplôme universitaire Bac+3 à Bac+5 en Statistiques, Économie, Sciences sociales, Développement rural, Gestion de projets, ou domaine connexe. </li>
                <li>Une formation spécialisée en MEAL / M&E / Results-Based Management constitue un atout majeur. </li>
              </ul>
              <a className="font-bold text-lg mb-2">B. Expérience professionnelle : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Minimum 3 à 5 ans d’expérience en suivi-évaluation ou MEAL ; </li>
                <li>Expérience avérée dans des projets humanitaires ou de développement ; </li>
                <li>Expérience de travail avec des ONG ou projets financés par des bailleurs ; </li>
                <li>Bonne connaissance des approches basées sur les résultats et la redevabilité. </li>
              </ul>
              <a className="font-bold text-lg mb-2">C. Compétences techniques acquises : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maîtrise complète du cycle MEAL ; </li>
                <li>Élaboration de cadres logiques et théories du changement ; </li>
                <li>Conception d’indicateurs et plans de suivi ; </li>
                <li>Collecte numérique de données (KoboToolbox, ODK, SurveyCTO, etc.) ; </li>
                <li>Analyse statistique de base et intermédiaire ; </li>
                <li>Gestion et nettoyage de bases de données ; </li>
                <li>Production de tableaux de bord et visualisation des données ; </li>
                <li>Rédaction de rapports analytiques et techniques ; </li>
                <li>Maîtrise des outils informatiques Excel avancé, Power BI, Outils MEAL et bases de données, Outils collaboratifs. </li>
              </ul>
              <a className="font-bold text-lg mb-2">D. Qualités personnelles et compétences comportementales :</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fort esprit analytique et sens critique développé ; </li>
                <li>Grande rigueur méthodologique et souci de la qualité ; </li>
                <li>Honnêteté intellectuelle et sens de l’éthique ; </li>
                <li>Capacité à travailler de manière autonome et proactive ; </li>
                <li>Bonne capacité d’écoute et sens de la redevabilité ; </li>
                <li>Aptitude à vulgariser les données pour la prise de décision ; </li>
                <li>Résistance au stress et respect des délais ; </li>
                <li>Bon relationnel et esprit d’équipe ; </li>
                <li>Engagement envers les valeurs humanitaires, communautaires et institutionnelles de COTA. </li>
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
                    text: `Recrutement d'Un(e) Officier(ère) MEAL au Tanganyika pour l'ONG COTA ONG`,
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
