import React, { useRef, useState } from 'react'
import { RiCameraAiLine } from 'react-icons/ri'
import CustomButton from './child-component/CustomButton'
import { User } from '../assets/common/config'

const Profile = () => {
    const fileInputRef = useRef(null);
  const [userImage, setUserImage] = useState(User);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserImage(imageUrl);
    }
  };
  return (
    <section className='w-screen h-screen flex flex-col items-center justify-center place-items-center'>
      <div className='w-[639px] contact-main'>
      <h5 className='contact-us text-left mb-3'>My Profile</h5>
      <form action="" method="post">  
            <div className="w-fit mb-10 relative">
            <img src={userImage} alt="User" className="cursor-pointer w-24 h-24 " />
             {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
       {/* Camera icon */}
                <span className='camera-profile absolute -bottom-3 -right-3' onClick={handleIconClick}>
                <RiCameraAiLine />
                </span>
            </div>

            <div className='grid grid-cols-2 gap-5 mb-3'>
                <div>
                    <input type="text" placeholder='Ajay'  className='contact-input'/>
                </div>
                <div>
                    <input type="text" placeholder='Khole' className='contact-input'/>
                </div>
            </div>
            <div className='mb-3'>
                <input type="email" name="" id="" placeholder='ajay@gmail.com' className='contact-input'/>
            </div>
            <div className='mb-3'>
                <input type="text" name=''  placeholder='9987654123' className='contact-input'/>
            </div>
            <div className='mb-3'>
                <input type="text"  placeholder='English' className='contact-input'/>
            </div>

            <CustomButton width="100%" label="submit" color="--primary-color"/>
        </form>
      </div>
    </section>
  )
}

export default Profile