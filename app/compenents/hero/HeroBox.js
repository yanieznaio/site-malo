import React from 'react'
import ButtonLink from '../button/ButtonLink'

const HeroBox = () => {
    return (
        <div className='absolute flex flex-col md:w-[30vw] max-w-[483px] min-w-[350px]  max-h-[500px] md:max-h-[650px] gap-8  p-4 backdrop-filter bg-light-brown backdrop-blur-xl bg-opacity-10  h-[75vh] md:h-[85vh] mt-12 '>
            <div className="bg-[url('/house1.png')] bg-center bg-cover bg-no-repeat   h-[70%] md:h-2/3 w-full flex justify-center items-end py-6">
                <ButtonLink href='/contact' title='Contact' />

            </div >
            <div className='text-center text-white'>

                <h2 className='text-2xl md:text-[2vw] font-playfair md:leading-[2vw]' >COTÉ ENVIRONNEMENT</h2>
                <p className='w-4/5 m-auto text-xs md:text-lg opacity-50 font-mori md:leading-[19px]'>Votre guide vers un bâtiment zéro carbone </p>

            </div>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mt-auto opacity-40"></hr>
        </div >
    )
}

export default HeroBox