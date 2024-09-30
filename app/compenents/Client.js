"use client"
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Client = () => {
    const container = useRef(null);

    // State to store the screen size
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
    });

    // Function to update screen size
    const updateScreenSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    // useEffect to capture screen size on mount and resize
    useEffect(() => {
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['center end', 'center center'],
    });

    const getXOffset = (baseValue) => {
        return screenSize.width > 768 ? baseValue : baseValue / 2.4;
    };

    const getYOffset = (baseValue) => {
        return screenSize.height > 768 ? baseValue : baseValue / 2.4;
    };

    // Smoothing the animations using useSpring
    const springConfig = { stiffness: 50, damping: 20 };

    const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, screenSize.width > 768 ? 0.5 : 0.4]), springConfig);

    // Dynamically adjust x and y based on screen size and smooth with spring
    const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getXOffset(450)]), springConfig);
    const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getXOffset(-450)]), springConfig);
    const x3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getXOffset(-300)]), springConfig);
    const x4 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getXOffset(300)]), springConfig);

    const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getYOffset(150)]), springConfig);
    const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getYOffset(-150)]), springConfig);
    const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getYOffset(200)]), springConfig);
    const y4 = useSpring(useTransform(scrollYProgress, [0, 1], [0, getYOffset(-200)]), springConfig);

    const arrx = [x1, x2, x3, x4];
    const arry = [y1, y2, y3, y4];

    const textopacity = useSpring(useTransform(scrollYProgress, [0.7, 1], [0, 1]), springConfig);
    const textScale = useSpring(useTransform(scrollYProgress, [0.7, 1], [0.7, 1]), springConfig);

    const titleOpacity = useSpring(
        useTransform(scrollYProgress, [0.7, 1], [0, 1]),
        springConfig
    );

    const images = [
        { img: "/clients/batiment-collectif.webp", title: "Batiment collectif", style: { bottom: 0, right: "-10px", opacity: titleOpacity } },
        { img: "/clients/maison-individuelle.webp", title: "Maison individuelle", style: { bottom: 0, left: 0, opacity: titleOpacity } },
        { img: "/clients/bureau.webp", title: "Bureau", style: { top: 0, left: 0, opacity: titleOpacity } },
        { img: "/clients/appartement.webp", title: "Appartement", style: { top: 0, left: 0, opacity: titleOpacity } }
    ];

    return (
        <div ref={container} className='bg-white w-full flex justify-center items-center md:h-[200dvh] h-[1200px] relative'>
            <div className='overflow-hidden sticky top-0 bg-white h-screen w-full flex justify-center items-center -mt-[500px]'>
                <div className='w-full h-full top-0 absolute flex items-center justify-center'>
                    {images.map((img, i) => (
                        <motion.div
                            style={{ scale: scale, x: i <= 3 ? arrx[i] : arrx[1], y: i <= 3 ? arry[i] : arry[1] }}
                            className="w-full h-full top-0 absolute flex items-center justify-center"
                            key={i}
                        >
                            <div className='relative w-[290px] h-[290px] lg:w-[25vw] lg:h-[25vw] overflow-hidden'>
                                <motion.div
                                    transition={{ ease: [0.33, 1, 0.68, 1] }}
                                    className='font-semibold py-2 md:py-8 px-10 md:px-14 rounded-3xl text-center text-3xl md:text-3xl font-sans absolute z-20 bg-neutral-100 border-black text-black'
                                    style={img.style}
                                >
                                    {img.title}
                                </motion.div>
                                <Image src={img.img} alt='image' fill className='rounded-[50px] object-cover shadow-sm' />
                            </div>
                        </motion.div>
                    ))}
                    <motion.div style={{ opacity: textopacity, scale: textScale }} className='max-w-sm text-center z-100 relative'>
                        <h2 className='text-6xl font-extrabold font-sans tracking-tight leading-none'>
                            Nous réalisons vos <strong className='italic'>études</strong>
                        </h2>
                        <p className='mt-4 mb-10 text-gray-500 font-semibold'>
                            Situé à <strong>Lyon</strong> et <strong>Avignon</strong>.
                        </p>
                        <Link href="/contact" className='cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-900 text-white px-10 rounded-full py-4'>
                            Nous contacter
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Client;
