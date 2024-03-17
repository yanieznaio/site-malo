import React from 'react'
const Navlink = (props) => {
    return (
        <li>
            <a href="#" className="block py-2  text-gray-900  rounded md:border-0 relative   after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center " aria-current="page">{props.content}</a>
        </li>
    )
}

export default Navlink