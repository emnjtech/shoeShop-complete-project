import React from 'react'
import { useContext } from 'react';
import ShoeShopContext from './context/ShoeShopContext';

import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'



function Product({ key, title, pricing, image, qty,alt,id,size}) {
   const {addToCart, basket} = useContext(ShoeShopContext)

   const newItem = {
    id,
    image,
    pricing,
    qty,
    title,
    size,
   }

   function handleAddToCart(){
    addToCart(newItem)
   }

   console.log(basket)
    return (
        <div >

                <div className="w-full  mb-6 "> 
                <Link to={`/product-showcase${id}`}><img src={image} alt={alt} className='rounded-t-lg product'/></Link>
                    <div className="w-full h-[35px] px-3 "> <h1 className=' text-[10px]'>{title}</h1></div>

                <div className='flex justify-start '>
                        <div className='w-[30%] md:w-[50%]   mr-auto'>
                            
                            <select className='w-full p-1 h-[30px] outline-none text-slate-600 text-[10px]'>
                            <option hidden>Pick Size</option>
                                <option>"L = USA:7.5, UK:7, EU: 41"</option>
                                <option>"LM = USA:8, UK:8, EU:42",</option>
                                <option>'XL =USA:8.5, UK:9, EU:43'</option>
                                <option>'XL2 = USA:9, UK:10, EU:44'</option>
                                <option>'XXL = USA:10, UK:11, EU:45'</option>

                            </select>
                    </div>
                    <div className=" h-[30px] px-1 py-1 "> <h1 className=' md:text-[16px] text-[12px] font-bold'>$ {pricing}</h1></div>
                    <div className=" h-[30px] px-3 p-1"> <Icon icon="bi:cart-plus-fill"  className='text-2xl hover:text-red-400  text-red-700' 
                    onClick={handleAddToCart}/></div>
                </div>

                <hr />
            </div>
            


        </div>



    )
}
export default Product

/* <div className="product__rating"> {Array(rating)
                        .fill()
                        .map((_, i) => (<p>⭐</p>))}
                            
                        
                    </div> */