"use client"

import { prestations } from '../../data'
import React from 'react'
import Card from './Card'


const Slider = () => {



    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen gap-20 bg-dark-brown text-light-brown padding-container'>
            <h2 className='text-center text-[56px] mt-20'>Mes expertises</h2>
            <div className=''>
                <div className='relative flex flex-col items-center h-full gap-6 md:flex-row'>
                    {
                        prestations && prestations.map((prestation, i) => (
                            <Card key={i} prestation={prestation} />
                        ))

                    }
                </div>

            </div>



        </div>
    )
}

export default Slider