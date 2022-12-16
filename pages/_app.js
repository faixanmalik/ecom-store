import { useState , useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  let [cart, setCart] = useState({})
  let [subtotal, setSubtotal] = useState(0)



  //  Use Effect for retain same items in shopping Cart
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])
  



  //  saveCart is used to store cart items in local storage of user
  const savecart = (myCart) => {
    localStorage.setItem("Cart", JSON.stringify(myCart))

  //   // function uses to subtotal
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt +=  myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubtotal(subt)
  }


  // add to Cart function like increase quantity of items in cart
  const addToCart = (itemCode, name, qty, price, size, variant) =>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty= cart[itemCode].qty + qty;
    }
    else{
      newCart[itemCode]= {qty:1, name, price, size, variant}   
    }
    setCart(newCart);
    savecart(newCart);
  }




  // Remove From Cart function like decrease quantity of items in cart
  const removeFromCart = (itemCode, name, qty, price, size, variant) =>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty= cart[itemCode].qty - qty;
    }
     if (newCart[itemCode].qty <=0){
      delete newCart[itemCode];
     }
    setCart(newCart);
    savecart(newCart);
  } 



  
  // clear cart is used to clear all items in cart
  const clearCart = () => {
    setCart({})
    savecart({})
  }








  return <>
  <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} />
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal}  {...pageProps} />
  <Footer/>
  </> 

}

export default MyApp
