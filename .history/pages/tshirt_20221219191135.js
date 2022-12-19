import React from 'react'
import Link from 'next/link'

function Tshirt({ product }) {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 pt-5 pb-20 mx-auto">
      <div className="flex flex-wrap lg:px-20 space-y-20">
        <div></div>

          <div className="w-60 mx-auto">
              <Link href={"/product/details"}><img alt="ecommerce" className="w-full h-72 block" src="https://static-01.daraz.pk/original/dafc774611f87ff8db4baefa9013bb52.jpg"/></Link>
              <div className="mt-4 text-center sm:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Lets enjoy!</h2>
                <p className="mt-1">$16.00</p>
              </div>
          </div>



          {Object.keys(product).map((item)=>{
          return <div key={item.toString(item._id)}>
            <Link href={`/product/details`}>
                <h1 className='text-2xl text-blue-800 font-semibold p-3 cursor-pointer'>{item.title}</h1>
            </Link>
            {/* <p className='text-base text-justify text-gray-600 w-1/2 mx-auto'>{blogitem.metadesc.substr(0,170)}</p> */}
          </div>
        })}



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