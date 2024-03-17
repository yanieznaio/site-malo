import Link from 'next/link'
import React from 'react'

const IconLinks = ({ link, content }) => {
    return (
        <div className='p-2 text-xl transition-all duration-300 ease-in-out rounded-full text-dark-brown bg-light-brown hover:bg-white'>
            <a href={link} className=''>{content}</a>
        </div>



    )
}

export default IconLinks