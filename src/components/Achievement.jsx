import React from "react";
import { conactBG } from "../assets/common/config";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export const Achievement = () => {
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
            <NavLink to="/achievements">Achievement</NavLink>
          </li>
        </ul>
      </div>
      <section>
        <div className="flex justify-between py-10 lg:pl-14 lg:px-0 px-5">
          <div className="text-left">
            <h2 className="contact_details text-left ">
              Celebrating Abacus Excellence!
            </h2>
            <h3 className="contactheading_details text-left ">
              <span className="relative">
                Ou
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
              r Achievements & Events
            </h3>

            <p className="my-5">
              Have <strong>questions</strong> about our courses or want to{" "}
              <strong>experience</strong> the power of Smart Abacus? We’re here
              to assist <br /> you! Whether you need information about our
              programs, want to enroll your child, or book a{" "}
              <strong>free trial</strong> <br /> class, feel free to{" "}
              <strong>reach out</strong> to us. Our team is always{" "}
              <strong>ready to guide</strong> you on your learning journey.
            </p>
          </div>
          <div>
            <img src={conactBG} alt="Contact" />
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 lg:px-14 px-5">
          <div>
            <h3 className="heading_details text-center">
            National-Level A
              <span className="relative">
              bacu
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>s Championships
            </h3>
            <p className="my-5 text-sm">
              Our <strong>students</strong> have consistently excelled in{" "}
              <strong>National-Level</strong> Abacus Championships, securing{" "}
              <strong>top</strong> positions and <br />demonstrating exceptional{" "}
              <strong>speed</strong> and <strong>accuracy</strong> in mental
              math.
            </p>
          </div>
          <div className="grid lg:grid-cols-3  grid-cols-1 gap-3">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <img src="/img/Beginner.jpg" alt="image" className="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 lg:px-14 px-5">
          <div>
            <h3 className="heading_details text-center">
            Internation 
              <span className="relative">
              al Math  
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>  Olympiads
            </h3>
            <p className="my-5 text-sm">
            Smart Abacus students have <strong>proudly</strong> represented our institute on <strong>international</strong> platforms, competing in prestigious Math <br /> <strong>Olympiads</strong>.
            </p>
          </div>
          <div className="grid lg:grid-cols-3  grid-cols-1 gap-3">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <img src="/img/Beginner.jpg" alt="image" className="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
