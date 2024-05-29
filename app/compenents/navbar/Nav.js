
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Curve from './Curve'
import Footer from './Footer'
import StyledLink from './Link'
export const menuSlide = {
    initial: { x: "110%" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "110%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

const navItems = [
    {
        title: "Accueil",
        href: "/",
    },
    {
        title: "Expertises",
        href: "/expertises",
    },

    {
        title: "Contact",
        href: "/contact",
    },
]
const Nav = () => {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen fixed bg-[rgb(41,41,41)] right-0 top-0  text-white z-20 w-screen md:hidden"
        >
            <div className="box-border h-full p-[100px] flex flex-col justify-between">
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className="flex flex-col text-[46px]  md:text-[56px] md:gap-[0px] md:mt-[20px]">
                    <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] pb-[20px]  uppercase text-[11px] mb-[20px] md:mb-[40px]">
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <StyledLink
                                className="font-light text-white"
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}>
                            </StyledLink>
                        })
                    }
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    )
}

export default Nav