import React from 'react'
import HeroProduct from './HeroProduct'
import Product from './Product'
import productItems from './ProductAPI'
import { useEffect, useState } from 'react'

export default function Home() {
    const [pickRndm, setPickRndm] = useState([])
    console.log(pickRndm)

    useEffect(() =>{
        const RandomProduct = ()=>{
            const randomObject = Object.values(productItems)
            const randomItem = randomObject[Math.floor(Math.random() * randomObject.length)]
            setPickRndm(randomItem)
        }
       RandomProduct()
    },[])



  return (
    <div>
        <div className='mb-auto h-auto'>
        <HeroProduct 
       
         title= {pickRndm.title}
         pricing={pickRndm.pricing}
         qty={pickRndm.qty}
         image={pickRndm.image}
         desc = {pickRndm.desc}
         alt={pickRndm.alt}
        
        />
        </div>

        <div class="  grid md:grid-cols-4 grid-cols-2 justify-between md:w-full px-10 mx-auto  gap-4 ">
            {productItems.slice(0,8).map(({
                 id,
                 image,
                 alt,
                 pricing,
                 title,
                 desc,
                 size,
                 qty,
                 
            }) =>(
                <Product 
                key={id}
                id={id}
                image={image}
                alt={alt}
                pricing={pricing}
                title={title}
                desc={desc}
                size={size}
                qty={qty}
                />
            ))}



                

            </div>
         <div className='w-[15%] mx-auto  my-5'> <button className='mx-auto'>More</button></div>

</div>
  )
}
