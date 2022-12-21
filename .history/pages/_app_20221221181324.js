import { useState , useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'


// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  let [cart, setCart] = useState({})
  let [subTotal, setSubTotal] = useState(0)



  //  Use Effect for retain same items in shopping Cart
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])
  



  //  saveCart is used to store cart items in local storage of user
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))

  //   // function uses to subtotal
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt +=  myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }


  // add to Cart function like increase quantity of items in cart
  const addcart = () => toast("Item is added in your Cart!");
  const removecart = () => toast("Your Cart is Empty!");



  const addToCart = (itemCode, name, qty, price, size, variant) =>{
    addcart();
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty= cart[itemCode].qty + qty;
    }
    else{
      newCart[itemCode]= {qty:1, name, price, size, variant}   
    }
    setCart(newCart);
    saveCart(newCart);
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
    saveCart(newCart);
  } 



  
  // clear cart is used to clear all items in cart
  const clearCart = () => {
    removecart();
    setCart({});
    saveCart({});
  }








  return <>
  <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  {...pageProps} />
  <Footer/>
  </> 

}

export default MyApp
