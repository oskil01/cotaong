import { 
  CheckCircle, 
  ChevronDown, 
  FileText, 
  ArrowDown 
} from "lucide-react";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Partenaire() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const criteresNationaux = [
    "Être une Organisation Non Gouvernementale légalement reconnue en République Démocratique du Congo, conformément aux dispositions de la loi n°004/2001 du 20 juillet 2001 relative aux associations sans but lucratif et aux établissements d’utilité publique. ",
    "Etre une entreprise ou société dûment reconnue et régie par la loi en vigueur relative aux entreprises et sociétés de commerce. ",
    "Justifier d’au moins trois (3) années d’expérience dans des domaines tels que (i) accompagnement et consultance organisationnelle ; (ii) informatique et innovation technologique ; (iii) entrepreneuriat, développement économique et communautaire ; (iv) santé, protection des vies et de l’environnement ; (v) communication et sensibilisation communautaire ; (vi) protection, droits humains et gouvernance en République Démocratique du Congo.",
    "Disposer d’au moins trois (2) années d’expérience d’intervention dans les communautés ciblées, incluant la mise en œuvre de projets communautaires avec l’appui financier de bailleurs nationaux ou internationaux. ",
    "Être en conformité avec les valeurs et standards humanitaires notamment l’humanité, l’égalité, la neutralité, l’impartialité, l’équité et l’indépendance. ",
    "Disposer de capacités opérationnelles suffisantes, notamment des meubles et immeubles, du personnel qualifié ainsi que des équipements nécessaires à la mise en œuvre des activités. ",
    "Être doté d’un organe de gouvernance fonctionnel, ainsi que de mécanismes de contrôle interne, de suivi et d’évaluation opérationnels depuis au moins trois (3) ans. ",
    "Disposer de procédures claires et documentées relatives au recrutement du personnel et à la gestion des ressources humaines. ",
    "Disposer de politiques et procédures formalisées en matière de gestion et de mise en œuvre des projets et programmes. ",
    "Fournir des preuves attestant de la bonne exécution de projets similaires, réalisés en collaboration avec des partenaires ou bailleurs nationaux ou internationaux. ",
    "Présenter des résultats opérationnels significatifs, mesurables et vérifiables dans l’un des domaines d’intervention ci-haut mentionnés. ",
    "Disposer d’organes de contrôle interne, tels qu’un audit interne, une commission de contrôle ou des commissaires aux comptes. ",
    "Être en conformité avec les obligations légales et réglementaires, notamment en matière fiscale. ",
    "Avoir un compte bancaire au nom de l’organisation et tenir une comptabilité régulière et transparente, permettant la production d’états financiers fiables. ",
    "Mettre en place des politiques et mécanismes de prévention et de lutte contre la fraude, la corruption ainsi que contre l’exploitation et les abus sexuels (PSEAH). ",
    "Jouir d’une bonne réputation auprès des bénéficiaires et des communautés d’accueil. ",
    "Bénéficier également d’une bonne réputation auprès des partenaires et bailleurs de fonds nationaux et internationaux.",
  ];

  const criteresInternationaux = [
    "Être une organisation internationale, une ONG internationale ou une entreprise légalement constituée conformément à la législation de son pays d’origine et autorisée à intervenir en République Démocratique du Congo conformément aux dispositions légales en vigueur. ",
    "Justifier d’au moins trois (3) années d’expérience professionnelle avérée dans la mise en œuvre de programmes ou projets liés notamment (i) accompagnement et consultance organisationnelle ; (ii) informatique et innovation technologique ; (iii) entrepreneuriat, développement économique et communautaire ; (iv) santé, protection des vies et de l’environnement ; (v) communication et sensibilisation communautaire ; (vi) protection, droits humains et gouvernance ou tout autre domaine pertinent. ",
    "Disposer d’une expérience démontrée dans la mise en œuvre de projets financés par des bailleurs nationaux ou internationaux, notamment des institutions multilatérales, agences des Nations Unies, organisations internationales ou partenaires de développement. ",
    "Avoir une expérience d’intervention avec des projets de développement, d’urgence, de résilience, de cohésion sociale, de santé et environnement dans des contextes fragiles ou affectés par les crises humanitaires, notamment en Afrique et de préférence en République Démocratique du Congo ou dans la région des Grands Lacs. ",
    "Disposer de capacités opérationnelles et techniques suffisantes, incluant des ressources humaines qualifiées, des systèmes logistiques adéquats et, le cas échéant, une présence ou des partenaires opérationnels en République Démocratique du Congo. ",
    "Être doté d’un système de gouvernance institutionnelle clair, incluant des mécanismes de supervision, de contrôle interne, ainsi que des dispositifs de suivi et d’évaluation des programmes. ",
    "Disposer de politiques et procédures formalisées en matière de gestion des ressources humaines, incluant des processus transparents de recrutement et de gestion du personnel. ",
    "Disposer de politiques et procédures claires pour la gestion des projets et programmes, incluant les mécanismes de planification, de suivi, d’évaluation et de redevabilité. ",
    "Justifier d’une expérience documentée dans la mise en œuvre de projets similaires, attestée par des rapports d’activités, des attestations de bonne exécution ou des références de partenaires et bailleurs. ",
    "Présenter des résultats opérationnels significatifs et vérifiables dans les domaines d’intervention concernés. ",
    "Disposer de mécanismes de contrôle financier et d’audit, incluant des audits internes ou externes réguliers et des systèmes de gestion financière conformes aux standards internationaux. ",
    "Être en conformité avec les obligations légales, fiscales et réglementaires applicables dans son pays d’origine et dans les pays d’intervention. ",
    "Tenir une comptabilité transparente et conforme aux normes internationales, permettant la production régulière d’états financiers certifiés. ",
    "Disposer de politiques institutionnelles de prévention et de lutte contre la fraude, la corruption, l’exploitation et les abus sexuels (PSEAH), ainsi que de mécanismes de signalement et de traitement des plaintes. ",
    "Jouir d’une bonne réputation institutionnelle, attestée par les partenaires, les bailleurs de fonds et les communautés bénéficiaires des projets. "

  ];

  const docsNationaux = [
    "Statuts notariés de l’organisation ou actes constitutifs de l’entreprise",
    "Règlement d’ordre intérieur ou manuel de gouvernance interne",
    "Structure et Organigramme institutionnel actualisé",
    "Extrait de la personnalité juridique (pour les ONG)",
    "Registre de commerce (RCCM) (pour les entreprises et sociétés)",
    "Numéro d’Identification Nationale (ID.Nat)",
    "Numéro d’Identification Fiscale (NIF)",
    "Attestation fiscale valide",
    "Licence professionnelle ou agrément sectoriel (si applicable)",
    "Procès-verbal des Assemblées Générales et/ou du Conseil d’Administration des trois dernières années",
    "Profil institutionnel ou brochure de présentation de l’organisation ou de l’entreprise",
    "Rapports d’activités des trois dernières années",
    "États financiers des trois dernières années",
    "Rapports d’audit externe des trois dernières années (si disponibles)",
    "Relevé d’identité bancaire (RIB)",
    "Description des principales réalisations ou projets menés (150 mots maximum)",
    "Liste détaillée des principaux contrats ou projets réalisés au cours des cinq dernières années",
    "Attestations de bonne exécution ou lettres de recommandation des partenaires ou clients",
    "Liste des bailleurs de fonds ou partenaires financiers",
    "Montant total des financements reçus au cours des trois dernières années",
    "Effectif du personnel actif et des bénévoles",
    "Curriculum Vitae du personnel clé impliqué dans les projets",
    "Description des moyens logistiques disponibles (véhicules, installations, équipements, matériels)",
    "Liste des provinces et localités d’opération avec le nombre de bureaux ou représentations",
    "Description des mécanismes internes de suivi et évaluation des projets",
    "Manuel de procédures administratives et financières ou politique de gestion financière",
    "Politique de gestion des ressources humaines",
    "Politique de lutte contre la fraude et la corruption",
    "Politique de prévention contre l’exploitation et les abus sexuels (PSEAH/PSEA)",
    "Code d’éthique ou code de conduite",
    "Déclaration d’absence de conflit d’intérêts",
  ];

  const docsInternationaux = [
    "Statuts ou actes constitutifs de l’organisation ou de l’entreprise",
    "Certificat d’enregistrement légal dans le pays d’origine",
    "Autorisation officielle d’exercer en République Démocratique du Congo",
    "Organigramme institutionnel global et représentation en RDC",
    "Profil institutionnel ou brochure de présentation",
    "Rapports d’activités des trois dernières années",
    "États financiers des trois dernières années",
    "Rapports d’audit externe des trois dernières années",
    "Relevé d’identité bancaire",
    "Description des principales réalisations ou projets menés (150 mots maximum)",
    "Liste détaillée des principaux projets ou contrats réalisés au cours des cinq dernières années",
    "Attestations de bonne exécution ou références de bailleurs ou partenaires",
    "Liste des bailleurs de fonds ou partenaires financiers",
    "Montant total des financements reçus au cours des trois dernières années",
    "Effectif du personnel global et personnel basé en RDC",
    "Curriculum Vitae du personnel clé impliqué dans les projets",
    "Description des moyens logistiques disponibles (véhicules, installations, équipements, matériels)",
    "Liste des provinces et localités d’opération avec le nombre de bureaux ou représentations",
    "Description des mécanismes internes de suivi et évaluation des projets",
    "Manuel de procédures administratives et financières ou politique de gestion financière",
    "Politique de gestion des ressources humaines",
    "Politique de lutte contre la fraude et la corruption",
    "Politique de prévention contre l’exploitation et les abus sexuels (PSEAH/PSEA)",
    "Code d’éthique ou code de conduite",
    "Conventions ou accords de partenariat existants",
    "Déclaration d’absence de conflit d’intérêts",
  ];

  return (
    <div>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center text-white"
        style={{
          backgroundImage: "url('/images/partenaire_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <img
          src="/images/cota_partenaire.png"
          className="absolute top-10 xl:mx-30 lg:mx-25 md:mx-20
          left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0
          w-46 md:w-48 lg:w-60 z-20 "
        />

        <div className="
          relative
          max-w-6xl
          mx-auto
          px-6
          mt-30
          pt-38
          md:pt-0
          grid
          md:grid-cols-2
          gap-16
          items-center
        ">

          {/* TEXTE GAUCHE */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-center md:text-left"
          >

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Ensemble, pour un développement inclusif et participatif
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 max-w-xl mx-auto md:mx-0">
              Rejoignez un réseau engagé dans la transformation sociale
              et le développement durable des communautés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <button
                onClick={() => scrollTo("criteres")}
                className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 px-6 py-3 rounded-lg font-semibold text-base lg:text-lg"
              >
                Critères Éligibilité
                <ChevronDown size={18}/>
              </button>

              <button
                onClick={() => scrollTo("documents")}
                className="flex items-center justify-center gap-2 bg-[#CA451B] hover:bg-[#a33716] px-6 py-3 rounded-lg font-semibold text-base lg:text-lg"
              >
                Liste des Documents
                <ChevronDown size={18}/>
              </button>

            </div>
          </div>


          {/* CARTE DROITE */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex justify-center md:justify-end"
          >

            <div className="bg-white rounded-3xl text-center w-[340px] sm:w-[380px] lg:w-[460px] shadow-2xl">

              <img
                src="/images/partenaire_accroche.png"
                className="w-full rounded-t-3xl"
              />

              <p className="text-gray-700 m-6 lg:text-lg xl:text-xl leading-relaxed">
                Passer à l'action c'est accepter de participer main dans la main
                à chacune de nos actions sur terrain.
              </p>

              {/* CTA PARTENAIRE */}
              <div className="relative m-6">

                {/* flèche animation */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce text-[#CA451B]">
                  <ArrowDown size={30}/>
                </div>

                <a
                  href="https://tally.so/r/RG4AyQ"
                  className="block bg-[#CA451B] hover:bg-[#a33716] py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg text-white shadow-lg transition hover:scale-105"
                >
                  DEVENIR PARTENAIRE
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CRITERES */}
      <section
        id="criteres"
        className="py-24 bg-gray-100 "
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2  data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6">
            Critères d'éligibilité
          </h2>

          <p  data-aos="fade-up" className="text-center text-gray-600 text-lg lg:text-xl xl:text-2xl mb-16">
            Découvrez les conditions pour rejoindre notre réseau de partenaires.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* NATIONAL */}
            <div data-aos="zoom-in" className="border-3 border-green-200 rounded-2xl p-10 bg-white relative">

              <div className="absolute -top-5 left-10 bg-green-700 text-white w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl">
                1
              </div>

              <h3 className="text-xl lg:text-2xl xl:text-3xl font-extrabold mb-8 mt-4">
                Pour les entreprises, ONGs nationales et locales
              </h3>

              <ul className="space-y-8">

                {criteresNationaux.map((item, i) => (

                  <li key={i} className="flex items-start gap-4 text-lg lg:text-xl">

                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 mt-1">
                      <CheckCircle className="text-green-700" size={20}/>
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

            </div>


            {/* INTERNATIONAL */}
            <div data-aos="zoom-in" data-aos-delay="200" className="border-3 border-[#CA451B]/20 rounded-2xl p-10 bg-white relative">

              <div className="absolute -top-5 left-10 bg-[#CA451B] text-white w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl">
                2
              </div>

              <h3 className="text-xl lg:text-2xl xl:text-3xl font-extrabold mb-8 mt-4">
                Pour les entreprises et ONGs internationales
              </h3>

              <ul className="space-y-8">

                {criteresInternationaux.map((item, i) => (

                  <li key={i} className="flex items-start gap-4 text-lg lg:text-xl">

                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 mt-1">
                      <CheckCircle className="text-[#CA451B]" size={20}/>
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* DOCUMENTS */}
      <section
        id="documents"
        className="py-24 bg-gray-100"
      >

        <div className="max-w-6xl mt-[-100px] mx-auto px-6">

          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8"
          >
            Documents à présenter
          </h2>

          <p
            data-aos="fade-up"
            className="text-center text-gray-600 text-lg lg:text-xl mb-16"
          >
            Les documents requis pour formaliser le partenariat.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            {/* NATIONAL */}
            <div
              data-aos="fade-right"
              className="border-3 border-green-200 bg-white rounded-2xl p-6 md:p-10 relative"
            >

              <div className="absolute -top-5 left-10 bg-green-700 text-white w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl">
                1
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold mb-8 mt-4">
                Pour les entreprises, ONGs nationales et locales
              </h3>

              <ul className="space-y-6">

                {docsNationaux.map((doc,i)=>(

                  <li
                    key={i}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl
                    bg-gradient-to-r from-green-200/40 via-green-200/20 to-white
                    text-base sm:text-lg hover:shadow-md transition"
                  >

                    <FileText className="text-green-700" size={24}/>
                    {doc}

                  </li>

                ))}

              </ul>

            </div>


            {/* INTERNATIONAL */}
            <div
              data-aos="fade-left"
              className="bg-white border-3 border-[#CA451B]/20 rounded-2xl p-6 md:p-10 relative"
            >

              <div
                className="absolute -top-5 left-10 bg-[#CA451B]
                text-white w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl"
              >
                2
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold mb-8 mt-4">
                Pour les entreprises et ONGs internationales
              </h3>

              <ul className="space-y-6">

                {docsInternationaux.map((doc,i)=>(

                  <li
                    key={i}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl
                    bg-gradient-to-r from-[#CA451B]/10 via-[#CA451B]/5 to-white
                    text-base sm:text-lg hover:shadow-md transition"
                  >

                    <FileText className="text-[#CA451B]" size={24}/>
                    {doc}

                  </li>

                ))}

              </ul>

            </div>

          </div>


          {/* NOTE IMPORTANTE */}
          <div className="mt-16 max-w-3xl mx-auto" data-aos="fade-up">

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">

              <h4 className="font-bold text-lg xl:text-xl mb-2 text-yellow-700">
                Note importante
              </h4>

              <p className="text-gray-700 text-lg leading-relaxed">
                Tous les documents soumis doivent être authentiques, valides et à jour,
                tous dans un seul dossier <span className="font-extrabold">(.rar, .zip, .iso)</span>.
                L'organisation se réserve le droit de demander des informations
                complémentaires ou de procéder à une vérification des documents
                avant la validation définitive du partenariat.
              </p>

            </div>

          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}