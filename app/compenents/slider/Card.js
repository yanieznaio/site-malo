"use client"
import Image from 'next/image'
import { useState } from 'react'
import { motion, useScroll } from "framer-motion"
import Link from 'next/link';


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
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const Card = ({ prestation }) => {
    const [over, setOver] = useState(false);

    return (
        <motion.div
            // Start the animation with the card 200px down, and animate it to 0px on scroll
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], // Adjusted cubic-bezier for smoother animation
            }}
           
          // Trigger the animation when 30% of the card is visible
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            className="md:h-[55vh] h-[320px] relative flex flex-col gap-4 p-4 pb-8 md:pb-10 cursor-pointer bg-light-brown shadow-lg rounded-lg "
        >
            {/* Expertise Text */}
            <motion.div
                variants={variantsText}
                animate={over ? 'animate' : 'initial'}
                className="absolute hidden md:block left-0 w-fit right-0 z-10 px-6 py-2 mx-auto text-white text-sm md:text-base bg-opacity-60 border border-white rounded-full border-opacity-50 top-4 md:top-6 font-semibold tracking-wide"
            >
                EXPERTISE
            </motion.div>

            {/* Image Section */}
            <div className="w-full h-3/4 overflow-hidden">
                <div
                    className="relative h-full lg:hover:scale-110 ease-[cubic-bezier(0.25,0.1,0.25,1)]  w-full transition-all duration-[2s] brightness-90 lg:brightness-50 lg:hover:brightness-100 overflow-hidden rounded-lg"
                >
                    {/* Image wrapper */}
                    <div className="relative w-full h-full">
                        <Image
                            src={prestation.img}
                            alt={prestation.title}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 640px) 100vw, 
                                   (max-width: 768px) 50vw, 
                                   (max-width: 1024px) 33vw, 
                                   25vw"
                        />
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="text-dark-brown">
                {/* Prestation Title */}
                <p className="text-lg md:text-2xl font-semibold leading-tight hover:text-primary transition-colors duration-300">
                    {prestation.title}
                </p>

                {/* Voir Plus Link */}
                <div className="mt-2">
                    <Link href="/expertises">
                        <span className="group text-xs md:text-sm text-gray-700 flex items-center space-x-2 transition-colors hover:text-primary">
                            <span>Voir plus</span>
                            <span className="inline-block transform transition-transform group-hover:translate-x-1">
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
