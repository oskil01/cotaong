"use client";
import { useState, useEffect } from "react";

export default function PopupInfo() {
  const [showPopup, setShowPopup] = useState(false);

  // Vérifie si l'utilisateur a déjà accepté
  useEffect(() => {
    const hasAccepted = localStorage.getItem("siteAccepted");
    if (!hasAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("siteAccepted", "true"); // sauvegarde le choix
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center animate-fadeIn">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          ⚠️ Site en cours de développement
        </h2>
        <p className="text-gray-700 mb-6">
          Ce site est actuellement en phase de construction. Certaines sections
          peuvent ne pas encore être fonctionnelles ou finales.
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
          >
            Voir le site
          </button>

          <button
            onClick={() => setShowPopup(false)}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
