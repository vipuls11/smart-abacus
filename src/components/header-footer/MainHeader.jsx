
import CustomButton from '../child-component/CustomButton'
import { NavLink } from 'react-router-dom'
import { imageUrl } from '../../assets/common/config'
const MainHeader = () => {
    
  return (
    <div>
        <div className='flex items-center justify-evenly bg-transparent' style={{ boxShadow: '0px 1px 4px 0px #00000040' }}> 
       <div>
        <img src={imageUrl || null} alt="Example"  className=''/>
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
        <CustomButton color="--primary-color" label="Sign In"/>
       </div>
    </div>
    </div>
  )
}

export default MainHeader