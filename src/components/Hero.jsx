import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero from "../assets/hero.jpg";
import slide2 from "../assets/slide2.png";
import ImageVolontariat from "../assets/offers/volontaires.jpg";
import Communique from "/communique.jpg";
import NovatechImg from "/novatech.jpg";

const slides = [
  {
    titleHighlight: "Partenaire",
    title: "dans l'action",
    text: "Nous unissons nos forces pour développer des solutions innovantes et durables pour les organisations, institutions et communautés.",
    image: hero,
  },
  {
    titleHighlight: "Pionnier",
    title: "dans le progrès",
    text: "Notre volonté est d'être à la pointe des pratiques techniques, garantissant un accompagnement efficace et adapté aux besoins de chacun.",
    image: slide2,
  },
];

export default function HeaderCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="relative w-full z-10 mt-[-40px] ">
        <div className="relative h-[650px] overflow-hidden">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full bg-black/50 flex items-center justify-center text-center px-6">
                <div className="max-w-4xl text-white sm:mt-[-70px] md:mt-[-70px] lg:mt-[-70px] ">

                  <h1 className="text-5xl sm:text-7xl md:text-7xl font-bold">

                    <span className="bg-[#0069BD] px-4 py-1 mr-3">
                      {slide.titleHighlight}
                    </span>

                    {slide.title}

                  </h1>

                  <p className="mt-6 text-xl sm:text-4xl md:text-3xl">
                    {slide.text}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CARTES SUPERPOSÉES */}
        <div className="hidden lg:block absolute left-1/2 -bottom-28 -translate-x-1/2 w-full max-w-6xl z-50">
          <div className="bg-white rounded-xl p-6 flex gap-6">
            <Link
              to="/actualites/3"
              className="flex-1 bg-gray-100 hover:shadow-md transition rounded-lg overflow-hidden"
            >
              <img
                src={NovatechImg}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-[#03337F] font-semibold text-lg">
                Annonce de l'initiative « NOVATECH »
              </div>
            </Link>

            <Link
              to="/actualites/1"
              className="flex-1 bg-gray-100 hover:shadow-md transition rounded-lg overflow-hidden"
            >
              <img
                src={ImageVolontariat}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-[#03337F] font-semibold text-lg">
                AMI : Nous recrutons plusieurs volontaires
              </div>
            </Link>

            <Link
              to="/actualites/2"
              className="flex-1 bg-gray-100 hover:shadow-md transition rounded-lg overflow-hidden"
            >
              <img
                src={Communique}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-[#03337F] font-semibold text-lg">
                Officiel : COTA annonce la reprise de ses activités
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

// import { Circle,  Rocket,  Handshake } from 'lucide-react'
// import hero from '../assets/hero.jpg'

// const Hero = () => {
//   return (
//     <section className='relative overflow-hidden bg-gray-50
//     py-12 px-4 sm:px-6 md:px-8 lg:px-20 flex flex-col 
//     lg:flex-row items-center justify-between'>
//         {/* CONTENU TEXTUEL  */}
//         <div className='flex-1 lg:ml-28 w-full max-w-xl 
//         space-y-6 relative z-20'>
//             {/* ACCROCHE */}
//             <h2 className='text-3xl md:text-5xl sm:text-3xl text-gray-900
//             text-center lg:text-left'
//             data-aos='fade-right'
//             >
//                 Bienvenue chez COTA{" "}
//                 <span className='font-bold text-black block 
//                 lg:inline'>
//                     Partenaire dans l'action, 
//                     Pionnier dans le progrès.
//                 </span>
//             </h2>
//             {/* CERCLES  */}
//             <div
//              data-aos='fade-right'
//              data-aos-delay='100'
//              className='flex gap-3 mt-4 justify-center 
//              lg:justify-start'>
//                 <Circle className='text-[#03337F] w-5 h-5' />
//                 <Circle className='text-[#0069BD] w-5 h-5' />
//                 <Circle className='text-[#006176] w-5 h-5' />
//                 <Circle className='text-[#CA451B] w-5 h-5' /> 
//             </div>
//             {/* CARTES  */}
//             <div className='flex flex-col lg:grid lg:grid-cols-2
//             gap-6 lg:gap-48 items-center lg:items-start md:gap-4'>
//                 {/* carte 1 */}
//                 <div
//                 data-aos='zoom-in'
//                 data-aos-delay='200'
//                 className='bg-white w-72 rounded-3xl p-6
//                 border border-gray-100 shadow-xl lg:shadow-2xl
//                 transition md:w-90'>
//                     <div className='ml-4 w-10 h-10 flex items-center 
//                     justify-center rounded-lg bg-[#D3E4FF] mb-4'>
//                         <span>
//                             < Handshake className="w-6 h-6 text-[#03337F]" />
//                         </span>
//                     </div>
//                     <h3 className='ml-4 text-md font-bold text-gray-800'>
//                         COTA, en tant que partenaire dans l'action 
//                     </h3>
//                     <p className='ml-4 text-gray-500 text-sm mt-2'>
//                         Nous unissons nos forces pour développer des 
//                         solutions innovantes et durables pour les 
//                         organisations, institutions et communautés. 
//                     </p>
//                 </div>

//                 {/* carte 2 */}
//                 <div
//                 data-aos='zoom-in'
//                 data-aos-delay='300' 
//                 className='bg-white w-72 rounded-3xl p-6
//                 border border-gray-100 shadow-xl lg:shadow-2xl
//                 transition md:w-90'>
//                     <div className='ml-4 w-10 h-10 flex items-center 
//                     justify-center rounded-lg bg-[#FFE8E0] mb-4'>
//                         <span>
//                             <Rocket className="w-6 h-6 text-[#CA451B]" />
//                         </span>
//                     </div>
//                     <h3 className='ml-4 text-md font-bold text-gray-800'>
//                         COTA, en tant que pionnier dans le progrès 
//                     </h3>
//                     <p className='ml-4 text-gray-500 text-sm mt-2'>
//                         Volonté d'être à la pointe des pratiques techniques, 
//                         garantissant un accompagnement efficace et adapté aux besoins de chacun.
//                     </p>
//                 </div>
//             </div>
//         </div>

//         {/* IMAGE A DROITE */}
//         <div
//         data-aos='fade-left'
//         data-aos-delay='400'
//         className='flex-1 mt-12 lg:mt-0 lg:ml-12 relative
//         w-full flex justify-center'>
//             <div className='w-64 h-64 sm:w-80 sm:h-80 
//             md:w-96 md:w-96 lg:w-[600px] lg:h-[500px]
//             overflow-hidden border-8 border-white shadow-lg
//             rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative 
//             z-10'>
//                 <img 
//                 src={hero} 
//                 alt="image hero" 
//                 className='object-cover w-full h-full'/>

//             </div>

//         </div>
//     </section>
//   )
// }

// export default Hero