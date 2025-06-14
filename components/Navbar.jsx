'use client';

import Link from "next/link";
import { useState } from "react";
import { Styles } from "@/styles/navbar.js";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className="flex flex-col p-2 text-2xl">
            <div className="flex justify-between items-center">
                <div className="block mr-4">
                    <Link href="/" className={`${Styles.Link} font-serif`}>My Portfolio</Link>
                </div>
                {/* Desktop menu */}
                <div className="block md:hidden">
                    {/* Hamburger icon for mobile view */}
                    <button onClick={toggleMenu} className="md:hidden">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
                <div className="hidden mr-4 md:flex gap-6 justify-between items-center">
                    <Link className={Styles.Link} href='#about'>About</Link>
                    <Link className={Styles.Link} href='#projects'>Projects</Link>
                    <Link className={Styles.Link} href='#contact'>Contact Me</Link>
                </div>
            </div>
            {/* Dropdown menu */}
            <div
                className={` border-t  border-t-gray-200 md:hidden flex flex-col mt-2 gap-3 transition-all duration-700 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100 py-3' : 'max-h-0 opacity-0'
                    }`}
            >
                <Link href='#about'>About</Link>
                <Link href='#projects'>Projects</Link>
                <Link href='#contact'>Contact Me</Link>
            </div>

        </nav>

    );
}
