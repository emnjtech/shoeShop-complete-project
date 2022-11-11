import React from 'react'
import { useLocation } from 'react-router-dom'
import Product from './Product'
import productItems
 from './ProductAPI'

export default function SearchResults() {

    const location = useLocation()
    const searchItem = location.state
    console.log(searchItem)

    const searchValue = productItems.filter((item) => item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) )
   
  return (
    <div>
         <div className='grid md:grid-cols-5 grid-cols-2 gap-4'>
                
                <div className=' md:col-span-5  col-span-2 shadow-2xl'><h1 className='text-center font-bold text-xl text-blue-400 bg-slate-100 p-4'>Search Results</h1></div>
              {searchValue.map((item) =>(
                <Product 
                key={item.id}
                id={item.id}
                image={item.image}
                alt={item.alt}
                pricing={item.pricing}
                title={item.title}
                />

              ))}

                   
                
                
                
        </div>

    </div>
  )
}
