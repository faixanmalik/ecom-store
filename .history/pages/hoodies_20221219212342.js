import React from 'react'
import Link from 'next/link'

function Hoodies({ product }) {
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 pt-5 pb-20 mx-auto">
      <div className="flex flex-wrap px-10 lg:px-20 space-y-20">
        <div></div>


        {product.map((item)=>{
        return <div key={item._id} className="w-60 mx-auto">
          <div className="block h-72 rounded overflow-hidden">
            <Link href={`/product/${item.slug}`}><img alt="ecommerce" className="w-full h-full block" src={item.img}/></Link>
          </div>
          <div className="mt-4 text-center sm:text-left">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.title}</h3>
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
  let product = await Product.find({category: 'hoodies'})

 
  // Pass data to the page via props
  return {
     props: { product: JSON.parse(JSON.stringify(product)) } 
    }
}



export default Hoodies