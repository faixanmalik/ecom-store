import { useState , useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

// React top loading bar
import LoadingBar from 'react-top-loading-bar'

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {


  const router = useRouter();


  let [cart, setCart] = useState({})
  let [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState(0)

//  react top loading bar
  const [progress, setProgress] = useState(0)

  //  Use Effect for retain same items in shopping Cart
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(75);
    });
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100);
    });


    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }

    let token = localStorage.getItem("token");
    if( token ){
      setUser({value: token});
      setKey(Math.random());
    }

  }, [router.query])
  


  // Logout function
  const logout = ()=>{
    localStorage.removeItem("token");
    setUser({value:null});
    setKey(Math.random());
    router.push(`${process.env.NEXT_PUBLIC_HOST}/login`);
  }




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
  const removecart = () => toast.error("Your Cart is Empty.!");



  const addToCart = (itemCode, name, qty, price, size, variant) =>{
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
  

  // Visible Cart
  const visibleCart = ()=>{
    if(localStorage.getItem('token')) {
      return true
    }
  }


  return <>
  <LoadingBar color='#007af' height={2} progress={progress} waitingTime={300} onLoaderFinished={() => setProgress(0)}/>
  <Navbar key={key} user={user} visibleCart={visibleCart} logout={logout} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component cart={cart} visibleCart={visibleCart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  {...pageProps} />
  <Footer/>
  </> 

}

export default MyApp
