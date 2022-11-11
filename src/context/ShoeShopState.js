import ShoeShopContext from "./ShoeShopContext";
import { useReducer,useEffect, } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART, INC,DEC, EMPTY_CART } from "./ShoeShopAction";
import {ShoeShopReducer} from './ShoeShopReducer'


import React from 'react'

export default function ShoeShopState(props) {
    const myStore ="localCart"
    const InitialState ={
        basket:[]
    }

    const [state,dispatch] = useReducer(ShoeShopReducer, InitialState, (initial) => JSON.parse(localStorage.getItem(myStore)) || initial)

function addToCart(item){
    dispatch({
        type:ADD_TO_CART,
        payload: item //id,title,image,price,qty,size
    })
}

function removeFromCart(id){
    dispatch({
        type:REMOVE_FROM_CART,
        payload: id 
    })
}
function incItem(id){
    dispatch({
        type:INC,
        payload: id 
    })
}
function decItem(id){
        dispatch({
            type:DEC,
            payload: id 
        })
    }

function emptyCart(){
        dispatch({
            type:EMPTY_CART,
          
        })
}
const itemSum = state.basket.reduce((itemSum,item) =>{
    return itemSum + item.qty
},0)



 useEffect(()=>{
    localStorage.setItem(myStore, JSON.stringify(state))
 },[state])



  return (
    <ShoeShopContext.Provider value={{
        basket: state.basket,
        addToCart,
        incItem,
        decItem,
        removeFromCart,
        itemSum,
        emptyCart
    }}>

        {props.children}


    </ShoeShopContext.Provider>
  )
}
