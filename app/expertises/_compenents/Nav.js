"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Nav = ({ isActive, setIsActive }) => {

    const elements = [
        {
            href: "#bas-carbone",
            title: "Conception Bas Carbonne"
        },
        {
            href: "#acv-re2020",
            title: "ACV 2020"
        },
        {
            href: "#reemplois-economie",
            title: "Reemplois/economie"
        },
        {
            href: "#conseils-accompagnement",
            title: "Conseils et accompagnement"
        }
    ]



    return (

        <div className={`flex flex-col  md:flex-row w-full md:h-[70px] shadow-[0_0_20px_rgba(0,0,0,0.1)] bg-[#ffff] z-10 md:sticky top-0 `}>

            {
                elements.map((ele, i) => (
                    <>
                        <Link key={i} className="hidden md:flex py-4 md:py-0  justify-center items-center flex-1 text-[#000] tracking-[0.1rem] transition-all duration-[0.2s] ease-in text-[0.8rem] hover:text-[#ffff] hover:bg-dark-brown hover:transition-all hover:duration-[0.2s] hover:ease-in" href={ele.href} onClick={() => setIsActive(i)} scroll={true}>{ele.title}</Link>
                        <Link key={i} className="flex md:hidden py-4 md:py-0  justify-center items-center flex-1 text-[#000] tracking-[0.1rem] transition-all duration-[0.2s] ease-in text-[0.8rem] hover:text-[#ffff] hover:bg-dark-brown hover:transition-all hover:duration-[0.2s] hover:ease-in" href={ele.href} onClick={() => setIsActive(i)} scroll={false}>{ele.title}</Link>
                    </>

                ))
            }

            <span className={` hidden md:block absolute -bottom-1 w-1/4   h-[5px] bg-dark-brown z-50 transition-[left] duration-[0.2s] ease-linear`} style={{ left: `${isActive * 25}%` }}></span>
        </div>

    )
}

export default Nav