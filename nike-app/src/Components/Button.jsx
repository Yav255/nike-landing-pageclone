import React from 'react'

function Button({label,imageUrl}) {
  return (
    <button className='flex jusitfy-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full '>
        {label}
        <img src={imageUrl} alt="arrow" className='w-5 h-5' />
    </button>
  )
}

export default Button