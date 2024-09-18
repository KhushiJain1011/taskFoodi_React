import React from 'react';
import girlHomePage from '../assets/girl-homepage.png';
import spicyNoodles from '../assets/spicy-noodles.png';
import vegetarianSalad from '../assets/vegetarian-salad.png';
import threeStar from "../assets/3-star.png";
import playvideo from "../assets/play-video.png"
import hotSpicyFood from '../assets/hot-spicy-food.png';

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
            <div className="md:w-1/2 text-center md:text-left space-y-6 ,l-0 md:ml-24">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                    Dive into Delights Of Delectable <span className="text-green-500">Food</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                    Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                </p>

                <div className="space-x-0 sm:space-x-4 justify-center md:justify-start flex flex-col sm:flex-row items-center sm:items-start">
                    <button className="bg-green-500 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-green-600">
                        Order Now
                    </button>
                    <button className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium text-lg hover:bg-green-100 mt-4 sm:mt-0">
                        Watch Video
                    </button>
                    <div className='p-4 rounded-full shadow-md mt4
                    sm:mt-0'>
                        <img src={playvideo} alt="Play video" className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    src={girlHomePage}
                    alt="Person eating"
                    className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full shadow-lg object-cover bg-green-500"
                />

                <div className="absolute -top-2 left-2 sm:left-10 sm:right-32 md:right-96">
                    <img
                        src={hotSpicyFood}
                        alt="Hot Spicy Food Tag"
                        className="w-[100px] h-[100px] sm:w-[248px] sm:h-[100px]"
                    />
                </div>

                <div className="absolute -bottom-16 lg:-bottom-12 left-2 lg:left-0 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className="flex items-center bg-white shadow-lg rounded-xl p-2 space-x-2 w-[160px] sm:w-[210px] h-[85px] sm:h-[95px]">
                        <img
                            src={spicyNoodles}
                            alt="Spicy Noodles"
                            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full object-cover"
                        />
                        <div>
                            <p className="
                            font-semibold text-gray-700">Spicy Noodles</p>
                            <img src={threeStar} alt="" />
                            <p className="font-semibold text-gray-500"><span className='text-red-600'>$</span>18.00</p>
                        </div>
                    </div>

                    <div className="flex items-center bg-white shadow-lg rounded-xl p-2 space-x-2 w-[160px] sm:w-[210px] h-[85px] sm:h-[95px]">
                        <img
                            src={vegetarianSalad}
                            alt="Vegetarian Salad"
                            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]rounded-full object-cover"
                        />
                        <div>
                            <p className="font-semibold text-gray-700">Vegetarian Salad</p>
                            <img src={threeStar} alt="" />
                            <p className="
                            font-semibold  text-gray-500"><span className='text-red-600'>$</span>23.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

