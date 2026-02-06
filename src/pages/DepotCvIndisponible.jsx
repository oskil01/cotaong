import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AlertTriangle } from "lucide-react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function DepotCvIndisponible() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <NavMenu />

      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 pt-32 pb-20">
        <div
          className="max-w-2xl bg-white mt-24 rounded-2xl shadow-xl p-8 text-center"
          data-aos="fade-up"
        >
          {/* Icône */}
          <div
            className="flex justify-center mb-6 text-yellow-500"
            data-aos="zoom-in"
          >
            <AlertTriangle size={80} strokeWidth={1.5} />
          </div>

          {/* Gros titre */}
          <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
            Oups !
          </h1>

          {/* Message */}
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Merci de vouloir travailler avec nous.  
            Toutefois, nous n’acceptons pas de curriculum vitae (CV)
            en dehors des offres actuellement ouvertes.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Cette mesure est appliquée pendant les périodes où des offres
            d’emploi sont en cours, afin d’éviter toute confusion et de garantir
            un traitement rigoureux et équitable des candidatures liées aux
            appels officiellement publiés.
          </p>

          <p className="text-gray-600 italic mb-8">
            Revenez plus tard.
          </p>

          {/* Bouton retour */}
          <Link
            to="/ressources"
            className="inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            FERMER
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
