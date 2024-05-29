"use client"
import Image from 'next/image'
import React from 'react'
import HeroBox from './HeroBox'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='flex items-center justify-center w-full h-screen bg-dark-brown'>
            {/*         <div className='relative flex-col items-end  hidden md:flex pl-[10%] w-1/2 '>

                <h1 className="max-w-xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-5xl dark:text-white">Étude  thermique <span className="font-normal">au service</span> de vos besoin</h1>
                <p className="max-w-xl text-lg font-normal text-white text-opacity-55 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

            </div> */}

            <div className='relative w-full mt-auto md:ml-auto h-1/2 md:w-1/2 md:h-full brightness-75 md:brightness-100'>
                <Image fill={true} sizes='auto' src='/house1.png' quality={100} className='' alt='Photo de maison' style={{ objectFit: "cover", objectPosition: "left" }} />

            </div>

            <HeroBox />



        </motion.div>
    )
}

export default Hero