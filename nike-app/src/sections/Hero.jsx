import React from 'react'
import { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../Components/Button'
import ShoeCard from '../Components/ShoeCard'
import { shoes, statistics } from '../constants'

function Hero() {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)



  return (
    <section className='w-full gap-10 flex xl:flex-row flex-col min-h-screen max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>

        <p className='text-xl font-montserrat text-coral-red'> Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82] font-bold '>
        <span className='xl:bg-white xl:whitespace-nowrap 
        relative z-10 pr-10'>The New Arrival</span> <br/>
        <span className='text-coral-red inline-block mt-2'>Nike</span> Shoes 
        </h1>
        <p className='font-montserrat mt-6 mb-14 sm:max-w-sm text-slate-gray'>
          Discover stylish Nike arrivals quality confort innovation for you
        </p>
        <Button label="Shop Now" imageUrl={arrowRight}/>
      
      <div className='flex justify-start items-start w-full flex-wrap mt-20 gap-16'>
        {statistics.map((item) =>(
            <div key={item.label}>
              <p className='text-4xl font-bold font-palanquin'>{item.value}</p>
              <p className=' leading-7 text-slate-gray'>{item.label}</p>
            </div>

        ))}
      </div>

      </div>

      <div className="relative justify-center flex-1 flex  items-center
       xl:min-h-screen max-xl:py-40 bg-primary  bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe1" width={610} height={500} className="relative object-contain z-10"></img>
      
        <div className='flex justify-center absolute gap-6 -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((shoe) =>(

          <div key={shoe}>
            <ShoeCard imgURL={shoe}
              changeBigShoeImage={(shoe) =>setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}/>
            </div>
        )

        )}</div>
      
      </div>




    </section>
    
  )
}

export default Hero