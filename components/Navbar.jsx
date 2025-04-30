'use client';

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className="flex flex-col p-4 text-white text-2xl">
            <div className="flex justify-between items-center">
                <div className="block lg:ml-24">
                    <Link href="/" className="font-serif">MMQ</Link>
                </div>
                {/* Desktop menu */}
                <div className="block md:hidden">
                    {/* Hamburger icon for mobile view */}
                    <button onClick={toggleMenu} className="md:hidden">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
                <div className="hidden md:flex gap-6 lg:mr-24 justify-between items-center">
                    <Link href='/'>About</Link>
                    <Link href='/'>Projects</Link>
                    <Link href='/'>Contact Me</Link>
                </div>
            </div>
            {/* Dropdown menu */}
            <div
                className={` border-t  border-t-gray-200 md:hidden flex flex-col mt-2 gap-3 transition-all duration-700 ease-in-out ${ // Added transition classes
                    isOpen ? 'max-h-screen opacity-100 py-3' : 'max-h-0 opacity-0' // Adjusted max-height and opacity based on isOpen
                    }`}
            >
                <Link href='/'>About</Link>
                <Link href='/'>Projects</Link>
                <Link href='/'>Contact Me</Link>
            </div>

        </nav>

    );
}