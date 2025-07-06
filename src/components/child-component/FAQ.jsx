import React, { useState } from 'react'
import { accordion } from '../../assets/common/accordion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Accordion from './Accordion';


const FAQ = () => {
    const [category, setCategory] = useState(accordion.filter(item=>item.course === "General Questions"));
    const [activeBtn, setActiveBtn] = useState('General Questions'); // State to track active button
    // const uniqueNumbers = [...new Set(dataList)];

    
    // Create a new Set to track unique `id` values
    const seenIds = new Set();
    
    // Filter the array to only keep objects with unique `id`
    const uniqueArr = accordion.filter(item => {
        if (!seenIds.has(item.course)) {
            seenIds.add(item.course);
            return true;
        }
        return false;
    });
  console.log(uniqueArr, 'vipul')


    const handleBtns = (e) => {
    let word=e.target.value;
    setActiveBtn(word); // Set active button value
    if(word === "General Questions"){
      //setCategory(accordion)
      const filtered = accordion.filter(item=>item.course === "General Questions");
      setCategory(filtered)
    }
    else if(word === "Course & Learning Questions") {
      const filtered = accordion.filter(item=>item.course === "Course & Learning Questions");
      setCategory(filtered)
    }
    else if(word === "Benefits & Future Scope") {
      const filtered = accordion.filter(item=>item.course === "Benefits & Future Scope");
      setCategory(filtered)
    }
  }
 
  return (
    <>
 
        <div className='flex gap-5'>          
        <div className='flex flex-col float-left w-2/5'>
        <div>
           <h3 className="heading_details text-left ">
           Frequently Asked <br />
             <span className="relative">
             Ques
                <span className="absolute -bottom-1  left-0 h-1 w-full bg-[var(--secondary-color)]"></span> 
              </span>tions
             
            </h3>
            <p className="my-5 text-sm text-left">
           Find <strong>everything</strong> you need to know about Abacus <br /><strong>learning</strong>, its <strong>benefits</strong>, and how Smart Abacus can <br /> help your <strong>child succeed</strong>.
            </p>
        </div>
            {/* <button value="General Questions" onClick={handleBtns}  className={`${activeBtn === 'General Questions' ? 'active' : ''} faq text-left py-2 px-4 flex justify-between`}>All <IoIosArrowRoundForward className='icon' /></button> */}
            {
                uniqueArr.map((btn)=><button value={btn.course} onClick={handleBtns} className={`${activeBtn === btn.course ? 'active' : ''} faq text-left py-2 px-4 flex justify-between`}>{btn.course} <IoIosArrowRoundForward className='icon' /></button>)
            }
           
          </div>
 
          <div className='w-full'>
            {/* {category.map((item) => (
              <div key={item.id}>
                <div className='flex gap-5'>
                  <img src={item.linkImg} alt={item.name}  className='w-24 h-24 rounded-full'/>
                  <div>
                    <h1>{item.name}</h1>
                    <p>{item.kind}</p>
                     <p>{item.info} </p>
                  </div>
                </div>
              </div>
            ))} */}
            <Accordion category={category}/>
          </div>
        </div>

    </>
  )
}

export default FAQ