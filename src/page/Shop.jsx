import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/productCard'

const shop = () => {
    const product = useSelector(state => state.product)
  return (
    
         <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2x1 font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-col-4 lg:grid-cols-5 gap-6 cursor-pointer">
         {product.products.slice(0.5).map(((product)=>(
         <ProductCard product={product} /> 
         )))} 
        </div>
      </div>
    
  )
}

export default shop