import React from 'react'
import Link from 'next/link'
import Product from '../models/Product';
import mongoose from "mongoose";

function Tshirt({ product }) {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 pt-5 pb-20 mx-auto">
      <div className="flex flex-wrap lg:px-16 space-y-20">
        <div></div>

        {Object.keys(product).map((item)=>{
          return <div key={item._id} className="mx-auto">
              <Link href={`/product/${item.slug}`}><img alt="ecommerce" className="w-full h-72 block" src={item.img}/></Link>
              <div className="mt-4 text-center sm:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.title} </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Lets enjoy!</h2>
                <p className="mt-1">${item.price}</p>
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
  let product = await Product.find({category: 'tshirts'})

  let tshirts= {}
    for (let item of product){
        if (item.title in tshirts) {
            if (!tshirts[item.title].color.includes(item.color) && item.avilableQty > 0) {
                tshirts[item.title].color.push(item.color)
            }
            if (!tshirts[item.title].size.includes(item.size) && item.avilableQty > 0) {
                tshirts[item.title].size.push(item.size)
            }
        }
        else {
            // tshirts[item.title] is key and its value is whole object(item)
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if(item.avilableQty > 0) {
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
            }

        }
    };




 
  // Pass data to the page via props
  return {
     props: { product: JSON.parse(JSON.stringify(tshirts)) } 
    }
}



export default Tshirt