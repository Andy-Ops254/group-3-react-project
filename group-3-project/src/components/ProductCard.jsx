import React from 'react'

//importinf tprops form productList
function ProductCard ({name, price, image, category}) {
  return (
    <div className='w-xs h-auto rounded-xl bg-gray-100 shadow-gray-400 shadow-md hover:shadow-xl align-center cursor-pointer'>
        <img src= {image} alt={name} className='w-xs h-[250px] aspect-square rounded-xl'/> 

        <div className='p-4'>
            <h2 className='font-bold text-[18px] '>Name: {name}</h2>

            <p className='font-bold my-2'>Category: <span className='italic'>{category}</span></p>

            <p className='text-[18px] font-light font-serif leading-[1.5] italic'>Price: ${price}</p>

            <button className='bg-gray-300 p-2 rounded-4xl w-full h-auto font-bold text-center hover:bg-sky-300 active:bg-sky-700 cursor-pointer m-2 '>ADD TO CART</button>
        </div>
    </div>
            //Button structure

  )
}

export default ProductCard