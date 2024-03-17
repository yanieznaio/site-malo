"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const ButtonLink = ({ href, title, dark }) => {
    const [over, setOver] = useState(false)

    return (
        <Link onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} href={href} className='relative flex items-center justify-center w-24 rounded-full cursor-pointer font-playfair' >
            <div className={`absolute z-10 w-full p-6 h-full ${dark ? "bg-dark-brown" : "bg-white"} rounded-full ${over ? 'scale-[1.1]' : 'scale-1'}  transition-all ease-in-out`}>

            </div>
            <p className={`z-20 ${dark ? "text-white" : "text-dark-brown"}`}>{title}</p>
        </Link>

    )
}

export default ButtonLink