import React from 'react'
import { useContext } from 'react';
import ShoeShopContext from './context/ShoeShopContext';
import CurrencyFormat from 'react-currency-format'

export default function SubTotal() {
    const {itemSum,basket,emptyCart} = useContext(ShoeShopContext)
    const totalSum = basket.reduce((totalSum,item) =>{
        return totalSum + (item.pricing * item.qty)
    },0)


  return (
    <div className="md:w-[50%] w-full  py-5 mx-auto shadow-2xl rounded-2xl p-6">
    <h1 className='text-xl font-bold p-2'>Order Summary</h1>

    <div className='mx-auto'>
       <CurrencyFormat
       renderText={(value) =>(
        <>
        <h1 className='text-sm font-bold p-2 text-blue-600'>Total Items in your Basket: {itemSum}</h1>
        <h1 className='text-sm font-bold p-2 text-blue-600'>Sub Total: ${totalSum}</h1>
        </>
       )}
       thousandSeparator ={true}
       displayType="text"
       value={0}
       decimalScale={2}
       />
    </div>
    <div className='mx-auto'>
   { totalSum >0 && <div className='flex justify-between p-2'>
                <button className='hover:bg-slate-500'>Checkout</button>
                 <button className='hover:bg-slate-500' onClick={() =>emptyCart()}>Clear Cart</button>
            </div>}
    </div>
    
</div>
  )
}
