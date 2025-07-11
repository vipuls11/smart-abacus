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
          <div className="grid lg:grid-cols-3  grid-cols-1 gap-3">
            <div className="col-span-2">
              <video className="h-full w-full rounded-lg" controls autoPlay>
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="course-vedio-details">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cources;
