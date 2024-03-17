"use clients"
import Image from 'next/image'
import { React, useEffect, useRef, useState } from 'react'
import { motion, useScroll } from "framer-motion"




const variantsImg = {
    initial: {
        scale: 1,
    },
    animate: {
        scale: 1.1,
        transition: {
            duration: 2,

        },
    },

};
const variantsText = {
    initial: {
        scale: 1,
        opacity: 1,

    },
    animate: {
        scale: 1.2,
        opacity: 0,
        transition: {
            duration: 0.5,

        },
    },
}
const Card = ({ prestation }) => {
    const [over, setOver] = useState(false);



    return (
        <motion.div
            initial={{ y: prestation.id == 1 || prestation.id == 4 ? 200 : 100 }}
            whileInView={{ y: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            viewport={{ once: true }}
            onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)}
            className={`${prestation.white == true ? 'md:h-[60vh]' : 'md:h-[55vh]'} h-[400px]  relative flex flex-col gap-2 p-2 md:p-4 pb-10 cursor-pointer bg-light-brown`}

        >
            <motion.div variants={variantsText} animate={over ? 'animate' : 'initial'} className='absolute left-0 right-0 z-10 px-4 py-2 m-auto text-xs text-white border border-white rounded-full w-fit border-opacity-40 top-6 md:top-8 font-playfair text'>
                EXPERTISE
            </motion.div>

            <motion.div className={`relative  h-3/4 w-full transition-all duration-300 ease-in-out brightness-50 hover:brightness-100 overflow-hidden`}>

                <motion.img variants={variantsImg} animate={over ? 'animate' : 'initial'} src={prestation.img} className='w-full h-full' alt={prestation.title} />


            </motion.div>
            <div className='text-dark-brown'>
                <p className='text-[max(16px,calc(14.791px+.31vw))]'>{prestation.title}</p>
                <p className='mt-4 text-xs font-playfair'>VOIR PLUS</p>
            </div>


        </motion.div>
    )
}

export default Card