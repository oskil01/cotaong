import { 
  Circle, 
  TrendingUp,
  HeartHandshake, 
  Users,
  Star, 
  Zap  
} from 'lucide-react'

const WhyCota = () => {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br
      from-blue-50 to-purple-50 py-12 px-4 sm:py-16 
      md:py-20 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* === TITRE DE LA SECTION === */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-4 leading-tight">
            Pourquoi<span className="text-[#0069BD]"> choisir COTA ?</span>
          </h2>
          <div className="flex justify-center gap-3 mt-4 md:mt-5">
            <Circle className="text-[#03337F] w-5 h-5" />
            <Circle className="text-[#0069BD] w-5 h-5" />
            <Circle className="text-[#006176] w-5 h-5" />
            <Circle className="text-[#CA451B] w-5 h-5" /> 
          </div>
        </div>

        {/* === GRILLE PRINCIPALE (2 COLONNES) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* === CONTAINEUR RAISONS === */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div 
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl
              h-[480px] md:h-[480px] lg:h-[500px] overflow-hidden bg-gray-50 shadow-xl absolute top-0 
              rounded-[30%_10%_20%_70%/60%_30%_70%_30%]"
              data-aos="fade-right"
              data-aos-delay="100"
            ></div>

            <div className="relative z-10 p-6 w-full max-w-md space-y-6 
               md:px-12">
              {/* Raison 1 */}
              <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="200">
                <Zap className="w-7 h-7 sm:h-8 sm:w-8 md:w-9 md:h-9 text-[#03337F]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Efficacité</h3>
                  <p className="text-gray-600 text-[12px] md:text-sm lg:text-md">
                    Nous offrons des solutions concrètes et rapides qui produisent des résultats mesurables.
                  </p>
                </div>
              </div>

              {/* Raison 2 */}
              <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="300">
                <Users className="w-7 h-7 sm:h-8 sm:w-8 md:w-9 md:h-9 text-[#CA451B]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Expertise</h3>
                  <p className="text-gray-600 text-[12px] md:text-base lg:text-md">
                    Nous disposons d’un savoir-faire technique et professionnel reconnu.
                  </p>
                </div>
              </div>

              {/* Raison 3 */}
              <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="400">
                <TrendingUp className="w-7 h-7 sm:h-8 sm:w-8 md:w-9 md:h-9 text-[#00AB9A]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Innovation</h3>
                  <p className="text-gray-600 text-[12px] md:text-base lg:text-md">
                    Nous proposons des approches nouvelles et adaptées aux besoins actuels.
                  </p>
                </div>
              </div>

              {/* Raison 4 */}
              <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="500">
                <HeartHandshake className="w-7 h-7 sm:h-8 sm:w-8 md:w-9 md:h-9 md:h-7 text-[#008EFF]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Engagement</h3>
                  <p className="text-gray-600 text-[12px] md:text-base lg:text-md">
                    Nous œuvrons avec détermination et responsabilité pour le développement durable des partenaires.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === CONTAINEUR DE STATS === */}
          <div className="relative order-1 lg:order-2" data-aos="fade-left">
            <div className="bg-gradient-to-br from-[#006176] to-green-500 rounded-2xl md:rounded-3xl p-8 text-center text-white shadow-lg">
              <div className="h-16 w-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">98% partenaires satisfaits</h3>
              <p className="mb-6 text-sm sm:text-base">
                Témoignage de la confiance et de la qualité de notre accompagnement, fruit d’une collaboration efficace.
              </p>

              <div className="flex justify-center gap-6">
                <div>
                  <div className="text-2xl font-bold">+10</div>
                  <div className="text-sm">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">05</div>
                  <div className="text-sm">Ans d’existence</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm">Recommandations</div>
                </div>
              </div>
            </div>

            {/* Cercles décoratifs */}
            <div className="hidden md:block absolute -top-8 -right-6 w-20 h-20 rounded-full border-4 border-yellow-500 opacity-50"></div>
            <div className="hidden md:block absolute -bottom-8 -left-14 w-20 h-20 rounded-full border-4 border-blue-500 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyCota
