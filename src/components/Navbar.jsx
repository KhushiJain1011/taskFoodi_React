
import React from 'react';
import F from '../assets/F.png';
import oodi from "../assets/oodi.png";
import searchIcon from "../assets/searchIcon.png";
import shoppingBag from "../assets/shoppingBag.png";
import call from "../assets/call.png";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8  bg-white shadow-md">
            <div className="flex items-center space-x-2">
                <img src={F} alt="F Logo" className="w-8 h-8 bg-green-500" />
                <img src={oodi} alt="Oodi Logo" className="w-24 h-6" />
            </div>

            <div className="flex space-x-16 text-gray-800 text-lg font-medium">
                <a href="#" className="hover:text-green-500">Home</a>
                <a href="#" className="hover:text-green-500">Menu</a>
                <a href="#" className="hover:text-green-500">Services</a>
                <a href="#" className="hover:text-green-500">Offers</a>
            </div>

            <div className="flex items-center space-x-6">
                <img src={searchIcon} alt="Search Icon" className="w-5 h-5 cursor-pointer hover:opacity-80" />

                <img src={shoppingBag} alt="Shopping Bag" className="w-5 h-5 cursor-pointer hover:opacity-80" />

                <button className="bg-green-500 text-lg text-white px-6 py-2 rounded-full font-medium items-center gap-3  flex hover:bg-green-600">
                    <img src={call} alt="" className='w-5 h-5' />
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;


