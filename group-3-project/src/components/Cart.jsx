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
                <ul className = "cart-list"></ul>
            )} {/*then i show a message if the cart is empty*/}
        </section>
    )
}
export default Cart;