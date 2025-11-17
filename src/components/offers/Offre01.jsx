import React from 'react'

import {
  Download,
  MapPin,
  FileText,
  Clock,
  Calendar,
  Users,
  CheckCircle
} from 'lucide-react';


function Offre01() {

const offres = [
    {
      id: 1,
      titre: "Consultant en communication pour l'élaboration d'un guide de sensibilisation contre les catastrophes liées aux inondations pluviales.",
      organisation: "Corps Technique pour l'Accompagnement",
      nombre: "Nombre : 2",
      location: "Kalemie",
      contrat: "CCD Temps plein",
      date: "Publié le 29 Oct 2025",
      deadline: "Expire 15 Nov 2025",
      details: (
        <>
        <section className='py-4 sm:px-6'>
          <h2 className='pb-8 text-lg sm:text-2xl md:text-3xl 
           font-semibold'>Description de l'offre
          </h2>
           <p className='text-lg sm:text-base space-y-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
           </p>

           <h2 className='py-8 text-xl sm:text-2xl md:text-3xl 
           font-semibold'>Objectif du poste
           </h2>
           <p className='text-lg sm:text-base space-y-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
           </p>

           <h2 className='py-8 text-xl sm:text-2xl md:text-3xl 
           font-semibold'>Taches et Responsabilités
           </h2>
           <p className='text-lg sm:text-base space-y-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua :
            <ul className='py-4 px-8 space-y-2'>
              <li className='flex gap-3 items-center'>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                Lorem ipsum dolor sit amet,
              </li>
              <li className='flex gap-3 items-center'>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                Lorem ipsum dolor sit amet,
              </li>
              <li className='flex gap-3 items-center'>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                Lorem ipsum dolor sit amet,
              </li>
              <li className='flex gap-3 items-center'>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                Lorem ipsum dolor sit amet,
              </li>
              <li className='flex gap-3 items-center'>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                Lorem ipsum dolor sit amet,
              </li>
              <li className='flex gap-3 items-center'>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                Lorem ipsum dolor sit amet,
              </li>
              <li className='flex gap-3 items-center'>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                Lorem ipsum dolor sit amet,
              </li>
            </ul>
           </p>


          {/* Comment postuler */}
          <div className='pt-8'>
            <a href="/files/fichier.pdf" className="text-blue-600 underline flex items-center gap-1 text-sm">
              <Download size={16} /> Téléchargez le fichier .pdf
            </a>
          </div>

          {/* Bouton postuler */}
          <div className="text-right">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm">
              POSTULER
            </button>
          </div>

        </section>
        </>
      )
    }, 
]
  return (
    <section className='px-4 py-16'>
      <div className='bg-[#03337F] py-8 text-center font-bold
      text-white/70 text-3xl md:text-5xl '>
        <h3>Détails de l'offre</h3>
      </div>

      {/* Cartes des offres */}
        {offres.map((offre) => (
          <div
            key={offre.id}
            onClick={() => goToDetails(offre.id)}
            className="overflow-hidden mb-6 max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row px-y pt-8">
              <img src="/images/profile1.jpg" alt={offre.titre} className="w-full md:w-1/3 h-full object-cover" />
              <div className="flex-1 p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{offre.titre}</h3>
                <p className="text-base sm:text-md md:text-xl font-bold text-[#03337F] mb-2">{offre.organisation}</p>
                <ul className="text-base space-y-1">
                  <li className="flex items-center gap-2"><Users size={16} /> {offre.nombre} </li>
                  <li className="flex items-center gap-2"><MapPin size={16} /> {offre.location} </li>
                  <li className="flex items-center gap-2"><FileText size={16} />  {offre.contrat}</li>
                  <li className="flex items-center gap-2"><Clock size={16} /> {offre.date}</li>
                  <li className="flex items-center gap-2"><Calendar size={16} />  {offre.deadline}</li>
                </ul>
              </div>
            </div>

            {/* Détails offre */}
            <div>
               {offre.details}
            </div>
          </div>
        ))}

        
        

    </section>
  )
}

export default Offre01