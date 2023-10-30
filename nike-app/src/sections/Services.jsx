import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import { services } from '../constants'

function Services() {
  return (
    <section className='max-container flex justify-center gap-9 flex-wrap'>
      {services.map((service) =>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services