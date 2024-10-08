import MiniCardLogo from '@/app/compenents/MiniCardLogo'
import React from 'react'

const BoxInfo = ({ content }) => {

    const { img, title, subtitle, texte } = content
    return (
        <section className="relative pt-24 pb-24 overflow-hidden md:pb-20 lg:pt-32 ">

            <div className="container relative px-4 mx-auto">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="order-last w-full px-4 lg:w-1/2 lg:order-first">
                            <div className="relative pb-20 lg:pb-0">
                             <MiniCardLogo pos={{top:0, left:0}}/>
                                <div className="absolute bottom-0 right-0 max-w-xs lg:-mb-16">
                                    <div className="px-6 pt-6 pb-6 lg:pr-16 bg-[#F6F5F2] rounded-3xl shadow-xl flex flex-col">
                                        <div className="inline-flex mb-6">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50 md:w-12 md:h-12">
                                                <img src="/iconEnergy.png" alt="" />
                                            </div>
                                            <div className="hidden mx-3 md:block">
                                                <span className="text-sm font-semibold">Étude thermique</span>
                                                <span className="block text-xs text-gray-500">Des expertises adaptés a vos besoins</span>
                                            </div>
                                        </div>
                                        <div className="inline-flex mb-6 ">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50 md:w-12 md:h-12">
                                                <img src="/iconEco.png" alt="" />
                                            </div>
                                            <div className="hidden mx-3 md:block">
                                                <span className="text-sm font-semibold">Conception bas carbonne</span>
                                                <span className="block text-xs text-gray-500"></span>
                                            </div>
                                        </div>
                                        <div className="inline-flex">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50 md:w-12 md:h-12">
                                                <img src="/iconFile.png" alt="" />
                                            </div>
                                            <div className="hidden mx-3 md:block">
                                                <span className="text-sm font-semibold">Conseils&accompagnement</span>
                                                <span className="block text-xs text-gray-500">Nous vous aidons a réaliser vos projets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="mx-auto" src="/nature.webp" alt="" />
                            </div>
                        </div>
                        <div className="w-full px-4 mb-24 lg:w-1/2 lg:mb-0">
                            <div className="max-w-lg mx-auto lg:mr-0">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-800 rounded-full bg-green-50">info</span>
                                <h1 className="mb-6 text-4xl font-bold text-gray-900 font-heading xs:text-6xl">
                                    <span>{title}</span>
                                    <span className="px-2 font-serif italic">le saviez</span>
                                    <span>vous ? </span>
                                </h1>
                                <p className="mb-6 text-lg font-semibold">{subtitle}</p>
                                <p className="text-gray-400">{texte}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxInfo