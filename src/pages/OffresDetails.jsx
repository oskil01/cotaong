// src/pages/OffresDetails.jsx
import React from "react";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

import { useParams, Link } from "react-router-dom";

import Offre01 from "../components/offers/Offre01";
import Offre02 from "../components/offers/Offre02";

const offres = [
  {
    id: 1,
    content :(
      <>
        <Offre01 />
      </>
    )
  },
  {
    id: 2,
    content :(
      <>
        <Offre02 />
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
    <div className="">
      <NavMenu />
      <div className="mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg">
        <div className="pt-14 md:pt-25">
          {offre.content}
        </div>

        <div className="max-w-6xl mx-auto mt-8 py-8 px-8">
          <Link to="/ressources" className="text-blue-700 hover:underline">
            ← Retour aux offres
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
