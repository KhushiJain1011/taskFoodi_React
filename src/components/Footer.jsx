
import React from 'react';
import F from '../assets/F.png';
import oodi from '../assets/oodi.png';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
    return (
        <footer className=" text-gray-800 py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col  justify-center flex-wrap sm:flex-row sm:gap-28 md:gap-12 ">
                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                            <img src={F} alt="F Logo" className="w-10 h-10 bg-green-500 p-2 rounded-full" />
                            <img src={oodi} alt="Oodi Logo" className="w-32 h-10" />
                        </div>
                        <p className="text-center lg:text-start text-lg">
                            Discover the best culinary experiences with FOODI. We bring you delightful dishes and exceptional service.
                        </p>
                    </div>

                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <h3 className="text-center lg:text-start text-xl font-semibold mb-4">Useful Links</h3>
                        <ul className="text-center lg:text-start space-y-2 text-lg">
                            <li><a href="#" className="hover:underline ">About Us</a></li>
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <h3 className="text-center lg:text-start text-lg font-semibold mb-4">Main Menu</h3>
                        <ul className="text-center lg:text-start space-y-2 text-lg">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Offers</a></li>
                            <li><a href="#" className="hover:underline">Menus</a></li>
                            <li><a href="#" className="hover:underline">Reservation</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <h3 className="text-center lg:text-start text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-center lg:text-start mb-2 text-lg">
                            <a href="mailto:example@email.com" className="hover:underline">example@email.com</a>
                        </p>
                        <p className="text-center lg:text-start mb-4 text-lg">+64 958 248 966</p>
                        <p className="text-center lg:text-start mb-4 text-lg">Social Media</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-4">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 flex justify-center rounded-full items-center p-2 hover:text-white  w-10 h-10 bg-green-500"><img src={facebook} alt="Facebook" className="w-6 h-6 rounded-full" /></a>
                            <a href="#" className="text-gray-400 flex justify-center items-center p-2 w-10 h-10 rounded-full  hover:text-white bg-green-100"><img src={twitter} alt="Twitter" className="w-6 h-6  " /></a>
                            <a href="#" className="text-gray-400 flex justify-center items-center p-2 w-10 h-10 rounded-full bg-green-100 hover:text-white"><img src={instagram} alt="Instagram" className="w-6 h-6 " /></a>
                            <a href="#" className="text-gray-400 flex justify-center items-center p-2 w-10 h-10 bg-green-100 rounded-full  hover:text-white"><img src={youtube} alt="YouTube" className="w-6 h-6" /></a>
                        </div>
                        <p className="text-gray-400 text-lg mx-auto">
                            &copy; 2023 Dscode | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
