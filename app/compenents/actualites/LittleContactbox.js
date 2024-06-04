import React from 'react'
import Image from 'next/image'
import ButtonLink from '../button/ButtonLink'
const LittleContactbox = ({ title, button }) => {
    return (
        <div className='flex flex-col h-auto max-w-xl gap-4 p-2 mt-40 md:flex-row md:h-auto md:p-4 rounded-3xl bg-lightgrey'>
            <div className='relative md:w-1/3 md:h-auto'>
                <Image src="/contact.jpg" alt='bois' fill={true} className='object-cover rounded-xl' sizes='auto' />
            </div>
            <div className='flex flex-col px-4 py-6 pr-2 h-1/2 md:w-2/3 text-dark-brown '>
                <h3 className='text-lg md:text-2xl '> {title ? title : "Vous avez besoin de conseils ?"}</h3>
                <p className='text-sm text-kaki'>Nous sommes la pour vous accompagner , Prenez Contact afin que nous puissions évaluer, ensemble, vos besoins. </p>
                <div className='w-2/5 mt-6 '>
                    <ButtonLink title={button ? button : "contact"} href="/contact" dark={true} />
                </div>

            </div>


        </div>
    )
}

export default LittleContactbox