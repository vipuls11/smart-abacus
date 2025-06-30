import React from 'react'
import { imageBanner } from '../../assets/common/config'
import { CgOverflow } from 'react-icons/cg';
import CustomButton from './CustomButton';
const Banner = () => {
      const bannerStyle = {
      //backgroundColor: 'var( --primary-color)',
     //clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
   //background: 'radial-gradient(58.06% 83.58% at 35.87% 52.55%, rgba(0, 58, 108, 0) 0%, rgba(0, 58, 108, 0.25) 100%)',
  width: '700px',
  height: '600px',
  position: 'absolute',
  bottom: '0px',
  color: 'var(--White)',
  left: '0px',
  };
   const contentStyle = {
    position: 'absolute',
        width: '536px',
        height: '285px',
    top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
    zIndex: 2, // keep content above clip path layer
    padding: '20px',
    textAlign: 'left',
  };  
const bannerStip = {
  background: 'linear-gradient(180deg, #F8A323 0%, rgba(248, 163, 35, 0.7) 73.19%, rgba(248, 163, 35, 0) 96.54%)',
  width:'41.75px',
  height:'504.61px',
   transform: 'rotate(-10deg)',
    position: 'absolute',
         right: '20px',
    top: '12%',
    zIndex: 3
};



  return (
   
    <div className='relative w-full -z-10'>
        <img src={imageBanner || null} alt="Example"  className='w-full'/>
        <div style={bannerStyle} className='banner-clip-container opacity-90'>
            <div className='' style={contentStyle}>
                <h3 className='heading_h3 uppercase'>Master Math with <br/> the Power of <br/> Abacus!</h3>
               <p className='text-[var(--secondary-color)] text-left'>Join our expert-led online abacus classes and boost your mental calculation speed.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer" ><CustomButton color='--secondary-color' label='Enroll online'/></a>
            </div>
            <span style={bannerStip} className='absolute'>

</span>
        </div>
    </div>
  )
}

export default Banner