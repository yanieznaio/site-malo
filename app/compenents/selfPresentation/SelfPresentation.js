import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ParallaxImages from './ParallaxImages'
import DrawParalax from './DrawParalax'

const SelfPresentation = () => {
    return (
        <div className='py-10  md:py-40 bg-light-brown'>
            <ParallaxImages />


            <div className='relative flex flex-col px-8 md:px-[15vw] '>




                <div className='flex flex-col-reverse font-mori -mt-60 md:justify-between md:mt-10 md:flex-row'>
                    <p className=' -mt-10 md:mt-0 leading-tight -tracking-wide text-dark-brown  text-[max(18px,calc(16.206px+.46vw))] max-w-[80%] md:w-[51.25%] '>

                        Consciente de la diversité des acteurs de la construction et de leurs préoccupations, une offre totalement adaptée à vos besoins et vos contraintes est étudiée et vous est proposée, afin que nous puissions, ensemble, concevoir et concrétiser un projet, à l’image de vos attentes
                    </p>
                    <DrawParalax />

                </div>
                <div className='mt-10 '>
                    <Link href='/contact' className='w-40 px-10 py-4 font-bold text-center text-white bg-black rounded-full'>Me contacter</Link>
                </div>

            </div>
        </div>

    )
}

export default SelfPresentation