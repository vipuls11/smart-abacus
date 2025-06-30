import React from 'react'
import { imageNotfound } from './assets/common/config'

const Pagenotfound = () => {
  return (
    <div className='flex w-ful h-[80vh] items-center justify-center'>
       <div>
        <img src={imageNotfound || null} alt="Example"  className=''/> 
        <p className='pagenotfound_content'>This page under construction.</p>
       </div>
    </div>
  )
}

export default Pagenotfound