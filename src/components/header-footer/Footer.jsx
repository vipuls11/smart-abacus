import React from 'react'
import { imageUrl,imageIos } from '../../assets/common/config'
import { NavLink } from 'react-router-dom'
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume,} from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
   <div className='bg-[var(--footer-bg-color)] p-14'>
    <div className='lg:flex flex-row gap-5 pb-2 border-b border-[var(--black-color)]'> 
     <div>
        <div>
        <img src={imageUrl || null} alt="Example"  className=''/>
       </div>
       <div>
        <ul className='space-y-3 text-left'>
          <li><i className='font-sans'>“Empowering young minds with the power of Abacus learning and mental math.”</i></li>
           <li><a href="mailto:smartabacus976@gmail.com" className='flex items-center gap-1'><span><IoMailOutline /></span>smartabacus976@gmail.com</a></li>
            <li className='flex gap-1 items-center'><a href="tel:+91 9004401809" className="flex items-center gap-1"><span><FaPhoneVolume/></span>+ 91 9004401809</a> | <a href="tel:+91 8767534883" className="flex items-center gap-1"><span><FaPhoneVolume/></span>+ 91 8767534883</a> </li>
        </ul>
       </div>
     </div>
    <div>
      <h3 className='text-black relative text-left font-semibold text-nowrap mb-5'>
        Quick Links
          <span className='h-0.5 w-1/2 bg-[var(--secondary-color)] absolute bottom-0 left-0'></span>
      </h3>
       <ul className='text-black text-left space-y-3'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/achievements" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Achievements</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Contact Us</NavLink>
                    </li>
                </ul>
    </div>
    <div>
      <h3 className='text-black relative text-left font-semibold mb-5'>
        Courses
          <span className='h-0.5 w-1/4 bg-[var(--secondary-color)] absolute bottom-0 left-0'></span>
      </h3>
       <ul className='text-black text-left space-y-3'>
                    <li>
                        <NavLink to="/foundation-course" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Foundation Course</NavLink>
                    </li>
                    <li>
                        <NavLink to="/speed-accuracy-booster" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Speed & Accuracy Booster</NavLink>
                    </li>
                    <li>
                        <NavLink to="/advanced-booster" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Advanced Booster</NavLink>
                    </li>
                    <li>
                        <NavLink to="/competition-olympiad-training" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Competition & Olympiad Training</NavLink>
                    </li>
                </ul>
    </div>
    <div>
      <h3 className='text-black relative text-left font-semibold mb-5'>
        Branches
          <span className='h-0.5 w-1/4 bg-[var(--secondary-color)] absolute bottom-0 left-0'></span>
      </h3>
       <ul className='text-black text-left space-y-3'>
                    <li>
                       <address className='leading-6'>
                        <b>Mumbai : </b> Smart Abacus, Near Shashwat Park 2,Badlapur - 421503
                       </address>
                    </li>
                    <li>
                        <address className='leading-6'>
                        <b>Mumbai : </b> Smart Abacus, Near Shashwat Park 2,Badlapur - 421503
                       </address>
                    </li>
                    <li>
                         <address className='leading-6'>
                        <b>Mumbai : </b> Smart Abacus, Near Shashwat Park 2,Badlapur - 421503
                       </address>
                    </li>
                </ul>
    </div>
    <div className='flex items-center'>
       <div className='text-center items-center flex-col flex '>   
        <img src={imageIos || null} alt="Example"  className='mb-4'/>
        <p className='font-sans'>“Empowering young minds with the power of Abacus learning and mental math.”</p>      
     </div>
    </div>
    </div>
    <div>
      <ul className='lg:flex md:flex flex-row items-center justify-between py-2'>
        <li>© {currentYear} Smart Abacus. All Rights Reserved.</li>
        <li><a href="http://">Privacy Policy</a> | <a href="http://">Terms & Conditions</a></li>
      </ul>
    </div>
   </div>
   </footer>
  )
}

export default Footer