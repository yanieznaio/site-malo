"use client"
import Image from 'next/image'
import { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';

const variantsImg = {
    initial: {
        scale: 1,
    },
    animate: {
        scale: 1.2,
        transition: {
            duration: 2,
            ease: [0.25, 0.1, 0.25, 1]
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
            ease: [0.25, 0.1, 0.25, 1]
        },
    },
};

const Card = ({ prestation }) => {
    const [over, setOver] = useState(false);

    // Adjust the starting Y position based on the card ID
    const getInitialY = (id) => {
        if (id === 2 || id === 3) {
            return 100; // Middle cards start closer
        }
        return 200; // First and last cards start from further down
    };

    return (
 
            <motion.div
                initial={{ y: getInitialY(prestation.id) }}
                whileInView={{ y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth easing
                }}
                viewport={{ once: true }}
                onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)}
                className={`md:h-[55vh] h-[320px] relative flex flex-col gap-4 p-4 pb-8 md:pb-10 cursor-pointer bg-light-brown shadow-lg rounded-lg transition-transform duration-300 ease-in-out hover:scale-105`}
            >
                {/* Expertise Text */}
                <motion.div
                    variants={variantsText}
                    animate={over ? 'animate' : 'initial'}
                    className='absolute hidden md:block left-0 w-fit right-0 z-10 px-6 py-2 mx-auto text-white text-sm md:text-base bg-opacity-60 border border-white rounded-full border-opacity-50 top-4 md:top-6 font-semibold tracking-wide'
                >
                    EXPERTISE
                </motion.div>

                {/* Image Section */}
                {/* Image Section */}
                <div className='w-full h-3/4 overflow-hidden'>
                <div
             
                className={`relative h-full lg:hover:scale-110 ease-[cubic-bezier(0.25,0.1,0.25,1)]  w-full transition-all duration-[2s] brightness-90 lg:brightness-50 lg:hover:brightness-100 overflow-hidden rounded-lg`}
            >
                {/* Image wrapper is animated but Next.js Image stays static */}
                <div className='relative w-full h-full'>
                    <Image
                        src={prestation.img}
                        alt={prestation.title}
                        fill
                        className='object-cover rounded-lg'
                        sizes="(max-width: 640px) 100vw, 
                               (max-width: 768px) 50vw, 
                               (max-width: 1024px) 33vw, 
                               25vw"
                    />
                </div>
            </div>
                </div>
           

                {/* Text Section */}
                <div className='text-dark-brown'>
                    {/* Prestation Title with Enhanced Styling */}
                    <p className='text-lg md:text-2xl font-semibold leading-tight hover:text-primary transition-colors duration-300'>
                        {prestation.title}
                    </p>

                    {/* Voir Plus with Arrow Link */}
                    <div className='mt-2'>
                        <Link href='/expertises'>
                            <span className='group text-xs md:text-sm text-gray-700 flex items-center space-x-2 transition-colors hover:text-primary'>
                                <span>Voir plus</span>
                                <span className='inline-block transform transition-transform group-hover:translate-x-1'>
                                    &rarr;
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        
    );
};

export default Card;
