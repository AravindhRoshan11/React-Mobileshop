import React from "react";
import "./Cart.css"


const Cart = ({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {

   
    const totalPrice= cartItems.reduce((price,item) => price + item.quantity * item.price,0)
    return (
     <div className="cartt"> 
        <div className="cartItemsHeader">Cart Items</div>
        <div className="clearCart">
            {cartItems.length >=1 && (
                <button className="clearCartButton" onClick={handleCartClearance}>Clear Cart</button>
            )}
        </div>

     {cartItems.length === 0 && (
     <div className="cartItemsEmpty">No items Added to Cart</div>
     )}
    <div>
        {cartItems.map((item) =>(
         <div key={item.id} className="cartItemsList"> 
            <img className="cartItemsImg" src={item.Image} alt={item.Name}/>
            <div className="cartItemsName">
                {item.Name}
            </div>
            <div className="cartItemsButtons">
                <button className="cartItemsAdd" onClick={()=>handleAddProduct(item)}> + </button>
                <button className="cartItemsRemove" onClick={()=>handleRemoveProduct(item)}> - </button>
            </div>
            <div className="cartItemsPrice">
               {item.quantity} * {item.price}
            </div>
         </div>
         ))}
    </div>
            <div className="totalName">
                Total Price :   
                <div className="totalPrice">
                     Rs.{totalPrice}
                </div>
            </div>
   
    </div>
    )
}

export default Cart;