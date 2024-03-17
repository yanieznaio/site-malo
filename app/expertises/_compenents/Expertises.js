'use client'
import Footer from '@/app/compenents/footer/Footer'
import { prestations } from '@/app/data'
import React, { useState, useEffect, useRef } from 'react'
import { SideMenu } from './SideMenu'

const Expertises = () => {

    // Abstracted from ScrollSpy to allow for easier customizations
    const onScrollUpdate = (entry, isInVewPort) => {
        const { target, boundingClientRect } = entry;
        const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
        if (boundingClientRect.y <= 0 && isInVewPort(entry)) {
            menuItem.classList.add("active");

        } else {
            if (menuItem.classList.contains("active")) {
                menuItem.classList.remove("active");
            }
        }
    };
    return (
        <>
            <div className='flex min-h-screen '>

                <main className=''>
                    <SideMenu selector={"section"}>
                        {
                            prestations && prestations.map((prestation, i) => (
                                <section id={"section".concat(i)} data-nav-title={prestation.title} key={i} className='flex flex-col h-screen gap-4 pt-60 md:pt-80 ' data-scrollspy>

                                    <h1 className='text-xl md:text-3xl font-playfair'><span className='font-ogg'>0{i + 1} </span>{prestation.title}</h1>
                                    <p className='text-sm font-mori '>{prestation.resume}</p>
                                    <p className='text-sm '>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                                    <p>{prestation.resume}</p>


                                </section>
                            ))
                        }
                    </SideMenu>


                </main>

            </div>

        </>

    )
}

export default Expertises