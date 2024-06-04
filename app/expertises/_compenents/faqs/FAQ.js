import React from 'react'
import Image from 'next/image'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
const FAQ = ({ faq, handleOpen, open, handleAlwaysOpen, i }) => {
    return (
        <Accordion open={open === i} onClick={() => handleOpen(i)}>
            <div className="flex items-center justify-center w-full pb-2 mb-2 text-left group"
            >
                <div className="max-w-2xl pr-5">

                    <AccordionHeader onClick={() => handleOpen(i)}>
                        <h3 className={`text-lg font-semibold ${open === i ? 'text-light-brown' : 'text-black'}`}>{faq.question}</h3>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className={` mt-3 text-lg text-gray-500 transition-all ease-linear font-normal leading-relaxed  `}>{faq.answer}</p>

                        <div className={''}>
                            {
                                faq.list && (
                                    <ul className={`flex gap-4 `}>
                                        {
                                            faq.list.map((e, i) => (
                                                <li key={i} className="mt-6 text-lg flex items-center justify-center  text-gray-500 transition-all ease-linear font-normal leading-relaxed  `}>{faq.answer}</p>
                                                ">
                                                    {
                                                        faq.img ? <Image src={e} width={100} height={100} alt="" /> : e
                                                    }
                                                </li>
                                            ))
                                        }


                                    </ul>
                                )

                            }
                        </div>

                    </AccordionBody>




                </div>

            </div>
        </Accordion>

    )
}

export default FAQ