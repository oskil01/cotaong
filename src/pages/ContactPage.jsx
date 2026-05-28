import { useEffect, useMemo, useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  MessageSquareWarning,
  ChevronRight,
  Inbox,
} from "lucide-react";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import contactImage from "../assets/contactImage.jpg";
import complaintImage from "../assets/complaintImage.jpg";
import suggestionImage from "../assets/suggestionImage.jpg";

// AJOUTS UNIQUEMENT
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const Contact = () => {

  // =========================
  // ACTIVE SECTION
  // =========================
  const [activeSection, setActiveSection] = useState("message");

  // =========================
  // FORM DATA
  // =========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    complaint: "",
  });

  // =========================
  // LOADING
  // =========================
  const [loading, setLoading] = useState(false);

  // =========================
  // HASH DETECTION
  // =========================
  useEffect(() => {

    const updateSectionFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (
        hash === "message" ||
        hash === "plainte" ||
        hash === "whatsapp"
      ) {
        setActiveSection(hash);
      } else {
        setActiveSection("message");
      }
    };

    updateSectionFromHash();

    window.addEventListener("hashchange", updateSectionFromHash);

    return () => {
      window.removeEventListener("hashchange", updateSectionFromHash);
    };
  }, []);

  // =========================
  // SECTION CONFIG
  // =========================
  const sections = useMemo(() => ({
    message: {
      id: "message",

      title: "Envoyez-nous un message",

      subtitle:
        "Notre équipe reste disponible pour répondre à vos demandes, collaborations et préoccupations.",

      badge: "CONTACT DIRECT",

      image: contactImage,

      gradient:
        "from-[#03337F] via-[#0069BD] to-[#0096D6]",

      buttonGradient:
        "from-[#0069BD] to-[#03337F]",

      icon: Inbox,

      iconBg: "bg-[#0069BD]",

      color: "text-[#0069BD]",
    },

    plainte: {
      id: "plainte",

      title: "Soumettre une plainte",

      subtitle:
        "Votre voix compte. Signalez une situation nécessitant notre attention en toute confidentialité.",

      badge: "DISPOSITIF D’ÉCOUTE",

      image: complaintImage,

      gradient:
        "from-[#CA451B] via-[#D65A31] to-[#F57C4D]",

      buttonGradient:
        "from-[#CA451B] to-[#A83716]",

      icon: MessageSquareWarning,

      iconBg: "bg-[#CA451B]",

      color: "text-[#CA451B]",
    },

    whatsapp: {
      id: "whatsapp",

      title: "Contact WhatsApp",

      subtitle:
        "Discutez rapidement avec notre équipe via WhatsApp pour une assistance immédiate.",

      badge: "ASSISTANCE RAPIDE",

      image: suggestionImage,

      gradient:
        "from-[#006176] via-[#009688] to-[#00BFA5]",

      buttonGradient:
        "from-[#009688] to-[#006176]",

      icon: MessageCircle,

      iconBg: "bg-[#009688]",

      color: "text-[#009688]",
    },
  }), []);

  const current = sections[activeSection];

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      activeSection === "message" &&
      !formData.email
    ) {
      toast.error("Veuillez entrer votre adresse e-mail.");
      return;
    }

    setLoading(true);

    try {

      const payload = {
        ...formData,
        type: activeSection,
      };

      const res = await fetch("/api/sendEmail", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {

        toast.success("Message envoyé avec succès !");

        setFormData({
          name: "",
          email: "",
          message: "",
          subject: "",
          complaint: "",
        });

      } else {
        toast.error(
          data?.error ||
          "Erreur lors de l’envoi."
        );
      }

    } catch (error) {

      toast.error(
        "Une erreur est survenue."
      );

    } finally {

      setLoading(false);

    }
  };

  // =========================
  // SWITCH SECTION
  // =========================
  const changeSection = (section) => {
    window.location.hash = section;
  };

  // =========================
  // CONTACT INFOS
  // =========================
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "direction.cota@gmail.com",
      bg: "bg-[#F1F7FF]",
      iconBg: "bg-[#0069BD]",
    },

    {
      icon: Phone,
      title: "Téléphone",
      content: "+243 820 838 387",
      bg: "bg-[#FFF4F0]",
      iconBg: "bg-[#CA451B]",
    },

    {
      icon: MapPin,
      title: "Adresse",
      content:
        "202 av. Tanganyika, Q/KITUKU, C/LUKUGA, Kalemie",
      bg: "bg-[#EEFDFC]",
      iconBg: "bg-[#006176]",
    },
  ];

  return (
    <section className="bg-white overflow-hidden min-h-screen">
      <NavMenu />
      
      {/* HERO */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${current.gradient} pt-40 pb-32 px-4 sm:px-8 lg:px-16`}
      >

        {/* BG DECOR */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-white blur-3xl"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-5xl mx-auto text-white">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium mb-8">
              <current.icon className="w-4 h-4" />
              {current.badge}
            </span>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              {current.title}
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed">
              {current.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* MENU CARDS */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 -mt-16 z-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {Object.values(sections).map((item) => {

            const IconComp = item.icon;

            const isActive =
              activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() =>
                  changeSection(item.id)
                }
                className={`group text-left rounded-3xl p-8 transition-all duration-500 border ${
                  isActive
                    ? "bg-white shadow-2xl border-white scale-[1.02]"
                    : "bg-white/90 border-gray-100 hover:-translate-y-2 hover:shadow-2xl"
                }`}
              >

                <div
                  className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center text-white shadow-lg mb-6`}
                >
                  <IconComp className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.subtitle}
                </p>

                <div
                  className={`flex items-center gap-2 font-semibold transition-all group-hover:gap-4 ${item.color}`}
                >
                  Accéder
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>

            <span className={`font-semibold uppercase tracking-widest ${current.color}`}>
              {current.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mt-5 leading-tight">
              {current.title}
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {current.subtitle}
            </p>

            {/* MESSAGE FORM */}
            {activeSection === "message" && (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >

                <div>
                  <label className="block mb-3 font-medium text-gray-700">
                    Nom complet
                  </label>

                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#0069BD]"
                    placeholder="Exemple : John Doe"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-gray-700">
                    Adresse e-mail
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#0069BD]"
                    placeholder="Exemple : johndoe@gmail.com"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#0069BD]"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${current.buttonGradient} text-white font-semibold shadow-lg hover:scale-[1.02] transition-all`}
                >
                  {loading
                    ? "Envoi..."
                    : "Envoyer le message"}

                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}

            {/* PLAINTE FORM */}
            {activeSection === "plainte" && (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >

                <div>
                  <label className="block mb-3 font-medium text-gray-700">
                    Objet de la plainte
                  </label>

                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#CA451B]"
                    placeholder="Exemple : Service non conforme"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-gray-700">
                    Décrivez votre plainte
                  </label>

                  <textarea
                    rows={7}
                    value={formData.complaint}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        complaint: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#CA451B]"
                    placeholder="Expliquez votre situation..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${current.buttonGradient} text-white font-semibold shadow-lg hover:scale-[1.02] transition-all`}
                >
                  {loading
                    ? "Envoi..."
                    : "Soumettre la plainte"}

                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}

            {/* WHATSAPP */}
            {activeSection === "whatsapp" && (
              <div className="mt-10">

                <div className="grid gap-5">

                  <div className="bg-[#F3FFFD] border border-[#D8FFF8] rounded-3xl p-7">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Assistance rapide
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      Notre équipe répond à vos questions
                      concernant les programmes,
                      collaborations et opportunités.
                    </p>
                  </div>

                  <div className="bg-[#F3FFFD] border border-[#D8FFF8] rounded-3xl p-7">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Horaire de disponibilité
                    </h3>

                    <p className="mt-3 text-gray-600">
                      Lundi — Vendredi
                    </p>

                    <p className="text-gray-600">
                      08h00 — 17h00
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/243820838387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 mt-10 px-8 py-5 rounded-2xl bg-gradient-to-r ${current.buttonGradient} text-white font-bold shadow-2xl hover:scale-[1.02] transition-all`}
                >
                  Ouvrir WhatsApp

                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* CONTACT INFOS */}
            {activeSection === "message" && (
              <div className="grid gap-5 mt-8">

                {contactInfo.map((item, index) => {

                  const IconComp = item.icon;

                  return (
                    <div
                      key={index}
                      className={`${item.bg} rounded-2xl p-6 flex gap-5`}
                    >

                      <div
                        className={`w-14 h-14 rounded-xl ${item.iconBg} text-white flex items-center justify-center`}
                      >
                        <IconComp />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 mt-1">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* PLAINTE BOX */}
            {activeSection === "plainte" && (
              <div className="mt-8 bg-[#FFF8F5] border border-[#FFE4D8] rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-gray-800">
                  Confidentialité & protection
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Toutes les plaintes soumises sont
                  traitées avec confidentialité et
                  professionnalisme conformément aux
                  principes éthiques de l’organisation.
                </p>
              </div>
            )}

            {/* WHATSAPP BOX */}
            {activeSection === "whatsapp" && (
              <div className="mt-8 bg-[#F3FFFD] border border-[#D8FFF8] rounded-3xl p-8">

                <h3 className="text-2xl font-bold text-gray-800">
                  Temps de réponse rapide
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  WhatsApp est recommandé pour les
                  échanges rapides et les demandes
                  urgentes nécessitant une interaction
                  immédiate avec notre équipe.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      {/* FOOTER AJOUTÉ */}
      <Footer />
    </section>
  );
};

export default Contact;