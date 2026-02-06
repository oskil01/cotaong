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

export default function Offre04() {
  const { id } = useParams();
  const [openShare, setOpenShare] = useState(false);

  // === Donnée simulée (à remplacer par API plus tard)
  const offre = {
    titre: "Chargé(e) de logistique",
    organisation: "Corps Technique pour l’Accompagnement (COTA)",
    reference: "04/AMI-LOG/COTA/026",
    publication: "25 janvier 2026",
    cloture: "28 février 2026",
    lieu: "Tanganyika",
    nombre: 1,
    nature: "Volontariat (bénévolat) indemnisé",
    typeContrat: "CDD (1 an renouvelable avec 3 mois de période probatoire)",
    responsable: "DAF",
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
          APPEL A MANIFESTATION D’INTERET N°04/AMI-LOG/COTA/026
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-center">
          Recrutement d’Un(e) Chargé(e) de Logistique au Tanganyika pour l'ONG COTA
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
                Dans le cadre du renforcement de ses capacités opérationnelles et du soutien 
                logistique à la mise en œuvre efficace de son Plan d’Action Opérationnel 2026 
                (PAO-26), l’ONG Corps Technique pour l’Accompagnement (COTA) recrute un(e) 
                Chargé(e) de Logistique pour sa direction au Tanganyika.
              </p>
              <p>
                Ce poste vise à garantir la disponibilité, la traçabilité et la bonne 
                gestion des ressources matérielles et logistiques, conformément aux 
                procédures internes de COTA et aux exigences des partenaires 
                techniques et financiers.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Mission principale"
          content={
            <>
              <p>
                Sous la supervision du/de la Directeur(trice) Administratif(ve) et Financier(e), 
                le/la Chargé(e) de Logistique est responsable de la planification, 
                de l’organisation, de la mise en œuvre et du contrôle de l’ensemble 
                des opérations logistiques de COTA.
              </p>
              <p>
                Il/elle veille à ce que les équipes programmes disposent, en temps opportun, 
                des biens, équipements et services nécessaires à l’exécution des activités 
                prévues dans le PAO-27, tout en assurant le respect des principes de transparence,
                efficacité, économie et conformité.
              </p>
            </>
          }
        />

        <ArticleSection
          title="Tâches et responsabilités"
          content={
            <>
              <a className="font-bold text-lg mb-2">A. Planification et gestion logistique</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Élaborer le plan logistique annuel en lien avec le PAO-26 ; </li>
                <li>Identifier les besoins logistiques des projets et services ; </li>
                <li>Anticiper les contraintes opérationnelles et proposer des solutions adaptées ; </li>
                <li>Assurer la coordination logistique entre le siège et les zones d’intervention. </li>
              </ul>

              <a className="font-bold text-lg mb-2">B. Gestion des achats et approvisionnements</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mettre en œuvre les procédures d’achats conformément aux règles internes et des bailleurs ; </li>
                <li>Préparer les dossiers d’achats (demandes, comparatifs, bons de commande) ; </li>
                <li>Assurer la sélection transparente des fournisseurs ; </li>
                <li>Suivre la livraison des biens et services ; </li>
                <li>Vérifier la conformité, la qualité et la quantité des biens réceptionnés. </li>
              </ul>
              <a className="font-bold text-lg mb-2">C. Gestion des stocks et des équipements</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Organiser et sécuriser les magasins et entrepôts ;</li>
                <li>Tenir à jour les fiches de stock et registres d’inventaire ;</li>
                <li>Assurer la gestion des immobilisations et équipements ;</li>
                <li>Réaliser des inventaires physiques périodiques ;</li>
                <li>Prévenir les pertes, détériorations et utilisations abusives.</li>
              </ul>
              <a className="font-bold text-lg mb-2">D. Gestion du transport et du parc roulant</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Planifier et coordonner les déplacements du personnel et du matériel ; </li>
                <li>Assurer la gestion du parc roulant (véhicules, motos, carburant) ; </li>
                <li>Suivre l’entretien, les réparations et assurances des véhicules ; </li>
                <li>Veiller au respect des règles de sécurité et d’utilisation des moyens de transport ; </li>
                <li>Tenir les carnets de bord et rapports de déplacement. </li>
              </ul>

              <a className="font-bold text-lg mb-2">E. Gestion administrative et conformité logistique</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Appliquer et faire respecter les procédures logistiques ; </li>
                <li>Assurer l’archivage des documents logistiques (contrats, factures, bons) ; </li>
                <li>Collaborer avec la finance pour la justification des dépenses ; </li>
                <li>Contribuer aux audits logistiques et contrôles internes ; </li>
                <li>Produire des rapports logistiques périodiques. </li>
              </ul>
              <a className="font-bold text-lg mb-2">F. Appui opérationnel et coordination</a>
              <ul className="list-disc pl-6 space-y-1">
                <li>Appuyer les équipes terrain dans la mise en œuvre des activités ; </li>
                <li>Participer aux réunions de coordination interne ; </li>
                <li>Former les équipes sur les procédures logistiques ; </li>
                <li>Collaborer étroitement avec les services Programmes, Finances et MEAL. </li>
              </ul>
            </>
          }
        />

        <ArticleSection
          title="Compétences et qualifications requises"
          content={
            <>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diplôme Bac+3 minimum en Logistique, Gestion, Administration, Chaîne d’approvisionnement, ou domaine connexe ; </li>
                <li>Une formation spécifique en logistique humanitaire ou achats ONG est un atout ; </li>
                <li>Minimum 3 à 5 ans d’expérience dans la logistique ; </li>
                <li>Expérience préalable dans une ONG ou organisation de développement ; </li>
                <li>Expérience dans la gestion logistique de projets financés par des bailleurs ; </li>
                <li>Connaissance du contexte opérationnel en RDC ; </li>
                <li>Planification logistique et gestion des approvisionnements ; </li>
                <li>Procédures d’achats et passation de marchés ONG ; </li>
                <li>Gestion des stocks et inventaires ; </li>
                <li>Gestion du parc roulant et carburant ; </li>
                <li>Maîtrise des outils de suivi logistique ; </li>
                <li>Capacité à analyser les coûts logistiques ; </li>
                <li>Rédaction de rapports logistiques ; </li>
                <li>Maîtrise des outils informatiques MS Word, Excel (niveau intermédiaire à avancé), Outils de gestion de stocks et bases de données ; </li>
                <li>Connaissance des normes de sécurité et de prévention des risques. </li>
                <li>Grande capacité d’organisation et de planification ; </li>
                <li>Sens élevé de la responsabilité et de la rigueur ; </li>
                <li>Intégrité, honnêteté et respect des procédures ; </li>
                <li>Capacité à travailler sous pression et à gérer plusieurs tâches ; </li>
                <li>Réactivité et esprit de résolution de problèmes ; </li>
                <li>Bonne capacité de communication et de coordination ; </li>
                <li>Esprit d’équipe et disponibilité ; </li>
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
                    text: `Recrutement d'Un(e) Chargé(e) de logistique au Tanganyika pour l'ONG COTA`,
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
