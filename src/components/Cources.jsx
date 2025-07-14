import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import CustomButton from "./child-component/CustomButton";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuTv } from "react-icons/lu";
import { IoMdStopwatch } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuVolume2 } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import TabButton from "./child-component/TabButton";
import { RiCheckDoubleLine } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";

const Cources = () => {
  return (
    <div>
      <div className="">
        <ul className="text-black inline-flex text-left items-center gap-5  py-3 w-full lg:px-14 px-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <IoIosArrowForward />
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <IoIosArrowForward />
          </li>
          <li>
            <NavLink to="">Beginner Level</NavLink>
          </li>
        </ul>
      </div>

      <section>
        <div className="py-10 lg:px-14 px-5 text-left">
          <div>
            <h3 className="heading_details">Beginner Abacus Course</h3>
            <p className="my-3 text-sm">
              Unlock the Power of Numbers with Fun & Interactive Abacus
              Learning!
            </p>
          </div>
          <div className="grid lg:grid-cols-3  grid-cols-1 gap-10">
            <div className="col-span-2">
              <video className="rounded-lg" controls autoPlay>
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div>
                <TabButton/> 
              </div>
            </div>
            <div>

         
            <div className="course-vedio-details ">
              <div>
               <div className="flex">
               <h3 className="contact-us flex gap-3 items-center"><FaIndianRupeeSign /> 3999</h3>
               <span></span>
               </div>
                <CustomButton label="Submit" color="--primary-color"  colortext=" --White" width="100%"/>
                <CustomButton label="Wishlist" border="--primary-color" width="100%" colortext="--primary-color"/>

                <ul className="space-y-4 my-5">
                  <li className="flex gap-3 items-center"><TbNotes /> 5 Module</li>
                  <li className="flex gap-3 items-center"><LuTv /> 125 Lecture</li>
                  <li className="flex gap-3 items-center"><IoMdStopwatch /> 20h 30m Total lenghts</li>
                  <li className="flex gap-3 items-center"><LiaCertificateSolid /> Certification provided</li>
                  <li className="flex gap-3 items-center"><LuVolume2 /> English</li>
                </ul>
              </div>
            </div>
            <div className="course-vedio-details my-10">
              <div>
              <h3 className="office text-left mb-3">
              <span className="relative">
              What
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
               You Will Achieve?
            </h3>

                <ul className="space-y-4 my-5">
                  <li className="flex gap-3 items-center"><RiCheckDoubleLine /> Confidence in basic arithmetic calculations</li>
                  <li className="flex gap-3 items-center"><RiCheckDoubleLine /> Improved hand-eye coordination & concentration</li>
                  <li className="flex gap-3 items-center"><RiCheckDoubleLine /> Faster number recognition & problem-solving skills</li>
                  <li className="flex gap-3 items-center"><RiCheckDoubleLine /> Mental visualization of numbers without an abacus</li>
                  <li className="flex gap-3 items-center"><RiCheckDoubleLine /> A strong foundation for advanced abacus learning</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          
          <section>
            <div className="grid grid-cols-2 bg-[var(--primary-color)] h-40 items-center p-10 w-full place-content-center">
                <div>
                <h3 className="heading_details text-center" style={{color:'var(--secondary-color)'}}>
              <span className="relative">
              Boo
                <span className="absolute -bottom-3  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
               
              </span>
              k a Free Trial Class
            </h3>
                </div>
                <div className="text-center grid justify-items-center">
                  <p className="text-white mb-3">Experience the power of Abacus learning before enrolling!</p>
                  <a href="" className="text-white bg-[var(--secondary-color)] flex gap-1 p-2 items-center w-fit"><HiOutlineLink /> Book Your Free Trial Now</a>
                </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Cources;
