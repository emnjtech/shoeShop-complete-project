import React from 'react'
import CheckOutItem from './CheckoutItem'
import SubTotal from './SubTotal'

import { useContext } from 'react'
import ShoeShopContext from './context/ShoeShopContext'

export default function CheckOut() {
    const {basket} =useContext(ShoeShopContext)
  return (
    <div className='md:grid block md:grid-cols-2 w-full '>
             <div>
                 {basket.map((item) =>(
                        <CheckOutItem 
                        id={item.id}
                        image={item.image}
                        qty={item.qty}
                        size={item.size}
                        pricing ={item.pricing}
                        title={item.title}
                        alt={item.alt}
                        
                        
                        />

                    ))}

        
             </div>
       <div>
        <SubTotal />
       </div>


    </div>
  )
}
