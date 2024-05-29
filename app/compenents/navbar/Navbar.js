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
import Nav from "./Nav";
import { usePathname } from 'next/navigation';

const navLinks = [
    { title: "Accueil", href: "/#" },
    { title: "A propos", href: "/" },
    { title: "Expertises", href: "/expertises" },
    { title: "Contact", href: "/contact" },

];
const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    useEffect(() => {
        if (open) setOpen(false)

    }, [pathname])
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

    }



    useMotionValueEvent(scrollY, "change", (latest) => {

        update()
    })




    return (
        <header className="overflow-hidden">


            <nav className="bg-white border-gray-200 ">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="flex items-center gap-[1ch] overflow-hidden">
                            <LogoAnimate open={open} />
                            <div className="overflow-hidden">
                                <motion.span initial={{ opacity: 1 }} animate={hidden ? { x: -300 } : { x: 0 }} transition={{ duration: 0.5 }} className={`text-sm md:text-[1.1vw] font-semibold tracking-widest ${open ? "text-light-brown" : 'text-black'} hidden md:block`}>
                                    COTÉ ENVIRONNEMENT
                                </motion.span>
                            </div>

                        </div>
                    </a>
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-multi-level" type="button" className={`${open ? "text-dark-brown bg-light-brown" : "bg-dark-brown text-white"} inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden z-30`}>
                        <span className="sr-only">Open main menu</span>
                        {open ? <IoCloseOutline /> : <HiBars2 />}
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <Link href="/" className="block px-3 py-2 text-black rounded md:bg-transparent md:p-0 " aria-current="page">A propos</Link>
                            </li>
                            <li>
                                <Link href="/expertises" className="block px-3 py-2 text-black rounded md:bg-transparent md:p-0 " aria-current="page">Expertises</Link>
                            </li>
                            <li>
                                <Link href="/actualites" className="block px-3 py-2 text-black rounded md:bg-transparent md:p-0 " aria-current="page">Actualites</Link>
                            </li>

                            <li>
                                <Link href="/contact" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <AnimatePresence mode="wait">
                {open && (
                    <Nav />
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
