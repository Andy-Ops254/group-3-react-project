import React from 'react'
import App from '../App';
import ProductCard from './ProductCard';


function ProductList ({jewelries}) {
    // console.log(jewelries) //confirm if propr has contentn
    return (
        <div>ALL JEWELRY
            <div>
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