import { prestations } from '@/app/data'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Cards = () => {
    return (
        <section className="relative pt-10 pb-24 overflow-hidden md:pb-20 lg:pt-32">


            <div className="container relative px-4 mx-auto md:px-20">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center mb-24 -mx-4">
                        <div className="w-full px-4 mb-16 lg:w-2/3 lg:mb-0">
                            <div className="max-w-lg mx-auto lg:max-w-2xl lg:mx-0">
                                <h1 className="mb-8 text-5xl font-bold text-gray-900 font-heading xs:text-6xl md:text-7xl">
                                    <span>Améliorez vos performance </span>
                                    <span className="font-serif italic">énergétique</span>
                                </h1>
                                <p className="max-w-xl text-2xl font-semibold text-gray-400 md:text-2xl 2xl:text-3xl">Faites-vous accompagner par un expert en études thermiques et en rénovation, construction durable</p>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/3">
                            <img className="w-full max-w-lg mx-auto rounded-lg lg:mr-0" src="/contact2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 mb-12 border-gray-300 lg:w-1/3 lg:mb-0 lg:border-r">
                            <div className="max-w-xs pb-10 mx-auto text-center border-b border-gray-300 lg:pb-5 lg:border-b-0">
                                <div className="flex items-center justify-center mx-auto mb-5 w-14 h-14">
                                    <Image src="/iconFile.png" alt="" width={56} height={56} />
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-900">Études ACV/RE2020</h4>
                                <p className="text-gray-500">Obtenez votre Attestation</p>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-12 border-gray-300 lg:w-1/3 lg:mb-0 lg:border-r">
                            <div className="max-w-xs pb-10 mx-auto text-center border-b border-gray-300 lg:pb-5 lg:border-b-0">
                                <div className="flex items-center justify-center mx-auto mb-5 bg-white rounded-full w-14 h-14">
                                    <Image src="/iconEco.png" alt="" width={56} height={56} />
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-900">Conception Bas Carbone</h4>
                                <p className="text-gray-500">l’avenir du bâtiment </p>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 lg:pb-5">
                            <div className="max-w-xs mx-auto text-center">
                                <div className="flex items-center justify-center mx-auto mb-5 w-14 h-14">
                                    <Image src="/iconEnergy.png" alt="" width={56} height={56} />
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-900">Réemplois economies circulaire</h4>
                                <p className="text-gray-500">Solutions adaptées au défi climatique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Cards