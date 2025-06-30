import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume, FaLink } from "react-icons/fa6";

// import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
    <nav className='bg-[var(--primary-color)] px-4 py-2'>
        <ul className="flex justify-self-end gap-2 text-[var(--White)] flex-wrap">
            <li><a href="mailto:info@smartabacus.com" className='flex items-center gap-1'><span className='text-[var(--secondary-color)]'><IoMailOutline /></span>info@smartabacus.com</a></li>
            <li><a href="tel:+91 9919876543" className="flex items-center gap-1"><span className='text-[var(--secondary-color)]'><FaPhoneVolume/></span>+91 9919876543</a></li>
            <li className='relative flex items-center gap-1 group'><span className='text-[var(--secondary-color)]'><FaLink/></span>Quick Links
               <div className='absolute top-6 left-0 sm:left-auto sm:right-0 hidden group-hover:block bg-black w-24  lg:w-40 rounded-lg drop-shadow-xl'>
                 <ul className='w-full text-left  p-3'>
                    <li className='hover:text-gray-400'><a href="">a</a></li>
                    <li className='hover:text-gray-400'>Free Trail Class</li>
                    <li className='hover:text-gray-400'>Contact Us</li>
                </ul>
               </div>
                </li>
        </ul>
       
    </nav>
    </>
  )
} 

export default Header