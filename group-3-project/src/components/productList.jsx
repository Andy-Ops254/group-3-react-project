import React from 'react'
import App from '../App';
import ProductCard from './ProductCard';


function ProductList ({jewelries}) {
    // console.log(jewelries) //confirm if propr has contentn
    return (
        <div>
            <h2 className='text-2xl font-bold font-serif italic text-center my-4'>ALL JEWELRY</h2>
            <p className="font-light italic text-md text-center mb-4">"Explore Our Curated Treasures Across The Seven Seas"</p>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {jewelries.map((jewelry)=> (
                <ProductCard key={jewelry.id} 
                name={jewelry.name}
                price={jewelry.price}
                image={jewelry.image}
                category={jewelry.category}
                onAddToCart={onAddToCart}
                />

                //displayed elements as lists first
                //used the product card component finl
            ))}
            </div>
        </div>
        
    )
    
}

export default ProductList;