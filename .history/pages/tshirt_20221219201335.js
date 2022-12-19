import React from 'react'
import Link from 'next/link'

function Tshirt( {product} ) {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 pt-5 pb-20 mx-auto">
      <div className="flex flex-wrap lg:px-16 space-y-20">
        <div></div>

        {product.map((item)=>{
          return <div key={item.toString(item._id)} className="mx-auto">
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
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/getproducts`)
  const product = await res.json()
  // Pass data to the page via props
  return { props: { product } }
}

export default Tshirt