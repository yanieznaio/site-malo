import React from 'react'
import Image from 'next/image'
import Expertises from './_compenents/Expertises'
const page = () => {
    return (
        <>
            <div className='flex flex-col w-full md:h-screen md:flex-row md:items-center md:justify-center bg-light-beige display '>
                <div className='flex flex-col justify-between w-full h-auto gap-10 p-8 pt-20 md:w-2/4 md:h-full'>
                    <h2 className='w-3/4 font-mori text-sm md:text-[1.6vw] leading-tight'>Particulier, Promoteur Immobilier, Architecte, Bureau d’Etudes ou Entreprise ? Des  expertises adaptées à vos besoins.</h2>
                    <div className='w-3/4 md:w-2/4 '>
                        <h3 className='text-lg md:text-2xl font-mori'>COTÉ ENVIRONNEMENT</h3>
                        <div className='relative  h-[200px]  md:h-[30vh]'>
                            <Image src="/woodHome.jpg" fill={true} />
                        </div>
                    </div>
                </div>


                <div className='relative w-full md:mt-auto md:ml-auto h-[100px] md:w-1/2 md:h-full brightness-75'>
                    <Image fill={true} src='/wood.png' quality={100} className='' alt='Photo de maison' style={{ objectFit: "cover" }} />

                </div>


            </div>
            <Expertises />

        </>

    )
}

export default page