// import React from 'react'
import box from '../assets/img/box.png'
import d from '../assets/img/d.png'
import rocket from '../assets/img/rocket.png'
import graph from '../assets/img/graph.png'
import color from '../assets/img/color 2.png'
import ws from '../assets/img/wshade.png'

// const Hero = () => {
//   return (
//     <>
     
//      <div className='flex h-full w-full'>
//        <div className="left w-[50%] h-full text-white flex flex-col gap-[1.5vw] justify-center pl-[54px] pb-[4vw] ">
//         <h1 className='text-[4vw] z-10 w-[94%]  font-semibold leading-[4vw]'>
//           <span className='font-serif text-[4.3vw] italic font-medium'>Creative Solutions</span>  for a  Digital-First World</h1>
//         <p className='w-[95%] z-10'>We help brands stand out with impactful design, smart digital strategies, and engaging content. From websites and branding to social media and marketing campaigns, our team brings your vision to life with creativity and precision.</p>
//         <button className='contact w-[25%] z-10 rounded-full items-center h-[8%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>Book a call</button>
//       </div> 
//       <div className="right  w-[50%] flex flex-col justify-center
//       items-center pt-[0vw] pr-[7vw] gap-[2vw] relative">
//         <img  className='h-[15vw]  relative w-[13vw] z-10' src={d} alt="" />
//         <img src={ws} className='h-[28vw] top-[1vw] absolute  w-[14vw]' alt="" />
//         {/* <div className='h-[10vw] top-[18vw] w-[13vw] absolute shadow-[inset_0_-30px_40px_-20px_rgba(255,255,255,1)]'></div> */}
//         <img className='h-[12vw] w-[29vw] z-10' src={box} alt="" />
//       </div> 
//        <img  src={graph} className='w-[103.5vw] absolute bottom-0' alt="" />
//         <img src={color} className='absolute left-[-3vw] rotate-6 h-[45vw] w-[130vw] bottom-[-18vw]' alt="" />
//         <img src={color} className='absolute right-[13vw] top-[8vw] h-[23vw] w-[15vw] ' alt="" />
//         <img src={color} className='absolute rotate-180 right-[28vw] top-[8vw] h-[23vw] w-[15vw] ' alt="" />
//      </div>
      
//     </>
//   )
// }

// export default Hero

// res 

// import React from 'react';

// // Hero Component
// const Hero = () => {
//   return (
//     <div className='flex flex-col lg:flex-row h-full w-full'>
//       <div className="left w-full lg:w-[50%] h-full text-white flex flex-col gap-4 lg:gap-[1.5vw] justify-center px-6 py-8 md:px-12 md:py-12 lg:pl-[54px] lg:pb-[4vw]">
//         <h1 className='text-4xl md:text-[4vw] lg:text-[4vw] z-10 w-[50%] lg:w-[94%] font-semibold leading-tight lg:leading-[4vw]'>
//           <span className='font-serif text-5xl md:text-[4vw] lg:text-[4.3vw] italic font-medium'>Creative Solutions</span> for a Digital-First World
//         </h1>
//         <p className='w-[55%] lg:w-[95%] z-10 text-sm md:text-base'>
//           We help brands stand out with impactful design, smart digital strategies, and engaging content. From websites and branding to social media and marketing campaigns, our team brings your vision to life with creativity and precision.
//         </p>
//         <button className='contact w-32 md:w-40 lg:w-[25%] z-10 rounded-full h-12 lg:h-[8%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1'>
//           Book a call
//         </button>
//       </div>
      
//       <div className="right w-full lg:w-[50%] flex flex-col justify-center items-center py-8 px-6 md:py-12 lg:pt-[0vw] lg:pr-[7vw] gap-6 lg:gap-[2vw] relative">
//         <img 
//           className='h-32 md:h-48 lg:h-[15vw] w-28 md:w-40 lg:w-[13vw] z-10 relative' 
//           src={d} 
//           alt="D logo" 
//         />
//         <img 
//           src={ws} 
//           className='h-48 md:h-64 lg:h-[28vw] w-24 md:w-32 lg:w-[14vw] absolute top-2 lg:top-[1vw]' 
//           alt="shadow" 
//         />
//         <img 
//           className='h-24 md:h-36 lg:h-[12vw] w-56 md:w-80 lg:w-[29vw] z-10' 
//           src={box}
//           alt="box" 
//         />
//       </div>
      
//       <img 
//         src={graph} 
//         className='w-full lg:w-[103.5vw] absolute bottom-0 hidden md:block' 
//         alt="graph" 
//       />
//       <img 
//         src={color}
//         className='absolute left-[-3vw] rotate-6 h-64 md:h-96 lg:h-[45vw] w-full lg:w-[130vw] bottom-[-10vw] md:bottom-[-18vw] ' 
//         alt="color gradient" 
//       />
//       <img 
//         src={color}
//         className='absolute right-[5vw] md:right-[13vw] top-[4vw] md:top-[8vw] h-32 md:h-64 lg:h-[23vw] w-20 md:w-40 lg:w-[15vw] opacity-30 hidden ' 
//         alt="color gradient" 
//       />
//       <img 
//         src={color} 
//         className='absolute rotate-180 right-[15vw] md:right-[28vw] top-[4vw] md:top-[8vw] h-32 md:h-64 lg:h-[23vw] w-20 md:w-40 lg:w-[15vw] opacity-30 hidden ' 
//         alt="color gradient" 
//       />
//     </div>
//   );
// };
// export default Hero

// res 
const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row h-full w-full relative pt-20 md:pt-0'>
      {/* Left Section */}
      <div className="left w-full lg:w-[50%] h-full text-white flex flex-col gap-4 md:gap-6 lg:gap-[1.5vw] justify-center px-6 py-8 md:px-12 md:py-12 lg:pl-[54px] lg:mt-[4vw] relative z-10">
        <h1 className='text-[7vw] md:text-[5vw] lg:text-[4vw] z-10 w-full lg:w-[94%] font-semibold leading-[7.5vw] md:leading-[5.5vw] lg:leading-[4vw]'>
          <span className='font-serif text-[7.5vw] md:text-[5.5vw] lg:text-[4.3vw] italic font-medium'>Creative Solutions</span> for a Digital-First World
        </h1>
        <p className='w-full md:w-[85%] lg:w-[95%] z-10 text-[3.5vw] md:text-[2.2vw] lg:text-base leading-relaxed'>
          We help brands stand out with impactful design, smart digital strategies, and engaging content. From websites and branding to social media and marketing campaigns, our team brings your vision to life with creativity and precision.
        </p>
        <button className='contact p-[1vw] w-[35vw] md:w-[25vw] lg:w-[25%] z-10 rounded-full h-[10vw] md:h-[7vw] lg:h-[8%] shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)] mt-1 text-[3.5vw] md:text-[2.2vw] lg:text-base'>
          Book a call
        </button>
      </div>
      
      {/* Right Section */}
      <div className="right w-full lg:w-[50%] flex flex-col justify-center items-center py-8 px-6 md:py-12 lg:pt-[6vw] lg:pr-[7vw] gap-[4vw] md:gap-[3vw] lg:gap-[2vw] relative z-10">
        <img 
          className='h-[25vw] md:h-[21vw] lg:h-[15vw] w-[22vw] md:w-[20vw] lg:w-[13vw] z-10 relative' 
          src={d}
          alt="D logo" 
        />
        <img 
          src={ws} 
          className='h-[43vw] md:h-[33.3vw] lg:h-[28vw] w-[20vw] md:w-[20vw] lg:w-[14vw] absolute top-[2vw] md:top-[1.5vw] lg:top-[1vw]' 
          alt="shadow" 
        />
        <img 
          className='h-[20vw] md:h-[20vw] lg:h-[12vw] w-[48vw] md:w-[42vw] lg:w-[29vw] z-10' 
          src={box}
          alt="box" 
        />
      </div>
      
      {/* Background Images - All screens */}
      <img 
        src={graph}
        className='w-[103.5vw] absolute bottom-0 left-0' 
        alt="graph" 
      />
      <img 
        src={color}
        className='absolute left-[-3vw] rotate-6 h-[45vw] w-[130vw] bottom-[-18vw]' 
        alt="color gradient" 
      />
      <img 
        src={color}
        className='absolute hidden lg:block right-[13vw] top-[1vw] h-[23vw] w-[15vw]' 
        alt="color gradient" 
      />
      <img 
        src={color} 
        className='absolute hidden lg:block rotate-180 right-[28vw] top-[1vw] h-[23vw] w-[15vw]' 
        alt="color gradient" 
      />
    </div>
  );
};
export default Hero