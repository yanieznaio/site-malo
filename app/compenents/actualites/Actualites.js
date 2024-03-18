"use client"
import React, { useState } from 'react'
import Logo from '../Logo'
import Image from 'next/image'
import ButtonLink from '../button/ButtonLink'
import { AnimatePresence, motion } from "framer-motion";
import CardBlog from './CardBlog'
import Carousel from './Carousel'

const Actualites = () => {
    const [showModal, setShowModal] = useState(false);
    const [over, setOver] = useState(false);
    return (
        <div className='flex flex-col items-center min-h-screen gap-8 px-6 py-20 overflow-hidden bg-greybeige md:py-40 '>
            <div className='flex gap-2'>
                <Logo />
                <h1 className='text-xl font-semibold text-dark-brown font-lato'>COTES ENVIRONNEMENTS</h1>
            </div>

            <div className=' md:w-2/4 font-lato font-semibold text-lg md:text-[2vw]  text-dark-brown text-center'>
                <p className=''>
                    Que vous soyez Particulier, Promoteur Immobilier, Architecte, Bureau d’Etudes ou Entreprise, je propose différents types d’ expertises adaptées à vos besoins
                </p>

            </div>
            <div className='flex flex-col w-full gap-6 md:gap-4  mt-10 text-white md:flex-row md:px-[10vw]'>
                <CardBlog title="COTES" description="Charming modular wood houses, fit to your dreams." img="/woodHome.jpg" showModal={showModal} setShowModal={setShowModal} />
                <CardBlog title="COTES" description="Charming modular wood houses, fit to your dreams." img="/wood.png" showModal={showModal} setShowModal={setShowModal} />
                {
                    showModal && (
                        <Carousel setShowModal={setShowModal} />
                    )
                }
            </div>
            <div className='mt-40 flex flex-col  md:flex-row  md:h-auto p-3 md:p-4  h-auto rounded-3xl bg-lightgrey gap-4  md:w-[calc(165.067px+29.47vw)]'>
                <div className='relative h-[max(62px,calc(62px+22.24vw));] md:w-1/3 md:h-auto'>
                    <Image src="/wood.png" alt='bois' fill={true} className='rounded-xl' />
                </div>
                <div className='flex flex-col px-3 py-5 pr-2 md:gap-3 h-1/2 md:w-2/3 text-dark-brown font-mori'>
                    <h3 className='text-lg md:text-[calc(16.206px+.46vw)] md:tracking-[-0.1em]  '> Besoin de conseils ?</h3>
                    <p className='text-xs md:text-[max(12px,calc(10.791px+.31vw))] font-[400]  leading-[1.3em] tracking-tighter text-kaki'>Nous sommes la pour vous accompagner , Prenez Contact afin que nous puissions évaluer, ensemble, vos besoins. </p>
                    <div className='w-2/5 mt-2 '>
                        <ButtonLink title={"Contact"} href="/contact" dark={true} />
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Actualites