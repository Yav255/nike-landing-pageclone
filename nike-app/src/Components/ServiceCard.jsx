import React from 'react'

function ServiceCard({imgURL,label,subtext}) {
  return (
    <div className='flex-1 sm:w-[350px]
    sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10'>
      
      <div className='w-11 h-11 justify-center flex bg-coral-red rounded-full'>
      <img src={imgURL} alt="services" width={20} height={20}/>
      </div>
      <h3 className='mt-5 font-palanquin font-bold text-3xl leading-normal'>{label}</h3>
      <p className='mt-3 break-words text-slate-gray'>{subtext}</p>
      </div>
  )
}

export default ServiceCard