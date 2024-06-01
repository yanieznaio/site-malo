"use client"

import React from 'react'
import IconLinks from './IconLinks'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import StyledLi from './StyledLi';
import { motion } from "framer-motion"
const Footer = () => {
    return (
        <footer className='relative bottom-0 flex flex-col pt-40 pb-8 md:pb-[8vh] bg-dark-brown text-light-brown  '>
            <div className='flex flex-col-reverse border-b md:flex-row border-light-brown'>
                <ul className='md:w-4/5 text-4xl md:text-[4vw]  font-playfair  flex flex-col '>
                    <motion.div viewport={{ once: true }} whileInView={{ width: '100%' }} initial={{ width: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='h-px bg-light-brown'></motion.div>

                    <li className='py-2 pl-4  md:py-[3vw]  flex items-center '>  <StyledLi href="/" content={"Accueil"} /></li>

                    <li><motion.div viewport={{ once: true }} whileInView={{ width: '100%' }} initial={{ width: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='h-px bg-light-brown'></motion.div></li>
                    <li className='py-2 pl-4  md:py-[3vw]  flex items-center'>  <StyledLi href="/expertises" content={"Expertises"} /></li>
                    <li><motion.div viewport={{ once: true }} whileInView={{ width: '100%' }} initial={{ width: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='h-px bg-light-brown'></motion.div></li>
                    <li className='py-2 pl-4 md:py-[3vw]   flex items-center'>  <StyledLi href="/actualites" content={"Actualités"} /></li>
                    <li><motion.div viewport={{ once: true }} whileInView={{ width: '100%' }} initial={{ width: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='h-px bg-light-brown'></motion.div></li>
                    <li className='py-2 pl-4  md:py-[3vw]  flex items-center'><StyledLi href="/contact" content={"Contact"} /></li>


                </ul>

                <div className="relative flex flex-col justify-between border-top-0 md:w-1/5 ">
                    <motion.div viewport={{ once: true }} whileInView={{ height: '100%' }} initial={{ height: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='absolute hidden w-px md:block bg-light-brown'></motion.div>
                    <motion.div viewport={{ once: true }} whileInView={{ width: '100%' }} initial={{ width: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='hidden h-px md:block bg-light-brown'></motion.div>
                    <ul className='flex p-[1vw] md:p-0 ml-[3vw] md:ml-0 gap-4 md:justify-center md:items-center md:flex-col  md:h-3/4'>
                        <li className=''><IconLinks link="#" content={<FaLinkedinIn />} /></li>
                        <li className=''><IconLinks link="#" content={<FaFacebook />} /></li>
                        <li className=''><IconLinks link="#" content={<FaInstagram />} /></li>

                    </ul>
                    <motion.div viewport={{ once: true }} whileInView={{ width: '100%' }} initial={{ width: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='hidden h-px md:block bg-light-brown'></motion.div>
                    <ul className='flex gap-2 md:gap-0 text-xs p-[3vw] md:p-0 md:text-center md:flex-col'>

                        <li className=' md:p-[1vw]'><p className='transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:text-white'>confifentialite</p></li>
                        <motion.div viewport={{ once: true }} whileInView={{ width: '100%' }} initial={{ width: 0 }} transition={{ type: 'ease', duration: 0.3 }} className='hidden h-px md:block bg-light-brown'></motion.div>
                        <li className=' md:p-[1vw] '><p className='transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:text-white'>termes et conditions</p></li>
                    </ul>
                </div>

                <div>

                </div>
            </div>
            <motion.h1 viewport={{ once: true }} initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ type: 'tween' }} className=' text-[8.2vw] mt-10 font-bold m-auto  bg-dark-brown'>COTÉ ENVIRONNEMENT</motion.h1>

        </footer>
    )
}

export default Footer

