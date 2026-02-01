import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { actualites } from "../data/Actualites";
import { ArrowLeft, Share2, Heart } from "lucide-react";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

export default function ActualiteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // === Interaction "J'aime" ===
  const [liked, setLiked] = useState(false); 
  const [likes, setLikes] = useState(0);

  // Charger likes depuis localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes-${id}`);
    if (storedLikes) setLikes(Number(storedLikes));
  }, [id]);

  // Sauvegarder likes côté client
  useEffect(() => {
    localStorage.setItem(`likes-${id}`, likes);
  }, [likes, id]);

  const toggleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  // === Web Share API ===
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: `Découvrez cette actualité : ${actualite.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Erreur de partage :", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié !");
    }
  };

  // Récupération de l'actualité
  const actualite = actualites.find(a => a.id === Number(id));
  if (!actualite) return <p>Actualité introuvable</p>;

  return (
    <>
      {/* === NAVIGATION === */}
      <NavMenu active="actualites" />

      {/* === CONTENU === */}
      <section className="py-16 mt-35 px-6 max-w-6xl mx-auto">
        {/* Sous-titre */}
        <h3 className="text-lg text-gray-400 mb-5"># Actualités</h3>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Découvrez toutes nos actualités
        </h1>

        {/* Bouton retour */}
        <button 
          onClick={() => navigate("/actualites")}
          className="flex items-center gap-2 text-blue-600 mb-6"
        >
          <ArrowLeft /> Retour aux actualités
        </button>

        {/* Image */}
        <img src={actualite.image} className="w-full rounded-xl mb-6" />

        {/* Titre et meta */}
        <h2 className="text-3xl font-bold mb-2">{actualite.title}</h2>
        <p className="text-gray-500 mb-6">
          {actualite.date} • {actualite.author}
        </p>

        {/* Contenu */}
        <p className="text-lg leading-relaxed">{actualite.content}</p>

        {/* Boutons J'aime et Partager */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={toggleLike}
            className={`flex gap-2 items-center font-medium ${
              liked ? "text-red-500" : "text-gray-700"
            }`}
          >
            <Heart />
            {`J’aime (${likes})`}
          </button>

          <button
            onClick={handleShare}
            className="flex gap-2 items-center text-gray-700"
          >
            <Share2 /> Partager
          </button>
        </div>
      </section>

      {/* === FOOTER === */}
      <Footer />
    </>
  );
}
