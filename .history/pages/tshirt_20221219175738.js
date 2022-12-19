import React from 'react'
import Link from 'next/link'

function Tshirt(product) {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 pt-5 pb-20 mx-auto">
      <div className="flex flex-wrap lg:px-20 space-y-20">
        <div></div>

        {product.map((item)={<div className="w-60 mx-auto">
          <div className="block h-72 rounded overflow-hidden">
            <Link href={"/product/details"}><img alt="ecommerce" className="w-full h-full block" src="https://static-01.daraz.pk/original/dafc774611f87ff8db4baefa9013bb52.jpg"/></Link>
          </div>
          <div className="mt-4 text-center sm:text-left">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Lets enjoy!</h2>
            <p className="mt-1">$16.00</p>
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