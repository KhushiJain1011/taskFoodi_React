import React from "react";
import catering from "../assets/catering.png";
import delivery from "../assets/fastDelivery.png";
import onlineOrder from "../assets/onlineOrdering.png";
import giftCard from "../assets/giftCards.png";

const Services = () => {
    return (
        <section className="py-10 w-4/5 items-center mx-auto ">
            <div className="container flex mx-auto justify-between  px-6">
                <div className="text-left mb-8">
                    <h3 className="text-red-500 font-bold uppercase text-lg mb-4">Our Story & Services</h3>
                    <h2 className="text-5xl font-bold mt-6 mb-12">Our Culinary Journey <br />And Services</h2>
                    <p className="text-gray-700 mt-7 mb-4 text-xl max-w-md">
                        Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                    </p>
                    <button className="mt-9 bg-green-500 text-white px-9 py-4 rounded-full text-xl font-semibold shadow-md hover:bg-green-600  transition ">Explore</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="bg-white w-52 h-60 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <img src={catering} alt="Catering" className="w-16 h-16 mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Catering</h4>
                        <p className="text-gray-600 text-center">
                            Delight your guests with our flavors and presentation.
                        </p>
                    </div>

                    <div className="bg-white  w-52 h-60 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <img src={delivery} alt="Fast Delivery" className="w-16 h-16 mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
                        <p className="text-gray-600 text-center">
                            We deliver your order promptly to your door.
                        </p>
                    </div>

                    <div className="bg-white  w-52 h-60 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <img src={onlineOrder} alt="Online Ordering" className="w-16 h-16 mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Online Ordering</h4>
                        <p className="text-gray-600 text-center">
                            Explore the menu & order with ease using our Online Ordering.
                        </p>
                    </div>

                    <div className="bg-white w-52 h-60 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <img src={giftCard} alt="Gift Cards" className="w-16 h-16 mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Gift Cards</h4>
                        <p className="text-gray-600 text-center">
                            Give the gift of exceptional dining with Foodi Gift Cards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
