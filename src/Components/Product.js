import React from 'react'
import ProductCollection from './ProductCollection'
function Product() {
  return (
    <div>
        <div className='p-5 '>
        <h1 className='text-3xl lg:text-4xl border-b-[2px] border-gray-300 kanit-bold p-2' >Restaurants With Online Food Delivery In Chennai  </h1>
        </div>
        <div className='md:mx-[150px] sm:m-[50px] '>
        <ProductCollection />
        </div>
      </div>
  )
}

export default Product
