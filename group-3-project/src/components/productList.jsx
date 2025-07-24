import React, {useState} from 'react'
import App from '../App';
import ProductCard from './ProductCard';


function ProductList ({jewelries, categories, onAddToCart}) {

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
        <label className='mx-1.5 font-semibold italic text-[14px]' >JEWELRY CATEGORY: </label>
    
        <select
        onChange={handleClickChange}
        value= {selectCategory}
        className='font-medium italic text-[16px] p-2 border-r-gray-100 bg-gray-200 rounded-xl cursor-pointer hover:bg-sky-200 outline-none mb-10'
        >
          {categories.map((category, index) => (
            <option key={index}
            value={category}
            className='bg-white shadow-gray-300 outline-none'
            >
            {category}
            </option>
          ))}
        </select>
        </div>
        

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-10'>
            {updatedCategory.map((jewelry)=> (
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