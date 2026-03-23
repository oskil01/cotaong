// src/pages/CAVPage.jsx

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

import Navbar from "../components/NavMenu";
import Footer from "../components/Footer";
import cavA4 from "../assets/cav.jpg";

export default function CAVPage() {

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const faqData = [
    {
      question: "Qui peut bénéficier du programme CAV ?",
      answer:
        "Les bénéficiaires du programme sont les personnes et communautés affectées par les crises humanitaires notamment les victimes de conflits armés, les victimes de violences basées sur le genre, les personnes déplacées internes ainsi que les populations touchées par des catastrophes naturelles ou toute autre situation d’urgence humanitaire."
    },
    {
      question: "Comment les fonds sont-ils utilisés ?",
      answer:
        "Les ressources mobilisées dans le cadre du Compte d’Aide aux Vulnérables servent à financer des interventions humanitaires ciblées telles que l’assistance directe aux victimes, l’appui psychosocial, la réhabilitation sociale, la protection des personnes vulnérables et d’autres actions d’urgence visant à répondre rapidement aux besoins des communautés affectées."
    },
    {
      question: "Comment contribuer au programme CAV ?",
      answer:
        "Toute personne physique ou morale peut soutenir l’initiative CAV à travers un don financier ou matériel. Les contributions permettent de renforcer les capacités d’intervention de COTA et de répondre efficacement aux besoins urgents des populations confrontées aux crises humanitaires."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">
        {/* HEADER */}
        <header
          className="relative bg-cover bg-center h-[450px]"
          style={{ backgroundImage: `url(${cavA4})` }}
        >
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center px-6">
            <p className="text-lg text-gray-500 py-6 md:text-xl mt-35 max-w-2xl" data-aos="fade-up">
              B  I  E  N  V  E  N  U SUR NOTRE PROGRAMME DE DONATION
            </p>
            <h1 className="text-5xl md:text-6xl pb-4 sm:text-7xl font-extrabold" data-aos="fade-down">
              Initiative <span className="text-[#CA451B]">CAV</span> 
            </h1>
            <p className="text-lg md:text-xl mt-3 max-w-2xl" data-aos="fade-up">
              Compte d’Aide aux Vulnérables pour sauver la vie et préserver la dignité humaine
            </p>
          </div>
        </header>


        {/* MAIN */}
        <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid lg:grid-cols-2 gap-16">
          {/* GAUCHE */}
          <section className="space-y-14">
            {/* PRESENTATION */}
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-5xl font-bold text-[#006176] mb-6">
                <span className="bg-[#CA451B] text-white">Initiative CAV-</span> Pour tous les Victimes et Vulnérables : sauver des vies et préserver la dignité humaine.
              </h2>
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-5">
                Le <strong>Compte d’Aide aux Vulnérables (CAV)</strong> est une
                initiative humanitaire mise en place par le Corps Technique
                pour l’Accompagnement (COTA), organisation non gouvernementale
                congolaise créée le 20 octobre 2020 conformément à la loi
                N°004/2001 portant dispositions générales applicables aux
                associations sans but lucratif et aux établissements
                d’utilité publique.
              </p>
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-5">
                Cette initiative constitue un mécanisme de solidarité visant
                à mobiliser des ressources financières et matérielles afin
                d’apporter une assistance rapide, coordonnée et efficace aux
                populations les plus vulnérables confrontées à des situations
                d’urgence humanitaire en République Démocratique du Congo.
              </p>
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-5">
                À travers le programme CAV, COTA entend soutenir les victimes
                de conflits armés, de catastrophes naturelles, de violences
                sexuelles et basées sur le genre, ainsi que les communautés
                affectées par les déplacements forcés ou toute forme de crise
                humanitaire mettant en péril la vie et la dignité humaine.
              </p>
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed">
                Les contributions recueillies dans le cadre de cette initiative
                permettent de financer des interventions humanitaires ciblées
                telles que l’assistance directe aux victimes, l’appui
                psychosocial, la réhabilitation sociale, la protection des
                personnes vulnérables et la mise en œuvre d’actions
                d’urgence destinées à restaurer l’espoir et renforcer la
                résilience des communautés affectées.
              </p>
            </div>

            {/* FAQ ACCORDION */}
            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold text-[#006176] mb-8">
                Questions fréquentes
              </h2>

              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                  >
                    {/* QUESTION */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-lg sm:text-xl flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
                    >
                      {item.question}
                      <ChevronDown
                        className={`transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* REPONSE */}
                    <div
                      className={`px-5 text-gray-400 text-lg sm:text-xl leading-relaxed transition-all duration-300 ${
                        openIndex === index
                          ? "max-h-96 pb-5"
                          : "max-h-0 overflow-hidden"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DROITE */}
          <aside
            className="flex flex-col items-center gap-4"
            data-aos="fade-left"
          >
            {/* IMAGE */}
            <img
              src={cavA4}
              alt="Programme CAV"
              className="w-full max-w-md object-contain"
            />
            {/* BOUTON DON */}
            <button className="w-full max-w-md py-5 text-xl font-semibold text-white bg-[#CA451B] hover:bg-[#a83716] transition shadow-lg">
              FAIRE UN DON
            </button>
          </aside>
        </main>
      </div>

      <Footer />
    </>
  );
}