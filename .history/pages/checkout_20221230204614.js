import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle,AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Checkout({cart , subTotal, removeFromCart, addToCart }) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [products, setProducts] = useState(cart)
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
 


  const handleChange = (e) => {

    if ( e.target.name === 'firstName') {
      setFirstName(e.target.value)
    }
    else if ( e.target.name === 'lastName') {
      setLastName(e.target.value)
    }
    else if ( e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if ( e.target.name === 'country') {
      setCountry(e.target.value)
    }
    else if ( e.target.name === 'streetAddress') {
      setStreetAddress(e.target.value)
    }
    else if ( e.target.name === 'city') {
      setCity(e.target.value)
    }
    else if (e.target.name === 'state') {
      setState(e.target.value)
    }
    else if (e.target.name === 'zip') {
      setZip(e.target.value)
    }
  }





  const submit = async (e) => {
    e.preventDefault()

    
    // fetch the data from form to makes a file in local system
    const data = { firstName, lastName, email, country , products , streetAddress, city, state, zip };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      let response = await res.json()
      console.log(response)
        setFirstName('')
        setLastName('')
        setEmail('')
        setCountry('')
        setCity('')
        setState('')
        setStreetAddress('')
        setZip('')

        if (response.success === true) {
            toast.success(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

        else {
            toast.error(response.message , { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

  }
  
  




  return (
    <>
  <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>


  <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto w-9/12">
      <div className="flex flex-col w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">1.Delivery Details</h1>
        <p className="lg:w-2/3 leading-relaxed text-base">Whatever You Want, Whenever You Want You GOT!</p>
      </div>
      <div className="lg:w-full mx-auto">
        <div className="flex flex-wrap -m-2">




          <form method='POST' onSubmit={submit}>
            <div className='md:flex w-full'>
              <div className="p-2 md:w-1/2">
                <div className="relative">
                  <label htmlFor="firstname" className="leading-7 text-sm text-gray-600">First Name:</label>
                  <input onChange={handleChange} value={firstName} type="text" id="firstName" name="firstName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 md:w-1/2">
                <div className="relative">
                  <label htmlFor="lastname" className="leading-7 text-sm text-gray-600">Last Name:</label>
                  <input onChange={handleChange} value={lastName} type="text" id="lastName" name="lastName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
            </div>
            

            <div className="p-2 w-full">
            <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address:</label>
                <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>

            <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="country" className="leading-7 text-sm text-gray-600">Country:</label>
              <select onChange={handleChange} value={country} id="country" name="country" autoComplete="country-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option>Pakistan</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            </div>


            <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="street-address" className="leading-7 text-sm text-gray-600">Street address:</label>
              <input onChange={handleChange} value={streetAddress} type="text" name="streetAddress" id="streetAddress" autoComplete="street-address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
            <div className='w-full md:flex'>
              <div className="p-2 md:w-1/3">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">City:</label>
                  <input onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 md:w-1/3">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State / Province:</label>
                  <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 md:w-1/3">
                <div className="relative">
                  <label htmlFor="lastname" className="leading-7 text-sm text-gray-600">ZIP / Postal code:</label>
                  <input onChange={handleChange} value={zip} type="text" id="zip" name="zip" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
            </div>

            <div className='bg-gray-50 w-full py-1 mx-2 mt-5'>
              <button type="submit" className="float-right mr-16 rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
            </div>  

          </form>   




        </div>
      </div>

      <div className="flex flex-col w-full mt-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">2.Review Cart Items</h1>
        <p className="lg:w-2/3 leading-relaxed text-base my-2">Whatever You Want, Whenever You Want You GOT!</p>
      </div>
      
      <div className="pt-3 cart rounded-lg bg-blue-100 px-7 h-full">
        <ol className="list-decimal font-medium text-red-800 space-y-2 pt-5">
          {Object.keys(cart).length == 0 && <div>Your Cart is Empty</div> }
          {Object.keys(cart).map((item)=>{ return <li key={item} className="text-lg">
            <div className="flex justify-between">
              <div className="w-1/2 overflow-hidden">{cart[item].name}({cart[item].size}/{cart[item].variant})</div>
                <div className="bg-slate-100 flex text-blue-800 h-8 font-bold text-center px-2"><AiFillMinusCircle onClick={()=>{removeFromCart(item,cart[item].name,1,cart[item].price,cart[item].size,cart[item].variant)}} className='my-auto cursor-pointer'/> <span className='mx-3'>{cart[item].qty}</span> <AiFillPlusCircle onClick={()=>{addToCart(k,cart[item].name,1,cart[item].price,cart[item].size,cart[item].variant)}} className='my-auto cursor-pointer'/> </div>
            </div>  
          </li>})} 
        </ol>
        <div>
            <button onClick={() => subTotal()} className='text-lg font-semibold py-2 rounded'>SubTotal: ${subTotal}</button>
        </div>
      </div>
    

    <Link href={"/order"}><button className='bg-blue-600 mt-4 px-5 py-2 flex rounded text-white'><AiOutlineShopping className='my-auto mx-2'/>Pay ${subTotal}</button></Link>


    </div>
  </section>

     
    </>
  )
}

export default Checkout