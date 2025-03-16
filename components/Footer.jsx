import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    // <div className='mt-20'>
    //   <div className='text-center'>
    //     <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

    //     <div className='w-max flex items-center gap-2 mx-auto'>
    //         <Image src={isDarkMode ? assets.contact_Dark_mode : assets.contact_icon} alt='' className='w-6'/>
    //         <a 
    //             href="tel:+918652256889" 
    //             className="hover:text-blue-600 transition-colors"
    //             aria-label="Call via phone app"
    //         >
    //             +91 8652256889
    //         </a>
    //     </div>
    //   </div>
     
    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[9%] py-2'>
        <p>© 2025 GreatStack. All rights reserved.</p>
        {/* <div className='grid grid-cols-2 items-center pr-16 gap-2'>
         <a 
             href="tel:+918652256889" 
             className="hover:text-blue-600 transition-colors"
             aria-label="Call via phone app"
         >
         <Image src={isDarkMode ? assets.contact_Dark_mode : assets.contact_icon} alt='' className='w-8 justify-self-end'/>
         </a>
     </div> */}

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            {/* <li><a target='_blank' href="https://instagram.com/greatstackdev">GitHub</a></li>
            <li><a target='_blank' href="https://instagram.com/greatstackdev">LinkedIn</a></li>
            <li><a target='_blank' href="https://instagram.com/greatstackdev">Twitter</a></li> */}
            <li>
            <a 
             href="tel:+918652256889" 
             className="hover:text-blue-600 transition-colors"
             aria-label="Call via phone app"
         >
         <Image src={isDarkMode ? assets.contact_Dark_mode : assets.contact_icon} alt='' className='w-8 justify-self-end'/>
         </a>
            </li>
             <li> <a target='_blank' href="https://instagram.com/greatstackdev"><Image
              src={isDarkMode?assets.githubDarkIcon: assets.githubIcon} // Replace with your email icon path
              alt="GitHub Icon"
              className="w-8 h-8 bg-gray-50"
            /></a></li>
             <li> <a target='_blank' href="https://instagram.com/greatstackdev"><Image
              src={assets.linkedinIcon} // Replace with your email icon path
              alt="Linkedin Icon"
              className="w-8 h-8"
            /></a></li>
             <li> <a target='_blank' href="https://instagram.com/greatstackdev"><Image
              src={assets.gmailIcon} // Replace with your email icon path
              alt="Email Icon"
              className="w-8 h-8"
            /></a></li>
        </ul>
    </div>


    
    
    
  )
}

export default Footer
