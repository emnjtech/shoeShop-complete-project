import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import ShoeShopContext from './context/ShoeShopContext';

export default function Header() {

  const { itemSum} = useContext(ShoeShopContext)
  const navigate =useNavigate()
  

  const [mobileNav, setMobileNav] =useState(false)
  const [searchBox,setSearchBox] = useState("")
 
 function handleSearch(){
  if(searchBox.trim().length !== 0){
    navigate ("/search-results", {state: searchBox})
  }


 }


  function revealNav(){
    setMobileNav(!mobileNav)
  }


  return (
<>
    <div className='md:hidden flex w-[90%] mx-5 h-8 bg-red-200 my-2 rounded-full'>
            <div className=' flex w-full '>
                <input type='text' className='w-full text-[13px] bg-red-200 p-4 rounded-full outline-none md:rounded-full
                focus:border-[0px] box-border md:border-[0px]' 
                placeholder='Search...'
                />

            </div>
            <div className='h-full w-17 bg-red-200 rounded-full flex items-center p-1'>
            <Icon icon="el:search-alt" className='text-2xl' />
            </div>
        </div>
    <div className=' w-full h-[70px] shadow-2xl bg-red-700'>
        <div className='px-4 flex md:justify-between justify-start items-center h-full w-full'>
         <Link to='/'>  <div className='flex mr-[10px]  items-center'>
                  <Icon icon="la:shoe-prints" className=' font-bold text-2xl  md:text-4xl text-white'/>
                  <h1 className='md:text-lg text-sm font-bold md:font-bold text-white'>The ShoeShop</h1>
             </div>
           </Link> 

        <div className='hidden md:flex w-[40%]  md:bg-red-200 bg-transparent h-[40px] my-4 rounded-full'>
            <div className=' flex w-full md:w-full '>
                <input type='text' className='md:w-full text-[13px] bg-red-200 p-4 rounded-full outline-none md:rounded-full
                focus:border-[0px] box-border md:border-[0px]' 
                placeholder='Search...'

                onKeyDown={(e) =>{
                  if(e.key === "Enter"){
                    handleSearch()
                  }
                }}

                value={searchBox}
                onChange={(e)=>setSearchBox(e.target.value)}
               />

            </div>
            <div className='h-full w-17 bg-red-200 rounded-full flex items-center p-1'>
            <Icon icon="el:search-alt" className='text-3xl' onClick={handleSearch}/>
            </div>
        </div>


        <div className='hidden md:flex pr-4'>
        <ul className='hidden md:flex  mr-6 text-[12px] font-bold text-white'>
                       <li>Home</li>
                      <li>Shop Sneakers</li>
                        
                        <li>New Arrivals</li>
                          
                        </ul>  
        </div>
        <div className='h-full flex items-center ml-auto' >
                  <div>
                    <h1 className='text-[11px] text-yellow-400 font-semibold'>My Account</h1>
                  </div>
        
                  <div className='relative'>
                     <Icon icon="ion:cart-outline" className='text-4xl text-yellow-400' />
                

                  </div>
                  
                  <Link to="/checkOut"><div className='absolute right-[77px] md:right-[28px] top-[72px] md:top-[24px] '>
                    <h1 className='text-[10px] text-white'>{itemSum}</h1>
                  </div></Link>

                  <div className='text-white p-4 md:hidden'>
                      <Icon icon={mobileNav? "dashicons:menu-alt3" : "akar-icons:circle-x-fill"} onClick={revealNav} />
                  
                  </div>
        </div>


        </div>

        

        <div>
              {!mobileNav? <ul className='absolute z-10 right-0 bg-red-700 w-auto rounded-bl-full h-auto pb-20 px-6 text-sm  text-white md:hidden '>
              <Link to='/'>  <li className='py-1'>Home</li></Link>
              <Link to='/shoes'> <li className='py-1'>Shop Sneakers</li></Link>
                   
                       <li className='py-1'>New Arrivals</li>
               </ul>:""}

        </div>
    </div>


    </>    
  )
}
