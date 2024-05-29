"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../Logo'
import LogoAnimate from '../LogoAnimate'


const variants = {
    enter: {
        opacity: 0,
        x: -1000,



    },

    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: {

        zIndex: 0,
        x: 1000,
        opacity: 0,



    }
};
const Clients = () => {

    const [isActive, setActive] = useState({ isActive: false, i: 0 })
    const img = ["/3d-rendering-isometric-house-model-removebg-preview.png", "/46f9eb42-9260-49d1-a977-4b6d991cfad1-removebg-preview.png", "/3d-rendering-isometric-house-model-removebg-preview.png"]
    return (
        <div className='flex items-center justify-center min-h-screen bg-white '>

            <div className='flex flex-col items-center justify-center max-w-xl '>
                <Logo />
                <h1 className=' text-[36px] font-semibold font-serif'>Mes services pour</h1>
                <div className='relative flex items-center justify-center w-full h-[40vh]  overflow-hidden '>
                    <AnimatePresence
                    >

                        <motion.img
                            key={img[isActive.i]}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }

                            }}
                            src={img[isActive.i]}
                            fill={true}
                            alt='image'
                            className='absolute h-[30vh]' />

                    </AnimatePresence>

                </div>

                <div className='flex px-4 py-2 text-xs bg-black rounded-full md:gap-4 bg-opacity-45 md:text-sm'>
                    <ul className='flex md:gap-4'>
                        <li className={`${isActive.i == 0 ? "bg-[#ffff] text-black" : "bg-none text-[#ffff]"} cursor-pointer py-2 px-4 rounded-xl`} onClick={() => setActive({ isActive: true, i: 0 })} ><span>Maison Individuelle</span></li>
                        <li className={`${isActive.i == 1 ? "bg-[#ffff] text-black" : "bg-none text-[#ffff]"} cursor-pointer py-2 px-4 rounded-xl`} onClick={() => setActive({ isActive: true, i: 1 })}><span>Batiments collectif</span></li>
                        <li className={`${isActive.i == 2 ? "bg-[#ffff] text-black" : "bg-none text-[#ffff]"} cursor-pointer py-2 px-4 rounded-xl`} onClick={() => setActive({ isActive: true, i: 2 })} ><span>Bureaux</span></li>
                    </ul>
                    <Link href="" className='hidden px-4 py-2 text-white bg-black rounded-full md:block'>Contact</Link>
                </div>
            </div>


        </div>
    )
}

export default Clients