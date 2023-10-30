import React from 'react'
import { star } from '../assets/icons'
import ShoeCard from '../Components/ShoeCard'
import { products, shoes } from '../constants'

function PopularProduct() {
  return (
    <section className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h1 className="font-palanquin text-3xl font-bold">Our <span className="text-coral-red">Popular</span> Products</h1>
      <span className='font-montserrat text-slate-gray lg:max-w-lg'>Experience top notch quality and style with our sought after selections. Discover world of comfort,design</span>
      
    <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
    sm:gap-4 gap-14'>
      
        {products.map((product) =>
        <div>
        <img src={ product.imgURL} alt="product1" />
        <div className='mt-8 flex mb-4 justify-start gap-2'>
          <img src={star} alt="star" width={20} height={20}/>
          <p className='font-montserrat '>(4.5)</p>
        </div>
          <h3 className='font-bold text-2xl leading-normal font-palanquin font-semibold'>{product.name}</h3>
          <p className='text-coral-red mt-2 font-montserrat text-2xl'>{product.price}</p>
        
        </div>
        )}
      
    </div>
    </div>
    </section>
  )
}

export default PopularProduct