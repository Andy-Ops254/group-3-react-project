import React from "react";

function Cart({items, onRemove }){
    const total =items.reduce((sum, item) => sum + item.price, 0);
    //first i calculate the total price by summing up the price of all items in the cart

    return (
        <section className="cart-section">
            <h2>Cart</h2>
        </section>
    )
}
export default Cart;