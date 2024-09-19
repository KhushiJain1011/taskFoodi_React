import React, { useState } from 'react';
import FattoushSalad from "../assets/FattoushSalad.png";
import VegetableSalad from "../assets/vegetableSalad.png";
import EggSalad from "../assets/EggSalad.png";
import singleStar from "../assets/singleStar.png";
import heartOutline from "../assets/unfilled-heart.png";
import heartFilled from "../assets/filled-heart.png";
import leftarrow from "../assets/leftarrow.png"
import rightarrow from "../assets/rightarrow.png"


const dishes = [
    {
        name: 'Fattoush salad',
        price: 24.00,
        rating: 4.9,
        image: FattoushSalad,
        liked: true,
    },
    {
        name: 'Vegetable salad',
        price: 26.00,
        rating: 4.6,
        image: VegetableSalad,
        liked: false,
    },
    {
        name: 'Egg vegi salad',
        price: 23.00,
        rating: 4.5,
        image: EggSalad,
        liked: false,
    },
];

const DishCard = ({ dish, onToggleLike }) => {
    const [liked, setLiked] = useState(dish.liked);

    const toggleLike = () => {
        setLiked(!liked);
        onToggleLike(dish.name, !liked);
    };

    return (
        <div className="bg-white rounded-3xl max-w-[316px] h-[450px] mx-auto sm:h-[410px] md:h-[350px] lg:h-[460px] shadow-lg p-5 flex flex-col relative">
            <button onClick={toggleLike} className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-bl-3xl flex items-center justify-center">
                <img src={liked ? heartFilled : heartOutline} alt="like" className="w-4 h-4" />
            </button>
            <img src={dish.image} alt={dish.name} className="rounded-full w-30 h-30 md:w-36 md:h-36 lg:w-52 lg:h-52 object-cover mb-4 mx-auto" />
            <div className='ml-5 text-left'>
                <h3 className="text-lg md:text-xl font-semibold">{dish.name}</h3>
                <p className="text-gray-500 text-sm font-semibold pt-2">Description of the item</p>
            </div>
            <div className="flex items-center justify-between w-full mt-4 mx-5">
                <span className="text-red-500 font-bold text-lg md:text-xl">${dish.price.toFixed(2)}</span>
                <div className="flex items-center mr-9">
                    <span className=" mr-1"><img src={singleStar} alt="ratings" /></span>
                    <span className="text-gray-700">{dish.rating}</span>
                </div>
            </div>
        </div>
    );
};

const SpecialDishes = () => {
    const handleToggleLike = (name, liked) => {
        console.log(`${name} liked: ${liked}`);
    };

    return (
        <section className="py-10 ">
            <div className="container mx-auto w-11/12 md:w-4/5">
                <h2 className="text-red-500 font-bold uppercase text-base text-center md:text-start md:text-lg mb-4">Special Dishes</h2>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h3 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6 mb-6 md:mb-8 text-center md:text-start">Standout Dishes <br />From Our Menu</h3>
                    <div className='flex justify-center md:justify-end mx-4 mt-4 md:mt-6 mb-6 md:mb-8'>
                        <button className="w-10 h-10 md:w-12 md:h-12 mx-2 md:mx-4 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center">
                            <img src={leftarrow} alt="" />
                        </button>
                        <button className="w-10 h-10 md:w-12 md:h-12 mx-2 md:mx-4 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center">
                            <img src={rightarrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                    {dishes.map((dish, index) => (
                        <DishCard key={index} dish={dish} onToggleLike={handleToggleLike} />
                    ))}
                </div>
                <div className="flex justify-center mt-10 space-x-4">

                </div>
            </div>
        </section>
    );
};

export default SpecialDishes;
