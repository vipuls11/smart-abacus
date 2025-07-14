import React, { useState } from 'react';
import '../../css/Accordion.css';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const CourseAccordion = ({ category }) => {
 const [selected, setSelected] = useState(null);
 
   const toggle = (i) => {
     setSelected(selected === i ? null : i);
   };
 
   if (!category || category.length === 0) {
     return <p>No FAQs available.</p>;
   }
 
   return (
   
       <div className="accordion">
         {category.map((item, i) => (
           <div key={item.id} className='item' >
             <div className={`title ${selected === i ? 'active' : ''}`} onClick={() => toggle(i)}>
               <h2 className='flex gap-2 items-center'><span>{selected === i ? <IoMdArrowDropup /> :  <IoMdArrowDropdown />}</span> {item.Question}</h2>
               <p className='timing'>{item.time}</p>
             </div>
             <div className={selected === i ? 'content show' : 'content'}>
               <p className='content-para'>{item.Answer}</p>
             </div>
           </div>
         ))}
       </div>
    
   );
}

export default CourseAccordion