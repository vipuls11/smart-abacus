import React from "react";
import Banner from "./child-component/Banner";
import { imageGame, imageGirl } from "../assets/common/config";
import { OurCources } from "../assets/common/ourcourses";


const Home = () => {
  return (
    <div>
      <section className="-mt-[80px]">
        <Banner />
      </section>

      <section>
        <div className="lg:flex md:flex  relative py-10 lg:px-14 px-5 bg-[var(--footer-bg-color)] gap-3">
          <img
            src={imageGame || null}
            alt="Example"
            className="absolute bottom-0 left-0 w-[180px]"
          />
          <div className="text-left z-10">
            <h5 className="heading_content text-[var(--secondary-color)]">
              Why Choose Smart Abacus
            </h5>
            <h3 className="heading_details">
              Unlock Your Child’s Full <br />{" "}
              <span className="relative">
                Potential{" "}
                <span className="absolute -bottom-1  left-0 h-1 w-1/4 bg-[var(--secondary-color)]"></span>
              </span>
              with Japanese Abacus!
            </h3>
            <p className="para-text  my-5 w-[90%]">
              Smart Abacus offers expert-led online classes designed to{" "}
              <strong>
                boost memory, <br />
                concentration, and mental calculation speed
              </strong>
              . Our structured curriculum enhances <br />{" "}
              <strong>
                problem-solving skills, logical reasoning, and overall academic
                performance
              </strong>
              . With a scientifically proven approach, we help students develop{" "}
              <strong>faster math skills</strong>, making calculations up to{" "}
              <strong>10 times quicker</strong> than traditional methods.
            </p>
            <i>
              “Give Your Child the Gift of Mental Math –{" "}
              <span className="text-secondarycolor">Enroll Today</span>!”
            </i>
          </div>
          <div className="" style={{ width: "100%" }}>
            <img src={imageGirl || null} alt="Example" className="w-full" />
          </div>
        </div>
      </section>

      <section >
        <div className="py-10 lg:px-14 px-5">
        <div>
           <h3 className="heading_details text-center">
             Our <span className="relative">
                Courses
                <span className="absolute -bottom-1  left-0 h-1 w-2/5 bg-[var(--secondary-color)]"></span>
              </span>
            </h3>
            <p className="my-5 text-sm">
           Smart Abacus <strong>offers</strong> tailored courses to boost <strong>mental calculation, concentration</strong>, and <strong>problem-solving skills</strong>.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 `grid-cols-1">
          {
            OurCources.map((courses, index)=>{
              const {id,image,dotimg,coursename} = courses
              return(
                 <div className="course_level" key={id}>
          <img src={image || null} alt={coursename} className="w-full" />
          <div className="courseStyle course-clip-container opacity-90">
            <span className="courcseStip"></span>
          </div>
          <div className="course_div absolute bottom-0 py-5 right-0 w-full h-48 grid place-content-end px-4 place-items-end">
                 <img src={dotimg || null} alt="Dots"  />
          <h2 className="course_heading" title={coursename}>{coursename}</h2>
          </div>
         
        </div>
              )
            })
          }
       
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
