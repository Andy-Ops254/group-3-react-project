import React from 'react'
//handles the category function on app
function  CategoryFilter (){
  return (
    <div>
        <label>Jewelry Category</label>
        
        <select>
            <option>All</option>
            <option>Ring</option>
            <option>Earrings</option>
            <option>Necklace</option>
            <option>Bracelets</option>
            <option>Pendant</option>
        </select>
    
    </div>
  )
}

export default CategoryFilter