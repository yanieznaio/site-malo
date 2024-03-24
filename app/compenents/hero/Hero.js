import Image from 'next/image'
import React from 'react'
import HeroBox from './HeroBox'
import ButtonLink from '../button/ButtonLink'

const Hero = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen display bg-light-brown'>

            <div className='relative w-full mt-auto md:ml-auto h-1/2 md:w-1/2 md:h-full brightness-75'>
                <Image fill={true} src='/house1.png' quality={100} className='' alt='Photo de maison' style={{ objectFit: "cover", objectPosition: "left" }} />

            </div>
            <HeroBox />

        </div>
    )
}

export default Hero