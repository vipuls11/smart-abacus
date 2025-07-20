import React, { useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import '../../css/Slider.css'
import testimonial from '../../assets/common/testimonial';
import { imageQuotes } from '../../assets/common/config';

const Slider = () => {
    const [people, setPeople] = useState(testimonial);
    const [index, setIndex] = useState(0)

    // Function to go to the next slide
    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % people.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
    };

    return (
        
                <div className="section-center">
                    {
                        people.map((person, personindex) => {
                            const { id, name, feedback } = person;

                            let position = 'nextSlide';
                            if (personindex === index) {
                                position = 'activeSlide';
                            }
                            if (personindex === index - 1 || (index === 0 && personindex === people.length - 1)) {
                                position = 'lastSlide';
                            }

                            return (
                                <article key={id} className={`${position} bg-[var(--footer-bg-color)] p-5`}>
                                    <img src={imageQuotes} alt="Quotes" />
                                    <p className='quotes text-[var(--primary-color)]'>{feedback}</p>
                                     <div className='flex items-start justify-between ml-2 mt-7'>
                    <h3 className='title title-content'>{name}</h3>
                     <div className='flex gap-3'>
                        <button className="next border bottom-1 border-black" onClick={nextSlide}>
                        <IoIosArrowRoundBack className='icon' />
                    </button>
                    <button className="prev border bottom-1 border-black" onClick={prevSlide}>
                        <IoIosArrowRoundForward className='icon' />
                    </button>
                     </div>
                   </div>
                    </article>
                            )
                        })
                    }
                  
                </div>
      
    )
}

export default Slider;