"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const page = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.76, 0, 0.24, 1] }} className=''>

            <section className="relative py-20 overflow-hidden">
                <img className="absolute top-0 right-0 -mr-24 xl:mt-10 lg:-mr-0" src="saturn-assets/images/blog/star-circle-right.svg" alt="" />
                <img className="absolute bottom-0 left-0 hidden -mb-48 sm:block lg:mb-0" src="saturn-assets/images/blog/blue-light-left.png" alt="" />
                <div className="container relative px-4 mx-auto">
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-800 rounded-full bg-green-50">News</span>
                        <h1 className="text-5xl font-bold font-heading xs:text-6xl md:text-7xl">
                            <span>Articles &</span>
                            <span className="font-serif italic">Actualités</span>
                        </h1>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="py-12 border-t-2 border-gray-100">
                            <div className="flex flex-wrap items-center lg:flex-nowrap">
                                <div className="w-full px-4 mb-8 lg:w-auto lg:mb-0">
                                    <img className="block w-44 h-30" src="/prestation1.jpg" alt="" />
                                </div>
                                <div className="w-full px-4 mb-10 lg:w-9/12 lg:mb-0">
                                    <div className="max-w-2xl">
                                        <span className="block mb-1 text-gray-400">Jul 20, 2022</span>
                                        <p className="text-2xl font-semibold text-gray-900">RE2020 : Tout Ce Qu'il Faut Savoir sur la Nouvelle Réglementation Environnemental</p>
                                    </div>
                                </div>
                                <div className="w-full px-4 ml-auto text-right lg:w-auto">
                                    <Link className="inline-flex items-center text-xl font-semibold text-orange-900 hover:text-gray-900" href="/actualites/re2020-a-savoir">
                                        <span className="mr-2">Lire</span>
                                        <svg className="animate-bounce" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="py-12 border-t-2 border-gray-100">
                            <div className="flex flex-wrap items-center lg:flex-nowrap">
                                <div className="w-full px-4 mb-8 lg:w-auto lg:mb-0">
                                    <img className="block w-44 h-30" src="/batiment.jpg" alt="" />
                                </div>
                                <div className="w-full px-4 mb-10 lg:w-9/12 lg:mb-0">
                                    <div className="max-w-2xl">
                                        <span className="block mb-1 text-gray-400">Jul 20, 2022</span>
                                        <p className="text-2xl font-semibold text-gray-900">Construire un avenir bas carbone : une approche essentielle</p>
                                    </div>
                                </div>
                                <div className="w-full px-4 ml-auto text-right lg:w-auto">
                                    <Link className="inline-flex items-center text-xl font-semibold text-orange-900 hover:text-gray-900" href="/actualites/construire-bas-carbone">
                                        <span className="mr-2">Lire</span>
                                        <svg className="animate-bounce" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="py-12 border-t-2 border-gray-100">
                            <div className="flex flex-wrap items-center lg:flex-nowrap">
                                <div className="w-full px-4 mb-8 lg:w-auto lg:mb-0">
                                    <img className="block w-44 h-30" src="/natureHome.jpg" alt="" />
                                </div>
                                <div className="w-full px-4 mb-10 lg:w-9/12 lg:mb-0">
                                    <div className="max-w-2xl">
                                        <span className="block mb-1 text-gray-400">Jul 20, 2022</span>
                                        <p className="text-2xl font-semibold text-gray-900">Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing</p>
                                    </div>
                                </div>
                                <div className="w-full px-4 ml-auto text-right lg:w-auto">
                                    <Link className="inline-flex items-center text-xl font-semibold text-orange-900 hover:text-gray-900" href="/article">
                                        <span className="mr-2">Lire</span>
                                        <svg className="animate-bounce" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 text-center border-t-2 border-gray-100">
                            <Link className="relative inline-block py-4 overflow-hidden font-semibold transition duration-300 rounded-full text-light-brown group px-7 hover:text-orange-50 bg-dark-brown" href="/contact">
                                <div className="absolute top-0 w-full h-full transition duration-500 transform bg-gray-900 right-full group-hover:translate-x-full group-hover:scale-102"></div>
                                <span className="relative">Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>
    )
}

export default page