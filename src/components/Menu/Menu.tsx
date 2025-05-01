import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='bg-second-100 py-4 relative z-50'>
            <nav className="container mx-auto px-4 lg:px-24">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <p className="font-medium text-lg">Shop-First</p>

                    {/* Hamburger Icon */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-orange-500 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex gap-6 items-center text-base font-normal">
                        <Link href="/" className="px-2 py-1">Home</Link>
                        <Link href="/products" className="px-2 py-1">Products</Link>
                        <Link href="/auth/login" className="px-2 py-1 text-first-100">Log in</Link>
                        <Link href="/auth/signUp" className="px-2 py-1 text-first-100">Sign up</Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="sm:hidden absolute top-full left-0 w-full bg-second-100 shadow-md flex flex-col items-center gap-4 py-4 text-base font-normal">
                        <Link href="/" onClick={() => setIsOpen(false)} className="px-4 py-1">Home</Link>
                        <Link href="/products" onClick={() => setIsOpen(false)} className="px-4 py-1">Products</Link>
                        <Link href="/auth/login" onClick={() => setIsOpen(false)} className="px-4 py-1 text-first-100">Log in</Link>
                        <Link href="/auth/signUp" onClick={() => setIsOpen(false)} className="px-4 py-1 text-first-100">Sign up</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Menu;
