import React from 'react'
import CustomButton from '../components/child-component/CustomButton'

const ForgetPassword = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center place-items-center'>
    <div className='w-[639px] contact-main'>
    <h5 className='contact-us text-center mb-5'>Forgot Password</h5>
    <form action="" method="post">
          <div className='mb-3'>
              <input type="text" name="" id="" placeholder='Enter Your New Password' className='contact-input'/>
          </div>
          <div className='mb-3'>
              <input type="text" name=''  placeholder='Re-type New Password' className='contact-input'/>
          </div>   
          <CustomButton width="100%" label="submit" color="--primary-color"/>
      </form>
    </div>
  </section>
  )
}

export default ForgetPassword