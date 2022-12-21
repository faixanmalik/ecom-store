import React from 'react'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart,AiOutlineShopping, AiOutlineCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';


function Navbar({cart, removeFromCart, addToCart, clearCart, subTotal , size , variant}) {

  const togglecart = ()=> {
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }
  const ref = useRef()




  return (
    <header className="text-gray-600 body-font border-b-2 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold text-blue-800">Hunting_Store</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg md:text-xl justify-center list-none space-x-8 md:space-x-3 lg:space-x-8">
              <Link href={"/"}><li className='hover:text-blue-700'>Home</li></Link> 
              <Link href={"/tshirt"}><li className='hover:text-blue-700'>T-Shirts</li></Link> 
              <Link href={"/hoodies"}><li className='hover:text-blue-700'>Hoodies</li></Link>
              <Link href={"/mugs"}><li className='hover:text-blue-700'>Mugs</li></Link>
            </nav>
            <div className='inline-flex items-center mt-4 md:mt-0 space-x-8 md:space-x-5 lg:space-x-8'>
              <button className=" bg-blue-700 text-white rounded-xl font-semibold border-0 py-2 px-7 focus:outline-none hover:bg-blue-800 text-base"><Link href={"/signup"}>Sign Up</Link></button>
              <div onClick={togglecart}>
                <AiOutlineShoppingCart className='text-xl cursor-pointer'/>
              </div>
            </div>

            <div className="z-10">

              <div ref={ref} className="pt-3 overflow-y-scroll cart rounded-lg absolute top-0 right-0 bg-blue-100 px-7 w-96 h-full transform transition-transform translate-x-full">
                <h1 className="font-bold text-xl text-center text-blue-800 tracking-wider">Shopping Cart</h1>
                <span onClick={togglecart} className="absolute top-7 right-5 text-xl"><AiOutlineCloseCircle className="cursor-pointer text-blue-600"/></span>
                <h1 className="font-bold text-base text-center text-blue-800 tracking-wide">Hunting_Store</h1> 
                <div>
                  <ol className="pt-7 list-decimal font-medium text-red-800 space-y-2">
                    {Object.keys(cart).length == 0 && <div>Your Cart is Empty</div> }
                    {Object.keys(cart).map((k)=>{ return <li key={k} className="text-lg">
                      <div className="flex justify-between">
                        <div className="w-1/2 overflow-hidden">{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                        <div className="bg-slate-100 flex text-blue-800 h-8 font-bold text-center px-2"><AiFillMinusCircle onClick={()=>{removeFromCart(k,cart[k].name,1,cart[k].price,cart[k].size,cart[k].variant)}} className='my-auto cursor-pointer'/> <span className='mx-3'>{cart[k].qty}</span> <AiFillPlusCircle onClick={()=>{addToCart(k,cart[k].name,1,cart[k].price,cart[k].size,cart[k].variant)}} className='my-auto cursor-pointer'/> </div>
                      </div>
                      <div>
                      </div>
                    </li>})}
                      <button onClick={() =>subTotal()} className='text-xl py-2 rounded'>SubTotal: ${subTotal}</button>
                  </ol>

                  <div className='flex space-x-3 pt-20'>
                    <Link href={"/checkout"}><button  className='bg-blue-600 flex pr-3 py-2 rounded text-white'><AiOutlineShopping className='my-auto mx-2'/>Checkout</button></Link>
                    <button onClick={clearCart} className='bg-blue-600 px-5 py-2 rounded text-white'>Clear Cart</button>
                    
                  </div>
                </div>





              </div>



            </div>
        </div>
    </header>
  )
}

export default Navbar