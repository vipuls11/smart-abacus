import React from 'react';
import Slider from "react-slick";
import { Instruction } from '../../assets/common/instruction';

const CardSlider = () => {
  const settings = {
    dots: true,
    arrows: false, // Removes left/right arrows
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Instruction.map((courses) => {
          const { id, image, name, course } = courses;
          return (
            <div key={id} className="course_level">
              <img src={image || ''} alt={name} className="w-full" />
              <div className="courseStyle course-clip-container opacity-90">
                <span className="courcseStip"></span>
              </div>
              <div className="course_div group absolute bottom-0 py-5 right-0 w-full h-full grid place-content-end px-4 place-items-end">
                <h2 className="course_heading" title={name}>
                  {name}
                </h2>
                <p className="course-info text-[var(--White)]">{course}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardSlider;
