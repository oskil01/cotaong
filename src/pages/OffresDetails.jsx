// src/pages/OffresDetails.jsx
import React from "react";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

import { useParams, Link } from "react-router-dom";

import Offre09 from "../components/offers/Offre09";
import Offre10 from "../components/offers/Offre10";
import Offre11 from "../components/offers/Offre11";

const offres = [
  {
    id: 9,
    content :(
      <>
        <Offre09 />
      </>
    )
  },
  {
    id: 10,
    content :(
      <>
        <Offre10 />
      </>
    )
  },
  {
    id: 11,
    content :(
      <>
        <Offre11 />
      </>
    )
  },
];

export default function OffresDetails() {
  const { id } = useParams();
  const offre = offres.find((o) => o.id === parseInt(id));

  if (!offre) {
    return <div className="text-center py-16 text-red-500">Offre introuvable.</div>;
  }

  return (
    <div>
      <NavMenu />
      <div className="mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg">
        <div className="pt-14 md:pt-25">
          {offre.content}
        </div>

        <div className="max-w-6xl mx-auto mt-8 py-8 px-8">
          <Link to="/ressources" className="bg-[#CA451B] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#A23716] font-semibold">
            ← Retour aux offres
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
