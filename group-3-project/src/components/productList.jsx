import React from 'react'
import App from '../App';
import ProductCard from './ProductCard';


function ProductList ({jewelries}) {
    // console.log(jewelries) //confirm if propr has contentn
    return (
        <div>
            <h2 className=''>ALL JEWELRY</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {jewelries.map((jewelry)=> (
                <ProductCard key={jewelry.id} 
                name={jewelry.name}
                price={jewelry.price}
                image={jewelry.image}
                category={jewelry.category}
                />
                //displayed elements as lists first
                //used the product card component finl
            ))}
            </div>
        </div>
        
    )
    
}

export default ProductList;