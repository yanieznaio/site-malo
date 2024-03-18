"use client"
import React, { useState } from 'react'

import ButtonLink from '../button/ButtonLink'
import { AnimatePresence, animate, motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

const variantsCard = {
    animate: {
        width: "var(--width-to)",

    },
    initial: {
        width: "var(--width-from, 100%)"
    }
}
const variantsText = {
    animate: {
        opacity: "var(--width-to)",

    },
    initial: {
        opacity: "var(--width-from, 100%)"
    }
}
const CardBlog = ({ title, description, id, img, showModal, setShowModal }) => {
    const [over, setOver] = useState(false);

    return (

        <motion.div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} variants={variantsCard} whileHover="animate" initial="initial" transition={{ duration: 1, type: 'ease' }} className={`cursor-pointer relative  h-[45vh] md:h-[500px]   w-full md:w-1/2
        [--width-from:100%] md:[--width-from:50%]
        [--width-to:100%] md:[--width-to:100%]
        `}>
            <div style={{ backgroundImage: `url(${img})` }} className='w-full h-full bg-center bg-cover brightness-75 '>

            </div>
            {over &&

                <div className='hidden md:block'>
                    <motion.p variants={variantsText} initial="initial" animate="animate" className={`absolute  w-1/2 md:text-xl top-2 md:top-6 left-2 md:left-6 md:w-full text-md  [--opacity-from:100%] md:[--opacity-from:50%][--opacity-to:100%] md:[--opacity-to:100%]`}>{description}</motion.p>

                    <motion.p variants={variantsText} initial="initial" animate="animate" className='absolute text-xl font-semibold bottom-12 left-6 font-lato  [--opaciy-from:100%] md:[--opacity-from:50%][--opacity-to:100%] md:[--opacity-to:100%]'> {title}</motion.p>

                    <motion.div variants={variantsText} initial="initial" animate="animate" className='absolute right-6 bottom-12  [--opacity-from:100%] md:[--opacity-from:50%][--opacity-to:100%] md:[--opacity-to:100%]'>
                        <button onClick={() => setShowModal(true)} className='flex items-center justify-center gap-2 px-4 py-2 text-sm text-black bg-white rounded-full font-playfair '><MdArrowForward className='font-thin opacity-75' />Voir plus</button>
                    </motion.div>
                </div>


            }
            <div className='block md:hidden'>
                <motion.p variants={variantsText} initial="initial" animate="animate" className={`absolute w-1/2 md:text-xl  top-6 left-6 md:w-full text-md  [--opacity-from:100%] md:[--opacity-from:50%][--opacity-to:100%] md:[--opacity-to:100%]`}>{description}</motion.p>

                <motion.p variants={variantsText} initial="initial" animate="animate" className='absolute text-xl font-semibold bottom-4 md:bottom-12 left-2 md:left-6 font-lato  [--opaciy-from:100%] md:[--opacity-from:50%][--opacity-to:100%] md:[--opacity-to:100%]'> {title}</motion.p>
                {
                    over &&
                    <motion.div variants={variantsText} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'tween' }} className='absolute right-6  bottom-4 md:bottom-12  [--opacity-from:100%] md:[--opacity-from:50%][--opacity-to:100%] md:[--opacity-to:100%]'>
                        <button onClick={() => setShowModal(true)} className='flex items-center justify-center gap-2 px-4 py-2 text-sm text-black bg-white rounded-full font-playfair '><MdArrowForward className='font-thin opacity-75' />Voir plus</button>
                    </motion.div>
                }

            </div>


        </motion.div >
    )
}

export default CardBlog