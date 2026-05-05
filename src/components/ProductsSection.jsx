import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductsSection() {

  const images = [
    "/images/novatech.jpg",
    "/images/cotacollect-oveview.jpg",
    "/images/cotadb-banner.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Initialiser AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="w-full flex justify-center py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">

      <div className="max-w-6xl w-full grid md:grid-cols-2 shadow-xl rounded-xl overflow-hidden bg-white">

        {/* Carrousel gauche */}
        <div
          className="relative w-full h-72 md:h-auto"
          data-aos="fade-right"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Solutions"
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Indicateurs */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partie droite */}
        <div
          className="bg-[#03337F] text-white flex flex-col justify-center p-10 text-center md:text-left"
          data-aos="fade-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-wide">
            Découvrez des solutions numériques au service de vos actions
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-md">
            Nous concevons des outils et plateformes innovants pour aider les organisations,
            entreprises et institutions à améliorer la gestion de leurs projets,
            renforcer leur impact sur le terrain et prendre des décisions basées sur
            des données fiables.
          </p>

          <Link
            to="/solutions"
            className="inline-block bg-white text-[#03337F] font-semibold px-8 py-4 text-lg hover:bg-gray-200 transition w-fit mx-auto md:mx-0 rounded-md"
          >
            DÉCOUVRIR MAINTENANT
          </Link>
        </div>

      </div>
    </section>
  );
}
