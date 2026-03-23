import { Link } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";

const jobs = [
  {
    title: "Recrutement d’Un(e) Directeur(trice) de programmes dans le cadre de la mise en oeuvre du PAO-27 au Tanganyika",
    org: "COTA ONG",
    location: "Kalemie",
    status: "closed",
  },
  {
    title: "Recrutement d’Un(e) Directeur(trice) Financier(e) et Administratif(ve) dans le cadre de la mise en oeuvre du PAO-27 au Tanganyika",
    org: "COTA ONG",
    location: "Kalemie",
    status: "closed",
  },
  {
    title: "Recrutement d’Un(e) Officier(ère) MEAL dans le cadre de la mise en oeuvre du PAO-27 au Tanganyika",
    org: "COTA ONG",
    location: "Kalemie",
    status: "closed",
  },
];

const tenders = [
  {
    title: "Appels à candidatures pour les contrats de partenariat technique",
    org: "COTA ONG",
    location: "Kindu",
    status: "open",
  },
  {
    title: "Appels à candidatures pour les contrats de partenariat technique",
    org: "COTA ONG",
    location: "Kalemie",
    status: "closed",
  },
  {
    title: "Appels à candidatures pour les contrats de partenariat technique",
    org: "COTA ONG",
    location: "Uvira",
    status: "closed",
  },
];

function OfferItem({ offer }) {
  return (
    <div className="flex items-start justify-between py-6 border-b border-gray-300">
      
      <div className="flex items-start gap-4 max-w-[75%]">
        <ChevronRight className="text-blue-600 mt-2 shrink-0" size={26} />

        <div>
          <h4 className="font-semibold text-gray-900 text-lg md:text-xl lg:text-2xl leading-snug">
            {offer.title}
          </h4>

          <p className="text-gray-600 text-base md:text-lg mt-1">
            {offer.org} • {offer.location}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 whitespace-nowrap">

        <span
          className={`text-base md:text-lg font-semibold ${
            offer.status === "open"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {offer.status === "open" ? "Ouverte" : "Clôturée"}
        </span>

        <span
          className={`w-3 h-3 rounded-full ${
            offer.status === "open"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
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
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-blue-700" />

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