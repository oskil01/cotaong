import { Circle, Facebook, Heart, Linkedin, Twitter } from "lucide-react"
import { Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {
  const socialLinks = [
    {icon: Facebook, href:'#', color:'hover:bg-[#006176]'},
    {icon: Linkedin, href:'#', color:'hover:bg-[#0069BD]'},
    {icon: Twitter, href:'#', color:'hover:bg-[#CA451B]'},
  ];
  const quickLinks = [
    {label: "Accueil", href:"#"},
    {label: "A propos de COTA", href:"a-propos"},
    {label: "Nos stratégies", href:"#"},
    {label: "Actualités", href:"actualites"},
    {label: "Opportunités", href:"opportunités"},
    {label: "Ressources", href:"ressources"},
  ];
  const domaines = [
    {label: "Consultance & Accompagnement Organisationnel", href:'#'},
    {label: "Innovation Technologique", href:'#'},
    {label: "Entrepreneuriat & Développement économique", href:'#'},
    {label: "Santé & Protection de l'Environnement", href:'#'},
    {label: "Communication & Sensibilisation", href:'#'},
    {label: "Droits Humains & Gouvernance", href:'#'},
  ];
  const contactInfo = [
    {
      icon: Phone, 
      text:'+243 820838387, +243 856255748, +243 982462703', 
      color:'text-[#CA451B]'
    },
    {
      icon: Mail, 
      text:'direction.cota@gmail.com', 
      color:'text-[#0069BD]'
    },
    {
      icon: MapPin, 
      text:'109, Avenue OUA, Quartier Kahite, Commune de Lukuga, ville de Kalemie, Province du Tanganyika, RD Congo', 
      color:'text-[#006176]',
      multiline: true
    },
  ];
  const decorativeDots = [
    {color: 'text-[#006176]'},
    {color: 'text-[#0069BD]'},
    {color: 'text-[#CA451B]'},
  ]

  return (
    <footer 
      className="footer-bg text-white overflow-hidden relative py-12 
      px-4 sm:py-16 md:py-20 md:px-12 lg:px-20"
    > 
    <div className="max-w-6xl mx-auto">
      {/* Containeur principal */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 gap-8 md:gap-12 mb-12"
      >
        {/* Réseaux sociaux */}
        <div className="space-y-6">
          {/* LOGO DU SITE */}
          <div className="mb-[-20px] mt-[-70px]">
            <div className="flex justify-start">
              <img
                src="/images/footerIcon.png"
                alt="Logo du site"
                className="w-50 h-auto object-contain block mx-0 "
              />
            </div>
          </div>
          {/* A PROPOS */}
          <p className="text-gray-400 text-lg leading-relaxed">
            Suivez-nous sur nos réseaux sociaux pour rester informés sur chacune de nos actions.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href}
                className={`w-10 h-10 rounded-full bg-gray-700 items-center
                transition-colors flex justify-center 
                z-10 ${social.color}`}
              >
                <social.icon className='w-5 h-5' />
              </a>
            ))}
          </div>
        </div>

        {/* Liens rapides */}
        <div className="space-y-6 z-10">
          <h3 className="text-xl font-semibold border-[#0069BD]
            pb-2 inline-block border-b-2">
            Liens rapides
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className="text-gray-300 hover:text-[#008EFF]
                  transition-colors hover:font-bold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-[#006176]
            pb-2 inline-block border-b-2">
            Domaines d'activité
          </h3>
          <ul className="space-y-3">
            {domaines.map((domaine, index) => (
              <li key={index}>
                <a 
                  href={domaine.href}
                  className="text-gray-300 hover:text-[#00AB9A]
                  transition-colors hover:font-bold">
                  {domaine.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-[#CA451B]
            pb-2 inline-block border-b-2">
            Nous contacter
          </h3>
          <div className="space-y-4">
            {contactInfo.map((contact, idx) => (
              <div
                key={idx} 
                className={`flex items-center gap-3 ${contact.multiline ?
                'items-start' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 
                  flex items-center justify-center flex-shrink-0">
                  <contact.icon className={`w-5 h-5 ${contact.color}`} />
                </div>
                <div>
                  <p className="text-gray-300 whitespace-pre-line">
                    {contact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Décoration */}
      <div className="flex justify-center gap-3 mb-8">
        {decorativeDots.map((dot, idx) => (
          <Circle key={idx} className={`${dot.color} w-5 h-5`} />
        ))}
      </div>
      <div className="border-t border-gray-700 pt-8 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-1 whitespace-nowrap text-sm sm:text-base md:text-base px-4 sm:px-6">
          @ 2026 COTA - Tous droits reservés
          <span className="w-4 h-4 sm:w-4 sm:h-4 text-[#CA451B] flex-shrink-0">
            <Heart className="w-full h-full fill-current" />
          </span>
          Powered by OSKIL
        </p>
      </div>
      </div>
      <div className="absolute border-2 border-[#006176] bottom-20
        left-10 w-16 h-16 rounded-full opacity-40">
      </div>
      <div className="absolute border-2 border-[#CA451B] top-20
        right-10 w-20 h-20 rounded-full opacity-40">
      </div>
    </footer>
  )
}

export default Footer