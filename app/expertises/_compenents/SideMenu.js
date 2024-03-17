"use client"
import { useState, useLayoutEffect } from "react";
import { ScrollSpy } from "./ScrollSpy";

// Abstracted from ScrollSpy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort) => {
    const { target, boundingClientRect } = entry;
    const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
    if (boundingClientRect.y <= 0 && isInVewPort) {
        menuItem.classList.add("active");
    } else {
        if (menuItem.classList.contains("active")) {
            menuItem.classList.remove("active");
        }
    }
};

const NavMenu = ({ options }) => {
    // control the click event
    const onClick = (e) => {
        e.preventDefault();
        // Set the hash
        window.location.hash = e.target.hash;

        // Scroll to the section + 1 to account for weird bug.
        // remove the `+1` and click on Section 2 link to see the bug.
        const targetSection = document.querySelector(`${e.target.hash}`);
        window.scrollTo(0, targetSection.offsetTop + 1);
    };

    return (
        <nav className="sticky top-60 md:pt-0">
            <ul>
                {options.map((option, i) => (
                    <li key={option.hash} className="py-4 px-4 md:px-0 text-[11px] border-b md:text-xl border-dark-brown border-opacity-40 ">
                        <a
                            href={`#${option.hash}`}
                            onClick={onClick}
                            data-scrollspy-id={option.hash}
                        >
                            <span>0{i + 1}.</span> {option.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export const SideMenu = ({ children, selector }) => {
    const [options, setOptions] = useState([]);
    useLayoutEffect(() => {
        const navMenuSections = document.querySelectorAll(selector);
        const optionsFromSections = Array.from(navMenuSections).map((section) => {
            return {
                hash: section.id,
                title: section.dataset.navTitle
            };
        });
        setOptions(optionsFromSections);
    }, [selector]);

    return (
        <div className="flex bg-dark-beige">
            <ScrollSpy handleScroll={onScrollUpdate} />
            <div className="flex-col w-1/3 gap-6 md:w-1/2 md:p-20 ">
                <NavMenu options={options} />
            </div>
            <div className="w-2/3 p-4 text-white md:w-1/2 bg-[#9D7C5D] md:px-[10vw] pb-80 ">{children}</div>
        </div>
    );
};
