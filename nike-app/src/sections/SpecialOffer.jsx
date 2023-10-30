import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'

function SpecialOffer() {
  return (
    <section className='max-container justify-wrap items-center flex max-xl:flex-col-reverse gap-5'>

    <div className='object-contain w-full'>
      <img src={offer} alt="offer" width={773} height={687}/>
    </div>
    <div className='flex justify-center flex-col'>
     <h1 className='font-palanquin font-bold text-3xl'> Special Offer </h1> 
    <p className='mt-4 info-text break-words'>Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
    <p  className='mt-4 info-text break-words'>
    Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
    </p>
    <div className='flex flex-row gap-2 mt-2'>
    <Button label="Shop Now" imageUrl={arrowRight} ></Button>
   <button className='border-2 rounded-full px-7 py-3 font-montserrat'> Learn more </button>
    </div>
      </div>
    </section>
  )
}

export default SpecialOffer