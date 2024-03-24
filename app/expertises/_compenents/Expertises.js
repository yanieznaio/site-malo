'use client'
import Footer from '@/app/compenents/footer/Footer'
import { prestations } from '@/app/data'
import React, { useState, useEffect, useRef } from 'react'
import { SideMenu } from './SideMenu'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


const Expertises = () => {
    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true);

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


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
            <div className='flex md:min-h-screen sm:bg-greybeige '>

                <main className=''>
                    <div className='hidden md:block'>
                        <SideMenu selector={"section"}>
                            {
                                prestations && prestations.map((prestation, i) => (
                                    <section id={"section".concat(i)} data-nav-title={prestation.title} key={i} className='flex flex-col min-h-screen gap-2 md:gap-4 pt-60 md:pt-80 ' data-scrollspy>

                                        <h1 className='text-xl md:text-3xl font-playfair'><span className='font-ogg'>0{i + 1} </span>{prestation.title}</h1>
                                        <p className='text-sm font-mori '>{prestation.resume}</p>
                                        <p className='text-sm '>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                                        <p>{prestation.resume}</p>


                                    </section>
                                ))
                            }
                        </SideMenu>

                    </div>
                    <div className='block p-10 text-dark-brown md:hidden bg-geybeige'>
                        {
                            prestations && prestations.map((prestation, i) => (
                                <Accordion open={open === i} key={i} >
                                    <AccordionHeader onClick={() => handleOpen(i)}> <h1 className='text-base font-semibold leading-7 '><span className=''> </span>0{i + 1} {prestation.title}</h1></AccordionHeader>
                                    <AccordionBody><p className='font-light text-dark-brown'>{prestation.resume}</p></AccordionBody>
                                </Accordion>
                            ))
                        }

                    </div>


                </main >

            </div >

        </>

    )
}

export default Expertises