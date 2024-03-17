"use client"
import Link from "next/link";
import { React, useState, useLocation } from "react";
/* import AnimatedLink from "./AnimatedLink"; */
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/router';
const navLinks = [
    { title: "Acceuil", href: "/" },
    { title: "How it works", href: "/" },
    { title: "Case studies", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
];
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    }

    useEffect(() => {
        router.events.on('routeChangeStart', closeMenu);

        return () => router.events.off('routeChangeStart', closeMenu);
    }, [router.events]);

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

    return (
        <header>
            <nav className="flex items-center justify-between px-2 py-8 lg:py-4">
                <div className="flex items-center gap-[1ch]">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full" />
                    <span className="text-sm font-semibold tracking-widest">
                        PORTFOLIO
                    </span>
                </div>
                {/*           <div className="hidden gap-12 lg:flex text-md text-zinc-400">
                    <Link href="#" className="font-medium text-black">
                        <AnimatedLink title={"Home"} />
                    </Link>
                    <Link href={"/projects"}>
                        <AnimatedLink title={"Projects"} />
                    </Link>
                    <AnimatedLink title={"Contact"} />
                </div> */}
                <div
                    className="text-black cursor-pointer lg:hidden text-md"
                    onClick={toggleMenu}
                >
                    Menu
                </div>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed top-0 left-0 w-full h-screen p-10 text-black origin-top bg-yellow-400"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between">
                                <h1 className="text-lg text-black">Portfolio</h1>
                                <p
                                    className="text-black cursor-pointer text-md"
                                    onClick={toggleMenu}
                                >
                                    Close
                                </p>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col items-center justify-center h-full gap-4 font-lora "
                            >
                                {navLinks.map((link, index) => {
                                    return (
                                        <div className="overflow-hidden" >

                                            <motion.div
                                                key={index}
                                                variants={mobileLinkVars}
                                                className="text-5xl text-black uppercase"
                                            >
                                                <Link href={link.href} onClick={toggleMenu}>{link.title} </Link>
                                            </motion.div>
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
            className="text-5xl text-black uppercase"
        >
            <Link href={href}>{title} onClick={toggleMenu}</Link>
        </motion.div>
    );
};