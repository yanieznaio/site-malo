"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Nav from './Nav'
import BoxInfo from './BoxInfo'
import Client from '@/app/compenents/Client'
import { FaCheck } from 'react-icons/fa'
const Expertise = ({ prestations }) => {

    const [isActive, setIsActive] = useState(0)
    return (
        <div className=''>
            <Nav prestations={prestations} setIsActive={setIsActive} isActive={isActive} />

            <div id={prestations[isActive].href}>
                <section className="bg-[#F6F5F2]">
                    <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="w-full px-4 mb-24 lg:mb-0">
                            <div className="max-w-lg mx-auto lg:mr-0">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-700 rounded-full bg-green-50">Expertise</span>
                                <h1 className="flex flex-wrap mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
                                    <span>{prestations[isActive].title.split(' ')[0]}</span>
                                    <span className="px-3 font-serif italic">{prestations[isActive].title.split(' ')[1]}</span>
                                    <span>{prestations[isActive].title.split(' ')[2]}</span>
                                </h1>

                                <p className="mb-6 text-lg font-semibold">{prestations[isActive].description}</p>
                                <p className="text-gray-400">{prestations[isActive].resume}</p>
                            </div>
                        </div>
                        <div className="grid w-full h-full grid-cols-2 gap-4 mt-8">
                            <div className='relative w-full h-[300px] md:h-[60vh] max-h-[500px]'>
                                <Image className="object-cover transition-all duration-75 rounded-lg ease" src={prestations[isActive].img} alt="office content 1" fill />

                            </div>
                            <div className='relative w-full md:h-[60vh] max-h-[500px]'>
                                <Image className="object-cover w-full mt-4 rounded-lg lg:mt-10" src={prestations[isActive].secondImage} alt="office content 2" fill />
                            </div>


                        </div>
                        <div className='lg:w-max mx-auto   mt-8 xl:ml-16'>
                        {
                                prestations[isActive].list &&
                            

                                 <ul className='grid md:grid-cols-2 w-fill justify-between  gap-x-40 '>
                                    {prestations[isActive].list.map((element, i) => (
                                        <li key={i} className='flex items-center border-t border-gray-200 py-3 lg:py-5 gap-4'>
                                        <span className='text-green-500 bg-green-200 p-2 md:p-2 lg:p-2 rounded-xl flex justify-center items-center'>
                                            <FaCheck />
                                        </span>
                                        <span className='text-sm md:text-base font-roboto text-gray-900 text-left'>{element}</span>
                                        </li>
                                    ))}
                                    </ul>
                               

                            }
                         
        
</div>
                     
                        <div>
                 
                        </div>
                    </div>
                </section>


                <BoxInfo content={prestations[isActive].secondInfo} />


            
                <Client/>






            </div>
        </div>

    )
}

export default Expertise