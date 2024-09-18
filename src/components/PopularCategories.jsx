import React from 'react';
import CategoryCard from './CategoryCard';
import mainDish from '../assets/main-dish.png';
import breakfast from '../assets/breakfast.png';
import dessert from '../assets/dessert.png';
import browseAll from '../assets/browseAll.png';

const PopularCategories = () => {
    const categories = [
        { name: 'Main Dish', count: '86 dishes', imageUrl: mainDish },
        { name: 'Breakfast', count: '12 break fast', imageUrl: breakfast },
        { name: 'Dessert', count: '48 dessert', imageUrl: dessert },
        { name: 'Browse All', count: '255 items', imageUrl: browseAll },
    ];

    return (
        <section className="py-10 w-4/5 items-center mx-auto ">
            <h3 className="text-red-500 font-bold uppercase text-xl mb-8 mt-6 text-center">Customer Favorites</h3>

            <h1 className='font-bold text-4xl text-center pb-8'>Popular Categories</h1>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-16 ">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            name={category.name}
                            count={category.count}
                            imageUrl={category.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;


