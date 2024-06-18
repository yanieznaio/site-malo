"use client"
import React from 'react'
import LittleContactbox from '@/app/compenents/actualites/LittleContactbox'
import { prestations } from '@/app/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Expertise from './Expertise'
const HomeExpertises = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.76, 0, 0.24, 1] }} className="bg-[#EAE7DD]">

            <section className="flex flex-col justify-center items-center h-[600px] md:h-[80vh] relative  text-center px-[2em]   "  >

                <Image src={'/homeia.jpg'} unoptimized={true} fill alt='house' sizes='100vw' className='object-cover object-left md:object-top brightness-75' priority placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==' />


                <motion.h1 animate={{ y: 0 }} initial={{ y: 50 }} transition={{ type: "ease" }} className='text-[2rem] m-0 tracking-[1rem] z-10 text-[#ffff]'>NOS EXPERTISES</motion.h1>
                <motion.h3 animate={{ y: 0 }} initial={{ y: 50 }} transition={{ type: "ease" }} className='text-[1rem tracking-[0.3rem] opacity-[0.8] text-[#ffff]'>Particulier, Promoteur Immobilier, Architecte, Bureau d’Etudes ou Entreprise ? Des  expertises adaptées à vos besoins.</motion.h3>
            </section>
            <Expertise prestations={prestations} />


            <div className='flex items-center justify-center w-full px-6 pb-10'>
                <LittleContactbox />
            </div>



        </motion.div>
    )
}

export default HomeExpertises