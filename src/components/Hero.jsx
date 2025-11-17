import { Circle,  Rocket,  Handshake } from 'lucide-react'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-gray-50
    py-12 px-4 sm:px-6 md:px-8 lg:px-20 flex flex-col 
    lg:flex-row items-center justify-between'>
        {/* CONTENU TEXTUEL  */}
        <div className='flex-1 lg:ml-28 w-full max-w-xl 
        space-y-6 relative z-20'>
            {/* ACCROCHE */}
            <h2 className='text-3xl md:text-5xl sm:text-3xl text-gray-900
            text-center lg:text-left'
            data-aos='fade-right'
            >
                Bienvenue chez COTA{" "}
                <span className='font-bold text-black block 
                lg:inline'>
                    Partenaire dans l'action, 
                    Pionnier dans le progrès.
                </span>
            </h2>
            {/* CERCLES  */}
            <div
             data-aos='fade-right'
             data-aos-delay='100'
             className='flex gap-3 mt-4 justify-center 
             lg:justify-start'>
                <Circle className='text-[#03337F] w-5 h-5' />
                <Circle className='text-[#0069BD] w-5 h-5' />
                <Circle className='text-[#006176] w-5 h-5' />
                <Circle className='text-[#CA451B] w-5 h-5' /> 
            </div>
            {/* CARTES  */}
            <div className='flex flex-col lg:grid lg:grid-cols-2
            gap-6 lg:gap-48 items-center lg:items-start md:gap-4'>
                {/* carte 1 */}
                <div
                data-aos='zoom-in'
                data-aos-delay='200'
                className='bg-white w-72 rounded-3xl p-6
                border border-gray-100 shadow-xl lg:shadow-2xl
                transition md:w-90'>
                    <div className='ml-4 w-10 h-10 flex items-center 
                    justify-center rounded-lg bg-[#D3E4FF] mb-4'>
                        <span>
                            < Handshake className="w-6 h-6 text-[#03337F]" />
                        </span>
                    </div>
                    <h3 className='ml-4 text-md font-bold text-gray-800'>
                        COTA, en tant que partenaire dans l'action 
                    </h3>
                    <p className='ml-4 text-gray-500 text-sm mt-2'>
                        Nous unissons nos forces pour développer des 
                        solutions innovantes et durables pour les 
                        organisations, institutions et communautés. 
                    </p>
                </div>

                {/* carte 2 */}
                <div
                data-aos='zoom-in'
                data-aos-delay='300' 
                className='bg-white w-72 rounded-3xl p-6
                border border-gray-100 shadow-xl lg:shadow-2xl
                transition md:w-90'>
                    <div className='ml-4 w-10 h-10 flex items-center 
                    justify-center rounded-lg bg-[#FFE8E0] mb-4'>
                        <span>
                            <Rocket className="w-6 h-6 text-[#CA451B]" />
                        </span>
                    </div>
                    <h3 className='ml-4 text-md font-bold text-gray-800'>
                        COTA, en tant que pionnier dans le progrès 
                    </h3>
                    <p className='ml-4 text-gray-500 text-sm mt-2'>
                        Volonté d'être à la pointe des pratiques techniques, 
                        garantissant un accompagnement efficace et adapté aux besoins de chacun.
                    </p>
                </div>
            </div>
        </div>

        {/* IMAGE A DROITE */}
        <div
        data-aos='fade-left'
        data-aos-delay='400'
        className='flex-1 mt-12 lg:mt-0 lg:ml-12 relative
        w-full flex justify-center'>
            <div className='w-64 h-64 sm:w-80 sm:h-80 
            md:w-96 md:w-96 lg:w-[600px] lg:h-[500px]
            overflow-hidden border-8 border-white shadow-lg
            rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative 
            z-10'>
                <img 
                src={hero} 
                alt="image hero" 
                className='object-cover w-full h-full'/>

            </div>

        </div>
    </section>
  )
}

export default Hero