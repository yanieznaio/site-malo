import Link from 'next/link'
import React from 'react'

const SelectBar
    = ({ currImg, setCurrImg }) => {
        return (
            <div className='flex gap-6 px-4 py-2 rounded-lg bg-dark-beige'>
                {
                    [
                        ['Maison individuelle', '/house.png'],
                        ['Bureau', '/business.png'],
                        ['Batiments collectifs', '/building.png']
                    ]
                        .map(([title, img]) => (
                            <button className={`text-white ${currImg == img && 'bg-white text-black'} rounded-full px-2`} onClick={() => setCurrImg(img)}>{title}</button>
                        ))
                }
                <Link href='/contact' className='px-4 py-2 text-white bg-black rounded-full'>Contact</Link>
            </div>
        )
    }

export default SelectBar
