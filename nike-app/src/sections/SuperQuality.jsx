import React from 'react'
import { star } from '../assets/icons'
import { bigShoe1, shoe4, shoe8 } from '../assets/images'
import Button from '../Components/Button'

function SuperQuality() {
  return (
    <div className='flex justify-between items-center max-lg:flex-col gap-10
     w-full max-container'>
      <div className='flex flex-1 flex-col'>
      <h1 className='text-3xl font-bold'>We Provide You <span className='text-coral-red font-bold '>Super <br/> Quality</span> Shoes</h1>

      <p className='info-text mt-4 lg:max-w-lg'>Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, 
        and are easy to test. </p>
       <p className='info-text mt-4 lg:max-w-lg'> While it's mostly used as a  library.</p>    
      <div>
       <button className='font-montserrat bg-coral-red mt-4 p-4 leading-none rounded-full text-white lg:'>View Details</button>
      </div>
      </div>

       <div className='flex justify-center items-center'>

        <img src={shoe8} alt="shoe"  width={500} height={500}/>
       </div>
    </div>
  )
}

export default SuperQuality