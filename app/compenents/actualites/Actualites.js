/* "use client"
import React, { useState } from 'react'
import CardBlog from './CardBlog'
import LittleContactbox from './LittleContactbox'

const Actualites = () => {
    const [showModal, setShowModal] = useState(false);
    const [over, setOver] = useState(false);
    return (
        <div className='flex flex-col items-center min-h-screen gap-8 px-6 py-20 overflow-hidden bg-greybeige md:py-40 '>


            <div className='font-semibold text-center md:w-2/4 font-lato text-dark-brown'>
                <h2 className='font-semibold'>
                    Actualités
                </h2>

            </div>
            <div className='flex flex-col w-full gap-6 md:gap-4  mt-10 text-white md:flex-row md:px-[10vw]'>
                <CardBlog title="Actualités" description="RE2020, ce qu'il faut savoir." img="/woodHome.jpg" showModal={showModal} setShowModal={setShowModal} />
                <CardBlog title="Actualités" description="" img="/wood.png" showModal={showModal} setShowModal={setShowModal} />

            </div>

            <LittleContactbox />





        </div >
    )
}

export default Actualites */