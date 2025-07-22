import React from 'react'
import App from '../App';
import ProductCard from './ProductCard';


function ProductList ({jewelries}) {
    console.log(jewelries) //confirm if propr has contentn
    return (
        <div>ALL JEWELRY
            <ul>
            {jewelries.map((jewelry)=> (
                <li key={jewelry.id}>
                name={jewelry.name}
                price={jewelry.price}
                image={jewelry.image}
            
                </li>
                //displayed elements as lists
            ))}
            </ul>
        </div>
    )
}

export default ProductList;