import React from 'react'
import { imageBanner } from '../../assets/common/config'
import { CgOverflow } from 'react-icons/cg';
import CustomButton from './CustomButton';
const Banner = () => {
  
  return (
   
    <div className='relative w-full -z-10'>
        <img src={imageBanner || null} alt="Example"  className='w-full'/>
        <div className='bannerStyle banner-clip-container opacity-90'>
            <div className='contentStyle'>
                <h3 className='heading_h3 uppercase'>Master Math with <br/> the Power of <br/> Abacus!</h3>
               <p className='text-[var(--secondary-color)] text-left'>Join our expert-led online abacus classes and boost your mental calculation speed.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer" ><CustomButton color='--secondary-color' label='Enroll online'/></a>
            </div>
            <span  className='bannerStip absolute'>

</span>
        </div>
    </div>
  )
}

export default Banner