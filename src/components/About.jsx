import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { conactBG, imageGame, imageGirl } from '../assets/common/config'
import { RiCheckDoubleLine } from 'react-icons/ri'
import CardSlider from './child-component/CardSlider'

const About = () => {
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
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <section>
        <div className="flex justify-between py-10 lg:pl-14 lg:px-0 px-5">
          <div className="text-left">
            <h2 className="contact_details text-left ">
            Welcome to Smart Abacus
            </h2>
            <h3 className="contactheading_details text-left ">
              <span className="relative">
              Abo
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
              ut US
            </h3>

            <p className="my-5">
            At <strong>Smart</strong> Abacus, we transform traditional math learning into an engaging, fun, and interactive <strong>experience</strong>. With expert-led classes, we help children <strong>boost mental</strong> calculation, improve focus, and <strong>gain confidence</strong> in mathematics.
            </p>
          </div>
          <div>
            <img src={conactBG} alt="Contact" className='contact-bg'/>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:flex md:flex  relative py-20 lg:px-14 px-5 bg-[var(--footer-bg-color)] gap-10">
          <img
            src={imageGame || null}
            alt="Example"
            className="absolute bottom-0 right-0 rotate-180 w-[180px]"
          />
          <div className="text-left z-10 order-2 w-[95%]">
            <h3 className="heading_details mb-5">
              <span className="relative">
              Who W
                <span className="absolute -bottom-1  left-0 h-1 w-1/4 bg-[var(--secondary-color)]"></span>
              </span>
              e Are – Smart Abacus
            </h3>
            <p className="para-text">
            At Smart Abacus, we are committed to making learning math fun, engaging, and highly effective for young minds. We specialize in online Abacus training, helping children develop faster calculation skills, improved concentration, and strong analytical thinking. Our ISO 9001:2015 certification ensures that we follow the highest standards of education and teaching methodologies.
            </p> <br />
            <p>
With a well-structured Abacus curriculum, we aim to strengthen the brain’s cognitive functions by activating both hemispheres through visualization and mental math techniques. We provide a step-by-step learning approach, ensuring that every student progresses at their own pace while enjoying the process.
            </p> <br />
            <p>
            Join us in shaping the future of young learners by giving them a head start in math and beyond! 🚀
            </p>
          </div>
          <div className="order-1" style={{ width: "100%" }}>
            <img src={imageGirl || null} alt="Example" className="w-full" />
          </div>
        </div>
      </section>

      <section>
        <div className="lg:flex md:flex  py-10 lg:px-14 px-5 gap-10 justify-center">
         
          <div className=" z-10 ">
            <h3 className="heading_details mb-5">
            O
              <span className="relative">
              ur Visi
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
              on
            </h3>
            <p className="para-text">
            Our vision at Smart Abacus is to be a global leader in Abacus education, fostering a new generation of math champions, critical thinkers, and problem solvers. We aspire to create a worldwide community of young learners who are confident in tackling complex mathematical challenges through mental calculation and logical reasoning skills.
            </p>
          </div>
          <div className="" >
          <h3 className="heading_details mb-5">
            Ou
              <span className="relative">
              r Missi
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
               on
            </h3>
            <p className="para-text">
            At Smart Abacus, our mission is to empower young minds with the power of Abacus learning, mental arithmetic, and cognitive development. We strive to provide high-quality, structured, and engaging online Abacus training that helps children improve their problem-solving skills, logical thinking, and confidence in mathematics.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:flex md:flex  relative py-20 lg:px-14 px-5 bg-[var(--footer-bg-color)] gap-10">

          <div className="text-left z-10  w-[95%]">
            <h3 className="heading_details mb-5">
              <span className="relative">
              Why
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
                 Choose Smart Abacus?
            </h3>
           <ul className="space-y-4 my-5">
                             <li className="flex gap-1 flex-wrap items-center"><RiCheckDoubleLine /> <b>Certified & Experienced Instructors – </b> Every teacher is professionally trained to ensure the best learning experience.</li>
                             <li className="flex gap-1 items-center flex-wrap"><RiCheckDoubleLine /> <b>Structured Abacus Curriculum – </b> A step-by-step approach for every age group, ensuring effective learning.</li>
                             <li className="flex gap-1 items-center flex-wrap"><RiCheckDoubleLine /> <b>Gamified Learning Approach –</b> Engaging activities and challenges to keep kids motivated.</li>
                             <li className="flex gap-1 items-center flex-wrap"><RiCheckDoubleLine /> <b>Proven Benefits –</b> Boosts concentration, problem-solving ability, confidence, and IQ.</li>
                             <li className="flex gap-1 items-center flex-wrap"><RiCheckDoubleLine /> <b>Recognized Nationally & Internationally –</b> Our students win top positions in national & global Abacus competitions.</li>
                           </ul>
          </div>
          <div className="" style={{ width: "100%" }}>
            <img src={imageGirl || null} alt="Example" className="w-full" />
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 lg:px-14 px-5">
        <div>
            <h3 className="heading_details text-center">
              Meet Our Exipe
              <span className="relative">
                rt Aba
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
              cus Instructors!
            </h3>
            <p className="my-5 text-sm">
              Our <strong>experienced and certified</strong> abacus teachers are
              dedicated to nurturing young <strong>minds</strong>, enhancing
              mental math <strong>skills</strong>, <br /> and making{" "}
              <strong>learning</strong> fun and <strong>interactive</strong>.
            </p>
          </div>
        <CardSlider/>
        </div>
      </section>
    </div>
  )
}

export default About