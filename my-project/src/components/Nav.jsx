import { hamburger } from "../assets/icons";
import {Link} from "react-router-dom";
const Nav = () => {
  return (
    <header className='px-4 py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container mx-auto'>
        <a href='/' className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden'>
          <img src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/maintenance.png" alt='Logo' className='w-12 h-12' />
          <span className='text-3xl font-bold'>Fix It</span>
        </a>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden'>
          <a href='/About'>About</a>
          <span>                 </span>
          <a href='/Contact'>Contact</a>
          <span>                 </span>
          <a href='/Complaint'>Complaint</a>
          <span>                 </span>
          <a href='/Signup'>Sign In</a>
          <span>/</span>
          <a href='/Login'>Sign Up</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
