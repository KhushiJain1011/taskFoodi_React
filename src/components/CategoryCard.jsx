import React from 'react';

const CategoryCard = ({ name, count, imageUrl }) => {
    return (
        <div className="relative text-center border rounded-3xl shadow-lg w-[200px] h-[200px] py-4 px-6 bg-white flex flex-col items-center overflow-hidden">
            <div className="absolute w-[180px] h-[180px] bg-gray-200 rounded-full top-16 left-1/2 transform -translate-x-1/2 z-[-1]"></div>

            <img
                src={imageUrl}
                alt={name}
                className="w-[100px] h-[100px] rounded-full mb-4 object-cover bg-green-200"
            />

            <p className="text-lg font-semibold">{name}</p>
            <p className="text-gray-500">{count}</p>
        </div>
    );
};

export default CategoryCard;
