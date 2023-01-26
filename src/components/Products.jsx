import React from "react";
import { useState } from "react";

function Products(){
    const initProds=[{id:1, name: 'Футболка', cost:100},{id:2, name: 'Кепка', cost:200},{id:3, name: 'Худи', cost:300}]
    const [prods,setProds]=useState(initProds)


    function addToCart(id){
        setProds(prods.map(prod =>{
            if (prod.id === id){
                prod.inCart = true
            }
            return prod;
        }))
    }
        const items = prods.map(prod=>{
        return <Product id={prod.id} key={prod.id} name={prod.name} cost={prod.cost} inCart={prod.inCart} addToCart={addToCart}/>
    })
return(
<div>
    {items}
</div>
)
}
function Product({id,name,cost, inCart, addToCart}){
return <div>
    name: <span>{name}</span> cost: <span>{cost}</span> <br/><span>{inCart ? 'В корзине' : 'Нет в корзине'}</span><button onClick={()=> addToCart(id)}>В корзину</button>
</div>
}

export default Products;