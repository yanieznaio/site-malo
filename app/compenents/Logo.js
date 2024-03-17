import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse h-8 w-6 relative">
            <Image src="/logo.png" fill={true} alt="Flowbite Logo" />

        </a>
    )
}

export default Logo