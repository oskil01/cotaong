import { Link } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";

import { getJobStatus, daysRemaining, } from "../utils/jobStatus";

const jobs = [
  {
    title: "Recrutement de 04 Coordonnateurs Terrain pour la constitution de la base des données des agents temporaires",
    org: "COTA ONG",
    location: "Tanganyika, Sud-Kivu, Nord-Kivu, Maniema",
    publishedAt: "2026-06-25",
    deadline: "2026-07-02",
  },
  {
    title: "Recrutement de Superviseurs Terrain pour la constitution de la base des données des agents temporaires",
    org: "COTA ONG",
    location: "Tanganyika, Sud-Kivu, Nord-Kivu, Maniema",
    publishedAt: "2026-06-25",
    deadline: "2026-07-02",
  },
  {
    title: "Recrutement des Enqueteurs Terrain pour la constitution de la base des données des agents temporaires",
    org: "COTA ONG",
    location: "Tanganyika, Sud-Kivu, Nord-Kivu, Maniema",
    publishedAt: "2026-06-25",
    deadline: "2026-07-02",
  },
];

const STATUS = {
  coming: {
    text: "À venir",
    textColor: "text-gray-500",
    dotColor: "bg-gray-400",
  },

  open: {
    text: "Ouverte",
    textColor: "text-green-600",
    dotColor: "bg-green-600",
  },

  expiring: {
    text: "Expire bientôt",
    textColor: "text-yellow-600",
    dotColor: "bg-yellow-500",
  },

  closed: {
    text: "Clôturée",
    textColor: "text-red-600",
    dotColor: "bg-red-600",
  },
};

function OfferItem({ offer }) {
  const status = getJobStatus(
    offer.publishedAt,
    offer.deadline
  );

  const current = STATUS[status] || STATUS.closed;

  const days = daysRemaining(offer.deadline);

  return (
    <div className="flex items-start justify-between py-6 border-b border-gray-300">

      <div className="flex items-start gap-4 max-w-[75%]">
        <ChevronRight
          className="text-[#03337F] mt-1 shrink-0"
          size={26}
        />

        <div>
          <h4 className="font-semibold text-gray-900 text-md md:text-lg leading-snug">
            {offer.title}
          </h4>

          <p className="text-gray-600 text-base md:text-lg mt-1">
            {offer.org} • {offer.location}
          </p>

          {status === "open" && (
            <p className="text-sm text-gray-500 mt-1">
              Plus que <strong>{days}</strong> jours
            </p>
          )}

          {status === "expiring" && (
            <p className="text-sm text-yellow-600 font-medium mt-1">
              ⚠ Clôture dans {days} jour{days > 1 ? "s" : ""}
            </p>
          )}

          {status === "closed" && (
            <p className="text-sm text-red-600 mt-1">
              Offre expirée
            </p>
          )}

          {status === "coming" && (
            <p className="text-sm text-gray-500 mt-1">
              Publication prévue le{" "}
              {new Date(offer.publishedAt).toLocaleDateString("fr-FR")}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 whitespace-nowrap">
        <span
          className={`text-base md:text-lg font-semibold ${current.textColor}`}
        >
          {current.text}
        </span>

        <span
          className={`w-3 h-3 rounded-full ${current.dotColor}`}
        />
      </div>

    </div>
  );
}

function Section({ title, color, data }) {
  return (
    <section data-aos="fade-up" className="sm:pt-20">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-3xl md:text-4xl sm:text-7xl font-bold text-gray-800">
          {title}
        </h2>
        <Link
          to="/opportunités"
          className="flex items-center gap-2 text-[#03337F] font-semibold text-lg sm:text-2xl hover:underline"
        >
          Voir plus
          <Plus size={26} />
        </Link>
      </div>

      <div
        className="relative rounded-sm overflow-hidden"
        style={{ background: color }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#03337F]" />

        <div className="pl-8 pr-6">
          {data.map((item, i) => (
            <OfferItem key={i} offer={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default function OpportunitiesPreview() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <Section
        title="Offres d'emploi"
        color="#EEF5FF"
        data={jobs}
      />

      {/* <Section
        title="Appels d'offres"
        color="#D9E6F2"
        data={tenders}
      /> */}

      {/* <Section
        title="Autres opportunités"
        color="#DCEFEA"
        data={tenders.slice(0, 2)}
      /> */}

    </div>
  );
}