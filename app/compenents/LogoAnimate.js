"use client"
import React, { useEffect } from 'react'

import { AnimatePresence, motion } from "framer-motion";




const LogoAnimate = ({ open }) => {

    const arr = ['14.28', '14.28', '28.56', '42.83', '57.12', '71.39', '85.67'];


    return (
        <div className='z-50'>



            <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.76, 0, 0.24, 1] }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                {/* Carré extérieur */}
                <rect x="0" y="0" width="200" height="200" fill="none" stroke={open ? "#EAE7DD" : "black"} strokeWidth="10" className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]' />

                {/* Carré supérieur gauche */}
                <rect x="0" y="0" width="100" height="100" fill="none" stroke={open ? "#EAE7DD" : "black"} strokeWidth="7" className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]' />
                {/* Lignes verticales */}
                {
                    arr.map((x, i) => (
                        <motion.path
                            key={i}
                            d={`M${x},0 V100`}
                            stroke={open ? "#EAE7DD" : "black"} strokeWidth="7"
                            className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]'
                            initial={{ pathLength: 0, pathOffset: 1 }}
                            animate={{ pathLength: 1, pathOffset: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    ))
                }



                {/* Carré supérieur droit */}
                <rect x="100" y="0" width="100" height="100" fill="none" stroke={open ? "#EAE7DD" : "black"} strokeWidth="7" className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]' />
                {/* Lignes horizontales */}
                {
                    arr.map((x, i) => (
                        <motion.path
                            key={i}
                            d={`M100,${x} H200`}
                            stroke={open ? "#EAE7DD" : "black"} strokeWidth="7"
                            className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]'
                            initial={{ pathLength: 0, pathOffset: 1 }}
                            animate={{ pathLength: 1, pathOffset: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    ))
                }
                {/* Carré inférieur gauche */}
                <rect x="0" y="100" width="100" height="100" fill="none" stroke={open ? "#EAE7DD" : "black"} strokeWidth="7" className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]' />
                {/* Lignes horizontales */}
                {
                    arr.map((x, i) => (
                        <motion.path
                            key={i}
                            d={`M0,1${x} H100`}
                            stroke={open ? "#EAE7DD" : "black"} strokeWidth="7"
                            className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]'
                            initial={{ pathLength: 0, pathOffset: 1 }}
                            animate={{ pathLength: 1, pathOffset: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    ))
                }

                {/* Carré inférieur droit */}
                <rect x="100" y="100" width="100" height="100" fill="none" stroke={open ? "#EAE7DD" : "black"} strokeWidth="7" className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]' />
                {/* Lignes verticales */}
                {
                    arr.map((x, i) => (
                        <motion.path
                            key={i}

                            d={`M1${x},100 V200`}
                            stroke={open ? "#EAE7DD" : "black"} strokeWidth="7"
                            className='transition-[stroke] duration-[0.8s] ease-[0.76,0,0.24,1]'
                            initial={{ pathLength: 0, pathOffset: 1 }}
                            animate={{ pathLength: 1, pathOffset: 0 }}
                            transition={{ duration: 0.5 }}
                        />

                    ))
                }



            </motion.svg>

        </div>
    )
}

export default LogoAnimate