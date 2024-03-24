"use client"
import React from 'react'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { Container } from 'postcss'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import DrawParalax from './DrawParalax'
const ParallaxImages = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [1, -230]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1.5, 1])
    return (
        <div ref={container} className='relative '>
            <div className='sticky top-0 h-screen bg-light-brown'>
                <div className='absolute top-0 flex items-center justify-center w-full h-full'>



                    <motion.div style={{ scale: scale4 }} className='relative w-[85vw] md:w-[70vw] h-[300px] md:h-[80vh]   '>

                        {/*   <Image src="/prestation3.jpg" fill={true} className='object-cover' /> */}


                        <video class="w-full" autoPlay muted loop >
                            <source src="/video.mp4" type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>



                    </motion.div>


                </div>


            </div>

            <div className='absolute top-80 md:top-60 left-[5vw] md:left-20'>
                <motion.div style={{ y: sm }} className='relative  h-[200px] md:h-[60vh] w-[30vw] md:w-[20vw] '>

                    <Image src="/portrait.jpg" fill={true} alt='portrait' className="object-cover" />
                </motion.div>

            </div>




        </div >
    )
}

export default ParallaxImages