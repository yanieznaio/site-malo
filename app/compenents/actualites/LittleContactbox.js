import React from 'react'
import Image from 'next/image'
import ButtonLink from '../button/ButtonLink'
const LittleContactbox = ({ title, button }) => {
    return (
        <div className='mt-40 flex flex-col  md:flex-row  md:h-auto p-3 md:p-4  h-auto rounded-3xl bg-lightgrey gap-4  md:w-[calc(165.067px+29.47vw)]'>
            <div className='relative h-[max(62px,calc(62px+22.24vw));] md:w-1/3 md:h-auto'>
                <Image src="/contact.jpg" alt='bois' fill={true} className='object-cover rounded-xl' sizes='auto' />
            </div>
            <div className='flex flex-col px-3 py-5 pr-2 md:gap-3 h-1/2 md:w-2/3 text-dark-brown font-mori'>
                <h3 className='text-lg md:text-[calc(16.206px+.46vw)] md:tracking-[-0.05em]  '> {title ? title : "Besoin de conseils ?"}</h3>
                <p className='text-xs md:text-[max(12px,calc(10.791px+.31vw))] font-[400]  leading-[1.3em] tracking-tighter text-kaki'>Nous sommes la pour vous accompagner , Prenez Contact afin que nous puissions évaluer, ensemble, vos besoins. </p>
                <div className='w-2/5 mt-2 '>
                    <ButtonLink title={button ? button : "contact"} href="/contact" dark={true} />
                </div>

            </div>


        </div>
    )
}

export default LittleContactbox