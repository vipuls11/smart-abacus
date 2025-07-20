
import CustomButton from '../child-component/CustomButton'
import { NavLink } from 'react-router-dom'
import { imageUrl, User } from '../../assets/common/config'
import { LuUser } from 'react-icons/lu'
import { IoBookOutline } from 'react-icons/io5'
import { CiSettings } from 'react-icons/ci'
import { FiLogOut } from 'react-icons/fi'
import { useState } from 'react'
const MainHeader = () => {
    const [user, setUser] = useState('vipul Vishwakarma');
  return (
    <div>
        <div className='flex items-center justify-evenly bg-transparent' style={{ boxShadow: '0px 1px 4px 0px #00000040' }}> 
       <div>
        <img src={imageUrl || null} alt="Example"  className='logo'/>
       </div>
       <div className='lg:block hidden'>
         <ul className='text-black inline-flex items-center gap-5'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Course</NavLink>
                    </li>
                    <li>
                        <NavLink to="/achievements" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Achievement</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[var(--secondary-color)] font-bold" : ""}>Contact Us</NavLink>
                    </li>
                </ul>
       </div>
       <div>
  {!user ? (
    <CustomButton color="--primary-color" label="Sign In" />
  ) : (
    <div className="flex items-center gap-2">
      <p>My Learning</p>
      <div className="relative group">
        <img src={User} alt="User" className="cursor-pointer" />
        <div className="absolute top-10 right-0 hidden group-hover:block bg-[var(--footer-bg-color)] w-40 rounded shadow-md">
          <ul className="space-y-1">
            <li className="hover:bg-white hover:text-black p-2">
              <NavLink to="/profile" className="flex gap-3 items-center">
                <LuUser /> Profile
              </NavLink>
            </li>
            <li className="hover:bg-white hover:text-black p-2">
              <NavLink to="" className="flex gap-3 items-center">
                <IoBookOutline /> My Learning
              </NavLink>
            </li>
            <li className="hover:bg-white hover:text-black p-2">
              <NavLink to="" className="flex gap-3 items-center">
                <CiSettings /> Settings
              </NavLink>
            </li>
            <li className="hover:bg-white hover:text-black p-2">
              <NavLink to="" className="flex gap-3 items-center">
                <FiLogOut /> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )}
</div>

    </div>
    </div>
  )
}

export default MainHeader