import React from 'react'
import { star } from '../assets/icons'
import { customer1 } from '../assets/images'

function ReviewCard({feedback,img,name}) {
  return (
 <div className=" flex flex-col justify-center items-center"> 
    <img src={img} width={100} height={200} className='object-cover rounded-full'/>
    <p className="info-text mt-6 max-w-sm text-center">{feedback} </p>     
    
    <div className='flex gap-3'>
    <img src={star} width={20} height={20}/>
    <span className='info-text'>(4.5)</span> 
    </div>

    <h1 className='font-bold font-palanquin text-2xl'>{name}</h1>
    
  </div>
  )
}

export default ReviewCard 