import React from "react";
import "./Products.css"

const Products = ({productItems,handleAddProduct}) =>{
  return ( 
    <div className="Products" >
        {productItems.map((productItem) =>(
            <div className="card">
                <div>
                    <img className="product-image" src ={productItem.Image} alt={productItem.Name}/> 
                </div>
           
                <div>
                    <h3 className="productname">
                        {productItem.Name}
                    </h3>
                </div>
                <div className="prodprice">
                    Rs.{productItem.price}
                </div>
                <div>
                    <button className="addtocart" onClick={() => handleAddProduct(productItem)}>Add to cart</button>
                </div>
            </div>
           
        ))}
    </div>
  )
 }

export default Products;