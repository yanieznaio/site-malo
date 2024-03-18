import Image from 'next/image'
import React from 'react'
import Footer from '../compenents/footer/Footer'
import ContactInformation from './_compenents/ContactInformation'
import LogoAnimate from '../compenents/LogoAnimate'

const page = () => {
    return (
        <>
            <div className='flex flex-col-reverse w-full md:h-screen md:pt-0 md:flex-row md:items-center md:justify-center bg-light-beige display text-dark-brown'>

                <div className='flex flex-col p-4 md:p-20 md:pt-40 md:w-1/2'>

                    <div className='flex flex-col gap-6 md:w-3/5 '>

                        <h1 className='font-bold font-playfair md:text-[5vw] '>Contact</h1>
                        <p className='text-sm font-light'>Nous sommes la pour vous accompagner , Prenez contact afin que nous puissions évaluer, ensemble, vos besoins. </p>


                    </div>


                    <form className=''>
                        <div class=" space-y-4 mt-8">
                            <input type="text" placeholder="Nom"
                                class="px-2 py-3 bg-transparent w-full text-sm border-b border-gray-400 focus:border-dark-brown outline-none" />
                            <input type="text" placeholder="Prénom"
                                class="px-2 py-3 bg-transparent  w-full text-sm border-b border-gray-400 focus:border-dark-brown outline-none" />
                            <input type="number" placeholder="Numéro"
                                class="px-2 py-3 bg-transparent  w-full text-sm border-b border-gray-400 focus:border-dark-brown outline-none" />

                            <input type="email" placeholder="Email"
                                class="px-2 py-3 bg-transparent  w-full text-sm border-b border-gray-400 focus:border-dark-brown outline-none" />

                            <textarea placeholder="Message"
                                class="px-2 pt-3 bg-transparent  w-full text-sm border-b border-gray-400 focus:border-dark-brown outline-none"></textarea>
                        </div>
                        <button type="button"
                            class="mt-8 rounded-full flex items-center justify-center text-sm w-full px-4 py-2.5 font-semibold bg-dark-brown text-white hover:bg-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2"
                                viewBox="0 0 548.244 548.244">
                                <path fill-rule="evenodd"
                                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                    clip-rule="evenodd" data-original="#000000" />
                            </svg>
                            Envoyer
                        </button>
                    </form>
                </div>
                <div className='relative w-full mb-auto min-h-[200px] md:mr-auto h-2/6 md:w-1/2 md:h-full brightness-50'>
                    <Image fill={true} src='/woodHome.jpg' quality={100} className='' alt='Photo de maison' style={{ objectFit: "cover" }} />

                </div>




            </div>
            <ContactInformation />

        </>

    )
}

export default page