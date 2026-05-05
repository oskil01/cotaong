"use client";

import { useState, useEffect } from "react";
import { Mail, Send, Circle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(100); // pour la barre

  // Effet pour faire disparaître le message automatiquement
  useEffect(() => {
    if (!message) return;

    setProgress(100); // reset
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setMessage(""); // supprime le message quand barre vide
          return 0;
        }
        return prev - 1; // diminue progressivement
      });
    }, 30); // 30ms par step = ~3 secondes

    return () => clearInterval(interval);
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("❌ Veuillez entrer une adresse e-mail valide.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
  setMessage("✅ Merci pour votre inscription ! Vous recevrez bientôt nos mises à jour.");
  setEmail("");

  // Envoi automatique du mail de remerciement
  await fetch("/api/sendThankYouEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name: "" }),
  });
  } else {
  setMessage(`❌ Erreur : ${data.error || "Une erreur est survenue."}`);
}
} catch {
      setMessage("❌ Erreur réseau. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-[#001a3d] via-[#013e8a] to-[#002b67] overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="absolute inset-0">
        <div className="bg-[radial-gradient(circle_at_25%_25%,#ffffff22_0%,transparent_70%)] w-full h-full animate-[moveBg_20s_linear_infinite]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" data-aos="fade-down">
          Rejoignez notre <span className="text-[#CA451B]">Newsletter</span>
        </h2>
        <div className="flex justify-center gap-3 mt-4 md:mt-5">
          <Circle className="text-[#022256] w-5 h-5" />
          <Circle className="text-[#0069BD] w-5 h-5" />
          <Circle className="text-[#00AB9A] w-5 h-5" />
          <Circle className="text-[#CA451B] w-5 h-5" />
        </div>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 mt-5 text-md md:text-lg" data-aos="fade-up" data-aos-delay="200">
          Recevez nos dernières actualités, opportunités et formations directement dans votre boîte mail. Soyez les premiers informés !
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="relative w-full">
            <Mail className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse e-mail"
              className="w-full pl-12 pr-5 py-3 rounded-full focus:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bfff] placeholder-gray-500 shadow-lg transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-[#CA451B] hover:bg-[#009adf] 
            text-white px-8 py-3 rounded-full font-semibold transition-all 
            duration-300 shadow-lg hover:shadow-[#00bfff]/40 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            {loading ? "Envoi..." : "S’abonner"}
          </button>
        </form>

        {/* === Message de retour avec barre de progression === */}
        {message && (
          <div className="relative mt-6 max-w-xl mx-auto">
            <p
              className={`text-sm ${message.startsWith("✅") ? "text-green-400" : "text-red-400"} animate-fadeInUp`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {message}
            </p>
            <div className="absolute bottom-0 left-0 h-1 bg-white/40 rounded-full w-full">
              <div
                className="h-1 bg-white rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <p className="mt-6 text-md md:text-lg text-gray-400" data-aos="fade-up" data-aos-delay="800">
          Nous respectons votre vie privée — aucun spam, seulement du contenu utile.
        </p>
      </div>

      <style jsx>{`
        @keyframes moveBg {
          0% { background-position: 0 0; }
          100% { background-position: 600px 600px; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
