"use client"
import React, { useState } from 'react'
import Logo from '../Logo'

import { AnimatePresence, motion } from "framer-motion";
import CardBlog from './CardBlog'
import Carousel from './Carousel'
import LittleContactbox from './LittleContactbox'

const Actualites = () => {
    const [showModal, setShowModal] = useState(false);
    const [over, setOver] = useState(false);
    return (
        <div className='flex flex-col items-center min-h-screen gap-8 px-6 py-20 overflow-hidden bg-greybeige md:py-40 '>
            <div className='flex gap-2'>
                <Logo />
                <h1 className='text-xl font-semibold text-dark-brown font-lato'>COTES ENVIRONNEMENTS</h1>
            </div>

            <div className='font-semibold text-center md:w-2/4 font-lato text-dark-brown'>
                <h2 className=''>
                    Que vous soyez Particulier, Promoteur Immobilier, Architecte, Bureau d’Etudes ou Entreprise, je propose différents types d’ expertises adaptées à vos besoins
                </h2>

            </div>
            <div className='flex flex-col w-full gap-6 md:gap-4  mt-10 text-white md:flex-row md:px-[10vw]'>
                <CardBlog title="Actualités" description="RE2020, ce qu'il faut savoir." img="/woodHome.jpg" showModal={showModal} setShowModal={setShowModal} />
                <CardBlog title="Actualités" description="" img="/wood.png" showModal={showModal} setShowModal={setShowModal} />
                {
                    showModal && (
                        <Carousel setShowModal={setShowModal} />
                    )
                }
            </div>

            <LittleContactbox />





        </div >
    )
}

export default Actualites