"use client"
import Link from "next/link";
import { React, useState, useRef, useEffect } from "react";
/* import AnimatedLink from "./AnimatedLink"; */
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Logo from "../Logo";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import StyledLi from "../footer/StyledLi";
import LogoAnimate from "../LogoAnimate";


const navLinks = [
    { title: "Accueil", href: "/#" },
    { title: "A propos", href: "/" },
    { title: "Expertises", href: "/expertises" },
    { title: "Contact", href: "/contact" },

];
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };
    const variantsnav = {
        /** this is the "visible" key and it's correlating styles **/
        visible: { opacity: 1 },
        /** this is the "hidden" key and it's correlating styles **/
        hidden: { opacity: 0 }
    };




    function update() {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);

        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);

        }
        console.log(hidden)
    }



    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        update()
    })




    return (
        <header >
            <motion.nav className="fixed z-50 flex items-center justify-between w-full px-8 py-4 md:absolute lg:py-4 font-mori">
                <div className="fixed flex items-center gap-[1ch] overflow-hidden">
                    <LogoAnimate />
                    <div className="overflow-hidden">
                        <motion.span initial={{ opacity: 1 }} animate={hidden ? { x: -300 } : { x: 0 }} transition={{ duration: 0.5 }} className={`text-sm md:text-[1.1vw] font-semibold tracking-widest ${open ? "text-light-brown" : 'text-black'} hidden md:block`}>
                            COTÉ ENVIRONNEMENT
                        </motion.span>
                    </div>

                </div>
                <button
                    className={`md:hidden ml-auto px-6 py-1 text-2xl  rounded-full cursor-pointer  ${open ? "text-dark-brown bg-light-brown" : "bg-dark-brown text-white"}`}
                    onClick={toggleMenu}
                >
                    {open ? <IoCloseOutline /> : <HiBars2 />}

                </button>
                <div className="hidden gap-12 ml-auto text-white lg:flex text-md ">
                    <Link href="/" className="block py-2  rounded md:border-0 relative   after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
                        Accueil
                    </Link>
                    <Link href="/expertises" className="block py-2    rounded md:border-0 relative   after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
                        Expertises
                    </Link>
                    <Link href='/contact' className="block py-2   rounded md:border-0 relative   after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">Contact</Link>
                </div>

            </motion.nav>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed top-0 left-0 z-20 w-full h-screen p-4 text-black origin-top bg-dark-brown"
                    >
                        <div className="flex flex-col h-full">

                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full gap-2 pt-10 pl-6 text-white font-lora"
                            >
                                {navLinks.map((link, index) => {
                                    return (
                                        <div className="overflow-hidden" key={index}>
                                            <MobileNavLink

                                                title={link.title}
                                                href={link.href}
                                                toggleMenu={toggleMenu}
                                            />
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};
const MobileNavLink = ({ title, href, toggleMenu }) => {
    return (
        <motion.div
            variants={mobileLinkVars}
            className="text-4xl text-light-brown font-playfair"
        >
            <StyledLi href={href} content={title} toggleMenu={toggleMenu} />
        </motion.div>
    );
};