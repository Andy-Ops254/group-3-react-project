import React, {useState} from 'react'
import App from '../App';
import ProductCard from './ProductCard';


function ProductList ({jewelries, categories}) {
    // console.log(jewelries) //confirm if propr has contentn
    const [selectCategory, setSelectCategory]= useState("All")//updates app state after filter

    function handleClickChange (e) {
        setSelectCategory(e.target.value) //update state with users , from selection drop down
    }
// logic to filter categories on jewel array
    const updatedCategory= selectCategory==="All"
        ? jewelries : jewelries.filter((item) => item.category===selectCategory)



    return (
        <div>
            <h2 className='text-2xl font-bold font-serif italic text-center my-4'>ALL JEWELRY</h2>
            <p className="font-light italic text-md text-center mb-4">"Explore Our Curated Treasures Across The Seven Seas"</p>
        <div>
        <label>Jewelry Category: </label>
    
        <select
        onChange={handleClickChange}
        value= {selectCategory}>
          {categories.map((category, index) => (
            <option key={index}
            value={category}>{category}</option>
          ))}
        </select>
        </div>
        

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {updatedCategory.map((jewelry)=> (
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