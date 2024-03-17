"use client"
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import { prestations } from '@/app/data'


const Scroll = () => {

    return (
        <div className="flex flex-col h-screen bg-dark-brown ">
            <ScrollCore />
        </div>
    );
};
const ScrollCore = () => {

    return (
        <div className="h-[110vh] transform scale-[0.8] p-10 flex items-center justify-center relative ">
            <div
                className="relative w-full py-40"
                style={{
                    perspective: '1000px',
                }}
            >
                <Header />
                <Card />
            </div>
        </div>
    );
};

const Header = ({ translate }) => {
    return (
        <motion.div

            className="max-w-5xl mx-auto text-center div text-light-brown"
        >
            <h1 className="mt-1 text-5xl leading-none font-ogg lg:text-6xl">

                Mes expertises

            </h1>
        </motion.div>
    );
};

const Card = ({

}) => {
    return (
        <motion.div

            className="max-w-8xl  mx-auto h-[30rem] md:h-[30rem] w-full rounded-[30px] "
        >
            <div className="grid w-full h-full grid-cols-2 gap-4 p-4 rounded-2xl md:grid-cols-4">
                {prestations.map((prestation, idx) => (
                    <motion.div
                        key={`prestation-${idx}`}
                        className="relative p-2 rounded-md cursor-pointer bg-light-brown text-dark-brown"


                    >
                        <div className="absolute px-2 py-1 text-xs font-bold bg-white top-2 right-2">
                            Expertise
                        </div>
                        <img
                            src={prestation.img}
                            className="text-sm h-2/3"
                        />
                        <div className="p-4 h-1/3">
                            <h1 className="text-sm font-semibold ">{prestation.title}</h1>
                            <h2 className="text-xs ">{prestation.description}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};


export default Scroll