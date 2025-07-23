import React from "react";

function Cart({items, onRemove }){
    const total =items.reduce((sum, item) => sum + item.price, 0);
    //first i calculate the total price by summing up the price of all items in the cart

    return (
        <section className="cart-section">
            <h2>Cart</h2>
            {items.length === 0 ?(
                <p>Your cart is empty.</p>
            ) : (
                <ul className = "cart-list">
                    {items.map((item, index) =>(
                        <li key={index} className="cart-item">
                            <img
                            src={item.image}
                            alt={item.name}
                            className="cart-image"
                            />
                            
                            <div className="cart-info">
                                <h4>{item.name}</h4>
                                {/*this shows the product name*/}

                                <p>${item.price}</p>
                                {/*and this shows the product price*/}

                                <button onClick={() => onRemove(index)}>Remove</button>

                            </div>
                        </li>
                    ))}
                </ul>
            )} {/*then i show a message if the cart is empty*/}
            {/*then i display the product image*/}
            {/*and also loop throup each item in the cart*/}
            {/*added a button which when clicked calls onRemove with the item's index to delete it from the cart*/}

            <div className="cart-total">
                <strong>Total:</strong> ${total.toFixed(2)}
            </div>
            {/*here i show the total price of all items in the cart*/}

        </section>
    )
}
export default Cart;