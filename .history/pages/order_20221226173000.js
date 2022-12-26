import React from 'react'

function Order({subTotal, cart }) {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Hunting_Store</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium">Order Id: #972344</h1>
        <p class="leading-relaxed mb-4">Your Order has been placed!</p>
        <div class="flex mb-4">
          <a class="flex-grow text-center text-indigo-500 border-b-2 border-gray-300 py-2 text-lg font-medium px-1">Products</a>
          <a class="flex-grow text-center text-indigo-500 border-b-2 border-gray-300 py-2 text-lg font-medium px-1">Quantity</a>
          <a class="flex-grow text-center text-indigo-500 border-b-2 border-gray-300 py-2 text-lg font-medium px-1">Item Total</a>
        </div>


      <div className='mb-10'>

      {Object.keys(cart).map((item)=>{ 
        return <div key={item} class="flex w-full border-b-2 border-gray-200 py-2">
          <div class="w-1/3 text-center text-gray-500">{cart.title}</div>  
          <div class="w-1/3 text-center text-gray-900">3</div>
          <div class="w-1/3 text-center text-gray-900">300</div>
        </div>})} 
        

      </div>
        
       
        
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${subTotal}</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
  )
}

export default Order