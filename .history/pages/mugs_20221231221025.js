import React from 'react'
import Link from 'next/link'
import Product from '../models/Product';
import mongoose from "mongoose";


function Mugs({ product }) {
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 pt-5 pb-20 mx-auto">
      <div className="flex flex-wrap px-10 lg:px-20 space-y-20">
        <div></div>


        {Object.keys(product).length === 0 && <div className="font-semibold mx-auto">Sorry! Currently Stock Unavailble right now. Please wait for the new Stock.!</div>}
        {Object.keys(product).map((item)=>{
          return <div key={product[item]._id} className="mx-auto w-64">
              <Link href={`/product/${product[item].slug}`}><img alt="ecommerce" className="w-full h-72 block " src={product[item].img}/></Link>
              <div className="mt-4 text-center sm:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product[item].title} </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Lets enjoy!</h2>
                <p className="mt-1">${product[item].price}</p>
              </div>
          </div>})}   
        
        
      </div>
    </div>
  </section>
  )
}


export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({category: 'mugs'})

  let mugs= {}
    for (let item of products){
        if (item.title in tshirts) {
            if (!mugs[item.title].color.includes(item.color) && item.avilableQty > 0) {
                mugs[item.title].color.push(item.color)
            }
            if (!mugs[item.title].size.includes(item.size) && item.avilableQty > 0) {
                mugs[item.title].size.push(item.size)
            }
        }
        else {
            // mugs[item.title] is key and its value is whole object(item)
            mugs[item.title] = JSON.parse(JSON.stringify(item))
            if(item.avilableQty > 0) {
                mugs[item.title].color = [item.color]
                mugs[item.title].size = [item.size]
            }

        }
    };




 
  // Pass data to the page via props
  return {
     props: { product: JSON.parse(JSON.stringify(mugs)) } 
    }
}


export default Mugs