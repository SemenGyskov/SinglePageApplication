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
        return <Product id={prod.id} key={prod.id} name={prod.name} cost={prod.cost} inCart={prod.inCart} addToCart={addToCart} Basket={Basket}/>
    })
    
    const result = prods.map(prod=>{
        return <Basket id={prod.id} key={prod.id} name={prod.name} cost={prod.cost} inCart={prod.inCart} addToCart={addToCart} Basket={Basket}/>
    })
    const orders = prods.map(prod=>{
        return <Order id={prod.id} key={prod.id} name={prod.name} cost={prod.cost} inCart={prod.inCart} addToCart={addToCart} Basket={Basket}/>
    })
return(
<div>
    {items}
<br/>
    <h1>Корзина</h1>
    {result}

    <h1>Оформленные заказы</h1>
    {orders}
</div>
)
}
function Product({id,name,cost, inCart, addToCart}){
return <div>
    Название: <span>{name}</span> Цена: <span>{cost}</span> <br/><span>{inCart ? 'В корзине' : 'Нет в корзине'}</span><button onClick={()=> addToCart(id)}>В корзину</button>
</div>
}
function Basket({id,name,cost,inCart,addToCart}){
    if(inCart==true){
        return(<div>
            В Корзине: <span>{name}</span> Цена: <span>{cost}</span> <br/><span>{inCart ? 'В корзине' : 'Нет в корзине'}</span><button onClick={()=> addToCart(id)}>Заказать</button>
        </div>)
    }
}
function Order({id,name,cost,inCart,addToCart}){
    if(inCart==true){
        return(<div>
            Заказано: <span>{name}</span> Цена: <span>{cost}</span> <br/><span>{inCart ? 'уже заказано' : 'Отменить'}</span> <button onClick={()=> addToCart(id)}>Отменить (Нельзя)</button>
        </div>)
    }
}

export default Products;