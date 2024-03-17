"use client"
import React from 'react'

import { AnimatePresence, motion } from "framer-motion";



const Line = ({ x1, y1, x2, y2, ...rest }) => (
    <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="black"
        strokeWidth="2"
        {...rest}
    />
);
const transition = { duration: 6, yoyo: Infinity, ease: "easeInOut" }
const LogoAnimate = () => {
    return (
        <div>



            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 200 200">
                {/* Carré extérieur */}
                <rect x="0" y="0" width="200" height="200" fill="none" stroke="black" strokeWidth="1" />

                {/* Carré supérieur gauche */}
                <rect x="0" y="0" width="100" height="100" fill="none" stroke="black" strokeWidth="1" />
                {/* Lignes verticales */}
                <motion.path
                    d="M33.33,0 V100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M66.66,0 V100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M100,0 V100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                {/* Lignes supplémentaires */}
                <motion.path
                    d="M16.66,0 V100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M50,0 V100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M83.33,0 V100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Carré supérieur droit */}
                <rect x="100" y="0" width="100" height="100" fill="none" stroke="black" strokeWidth="1" />
                {/* Lignes horizontales */}
                <motion.path
                    d="M100,20 H200"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    d="M100,40 H200"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    d="M100,60 H200"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    d="M100,80 H200"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    d="M100,100 H200"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />


                {/* Carré inférieur gauche */}
                <rect x="0" y="100" width="100" height="100" fill="none" stroke="black" strokeWidth="1" />
                {/* Lignes horizontales */}
                <motion.path
                    d="M0,133.33 H100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    d="M0,166.66 H100"
                    stroke="black" strokeWidth="1"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    d="M0,200 H100"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                {/* Lignes supplémentaires */}
                <motion.path
                    d="M0,150 H100"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    d="M0,183.33 H100"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.2 }}
                />

                {/* Carré inférieur droit */}
                <rect x="100" y="100" width="100" height="100" fill="none" stroke="black" strokeWidth="1" />
                {/* Lignes verticales */}
                <motion.path
                    d="M113.33,100 V200"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M133.33,100 V200"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M166.66,100 V200"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Lignes supplémentaires */}
                <motion.path
                    d="M150,100 V200"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M183.33,100 V200"
                    stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                />

            </svg>

        </div>
    )
}

export default LogoAnimate