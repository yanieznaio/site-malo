import Link from 'next/link'
import React from 'react'

const Cta = ({ green }) => {
    return (
        <div className='bg-white'>
            <div className="py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
                <div className={`relative px-6 pt-16 overflow-hidden shadow-2xl isolate ${green ? 'bg-[#61764B]' : 'bg-dark-brown'} sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}>
                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#2B7A0B" />
                                <stop offset="1" stopColor="5BB318" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="max-w-md mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-[#ffff] sm:text-4xl">Transition énergétique de l’habitat, <br />etes vous prets ?</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Que vous soyez Particulier, Promoteur Immobilier, Architecte, Bureau d’Etudes ou Entreprise,  différents types d’ expertises adaptées à vos besoins. </p>
                        <div className="flex items-center justify-center mt-10 gap-x-6 lg:justify-start">
                            <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contact</Link>
                            <Link href="/expertises" className="text-sm font-semibold leading-6 text-[#ffff]">Voir nos expetises <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img className="absolute left-0 top-0 w-[29rem] md:w-[44rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="/modernhouse.png" alt="App screenshot" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta