// src/data/actualites.jsx

import ImageVolontariat from "/AfficheOffre.jpg";
import Communique from "/communique.jpg";
import NovatechImg from "/novatech.jpg";
import NovatechImg2 from "/novatech_2.jpg"

import { Link } from "react-router-dom";

export const actualites = [
  {
    id: 1,
    title: `TANGANYIKA, SUD-KIVU & MANIEMA : L'ONG Corps Technique pour l'Accompagnement
    recrute plusieurs volontaires aux postes vacants pour le compte de sa direction
    au Tanganyika et ses antennes au Sud-kivu et Maniema`,
    author: "COTA ONG",
    date: "28 Janvier 2026",
    image: ImageVolontariat,
    content: (
       <>
              <p>
                Créé depuis le 20 Octobre 2020 selon l’esprit de la loi N°004/2001 du 20 juillet 2001 portant dispositions 
                générales applicables aux associations sans but lucratif et les établissements d’utilité publique, 
                le Corps Technique pour l’Accompagnement, « COTA » en sigle, est une organisation non gouvernementale 
                de droit congolais, sans but lucratif, apolitique, non confessionnelle, humanitaire et professionnelle, 
                spécialisée dans l’accompagnement technique et stratégique aux organisations, entreprises, institutions 
                et aux communautés, dans le but de renforcer leurs capacités, améliorer leurs performances et promouvoir 
                un développement inclusif, durable et participatif en République Démocratique du Congo.
              </p> <br />
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
              </p> <br />
              <p>
                L’ONG COTA ambitionne de devenir un acteur de référence en accompagnement technique et en innovation en République Démocratique du Congo, 
                contribuant à la construction d’organisations performantes, d’entreprises durables et de communautés résilientes, dans le respect des 
                droits humains et de la gouvernance responsable.
              </p> <br />

              <p>
              Dans le cadre de renforcer son dispositif de gestion et ses capacités opérationnelles en rapport 
              avec la mise en œuvre de son plan d’action 2026-2027 (PAO-27) en particulier et de ses projets 
              et programmes en général, l’ONG COTA cherche à recruter un (e) directeur (trice) de programmes  
              pour sa direction du Tanganyika. 
            </p>

            {/* === BOUTON VERS LES OFFRES === */}
                <div className="mt-8 flex justify-center">
                  <Link
                    to="/ressources"
                    className="inline-flex items-center gap-2 bg-[#0069BD] hover:bg-[#03337F] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
                  >
                    Voir toutes les offres disponibles
                  </Link>
                </div>
            </>
    ),
  },
  {
    id: 2,
    title: "COMMUNIQUE OFFICIEL : Le Corps Technique pour l'Accompagnement (COTA) annonce la reprise de ses activités pour l'année 2026",
    author: "COTA ONG",
    date: "05 Janvier 2026",
    image: Communique,
    content: (
      <>
        <p>
          La Direction Générale du Corps Technique pour l’Accompagnement (COTA) porte à la connaissance 
          de l’ensemble de ses membres, de ses partenaires techniques et financiers, 
          ainsi que des communautés bénéficiaires, que la reprise effective de ses 
          activités opérationnelles est fixée au 12 janvier 2026.
        </p> <br />

        <p>
          Cette reprise marque le lancement d’une nouvelle phase d’interventions visant à renforcer 
          la mise en œuvre des programmes et projets inscrits dans le Plan d’Action 
          Opérationnel 2026-2027 (PAO-27), en cohérence avec la mission institutionnelle 
          de COTA et les priorités stratégiques définies pour l’année en cours.
        </p> <br />

        <p>
          À cet effet, l’organisation réaffirme son engagement à œuvrer pour 
          l’accompagnement technique, le développement communautaire, 
          la promotion de la résilience locale et l’amélioration durable 
          des conditions de vie des populations ciblées, en étroite collaboration 
          avec ses partenaires et parties prenantes.
        </p> <br />

        <p>
          La Direction Générale invite l’ensemble du personnel, des volontaires, 
          ainsi que les partenaires concernés à prendre toutes les dispositions 
          *nécessaires pour une reprise harmonieuse et efficace des activités, 
          dans le respect des orientations internes et des principes de bonne 
          gouvernance.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Lancement officiel de l’initiative « NOVATECH » par le Corps Technique pour l’Accompagnement (COTA)",
    author: "COTA ONG",
    date: "17 Février 2026",
    image: NovatechImg,
    content: (
      <>
        <p>
          Actif depuis le 20 octobre 2020 selon la loi N°004/2001 du 20 juillet 2001 portant 
          dispositions générales applicables aux associations sans but lucratif et aux 
          établissements d’utilité publique, <Link to="/a-propos" className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition duration-300">
           le Corps Technique pour l’Accompagnement (COTA)
          </Link> est une organisation non gouvernementale de droit congolais, apolitique, non confessionnelle, 
          humanitaire et professionnelle, spécialisée dans l’accompagnement technique et stratégique 
          afin de promouvoir un développement inclusif, durable et participatif en RDC. 
        </p> <br />

        <img src={NovatechImg2} className="rounded-lg" alt="NovatechImg" /> <br />

        <h3 className="text-3xl font-extrabold xl:font-4xl"> 
          <span className="text-gray-500">NOVATECH :</span> L’innovation 
          numérique au service du développement entrepreneurial, 
          humanitaire, institutionnel et communautaire en RDC.
        </h3> 

        <div className="flex items-center gap-2 my-4 pb-4">
          <span className="h-1 w-15 bg-[#0069BD] rounded"></span>
          <span className="h-1 w-12 bg-[#CA451B] rounded"></span>
          <span className="h-1 w-20 bg-[#006176] rounded"></span>
        </div>


        <p>
          Dans le cadre de son axe stratégique relatif à l’innovation 
          et aux technologies numériques, COTA a le plaisir d’annoncer 
          le lancement officiel de son initiative dénommée « NOVATECH ».
        </p> <br />

        <p>
          NOVATECH est une plateforme d’innovation technologique conçue 
          pour développer et promouvoir des solutions numériques adaptées 
          aux réalités locales et nationales. Cette initiative vise à 
          accompagner les partenaires, institutions publiques et privées, 
          organisations de la société civile et communautés dans : 
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
          La conception et le déploiement de solutions digitales innovantes ;
          </li>
          <li>
          Le développement de systèmes performants de suivi-évaluation ;
          </li>
          <li>
          Le traitement statistique et la visualisation des données pour une prise de décision éclairée ;
          </li>
          <li>
          La digitalisation des processus organisationnels et institutionnels ;
          </li>
          <li>
          La valorisation des compétences et du génie congolais.
          </li>
        </ul>
         <br />

        <p>
          À travers NOVATECH, COTA met un accent particulier sur la promotion 
          du nationalisme économique, la valorisation du contexte local, 
          l’intégration des valeurs culturelles et identitaires du pays, 
          le développement de produits technologiques conçus par et pour les Congolais.
        </p> <br />

        <p>
          L’objectif est clair : faire du numérique un levier stratégique de transformation durable, 
          tout en renforçant l’autonomie technologique et institutionnelle en République Démocratique du Congo.
        </p> <br />

        <h3 className="text-2xl font-extrabold xl:font-3xl">Une vision tournée vers l’avenir</h3> <br />
        <p>
          Avec NOVATECH, COTA ambitionne de devenir un acteur de référence en innovation technologique et 
          en accompagnement stratégique en RDC, contribuant à la construction d’organisations performantes 
          et structurées, d’entreprises compétitives et durables, de communautés résilientes et autonomes, 
          d’institutions engagées dans la bonne gouvernance et la redevabilité.
        </p> <br />

        <h3 className="text-2xl font-extrabold xl:font-3xl">Appel aux partenaires</h3> <br />
        <p>
          COTA invite les institutions publiques, les ONG, les entreprises, les jeunes innovateurs, 
          les start-ups et les partenaires techniques et financiers à rejoindre cette dynamique innovante.
        </p> <br />

        <p>
          Ensemble, faisons de la technologie un outil puissant au service du développement durable, 
          participatif et responsable en République Démocratique du Congo.
        </p>
        
      </>
    ),
  },
  
];
