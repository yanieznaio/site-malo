"use client"
import Image from 'next/image'
import { React, useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';

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
};

const Card = ({ prestation }) => {
    const [over, setOver] = useState(false);

    // Adjust the starting Y position based on the card ID
    const getInitialY = (id) => {
        // Middle cards (id 2 and 3) should come up first
        if (id === 2 || id === 3) {
            return 100; // Middle cards start closer
        }
        // First and last card start from further down
        return 200;
    };

    return (
        <Link href='/expertises'>
            <motion.div
                initial={{ y: getInitialY(prestation.id) }}
                whileInView={{ y: 0 }}
                transition={{
                    duration: 0.8, // You can adjust this duration to your preference
                    ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth easing
                }}
                viewport={{ once: true }}
                onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)}
                className={`${prestation.white == true ? 'md:h-[60vh]' : 'md:h-[55vh]'} h-[320px] relative flex flex-col gap-2 p-2 md:p-4 pb-10 cursor-pointer bg-light-brown`}
            >
                <motion.div 
                    variants={variantsText} 
                    animate={over ? 'animate' : 'initial'} 
                    className='absolute left-0 right-0 z-10 px-4 py-2 m-auto text-xs text-white border border-white rounded-full w-fit border-opacity-40 top-6 md:top-8 font-playfair'
                >
                    EXPERTISE
                </motion.div>

                <motion.div className={`relative h-3/4 w-full transition-all duration-300 ease-in-out brightness-90 lg:brightness-50 lg:hover:brightness-100 overflow-hidden`}>
                    <motion.img 
                        variants={variantsImg} 
                        animate={over ? 'animate' : 'initial'} 
                        src={prestation.img} 
                        className='object-cover w-full h-full' 
                        alt={prestation.title} 
                    />
                </motion.div>
                
                <div className='text-dark-brown'>
                    <p className='text-[max(16px,calc(14.791px+.31vw))]'>{prestation.title}</p>
                    <p className='mt-4 text-xs font-playfair'>VOIR PLUS</p>
                </div>
            </motion.div>
        </Link>
    );
}

export default Card;
