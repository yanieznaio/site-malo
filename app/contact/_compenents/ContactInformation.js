import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import Image from 'next/image';
const Icon = ({ content, text }) => {
    return (
        <span className='flex items-center gap-2 text-dark-brown opacity-55 text-xs md:text-[1vw]'>
            {content}
            <p>{text}</p>
        </span>
    )
}


const ContactInformation = () => {
    return (
        <div className='flex flex-col min-h-screen gap-10 p-4 bg-dark-beige md:p-[10vw]'>


            <h2 className='md:text-[3.3vw] text-dark-brown'>Coordonnées</h2>
            <div className='flex flex-col justify-between md:flex-row md:min-h-[300px] md:h-[45vh]'>
                <div className='relative w-full md:w-1/2 h-[200px] md:h-full'>
                    <Image src="/map.png" alt="carte de Villeurbanne" fill={true} className='object-cover' />
                </div>
                <div className='flex flex-col gap-8 p-10 border md:rounded-r-full md:w-1/2 bg-light-beige'>
                    <h3 className='font-bold text-light-brown md:text-[2vw]'>COTÉ ENVIRONNEMENT</h3>
                    <div className='flex gap-10 md:gap-20'>
                        <div className='flex flex-col gap-2'>
                            <Icon content={<FaPhoneAlt />} text="NUMÉRO" />
                            <Icon content={<FaLocationDot />} text="ADRESSE" />
                            <Icon content={<CiMail />} text="EMAIL" />
                            <Icon content={<CiCalendar />} text="JOURS" />
                            <Icon content={<FaClock />} text="HORAIRES" />

                        </div>
                        <div className='flex flex-col gap-2 font-extralight text-dark-brown text-xs md:text-[1vw]'>
                            <p>07 83 83 39 47</p>
                            <p>Villeurbanne, France</p>
                            <p>malo.orth@gmail.com</p>
                            <p>Lundi-Vendredi</p>
                            <p>9h- 18h</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactInformation