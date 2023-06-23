import React, { useState } from "react";
import data from "./Components/back/data/data";
import Header from "./Components/front/Header/Header";
import RoutingMain from "./Components/front/Routing/RoutingMain";
import { BrowserRouter } from "react-router-dom";
import "./App.css"

const App = () =>{
  
  const {productItems} = data;
  const [cartItems,setCartItems]=useState([]);
  const handleAddProduct=(product) =>{
      const prodExist= cartItems.find ((item) => item.id===product.id);
      if(prodExist)
      {
         setCartItems(cartItems.map (
            (item) => item.id===product.id ?
            {...prodExist,quantity:prodExist.quantity+1}
            : item
           ))}
      else
      {
         setCartItems([...cartItems,{...product,quantity:1}]);
      }
      };
   
      const handleRemoveProduct=(product) =>{
         const prodExist= cartItems.find ((item) => item.id===product.id);
         if(prodExist.quantity===1)
         {
            setCartItems(cartItems.filter ((item) => item.id!==product.id));
         }
         else 
         {
            setCartItems(cartItems.map((item)=> item.id===product.id ? 
            {...prodExist,quantity:prodExist.quantity-1}
            :item)
            );
         }
      };
   const handleCartClearance =()=>{
      setCartItems([]);
   }

  return <div className="app">
    <BrowserRouter>
       <Header cartItems={cartItems} />
       <RoutingMain
          productItems={productItems} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct} 
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          />
    </BrowserRouter>
    </div>

};

export default App;