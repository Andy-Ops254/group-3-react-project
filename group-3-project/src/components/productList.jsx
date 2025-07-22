import React from 'react'

function ProductList ({jewelries}) {
    return (
        <div>ALL JEWELRY
            {jewelries.map((jewelry)=> (
                <Card key={jewelry.id}
                name={jewelry.name}
                price={jewelry.price}
                image={jewelry.image}
                />
            ))}
        </div>
    )
}

export default productList;