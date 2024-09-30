"use client"
import Image from 'next/image'
import React from 'react'
import HeroBox from './HeroBox'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='flex items-center justify-center w-full md:h-screen h-[600px] bg-dark-brown'>


            <div className='relative w-full mt-auto md:ml-auto h-1/2 md:w-1/2 md:h-full brightness-75 md:brightness-100'>
                <Image fill={true} sizes='auto' src='/hero/hero.webp' quality={100} priority className='' alt='Photo de maison' style={{ objectFit: "cover", objectPosition: "left" }} />

            </div>

            <HeroBox />



        </motion.div>
    )
}

export default Hero