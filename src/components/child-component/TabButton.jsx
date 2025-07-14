import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import CourseAccordion from "./CourseAccordion";
import { courseacordion } from "../../assets/common/courseacordion.js";

const TabButton = () => {
  const [activeTab, setActiveTab] = useState("About");


  
  
  
   
  return (
    <div className="my-10">
      {/* Tabs */}
      <div className="tabbutton flex">
        <div
          onClick={() => setActiveTab("About")}
          className={`px-4 py-2 ${
            activeTab === "About" ? "active-btn" : "job-btn"
          }`}
        >
          About
        </div>
        <div
          onClick={() => setActiveTab("Courses")}
          className={`px-4 py-2 ${
            activeTab === "Courses" ? "active-btn" : "job-btn"
          }`}
        >
          Courses
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-5">
        {activeTab === "About" && (
          <div>
            <h3 className="office text-left mb-3">
              <span className="relative">
                Cour
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
              se Overview
            </h3>
            <p>
              This 3-month program introduces young learners (ages 5-7) to basic
              arithmetic operations, number visualization, and mental
              calculation using the Abacus. The course follows a structured,
              module-based approach to ensure step-by-step learning and concept
              retention.
            </p>

            <h3 className="office text-left mb-3">
              <span className="relative">
                What
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
              Will You Learn in This Course?
            </h3>
            <ul className="space-y-2 my-5">
              <li className="flex gap-3 items-center">
                <GoDotFill /> Understanding Abacus Structure & Bead Movements
              </li>
              <li className="flex gap-3 items-center">
                <GoDotFill /> 125 Lecture
              </li>
              <li className="flex gap-3 items-center">
                <GoDotFill /> Learning Single-Digit Addition & Subtraction
              </li>
              <li className="flex gap-3 items-center">
                <GoDotFill /> Introduction to Mental Math Techniques
              </li>
              <li className="flex gap-3 items-center">
                <GoDotFill /> Engaging in Fun Math Challenges & Speed Tests
              </li>
            </ul>

            <h3 className="office text-left mb-3">
              <span className="relative">
                Skills
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span>
              </span>
              You Will Gain
            </h3>
            <ul className="space-x-2  flex flex-wrap gap-3 items-center">
              <li className="skill-lists">
                Number visualization & quick calculations
              </li>
              <li className="skill-lists">
                Basic mental math techniques
              </li>
              <li className="skill-lists">
                Logical thinking & problem-solving
              </li>
              <li className="skill-lists">
                Hand-mind coordination
              </li>
            </ul>
          </div>
        )}

        {activeTab === "Courses" && <div>
          
                     
          <CourseAccordion
          category={courseacordion}/>         
          </div>}
      </div>
    </div>
  );
};

export default TabButton;
