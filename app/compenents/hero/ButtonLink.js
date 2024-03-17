import Link from 'next/link'
import React from 'react'

const ButtonLink = ({ href, title }) => {
    return (
        <Link href={href} className="py-3 bg-white rounded-full px-7 font-ogg hover:scale-105"> {title}</Link >
    )
}

export default ButtonLink