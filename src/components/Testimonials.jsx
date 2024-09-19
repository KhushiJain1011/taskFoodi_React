import React from "react";
import bestChef from "../assets/bestChef.png";
import customer1 from "../assets/person-1.png";
import customer2 from "../assets/person-2.png";
import customer3 from "../assets/person-3.png";

const Testimonials = () => {
    return (
        <section className="py-10 px-6 bg-white lg:grid flex flex-col items-center justify-center lg:grid-cols-2 gap-8 w-4/5 mx-auto ">
            <div className="relative">
                <div className="h-80 sm:h-96 md:h-[450px] lg:h-[500px]">
                    <img src={bestChef} alt="Best Chef" className="rounded-xl object-cover h-full" />
                </div>
                <div className="absolute bottom-3 left-3 bg-white py-2 px-3 rounded-lg lg:w-32 text-xs sm:text-sm md:text-base ml-32 sm:ml-48 font-semibold shadow-md h-18 sm:h-20 lg:h-10 ">
                    Our Best Chef
                </div>
            </div>

            <div>
                <h3 className="text-red-500 font-bold uppercase text-sm sm:text-base md:text-lg mb-4 mx-auto text-center lg:text-start">Testimonials</h3>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-8 mx-auto text-center lg:text-start">What Our Customers <br />Say About Us</h1>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-6 mb-6 mx-auto text-center lg:text-start">
                    "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable."
                </p>
                <div className="flex flex-col lg:flex-row items-center space-x-3">
                    <div className="flex -space-x-2">
                        <img src={customer1} alt="Customer 1" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                        <img src={customer2} alt="Customer 2" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                        <img src={customer3} alt="Customer 3" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                    </div>

                    <div>
                        <p className="text-gray-800 text-sm  sm:mx-12 sm:text-sm md:font-semibold md:text-lg font-bold">
                            Customer Feedback <span className="ml-2 text-yellow-500">⭐ 4.9</span> <span className="text-gray-500">(18.6k Reviews)</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
