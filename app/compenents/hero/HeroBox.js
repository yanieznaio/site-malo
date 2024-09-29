"use client"
import React from 'react'
import { motion } from 'framer-motion'

const HeroBox = () => {
    return (
        <motion.div className=' absolute flex flex-col md:w-[30vw] max-w-[483px] min-w-[350px]  max-h-[500px] md:max-h-[650px] gap-8  p-4 backdrop-filter bg-light-brown backdrop-blur-xl bg-opacity-10  md:bg-opacity-25 h-[500px] md:h-[85vh] mt-12 '>
            <div className="bg-[url('/house1.png')] bg-center bg-cover bg-no-repeat   h-[70%] md:h-2/3 w-full flex justify-center items-end py-6">


            </div >
            <div className='text-center text-white'>

                <h2 className='text-2xl md:text-[2vw] font-playfair md:leading-[2vw]' >Coté Environnement</h2>
                <p className='w-4/5 m-auto text-xs md:text-lg opacity-80 font-mori md:leading-[19px] mt-2'>Votre guide vers une construction Bas carbone</p>

            </div>
            <hr className="h-px my-2 mt-auto bg-gray-200 border-0 opacity-40"></hr>
        </motion.div >
    )
}

export default HeroBox