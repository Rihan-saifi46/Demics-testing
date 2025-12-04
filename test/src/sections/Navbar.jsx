// import React from 'react'
import logo from '../assets/img/logo.png'

// const Navbar = () => {
//   return (
//     <div className=' justify-between w-full flex px-[53px] py-[20px] 
//     text-white'>
//       <div className="logo">
//         <img className='h-[35px]' src={logo} alt="" />
//         {/* <p className='text-[2.4vw] font-bold'>Demics</p> */}
//       </div>
//       <div className="my-btn flex  items-center rounded-full px-[30px] gap-[34px] text-[1.4vw] font-semibold  shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]">
//         <span>Home</span>
//         <span>About Us</span>
//         <span>Services</span>
//         <span>Work</span>
//         <span>Blog</span>
//       </div>
//       <div className="btn">
//         <button className='contact uppercase px-[28px] py-[10px]
//         text-[1.4vw] rounded-full shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]'>Contact us</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

// res 
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='justify-between w-full flex px-[20px] sm:px-[40px] lg:px-[53px] py-[20px] text-white  relative z-50'>
        {/* Logo */}
        <div className="logo flex items-center">
          <div className='h-[30px] sm:h-[32px] lg:h-[35px] w-[120px] sm:w-[130px] lg:w-[140px] rounded flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg'>
           <img src={logo} alt="" />
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center rounded-full px-[30px] gap-[34px] text-[1.4vw] font-semibold my-btn  backdrop-blur-sm shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]">
          <span className='cursor-pointer hover:text-purple-600 transition-colors'>Home</span>
          <span className='cursor-pointer hover:text-purple-600 transition-colors'>About Us</span>
          <span className='cursor-pointer hover:text-purple-600 transition-colors'>Services</span>
          <span className='cursor-pointer hover:text-purple-600 transition-colors'>Work</span>
          <span className='cursor-pointer hover:text-purple-600 transition-colors'>Blog</span>
        </div>

        {/* Desktop Contact Button - Hidden on mobile/tablet */}
        <div className="hidden lg:block btn">
          <button className=' transition-colors uppercase px-[28px] py-[10px] text-[1.4vw] rounded-full  video shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]'>
            Contact us
          </button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          {/* Mobile Contact Button */}
          
          
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className='p-2 rounded-lg bg-gradient-to-r backdrop-blur-sm my-btn transition-colors'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
          <button className='hidden md:block transition-colors uppercase px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full video shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]'>
            Contact
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      <div  
        className={`lg:hidden fixed top-[70px] sm:top-[75px] left-0 right-0 backdrop-blur-lg border-b transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className='flex flex-col items-center gap-6 py-8 text-white'>
          <span className='text-lg sm:text-xl font-semibold cursor-pointer hover:text-purple-300 transition-colors'>
            Home
          </span>
          <span className='text-lg sm:text-xl font-semibold cursor-pointer hover:text-purple-300 transition-colors'>
            About Us
          </span>
          <span className='text-lg sm:text-xl font-semibold cursor-pointer hover:text-purple-300 transition-colors'>
            Services
          </span>
          <span className='text-lg sm:text-xl font-semibold cursor-pointer hover:text-purple-300 transition-colors'>
            Work
          </span>
          <span className='text-lg sm:text-xl font-semibold cursor-pointer hover:text-purple-300 transition-colors'>
            Blog
          </span>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-[70px] sm:top-[75px]"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};
export default Navbar