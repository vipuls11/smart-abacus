import React from "react";
import Banner from "./child-component/Banner";
import { imageChildgame, imageGame, imageGirl, imagePaperplan } from "../assets/common/config";
import { OurCources } from "../assets/common/ourcourses";
import CustomButton from "./child-component/CustomButton";
import { benifit } from "../assets/common/benifit";
import { Instruction } from "../assets/common/instruction";
import Slider from "./child-component/Slider";
import FAQ from "./child-component/FAQ";


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
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          {
            OurCources.map((courses, index)=>{
              const {id,image,dotimg,coursename, course, text, btn} = courses
              return(
                 <div className="course_level" key={id}>
          <img src={image || null} alt={coursename} className="w-full" />
          <div className="courseStyle course-clip-container opacity-90">
            <span className="courcseStip"></span>
          </div>
          <div className="course_div group absolute bottom-0 py-5 right-0 w-full h-full grid place-content-end px-4 place-items-end">
                 <img src={dotimg || null} alt="Dots"  />
          <h2 className="course_heading" title={coursename}>{coursename}</h2>
         <div className="group-hover:block hidden w-60 text-left">
           <h4 className="para-text text-[var(--White)]">{course}</h4>
          <p className="course-info text-[var(--White)]">{text}</p>
          <a href="#"><CustomButton color='--secondary-color' label={btn} /></a>
         </div>
          </div>
         
        </div>
              )
            })
          }
       
        </div>
        </div>
      </section>

        <section >
        <div className="py-10 lg:px-14 px-5 bg-[var(--footer-bg-color)]">
        <div>
           <h3 className="heading_details text-center">
            Benefit<span className="relative">
               s of<span className="absolute -bottom-1  left-0 h-1 w-1/4 bg-[var(--secondary-color)]"></span> Abacus 
                 
              </span>
            </h3>
            <p className="my-5 text-sm">
              Unlock faster <strong>calculations, sharper memory, and unstoppable confidence</strong> with the power of Japanese Abacus. A fun and <br /> proven way to <strong>boost</strong> academic <strong>success</strong>!
            </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
          {
            benifit.map((benifits, index)=>{
              const {id,image,text} = benifits
              return(
              <div className="group" key={id}>
  <div className="bg-[var(--secondary-color)] text-[var(--primary-color)] group-hover:text-[var(--White)] group-hover:bg-[var(--primary-color)] p-10 h-60 text-center flex flex-col items-center justify-center">
    <img src={image || null} alt={text} className="" />
    <h3 className="beifit-text mt-5">{text}</h3>
  </div>
</div>
              )
            })
          }
       
        </div>
        </div>
      </section>

           <section >
        <div className="py-10 lg:px-14 px-5">
        <div>
           <h3 className="heading_details text-center">
            Meet Our Exipe<span className="relative">rt Aba
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span> 
              </span>cus Instructors!
              
            </h3>
            <p className="my-5 text-sm">
           Our <strong>experienced and certified</strong> abacus teachers are dedicated to nurturing young <strong>minds</strong>, enhancing mental math <strong>skills</strong>, <br /> and making <strong>learning</strong> fun and <strong>interactive</strong>.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          {
            Instruction.map((courses, index)=>{
              const {id,image, name, course } = courses
              return(
                 <div className="course_level" key={id}>
          <img src={image || null} alt={name} className="w-full" />
          <div className="courseStyle course-clip-container opacity-90">
            <span className="courcseStip"></span>
          </div>
          <div className="course_div group absolute bottom-0 py-5 right-0 w-full h-full grid place-content-end px-4 place-items-end">
          <h2 className="course_heading" title={name}>{name}</h2>
          <p className="course-info  text-[var(--White)]">{course}</p>
          </div>
         
        </div>
              )
            })
          }
       
        </div>
        </div>
      </section>

      <section className="py-10 lg:px-14 px-5 relative">
        <img src={imageChildgame} alt="Child Game" className="absolute left-14 top-32"/>
        <img src={imagePaperplan} alt="Paper Plan" className="absolute right-0 top-28"/>
      <div>
           <h3 className="heading_details text-center ">
           What Parents & Stude 
             <span className="relative">
             nts Say
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span> 
              </span> About Smart Abacus!
             
            </h3>
            <p className="my-5 text-sm">
            Our students and parents <strong>love</strong> the <strong>transformational</strong> impact of Abacus <strong>learning</strong>! From faster calculations to better <strong>focus</strong> <br />and <strong>confidence</strong>, hear how Smart Abacus is shaping <strong>young minds</strong> for <strong>success</strong>.
            </p>
        </div>
        <Slider/>
      </section>

      <section className="p-10 lg:p-14  relative">
        <FAQ/>
      </section>
    </div>
  );
};

export default Home;
