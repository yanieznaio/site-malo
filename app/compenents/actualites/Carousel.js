"use client"
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from "framer-motion";


const imgs = [
    "/woodHome.jpg",
    "/wood.png",
    "/house.png",
    "/prestation1.jpg",
    "/prestation2.jpg",
    "/prestation3.jpg",


];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};


const Carousel = ({ setShowModal }) => {
    const [imgIndex, setImgIndex] = useState(0);


    const dragX = useMotionValue(0);


    useEffect(() => {

        const intervalRef = setInterval(() => {

            const x = dragX.get();


            if (x === 0) {

                setImgIndex((pv) => {

                    if (pv === imgs.length - 1) {

                        return 0;

                    }

                    return pv + 1;

                });

            }

        }, AUTO_DELAY, dragX);


        return () => clearInterval(intervalRef);

    }, []);


    const onDragEnd = () => {

        const x = dragX.get();


        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {

            setImgIndex((pv) => pv + 1);

        } else if (x >= DRAG_BUFFER && imgIndex > 0) {

            setImgIndex((pv) => pv - 1);

        }

    };


    return (
        <>
            <div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
                <button onClick={() => setShowModal(false)} type="button" class="mt-2 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>

                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative w-screen px-4 py-8 overflow-hidden md:px-40 md:h-auto ">

                    <motion.div

                        drag="x"
                        dragConstraints={{
                            left: 0,
                            right: 0,

                        }}

                        style={{

                            x: dragX,

                        }}

                        animate={{

                            translateX: `-${imgIndex * 100}%`,

                        }}

                        transition={SPRING_OPTIONS}

                        onDragEnd={onDragEnd}

                        className="flex items-center cursor-grab active:cursor-grabbing"

                    >

                        <Images imgIndex={imgIndex} />

                    </motion.div>


                    <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />

                    <GradientEdges />

                </div>

            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-95"></div>
        </>
    )
}

export default Carousel


const Images = ({ imgIndex }) => {

    return (

        <>

            {imgs.map((imgSrc, idx) => {

                return (

                    <motion.div

                        key={idx}
                        style={{

                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}

                        animate={{

                            scale: imgIndex === idx ? 0.95 : 0.85,

                        }}

                        transition={SPRING_OPTIONS}

                        className="object-cover w-full h-[70vh] md:h-full aspect-video shrink-0 rounded-xl bg-neutral-800"

                    />

                );

            })}

        </>

    );

};

const Dots = ({ imgIndex, setImgIndex }) => {

    return (

        <div className="flex justify-center w-full gap-2 mt-4">

            {imgs.map((_, idx) => {

                return (

                    <button

                        key={idx}

                        onClick={() => setImgIndex(idx)}

                        className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"

                            }`}

                    />

                );

            })}

        </div>

    );

};


const GradientEdges = () => {

    return (

        <>

            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />

        </>

    );

};

