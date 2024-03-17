"use client"
import React, { useState } from 'react'
import Logo from '../Logo'
import Image from 'next/image';
import SelectBar from './SelectBar';

const Clients = () => {
    const [currImg, setCurrImg] = useState('/business.png');

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-6 text-black bg-light-beige padding-container'>
            <div className='flex flex-col items-center font-playfair'>
                <Logo />
                <h1 className='text-2xl font-bold'>Mes services pour</h1>
            </div>
            <div className='relative h-[250px] w-[250px]'>
                <Image src={currImg} fill={true} />
            </div>
            <SelectBar currImg={currImg} setCurrImg={setCurrImg} />

        </div>
    )
}

export default Clients