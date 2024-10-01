
import { prestations } from '@/app/data'
import React from 'react'
import Card from './Card'



const Slider = () => {



    return (
        <div className='relative flex flex-col items-center justify-center w-full overflow-hidden md:min-h-screen md:gap-10 bg-dark-brown text-light-brown md:pt-20 md:pb-40'>
            <h2 className='text-center text-4xl md:text-[56px] mt-20 font-playfair'>Mes expertises</h2>
            <div className=''>
                <div className='md:gap-y-[ max(14px,calc(10.412px+.92vw))] md:gap-x-[max(14px,calc(10.412px+.92vw))] relative grid items-start w-screen h-full xs:grid-cols-1 gap-6 p-10 md:grid-cols-2 lg:grid-cols-4'>
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