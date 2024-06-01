"use client"
import Info from '@/app/compenents/Info'
import React, { useState } from 'react'
import Image from 'next/image'
import Nav from './Nav'
import Cta from '@/app/compenents/Cta'
import FAQList from './faqs/FAQList'
import BoxInfo from './BoxInfo'

const Expertise = ({ prestations }) => {

    const [isActive, setIsActive] = useState(0)
    return (
        <div className=''>
            <Nav prestations={prestations} setIsActive={setIsActive} isActive={isActive} />

            <div id={prestations[isActive].href}>
                <section className="bg-[#F6F5F2]">
                    <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="w-full px-4 mb-24 lg:mb-0">
                            <div className="max-w-lg mx-auto lg:mr-0">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-700 rounded-full bg-green-50">Expertise</span>
                                <h1 className="flex flex-wrap mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
                                    <span>{prestations[isActive].title.split(' ')[0]}</span>
                                    <span className="px-3 font-serif italic">{prestations[isActive].title.split(' ')[1]}</span>
                                    <span>{prestations[isActive].title.split(' ')[2]}</span>
                                </h1>

                                <p className="mb-6 text-lg font-semibold">{prestations[isActive].description}</p>
                                <p className="text-gray-400">{prestations[isActive].resume}</p>
                            </div>
                        </div>
                        <div className="grid w-full h-full grid-cols-2 gap-4 mt-8">
                            <div className='relative w-full h-[300px] md:h-[60vh] max-h-[500px]'>
                                <Image className="object-cover transition-all duration-75 rounded-lg ease" src={prestations[isActive].img} alt="office content 1" fill />

                            </div>
                            <div className='relative w-full md:h-[60vh] max-h-[500px]'>
                                <Image className="object-cover w-full mt-4 rounded-lg lg:mt-10" src={prestations[isActive].secondImage} alt="office content 2" fill />
                            </div>

                        </div>
                    </div>
                </section>

                <FAQList content={prestations[isActive].info} />
                <BoxInfo content={prestations[isActive].secondInfo} />


                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div className=''>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Étapes
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Le</span>
                            </span>{' '}
                            processus pour vos Démarche
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-8 text-center lg:grid-cols-3">
                        <div className="relative flex flex-col items-center justify-center sm:text-center">
                            <div className='absolute'>
                                <Image src={"/icon.png"} alt='icon' width={45} height={45} className='' />
                            </div>
                            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold text-[#ffff] bg-black rounded-full text-deep-purple-accent-400 sm:mx-auto">
                                1
                            </div>

                            <h6 className="mb-2 font-semibold leading-5">Contacter un expert</h6>
                            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                                Commandez en ligne ou par courrier votre Attestation Thermique RE2020 pour votre permis de construire.
                            </p>

                        </div>
                        <div className="relative flex flex-col items-center justify-center sm:text-center">
                            <div className='absolute mb-5'>
                                <Image src={"/icon.png"} alt='icon' width={45} height={45} className='' />
                            </div>
                            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold text-[#ffff] bg-black rounded-full text-deep-purple-accent-400 sm:mx-auto">
                                2
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Realisation de votre etude</h6>
                            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                                Un thermicien conseil réalise votre étude thermique RE2020, il vous contactera si des éléments sont manquants et vous apportera ses conseils.
                            </p>

                        </div>
                        <div className="relative flex flex-col items-center justify-center sm:text-center">
                            <div className='absolute z-50 mt-4'>
                                <Image src={"/file.png"} alt='icon' width={45} height={45} className='' />
                            </div>
                            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold text-[#ffff] bg-black rounded-full text-deep-purple-accent-400 sm:mx-auto">
                                3
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Vous recevez votre etude RE2020</h6>
                            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                                Recevez l’étude thermique RE2020 et son rapport.
                            </p>

                        </div>
                    </div>

                </div>




                <Cta green />


            </div>
        </div>

    )
}

export default Expertise