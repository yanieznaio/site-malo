"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const StyledLi = ({ content, href, toggleMenu }) => {


    return (
        <li className='  border-light-brown md:hover:text-white cursor-pointer md:hover:pl-[3px] transition-all duration-300 ease-in-out flex' >

            <Link href={href} onClick={toggleMenu && toggleMenu} >{content}</Link>
        </li>
    )
}

export default StyledLi