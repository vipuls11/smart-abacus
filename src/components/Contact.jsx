import React from 'react'
import { conactBG } from '../assets/common/config'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import CustomButton from './child-component/CustomButton';

const Contact = () => {
  return (
    <div>
      <div className=''>
      <ul className='text-black inline-flex text-left items-center gap-5  py-3 w-full lg:px-14 px-5'>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                    <IoIosArrowForward />
                    </li>
                    <li>
                        <NavLink to="/contact" >Contact</NavLink>
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

            <p className='my-5'>At <strong>Smart Abacus</strong>, we take immense pride in our students' outstanding accomplishments in <strong>national and international</strong> abacus <strong>competitions</strong>. Their dedication, hard work, and passion for <strong>mental math</strong> have led them to secure top positions in prestigious tournaments, making us a leading institution in abacus <strong>education</strong>.</p>
       </div>
       <div>
         <img src={conactBG} alt="Contact"  className='contact-bg'/>
       </div>
       </div>
      </section>

      <section>
              <div className="grid lg:grid-cols-2 gap-5 lg:px-14 px-5 text-left mb-10">
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
                <div className="contact-main">
                  <h5 className='contact-us'>Let's talk with us</h5>
                  <form action="">
                    <div className='grid grid-cols-2 gap-5 mb-3'>
                    <input type="text" placeholder='First Name'  className='contact-input'/>
                    <input type="text" placeholder='Last Name'  className='contact-input'/>
                    </div>
                    <div className='mb-3'>
                    <input type="email" placeholder='Email'  className='contact-input'/>
                    </div>
                      <div className='mb-3'>
                      <input type="text" placeholder='Phone Number'  className='contact-input'/>
                      </div>
                      <div className='mb-3'>                     
                      <textarea name="" id="" cols="30" rows="5" className='contact-input'></textarea>
                      </div>
                      <CustomButton label="Submit" color='--primary-color' width="100%"/>
                  </form>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Contact