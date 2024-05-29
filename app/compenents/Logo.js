import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse h-[100px] w-[100px] relative">
            <Image src="/logo.png" fill={true} alt="Flowbite Logo" className='object-cover' />

        </a>
    )
}

export default Logo