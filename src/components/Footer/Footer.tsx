import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#062D3E] py-8 text-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
                {/* Brand Section */}
                <div className="text-first-100 font-semibold text-lg">Shop-First</div>

                {/* Links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-sm text-white text-center lg:text-left">
                    <p>About</p>
                    <p>Project</p>
                    <p>Service</p>
                    <p>Client</p>
                    <p>Team</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center lg:items-start gap-2">
                    <p className="text-sm">Flow</p>
                    <div className="flex gap-4 text-xl">
                        <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
                        <FaInstagram className="hover:text-orange-500 cursor-pointer" />
                        <FaTwitter className="hover:text-orange-500 cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
