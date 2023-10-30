import React from 'react'
import { footerLogo, headerLogo } from '../assets/images'
import { socialMedia ,footerLinks} from '../constants'

function Footer() {
  return (
    <footer className='max-container'>
    <div className='justify-between items-start flex flex-wrap max-lg:flex-col gap-20 max-lg:gap-10' >
       
       <div className='flex flex-col items-start'>
       <a href='/'>
                 <img src={footerLogo} alt="Logo" width={150} height={50}/>
       </a>
       
       <p className='text-white  text-base font-montserrat break-words mt-6 leading-7 sm:max-w-sm'>
        Get shoes ready for the new term at your nearest Nike store.
       </p>

       <div className='flex items-center gap-3 mt-10'>
          {
            socialMedia.map((sm) =>(
              <img src={sm.src} alt={sm.alt} width={30} height={20} className='bg-white rounded-full p-2'/>
            ))
          }
        </div>
        </div>
       
        
      
      <div className='flex flex-1 flex-wrap justify-evenly  lg:gap-10 gap-20'>
        
        {footerLinks.map((fl) =>(
          <div >
           <h1 className='text-white mt-10 lg:mt-5 lg:gap-10 gap-20 text-xl font-montserrat font-medium'>{fl.title}</h1>
          {fl.links.map((link) => (
            <ul>
            <li className='mt-3 text-base leading-normal text-white-400 hover:text-slate-gray'>{link.name}</li>
            </ul>
           ))}
          </div>
          
        ))}
      </div>
    
    </div>
    </footer>
  )
}

export default Footer