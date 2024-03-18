"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const ButtonLink = ({ href, title, dark }) => {
    const [over, setOver] = useState(false)

    return (
        <Link onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} href={href} className='relative flex items-center justify-center px-4 py-4 text-xs rounded-full md:px-8 md:text-lg cursor pointer font-mori' >
            <div className={` absolute w-full p-2 md:p-6 h-full ${dark ? "bg-dark-brown" : "bg-white"} rounded-full ${over ? 'scale-[1.1]' : 'scale-1'}  transition-all ease-in-out`}>

            </div>
            <p className={`z-10 ${dark ? "text-white" : "text-dark-brown"}`}>{title}</p>
        </Link>

    )
}

export default ButtonLink