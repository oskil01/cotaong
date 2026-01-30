// src/pages/OffresDetails.jsx
import React from "react";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

import { useParams, Link } from "react-router-dom";

import Offre01 from "../components/offers/Offre01";
import Offre02 from "../components/offers/Offre02";
import Offre03 from "../components/offers/Offre03";
import Offre04 from "../components/offers/Offre04";
import Offre05 from "../components/offers/Offre05";
import Offre06 from "../components/offers/Offre06";
import Offre07 from "../components/offers/Offre07";
import Offre08 from "../components/offers/Offre08";

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
  {
    id: 3,
    content :(
      <>
        <Offre03 />
      </>
    )
  },
  {
    id: 4,
    content :(
      <>
        <Offre04 />
      </>
    )
  },
  {
    id: 5,
    content :(
      <>
        <Offre05 />
      </>
    )
  },
   {
    id: 6,
    content :(
      <>
        <Offre06 />
      </>
    )
  },
   {
    id: 7,
    content :(
      <>
        <Offre07 />
      </>
    )
  },
   {
    id: 8,
    content :(
      <>
        <Offre08 />
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
