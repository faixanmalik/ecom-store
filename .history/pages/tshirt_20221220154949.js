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
          return <div key={product[item]._id} className="mx-auto">
              <Link href={`/product/${product[item].slug}`}><img alt="ecommerce" className="w-full h-72 block" src={product[item].img}/></Link>
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
  let product = await Product.find({category: 'tshirts'})

  let tshirts= {}
    for (let item of product){
        if (product[item].title in tshirts) {
            if (!tshirts[product[item].title].color.includes(product[item].color) && product[item].avilableQty > 0) {
                tshirts[product[item].title].color.push(product[item].color)
            }
            if (!tshirts[product[item].title].size.includes(product[item].size) && product[item].avilableQty > 0) {
                tshirts[product[item].title].size.push(product[item].size)
            }
        }
        else {
            // tshirts[product[item].title] is key and its value is whole object(product[item])
            tshirts[product[item].title] = JSON.parse(JSON.stringify(product[item]))
            if(product[item].avilableQty > 0) {
                tshirts[product[item].title].color = [product[item].color]
                tshirts[product[item].title].size = [product[item].size]
            }

        }
    };




 
  // Pass data to the page via props
  return {
     props: { product: JSON.parse(JSON.stringify(tshirts)) } 
    }
}



export default Tshirt