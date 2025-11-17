"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AlertCircle } from "lucide-react";

export default function DonneesNonDisponibles() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className="text-center p-10 bg-white rounded-xl shadow-lg max-w-md w-full"
        data-aos="fade-up"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-100 animate-bounce">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Données non disponibles
        </h1>
        <p className="text-gray-600 mb-6">
          Les informations pour cette section ne sont pas encore disponibles. 
          Nous travaillons activement à leur collecte et à leur mise à jour pour 
          vous fournir un contenu complet et précis dès que possible.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 rounded-md bg-[#3337F] text-white font-medium hover:bg-[#0069BD] transition"
        >
          Retour à l'accueil
        </a>
      </div>
    </main>
  );
}
