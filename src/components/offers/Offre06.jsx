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

export default function Offre06() {
  const { id } = useParams();
  const [openShare, setOpenShare] = useState(false);

  // === Donnée simulée (à remplacer par API plus tard)
  const offre = {
    titre: "Responsable GSI (Gestion du Système de l'Information)",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "06/AMI-CGSI/COTA/026",
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
          APPEL A MANIFESTATION D’INTERET N°06/AMI-CGSI/COTA/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement d’Un(e) Responsable GSI (Gestion du Système de l'Information) au Tanganyika pour l'ONG COTA
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
                Dans le cadre du renforcement de la visibilité institutionnelle, 
                de la circulation interne de l’information et de la redevabilité 
                envers les partenaires et les communautés, en lien avec la mise en 
                œuvre du Plan d’Action Opérationnel 2026 (PAO-26), l’ONG Corps 
                Technique pour l’Accompagnement (COTA) recrute un(e) Responsable 
                de Communication et de Gestion du Système d’Information pour sa direction au Tanganyika.
              </p>
              <p>
                Ce poste stratégique vise à assurer une communication institutionnelle cohérente, 
                professionnelle et éthique, tout en garantissant un système d’information fiable, 
                structuré et sécurisé au service des programmes, du plaidoyer et de la gouvernance.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Mission principale"
          content={
            <>
              <p>
                Sous l’autorité de la Direction Exécutive et en étroite collaboration avec 
                les Directions Programmes, MEAL et Administrative, le/la Responsable de 
                Communication et de Gestion du Système d’Information est chargé(e) de 
                concevoir, coordonner et mettre en œuvre la stratégie de communication de COTA 
                et de gérer le système d’information interne et externe.
              </p>
              <p>
                Il/elle veille à la visibilité des actions, à la cohérence des messages, 
                à la bonne circulation de l’information et à la valorisation des résultats 
                du PAO-27 auprès des parties prenantes.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <a className="font-bold text-lg mb-2">A. Élaboration et pilotage de la stratégie de communication :</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Concevoir et mettre en œuvre la stratégie globale de communication institutionnelle ; </li>
                <li>Définir les objectifs, cibles, messages clés et canaux de communication ; </li>
                <li>Élaborer les plans de communication annuels et par projet ; </li>
                <li>Assurer l’alignement de la communication avec la vision, la mission et les valeurs de COTA ; </li>
                <li>Veiller à la cohérence de l’identité visuelle et institutionnelle. </li>
              </ul>
              <a className="font-bold text-lg mb-2">B. Communication institutionnelle et visibilité :</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Produire et diffuser les supports de communication (rapports, brochures, flyers, communiqués) ; </li>
                <li>Assurer la couverture médiatique des activités et événements ; </li>
                <li>Gérer les relations avec les médias et partenaires ; </li>
                <li>Valoriser les résultats, impacts et bonnes pratiques des projets ; </li>
                <li>Appuyer la communication institutionnelle auprès des bailleurs. </li>
              </ul>
              <a className="font-bold text-lg mb-2">C. Communication digitale et gestion des plateformes : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Administrer le site web institutionnel et les réseaux sociaux ; </li>
                <li>Produire et publier des contenus digitaux (articles, photos, vidéos) ; </li>
                <li>Assurer la mise à jour régulière des plateformes numériques ; </li>
                <li>Suivre les performances des supports digitaux ; </li>
                <li>Garantir la cohérence éditoriale et graphique. </li>
              </ul>
              <a className="font-bold text-lg mb-2">D. Gestion du système d’information : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mettre en place et administrer le système d’information interne ; </li>
                <li>Organiser la circulation, le stockage et l’archivage de l’information ; </li>
                <li>Assurer la disponibilité et l’accessibilité des informations clés ; </li>
                <li>Collaborer avec les équipes MEAL et Data pour l’intégration des données ; </li>
                <li>Veiller à la sécurité et à la confidentialité des informations. </li>
              </ul>
              <a className="font-bold text-lg mb-2">E. Documentation, capitalisation et archivage : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Collecter, organiser et archiver les documents institutionnels et programmatiques ; </li>
                <li>Appuyer la capitalisation des projets (histoires de succès, leçons apprises) ; </li>
                <li>Mettre en place des bases documentaires numériques ; </li>
                <li>Faciliter l’accès à l’information pour les équipes et partenaires. </li>
              </ul>
              <a className="font-bold text-lg mb-2">F. Coordination interne et appui stratégique : </a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Appuyer les équipes dans leurs besoins de communication ; </li>
                <li>Participer aux réunions de coordination et de planification ; </li>
                <li>Former le personnel sur les outils de communication et d’information ; </li>
                <li>Contribuer aux rapports narratifs et institutionnels ; </li>
                <li>Veiller au respect des normes éthiques de communication (images, données, consentement). </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Compétences et qualifications requises"
          content={
            <>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diplôme universitaire Bac+3 à Bac+5 en Communication, Journalisme, Sciences de l’information, Technologies de l’information et de la communication (TIC), Ou domaine connexe ; </li>
                <li>Une formation complémentaire en communication institutionnelle, digitale ou gestion de l’information est un atout majeur ; </li>
                <li>Minimum 3 à 5 ans d’expérience en communication institutionnelle ; </li>
                <li>Expérience dans une ONG ou organisation de développement souhaitée ; </li>
                <li>Expérience en gestion de la communication de projets financés par des bailleurs ; </li>
                <li>Bonne connaissance des enjeux de visibilité et de redevabilité ; </li>
                <li>Élaboration et mise en œuvre de stratégies de communication ; </li>
                <li>Rédaction institutionnelle et éditoriale ; </li>
                <li>Gestion de contenu multimédia (textes, photos, vidéos) ; </li>
                <li>Administration de sites web et réseaux sociaux ; </li>
                <li>Outils de création graphique et audiovisuelle ; </li>
                <li>Gestion des systèmes d’information et d’archivage numérique ; </li>
                <li>Suivi des indicateurs de communication ; </li>
                <li>Maîtrise des outils informatiques et collaboratifs ; </li>
                <li>Bonne compréhension des règles éthiques de communication humanitaire ; </li>
                <li>Excellentes capacités de communication écrite et orale ; </li>
                <li>Créativité et sens de l’initiative ; </li>
                <li>Sens de l’organisation et gestion des priorités ; </li>
                <li>Rigueur et respect des délais ; </li>
                <li>Sens élevé de l’éthique et de la responsabilité ; </li>
                <li>Capacité à travailler en équipe et en réseau ; </li>
                <li>Autonomie et adaptabilité ; </li>
                <li>Discrétion et respect de la confidentialité ; </li>
                <li>Engagement envers les valeurs et la mission de COTA. </li>
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
                    text: `Recrutement d’Un(e) Responsable GSI (Gestion du Système de l'Information) au Tanganyika pour l'ONG COTA`,
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
