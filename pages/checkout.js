import React from 'react'

function Checkout() {
  return (
    <>

    <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto w-9/12">
      <div class="flex flex-col w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">1.Delivery Details</h1>
        <p class="lg:w-2/3 leading-relaxed text-base">Whatever You Want, Whenever You Want You GOT!</p>
      </div>
      <div class="lg:w-full mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="firstname" class="leading-7 text-sm text-gray-600">First Name:</label>
              <input type="text" id="firstname" name="firstname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="lastname" class="leading-7 text-sm text-gray-600">Last Name:</label>
              <input type="text" id="lastname" name="lastname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>

          <div class="p-2 w-full">
          <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email Address:</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>

          <div class="p-2 w-full">
          <div class="relative">
            <label htmlFor="country" className="leading-7 text-sm text-gray-600">Country:</label>
            <select id="country" name="country" autoComplete="country-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option>Pakistan</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          </div>


          <div class="p-2 w-full">
          <div class="relative">
            <label htmlFor="street-address" className="leading-7 text-sm text-gray-600">Street address:</label>
            <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          </div>

          <div class="p-2 w-1/3">
            <div class="relative">
              <label for="firstname" class="leading-7 text-sm text-gray-600">City:</label>
              <input type="text" id="firstname" name="firstname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-1/3">
            <div class="relative">
              <label for="lastname" class="leading-7 text-sm text-gray-600">State / Province:</label>
              <input type="text" id="lastname" name="lastname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-1/3">
            <div class="relative">
              <label for="lastname" class="leading-7 text-sm text-gray-600">ZIP / Postal code:</label>
              <input type="text" id="lastname" name="lastname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>

          <div className='bg-gray-50 w-full py-3 mx-2 mt-5'>
            <button type="submit" className="float-right mr-16 rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>     


        </div>
      </div>
    </div>
</section>










          
    </>
  )
}

export default Checkout