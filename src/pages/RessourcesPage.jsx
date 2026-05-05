import { useState } from "react"
import NavMenu from "../components/NavMenu"
import Footer from "../components/Footer"
import Block from "../components/Block"
import { resourcesData } from "../data/resourcesData"

import headerImg from "../assets/AdobeStock_565478671-scaled.jpeg"
import DocumentItem from "../components/DocumentItem"


export default function ResourcesPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(null)

  const handleSearch = () => {
    if (!query) return setResults(null)

    const all = [
      ...resourcesData.techniques,
      ...resourcesData.rapports,
      ...resourcesData.autres,
    ]

    const filtered = all.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filtered)
  }

  return (
    <>
      <NavMenu />

      {/* HERO */}
      <div className="relative">

        {/* IMAGE */}
        <div
          className="h-[420px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
          style={{ backgroundImage: `url(${headerImg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <h1 className="relative text-white text-4xl sm:text-5xl font-bold mb-4 mt-12">
            Nos Ressources
          </h1>

          <p className="relative text-gray-200 max-w-2xl text-base md:text-lg lg:text-xl">
            Accédez à l’ensemble de nos ressources : documents techniques, rapports et contenus multimédias pour mieux comprendre nos actions et notre impact.
          </p>
        </div>

        {/* 🔍 SEARCH BOX (AU-DESSUS DU HEADER) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full -translate-y-1/2 w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-600 text-white p-6 md:p-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
              
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left">
                Trouvez rapidement ce que vous cherchez
              </h2>

              <div className="flex bg-white rounded-full overflow-hidden w-full md:w-[400px]">
                <input
                  type="text"
                  placeholder="Tapez le mot-clé"
                  className="flex-1 px-4 py-2 outline-none text-gray-700 text-base md:text-lg"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />

                <button
                  onClick={handleSearch}
                  className="px-4 bg-gray-100 hover:bg-gray-200"
                >
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RESULTATS */}
      {results !== null && (
        <div className="max-w-6xl mx-auto px-4 mt-10 py-20">
          <h3 className="text-xl text-gray-400 font-bold mb-4">Résultats de recherche</h3>

          {results.length > 0 ? (
            <div className="space-y-3">
              {results.map((item, i) => (
                <div className="space-y-3">
                  {results.map((item, i) => (
                    <DocumentItem
                      key={i}
                      item={item}
                      color="blue" // ou dynamique si tu veux
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-base md:text-lg">
              Aucun résultat trouvé
            </p>
          )}
        </div>
      )}

      {/* CONTENU NORMAL */}
      {results === null && (
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 py-30">

          {/* YOUTUBE MINIATURE */}
          <div>
            <h3 className="font-bold mb-4 text-lg md:text-xl">
              Suivez notre chaîne Youtube
            </h3>

            <a
              href="https://youtube.com/@cota-media?si=_QQ-AUdRVDh6v1-x"
              target="_blank"
              className="block relative group"
            >
              <img
                src="/images/chanel_thumbail.jpg"
                alt="Youtube"
                className="w-full h-[220px] object-cover rounded-lg"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

              {/* bouton play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 p-4 rounded-full text-white text-xl">
                  ▶
                </div>
              </div>
            </a>
          </div>

          {/* BLOCS */}
          <div className="space-y-8">
            <Block title="Documents techniques" items={resourcesData.techniques} color="blue" />
            <Block title="Rapports" items={resourcesData.rapports} color="red" />
            <Block title="Autres" items={resourcesData.autres} color="green" />
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}