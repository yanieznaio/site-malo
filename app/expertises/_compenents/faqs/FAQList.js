"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import FAQ from './FAQ';

const FAQList = ({ content }) => {
    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const { faq } = content;
    return (
        <section className="relative py-20 pb-60 overflow-hidden bg-gray-50 transition-colors duration-[0.5s] ease-linear" style={{ backgroundColor: content.color }}>

            <div className="container relative px-4 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-10 text-center md:mb-24">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-800 rounded-full bg-green-50">Les questions</span>
                        <h1 className="text-5xl font-bold text-gray-900 font-heading xs:text-6xl md:text-7xl">

                            <span className="px-2 font-serif italic">FAQ</span>

                        </h1>
                    </div>
                    <div className="md:pt-18 md:p-10 sm:pt-20 md:py-20  sm:px-20  bg-[#F6F5F2] rounded-4xl md:shadow-lg rounded-xl">

                        {
                            faq.map((ele, i) => (
                                <FAQ faq={ele} key={i} i={i} handleOpen={handleOpen} open={open} handleAlwaysOpen={handleAlwaysOpen} />
                            ))
                        }



                    </div>
                </div>
            </div>
        </section>
    );
}


export default FAQList