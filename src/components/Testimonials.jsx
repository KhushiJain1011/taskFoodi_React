import React from "react";
import bestChef from "../assets/bestChef.png";
import customer1 from "../assets/person-1.png";
import customer2 from "../assets/person-2.png";
import customer3 from "../assets/person-3.png";

const Testimonials = () => {
    return (
        <section className="py-10 px-6 bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 w-4/5 mx-auto items-center">
            <div className="relative">
                <div className="h-[500px]">
                    <img src={bestChef} alt="Best Chef" className="rounded-xl object-cover h-full" />
                </div>
                <div className="absolute bottom-3 left-3 bg-white py-2 px-3 rounded-lg text-sm ml-60 font-semibold shadow-md h-10 ">
                    Our Best Chef
                </div>
            </div>

            <div>
                <h3 className="text-red-500 font-bold uppercase text-lg mb-4">Testimonials</h3>
                <h1 className="text-4xl font-bold mt-6 mb-8">What Our Customers <br />Say About Us</h1>
                <p className="text-gray-700 text-xl mt-6 mb-6">
                    "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable."
                </p>
                <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                        <img src={customer1} alt="Customer 1" className="w-16 h-16 rounded-full border-2 border-white" />
                        <img src={customer2} alt="Customer 2" className="w-16 h-16 rounded-full border-2 border-white" />
                        <img src={customer3} alt="Customer 3" className="w-16 h-16 rounded-full border-2 border-white" />
                    </div>

                    <div>
                        <p className="text-gray-800 text-lg font-bold">
                            Customer Feedback <span className="ml-2 text-yellow-500">⭐ 4.9</span> <span className="text-gray-500">(18.6k Reviews)</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
