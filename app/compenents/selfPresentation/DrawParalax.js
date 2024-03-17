"use client"
import React from 'react'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'

import { useRef } from 'react'
import { motion } from 'framer-motion'
const DrawParalax = () => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [1, -70]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1.5, 1])
    return (
        <div ref={container} className='relative h-[10vh] '>


            <div className=''>

                <motion.div style={{ y: sm }} className=' relative w-[200px] h-[130px] md:w-[400px] md:h-[200px] ml-auto'>

                    <Image src="/draw.png" fill={true} alt='presentation' />
                </motion.div>

            </div>

        </div >
    )
}

export default DrawParalax