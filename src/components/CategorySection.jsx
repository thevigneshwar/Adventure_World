import React from 'react'
import ClothingCategory from '../assets/images/clothing.jpg'
import GearsCategory from '../assets/images/footwears.webp'
import FootwaersCategory from '../assets/images/gears.webp'

const Categories = [
    {
        title: 'Clothing',
        imageUrl: ClothingCategory,
    },
      {
        title: 'Gears',
        imageUrl: GearsCategory,
    },
      {
        title: 'Footwears',
        imageUrl: FootwaersCategory ,

    },

];

const CategorieSection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {
        Categories.map(( category, index) =>(
          <div key={index} className='relative h-64 transforn transition-transform duration-300 hover:scale-105 cursor-pointer'> 
            <img src={category.imageUrl} alt=""className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute top-20 left-12">
              <p className='text-x1 font-bold'>{category.title}</p>
              <p className="text-gray-600">view all</p>
            </div>
          </div>

        ))
      }
    </div>
  );
};

export default CategorieSection