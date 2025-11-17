"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Scale, CheckCircle, MapPin, ShieldCheck, Scroll } from "lucide-react";

export default function StatutJuridique() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  const étapes = [
    {
      icon: Scale,
      iconColor: "#3337FF",
      iconBg: "rgba(51,55,255,0.1)",
      title: "Statut légal",
      description:
        "Le Corps Technique pour l’Accompagnement « COTA » est une organisation sans but lucratif de droit congolais, non confessionnelle, humanitaire et professionnelle régie par les textes légaux selon les dispositions de l’article 37 de l’actuelle constitution relatif à la liberté d’association et à l’esprit de la Loi N°004/2001 portant dispositions générales applicables aux associations sans but lucratif et établissements d’utilité publique en République Démocratique du Congo."
    },
    {
      icon: CheckCircle,
      iconColor: "#0069BD",
      iconBg: "rgba(0,105,189,0.1)",
      title: "Au niveau national",
      description:
        "COTA possède un statut juridique d’une organisation non gouvernementale nationale enregistré au ministère national de la justice à travers la 2e direction en charge des cultes, associations et EUP sous les coordonnées ci-après : N°JUST/SG/20/1666/2022 Du 12/05/2022 ; Accusée de réception N°F.92/24.443. Elle est régie par les statuts et un règlement d’ordre intérieur lus et approuvés par son assemblée générale, notariés et enregistrés à l’Office Notarial du Tanganyika sous le n°186/2020 en vertu de l’Ordonnance-loi  N° 066-344 du 09/06/1966 relatif aux actes notariés."
    },
    {
      icon: MapPin,
      iconColor: "#008EFF",
      iconBg: "rgba(0,142,255,0.1)",
      title: "Au niveau de son siège",
      description:
        "Le siège de COTA est situé dans la ville de  Kalemie, au 202 avenue Tanganyika, quartier KITUKU, commune de la Lukuga, province du Tanganyika, en République Démocratique du Congo. L’organisation dispose de toutes les autorisations nécessaires au niveau de son siège, notamment une autorisation provisoire préalablement délivrée par le gouverneur de province et bénéficie d’avis favorables des ministères du développement rural, des affaires sociales sous tutelles, garantissant la légitimité de ses opérations sur le territoire provincial et national."
    },
    {
      icon: ShieldCheck,
      iconColor: "#006176",
      iconBg: "rgba(0,97,118,0.1)",
      title: "Conseil juridique",
      description:
        "COTA possède un conseil juridique interne chargé de veiller au respect de l’éthique et des normes en vigueur. Ce conseil assure la conformité légale de toutes les activités, protège les intérêts de l’organisation et de ses partenaires, et garantit la sécurité juridique de chaque projet entrepris."
    },
    {
      icon: Scroll,
      iconColor: "#CA451B",
      iconBg: "rgba(202,69,27,0.1)",
      title: "Textes additionnels",
      description:
        "En complément de ses statuts, COTA a mis en place des textes légaux internes régissant la confidentialité, la protection des données et la bonne conduite des collaborateurs. Ces documents encadrent les relations avec les consultants, agents et partenaires afin d’assurer transparence et respect des engagements."
    }
  ];

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {/* === Étapes === */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {étapes.map((étape, idx) => {
          const Icon = étape.icon;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-start gap-6 ${!isEven ? "lg:flex-row-reverse" : ""}`}
              data-aos={isEven ? "fade-right" : "fade-left"}
            >
              <div className="flex-1 flex items-start gap-4">
                <div
                  className="p-4 rounded-lg flex justify-center items-center shrink-0"
                  style={{ backgroundColor: étape.iconBg }}
                >
                  <Icon className="w-10 h-10" color={étape.iconColor} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{étape.title}</h2>
                  <p className="text-gray-700 mt-2 whitespace-pre-line">{étape.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* === Section finale === */}
      <section className="bg-white py-12" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Une base légale solide pour un impact durable
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Grâce à un cadre légal clair, des enregistrements officiels et un conseil juridique compétent, COTA assure
            la transparence, la conformité et la sécurité juridique dans toutes ses opérations, garantissant la confiance
            de ses partenaires et la protection des bénéficiaires.
          </p>
        </div>
      </section>
    </main>
  );
}
