"use client"
import React, { useState } from 'react'

import ButtonLink from '../button/ButtonLink'
import { AnimatePresence, animate, motion } from "framer-motion";

const variants = {
    animate: {
        width: "var(--width-to)",

    },
    initial: {
        width: "var(--width-from, 100%)"
    }
}
const CardBlog = ({ title, description, id, img, showModal, setShowModal }) => {
    const [over, setOver] = useState(false);

    return (
        <motion.div style={{ backgroundImage: `url(${img})` }} onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} variants={variants} whileHover="animate" initial="initial" transition={{ duration: 1, type: 'ease' }} className={`cursor-pointer relative  h-[40vh] md:h-[500px]   bg-cover bg-center w-full md:w-1/2
        [--width-from:100%] md:[--width-from:50%]
        [--width-to:100%] md:[--width-to:100%]
        `}>
            {over &&

                <>
                    <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='absolute z-10 w-1/2 md:text-xl top-6 left-6 md:w-full text-md '>{description}</motion.p>

                    <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='absolute text-xl font-semibold bottom-12 left-6 font-lato'> {title}</motion.p>

                    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -5 }} className='absolute right-6 bottom-12'>
                        <button onClick={() => setShowModal(true)} className='px-4 py-2 text-black bg-white rounded-full '>Voir plus</button>
                    </motion.div>
                </>

            }

        </motion.div>
    )
}

export default CardBlog