
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
                <div className="flex flex-wrap gap-12">
                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <div className="flex items-center space-x-4 mb-6">
                            <img src={F} alt="F Logo" className="w-10 h-10 bg-green-500 p-2 rounded-full" />
                            <img src={oodi} alt="Oodi Logo" className="w-32 h-10" />
                        </div>
                        <p className="text-lg">
                            Discover the best culinary experiences with FOODI. We bring you delightful dishes and exceptional service.
                        </p>
                    </div>

                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-lg">
                            <li><a href="#" className="hover:underline ">About Us</a></li>
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Main Menu</h3>
                        <ul className="space-y-2 text-lg">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Offers</a></li>
                            <li><a href="#" className="hover:underline">Menus</a></li>
                            <li><a href="#" className="hover:underline">Reservation</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 w-full md:w-1/4 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="mb-2 text-lg">
                            <a href="mailto:example@email.com" className="hover:underline">example@email.com</a>
                        </p>
                        <p className="mb-4 text-lg">+64 958 248 966</p>
                        <p className="mb-4 text-lg">Social Media</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
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




// // src/components/Footer.jsx
// import React from 'react';
// import F from '../assets/F.png';
// import oodi from "../assets/oodi.png";

// const Footer = () => {
//     return (
//         <footer className=" text-gray-800 py-10">
//             <div className="container mx-20 px-4">
//                 <div className="flex flex-wrap gap-10">
//                     {/* 1st Section: F OODI Image and Text */}
//                     <div className="flex-1 w-1/5 bg-blue-300">
//                         <div className="flex items-center space-x-2 py-8">
//                             <img src={F} alt="F Logo" className="w-8 h-9 bg-green-500" />
//                             <img src={oodi} alt="Oodi Logo" className="w-24 h-8" />
//                         </div>
//                         <p className="text-lg">
//                             Discover the best culinary experiences with FOODI. We bring you delightful dishes and exceptional service.
//                         </p>
//                     </div>

//                     {/* 2nd Section: Useful Links */}
//                     <div className="flex-1 w-1/5 bg-yellow-50">
//                         <h3 className="text-lg  font-semibold mb-4 pt-6">Useful Links</h3>
//                         <ul>
//                             <li><a href="#" className="hover:underline">About Us</a></li>
//                             <li><a href="#" className="hover:underline">Events</a></li>
//                             <li><a href="#" className="hover:underline">Blogs</a></li>
//                             <li><a href="#" className="hover:underline">FAQs</a></li>
//                         </ul>
//                     </div>

//                     {/* 3rd Section: Main Menu */}
//                     <div className="flex-1">
//                         <h3 className="text-lg font-semibold mb-4">Main Menu</h3>
//                         <ul>
//                             <li><a href="#" className="hover:underline">Home</a></li>
//                             <li><a href="#" className="hover:underline">Offers</a></li>
//                             <li><a href="#" className="hover:underline">Menus</a></li>
//                             <li><a href="#" className="hover:underline">Reservation</a></li>
//                         </ul>
//                     </div>

//                     {/* 4th Section: Contact Us */}
//                     <div className="flex-1">
//                         <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//                         <p className="mb-2"><a href="mailto:example@email.com" className="hover:underline">example@email.com</a></p>
//                         <p className="mb-2">+64 958 248 966</p>
//                         <div className="flex space-x-4 mt-4">
//                             <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
//                             <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
//                             <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
//                             <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Social Media Links and Copyright */}
//                 <div className="mt-10 border-t border-gray-700 pt-4 text-center">
//                     <div className="flex justify-center space-x-4 mb-4">
//                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
//                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
//                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
//                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
//                     </div>
//                     <p className="text-gray-400 text-sm">
//                         &copy; 2023 Dscode | All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
