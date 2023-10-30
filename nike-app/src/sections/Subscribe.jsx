import React from 'react'

function Subscribe() {
  return (
    <div className='max-container flex justify-between items-center 
    max-lg:flex-col gap-10'>
     <h1 className='font-bold text-3xl lg:max-w-md'> Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter </h1>
      
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col
      gap-3 p-2.5 rounded-full'>
      <input placeholder='abc@gmail.com' className='rounded-3xl border-2 border-slate-gray md:w-full p-2' />
      
      <button className='bg-coral-red text-white font-montserrat w-40 p-2  rounded-2xl'>Sign Up</button>
      </div>
    </div>
  )
}

export default Subscribe