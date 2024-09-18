import React, { useState } from 'react';
import F from '../assets/F.png';
import oodi from "../assets/oodi.png";
import searchIcon from "../assets/searchIcon.png";
import shoppingBag from "../assets/shoppingBag.png";
import call from "../assets/call.png";
import menuIcon from "../assets/menuIcon.jpg";
import closeIcon from "../assets/crossIcon.jpg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
            <div className="flex items-center space-x-2">
                <img src={F} alt="F Logo" className="w-8 h-8 bg-green-500" />
                <img src={oodi} alt="Oodi Logo" className="w-24 h-6" />
            </div>

            <div className="hidden md:flex space-x-8 lg:space-x-16 text-gray-800 text-lg font-medium">
                <a href="#" className="hover:text-green-500">Home</a>
                <a href="#" className="hover:text-green-500">Menu</a>
                <a href="#" className="hover:text-green-500">Services</a>
                <a href="#" className="hover:text-green-500">Offers</a>
            </div>

            <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
                <img src={searchIcon} alt="Search Icon" className="w-5 h-5 cursor-pointer hover:opacity-80" />
                <img src={shoppingBag} alt="Shopping Bag" className="w-5 h-5 cursor-pointer hover:opacity-80" />
                <button className="bg-green-500 text-lg text-white px-4 sm:px-6 py-2 rounded-full font-medium items-center gap-3 flex hover:bg-green-600">
                    <img src={call} alt="Call Icon" className='w-5 h-5' />
                    <span className="hidden sm:inline">Contact</span>
                </button>
            </div>

            <div className="md:hidden flex space-x-4">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu Icon" className="w-6 h-6" />
                </button>

                <img src={searchIcon} alt="Search Icon" className="w-5 h-5 cursor-pointer hover:opacity-80" />
                <img src={shoppingBag} alt="Shopping Bag" className="w-5 h-5 cursor-pointer hover:opacity-80" />
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-20">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 text-lg font-medium">
                        <li>
                            <a href="#" className="hover:text-green-500">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">Menu</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">Services</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">Offers</a>
                        </li>
                        <li>
                            <button className="bg-green-500 text-lg text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-green-600">
                                <img src={call} alt="Call Icon" className='w-5 h-5' />
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
