import React from 'react'
//importinf tprops form productList
function ProductCard ({name, price, image, category}) {
  return (
    <div className='card'>

        <img src= {image} alt={name}/> 

        <div>
            price: {price},

            name: {name},

            category: {category},
            
            <button>Add To Cart</button>
        </div>
    </div>
            //Button structure

  )
}

export default ProductCard