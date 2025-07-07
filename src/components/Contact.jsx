import React from 'react'
import { conactBG } from '../assets/common/config'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className=''>
      <ul className='text-black inline-flex text-left items-center gap-5  py-3 lg:w-[70%] m-auto lg:px-0 px-5'>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                    <IoIosArrowForward />
                    </li>
                    <li>
                        <NavLink to="/achievements" >Achievement</NavLink>
                    </li>
                   
                </ul>
      </div>
      <section>
       <div className="flex justify-between py-10 lg:pl-14 lg:px-0 px-5">
       <div className='text-left'>
       
       <h2 className="contact_details text-left ">
       Get in Touch with Smart Abacus        
            </h2>
       <h3 className="contactheading_details text-left ">
           
             <span className="relative">
             Con
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span> 
              </span> 
              tact Us
            </h3>

            <p className='my-5'>Have <strong>questions</strong> about our courses or want to <strong>experience</strong> the power of Smart Abacus? We’re here to assist <br /> you! Whether you need information about our programs, want to enroll your child, or book a <strong>free trial</strong> <br /> class, feel free to <strong>reach out</strong> to us. Our team is always <strong>ready to guide</strong> you on your learning journey.</p>
       </div>
       <div>
         <img src={conactBG} alt="Contact"  />
       </div>
       </div>
      </section>

      <section>
              <div className="flex lg:px-14 px-5 text-left">
                <div>
                <div>
                  <h3 className="office">
                   
                    <span className="relative">
                    Head
                      <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
                    </span>
                    Office
                  </h3>
                  <ul className='office-details space-y-2 my-5'>
                    <li className='office-details-li'><PiBuildingOfficeBold /> Smart Abacus Learning Center</li>
                    <li className='office-details-li'><SlLocationPin /> Smart Abacus, Near Shashwat Park 2,Badlapur - 421503</li>
                    <li className='office-details-li'><MdOutlinePhone /> +91 9919876543</li>
                    <li className='office-details-li'><MdOutlineMail /> info@smartabacus.com</li>
                  </ul>
                 
                </div>
                <div>
                  <h3 className="office">
                   
                    <span className="relative pr-2">
                   Our 
                      <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
                    </span>
                    Branches
                  </h3>
                  <ul className='office-details space-y-2 my-5'>
                    <li className='office-details-li'><PiBuildingOfficeBold /> <address><strong>Pune</strong>: Smart Abacus, Near Shashwat Park 2,Badlapur - 421503</address></li>
                    <li className='office-details-li'><PiBuildingOfficeBold /> <address><strong>Nashik </strong>: Smart Abacus, Near Shashwat Park 2,Badlapur - 421503</address></li>
                  </ul>
                </div>
                </div>
                <div className="">
                  <form action="">
                    <label htmlFor="" className='text-5xl font-extrabold'>Contact Us</label>
                  </form>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Contact